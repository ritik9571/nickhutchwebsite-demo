'use es6';

export const values = obj => Object.keys(obj).map(key => obj[key]); // VERY limited, just compares one level objects, all we needed.

export const isEqual = (obj1, obj2) => Object.keys(obj1).filter(key => obj1[key] !== obj2[key]).length === 0;
export const find = (iterable, comparisonFn) => {
    const arr = Array.isArray(iterable) ? iterable : values(iterable);

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (comparisonFn(item)) {
            return item;
        }
    }

    return undefined;
};