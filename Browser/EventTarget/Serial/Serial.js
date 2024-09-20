!function () {
    Object.defineProperty(window, "Serial", {
        value: rsvm.RsCreateConstructor("Serial"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Serial = {
        memory: {
            onconnect: null,
            ondisconnect: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Serial", target);
        },
        new() {
            let obj = rsvm.RsCreate(Serial.prototype);
            return obj;
        },
    };

    Object.defineProperties(Serial, {
        prototype: { value: Serial.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Serial.prototype, {
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
        getPorts: {
            value: rsvm.RsCreateAction("getPorts", 0, function getPorts() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Serial },
        requestPort: {
            value: rsvm.RsCreateAction("requestPort", 0, function requestPort() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Serial", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Serial, EventTarget);
    Object.setPrototypeOf(Serial.prototype, EventTarget.prototype);
}();