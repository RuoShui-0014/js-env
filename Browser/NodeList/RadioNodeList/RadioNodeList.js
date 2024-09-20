!function () {
    Object.defineProperty(window, "RadioNodeList", {
        value: rsvm.RsCreateConstructor("RadioNodeList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.RadioNodeList = {
        memory: {
            value: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("RadioNodeList", target);
        },
        new() {
            let obj = rsvm.RsCreate(RadioNodeList.prototype);
            return obj;
        },
    };

    Object.defineProperties(RadioNodeList, {
        prototype: { value: RadioNodeList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(RadioNodeList.prototype, {
        value: {
            get: rsvm.RsCreateGetter("value", function value() {
                return rsvm.get(this, "value");
            }), set: rsvm.RsCreateSetter("value", function value() {
                rsvm.set(this, "value", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: RadioNodeList },
        [Symbol.toStringTag]: { value: "RadioNodeList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(RadioNodeList, NodeList);
    Object.setPrototypeOf(RadioNodeList.prototype, NodeList.prototype);
}();