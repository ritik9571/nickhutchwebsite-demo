'use es6';

export default function getInputAttributes(input) {
    return Object.keys(Object.assign({}, input.attributes)).reduce((memo, key) => {
        const {
            name,
            value
        } = input.attributes[key];

        if (!/^(autocomplete|placeholder|data-leadin|data-hs-cf)/i.test(name)) {
            return memo;
        }

        return Object.assign({}, memo, {
            [name]: value
        });
    }, {});
}