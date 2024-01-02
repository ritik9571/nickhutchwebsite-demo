/* hs-eslint ignored failing-rules */

/* eslint-disable no-bitwise */
'use es6';

export const getUuid = () => {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
export const peek = func => data => {
    func(data);
    return data;
};