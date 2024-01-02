'use es6';

import {
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
import {
    FieldKeys
} from 'collected-forms-embed-js/lib/SubmissionField';
const MARKED_KEY = 'data-leadin-telephone';
const KNOWN_EXTRA_CHARS_TEST = /\+| |\(|\)|\.|-|x/g;
const TEL_FIELD_TYPE = 'tel';
const KNOWN_CONTAINING_LABELS = ['telephone', 'phone', 'your number', 'contact number'];
const KNOWN_NAMES = ['tel', 'tele', 'phone', 'telephone', 'your-phone', 'phone-number', 'phonenumber'];

class PhoneNumber {
    stripExtraCharacters(field) {
        return field.get(FieldKeys.VALUE).replace(KNOWN_EXTRA_CHARS_TEST, '');
    }

    isMarkeField(field) {
        return field.get(FieldKeys.ATTRIBUTES)[MARKED_KEY];
    }

    isValidPhoneValue(field) {
        const strippedValue = this.stripExtraCharacters(field);
        return !isNaN(strippedValue) && strippedValue.length > 5;
    }

    isTelTypeField(field) {
        return field.get(FieldKeys.TYPE) === TEL_FIELD_TYPE;
    }

    isContainingLabeledField(field) {
        return KNOWN_CONTAINING_LABELS.filter(label => field.getLowerCased(FieldKeys.LABEL).indexOf(label) > -1).length > 0;
    }

    isNamedField(field) {
        return KNOWN_NAMES.filter(name => field.isNameEqual(name)).length > 0;
    }

    findBest(fields) {
        const validPhoneValueFields = fields.filter(this.isValidPhoneValue.bind(this));
        return find(fields, this.isMarkeField) || find(validPhoneValueFields, this.isTelTypeField) || find(validPhoneValueFields, this.isContainingLabeledField) || find(validPhoneValueFields, this.isNamedField) || undefined;
    }

}

export default new PhoneNumber();