'use es6';

import {
    debug,
    warn
} from 'collected-forms-embed-js/utils/logger';
const NINJA_FORM_CLASS_NAME = 'nf-form-cont';
export const Ninja = {
    test: formEl => {
        try {
            return formEl.getAttribute('class').indexOf(NINJA_FORM_CLASS_NAME) > -1;
        } catch (e) {
            return false;
        }
    },
    bind: (formEl, handler) => {
        const submitContainer = formEl.querySelector('div.submit-container');

        if (!submitContainer) {
            warn('Cannot find matching submit button for Ninja Forms V3 form');
            return;
        }

        const submitInput = submitContainer.querySelector('input.ninja-forms-field');

        if (!submitInput) {
            warn('Cannot find matching submit button for Ninja Forms V3 form');
            return;
        }

        debug('Bound to submit button click event for Ninja forms v3 form:', {
            formEl
        });
        submitInput.addEventListener('click', () => handler(formEl), false);
    }
};