'use es6';

import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
export const SubmissionKeys = {
    CONTACT_FIELDS: 'contactFields',
    FORM_SELECTOR_CLASSES: 'formSelectorClasses',
    FORM_SELECTOR_ID: 'formSelectorId',
    FORM_ATTRIBUTES: 'formAttributes',
    FORM_VALUES: 'formValues',
    FIELDS: 'fields',
    LABEL_TO_NAME_MAP: 'labelToNameMap',
    PAGE_ID: 'pageId',
    PAGE_TITLE: 'pageTitle',
    PAGE_URL: 'pageUrl',
    PORTAL_ID: 'portalId',
    TYPE: 'type',
    UTK: 'utk',
    UUID: 'uuid',
    VERSION: 'version'
};
export class Submission {
    static fromJson(jsonString) {
        const obj = JSON.parse(jsonString);
        const submission = new Submission();
        Object.keys(obj).forEach(key => submission.set(key, obj[key]));
        return submission;
    }

    get(k) {
        return this[k];
    }

    set(k, v) {
        this[k] = v;
        return this;
    }

    serialize() {
        return Object.assign({
            contactFields: Object.keys(this.get(SubmissionKeys.CONTACT_FIELDS) || {}).reduce((memo, key) => Object.assign({}, memo, {
                [key]: this.get(SubmissionKeys.CONTACT_FIELDS)[key].value
            }), {}),
            formSelectorClasses: this.get(SubmissionKeys.FORM_SELECTOR_CLASSES),
            formSelectorId: this.get(SubmissionKeys.FORM_SELECTOR_ID),
            formValues: (this.get(SubmissionKeys.FIELDS) || []).reduce((memo, field) => Object.assign({}, memo, {
                [field.label]: field.value
            }), {}),
            labelToNameMap: (this.get(SubmissionKeys.FIELDS) || []).reduce((memo, field) => Object.assign({}, memo, {
                [field.label]: field.name
            }), {}),
            pageId: this.get(SubmissionKeys.PAGE_ID),
            pageTitle: this.get(SubmissionKeys.PAGE_TITLE),
            pageUrl: this.get(SubmissionKeys.PAGE_URL),
            portalId: this.get(SubmissionKeys.PORTAL_ID),
            type: this.get(SubmissionKeys.TYPE),
            utk: this.get(SubmissionKeys.UTK),
            uuid: this.get(SubmissionKeys.UUID),
            version: this.get(SubmissionKeys.VERSION)
        }, (collectedFormId => collectedFormId && {
            collectedFormId
        })((this.get(SubmissionKeys.FORM_ATTRIBUTES) || {}).id), {}, (collectedFormClasses => collectedFormClasses && {
            collectedFormClasses
        })((this.get(SubmissionKeys.FORM_ATTRIBUTES) || {}).class), {}, (collectedFormAction => collectedFormAction && {
            collectedFormAction
        })((this.get(SubmissionKeys.FORM_ATTRIBUTES) || {}).action));
    }

    getHash() {
        // eslint-disable-next-line no-unused-vars
        const _this = this,
            toHash = _objectWithoutPropertiesLoose(_this, ["uuid"]);

        return JSON.stringify(toHash);
    }

}
export default Submission;