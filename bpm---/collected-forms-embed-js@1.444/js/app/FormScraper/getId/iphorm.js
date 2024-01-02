'use es6';

export default {
    test: formEl => {
        try {
            return formEl.id.indexOf('iphorm') === 0;
        } catch (e) {
            return false;
        }
    },
    getId: () => ''
};