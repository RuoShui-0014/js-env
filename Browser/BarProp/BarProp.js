!function () {
    Object.defineProperty(window, "BarProp", {
        value: rsvm.RsCreateConstructor("BarProp"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.BarProp = {
        memory: {
            visible: true,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("BarProp", target);
        },
        new() {
            let obj = rsvm.RsCreate(BarProp.prototype);
            return obj;
        },
    };

    Object.defineProperties(BarProp, {
        prototype: { value: BarProp.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(BarProp.prototype, {
        visible: {
            get: rsvm.RsCreateGetter("visible", function visible() {
                return rsvm.get(this, "visible");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: BarProp },
        [Symbol.toStringTag]: { value: "BarProp", writable: false, enumerable: false, configurable: true, },
    });
}();