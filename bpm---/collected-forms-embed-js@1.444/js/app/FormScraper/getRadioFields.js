'use es6';

import {
    isArrayTypeName,
    getLabelByAttribute,
    cleanText,
    findParentByTagName
} from './utils';
import getLabel from './getLabel';
import getInputAttributes from './getInputAttributes';
import SafeDomMethods from 'collected-forms-embed-js/lib/SafeDomMethods';

function getRadioLabel(form, radio) {
    // Search for label by fieldset and legend
    const parentFieldSet = findParentByTagName(form, radio, 'fieldset');
    const legend = parentFieldSet && parentFieldSet.querySelector('legend');

    if (legend) {
        return cleanText(legend.textContent);
    } // check for a label with id of radio name


    const result = cleanText(getLabelByAttribute(form, radio, 'name'));

    if (result) {
        return result;
    }

    return getLabel(form, radio);
}

export default function getRadioFields(form) {
    return Array.prototype.slice.call(SafeDomMethods.elementQuerySelectorAll(form, 'input[type="radio"]')).reduce((memo, radio) => {
        if (radio.checked) {
            const identifier = isArrayTypeName(radio.name) ? radio.name.slice(0, -2) : radio.name;
            return Object.assign({}, memo, {
                [identifier]: {
                    type: radio.type,
                    name: radio.name,
                    value: getLabel(form, radio),
                    label: getRadioLabel(form, radio),
                    attributes: getInputAttributes(radio)
                }
            });
        }

        return memo;
    }, {});
}