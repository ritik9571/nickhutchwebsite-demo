'use es6';

import {
    debug
} from 'collected-forms-embed-js/utils/logger';
import {
    peek
} from 'collected-forms-embed-js/utils/utils';
import Scraper from 'collected-forms-embed-js/app/FormScraper';
import Builder from 'collected-forms-embed-js/app/SubmissionBuilder';

class FormSubmissionHandler {
    getState(formEl) {
        return Promise.resolve({
            formEl
        });
    }

    scrapeForm(state) {
        const {
            formEl
        } = state;
        return Object.assign({}, state, {
            formData: Scraper.scrape(formEl)
        });
    }

    buildSubmission(state) {
        const {
            formData
        } = state;
        return Builder.build(formData).then(submission => Object.assign({}, state, {
            submission
        }));
    }

    buildSubmissionFromForm(formEl) {
        debug('Submission event on: ', formEl);
        return this.getState(formEl).then(this.scrapeForm).then(peek(({
            formData
        }) => debug('Scraped form: ', formData))).then(this.buildSubmission).then(peek(({
            submission
        }) => debug('Built submission: ', submission))).then(({
            submission
        }) => submission);
    }

}

export default new FormSubmissionHandler();