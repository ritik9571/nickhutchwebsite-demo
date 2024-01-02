'use es6';

import {
    debug,
    logErrorBoundary,
    logStepError,
    logKeyedError
} from 'collected-forms-embed-js/utils/logger';
import {
    getPortalId,
    getEnv,
    getIsQa,
    getHublet,
    getProject,
    getPackageIdentifier
} from 'collected-forms-embed-js/utils/environment';
import {
    isUnsupportedBrowser
} from 'collected-forms-embed-js/utils/browser';
import {
    init as initRuntime,
    getUtk
} from 'collected-forms-embed-js/utils/runtime';
import {
    isEmbedError
} from 'collected-forms-embed-js/utils/error';
import StepError from 'collected-forms-embed-js/lib/StepError';
import {
    FORM_CAPTURE_DISABLED,
    BROWSER_NOT_SUPPORTED,
    MULTIPLE_COLLECTED_FORMS_RUNNING,
    ERROR_HANDLING_SUBMISSION,
    INVALID_PORTAL_ID,
    ERROR_FETCHING_CONFIG
} from 'collected-forms-embed-js/constants/Errors';
import {
    FORM_BIND,
    SUBMIT_EVENT,
    SUBMIT_SCHEDULE_EVENT,
    ERROR_CAUGHT
} from 'collected-forms-embed-js/constants/AnalyticsKeys';
import ConfigFetcher from 'collected-forms-embed-js/app/ConfigFetcher';
import Scheduler from 'collected-forms-embed-js/app/SubmissionScheduler';
import Binder from 'collected-forms-embed-js/app/FormBinder';
import EmbedErrorReporter from 'forms-embed-utils-lib/reporting/EmbedErrorReporter';
import FormSubmissionHandler from 'collected-forms-embed-js/app/FormSubmissionHandler';
import KeyedError from 'forms-embed-utils-lib/reporting/KeyedError';
import SafeDomMethods from './lib/SafeDomMethods';
import AnalyticsReporter from 'collected-forms-embed-js/app/AnalyticsReporter';
import {
    logClientError
} from './utils/logger';
const SENTRY_PROJECT_NAME = 'collected-forms-embed-js';
const instance = {
    initialized: false,
    formSubmissionHandler: FormSubmissionHandler,
    analyticsReporter: {
        reportCount: () => {}
    },
    errorReporter: {
        report: () => {},
        debug: () => {}
    }
};
const collectedForms = {
    initialState: {
        initialized: false,
        env: null,
        portalId: null,
        utk: null,
        browserIsSupported: false,
        config: {
            formCaptureEnabled: false
        }
    },

    init() {
        return this.getState().then(this.initRuntime).then(this.setupSafeDomMethods).then(this.attatchInstance).then(this.checkIfRunning).then(this.setEnvironment).then(this.setupErrorReporting).then(this.setupAnalyticsReporting).then(this.checkBrowserSupport).then(this.fetchConfig).then(this.submitStoredFormSubmission).then(this.checkFormCaptureEnabled).then(this.bindToForms).then(this.reportBindingToAnalytics).then(this.logState).catch(this.handleErrors);
    },

    getState() {
        return Promise.resolve(this.initialState);
    },

    initRuntime(state) {
        initRuntime();
        return Object.assign({}, state);
    },

    checkIfRunning(state) {
        if (!instance.initialized) {
            instance.initialized = true;
        } else {
            return Promise.reject(new StepError(MULTIPLE_COLLECTED_FORMS_RUNNING));
        }

        return state;
    },

    setupErrorReporting(state) {
        const {
            utk,
            portalId,
            isQa,
            hublet
        } = state;
        const bundle = getPackageIdentifier();
        const options = {
            utk,
            portalId,
            isQa,
            hublet
        };
        const errorReporter = new EmbedErrorReporter(SENTRY_PROJECT_NAME, bundle, options);
        instance.errorReporter = errorReporter.setup();
        return Object.assign({}, state);
    },

    setupAnalyticsReporting(state) {
        const {
            isQa,
            hublet
        } = state;
        const options = {
            isQa,
            hublet
        };
        instance.analyticsReporter = new AnalyticsReporter(getProject(), options);
        return state;
    },

    setupSafeDomMethods(state) {
        return SafeDomMethods.setup().then(state);
    },

    checkBrowserSupport(state) {
        return isUnsupportedBrowser() ? Promise.reject(new StepError(BROWSER_NOT_SUPPORTED)) : Object.assign({}, state, {
            browserIsSupported: true
        });
    },

    setEnvironment(state) {
        const env = getEnv();
        const isQa = getIsQa();
        const utk = getUtk();
        const portalId = getPortalId();
        const hublet = getHublet();

        if (isNaN(portalId)) {
            return Promise.reject(new StepError(`${INVALID_PORTAL_ID} - ${portalId}`));
        }

        return Object.assign({}, state, {
            env,
            isQa,
            hublet,
            utk,
            portalId
        });
    },

    fetchConfig(state) {
        const {
            isQa,
            hublet
        } = state;
        const options = {
            isQa,
            hublet
        };
        const configFetcher = new ConfigFetcher(state.portalId, options);
        return configFetcher.fetch().catch(res => {
            // TODO: Add monitoring here
            if (res && res.request && res.request.status) {
                const errKey = `${ERROR_FETCHING_CONFIG} - Status Code: ${res.request.status}`;
                return Promise.reject(new StepError(errKey));
            }

            return Promise.reject(new StepError(res));
        }).then(config => Object.assign({}, state, {
            config,
            configFetched: true
        }));
    },

    submitStoredFormSubmission(state) {
        const {
            isQa,
            hublet
        } = state;
        const options = {
            isQa,
            hublet
        };
        const scheduler = new Scheduler(options);
        return scheduler.flushScheduledSubmission().then(() => Object.assign({}, state, {
            submitedStoredFormSubmissions: true,
            scheduler
        }));
    },

    checkFormCaptureEnabled(state) {
        return !state.config.formCaptureEnabled ? Promise.reject(new StepError(FORM_CAPTURE_DISABLED)) : Object.assign({}, state);
    },

    bindToForms(state) {
        const formBinder = new Binder();
        formBinder.bind();
        formBinder.onBind(() => {
            state.instance().analyticsReporter.reportCount(FORM_BIND, 1);
        });
        formBinder.onSubmission(formEl => {
            state.instance().analyticsReporter.reportCount(SUBMIT_EVENT);
            state.instance().formSubmissionHandler.buildSubmissionFromForm(formEl).then(submission => {
                if (submission) {
                    state.instance().analyticsReporter.reportCount(SUBMIT_SCHEDULE_EVENT);
                    return state.scheduler.scheduleSubmit(submission);
                }

                return null;
            }).catch(err => state.instance().errorReporter.report(new KeyedError(ERROR_HANDLING_SUBMISSION, err)));
        });
        return Object.assign({}, state, {
            formBinder
        });
    },

    reportBindingToAnalytics(state) {
        const {
            formBinder
        } = state;

        if (formBinder.getNumFormsBound() > 0) {
            state.instance().analyticsReporter.reportCount(FORM_BIND, formBinder.getNumFormsBound());
        }

        return state;
    },

    handleErrors(err) {
        instance.analyticsReporter.reportCount(ERROR_CAUGHT);

        if (err instanceof StepError) {
            logStepError(err);
        } else if (err instanceof KeyedError) {
            logKeyedError(err);
            instance.errorReporter.report(err, {
                errorSource: 'embed',
                errorKey: err.key
            });
        } else if (isEmbedError(err)) {
            logErrorBoundary(`An error is preventing collected-forms from executing.`);
            instance.errorReporter.report(err, {
                errorSource: 'embed'
            }, 'report', {
                silent: true
            });
        } else {
            logClientError(err);
            instance.errorReporter.debug(err, {
                errorSource: 'client'
            });
        }

        return err;
    },

    attatchInstance(state) {
        return Object.assign({}, state, {
            instance: () => instance
        });
    },

    logState(state) {
        debug(`${getPackageIdentifier()} initialized: `, state);
        return state;
    },

    reset() {
        instance.initialized = false;
    }

};
export default collectedForms;