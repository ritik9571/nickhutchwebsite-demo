'use es6';

import {
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
const SubmissionContactFieldsKeys = {
    EMAIL: 'email',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    PHONE_NUMBER: 'phone'
};
const RequiredFields = [SubmissionContactFieldsKeys.EMAIL];

class SubmissionContactFields {
    setEmailField(field) {
        if (field) {
            this[SubmissionContactFieldsKeys.EMAIL] = field;
        }

        return this;
    }

    setFirstNameField(field) {
        if (field) {
            this[SubmissionContactFieldsKeys.FIRST_NAME] = field;
        }

        return this;
    }

    setLastNameField(field) {
        if (field) {
            this[SubmissionContactFieldsKeys.LAST_NAME] = field;
        }

        return this;
    }

    setPhoneNumberField(field) {
        if (field) {
            this[SubmissionContactFieldsKeys.PHONE_NUMBER] = field;
        }

        return this;
    }

    getFields() {
        return [this[SubmissionContactFieldsKeys.EMAIL], this[SubmissionContactFieldsKeys.FIRST_NAME], this[SubmissionContactFieldsKeys.LAST_NAME], this[SubmissionContactFieldsKeys.PHONE_NUMBER]].filter(v => v);
    }

    hasRequiredFields() {
        return !find(RequiredFields, key => this[key] === undefined);
    }

}

export default SubmissionContactFields;