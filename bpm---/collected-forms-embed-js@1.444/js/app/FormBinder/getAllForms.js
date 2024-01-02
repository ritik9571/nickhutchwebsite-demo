'use es6';

import SafeDomMethods from 'collected-forms-embed-js/lib/SafeDomMethods';
export default function getAllForms() {
    const forms = SafeDomMethods.getElementsByTagName('form'); // For ninja forms v3.0 doesn't use the form tag

    const ninjaForms = SafeDomMethods.getElementsByClassName('nf-form-cont');
    return [].concat(Array.prototype.slice.call(forms), Array.prototype.slice.call(ninjaForms));
}