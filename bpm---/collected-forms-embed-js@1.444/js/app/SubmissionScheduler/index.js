'use es6';

import {
    TIMEOUT_TO_SUBMIT
} from 'collected-forms-embed-js/constants/Submission';
import SubmissionStorage from './Storage';
import Submitter from 'collected-forms-embed-js/app/SubmissionSubmitter';

class Scheduler {
    constructor({
        isQa = false,
        hublet = ''
    } = {}) {
        this.seenMap = {};
        this.isSubmitting = false;
        this.timeoutToSubmit = null;
        this.submitter = new Submitter({
            isQa,
            hublet
        });
    }

    flushScheduledSubmission() {
        const storedSubmission = SubmissionStorage.get();

        if (!storedSubmission || this.isSubmitting) {
            return Promise.resolve();
        }

        this.isSubmitting = true;
        return this.submitter.submit(storedSubmission).then(() => {
            this.isSubmitting = false;
            SubmissionStorage.clear();
        });
    }

    setTimeoutToSubmit() {
        return new Promise((resolve, reject) => {
            if (this.timeoutToSubmit) {
                clearTimeout(this.timeoutToSubmit);
            }

            this.timeoutToSubmit = setTimeout(() => {
                this.flushScheduledSubmission().then(resolve).catch(reject);
            }, TIMEOUT_TO_SUBMIT);
        });
    }

    scheduleSubmit(submission) {
        if (this.seenMap[submission.getHash()]) {
            return Promise.resolve();
        }

        SubmissionStorage.add(submission);
        this.seenMap[submission.getHash()] = true;
        return this.setTimeoutToSubmit();
    }

}

export default Scheduler;