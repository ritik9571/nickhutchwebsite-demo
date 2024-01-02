'use es6';

export default {
    test: () => {
        return true;
    },
    getId: formEl => {
        try {
            if (formEl.id) {
                return `#${formEl.id}`;
            } else if (formEl.attributes.id.value === '') {
                return '#';
            }

            return '';
        } catch (e) {
            return '';
        }
    }
};