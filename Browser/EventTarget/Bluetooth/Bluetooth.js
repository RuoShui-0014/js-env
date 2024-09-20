!function () {
    Object.defineProperty(window, "Bluetooth", {
        value: rsvm.RsCreateConstructor("Bluetooth"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Bluetooth = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Bluetooth", target);
        },
        new() {
            let obj = rsvm.RsCreate(Bluetooth.prototype);
            return obj;
        },
    };

    Object.defineProperties(Bluetooth, {
        prototype: { value: Bluetooth.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Bluetooth.prototype, {
        getAvailability: {
            value: rsvm.RsCreateAction("getAvailability", 0, function getAvailability() {
                return new Promise((resolve, reject)=>{ resolve(true); });
            }), writable: true, enumerable: true, configurable: true,
        },
        requestDevice: {
            value: rsvm.RsCreateAction("requestDevice", 0, function requestDevice() {
                return new Promise((resolve, reject)=>{ reject(new TypeError()); });
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Bluetooth },
        [Symbol.toStringTag]: { value: "Bluetooth", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Bluetooth, EventTarget);
    Object.setPrototypeOf(Bluetooth.prototype, EventTarget.prototype);
}();