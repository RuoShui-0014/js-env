!function () {
    Object.defineProperty(window, "AbortSignal", {
        value: rsvm.RsCreateConstructor("AbortSignal"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.AbortSignal = {
        memory: {
            aborted: false,
            reason: undefined,
            onabort: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("AbortSignal", target);
        },
        new() {
            let obj = rsvm.RsCreate(AbortSignal.prototype);
            return obj;
        },
    };

    Object.defineProperties(AbortSignal, {
        prototype: { value: AbortSignal.prototype, writable: false, enumerable: false, configurable: false },
        abort: {
            value: rsvm.RsCreateAction("abort", 0, function abort() {
            }), writable: true, enumerable: true, configurable: true
        },
        timeout: {
            value: rsvm.RsCreateAction("timeout", 1, function timeout() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperties(AbortSignal.prototype, {
        aborted: {
            get: rsvm.RsCreateGetter("aborted", function aborted() {
                return rsvm.get(this, "aborted");
            }), set: undefined, enumerable: true, configurable: true,
        },
        reason: {
            get: rsvm.RsCreateGetter("reason", function reason() {
                return rsvm.get(this, "reason");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onabort: {
            get: rsvm.RsCreateGetter("onabort", function onabort() {
                return rsvm.get(this, "onabort");
            }), set: rsvm.RsCreateSetter("onabort", function onabort() {
                rsvm.set(this, "onabort", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        throwIfAborted: {
            value: rsvm.RsCreateAction("throwIfAborted", 0, function throwIfAborted() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: AbortSignal },
        [Symbol.toStringTag]: { value: "AbortSignal", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(AbortSignal, EventTarget);
    Object.setPrototypeOf(AbortSignal.prototype, EventTarget.prototype);
}();