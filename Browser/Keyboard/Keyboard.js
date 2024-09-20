!function () {
    Object.defineProperty(window, "Keyboard", {
        value: rsvm.RsCreateConstructor("Keyboard"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Keyboard = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Keyboard", target);
        },
        new() {
            let obj = rsvm.RsCreate(Keyboard.prototype);
            return obj;
        },
    };

    Object.defineProperties(Keyboard, {
        prototype: { value: Keyboard.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Keyboard.prototype, {
        getLayoutMap: {
            value: rsvm.RsCreateAction("getLayoutMap", 0, function getLayoutMap() {
            }), writable: true, enumerable: true, configurable: true,
        },
        lock: {
            value: rsvm.RsCreateAction("lock", 0, function lock() {
            }), writable: true, enumerable: true, configurable: true,
        },
        unlock: {
            value: rsvm.RsCreateAction("unlock", 0, function unlock() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Keyboard },
        [Symbol.toStringTag]: { value: "Keyboard", writable: false, enumerable: false, configurable: true, },
    });
}();