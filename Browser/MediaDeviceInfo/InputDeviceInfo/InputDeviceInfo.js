!function () {
    Object.defineProperty(window, "InputDeviceInfo", {
        value: rsvm.RsCreateConstructor("InputDeviceInfo"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.InputDeviceInfo = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("InputDeviceInfo", target);
        },
        new() {
            let obj = rsvm.RsCreate(InputDeviceInfo.prototype);
            return obj;
        },
    };

    Object.defineProperties(InputDeviceInfo, {
        prototype: { value: InputDeviceInfo.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(InputDeviceInfo.prototype, {
        getCapabilities: {
            value: rsvm.RsCreateAction('getCapabilities', 0, function getCapabilities() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: InputDeviceInfo },
        [Symbol.toStringTag]: { value: "InputDeviceInfo", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(InputDeviceInfo, MediaDeviceInfo);
    Object.setPrototypeOf(InputDeviceInfo.prototype, MediaDeviceInfo.prototype);
}();