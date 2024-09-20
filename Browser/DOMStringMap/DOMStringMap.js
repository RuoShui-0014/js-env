!function () {
    Object.defineProperty(window, "DOMStringMap", {
        value: rsvm.RsCreateConstructor("DOMStringMap"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMStringMap = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DOMStringMap", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMStringMap.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMStringMap, {
        prototype: { value: DOMStringMap.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DOMStringMap.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMStringMap },
        [Symbol.toStringTag]: { value: "DOMStringMap", writable: false, enumerable: false, configurable: true, },
    });
}();