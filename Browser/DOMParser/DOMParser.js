!function () {
    Object.defineProperty(window, "DOMParser", {
        value: rsvm.RsCreateConstructor("DOMParser", 0, function DOMParser() {
            return rsvm.prototype.DOMParser.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMParser = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DOMParser", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMParser.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMParser, {
        prototype: { value: DOMParser.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DOMParser.prototype, {
        parseFromString: {
            value: rsvm.RsCreateAction("parseFromString", 2, function parseFromString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMParser },
        [Symbol.toStringTag]: { value: "DOMParser", writable: false, enumerable: false, configurable: true, },
    });
}();