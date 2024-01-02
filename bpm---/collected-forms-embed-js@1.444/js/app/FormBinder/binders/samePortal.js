'use es6';

import {
    getPortalId
} from 'collected-forms-embed-js/utils/environment';

function getPortalFromForm(formEl) {
    try {
        const portalId = formEl.getAttribute('data-portal-id');
        return portalId ? parseInt(portalId, 10) : undefined;
    } catch (error) {
        return undefined;
    }
}

function getIsCMSSiteSearch(formEl) {
    try {
        return formEl.getAttribute('action').indexOf('/hs-search-results') > -1;
    } catch (error) {
        return false;
    }
}

function getIsUnsubscribeForm(formEl) {
    try {
        return formEl.getAttribute('id') === 'email-prefs-form';
    } catch (error) {
        return false;
    }
}

export const SamePortal = {
    test: formEl => {
        const portalId = getPortalId();
        return getPortalFromForm(formEl) === portalId || getIsCMSSiteSearch(formEl) || getIsUnsubscribeForm(formEl);
    },
    // We don't bind to forms on hubspot.
    bind: () => {}
};