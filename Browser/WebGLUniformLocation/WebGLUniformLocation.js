!function () {
    Object.defineProperty(window, "WebGLUniformLocation", {
        value: rsvm.RsCreateConstructor("WebGLUniformLocation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLUniformLocation = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLUniformLocation", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLUniformLocation.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLUniformLocation, {
        prototype: { value: WebGLUniformLocation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLUniformLocation.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLUniformLocation },
        [Symbol.toStringTag]: { value: "WebGLUniformLocation", writable: false, enumerable: false, configurable: true, },
    });
}();