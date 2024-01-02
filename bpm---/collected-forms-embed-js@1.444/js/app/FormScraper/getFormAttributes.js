'use es6';

const getFormAttributes = formEl => {
    try {
        return {
            id: formEl.getAttribute('id'),
            class: formEl.getAttribute('class'),
            action: formEl.getAttribute('action')
        };
    } catch (e) {
        // Customer has messed with native functions. Unable to get.
        return {};
    }
};

export default getFormAttributes;