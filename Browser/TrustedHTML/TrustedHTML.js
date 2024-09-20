!function () {
    Object.defineProperty(window, "TrustedHTML", {
        value: rsvm.RsCreateConstructor("TrustedHTML"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TrustedHTML = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("TrustedHTML", target);
        },
        new() {
            let obj = rsvm.RsCreate(TrustedHTML.prototype);
            return obj;
        },
    };

    Object.defineProperties(TrustedHTML, {
        prototype: { value: TrustedHTML.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TrustedHTML.prototype, {
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toString: {
            value: rsvm.RsCreateAction("toString", 0, function toString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TrustedHTML },
        [Symbol.toStringTag]: { value: "TrustedHTML", writable: false, enumerable: false, configurable: true, },
    });
}();