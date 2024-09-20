!function () {
    Object.defineProperty(window, "WebGLShader", {
        value: rsvm.RsCreateConstructor("WebGLShader"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLShader = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLShader", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLShader.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLShader, {
        prototype: { value: WebGLShader.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLShader.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLShader },
        [Symbol.toStringTag]: { value: "WebGLShader", writable: false, enumerable: false, configurable: true, },
    });
}();