'use es6';

import {
    debug,
    warn
} from 'collected-forms-embed-js/utils/logger';
export const Weebly = {
    test: formEl => {
        try {
            return formEl.getAttribute('action').indexOf('weebly.com') > -1;
        } catch (e) {
            return false;
        }
    },

    /*
      Weebly forms don't have traditional submit buttons,
      they use an <a> instead - find that and bind our capture event to it
    */
    bind: (formEl, handler) => {
        const submitInput = formEl.querySelector('a');

        if (!submitInput) {
            warn('Cannot find matching submit button for Weebly form');
            return;
        }

        debug(`Bound to submit button click event for Weebly form`, {
            formEl
        });
        submitInput.addEventListener('click', () => handler(formEl), false);
    }
};