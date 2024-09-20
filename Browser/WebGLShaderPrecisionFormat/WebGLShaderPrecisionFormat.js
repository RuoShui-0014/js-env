!function () {
    Object.defineProperty(window, "WebGLShaderPrecisionFormat", {
        value: rsvm.RsCreateConstructor("WebGLShaderPrecisionFormat"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLShaderPrecisionFormat = {
        memory: {
            rangeMin: 127,
            rangeMax: 127,
            precision: 23,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLShaderPrecisionFormat", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLShaderPrecisionFormat.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLShaderPrecisionFormat, {
        prototype: { value: WebGLShaderPrecisionFormat.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLShaderPrecisionFormat.prototype, {
        rangeMin: {
            get: rsvm.RsCreateGetter("rangeMin", function rangeMin() {
                return rsvm.get(this, "rangeMin");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rangeMax: {
            get: rsvm.RsCreateGetter("rangeMax", function rangeMax() {
                return rsvm.get(this, "rangeMax");
            }), set: undefined, enumerable: true, configurable: true,
        },
        precision: {
            get: rsvm.RsCreateGetter("precision", function precision() {
                return rsvm.get(this, "precision");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLShaderPrecisionFormat },
        [Symbol.toStringTag]: { value: "WebGLShaderPrecisionFormat", writable: false, enumerable: false, configurable: true, },
    });
}();