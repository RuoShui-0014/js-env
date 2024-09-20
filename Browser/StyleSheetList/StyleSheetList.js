!function () {
    Object.defineProperty(window, "StyleSheetList", {
        value: rsvm.RsCreateConstructor("StyleSheetList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.StyleSheetList = {
        memory: {
            length: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("StyleSheetList", target);
        },
        new() {
            let obj = rsvm.RsCreate(StyleSheetList.prototype);
            return obj;
        },
    };

    Object.defineProperties(StyleSheetList, {
        prototype: { value: StyleSheetList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(StyleSheetList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                return this[key];
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: StyleSheetList },
        [Symbol.toStringTag]: { value: "StyleSheetList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)){
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();