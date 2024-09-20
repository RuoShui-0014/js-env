!function () {
    Object.defineProperty(window, "PromiseRejectionEvent", {
        value: rsvm.RsCreateConstructor("PromiseRejectionEvent"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PromiseRejectionEvent = {
        memory: {
            promise: undefined,
            reason: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PromiseRejectionEvent", target);
        },
        new() {
            let obj = rsvm.RsCreate(PromiseRejectionEvent.prototype);
            return obj;
        },
    };

    Object.defineProperties(PromiseRejectionEvent, {
        prototype: { value: PromiseRejectionEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PromiseRejectionEvent.prototype, {
        promise: {
            get: rsvm.RsCreateGetter("promise", function promise() {
                return rsvm.get(this, "promise");
            }), set: undefined, enumerable: true, configurable: true,
        },
        reason: {
            get: rsvm.RsCreateGetter("reason", function reason() {
                return rsvm.get(this, "reason");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PromiseRejectionEvent },
        [Symbol.toStringTag]: { value: "PromiseRejectionEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(PromiseRejectionEvent, Event);
    Object.setPrototypeOf(PromiseRejectionEvent.prototype, Event.prototype);
}();