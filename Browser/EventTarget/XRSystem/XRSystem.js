!function () {
    Object.defineProperty(window, "XRSystem", {
        value: rsvm.RsCreateConstructor("XRSystem"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.XRSystem = {
        memory: {
            ondevicechange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("XRSystem", target);
        },
        new() {
            let obj = rsvm.RsCreate(XRSystem.prototype);
            return obj;
        },
    };

    Object.defineProperties(XRSystem, {
        prototype: { value: XRSystem.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(XRSystem.prototype, {
        ondevicechange: {
            get: rsvm.RsCreateGetter("ondevicechange", function ondevicechange() {
                return rsvm.get(this, "ondevicechange");
            }), set: rsvm.RsCreateSetter("ondevicechange", function ondevicechange() {
                rsvm.set(this, "ondevicechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        isSessionSupported: {
            value: rsvm.RsCreateAction("isSessionSupported", 1, function isSessionSupported() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestSession: {
            value: rsvm.RsCreateAction("requestSession", 1, function requestSession() {
            }), writable: true, enumerable: true, configurable: true,
        },
        supportsSession: {
            value: rsvm.RsCreateAction("supportsSession", 1, function supportsSession() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: XRSystem },
        [Symbol.toStringTag]: { value: "XRSystem", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(XRSystem, EventTarget);
    Object.setPrototypeOf(XRSystem.prototype, EventTarget.prototype);
}();