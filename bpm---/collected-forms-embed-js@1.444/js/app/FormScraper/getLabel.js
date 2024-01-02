'use es6';

import {
    cleanText,
    getWrappingElementText,
    getClosestSiblingLabel,
    searchUpTreeForLabels,
    cleanName,
    getLabelByAttribute
} from './utils';
import {
    checkIfUsed
} from './usedText';
import {
    debug
} from 'collected-forms-embed-js/utils/logger';

const cleanLabel = text => {
    const cleanedText = cleanText(text);

    if (checkIfUsed(cleanedText)) {
        return '';
    }

    return cleanedText;
};

export default function getLabel(form, input) {
    let result = ''; // Get label by matching for attribute

    result = cleanLabel(getLabelByAttribute(form, input, 'id'));

    if (result.length) {
        return result;
    } // Get label by wrapping label element


    result = cleanLabel(getWrappingElementText(form, input, 'label'));

    if (result.length) {
        return result;
    } // Get label by name attribute


    result = cleanLabel(getLabelByAttribute(form, input, 'name'));

    if (result.length && input.type !== 'radio') {
        return result;
    } // search inputs siblings for label text


    result = cleanLabel(getClosestSiblingLabel(input));

    if (result.length) {
        return result;
    } // search wrapping paragraph


    result = cleanLabel(getWrappingElementText(form, input, 'p'));

    if (result.length) {
        return result;
    } // use placeholder


    const placeholderValue = input.getAttribute('placeholder') && cleanLabel(input.getAttribute('placeholder'));

    if (placeholderValue) {
        return placeholderValue;
    } // search up tree for labels


    result = cleanLabel(searchUpTreeForLabels(form, input));

    if (result.length) {
        return result;
    } // use inputs name


    if (input.getAttribute('name')) {
        const name = input.getAttribute('name');
        return cleanName(name);
    } // use id


    if (input.id) {
        return input.id;
    }

    debug('Cannot find anything that could even be a proxy for a label', form, input);
    return '';
}