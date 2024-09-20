!function () {
    Object.defineProperty(window, "WindowControlsOverlay", {
        value: rsvm.RsCreateConstructor("WindowControlsOverlay"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WindowControlsOverlay = {
        memory: {
            visible: false,
            ongeometrychange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("WindowControlsOverlay", target);
        },
        new() {
            let obj = rsvm.RsCreate(WindowControlsOverlay.prototype);
            return obj;
        },
    };

    Object.defineProperties(WindowControlsOverlay, {
        prototype: { value: WindowControlsOverlay.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WindowControlsOverlay.prototype, {
        visible: {
            get: rsvm.RsCreateGetter("visible", function visible() {
                return rsvm.get(this, "visible");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ongeometrychange: {
            get: rsvm.RsCreateGetter("ongeometrychange", function ongeometrychange() {
                return rsvm.get(this, "ongeometrychange");
            }), set: rsvm.RsCreateSetter("ongeometrychange", function ongeometrychange() {
                rsvm.set(this, "ongeometrychange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getTitlebarAreaRect: {
            value: rsvm.RsCreateAction("getTitlebarAreaRect", 0, function getTitlebarAreaRect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: WindowControlsOverlay },
        [Symbol.toStringTag]: { value: "WindowControlsOverlay", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(WindowControlsOverlay, EventTarget);
    Object.setPrototypeOf(WindowControlsOverlay.prototype, EventTarget.prototype);
}();