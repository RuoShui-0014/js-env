!function () {
    Object.defineProperty(window, "WebGLBuffer", {
        value: rsvm.RsCreateConstructor("WebGLBuffer"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLBuffer = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLBuffer", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLBuffer.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLBuffer, {
        prototype: { value: WebGLBuffer.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLBuffer.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLBuffer },
        [Symbol.toStringTag]: { value: "WebGLBuffer", writable: false, enumerable: false, configurable: true, },
    });
}();