'use es6';

import {
    FieldKeys
} from 'collected-forms-embed-js/lib/SubmissionField';
import {
    debug
} from 'collected-forms-embed-js/utils/logger'; // regex

const HAS_DATE_FORMAT_PATTERN_REG_EXP = /[dmy]+[-\s/.]?[dm]+[-\s/.]?[dmy]+/i;
const IS_DATE_VALUE_REG_EXP = /(^(\d{2,4})[-\s./]?)(\d{2})[-\s./]?(\d{2,4})/;
const HAS_DISALLOWED_CHARACTERS_REG_EXP = /[^-\d\s./]/g; // constants

const CF_DATE_FORMAT_CONFIG = 'data-hs-cf-date-format';
const nativeDateInputTypes = {
    INPUT_TYPE_DATE: 'date',
    INPUT_TYPE_DATETIME: 'datetime-local'
};

class DateParser {
    // input checks
    isBuiltInDateInputField(field) {
        return field.get(FieldKeys.TYPE) === nativeDateInputTypes.INPUT_TYPE_DATE || field.get(FieldKeys.TYPE) === nativeDateInputTypes.INPUT_TYPE_DATETIME;
    }

    isConfiguredCustomDateInputField(field) {
        return field.get(FieldKeys.ATTRIBUTES) ? field.get(FieldKeys.ATTRIBUTES)[CF_DATE_FORMAT_CONFIG] : false;
    }

    indicatesADateFormatInPlaceholder(field) {
        return field.get(FieldKeys.ATTRIBUTES) ? HAS_DATE_FORMAT_PATTERN_REG_EXP.test(field.get(FieldKeys.ATTRIBUTES)['placeholder'] || '') : false;
    }

    indicatesADateFormatInLabel(field) {
        return HAS_DATE_FORMAT_PATTERN_REG_EXP.test(field.get(FieldKeys.LABEL) || '');
    }

    isCustomDateInputField(field) {
        return field.get(FieldKeys.TYPE) === 'text' && (this.indicatesADateFormatInPlaceholder(field) || this.indicatesADateFormatInLabel(field));
    }

    isDateInputField(field) {
        return this.isBuiltInDateInputField(field) || this.isConfiguredCustomDateInputField(field) || this.isCustomDateInputField(field);
    } // format utils


    extractFormat(str) {
        return HAS_DATE_FORMAT_PATTERN_REG_EXP.exec(str.trim().toUpperCase())[0] || '';
    }

    getCustomDateInputFieldFormat(field) {
        if (this.indicatesADateFormatInPlaceholder(field)) {
            return this.extractFormat(field.get(FieldKeys.ATTRIBUTES)['placeholder']);
        }

        return this.extractFormat(field.get(FieldKeys.LABEL));
    } // helpers


    hasEmptyValue(field) {
        return !field.get(FieldKeys.VALUE);
    }

    getDateComponentsUsingIndex(value, indexOne, indexTwo) {
        return [value.substring(0, indexOne), value.substring(indexOne, indexTwo), value.substring(indexTwo, value.length)];
    }

    getStandardDateString(value, format) {
        const trimmedValue = value.trim();

        if (IS_DATE_VALUE_REG_EXP.test(trimmedValue) && !HAS_DISALLOWED_CHARACTERS_REG_EXP.test(trimmedValue) && format) {
            const [yearFormatComponent, monthFormatComponent, dayFormatComponent] = [/y{2,4}/i, /mm/i, /dd/i].map(r => format.match(r));
            const year = yearFormatComponent ? trimmedValue.substring(yearFormatComponent.index, yearFormatComponent.index + yearFormatComponent[0].length) : null;
            const month = monthFormatComponent ? trimmedValue.substring(monthFormatComponent.index, monthFormatComponent.index + 2) : null;
            const day = dayFormatComponent ? trimmedValue.substring(dayFormatComponent.index, dayFormatComponent.index + 2) : null;
            const dateString = `${year}-${month}-${day}`;

            if (day && month && year && new Date(dateString).toString() !== 'Invalid Date') {
                return dateString;
            }
        }

        return null;
    }

    parseWithFormat(value, format) {
        return this.getStandardDateString(value, format);
    }

    performBestParse(value, format) {
        let finalValue;

        try {
            finalValue = this.parseWithFormat(value, format);
        } catch (err) {
            debug(`Could not parse value ${value} with format ${format}, returning it instead.`);
        } finally {
            finalValue = finalValue || value;
        }

        return finalValue;
    }

    parseDateInputFieldValue(field) {
        if (this.isBuiltInDateInputField(field)) {
            return field.get(FieldKeys.VALUE);
        }

        if (this.isConfiguredCustomDateInputField(field)) {
            return this.performBestParse(field.get(FieldKeys.VALUE), field.get(FieldKeys.ATTRIBUTES)[CF_DATE_FORMAT_CONFIG].trim());
        }

        if (this.isCustomDateInputField(field)) {
            return this.performBestParse(field.get(FieldKeys.VALUE), this.getCustomDateInputFieldFormat(field));
        }

        return field.get(FieldKeys.VALUE);
    }

}

export default new DateParser();