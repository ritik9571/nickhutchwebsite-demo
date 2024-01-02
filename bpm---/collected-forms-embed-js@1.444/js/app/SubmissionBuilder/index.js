'use es6';

import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import {
    values,
    isEqual,
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
import {
    debug
} from 'collected-forms-embed-js/utils/logger';
import {
    getUtk
} from 'collected-forms-embed-js/utils/runtime';
import {
    getPortalId,
    getPackageIdentifier
} from 'collected-forms-embed-js/utils/environment';
import {
    getUuid
} from 'collected-forms-embed-js/utils/utils';
import {
    SubmissionKeys,
    Submission
} from 'collected-forms-embed-js/lib/Submission';
import SubmissionField, {
    FieldKeys as SubmissionFieldKeys
} from 'collected-forms-embed-js/lib/SubmissionField';
import SubmissionContactFields from 'collected-forms-embed-js/lib/SubmissionContactFields';
import StepError from 'collected-forms-embed-js/lib/StepError';
import EmailParser from './parsers/Email';
import FirstNameParser from './parsers/FirstName';
import LastNameParser from './parsers/LastName';
import PhoneNumberParser from './parsers/PhoneNumber';
import DateParser from './parsers/DateParser';

class Builder {
    getState(_ref) {
        let {
            fields
        } = _ref,
        form = _objectWithoutPropertiesLoose(_ref, ["fields"]);

        return Promise.resolve({
            form,
            formFields: values(fields),
            submissionFields: [],
            submissionContactFields: new SubmissionContactFields(),
            submission: new Submission()
        });
    }

    createSubmissionFieldsFromFormFields(state) {
        const {
            formFields
        } = state;
        return Object.assign({}, state, {
            submissionFields: formFields.map(field => new SubmissionField(field))
        });
    }

    filterUnWantedSubmissionFields(state) {
        const {
            submissionFields
        } = state;
        return Object.assign({}, state, {
            submissionFields: submissionFields.filter(field => !field.isUnWanted())
        });
    }

    rejectIfAnyFieldSensitive(state) {
        const {
            submissionFields
        } = state;
        const sensitiveField = find(submissionFields, field => field.isSensitive());
        return sensitiveField ? Promise.reject(new StepError(`Found sensitive submission field [${sensitiveField.get(SubmissionFieldKeys.LABEL)}]`)) : state;
    }

    createSubmissionContactFieldsFromSubmissionFields(state) {
        const {
            submissionFields,
            submissionContactFields
        } = state;
        return Object.assign({}, state, {
            submissionContactFields: submissionContactFields.setEmailField(EmailParser.findBest(submissionFields)).setFirstNameField(FirstNameParser.findBest(submissionFields)).setLastNameField(LastNameParser.findBest(submissionFields)).setPhoneNumberField(PhoneNumberParser.findBest(submissionFields))
        });
    }

    rejectIfMissingRequiredFields(state) {
        const {
            submissionContactFields
        } = state;
        return !submissionContactFields.hasRequiredFields() ? Promise.reject(new StepError('Submission contact fields missing required fields')) : state;
    }

    filterSubmissionContactFieldsFromSubmissionFields(state) {
        const {
            submissionFields,
            submissionContactFields
        } = state;
        const submissionContactFieldsAsArray = submissionContactFields.getFields();
        return Object.assign({}, state, {
            submissionFields: submissionFields.filter(field => !find(submissionContactFieldsAsArray, contactField => isEqual(field, contactField)))
        });
    }

    standardiseDateValuesFromSubmissionFields(state) {
        const {
            submissionFields
        } = state;
        return Object.assign({}, state, {
            submissionFields: submissionFields.map(submissionField => {
                if (!DateParser.hasEmptyValue(submissionField) && DateParser.isDateInputField(submissionField)) {
                    return new SubmissionField(Object.assign({}, submissionField, {
                        [SubmissionFieldKeys.VALUE]: DateParser.parseDateInputFieldValue(submissionField)
                    }));
                }

                return submissionField;
            })
        });
    }

    createSubmissionFromState(state) {
        const {
            form,
            submission,
            submissionFields,
            submissionContactFields
        } = state;
        return Object.assign({}, state, {
            submission: submission.set(SubmissionKeys.FORM_SELECTOR_ID, form.id).set(SubmissionKeys.FORM_SELECTOR_CLASSES, form.classes).set(SubmissionKeys.FORM_ATTRIBUTES, form.attributes).set(SubmissionKeys.CONTACT_FIELDS, submissionContactFields).set(SubmissionKeys.FIELDS, submissionFields).set(SubmissionKeys.PAGE_ID, (window.hsVars || {}).page_id).set(SubmissionKeys.PAGE_TITLE, document.title).set(SubmissionKeys.PAGE_URL, window.location.href).set(SubmissionKeys.PORTAL_ID, getPortalId()).set(SubmissionKeys.TYPE, 'SCRAPED').set(SubmissionKeys.UTK, getUtk()).set(SubmissionKeys.UUID, getUuid()).set(SubmissionKeys.VERSION, getPackageIdentifier())
        });
    }

    build(form) {
        return this.getState(form).then(this.createSubmissionFieldsFromFormFields).then(this.filterUnWantedSubmissionFields).then(this.rejectIfAnyFieldSensitive).then(this.createSubmissionContactFieldsFromSubmissionFields).then(this.standardiseDateValuesFromSubmissionFields).then(this.rejectIfMissingRequiredFields).then(this.filterSubmissionContactFieldsFromSubmissionFields).then(this.createSubmissionFromState).then(({
            submission
        }) => submission).catch(err => {
            if (err instanceof StepError) {
                debug('Submission Build Error: ', err);
                return null;
            }

            return Promise.reject(err);
        });
    }

}

export default new Builder();