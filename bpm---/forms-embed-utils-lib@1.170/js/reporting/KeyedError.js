'use es6';

class KeyedError {
    constructor(key, err, extra = {}) {
        this.key = key;
        this.err = err;
        this.extra = extra;
    }

}

export default KeyedError;