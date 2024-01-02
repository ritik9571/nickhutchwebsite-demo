'use es6';

import * as logger from 'collected-forms-embed-js/utils/logger';
import {
    getUtk as getUtkCookie
} from 'collected-forms-embed-js/utils/cookies';
const instance = {
    utk: null
};
export const init = () => {
    window._hsq = window._hsq || [];

    window._hsq.push(['addUserTokenListener', function(utk) {
        instance.utk = utk;
        return logger.debug(`Got utk from analytics: ${utk}`);
    }]);
};
export const getUtk = () => {
    return instance.utk || getUtkCookie();
};