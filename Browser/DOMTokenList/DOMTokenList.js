!function () {
    Object.defineProperty(window, "DOMTokenList", {
        value: rsvm.RsCreateConstructor("DOMTokenList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMTokenList = {
        memory: {
            length: 0,
            value: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DOMTokenList", target);
            rsvm.RsSetPrivateProperty(target, "__bindInfo__", {
                getValue: function () {
                    return rsvm.get(this, "value");
                },
                setValue: function (value) {
                    rsvm.get(this, "value", value);
                },
            });
        },
        classList(parentNode){
            let obj = rsvm.RsCreateInterceptor({
                getter(target, property) {
                    if (typeof (property) == "number") {
                        let value = parentNode.className.split(' ')[property];
                        if (value) {
                            return {
                                value: value,
                                intercept: true,
                            };
                        } else {
                            return { intercept: false };
                        }
                    } else if (typeof (property) == "string") {
                        return { intercept: false };
                    }
                },
                query(target, property) {
                    if (typeof (property) == "number") {
                        let value = parentNode.className.split(' ')[property];
                        if (value) {
                            return {
                                value: { value: value, writable: false, enumerable: true, configurable: true },
                                intercept: true,
                            };
                        } else {
                            return { intercept: false };
                        }
                    } else if (typeof (property) == "string") {
                        return { intercept: false };
                    }
                },
                descriptor(target, property) {
                    if (typeof (property) == "number") {
                        let value = parentNode.className.split(' ')[property];
                        if (value) {
                            return {
                                value: { value: value, writable: false, enumerable: true, configurable: true },
                                intercept: true,
                            };
                        } else {
                            return { intercept: false };
                        }
                    } else if (typeof (property) == "string") {
                        return { intercept: false };
                    }
                },
                enumerator(target) {
                    let indexArray = [];
                    for (const item of parentNode.className.split(' ')) {
                        indexArray.push(indexArray.length);
                    }
                    return {
                        value: indexArray,
                        intercept: true,
                    };
                },
            });
            Object.setPrototypeOf(obj, DOMTokenList.prototype);
            rsvm.RsSetPrivateProperty(obj, "__memory__", {});
            rsvm.RsSetPrivateProperty(obj, "__bindInfo__", {
                getValue: function () {
                    return parentNode.className;
                },
                setValue: function (value) {
                    rsvm.set(parentNode, "className", value);
                },
            });
            return obj;
        },
        new() {
            let obj = rsvm.RsCreate(DOMTokenList.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMTokenList, {
        prototype: { value: DOMTokenList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DOMTokenList.prototype, {
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        keys: {
            value: rsvm.RsCreateAction("keys", 0, function keys() {
                return Object.keys(this);
            }), writable: true, enumerable: true, configurable: true,
        },
        values: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forEach: {
            value: rsvm.RsCreateAction("forEach", 1, function forEach() {
                for (const key of Object.keys(this)){
                    if (typeof(arguments[0]) === 'function'){
                        arguments[0](this[key]);
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        value: {
            get: rsvm.RsCreateGetter("value", function value() {
                let getter = rsvm.RsGetPrivateProperty(this, "__bindInfo__")['getValue'];
                return getter.apply(this, arguments);
            }), set: rsvm.RsCreateSetter("value", function value() {
                let setter = rsvm.RsSetPrivateProperty(this, "__bindInfo__")['setValue'];
                return setter.apply(this, arguments);
            }), enumerable: true, configurable: true,
        },
        add: {
            value: rsvm.RsCreateAction("add", 0, function add() {
            }), writable: true, enumerable: true, configurable: true,
        },
        contains: {
            value: rsvm.RsCreateAction("contains", 1, function contains() {
            }), writable: true, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 0, function remove() {
                if (Object.hasOwn(this, arguments[0])){
                    delete this[arguments[0]];
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        replace: {
            value: rsvm.RsCreateAction("replace", 2, function replace() {
            }), writable: true, enumerable: true, configurable: true,
        },
        supports: {
            value: rsvm.RsCreateAction("supports", 1, function supports() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toggle: {
            value: rsvm.RsCreateAction("toggle", 1, function toggle() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toString: {
            value: rsvm.RsCreateAction("toString", 0, function toString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMTokenList },
        [Symbol.toStringTag]: { value: "DOMTokenList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();