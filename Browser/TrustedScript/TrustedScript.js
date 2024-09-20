!function () {
    Object.defineProperty(window, "TrustedScript", {
        value: rsvm.RsCreateConstructor("TrustedScript"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TrustedScript = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("TrustedScript", target);
        },
        new() {
            let obj = rsvm.RsCreate(TrustedScript.prototype);
            return obj;
        },
    };

    Object.defineProperties(TrustedScript, {
        prototype: { value: TrustedScript.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TrustedScript.prototype, {
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toString: {
            value: rsvm.RsCreateAction("toString", 0, function toString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TrustedScript },
        [Symbol.toStringTag]: { value: "TrustedScript", writable: false, enumerable: false, configurable: true, },
    });
}();