/* eslint-disable no-restricted-globals */
'use es6';

export const getItem = key => {
    try {
        return localStorage.getItem(key);
    } catch (err) {
        return null;
    }
};
export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (err) {
        return false;
    }
};
export const removeItem = key => {
    try {
        return localStorage.removeItem(key);
    } catch (err) {
        return null;
    }
};