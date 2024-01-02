/* hs-eslint ignored failing-rules */

/* eslint-disable no-prototype-builtins */
'use es6';

import {
    debug
} from 'collected-forms-embed-js/utils/logger';
import {
    find
} from 'collected-forms-embed-js/lib/simple-lodash';
import {
    passwordTranslationsList
} from 'collected-forms-embed-js/constants/password-lang';
export const FieldKeys = {
    LABEL: 'label',
    NAME: 'name',
    VALUE: 'value',
    TYPE: 'type',
    ATTRIBUTES: 'attributes'
};
const SENSITIVE_LABELS = ['credit card', 'card number', 'expiration', 'expiry', 'ccv', 'cvc', 'cvv', 'secure code', 'mastercard', 'american express', 'amex'];
const SENSITIVE_NAMES = ['cc-num', 'cc-number'];
const SENSITIVE_ATTRIBUTES = {
    autocomplete: 'cc-number'
};
const SECURITY_CODE_LABEL = 'security code';
const CARD_TESTS = {
    electron: /^(4026|4175|4405|4508|4844|4913|4917)[0-9]{12}$/,
    maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)[0-9]{12}$/,
    dankort: /^(5019)[0-9]{12}$/,
    interpayment: /^(636)[0-9]{13}$/,
    unionpay: /^(62|88)[0-9]{14}$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/
};
const UnWantedNames = ['captcha'];
export default class SubmissionField {
    constructor(values = {}) {
        Object.keys(FieldKeys).forEach(key => {
            if (values.hasOwnProperty(FieldKeys[key])) {
                this[FieldKeys[key]] = values[FieldKeys[key]];
            }
        });
    }

    get(k) {
        return this[k] || (k === FieldKeys.ATTRIBUTES ? {} : '');
    }

    getLowerCased(k) {
        return k === FieldKeys.ATTRIBUTES ? null : this.get(k).toLowerCase();
    }

    isLabelSensitive() {
        return find(SENSITIVE_LABELS, label => {
            if (this.getLowerCased(FieldKeys.LABEL).indexOf(label) > -1) {
                debug(`Form field contains sensitive label ${this.getLowerCased(FieldKeys.LABEL)}=${label}`);
                return true;
            }

            return false;
        }) !== undefined;
    }

    isNameSensitive() {
        return find(SENSITIVE_NAMES, name => {
            if (this.getLowerCased(FieldKeys.NAME).indexOf(name) > -1) {
                debug(`Form field contains sensitive label ${this.getLowerCased(FieldKeys.NAME)}=${name}`);
                return true;
            }

            return false;
        }) !== undefined;
    }

    isAttributesSensitive() {
        const attributes = this.get(FieldKeys.ATTRIBUTES);
        return find(Object.keys(attributes), key => {
            if (SENSITIVE_ATTRIBUTES.hasOwnProperty(key) && attributes[key] === SENSITIVE_ATTRIBUTES[key]) {
                debug(`Form field contains sensitive attribute ${key}`);
                return true;
            }

            return false;
        }) !== undefined;
    }

    isSecurityCode() {
        if (this.getLowerCased(FieldKeys.LABEL).indexOf(SECURITY_CODE_LABEL) > -1 && /^\d{3,4}$/.test(this.get(FieldKeys.VALUE))) {
            debug(`Form field contains sensitive label security code ${this.get(FieldKeys.VALUE)} and value is number of length 3/4`);
            return true;
        }

        return false;
    }

    isCardNumber() {
        const strippedValue = this.get(FieldKeys.VALUE).replace(/[ -]/g, '');
        return find(CARD_TESTS, cardTest => {
            if (cardTest.test(strippedValue)) {
                debug(`Form field contains card number ${this.get(FieldKeys.VALUE)}`);
                return true;
            }

            return false;
        }) !== undefined;
    }

    usesPasswordKeyword(key) {
        return passwordTranslationsList.includes(key);
    }

    isUnWanted() {
        return this.usesPasswordKeyword(this.getLowerCased(FieldKeys.LABEL)) || this.usesPasswordKeyword(this.getLowerCased(FieldKeys.NAME)) || UnWantedNames.indexOf(this.getLowerCased(FieldKeys.NAME)) > -1;
    }

    isSensitive() {
        return this.isLabelSensitive() || this.isNameSensitive() || this.isAttributesSensitive() || this.isSecurityCode() || this.isCardNumber();
    }

    isNameEqual(name) {
        const fieldName = this.getLowerCased(FieldKeys.NAME);
        const extractNameFromArray = (/\[(.*)\]/.exec(fieldName) || [])[1];
        return extractNameFromArray === name || fieldName === name;
    }

}