!function () {
    Object.defineProperty(window, "WebGLTexture", {
        value: rsvm.RsCreateConstructor("WebGLTexture"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLTexture = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLTexture", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLTexture.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLTexture, {
        prototype: { value: WebGLTexture.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLTexture.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLTexture },
        [Symbol.toStringTag]: { value: "WebGLTexture", writable: false, enumerable: false, configurable: true, },
    });
}();