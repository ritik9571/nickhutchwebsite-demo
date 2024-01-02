(function() {
    'use strict';

    var toString = {}.toString;

    var classofRaw = function(it) {
        return toString.call(it).slice(8, -1);
    };

    // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray
    var isArray = Array.isArray || function isArray(arg) {
        return classofRaw(arg) == 'Array';
    };

    var isObject = function(it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible = function(it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
    };

    // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject
    var toObject = function(argument) {
        return Object(requireObjectCoercible(argument));
    };

    var ceil = Math.ceil;
    var floor = Math.floor;

    // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger
    var toInteger = function(argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };

    var min = Math.min;

    // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength
    var toLength = function(argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var toPrimitive = function(it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };

    var fails = function(exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };

    // Thank's IE8 for his funny defineProperty
    var descriptors = !fails(function() {
        return Object.defineProperty({}, 'a', {
            get: function() {
                return 7;
            }
        }).a != 7;
    });

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global$1 = typeof window == 'object' && window && window.Math == Math ? window :
        typeof self == 'object' && self && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        :
        Function('return this')();

    var document = global$1.document;
    // typeof document.createElement is 'object' in old IE
    var exist = isObject(document) && isObject(document.createElement);

    var documentCreateElement = function(it) {
        return exist ? document.createElement(it) : {};
    };

    // Thank's IE8 for his funny defineProperty
    var ie8DomDefine = !descriptors && !fails(function() {
        return Object.defineProperty(documentCreateElement('div'), 'a', {
            get: function() {
                return 7;
            }
        }).a != 7;
    });

    var anObject = function(it) {
        if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
        }
        return it;
    };

    var nativeDefineProperty = Object.defineProperty;

    var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (ie8DomDefine) try {
            return nativeDefineProperty(O, P, Attributes);
        } catch (error) { /* empty */ }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
    };

    var objectDefineProperty = {
        f: f
    };

    var createPropertyDescriptor = function(bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    'use strict';




    var createProperty = function(object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
    };

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire() {
        throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace(n) {
        return n && n.default || n;
    }

    var hide = descriptors ? function(object, key, value) {
        return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
        object[key] = value;
        return object;
    };

    var setGlobal = function(key, value) {
        try {
            hide(global$1, key, value);
        } catch (error) {
            global$1[key] = value;
        }
        return value;
    };

    var isPure = false;

    var shared = createCommonjsModule(function(module) {
        var SHARED = '__core-js_shared__';
        var store = global$1[SHARED] || setGlobal(SHARED, {});

        (module.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
            version: '3.0.1',
            mode: isPure ? 'pure' : 'global',
            copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
        });
    });

    var id = 0;
    var postfix = Math.random();

    var uid = function(key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
    };

    // Chrome 38 Symbol has incorrect toString conversion
    var nativeSymbol = !fails(function() {
        // eslint-disable-next-line no-undef
        return !String(Symbol());
    });

    var store = shared('wks');

    var Symbol$1 = global$1.Symbol;


    var wellKnownSymbol = function(name) {
        return store[name] || (store[name] = nativeSymbol && Symbol$1[name] ||
            (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
    };

    var SPECIES = wellKnownSymbol('species');

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
    var arraySpeciesCreate = function(originalArray, length) {
        var C;
        if (isArray(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
            else if (isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
            }
        }
        return new(C === undefined ? Array : C)(length === 0 ? 0 : length);
    };

    var SPECIES$1 = wellKnownSymbol('species');

    var arrayMethodHasSpeciesSupport = function(METHOD_NAME) {
        return !fails(function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES$1] = function() {
                return {
                    foo: 1
                };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
        });
    };

    'use strict';
    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
        1: 2
    }, 1);

    var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = nativeGetOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;

    var objectPropertyIsEnumerable = {
        f: f$1
    };

    // fallback for non-array-like ES3 and non-enumerable old V8 strings


    var split = ''.split;

    var indexedObject = fails(function() {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0);
    }) ? function(it) {
        return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;

    // toObject with fallback for non-array-like ES3 strings



    var toIndexedObject = function(it) {
        return indexedObject(requireObjectCoercible(it));
    };

    var hasOwnProperty = {}.hasOwnProperty;

    var has = function(it, key) {
        return hasOwnProperty.call(it, key);
    };

    var nativeGetOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    var f$2 = descriptors ? nativeGetOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (ie8DomDefine) try {
            return nativeGetOwnPropertyDescriptor$1(O, P);
        } catch (error) { /* empty */ }
        if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
    };

    var objectGetOwnPropertyDescriptor = {
        f: f$2
    };

    var functionToString = shared('native-function-to-string', Function.toString);

    var WeakMap = global$1.WeakMap;

    var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

    var shared$1 = shared('keys');


    var sharedKey = function(key) {
        return shared$1[key] || (shared$1[key] = uid(key));
    };

    var hiddenKeys = {};

    var WeakMap$1 = global$1.WeakMap;
    var set, get, has$1;

    var enforce = function(it) {
        return has$1(it) ? get(it) : set(it, {});
    };

    var getterFor = function(TYPE) {
        return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
        };
    };

    if (nativeWeakMap) {
        var store$1 = new WeakMap$1();
        var wmget = store$1.get;
        var wmhas = store$1.has;
        var wmset = store$1.set;
        set = function(it, metadata) {
            wmset.call(store$1, it, metadata);
            return metadata;
        };
        get = function(it) {
            return wmget.call(store$1, it) || {};
        };
        has$1 = function(it) {
            return wmhas.call(store$1, it);
        };
    } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
            hide(it, STATE, metadata);
            return metadata;
        };
        get = function(it) {
            return has(it, STATE) ? it[STATE] : {};
        };
        has$1 = function(it) {
            return has(it, STATE);
        };
    }

    var internalState = {
        set: set,
        get: get,
        has: has$1,
        enforce: enforce,
        getterFor: getterFor
    };
    var internalState_1 = internalState.set;
    var internalState_2 = internalState.get;
    var internalState_3 = internalState.has;
    var internalState_4 = internalState.enforce;
    var internalState_5 = internalState.getterFor;

    var redefine = createCommonjsModule(function(module) {
        var getInternalState = internalState.get;
        var enforceInternalState = internalState.enforce;
        var TEMPLATE = String(functionToString).split('toString');

        shared('inspectSource', function(it) {
            return functionToString.call(it);
        });

        (module.exports = function(O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;
            if (typeof value == 'function') {
                if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
                enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
            }
            if (O === global$1) {
                if (simple) O[key] = value;
                else setGlobal(key, value);
                return;
            } else if (!unsafe) {
                delete O[key];
            } else if (!noTargetGet && O[key]) {
                simple = true;
            }
            if (simple) O[key] = value;
            else hide(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
            return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
        });
    });

    var max = Math.max;
    var min$1 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
    var toAbsoluteIndex = function(index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
    };

    // `Array.prototype.{ indexOf, includes }` methods implementation
    // false -> Array#indexOf
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    // true  -> Array#includes
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    var arrayIncludes = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
                while (length > index) {
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare
                    if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                } else
                    for (; length > index; index++)
                        if (IS_INCLUDES || index in O) {
                            if (O[index] === el) return IS_INCLUDES || index || 0;
                        }
            return !IS_INCLUDES && -1;
        };
    };

    var arrayIndexOf = arrayIncludes(false);


    var objectKeysInternal = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i)
            if (has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
            }
        return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
    ];

    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

    var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

    var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return objectKeysInternal(O, hiddenKeys$1);
    };

    var objectGetOwnPropertyNames = {
        f: f$3
    };

    var f$4 = Object.getOwnPropertySymbols;

    var objectGetOwnPropertySymbols = {
        f: f$4
    };

    var Reflect = global$1.Reflect;

    // all object keys, includes non-enumerable and symbols
    var ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
        var keys = objectGetOwnPropertyNames.f(anObject(it));
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };

    var copyConstructorProperties = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = objectDefineProperty.f;
        var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
    };

    var replacement = /#|\.prototype\./;

    var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true :
            value == NATIVE ? false :
            typeof detection == 'function' ? fails(detection) :
            !!detection;
    };

    var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';

    var isForced_1 = isForced;

    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */
    var _export = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
            target = global$1;
        } else if (STATIC) {
            target = global$1[TARGET] || setGlobal(TARGET, {});
        } else {
            target = (global$1[TARGET] || {}).prototype;
        }
        if (target)
            for (key in source) {
                sourceProperty = source[key];
                if (options.noTargetGet) {
                    descriptor = getOwnPropertyDescriptor(target, key);
                    targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];
                FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
                // contained in target
                if (!FORCED && targetProperty !== undefined) {
                    if (typeof sourceProperty === typeof targetProperty) continue;
                    copyConstructorProperties(sourceProperty, targetProperty);
                }
                // add a flag to not completely full polyfills
                if (options.sham || (targetProperty && targetProperty.sham)) {
                    hide(sourceProperty, 'sham', true);
                }
                // extend global
                redefine(target, key, sourceProperty, options);
            }
    };

    'use strict';






    var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

    var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function() {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
    });

    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

    var isConcatSpreadable = function(O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
    };

    var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

    // `Array.prototype.concat` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    _export({
        target: 'Array',
        proto: true,
        forced: FORCED
    }, {
        concat: function concat(arg) { // eslint-disable-line no-unused-vars
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];
                if (isConcatSpreadable(E)) {
                    len = toLength(E.length);
                    if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (k = 0; k < len; k++, n++)
                        if (k in E) createProperty(A, n, E[k]);
                } else {
                    if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty(A, n++, E);
                }
            }
            A.length = n;
            return A;
        }
    });

    var es_array_concat = {

    };

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function() {
        return arguments;
    }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function(it, key) {
        try {
            return it[key];
        } catch (error) { /* empty */ }
    };

    // getting tag from ES6+ `Object.prototype.toString`
    var classof = function(it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
            // @@toStringTag case
            :
            typeof(tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
            // builtinTag case
            :
            CORRECT_ARGUMENTS ? classofRaw(O)
            // ES3 arguments fallback
            :
            (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
    };

    'use strict';

    var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
    var test = {};

    test[TO_STRING_TAG$1] = 'z';

    // `Object.prototype.toString` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
    var objectToString = String(test) !== '[object z]' ? function toString() {
        return '[object ' + classof(this) + ']';
    } : test.toString;

    var ObjectPrototype = Object.prototype;

    // `Object.prototype.toString` method
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
    if (objectToString !== ObjectPrototype.toString) {
        redefine(ObjectPrototype, 'toString', objectToString, {
            unsafe: true
        });
    }

    var es_object_toString = {

    };

    var defineProperty = objectDefineProperty.f;

    var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

    var setToStringTag = function(it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
            defineProperty(it, TO_STRING_TAG$2, {
                configurable: true,
                value: TAG
            });
        }
    };

    var f$5 = wellKnownSymbol;

    var wrappedWellKnownSymbol = {
        f: f$5
    };

    var path = global$1;

    var defineProperty$1 = objectDefineProperty.f;

    var defineWellKnownSymbol = function(NAME) {
        var Symbol = path.Symbol || (path.Symbol = {});
        if (!has(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
            value: wrappedWellKnownSymbol.f(NAME)
        });
    };

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)



    var objectKeys = Object.keys || function keys(O) {
        return objectKeysInternal(O, enumBugKeys);
    };

    // all enumerable object keys, includes symbols
    var enumKeys = function(it) {
        var result = objectKeys(it);
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        if (getOwnPropertySymbols) {
            var symbols = getOwnPropertySymbols(it);
            var propertyIsEnumerable = objectPropertyIsEnumerable.f;
            var i = 0;
            var key;
            while (symbols.length > i)
                if (propertyIsEnumerable.call(it, key = symbols[i++])) result.push(key);
        }
        return result;
    };

    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var i = 0;
        var key;
        while (length > i) objectDefineProperty.f(O, key = keys[i++], Properties[key]);
        return O;
    };

    var document$1 = global$1.document;

    var html = document$1 && document$1.documentElement;

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])





    var IE_PROTO = sharedKey('IE_PROTO');
    var PROTOTYPE = 'prototype';
    var Empty = function() { /* empty */ };

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var length = enumBugKeys.length;
        var lt = '<';
        var script = 'script';
        var gt = '>';
        var js = 'java' + script + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        iframe.src = String(js);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
        return createDict();
    };

    var objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === undefined ? result : objectDefineProperties(result, Properties);
    };

    hiddenKeys[IE_PROTO] = true;

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

    var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
    var toString$1 = {}.toString;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
        Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function(it) {
        try {
            return nativeGetOwnPropertyNames(it);
        } catch (error) {
            return windowNames.slice();
        }
    };

    var f$6 = function getOwnPropertyNames(it) {
        return windowNames && toString$1.call(it) == '[object Window]' ?
            getWindowNames(it) :
            nativeGetOwnPropertyNames(toIndexedObject(it));
    };

    var objectGetOwnPropertyNamesExternal = {
        f: f$6
    };

    'use strict';
    // ECMAScript 6 symbols shim




























    var HIDDEN = sharedKey('hidden');

    var SYMBOL = 'Symbol';
    var setInternalState = internalState.set;
    var getInternalState = internalState.getterFor(SYMBOL);
    var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
    var nativeDefineProperty$1 = objectDefineProperty.f;
    var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
    var $Symbol = global$1.Symbol;
    var JSON = global$1.JSON;
    var nativeJSONStringify = JSON && JSON.stringify;
    var PROTOTYPE$1 = 'prototype';
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
    var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
    var SymbolRegistry = shared('symbol-registry');
    var AllSymbols = shared('symbols');
    var ObjectPrototypeSymbols = shared('op-symbols');
    var WellKnownSymbolsStore = shared('wks');
    var ObjectPrototype$1 = Object[PROTOTYPE$1];
    var QObject = global$1.QObject;

    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDescriptor = descriptors && fails(function() {
        return objectCreate(nativeDefineProperty$1({}, 'a', {
            get: function() {
                return nativeDefineProperty$1(this, 'a', {
                    value: 7
                }).a;
            }
        })).a != 7;
    }) ? function(it, key, D) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$1, key);
        if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[key];
        nativeDefineProperty$1(it, key, D);
        if (ObjectPrototypeDescriptor && it !== ObjectPrototype$1) {
            nativeDefineProperty$1(ObjectPrototype$1, key, ObjectPrototypeDescriptor);
        }
    } : nativeDefineProperty$1;

    var wrap = function(tag, description) {
        var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
        setInternalState(symbol, {
            type: SYMBOL,
            tag: tag,
            description: description
        });
        if (!descriptors) symbol.description = description;
        return symbol;
    };

    var isSymbol = nativeSymbol && typeof $Symbol.iterator == 'symbol' ? function(it) {
        return typeof it == 'symbol';
    } : function(it) {
        return Object(it) instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
            if (!D.enumerable) {
                if (!has(it, HIDDEN)) nativeDefineProperty$1(it, HIDDEN, createPropertyDescriptor(1, {}));
                it[HIDDEN][key] = true;
            } else {
                if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                D = objectCreate(D, {
                    enumerable: createPropertyDescriptor(0, false)
                });
            }
            return setSymbolDescriptor(it, key, D);
        }
        return nativeDefineProperty$1(it, key, D);
    };

    var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIndexedObject(P));
        var i = 0;
        var l = keys.length;
        var key;
        while (l > i) $defineProperty(it, key = keys[i++], P[key]);
        return it;
    };

    var $create = function create(it, P) {
        return P === undefined ? objectCreate(it) : $defineProperties(objectCreate(it), P);
    };

    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = nativePropertyIsEnumerable$1.call(this, key = toPrimitive(key, true));
        if (this === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIndexedObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
        var D = nativeGetOwnPropertyDescriptor$2(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
    };

    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = nativeGetOwnPropertyNames$1(toIndexedObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
            if (!has(AllSymbols, key = names[i++]) && !has(hiddenKeys, key)) result.push(key);
        }
        return result;
    };

    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectPrototype$1;
        var names = nativeGetOwnPropertyNames$1(IS_OP ? ObjectPrototypeSymbols : toIndexedObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
            if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectPrototype$1, key) : true)) result.push(AllSymbols[key]);
        }
        return result;
    };

    // `Symbol` constructor
    // https://tc39.github.io/ecma262/#sec-symbol-constructor
    if (!nativeSymbol) {
        $Symbol = function Symbol() {
            if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
            var description = arguments[0] === undefined ? undefined : String(arguments[0]);
            var tag = uid(description);
            var setter = function(value) {
                if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
                if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
            };
            if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
                configurable: true,
                set: setter
            });
            return wrap(tag, description);
        };
        redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
            return getInternalState(this).tag;
        });

        objectPropertyIsEnumerable.f = $propertyIsEnumerable;
        objectDefineProperty.f = $defineProperty;
        objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
        objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

        if (descriptors) {
            // https://github.com/tc39/proposal-Symbol-description
            nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
                configurable: true,
                get: function description() {
                    return getInternalState(this).description;
                }
            });
            if (!isPure) {
                redefine(ObjectPrototype$1, 'propertyIsEnumerable', $propertyIsEnumerable, {
                    unsafe: true
                });
            }
        }

        wrappedWellKnownSymbol.f = function(name) {
            return wrap(wellKnownSymbol(name), name);
        };
    }

    _export({
        global: true,
        wrap: true,
        forced: !nativeSymbol,
        sham: !nativeSymbol
    }, {
        Symbol: $Symbol
    });

    for (var wellKnownSymbols = objectKeys(WellKnownSymbolsStore), k = 0; wellKnownSymbols.length > k;) {
        defineWellKnownSymbol(wellKnownSymbols[k++]);
    }

    _export({
        target: SYMBOL,
        stat: true,
        forced: !nativeSymbol
    }, {
        // `Symbol.for` method
        // https://tc39.github.io/ecma262/#sec-symbol.for
        'for': function(key) {
            return has(SymbolRegistry, key += '') ?
                SymbolRegistry[key] :
                SymbolRegistry[key] = $Symbol(key);
        },
        // `Symbol.keyFor` method
        // https://tc39.github.io/ecma262/#sec-symbol.keyfor
        keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
            for (var key in SymbolRegistry)
                if (SymbolRegistry[key] === sym) return key;
        },
        useSetter: function() {
            USE_SETTER = true;
        },
        useSimple: function() {
            USE_SETTER = false;
        }
    });

    _export({
        target: 'Object',
        stat: true,
        forced: !nativeSymbol,
        sham: !descriptors
    }, {
        // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });

    _export({
        target: 'Object',
        stat: true,
        forced: !nativeSymbol
    }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames,
        // `Object.getOwnPropertySymbols` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
        getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // `JSON.stringify` method behavior with symbols
    // https://tc39.github.io/ecma262/#sec-json.stringify
    JSON && _export({
        target: 'JSON',
        stat: true,
        forced: !nativeSymbol || fails(function() {
            var symbol = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            return nativeJSONStringify([symbol]) != '[null]'
                // WebKit converts symbol values to JSON as null
                ||
                nativeJSONStringify({
                    a: symbol
                }) != '{}'
                // V8 throws on boxed symbols
                ||
                nativeJSONStringify(Object(symbol)) != '{}';
        })
    }, {
        stringify: function stringify(it) {
            var args = [it];
            var i = 1;
            var replacer, $replacer;
            while (arguments.length > i) args.push(arguments[i++]);
            $replacer = replacer = args[1];
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
            if (!isArray(replacer)) replacer = function(key, value) {
                if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return nativeJSONStringify.apply(JSON, args);
        }
    });

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
    if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag($Symbol, SYMBOL);

    hiddenKeys[HIDDEN] = true;

    var es_symbol = {

    };

    // `Symbol.asyncIterator` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.asynciterator
    defineWellKnownSymbol('asyncIterator');

    var es_symbol_asyncIterator = {

    };

    // `Symbol.prototype.description` getter
    // https://tc39.github.io/ecma262/#sec-symbol.prototype.description
    'use strict';



    var defineProperty$2 = objectDefineProperty.f;

    var NativeSymbol = global$1.Symbol;

    if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
            // Safari 12 bug
            NativeSymbol().description !== undefined
        )) {
        var EmptyStringDescriptionStore = {};
        // wrap Symbol constructor for correct work with undefined description
        var SymbolWrapper = function Symbol() {
            var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
            var result = this instanceof SymbolWrapper ?
                new NativeSymbol(description)
                // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
                :
                description === undefined ? NativeSymbol() : NativeSymbol(description);
            if (description === '') EmptyStringDescriptionStore[result] = true;
            return result;
        };
        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
        symbolPrototype.constructor = SymbolWrapper;

        var symbolToString = symbolPrototype.toString;
        var native = String(NativeSymbol('test')) == 'Symbol(test)';
        var regexp = /^Symbol\((.*)\)[^)]+$/;
        defineProperty$2(symbolPrototype, 'description', {
            configurable: true,
            get: function description() {
                var symbol = isObject(this) ? this.valueOf() : this;
                var string = symbolToString.call(symbol);
                if (has(EmptyStringDescriptionStore, symbol)) return '';
                var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
                return desc === '' ? undefined : desc;
            }
        });

        _export({
            global: true,
            forced: true
        }, {
            Symbol: SymbolWrapper
        });
    }

    var es_symbol_description = {

    };

    // `Symbol.hasInstance` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.hasinstance
    defineWellKnownSymbol('hasInstance');

    var es_symbol_hasInstance = {

    };

    // `Symbol.isConcatSpreadable` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
    defineWellKnownSymbol('isConcatSpreadable');

    var es_symbol_isConcatSpreadable = {

    };

    // `Symbol.iterator` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol('iterator');

    var es_symbol_iterator = {

    };

    // `Symbol.match` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.match
    defineWellKnownSymbol('match');

    var es_symbol_match = {

    };

    // `Symbol.replace` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.replace
    defineWellKnownSymbol('replace');

    var es_symbol_replace = {

    };

    // `Symbol.search` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.search
    defineWellKnownSymbol('search');

    var es_symbol_search = {

    };

    // `Symbol.species` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.species
    defineWellKnownSymbol('species');

    var es_symbol_species = {

    };

    // `Symbol.split` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.split
    defineWellKnownSymbol('split');

    var es_symbol_split = {

    };

    // `Symbol.toPrimitive` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.toprimitive
    defineWellKnownSymbol('toPrimitive');

    var es_symbol_toPrimitive = {

    };

    // `Symbol.toStringTag` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.tostringtag
    defineWellKnownSymbol('toStringTag');

    var es_symbol_toStringTag = {

    };

    // `Symbol.unscopables` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.unscopables
    defineWellKnownSymbol('unscopables');

    var es_symbol_unscopables = {

    };

    // Math[@@toStringTag] property
    // https://tc39.github.io/ecma262/#sec-math-@@tostringtag
    setToStringTag(Math, 'Math', true);

    var es_math_toStringTag = {

    };

    // JSON[@@toStringTag] property
    // https://tc39.github.io/ecma262/#sec-json-@@tostringtag
    setToStringTag(global$1.JSON, 'JSON', true);

    var es_json_toStringTag = {

    };

    var symbol = path.Symbol;

    'use strict';
    // 19.1.2.1 Object.assign(target, source, ...)





    var nativeAssign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    var objectAssign = !nativeAssign || fails(function() {
        var A = {};
        var B = {};
        // eslint-disable-next-line no-undef
        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function(chr) {
            B[chr] = chr;
        });
        return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        var propertyIsEnumerable = objectPropertyIsEnumerable.f;
        while (argumentsLength > index) {
            var S = indexedObject(arguments[index++]);
            var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j)
                if (propertyIsEnumerable.call(S, key = keys[j++])) T[key] = S[key];
        }
        return T;
    } : nativeAssign;

    // `Object.assign` method
    // https://tc39.github.io/ecma262/#sec-object.assign
    _export({
        target: 'Object',
        stat: true,
        forced: Object.assign !== objectAssign
    }, {
        assign: objectAssign
    });

    var es_object_assign = {

    };

    'use strict';






    var SPECIES$2 = wellKnownSymbol('species');
    var nativeSlice = [].slice;
    var max$1 = Math.max;

    var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');

    // `Array.prototype.slice` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    _export({
        target: 'Array',
        proto: true,
        forced: !SPECIES_SUPPORT$1
    }, {
        slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(end === undefined ? length : end, length);
            // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
            var Constructor, result, n;
            if (isArray(O)) {
                Constructor = O.constructor;
                // cross-realm fallback
                if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
                    Constructor = undefined;
                } else if (isObject(Constructor)) {
                    Constructor = Constructor[SPECIES$2];
                    if (Constructor === null) Constructor = undefined;
                }
                if (Constructor === Array || Constructor === undefined) {
                    return nativeSlice.call(O, k, fin);
                }
            }
            result = new(Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
            for (n = 0; k < fin; k++, n++)
                if (k in O) createProperty(result, n, O[k]);
            result.length = n;
            return result;
        }
    });

    var es_array_slice = {

    };

}());