!function () {
    Object.defineProperty(window, "BeforeUnloadEvent", {
        value: rsvm.RsCreateConstructor("BeforeUnloadEvent", 1, function BeforeUnloadEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.BeforeUnloadEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.BeforeUnloadEvent = {
        memory: {
            returnValue: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("BeforeUnloadEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("BeforeUnloadEvent", arguments);
            let obj = rsvm.RsCreate(BeforeUnloadEvent.prototype);
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

    Object.defineProperties(BeforeUnloadEvent, {
        prototype: { value: BeforeUnloadEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(BeforeUnloadEvent.prototype, {
        returnValue: {
            get: rsvm.RsCreateGetter("returnValue", function returnValue() {
                if (rsvm.debugger) { debugger }     // 调试测试
                return rsvm.get(this, "returnValue");
            }), set: rsvm.RsCreateSetter("returnValue", function returnValue() {
                if (rsvm.debugger) { debugger }     // 调试测试
                rsvm.set(this, "returnValue", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: BeforeUnloadEvent },
        [Symbol.toStringTag]: { value: "BeforeUnloadEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(BeforeUnloadEvent, Event);
    Object.setPrototypeOf(BeforeUnloadEvent.prototype, Event.prototype);
}();