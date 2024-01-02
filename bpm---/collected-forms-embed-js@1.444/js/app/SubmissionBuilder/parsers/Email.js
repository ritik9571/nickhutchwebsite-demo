'use es6';

import {
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
import {
    debug
} from 'collected-forms-embed-js/utils/logger';
import {
    FieldKeys
} from 'collected-forms-embed-js/lib/SubmissionField';
const STRICT_EMAIL_TEST = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const SIMPLE_EMAIL_TEST = /[^@\s]+@[^@\s]+\.[^@\s]+/;
const FIRST_EMAIL_EXTRACT = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+[a-zA-Z0-9])/i;
const MARKED_KEY = 'data-leadin-email';
const EMAIL_LABELS = ['your email'];
const EMAIL_STRING = 'email';

class Email {
    isStrictlyValidEmailField(field) {
        return STRICT_EMAIL_TEST.test(field.get(FieldKeys.VALUE));
    }

    isValidEmailValueField(field) {
        return SIMPLE_EMAIL_TEST.test(field.get(FieldKeys.VALUE));
    }

    isMarkedField(field) {
        return field.get(FieldKeys.ATTRIBUTES)[MARKED_KEY] > -1;
    }

    isLabeledField(field) {
        if (field.getLowerCased(FieldKeys.LABEL) === EMAIL_STRING) {
            return true;
        }

        return EMAIL_LABELS.filter(emailLabel => field.getLowerCased(FieldKeys.LABEL).indexOf(emailLabel) > -1).length > 0;
    }

    extractFirstEmail(field) {
        const matches = field.get(FieldKeys.VALUE).match(FIRST_EMAIL_EXTRACT);
        return matches ? matches[0] : null;
    }

    findBest(fields) {
        const strictlyValidEmails = fields.filter(this.isStrictlyValidEmailField);

        if (strictlyValidEmails.length === 1) {
            return strictlyValidEmails[0];
        }

        if (strictlyValidEmails.length === 0) {
            const foundEmailField = find(fields, this.isValidEmailValueField);

            if (!foundEmailField) {
                debug('No email field found in form fields');
                return null;
            }

            return this.extractFirstEmail(foundEmailField);
        }

        return find(strictlyValidEmails, this.isMarkedField) || find(strictlyValidEmails, this.isLabeledField) || strictlyValidEmails[0];
    }

}

export default new Email();