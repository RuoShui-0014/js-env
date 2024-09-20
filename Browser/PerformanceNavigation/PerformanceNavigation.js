!function () {
    Object.defineProperty(window, "PerformanceNavigation", {
        value: rsvm.RsCreateConstructor("PerformanceNavigation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PerformanceNavigation = {
        memory: {
            type: 0,
            redirectCount: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PerformanceNavigation", target);
        },
        new() {
            let obj = rsvm.RsCreate(PerformanceNavigation.prototype);
            return obj;
        },
    };

    Object.defineProperties(PerformanceNavigation, {
        prototype: { value: PerformanceNavigation.prototype, writable: false, enumerable: false, configurable: false },
        TYPE_NAVIGATE: { value: 0, writable: false, enumerable: true, configurable: false },
        TYPE_RELOAD: { value: 1, writable: false, enumerable: true, configurable: false },
        TYPE_BACK_FORWARD: { value: 2, writable: false, enumerable: true, configurable: false },
        TYPE_RESERVED: { value: 255, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(PerformanceNavigation.prototype, {
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        redirectCount: {
            get: rsvm.RsCreateGetter("redirectCount", function redirectCount() {
                return rsvm.get(this, "redirectCount");
            }), set: undefined, enumerable: true, configurable: true,
        },
        TYPE_NAVIGATE: { value: 0, writable: false, enumerable: true, configurable: false, },
        TYPE_RELOAD: { value: 1, writable: false, enumerable: true, configurable: false, },
        TYPE_BACK_FORWARD: { value: 2, writable: false, enumerable: true, configurable: false, },
        TYPE_RESERVED: { value: 255, writable: false, enumerable: true, configurable: false, },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PerformanceNavigation },
        [Symbol.toStringTag]: { value: "PerformanceNavigation", writable: false, enumerable: false, configurable: true, },
    });
}();