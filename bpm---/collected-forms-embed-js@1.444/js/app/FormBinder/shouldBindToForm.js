'use es6';

import {
    BOUND_FORM,
    IGNORE_FORM
} from './constants/attributes';
export default (formEl => {
    let isIgnoreAttrPresent = false;
    let isIgnoreClassPresent = false;
    let isAlreadyBound = false;

    try {
        const hasAttribute = formEl.hasAttribute(IGNORE_FORM) || formEl.hasAttribute(`data-${IGNORE_FORM}`);
        isIgnoreAttrPresent = hasAttribute;
        isIgnoreClassPresent = formEl.className.indexOf(IGNORE_FORM) > -1;
        isAlreadyBound = formEl.hasAttribute(BOUND_FORM) || formEl.hasAttribute(`data-${BOUND_FORM}`);
    } catch (err) {
        return true;
    }

    return !isIgnoreAttrPresent && !isIgnoreClassPresent && !isAlreadyBound;
});