!function () {
    Object.defineProperty(window, "UIEvent", {
        value: rsvm.RsCreateConstructor("UIEvent", 1, function UIEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.UIEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.UIEvent = {
        memory: {
            view: null,
            detail: 0,
            sourceCapabilities: null,
            which: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("UIEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("UIEvent", arguments);
            let obj = rsvm.RsCreate(UIEvent.prototype);
            rsvm.set(obj, "isTrusted", false);
            Object.defineProperty(obj, "isTrusted", {
                get: rsvm.RsCreateGetter("isTrusted", function(){
                    return rsvm.get(this, "isTrusted");
                }), set: undefined, enumerable: true, configurable: false
            });
            if (arguments[1] != undefined){
                for (const key in arguments[1]){
                    rsvm.set(obj, key, arguments[1][key]);
                }
            }
            return obj;
        },
    };

    Object.defineProperties(UIEvent, {
        prototype: { value: UIEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(UIEvent.prototype, {
        view: {
            get: rsvm.RsCreateGetter("view", function view() {
                return rsvm.get(this, "view");
            }), set: undefined, enumerable: true, configurable: true,
        },
        detail: {
            get: rsvm.RsCreateGetter("detail", function detail() {
                return rsvm.get(this, "detail");
            }), set: undefined, enumerable: true, configurable: true,
        },
        sourceCapabilities: {
            get: rsvm.RsCreateGetter("sourceCapabilities", function sourceCapabilities() {
                return rsvm.get(this, "sourceCapabilities");
            }), set: undefined, enumerable: true, configurable: true,
        },
        which: {
            get: rsvm.RsCreateGetter("which", function which() {
                return rsvm.get(this, "which");
            }), set: undefined, enumerable: true, configurable: true,
        },
        initUIEvent: {
            value: rsvm.RsCreateAction("initUIEvent", 1, function initUIEvent() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: UIEvent },
        [Symbol.toStringTag]: { value: "UIEvent", writable: false, enumerable: false, configurable: true, },
    });
    
    Object.setPrototypeOf(UIEvent, Event);
    Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
}();