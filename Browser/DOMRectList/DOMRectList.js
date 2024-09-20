!function () {
    Object.defineProperty(window, "DOMRectList", {
        value: rsvm.RsCreateConstructor("DOMRectList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMRectList = {
        memory: {
            length: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DOMRectList", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMRectList.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMRectList, {
        prototype: { value: DOMRectList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DOMRectList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMRectList },
        [Symbol.toStringTag]: { value: "DOMRectList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();