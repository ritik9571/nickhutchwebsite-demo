'use es6';

const NA1 = 'na1';
export default function getHubletSuffix(hublet = '') {
    if (!hublet || hublet === NA1) {
        return '';
    }

    return `-${hublet}`;
}