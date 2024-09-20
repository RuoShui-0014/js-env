!function () {
    Object.defineProperty(window, "StylePropertyMapReadOnly", {
        value: rsvm.RsCreateConstructor("StylePropertyMapReadOnly"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.StylePropertyMapReadOnly = {
        memory: {
            size: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("StylePropertyMapReadOnly", target);
        },
        new() {
            let obj = rsvm.RsCreate(StylePropertyMapReadOnly.prototype);
            return obj;
        },
    };

    Object.defineProperties(StylePropertyMapReadOnly, {
        prototype: { value: StylePropertyMapReadOnly.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(StylePropertyMapReadOnly.prototype, {
        size: {
            get: rsvm.RsCreateGetter("size", function size() {
                return rsvm.get(this, "size");
            }), set: undefined, enumerable: true, configurable: true,
        },
        get: {
            value: rsvm.RsCreateAction("get", 1, function get() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAll: {
            value: rsvm.RsCreateAction("getAll", 1, function getAll() {
            }), writable: true, enumerable: true, configurable: true,
        },
        has: {
            value: rsvm.RsCreateAction("has", 1, function has() {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: StylePropertyMapReadOnly },
        [Symbol.toStringTag]: { value: "StylePropertyMapReadOnly", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("entries", 0, function* entries() {
                for (const key of Object.keys(this)){
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();