!function () {
    Object.defineProperty(window, "Headers", {
        value: rsvm.RsCreateConstructor("Headers"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Headers = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Headers", target);
        },
        new() {
            let obj = rsvm.RsCreate(Headers.prototype);
            return obj;
        },
    };

    Object.defineProperties(Headers, {
        prototype: { value: Headers.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Headers.prototype, {
        append: {
            value: rsvm.RsCreateAction("append", 2, function append() {
            }), writable: true, enumerable: true, configurable: true,
        },
        delete: {
            value: rsvm.RsCreateAction("delete", 1, function () {
            }), writable: true, enumerable: true, configurable: true,
        },
        get: {
            value: rsvm.RsCreateAction("get", 1, function get() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSetCookie: {
            value: rsvm.RsCreateAction("getSetCookie", 0, function getSetCookie() {
            }), writable: true, enumerable: true, configurable: true,
        },
        has: {
            value: rsvm.RsCreateAction("has", 1, function has() {
            }), writable: true, enumerable: true, configurable: true,
        },
        set: {
            value: rsvm.RsCreateAction("set", 2, function set() {
            }), writable: true, enumerable: true, configurable: true,
        },
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forEach: {
            value: rsvm.RsCreateAction("forEach", 1, function forEach() {
            }), writable: true, enumerable: true, configurable: true,
        },
        keys: {
            value: rsvm.RsCreateAction("keys", 0, function keys() {
            }), writable: true, enumerable: true, configurable: true,
        },
        values: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Headers },
        [Symbol.toStringTag]: { value: "Headers", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();