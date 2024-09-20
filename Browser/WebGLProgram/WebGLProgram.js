!function () {
    Object.defineProperty(window, "WebGLProgram", {
        value: rsvm.RsCreateConstructor("WebGLProgram"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLProgram = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLProgram", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLProgram.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLProgram, {
        prototype: { value: WebGLProgram.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLProgram.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLProgram },
        [Symbol.toStringTag]: { value: "WebGLProgram", writable: false, enumerable: false, configurable: true, },
    });
}();