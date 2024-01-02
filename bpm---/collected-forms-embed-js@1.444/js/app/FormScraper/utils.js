'use es6';

const EXCLUDE_TEXT_CONTENTS_TAGS = ['TEXTAREA', 'SELECT', 'OPTION', 'STYLE', 'SCRIPT'];
const MAX_TREE_SEARCH = 3;
export function findParentByTagName(formEl, el, tagName) {
    let current = el;

    while (current && current !== formEl) {
        if (current.tagName === tagName.toUpperCase()) {
            return current;
        }

        current = current.parentNode;
    }

    return undefined;
}
export function cleanText(text) {
    if (!text) {
        return '';
    }

    return `${text}`.replace(/\(.*\)|required|:|\*|\n|\r/gi, '').replace(/ +/g, ' ').trim();
}
export function getWrappingElementText(formEl, element, tagName) {
    const wrappingElement = findParentByTagName(formEl, element, tagName);

    if (!wrappingElement) {
        return '';
    }

    const textNode = Array.prototype.slice.call(wrappingElement.childNodes).filter(({
        nodeType
    }) => nodeType === Node.TEXT_NODE)[0];

    if (!textNode) {
        return '';
    }

    return textNode.nodeValue;
}

function findSafeTextContent(node) {
    if (!node) {
        return '';
    }

    if (node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue;
    }

    let textContent = '';

    for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i];

        if (childNode) {
            if (childNode.nodeType === Node.TEXT_NODE) {
                textContent += childNode.nodeValue;
            } else if (EXCLUDE_TEXT_CONTENTS_TAGS.indexOf(childNode.tagName) === -1) {
                for (let j = 0; j < childNode.childNodes.length; j++) {
                    const grandchildNode = childNode.childNodes[i];

                    if (grandchildNode) {
                        textContent += findSafeTextContent(grandchildNode);
                    }
                }
            }
        }
    }

    return textContent;
}

export function getClosestSiblingLabel(element) {
    let currentLeft = element.previousSibling;
    let currentRight = element.nextSibling;

    const checkNodeForText = node => {
        if (!node) {
            return '';
        }

        return cleanText(findSafeTextContent(node) || '') || '';
    };

    while (currentLeft || currentRight) {
        const leftText = checkNodeForText(currentLeft);

        if (leftText.length) {
            return leftText;
        }

        currentLeft = currentLeft && currentLeft.previousSibling;
        const rightText = checkNodeForText(currentRight);

        if (rightText.length) {
            return rightText;
        }

        currentRight = currentRight && currentRight.nextSibling;
    }

    return '';
}
export function searchUpTreeForLabels(form, input) {
    let current = input.parentNode;
    let level = 1;
    let result;

    while (current && current !== form && level <= MAX_TREE_SEARCH) {
        result = getClosestSiblingLabel(current);

        if (result.length) {
            return result;
        }

        current = current.parentNode;
        level++;
    }

    return undefined;
}
export function isArrayTypeName(name) {
    return /\[\]$/.test(name);
}
export function getInputIdentifier({
    name,
    value,
    id,
    type,
    parentNode
}) {
    if (isArrayTypeName(name)) {
        if (type.toLowerCase === 'checkbox' && value.length) {
            return value;
        } else {
            return parentNode.textContent;
        }
    } else if (name.length) {
        return name;
    } else if (id.length) {
        return `#${id}`;
    } else {
        return `${type}-${Math.floor(Math.random() * 100 + 1)}`;
    }
} // matches attribute against labels for

export function getLabelByAttribute(form, input, attributeKey) {
    let label;

    try {
        const attribute = input.getAttribute(attributeKey);

        if (attribute) {
            label = form.querySelector(`label[for="${attribute}"]`);
            label = label && label.textContent;
        }
    } catch (error) {
        label = '';
    }

    return label;
}
export function cleanName(name) {
    const insideSquareBrackets = name.match(/[^[\]]+(?=])/);

    if (insideSquareBrackets && insideSquareBrackets[0]) {
        return insideSquareBrackets[0];
    }

    if (isArrayTypeName(name)) {
        return name.slice(0, -2);
    }

    return name;
}