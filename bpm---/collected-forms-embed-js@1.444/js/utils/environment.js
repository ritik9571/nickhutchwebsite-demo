'use es6';

import memoize from 'collected-forms-embed-js/lib/memoize';
import {
    bender
} from 'legacy-hubspot-bender-context'; // import-eslint-disable-line

import {
    SCRIPT_PORTAL_ATTR_KEY,
    SCRIPT_ENV_KEY,
    SCRIPT_HUBLET_KEY
} from 'collected-forms-embed-js/constants/Utils';
import {
    NO_PORTAL_ID
} from 'collected-forms-embed-js/constants/Errors';
import KeyedError from 'forms-embed-utils-lib/reporting/KeyedError';
import SafeDomMethods from 'collected-forms-embed-js/lib/SafeDomMethods';

const isCollectedFormsScript = s => s.getAttribute('id').indexOf('CollectedForms-') === 0; // lib/leadin_utils.getDataAttribute


const getScriptAttribute = attr => {
    let script;
    const scripts = SafeDomMethods.querySelectorAll(`script[${attr}]`);

    try {
        script = Array.prototype.slice.call(scripts).filter(isCollectedFormsScript)[0];
    } catch (e) {
        script = scripts[0];
    }

    return script ? script.getAttribute(attr) : null;
}; // lib/leadin_utils.getPortalId


export const getPortalId = memoize(() => {
    const portalIdFromScript = getScriptAttribute(SCRIPT_PORTAL_ATTR_KEY);
    const portalIdAsInt = parseInt(portalIdFromScript, 10);

    if (!portalIdAsInt) {
        throw new KeyedError(NO_PORTAL_ID);
    }

    return portalIdAsInt;
});
export const getEnv = () => getScriptAttribute(SCRIPT_ENV_KEY);
export const getHublet = () => getScriptAttribute(SCRIPT_HUBLET_KEY);
export const getIsProd = memoize(() => getEnv() === 'prod' || false);
export const getIsQa = memoize(() => getEnv() === 'qa' || false);
export const getProject = () => bender.project;
export const getPackageIdentifier = () => `${bender.project}-${bender.depVersions[bender.project]}`;