'use es6';

import {
    debug
} from 'collected-forms-embed-js/utils/logger';
export const Normal = {
    test: formEl => {
        try {
            return typeof formEl.addEventListener === 'function';
        } catch (e) {
            return false;
        }
    },
    bind: (formEl, handler) => {
        debug('Bound to submit event on form:', {
            formEl
        });
        formEl.addEventListener('submit', () => handler(formEl), false);
    }
};