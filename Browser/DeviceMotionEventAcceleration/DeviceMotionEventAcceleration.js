!function () {
    Object.defineProperty(window, "DeviceMotionEventAcceleration", {
        value: rsvm.RsCreateConstructor("DeviceMotionEventAcceleration"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DeviceMotionEventAcceleration = {
        memory: {
            x: null,
            y: null,
            z: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DeviceMotionEventAcceleration", target);
        },
        new() {
            let obj = rsvm.RsCreate(DeviceMotionEventAcceleration.prototype);
            return obj;
        },
    };

    Object.defineProperties(DeviceMotionEventAcceleration, {
        prototype: { value: DeviceMotionEventAcceleration.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DeviceMotionEventAcceleration.prototype, {
        x: {
            get: rsvm.RsCreateGetter("x", function x() {
                return rsvm.get(this, "x");
            }), set: undefined, enumerable: true, configurable: true,
        },
        y: {
            get: rsvm.RsCreateGetter("y", function y() {
                return rsvm.get(this, "y");
            }), set: undefined, enumerable: true, configurable: true,
        },
        z: {
            get: rsvm.RsCreateGetter("z", function z() {
                return rsvm.get(this, "z");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DeviceMotionEventAcceleration },
        [Symbol.toStringTag]: { value: "DeviceMotionEventAcceleration", writable: false, enumerable: false, configurable: true, },
    });
}();