'use es6';

import archetype from 'collected-forms-embed-js/vendor/archetype';

const executeMethod = (method, ...args) => {
    try {
        return archetype.getNativeMethod(`document.${method}`, document)(...args);
    } catch (__) {
        return document[method].apply(document, args);
    }
};
/*
 To avoid errors from using overridden dom methods we grab them from an iframe if not native
 We use archetype for this https://github.com/perry-mitchell/archetype
*/


class SafeDomMethods {
    constructor() {
        this._bindMethod('getElementsByTagName');

        this._bindMethod('querySelector');

        this._bindMethod('querySelectorAll');

        this._bindMethod('getElementsByClassName');

        this._bindMethod('elementQuerySelectorAll');

        this._bindMethod('elementQuerySelectorAll', (context, ...args) => {
            try {
                return archetype.getWindow().Element.prototype.querySelectorAll.apply(context, args);
            } catch (__) {
                try {
                    return window.Element.prototype.querySelectorAll.apply(context, args);
                } catch (___) {
                    return context.querySelectorAll(...args);
                }
            }
        });
    }

    _bindMethod(method, handler = (...args) => executeMethod(method, ...args)) {
        this[method] = handler;
    }

    setup() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 50);
            return Promise.resolve(this.onReady()).then(resolve, reject);
        });
    }

    onReady() {
        return new Promise(resolve => {
            archetype.onReady(resolve);
        });
    }

}

export default new SafeDomMethods();