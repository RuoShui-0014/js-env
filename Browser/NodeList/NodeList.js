!function () {
    Object.defineProperty(window, "NodeList", {
        value: rsvm.RsCreateConstructor("NodeList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.NodeList = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("NodeList", target);
        },
        childNodes(parentNode) {
            let nodeArray = rsvm.RsGetPrivateProperty(parentNode, "nodeArray");
            let obj = rsvm.RsCreateInterceptor({
                getter(target, property) {
                    if (typeof (property) == "number") {
                        let value = rsvm.RsGetPrivateProperty(target, "__memory__")[property];
                        if (rsvm.log) {
                            rsvm.log = false;
                            let msg = { '调用者': `NodeList`, '属性': property, '返回值': target[property] };
                            rsvm.$log.call(console, msg);
                            rsvm.log = false;
                        }
                        if (value) {
                            return {
                                value: value,
                                intercept: true,
                            };
                        } else {
                            return { intercept: false };
                        }
                    }
                    return { intercept: false };
                },
                query(target, property) {
                    if (typeof (property) == "number") {
                        let value = rsvm.RsGetPrivateProperty(target, "__memory__")[property];
                        return {
                            value: { value: value, writable: false, enumerable: true, configurable: true },
                            intercept: true,
                        };
                    }
                    return { intercept: false };
                },
                descriptor(target, property) {
                    if (typeof (property) == "number") {
                        let value = rsvm.RsGetPrivateProperty(target, "__memory__")[property];
                        return {
                            value: { value: value, writable: false, enumerable: true, configurable: true },
                            intercept: true,
                        };
                    }
                    return { intercept: false };
                },
                enumerator(target) {
                    let indexAry = [];
                    for (const key of Object.keys(rsvm.RsGetPrivateProperty(target, "__memory__"))){
                        indexAry.push(indexAry.length);
                    }
                    return {
                        value: indexAry,
                        intercept: true,
                    };
                },
            });
            Object.setPrototypeOf(obj, NodeList.prototype);
            rsvm.RsSetPrivateProperty(obj, "__memory__", nodeArray);
            return obj;
        },
        new() {
            let obj = rsvm.RsCreate(NodeList.prototype);
            return obj;
        },
    };

    Object.defineProperties(NodeList, {
        prototype: { value: NodeList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(NodeList.prototype, {
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
                for (const key of Object.keys(this)) {
                    if (typeof (arguments[0]) === 'function') {
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
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: NodeList },
        [Symbol.toStringTag]: { value: "NodeList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();