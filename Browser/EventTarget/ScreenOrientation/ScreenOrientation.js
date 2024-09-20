!function () {
    Object.defineProperty(window, "ScreenOrientation", {
        value: rsvm.RsCreateConstructor("ScreenOrientation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ScreenOrientation = {
        memory: {
            angle: 0,
            type: "landscape-primary",
            onchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ScreenOrientation", target);
        },
        new() {
            let obj = rsvm.RsCreate(ScreenOrientation.prototype);
            return obj;
        },
    };

    Object.defineProperties(ScreenOrientation, {
        prototype: { value: ScreenOrientation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ScreenOrientation.prototype, {
        angle: {
            get: rsvm.RsCreateGetter("angle", function angle() {
                return rsvm.get(this, "angle");
            }), set: undefined, enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lock: {
            value: rsvm.RsCreateAction("lock", 1, function lock() {
            }), writable: true, enumerable: true, configurable: true,
        },
        unlock: {
            value: rsvm.RsCreateAction("unlock", 0, function unlock() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: ScreenOrientation },
        [Symbol.toStringTag]: { value: "ScreenOrientation", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(ScreenOrientation, EventTarget);
    Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);
}();