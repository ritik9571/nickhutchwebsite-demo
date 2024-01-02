'use es6';

import {
    getInputIdentifier,
    cleanName
} from './utils';
import getLabel from './getLabel';
import getInputAttributes from './getInputAttributes';
import SafeDomMethods from 'collected-forms-embed-js/lib/SafeDomMethods';

function getSelectValue(selectEl) {
    return Array.prototype.slice.call(SafeDomMethods.elementQuerySelectorAll(selectEl, 'option')).reduce((memo, option) => {
        const selectedValue = option.selected ? option.textContent : '';

        if (!selectedValue.length) {
            return memo;
        } // If not multi select just take first select


        if (!selectEl.multiple && memo.length) {
            return memo;
        }

        return [].concat(memo, [selectedValue]);
    }, []).join(', ');
}

export default function getSelectFields(formEl) {
    return Array.prototype.slice.call(SafeDomMethods.elementQuerySelectorAll(formEl, 'select')).reduce((memo, selectEl) => {
        const value = getSelectValue(selectEl);

        if (!value) {
            return memo;
        }

        return Object.assign({}, memo, {
            [getInputIdentifier(selectEl)]: {
                type: 'select',
                name: cleanName(selectEl.name),
                value,
                label: getLabel(formEl, selectEl),
                attributes: getInputAttributes(selectEl)
            }
        });
    }, {});
}