!function () {
    Object.defineProperty(window, "DeviceMotionEvent", {
        value: rsvm.RsCreateConstructor("DeviceMotionEvent", 1, function DeviceMotionEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.DeviceMotionEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DeviceMotionEvent = {
        memory: {
            acceleration: null,
            accelerationIncludingGravity: null,
            rotationRate: null,
            interval: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DeviceMotionEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("DeviceMotionEvent", arguments);
            let obj = rsvm.RsCreate(DeviceMotionEvent.prototype);
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

    Object.defineProperties(DeviceMotionEvent, {
        prototype: { value: DeviceMotionEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DeviceMotionEvent.prototype, {
        acceleration: {
            get: rsvm.RsCreateGetter("acceleration", function acceleration() {
                return rsvm.get(this, "acceleration");
            }), set: undefined, enumerable: true, configurable: true,
        },
        accelerationIncludingGravity: {
            get: rsvm.RsCreateGetter("accelerationIncludingGravity", function accelerationIncludingGravity() {
                return rsvm.get(this, "accelerationIncludingGravity");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rotationRate: {
            get: rsvm.RsCreateGetter("rotationRate", function rotationRate() {
                return rsvm.get(this, "rotationRate");
            }), set: undefined, enumerable: true, configurable: true,
        },
        interval: {
            get: rsvm.RsCreateGetter("interval", function interval() {
                return rsvm.get(this, "interval");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DeviceMotionEvent },
        [Symbol.toStringTag]: { value: "DeviceMotionEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DeviceMotionEvent, Event);
    Object.setPrototypeOf(DeviceMotionEvent.prototype, Event.prototype);
}();