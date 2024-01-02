'use es6';

import getId from './getId';
import getClasses from './getClasses';
import extractFieldData from './extractFieldData';
import getFormAttributes from './getFormAttributes';
import {
    reset
} from './usedText';
export default class Scrapper {
    static scrape(formEl) {
        const result = {
            id: getId(formEl),
            classes: getClasses(formEl),
            fields: extractFieldData(formEl),
            attributes: getFormAttributes(formEl)
        };
        reset();
        return result;
    }

}