!function () {
    Object.defineProperty(window, "PointerEvent", {
        value: rsvm.RsCreateConstructor("PointerEvent", 1, function PointerEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.PointerEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PointerEvent = {
        memory: {
            pointerId: 0,
            width: 1,
            height: 1,
            pressure: 0,
            tiltX: 0,
            tiltY: 0,
            azimuthAngle: 0,
            altitudeAngle: 1.5707963267948966,
            tangentialPressure: 0,
            twist: 0,
            pointerType: "",
            isPrimary: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PointerEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("PointerEvent", arguments);
            let obj = rsvm.RsCreate(PointerEvent.prototype);
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

    Object.defineProperties(PointerEvent, {
        prototype: { value: PointerEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PointerEvent.prototype, {
        pointerId: {
            get: rsvm.RsCreateGetter("pointerId", function pointerId() {
                return rsvm.get(this, "pointerId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        width: {
            get: rsvm.RsCreateGetter("width", function width() {
                return rsvm.get(this, "width");
            }), set: undefined, enumerable: true, configurable: true,
        },
        height: {
            get: rsvm.RsCreateGetter("height", function height() {
                return rsvm.get(this, "height");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pressure: {
            get: rsvm.RsCreateGetter("pressure", function pressure() {
                return rsvm.get(this, "pressure");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tiltX: {
            get: rsvm.RsCreateGetter("tiltX", function tiltX() {
                return rsvm.get(this, "tiltX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tiltY: {
            get: rsvm.RsCreateGetter("tiltY", function tiltY() {
                return rsvm.get(this, "tiltY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        azimuthAngle: {
            get: rsvm.RsCreateGetter("azimuthAngle", function azimuthAngle() {
                return rsvm.get(this, "azimuthAngle");
            }), set: undefined, enumerable: true, configurable: true,
        },
        altitudeAngle: {
            get: rsvm.RsCreateGetter("altitudeAngle", function altitudeAngle() {
                return rsvm.get(this, "altitudeAngle");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tangentialPressure: {
            get: rsvm.RsCreateGetter("tangentialPressure", function tangentialPressure() {
                return rsvm.get(this, "tangentialPressure");
            }), set: undefined, enumerable: true, configurable: true,
        },
        twist: {
            get: rsvm.RsCreateGetter("twist", function twist() {
                return rsvm.get(this, "twist");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pointerType: {
            get: rsvm.RsCreateGetter("pointerType", function pointerType() {
                return rsvm.get(this, "pointerType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        isPrimary: {
            get: rsvm.RsCreateGetter("isPrimary", function isPrimary() {
                return rsvm.get(this, "isPrimary");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getCoalescedEvents: {
            value: rsvm.RsCreateAction("getCoalescedEvents", 0, function getCoalescedEvents() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getPredictedEvents: {
            value: rsvm.RsCreateAction("getPredictedEvents", 0, function getPredictedEvents() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PointerEvent },
        [Symbol.toStringTag]: { value: "PointerEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(PointerEvent, MouseEvent);
    Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);
}();