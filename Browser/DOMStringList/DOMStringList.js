!function () {
    Object.defineProperty(window, "DOMStringList", {
        value: rsvm.RsCreateConstructor("DOMStringList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMStringList = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DOMStringList", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMStringList.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMStringList, {
        prototype: { value: DOMStringList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DOMStringList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        contains: { value: undefined, writable: true, enumerable: true, configurable: true, },
        item: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMStringList },
        [Symbol.toStringTag]: { value: "DOMStringList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();