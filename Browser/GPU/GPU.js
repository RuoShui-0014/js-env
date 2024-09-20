!function () {
    Object.defineProperty(window, "GPU", {
        value: rsvm.RsCreateConstructor("GPU"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.GPU = {
        memory: {
            wgslLanguageFeatures: rsvm.prototype.WGSLLanguageFeatures.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("GPU", target);
        },
        new() {
            let obj = rsvm.RsCreate(GPU.prototype);
            return obj;
        },
    };

    Object.defineProperties(GPU, {
        prototype: { value: GPU.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(GPU.prototype, {
        wgslLanguageFeatures: {
            get: rsvm.RsCreateGetter("wgslLanguageFeatures", function wgslLanguageFeatures() {
                return rsvm.get(this, "wgslLanguageFeatures");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getPreferredCanvasFormat: {
            value: rsvm.RsCreateAction("getPreferredCanvasFormat", 0, function getPreferredCanvasFormat() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestAdapter: {
            value: rsvm.RsCreateAction("requestAdapter", 0, function requestAdapter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: GPU },
        [Symbol.toStringTag]: { value: "GPU", writable: false, enumerable: false, configurable: true, },
    });
}();