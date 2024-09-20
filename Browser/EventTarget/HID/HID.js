!function () {
    Object.defineProperty(window, "HID", {
        value: rsvm.RsCreateConstructor("HID"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HID = {
        memory: {
            onconnect: null,
            ondisconnect: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HID", target);
        },
        new() {
            let obj = rsvm.RsCreate(HID.prototype);
            return obj;
        },
    };

    Object.defineProperties(HID, {
        prototype: { value: HID.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HID.prototype, {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: HID },
        requestDevice: {
            value: rsvm.RsCreateAction("requestDevice", 1, function requestDevice() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HID", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HID, EventTarget);
    Object.setPrototypeOf(HID.prototype, EventTarget.prototype);
}();