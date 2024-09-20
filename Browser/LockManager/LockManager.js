!function () {
    Object.defineProperty(window, "LockManager", {
        value: rsvm.RsCreateConstructor("LockManager"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.LockManager = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("LockManager", target);
        },
        new() {
            let obj = rsvm.RsCreate(LockManager.prototype);
            return obj;
        },
    };

    Object.defineProperties(LockManager, {
        prototype: { value: LockManager.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(LockManager.prototype, {
        query: {
            value: rsvm.RsCreateAction("query", 0, function query() {
            }), writable: true, enumerable: true, configurable: true,
        },
        request: {
            value: rsvm.RsCreateAction("request", 2, function request() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: LockManager },
        [Symbol.toStringTag]: { value: "LockManager", writable: false, enumerable: false, configurable: true, },
    });
}();