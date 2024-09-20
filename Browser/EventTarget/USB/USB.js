!function () {
    Object.defineProperty(window, "USB", {
        value: rsvm.RsCreateConstructor("USB"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.USB = {
        memory: {
            onconnect: null,
            ondisconnect: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("USB", target);
        },
        new() {
            let obj = rsvm.RsCreate(USB.prototype);
            return obj;
        },
    };

    Object.defineProperties(USB, {
        prototype: { value: USB.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(USB.prototype, {
        onconnect: {
            get: rsvm.RsCreateGetter("onconnect", function onconnect() {
                return rsvm.get(this, "onconnect");
            }), set: rsvm.RsCreateSetter("onconnect", function onconnect() {
                rsvm.set(this, "onconnect", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondisconnect: {
            get: rsvm.RsCreateGetter("ondisconnect", function ondisconnect() {
                return rsvm.get(this, "ondisconnect");
            }), set: rsvm.RsCreateSetter("ondisconnect", function ondisconnect() {
                rsvm.set(this, "ondisconnect", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getDevices: {
            value: rsvm.RsCreateAction("getDevices", 0, function getDevices() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: USB },
        requestDevice: {
            value: rsvm.RsCreateAction("requestDevice", 1, function requestDevice() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "USB", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(USB, EventTarget);
    Object.setPrototypeOf(USB.prototype, EventTarget.prototype);
}();