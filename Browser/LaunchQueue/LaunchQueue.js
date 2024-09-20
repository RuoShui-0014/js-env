!function () {
    Object.defineProperty(window, "LaunchQueue", {
        value: rsvm.RsCreateConstructor("LaunchQueue"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.LaunchQueue = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("LaunchQueue", target);
        },
        new() {
            let obj = rsvm.RsCreate(LaunchQueue.prototype);
            return obj;
        },
    };

    Object.defineProperties(LaunchQueue, {
        prototype: { value: LaunchQueue.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(LaunchQueue.prototype, {
        setConsumer: {
            value: rsvm.RsCreateAction("setConsumer", 1, function setConsumer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: LaunchQueue },
        [Symbol.toStringTag]: { value: "LaunchQueue", writable: false, enumerable: false, configurable: true, },
    });
}();