'use es6';

import {
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
import {
    FieldKeys
} from 'collected-forms-embed-js/lib/SubmissionField';
const MARKED_KEY = 'data-leadin-fname';
const KNOWN_CONTAINING_LABELS = ['first name', 'your name', 'full name', 'your full name'];
const KNOWN_MATCHING_LABELS = ['name', 'first'];
const KNOWN_NAMES = ['fname', 'name', 'firstname', 'first-name', 'first_name', 'full_name', 'yourname', 'your-name'];

class FirstName {
    isMarkedField(field) {
        return field.get(FieldKeys.ATTRIBUTES)[MARKED_KEY] > -1;
    }

    isContainingLabeledField(field) {
        return KNOWN_CONTAINING_LABELS.filter(label => field.getLowerCased(FieldKeys.LABEL).indexOf(label) > -1).length > 0;
    }

    isMatchingLabeledField(field) {
        return KNOWN_MATCHING_LABELS.filter(label => field.getLowerCased(FieldKeys.LABEL) === label).length > 0;
    }

    isNamedField(field) {
        return KNOWN_NAMES.filter(name => field.isNameEqual(name)).length > 0;
    }

    findBest(fields) {
        return find(fields, this.isMarkedField) || find(fields, this.isContainingLabeledField) || find(fields, this.isMatchingLabeledField) || find(fields, this.isNamedField) || undefined;
    }

}

export default new FirstName();