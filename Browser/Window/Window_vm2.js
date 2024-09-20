!function () {
    Object.defineProperties(window, {
        window: {
            get: function window() {
                return globalThis;
            }, set: undefined, enumerable: true, configurable: false
        },
    });

    Object.defineProperty(window, "Window", {
        value: rsvm.RsCreateConstructor("Window"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Window = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Window", target);
        },
        new() {
            let obj = rsvm.RsCreate(Window.prototype);
            return obj;
        },
    };

    Object.defineProperties(Window, {
        prototype: { value: Window.prototype, writable: false, enumerable: false, configurable: false },
        TEMPORARY: { value: 0, writable: false, enumerable: true, configurable: false },
        PERSISTENT: { value: 1, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(Window.prototype, {
        TEMPORARY: { value: 0, writable: false, enumerable: true, configurable: false, },
        PERSISTENT: { value: 1, writable: false, enumerable: true, configurable: false, },
        constructor: { writable: true, enumerable: false, configurable: true, value: Window },
        [Symbol.toStringTag]: { value: "Window", writable: false, enumerable: false, configurable: true, },
    });

    Object.setPrototypeOf(Window, EventTarget);
    window.__proto__ = Window.prototype;
}();
