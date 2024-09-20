!function () {
    Object.defineProperty(window, "Event", {
        value: rsvm.RsCreateConstructor("Event", 1, function Event() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.Event.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Event = {
        memory: {
            isTrusted: false,
            type: "",
            target: null,
            currentTarget: null,
            eventPhase: 0,
            bubbles: false,
            cancelable: false,
            defaultPrevented: false,
            composed: false,
            timeStamp: 1229632.1000000015,
            srcElement: null,
            returnValue: true,
            cancelBubble: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Event", target);
        },
        new(type) {
            rsvm.error.checkEvent("Event", arguments);
            let obj = rsvm.RsCreate(Event.prototype);
            Object.defineProperty(obj, "isTrusted", {
                get: rsvm.RsCreateGetter("isTrusted", function () {
                    return rsvm.get(this, "isTrusted");
                }), set: undefined, enumerable: true, configurable: false
            });
            if (arguments[1] != undefined) {
                for (const key in arguments[1]) {
                    rsvm.set(obj, key, arguments[1][key]);
                }
            }
            rsvm.set(obj, 'type', '' + type);
            return obj;
        },
    };

    Object.defineProperties(Event, {
        prototype: { value: Event.prototype, writable: false, enumerable: false, configurable: false },
        NONE: { value: 0, writable: false, enumerable: true, configurable: false },
        CAPTURING_PHASE: { value: 1, writable: false, enumerable: true, configurable: false },
        AT_TARGET: { value: 2, writable: false, enumerable: true, configurable: false },
        BUBBLING_PHASE: { value: 3, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(Event.prototype, {
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        target: {
            get: rsvm.RsCreateGetter("target", function target() {
                return rsvm.get(this, "target");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentTarget: {
            get: rsvm.RsCreateGetter("currentTarget", function currentTarget() {
                return rsvm.get(this, "currentTarget");
            }), set: undefined, enumerable: true, configurable: true,
        },
        eventPhase: {
            get: rsvm.RsCreateGetter("eventPhase", function eventPhase() {
                return rsvm.get(this, "eventPhase");
            }), set: undefined, enumerable: true, configurable: true,
        },
        bubbles: {
            get: rsvm.RsCreateGetter("bubbles", function bubbles() {
                return rsvm.get(this, "bubbles");
            }), set: undefined, enumerable: true, configurable: true,
        },
        cancelable: {
            get: rsvm.RsCreateGetter("cancelable", function cancelable() {
                return rsvm.get(this, "cancelable");
            }), set: undefined, enumerable: true, configurable: true,
        },
        defaultPrevented: {
            get: rsvm.RsCreateGetter("defaultPrevented", function defaultPrevented() {
                return rsvm.get(this, "defaultPrevented");
            }), set: undefined, enumerable: true, configurable: true,
        },
        composed: {
            get: rsvm.RsCreateGetter("composed", function composed() {
                return rsvm.get(this, "composed");
            }), set: undefined, enumerable: true, configurable: true,
        },
        timeStamp: {
            get: rsvm.RsCreateGetter("timeStamp", function timeStamp() {
                return rsvm.get(this, "timeStamp");
            }), set: undefined, enumerable: true, configurable: true,
        },
        srcElement: {
            get: rsvm.RsCreateGetter("srcElement", function srcElement() {
                return rsvm.get(this, "srcElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        returnValue: {
            get: rsvm.RsCreateGetter("returnValue", function returnValue() {
                return rsvm.get(this, "returnValue");
            }), set: rsvm.RsCreateSetter("returnValue", function returnValue() {
                rsvm.set(this, "returnValue", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        cancelBubble: {
            get: rsvm.RsCreateGetter("cancelBubble", function cancelBubble() {
                return rsvm.get(this, "cancelBubble");
            }), set: rsvm.RsCreateSetter("cancelBubble", function cancelBubble() {
                rsvm.set(this, "cancelBubble", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        NONE: { value: 0, writable: false, enumerable: true, configurable: false, },
        CAPTURING_PHASE: { value: 1, writable: false, enumerable: true, configurable: false, },
        AT_TARGET: { value: 2, writable: false, enumerable: true, configurable: false, },
        BUBBLING_PHASE: { value: 3, writable: false, enumerable: true, configurable: false, },
        composedPath: {
            value: rsvm.RsCreateAction("composedPath", 0, function composedPath() {
            }), writable: true, enumerable: true, configurable: true,
        },
        initEvent: {
            value: rsvm.RsCreateAction("initEvent", 1, function initEvent() {
            }), writable: true, enumerable: true, configurable: true,
        },
        preventDefault: {
            value: rsvm.RsCreateAction("preventDefault", 0, function preventDefault() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stopImmediatePropagation: {
            value: rsvm.RsCreateAction("stopImmediatePropagation", 0, function stopImmediatePropagation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stopPropagation: {
            value: rsvm.RsCreateAction("stopPropagation", 0, function stopPropagation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Event },
        [Symbol.toStringTag]: { value: "Event", writable: false, enumerable: false, configurable: true, },
    });
}();