/* hs-eslint ignored failing-rules */

/* eslint-disable hubspot-dev/no-confusing-browser-globals */
'use es6';

export default {
    test: formEl => {
        try {
            return formEl.getAttribute('action').indexOf('/fsg?') === 0;
        } catch (e) {
            return false;
        }
    },
    getId: () => {
        return `${location.hostname}${location.pathname}`;
    }
};