!function () {
    Object.defineProperty(window, "TouchList", {
        value: rsvm.RsCreateConstructor("TouchList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TouchList = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("TouchList", target);
        },
        new() {
            let obj = rsvm.RsCreate(TouchList.prototype);
            return obj;
        },
    };

    Object.defineProperties(TouchList, {
        prototype: { value: TouchList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TouchList.prototype, {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: TouchList },
        [Symbol.toStringTag]: { value: "TouchList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();