'use es6';

import getSelectFields from './getSelectFields';
import getInputFields from './getInputFields';
import getRadioFields from './getRadioFields';
export default function extractFieldData(formEl) {
    return Object.assign({}, getInputFields(formEl), {}, getSelectFields(formEl), {}, getRadioFields(formEl));
}