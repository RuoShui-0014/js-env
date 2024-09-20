!function () {
    Object.defineProperty(window, "PerformanceServerTiming", {
        value: rsvm.RsCreateConstructor("PerformanceServerTiming"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PerformanceServerTiming = {
        memory: {
            name: undefined,
            duration: undefined,
            description: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PerformanceServerTiming", target);
        },
        new() {
            let obj = rsvm.RsCreate(PerformanceServerTiming.prototype);
            return obj;
        },
    };

    Object.defineProperties(PerformanceServerTiming, {
        prototype: { value: PerformanceServerTiming.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PerformanceServerTiming.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        duration: {
            get: rsvm.RsCreateGetter("duration", function duration() {
                return rsvm.get(this, "duration");
            }), set: undefined, enumerable: true, configurable: true,
        },
        description: {
            get: rsvm.RsCreateGetter("description", function description() {
                return rsvm.get(this, "description");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toJSON: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: PerformanceServerTiming },
        [Symbol.toStringTag]: { value: "PerformanceServerTiming", writable: false, enumerable: false, configurable: true, },
    });
}();