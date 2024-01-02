'use es6';

import {
    getInputIdentifier
} from './utils';
import getLabel from './getLabel';
import getInputAttributes from './getInputAttributes';
import SafeDomMethods from 'collected-forms-embed-js/lib/SafeDomMethods';
const DISALLOWED_INPUT_TYPES = ['submit', 'button', 'hidden', 'radio', 'password', 'reset', 'image'];

function getInputValue({
    type,
    value,
    checked
}) {
    if (type === 'checkbox') {
        return checked ? 'Checked' : 'Not Checked';
    } else if (type === 'file') {
        return value.replace('C:\\fakepath\\', ''); // remove fake path from file name
    } else {
        return typeof value !== 'string' ? String(value) : value;
    }
}

function isAllowedTextInput(element) {
    return DISALLOWED_INPUT_TYPES.indexOf(element.type) === -1 && element.style.display !== 'none';
}

export default function getInputFields(formEl) {
    return Array.prototype.slice.call(SafeDomMethods.elementQuerySelectorAll(formEl, 'input, textarea')).filter(isAllowedTextInput).reduce((memo, inputEl) => {
        return Object.assign({}, memo, {
            [getInputIdentifier(inputEl)]: {
                type: inputEl.type,
                name: inputEl.name,
                id: inputEl.id,
                value: getInputValue(inputEl),
                label: getLabel(formEl, inputEl),
                attributes: getInputAttributes(inputEl)
            }
        });
    }, {});
}