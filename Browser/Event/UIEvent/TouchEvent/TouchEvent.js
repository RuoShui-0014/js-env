!function () {
    Object.defineProperty(window, "TouchEvent", {
        value: rsvm.RsCreateConstructor("TouchEvent", 1, function TouchEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.TouchEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TouchEvent = {
        memory: {
            touches: rsvm.prototype.TouchList.new(),
            targetTouches: rsvm.prototype.TouchList.new(),
            changedTouches: rsvm.prototype.TouchList.new(),
            altKey: false,
            metaKey: false,
            ctrlKey: false,
            shiftKey: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TouchEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("TouchEvent", arguments);
            let obj = rsvm.RsCreate(TouchEvent.prototype);
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

    Object.defineProperties(TouchEvent, {
        prototype: { value: TouchEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TouchEvent.prototype, {
        touches: {
            get: rsvm.RsCreateGetter("touches", function touches() {
                return rsvm.get(this, "touches");
            }), set: undefined, enumerable: true, configurable: true,
        },
        targetTouches: {
            get: rsvm.RsCreateGetter("targetTouches", function targetTouches() {
                return rsvm.get(this, "targetTouches");
            }), set: undefined, enumerable: true, configurable: true,
        },
        changedTouches: {
            get: rsvm.RsCreateGetter("changedTouches", function changedTouches() {
                return rsvm.get(this, "changedTouches");
            }), set: undefined, enumerable: true, configurable: true,
        },
        altKey: {
            get: rsvm.RsCreateGetter("altKey", function altKey() {
                return rsvm.get(this, "altKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        metaKey: {
            get: rsvm.RsCreateGetter("metaKey", function metaKey() {
                return rsvm.get(this, "metaKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ctrlKey: {
            get: rsvm.RsCreateGetter("ctrlKey", function ctrlKey() {
                return rsvm.get(this, "ctrlKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        shiftKey: {
            get: rsvm.RsCreateGetter("shiftKey", function shiftKey() {
                return rsvm.get(this, "shiftKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TouchEvent },
        [Symbol.toStringTag]: { value: "TouchEvent", writable: false, enumerable: false, configurable: true, },
    });

    Object.setPrototypeOf(TouchEvent, UIEvent);
    Object.setPrototypeOf(TouchEvent.prototype, UIEvent.prototype);
}();