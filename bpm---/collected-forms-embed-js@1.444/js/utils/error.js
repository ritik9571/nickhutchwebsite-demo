'use es6';

import {
    getScriptUrl
} from './domains';
import {
    getIsQa,
    getHublet
} from 'collected-forms-embed-js/utils/environment';
export const byFirstUrl = url => err => err.stack.split('\n')[1].indexOf(url) > -1;
export const isLocalError = err => byFirstUrl('webpack://')(err);
export const isEmbedScriptError = err => byFirstUrl(getScriptUrl(getIsQa(), getHublet()))(err);
export const isEmbedError = err => isLocalError(err) || isEmbedScriptError(err);