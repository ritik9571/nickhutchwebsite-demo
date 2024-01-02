'use es6';

export default {
    test: formEl => {
        try {
            return formEl.id.indexOf('hsForm') === 0;
        } catch (e) {
            return false;
        }
    },
    getId: formEl => {
        return `#${formEl.id.split('_').slice(0, 2).join('_')}`;
    }
};