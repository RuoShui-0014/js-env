!function () {
    Object.defineProperty(window, "StylePropertyMap", {
        value: rsvm.RsCreateConstructor("StylePropertyMap"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.StylePropertyMap = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("StylePropertyMap", target);
        },
        new() {
            let obj = rsvm.RsCreate(StylePropertyMap.prototype);
            return obj;
        },
    };

    Object.defineProperties(StylePropertyMap, {
        prototype: { value: StylePropertyMap.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(StylePropertyMap.prototype, {
        append: {
            value: rsvm.RsCreateAction("append", 1, function append() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clear: {
            value: rsvm.RsCreateAction("clear", 0, function clear() {
            }), writable: true, enumerable: true, configurable: true,
        },
        delete: {
            value: rsvm.RsCreateAction("delete", 1, function delete_() {
            }), writable: true, enumerable: true, configurable: true,
        },
        set: {
            value: rsvm.RsCreateAction("set", 1, function set() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: StylePropertyMap },
        [Symbol.toStringTag]: { value: "StylePropertyMap", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(StylePropertyMap, StylePropertyMapReadOnly);
    Object.setPrototypeOf(StylePropertyMap.prototype, StylePropertyMapReadOnly.prototype);
}();