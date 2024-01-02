'use es6';

import {
    ERROR_PARSING_STORED_SUBMISSION
} from 'collected-forms-embed-js/constants/Errors';
import {
    SUBMISSION as SUBMISSION_STORAGE_KEY
} from 'collected-forms-embed-js/constants/Storage';
import Submission from 'collected-forms-embed-js/lib/Submission';
import KeyedError from 'forms-embed-utils-lib/reporting/KeyedError';
import {
    getItem,
    setItem,
    removeItem
} from 'collected-forms-embed-js/utils/storage';

class Storage {
    get() {
        const submission = getItem(SUBMISSION_STORAGE_KEY);

        if (!submission) {
            return null;
        }

        try {
            return Submission.fromJson(submission);
        } catch (err) {
            throw new KeyedError(ERROR_PARSING_STORED_SUBMISSION, err);
        }
    }

    clear() {
        removeItem(SUBMISSION_STORAGE_KEY);
    }

    add(submission) {
        setItem(SUBMISSION_STORAGE_KEY, JSON.stringify(submission));
    }

}

export default new Storage();