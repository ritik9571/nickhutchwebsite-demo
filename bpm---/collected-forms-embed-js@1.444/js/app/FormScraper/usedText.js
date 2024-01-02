'use es6';

let textMap = {};
export const checkIfUsed = text => {
    if (textMap[text]) {
        return true;
    }

    textMap[text] = true;
    return false;
};
export const reset = () => {
    textMap = {};
};