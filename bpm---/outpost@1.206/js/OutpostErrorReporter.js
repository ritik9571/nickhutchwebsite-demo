'use es6';

import {
    getEmbedAppReportingUrl,
    getHubspotReportingUrl
} from './domain';
import {
    contains,
    extend,
    stringifyCookies
} from './util';

const getBaseUrl = ({
    isEmbedApp = false,
    env = 'PROD',
    hublet = ''
}) => {
    const isQa = env !== 'PROD';

    if (!isEmbedApp) {
        return getHubspotReportingUrl({
            isQa,
            hublet
        });
    }

    return getEmbedAppReportingUrl({
        isQa,
        hublet
    });
};

class OutpostErrorReporter {
    constructor(projectName, opts) {
        opts = opts || {};

        if (!projectName) {
            console.warn('The projectName parameter is required');
        }

        this.projectName = projectName;
        this.env = (opts.env || 'PROD').toUpperCase();
        this.hublet = opts.hublet || '';
        this.isEmbedApp = opts.isEmbedApp || false;
        this.level = (opts.level || 'ERROR').toUpperCase();
        this.disabled = opts.disabled || false;
        this.baseUrl = opts.baseUrl || getBaseUrl({
            isEmbedApp: this.isEmbedApp,
            env: this.env,
            hublet: this.hublet
        });
        this.tags = opts.tags || {};
        this.cookies = opts.cookies || {};
        this.user = opts.user || {};
    }

    bindToWindow(allowlistedDomains = [], blocklistedErrorMessages = []) {
        if (allowlistedDomains.length < 1) {
            console.warn('You need to specify allowlisted domains when binding to window errors or you will catch all page errors');
            return;
        }

        window.onerror = (message, url, line, column, error) => {
            if (url && contains(allowlistedDomains, url) && !contains(blocklistedErrorMessages, error.message) && message.toLowerCase() !== 'script error') {
                this.sendReport('error', message, url, error);
            }
        };
    }

    report(error, extraContext, options = {}) {
        if (error) {
            if (options.silent) {
                console.error(error);
            }

            this.sendReport('error', error.message, error.fileName, error, extraContext);
        }
    }

    reportMessage(message, extraContext, options = {}) {
        if (message) {
            if (options.silent) {
                console.error(message);
            }

            this.sendReport('info', message, window.location.href, undefined, extraContext);
        }
    }

    debug(error, extraContext) {
        if (error && this.level === 'DEBUG') {
            console.debug(error);
            this.sendReport('debug', error.message, error.fileName, error, extraContext);
        }
    }

    addTags(tags) {
        extend(this.tags, tags);
    }

    addCookies(cookies) {
        extend(this.cookies, cookies);
    }

    addUserContext(context) {
        extend(this.user, context);
    }

    sendReport(level, message, url, error, extraContext) {
        if (this.disabled) {
            console.warn('Not reporting error to Outpost because logging is disabled');
            return;
        }

        url = url || (window.document.currentScript ? window.document.currentScript.src : null) || window.location.href;
        const report = this.buildReport(level, message, url, error, extraContext);
        const uploadImage = new Image();
        const encodedReport = encodeURIComponent(JSON.stringify(report));
        uploadImage.src = `${this.baseUrl}/${this.projectName}/error.gif?report=${encodedReport}`;

        uploadImage.onload = () => {
            console.log(`Completed reporting error to ${this.projectName}`);
        };
    }

    buildReport(level, message, url, error, extraContext = {}) {
        const errorType = error ? error.name : 'Message';
        let trimmedExceptionMessage;

        if (error && error.message) {
            trimmedExceptionMessage = error.message.substring(0, 999);
        } else {
            trimmedExceptionMessage = message.substring(0, 999);
        }

        return {
            culprit: errorType,
            message: trimmedExceptionMessage,
            level,
            exception: [{
                type: errorType,
                value: error && error.stack && error.stack.substring(0, 999) || trimmedExceptionMessage,
                url
            }],
            request: {
                url: `${window.location.protocol}//${window.location.host + window.location.pathname}`,
                queryString: window.location.search.replace(/(^\?)/, ''),
                cookies: stringifyCookies(this.cookies)
            },
            environment: this.env,
            tags: extend(this.tags),
            user: this.user,
            extra: extraContext
        };
    }

}

export default OutpostErrorReporter;