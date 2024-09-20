!function () {
    Object.defineProperty(window, "WebGLRenderbuffer", {
        value: rsvm.RsCreateConstructor("WebGLRenderbuffer"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLRenderbuffer = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLRenderbuffer", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLRenderbuffer.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLRenderbuffer, {
        prototype: { value: WebGLRenderbuffer.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLRenderbuffer.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLRenderbuffer },
        [Symbol.toStringTag]: { value: "WebGLRenderbuffer", writable: false, enumerable: false, configurable: true, },
    });
}();