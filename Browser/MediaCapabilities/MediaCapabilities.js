!function () {
    Object.defineProperty(window, "MediaCapabilities", {
        value: rsvm.RsCreateConstructor("MediaCapabilities"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MediaCapabilities = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("MediaCapabilities", target);
        },
        new() {
            let obj = rsvm.RsCreate(MediaCapabilities.prototype);
            return obj;
        },
    };

    Object.defineProperties(MediaCapabilities, {
        prototype: { value: MediaCapabilities.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MediaCapabilities.prototype, {
        decodingInfo: {
            value: rsvm.RsCreateAction("decodingInfo", 1, function decodingInfo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        encodingInfo: {
            value: rsvm.RsCreateAction("encodingInfo", 1, function encodingInfo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MediaCapabilities },
        [Symbol.toStringTag]: { value: "MediaCapabilities", writable: false, enumerable: false, configurable: true, },
    });
}();