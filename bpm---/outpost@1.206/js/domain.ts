const APP_ROUTE = 'outpost';
const NA1 = 'na1';
export default function getHubletSuffix(hublet = '') {
  if (!hublet || hublet === NA1) {
    return '';
  }

  return `-${hublet}`;
}

const getFormsSubdomain = (hublet = '') => `forms${getHubletSuffix(hublet)}`;

const getExceptionsSubdomain = (hublet = '') => `exceptions${getHubletSuffix(hublet)}`;

const getHubspotDomain = (isQa = false) => {
  if (isQa) {
    return 'hubspotqa.com';
  }

  return 'hubspot.com';
};

const getEmbedReportingDomain = (isQa = false) => {
  if (isQa) {
    return 'hs-embed-reportingqa.com';
  }

  return 'hs-embed-reporting.com';
};

export const getHubspotReportingUrl = ({
  hublet = '',
  isQa = false
} = {}) => `https://${getFormsSubdomain(hublet)}.${getHubspotDomain(isQa)}/${APP_ROUTE}`;
export const getEmbedAppReportingUrl = ({
  hublet = '',
  isQa = false
} = {}) => `https://${getExceptionsSubdomain(hublet)}.${getEmbedReportingDomain(isQa)}/${APP_ROUTE}`;