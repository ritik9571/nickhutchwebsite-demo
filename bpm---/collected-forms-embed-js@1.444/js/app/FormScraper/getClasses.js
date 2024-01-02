'use es6';

const WORD_PRESS_CONTACT_FORM = 'wpcf7-form';
const REMOVE_CLASSES = ['sent', 'invalid', 'failed', 'spam'];
export default function getClasses(form) {
    if (!form.className) {
        return '';
    }

    if (form.className.indexOf(WORD_PRESS_CONTACT_FORM) > -1) {
        return `.${form.className}`.split(' ').filter(word => word.length).filter(word => REMOVE_CLASSES.indexOf(word) === -1).join(', .');
    } else {
        return `.${form.className}`.split(' ').join(', .');
    }
}