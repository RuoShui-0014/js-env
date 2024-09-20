!function () {
    Object.defineProperty(window, "Scheduler", {
        value: rsvm.RsCreateConstructor("Scheduler"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Scheduler = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Scheduler", target);
        },
        new() {
            let obj = rsvm.RsCreate(Scheduler.prototype);
            return obj;
        },
    };

    Object.defineProperties(Scheduler, {
        prototype: { value: Scheduler.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Scheduler.prototype, {
        postTask: {
            value: rsvm.RsCreateAction("postTask", 1, function postTask() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Scheduler },
        [Symbol.toStringTag]: { value: "Scheduler", writable: false, enumerable: false, configurable: true, },
    });
}();