'use es6';

import getAllForms from './getAllForms';
import addSubmissionListner from './addSubmissionListner';
import listenForAddedForms from './listenForAddedForms';
import {
    BOUND_FORM
} from './constants/attributes';
let instance = null;
export default class Binder {
    constructor() {
        if (!instance) {
            instance = this;
            instance._submissionCallbacks = [];
            instance._bindCallback = null;
            instance._forms = [];
            this.handleSubmission = this.handleSubmission.bind(this);
            this.handleBind = this.handleBind.bind(this);
        }

        return instance;
    }

    bind() {
        getAllForms().forEach(this.handleBind);
        listenForAddedForms(this.handleBind);
    }

    getNumFormsBound() {
        return instance._forms.length;
    }

    onSubmission(callback) {
        this._submissionCallbacks.push(callback);
    }

    onBind(callback) {
        this._bindCallback = callback;
    }

    handleSubmission(formEl) {
        this._submissionCallbacks.forEach(callback => callback(formEl));
    }

    handleBind(formEL) {
        const isSubmissionHandlerBound = addSubmissionListner(formEL, this.handleSubmission);

        if (isSubmissionHandlerBound) {
            formEL.setAttribute(`data-${BOUND_FORM}`, true);

            this._forms.push(formEL);

            if (this._bindCallback) {
                this._bindCallback(formEL);
            }
        }
    }

}