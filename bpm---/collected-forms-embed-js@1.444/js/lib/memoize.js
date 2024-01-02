'use es6';
/*
  This is a simple implemenation of lodash/memoize
  https://git.hubteam.com/HubSpot/collected-forms-js/pull/9
*/

export default (func => {
    let result = null;

    const cachedFunc = () => {
        if (result !== null) {
            return result;
        }

        result = func();
        return result;
    };

    cachedFunc.cache = {
        clear: () => {
            result = null;
        }
    };
    return cachedFunc;
});