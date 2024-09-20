!function () {
    Object.defineProperty(window, "Scheduling", {
        value: rsvm.RsCreateConstructor("Scheduling"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Scheduling = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Scheduling", target);
        },
        new() {
            let obj = rsvm.RsCreate(Scheduling.prototype);
            return obj;
        },
    };

    Object.defineProperties(Scheduling, {
        prototype: { value: Scheduling.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Scheduling.prototype, {
        isInputPending: {
            value: rsvm.RsCreateAction("isInputPending", 0, function isInputPending() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Scheduling },
        [Symbol.toStringTag]: { value: "Scheduling", writable: false, enumerable: false, configurable: true, },
    });
}();