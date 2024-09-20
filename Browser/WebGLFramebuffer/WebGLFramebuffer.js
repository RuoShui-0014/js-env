!function () {
    Object.defineProperty(window, "WebGLFramebuffer", {
        value: rsvm.RsCreateConstructor("WebGLFramebuffer"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLFramebuffer = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLFramebuffer", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLFramebuffer.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebGLFramebuffer, {
        prototype: { value: WebGLFramebuffer.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WebGLFramebuffer.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLFramebuffer },
        [Symbol.toStringTag]: { value: "WebGLFramebuffer", writable: false, enumerable: false, configurable: true, },
    });
}();