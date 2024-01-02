'use es6';

import * as logger from 'collected-forms-embed-js/utils/logger';
import requestAnimationFrame from 'collected-forms-embed-js/utils/requestAnimationFrame';
let observer;
export const reset = () => {
    if (observer) {
        observer.disconnect();
    }
};
export default (bindHandler => {
    if (!window.MutationObserver) {
        return;
    }

    const bindToForm = node => {
        logger.debug('New form found', node);
        bindHandler(node);
    };

    observer = new MutationObserver(mutations => {
        mutations.forEach(({
            addedNodes
        }) => {
            Array.prototype.slice.call(addedNodes).forEach(node => {
                if (node.tagName === 'FORM') {
                    bindToForm(node);
                } else if (node.getElementsByTagName) {
                    [...node.getElementsByTagName('form')].forEach(formNode => {
                        bindToForm(formNode);
                    });
                }
            });
        });
    });
    requestAnimationFrame(() => {
        try {
            observer.observe(document.body, {
                attributes: false,
                characterData: false,
                childList: true,
                subtree: true
            });
        } catch (error) {
            logger.debug('Unable to add mutation observer');
        }
    });
});