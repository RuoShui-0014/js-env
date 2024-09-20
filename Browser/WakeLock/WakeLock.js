!function () {
    Object.defineProperty(window, "WakeLock", {
        value: rsvm.RsCreateConstructor("WakeLock"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WakeLock = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WakeLock", target);
        },
        new() {
            let obj = rsvm.RsCreate(WakeLock.prototype);
            return obj;
        },
    };

    Object.defineProperties(WakeLock, {
        prototype: { value: WakeLock.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(WakeLock.prototype, {
        request: {
            value: rsvm.RsCreateAction("request", 0, function request() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: WakeLock },
        [Symbol.toStringTag]: { value: "WakeLock", writable: false, enumerable: false, configurable: true, },
    });
}();