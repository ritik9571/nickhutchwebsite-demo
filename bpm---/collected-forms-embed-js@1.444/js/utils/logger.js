'use es6'; // collected-forms-js/static/coffee/lib/leadin_logger.coffee

import {
    DEBUG_PREFIX,
    DEBUG_MODE_KEY,
    LEGACY_DEBUG_MODE_KEY,
    EMBED_ERROR_PREFIX,
    KEYED_ERROR_PREFIX,
    STEP_ERROR_PREFIX,
    CLIENT_ERROR_PREFIX
} from 'collected-forms-embed-js/constants/Logger';
import {
    getItem
} from 'collected-forms-embed-js/utils/storage';
export const isDebugMode = () => {
    try {
        return getItem(DEBUG_MODE_KEY) === 'true' || getItem(LEGACY_DEBUG_MODE_KEY) === 'true';
    } catch (err) {
        return false;
    }
};
export const log = (...args) => isDebugMode() && console.log(DEBUG_PREFIX, ...args);
export const debug = (...args) => isDebugMode() && console.debug(DEBUG_PREFIX, ...args);
export const warn = (...args) => isDebugMode() && console.warn(DEBUG_PREFIX, ...args); // Prefixed Logs

export const logEmbedError = (...args) => debug(EMBED_ERROR_PREFIX, ...args);
export const logKeyedError = (...args) => debug(KEYED_ERROR_PREFIX, ...args);
export const logStepError = (...args) => debug(STEP_ERROR_PREFIX, ...args);
export const logClientError = (...args) => debug(CLIENT_ERROR_PREFIX, ...args);
export const logErrorBoundary = (...args) => console.debug(DEBUG_PREFIX, EMBED_ERROR_PREFIX, ...args);