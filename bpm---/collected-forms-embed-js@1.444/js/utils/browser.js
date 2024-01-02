'use es6';

const getIeVersion = uaString => {
    uaString = uaString || navigator.userAgent;
    const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
    return match ? parseInt(match[2], 10) : null;
};

const isBrowserSupported = () => {
    const ieVersion = getIeVersion();
    return !ieVersion || ieVersion >= 11;
};

const isLocalStorageSupported = () => {
    try {
        const storage = window.localStorage;
        storage.getItem('');
        return true;
    } catch (err) {
        return false;
    }
};

const isFunctionBindSupported = () => {
    return typeof Function.prototype.bind !== 'undefined';
};

export const isUnsupportedBrowser = function isUnsupportedBrowser() {
    return !isBrowserSupported() || !isLocalStorageSupported() || !isFunctionBindSupported();
};