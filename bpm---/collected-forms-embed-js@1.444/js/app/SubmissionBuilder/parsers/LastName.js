'use es6';

import {
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
import {
    FieldKeys
} from 'collected-forms-embed-js/lib/SubmissionField';
const MARKED_KEY = 'data-leadin-lname';
const KNOWN_CONTAINING_LABELS = ['last name', 'surname', 'your last name', 'family name'];
const KNOWN_MATCHING_LABELS = ['last'];
const KNOWN_NAMES = ['lname', 'lastname', 'last-name', 'last_name'];

class LastName {
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

export default new LastName();