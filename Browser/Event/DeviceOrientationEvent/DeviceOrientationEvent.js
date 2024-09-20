!function () {
    Object.defineProperty(window, "DeviceOrientationEvent", {
        value: rsvm.RsCreateConstructor("DeviceOrientationEvent", 1, function DeviceOrientationEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.DeviceOrientationEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DeviceOrientationEvent = {
        memory: {
            alpha: null,
            beta: null,
            gamma: null,
            absolute: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DeviceOrientationEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("DeviceOrientationEvent", arguments);
            let obj = rsvm.RsCreate(DeviceOrientationEvent.prototype);
            rsvm.set(obj, "isTrusted", false);
            Object.defineProperty(obj, "isTrusted", {
                get: rsvm.RsCreateGetter("isTrusted", function(){
                    return rsvm.get(this, "isTrusted");
                }), set: undefined, enumerable: true, configurable: false
            });
            rsvm.set(obj, 'type', '' + type);
            if (arguments[1] != undefined){
                for (const key in arguments[1]){
                    rsvm.set(obj, key, arguments[1][key]);
                }
            }
            return obj;
        },
    };

    Object.defineProperties(DeviceOrientationEvent, {
        prototype: { value: DeviceOrientationEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DeviceOrientationEvent.prototype, {
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
        absolute: {
            get: rsvm.RsCreateGetter("absolute", function absolute() {
                return rsvm.get(this, "absolute");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DeviceOrientationEvent },
        [Symbol.toStringTag]: { value: "DeviceOrientationEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DeviceOrientationEvent, Event);
    Object.setPrototypeOf(DeviceOrientationEvent.prototype, Event.prototype);
}();