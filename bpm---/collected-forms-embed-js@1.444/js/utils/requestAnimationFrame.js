'use es6';

export default (callback => {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(callback);
    }

    return setTimeout(callback, 16);
});