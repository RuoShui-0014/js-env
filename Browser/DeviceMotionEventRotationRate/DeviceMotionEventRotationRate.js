!function () {
    Object.defineProperty(window, "DeviceMotionEventRotationRate", {
        value: rsvm.RsCreateConstructor("DeviceMotionEventRotationRate"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DeviceMotionEventRotationRate = {
        memory: {
            alpha: null,
            beta: null,
            gamma: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DeviceMotionEventRotationRate", target);
        },
        new() {
            let obj = rsvm.RsCreate(DeviceMotionEventRotationRate.prototype);
            return obj;
        },
    };

    Object.defineProperties(DeviceMotionEventRotationRate, {
        prototype: { value: DeviceMotionEventRotationRate.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DeviceMotionEventRotationRate.prototype, {
        alpha: {
            get: rsvm.RsCreateGetter("alpha", function alpha() {
                return rsvm.get(this, "alpha");
            }), set: undefined, enumerable: true, configurable: true,
        },
        beta: {
            get: rsvm.RsCreateGetter("beta", function beta() {
                return rsvm.get(this, "beta");
            }), set: undefined, enumerable: true, configurable: true,
        },
        gamma: {
            get: rsvm.RsCreateGetter("gamma", function gamma() {
                return rsvm.get(this, "gamma");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DeviceMotionEventRotationRate },
        [Symbol.toStringTag]: { value: "DeviceMotionEventRotationRate", writable: false, enumerable: false, configurable: true, },
    });
}();