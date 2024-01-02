/* hs-eslint ignored failing-rules */

/* eslint-disable prefer-promise-reject-errors */
'use es6';

import {
    debug
} from 'collected-forms-embed-js/utils/logger';
import KeyedError from 'forms-embed-utils-lib/reporting/KeyedError';
import {
    FORM_SUBMISSION_WITH_GET_FAILED
} from 'collected-forms-embed-js/constants/Errors';
import RequestStatus from 'collected-forms-embed-js/lib/RequestStatus';
import {
    getSubmissionUrl
} from 'collected-forms-embed-js/utils/domains';
const ROUTE = 'collected-forms/submit/form';

class Submitter {
    constructor({
        isQa = false,
        hublet = ''
    } = {}) {
        this.url = `${getSubmissionUrl(isQa, hublet)}/${ROUTE}`;
    }

    handleSubmitSuccess() {
        debug(`Successfully submitted form submission`);
        return Promise.resolve();
    }

    handleSubmitExpectedFailure() {
        debug('Deleting saved submission because we got a 400 response from the server');
        return Promise.resolve();
    }

    submitWithGet(serializedSubmission) {
        return new Promise((resolve, reject) => {
            const encodedSubmission = encodeURIComponent(JSON.stringify(serializedSubmission));
            const image = new Image();
            image.src = `${this.url}/submit.gif?formSubmission=${encodedSubmission}`;

            image.onload = () => {
                return resolve(this.handleSubmitSuccess());
            };

            image.onerror = err => {
                return reject(new KeyedError(FORM_SUBMISSION_WITH_GET_FAILED, err));
            };
        });
    }

    submitWithXHR(serializedSubmission) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            const requestStatus = new RequestStatus(request);

            request.onreadystatechange = () => {
                const isRequestExpectedFailure = requestStatus.getStatus() >= 400 && requestStatus.getStatus() < 500;

                if (!requestStatus.isDone()) {
                    return null;
                }

                if (requestStatus.isSuccessful()) {
                    return resolve(this.handleSubmitSuccess());
                } else if (isRequestExpectedFailure) {
                    return resolve(this.handleSubmitExpectedFailure());
                }

                debug(`Failed to submit form via XHR. Got HTTP ${requestStatus.getStatus()} for submission`);
                return reject();
            };

            request.open('POST', this.url, true);
            request.setRequestHeader('Content-type', 'application/json');
            request.send(JSON.stringify(serializedSubmission));
        });
    }

    submit(submission) {
        const serializedSubmission = submission.serialize();
        debug(`Submitting form submission to ${this.url}`, serializedSubmission);
        return this.submitWithXHR(serializedSubmission).catch(() => {
            debug('Falling back to submission with GET');
            return this.submitWithGet(serializedSubmission);
        });
    }

}

export default Submitter;