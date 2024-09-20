!function () {
    Object.defineProperty(window, "MessageEvent", {
        value: rsvm.RsCreateConstructor("MessageEvent", 1, function MessageEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.MessageEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MessageEvent = {
        memory: {
            data: null,
            origin: "",
            lastEventId: "",
            source: null,
            ports: [],
            userActivation: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MessageEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("MessageEvent", arguments);
            let obj = rsvm.RsCreate(MessageEvent.prototype);
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

    Object.defineProperties(MessageEvent, {
        prototype: { value: MessageEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MessageEvent.prototype, {
        data: {
            get: rsvm.RsCreateGetter("data", function data() {
                return rsvm.get(this, "data");
            }), set: undefined, enumerable: true, configurable: true,
        },
        origin: {
            get: rsvm.RsCreateGetter("origin", function origin() {
                return rsvm.get(this, "origin");
            }), set: undefined, enumerable: true, configurable: true,
        },
        lastEventId: {
            get: rsvm.RsCreateGetter("lastEventId", function lastEventId() {
                return rsvm.get(this, "lastEventId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        source: {
            get: rsvm.RsCreateGetter("source", function source() {
                return rsvm.get(this, "source");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ports: {
            get: rsvm.RsCreateGetter("ports", function ports() {
                return rsvm.get(this, "ports");
            }), set: undefined, enumerable: true, configurable: true,
        },
        userActivation: {
            get: rsvm.RsCreateGetter("userActivation", function userActivation() {
                return rsvm.get(this, "userActivation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        initMessageEvent: {
            value: rsvm.RsCreateAction("initMessageEvent", 1, function initMessageEvent() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MessageEvent },
        [Symbol.toStringTag]: { value: "MessageEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(MessageEvent, Event);
    Object.setPrototypeOf(MessageEvent.prototype, Event.prototype);
}();