'use es6';

import {
    debug
} from 'collected-forms-embed-js/utils/logger';
const SQUARESPACE_ACTION = 'squarespace.com';
const MATCHER = /^[^_]+_([\d_]+)/;
export default {
    test: formEl => {
        try {
            return formEl.getAttribute('action').indexOf(SQUARESPACE_ACTION) > -1;
        } catch (e) {
            return false;
        }
    },
    getId: formEl => {
        try {
            const id = formEl.elements[0].id;
            const strippedId = id.match(MATCHER)[1];
            debug(`Swapping Squarespace form ID ${formEl.id} to field ${id} and cleaning to ${strippedId}`);
            return `#squarespace_${strippedId}`;
        } catch (e) {
            return '#SquarespaceForm';
        }
    }
};