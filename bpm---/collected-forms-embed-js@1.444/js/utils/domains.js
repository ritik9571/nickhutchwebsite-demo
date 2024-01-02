'use es6';

import getHubletSuffix from 'forms-embed-utils-lib/hublets/getHubletSuffix';
const HS_DOMAIN = {
    qa: 'hsformsqa.com',
    prod: 'hsforms.com'
};
const HSCOLLECTEDFORMS_DOMAIN = {
    qa: 'hscollectedformsqa.net',
    prod: 'hscollectedforms.net'
};

const getFormsSubdomain = hublet => `forms${getHubletSuffix(hublet)}`;

const getJsSubdomain = hublet => `js${getHubletSuffix(hublet)}`;

const getHsFormsDomain = isQa => isQa ? HS_DOMAIN.qa : HS_DOMAIN.prod;

const getCollectedFormsDomain = isQa => isQa ? HSCOLLECTEDFORMS_DOMAIN.qa : HSCOLLECTEDFORMS_DOMAIN.prod;

export const getAnalyticsUrl = (isQa = false, hublet = '') => `https://${getFormsSubdomain(hublet)}.${getHsFormsDomain(isQa)}`;
export const getConfigUrl = (isQa = false, hublet = '') => `https://${getFormsSubdomain(hublet)}.${getCollectedFormsDomain(isQa)}`;
export const getSubmissionUrl = (isQa = false, hublet = '') => `https://${getFormsSubdomain(hublet)}.${getCollectedFormsDomain(isQa)}`;
export const getScriptUrl = (isQa = false, hublet = '') => `https://${getJsSubdomain(hublet)}.${getCollectedFormsDomain(isQa)}`;