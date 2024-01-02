'use es6';

import {
    BinderTypes
} from './binders';
import shouldBindToForm from './shouldBindToForm';
export default function addSubmissionListner(formEl, handler) {
    for (let i = 0; i < BinderTypes.length; i++) {
        const binder = BinderTypes[i];

        if (shouldBindToForm(formEl) && binder.test(formEl)) {
            binder.bind(formEl, handler);
            return true;
        }
    }

    return false;
}