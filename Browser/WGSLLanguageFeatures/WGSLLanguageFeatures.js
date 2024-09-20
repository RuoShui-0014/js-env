!function () {
    Object.defineProperty(window, "WGSLLanguageFeatures", {
        value: rsvm.RsCreateConstructor("WGSLLanguageFeatures"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WGSLLanguageFeatures = {
        memory: {
            size: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("WGSLLanguageFeatures", target);
        },
        new() {
            let obj = rsvm.RsCreate(WGSLLanguageFeatures.prototype);
            return obj;
        },
    };

    Object.defineProperties(WGSLLanguageFeatures, {
        prototype: { value: WGSLLanguageFeatures.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WGSLLanguageFeatures.prototype, {
        size: {
            get: rsvm.RsCreateGetter("size", function size() {
                return rsvm.get(this, "size");
            }), set: undefined, enumerable: true, configurable: true,
        },
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forEach: {
            value: rsvm.RsCreateAction("forEach", 1, function forEach() {
            }), writable: true, enumerable: true, configurable: true,
        },
        has: {
            value: rsvm.RsCreateAction("has", 1, function has() {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: WGSLLanguageFeatures },
        [Symbol.toStringTag]: { value: "WGSLLanguageFeatures", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();