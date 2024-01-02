'use es6';

import {
    debug,
    warn
} from 'collected-forms-embed-js/utils/logger';
import SafeDomMethods from 'collected-forms-embed-js/lib/SafeDomMethods';
const UNBOUNCE_FORM_ACTION = '/fsg?pageId';
const UNBOUNCE_SUBMIT_ANCHOR_SELECTOR = 'a.lp-pom-button';
const UNBOUNCE_SUBMIT_BUTTON_SELECTOR = 'button[type="submit"]';
export const UnBounce = {
    test: formEl => {
        try {
            return formEl.getAttribute('action').indexOf(UNBOUNCE_FORM_ACTION) > -1;
        } catch (e) {
            return false;
        }
    },
    bind: (formEl, handler) => {
        const submitButtonEl = SafeDomMethods.querySelector(UNBOUNCE_SUBMIT_ANCHOR_SELECTOR) || SafeDomMethods.querySelector(UNBOUNCE_SUBMIT_BUTTON_SELECTOR);

        if (!submitButtonEl) {
            warn('Cannot find matching submit button for Unbounce form');
            return;
        }

        debug(`Bound to submit button click event for Unbounce form:`, {
            formEl
        });
        submitButtonEl.addEventListener('click', () => handler(formEl), false);
    }
};