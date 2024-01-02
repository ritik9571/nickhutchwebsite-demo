'use es6';

import memoize from 'collected-forms-embed-js/lib/memoize';
import {
    HUBSPOT_UTK
} from 'collected-forms-embed-js/constants/Cookies'; // leadin_utils.getCookie

const getCookie = key => {
    const cookies = document.cookie.match(`(^|[^;]+)\\s*${key}\\s*=\\s*([^;]+)`);
    return cookies ? cookies.pop() : '';
}; // leadin_cookies.getUtk


export const getUtk = memoize(() => getCookie(HUBSPOT_UTK));