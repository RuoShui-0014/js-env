!function () {
    Object.defineProperty(window, "PerformanceEntry", {
        value: rsvm.RsCreateConstructor("PerformanceEntry"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PerformanceEntry = {
        memory: {
            name: "https://g.alicdn.com/AWSC/fireyejs/1.227.0/fireyejs.js",
            entryType: "resource",
            startTime: 3182.100000000559,
            duration: 45.59999999962747,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PerformanceEntry", target);
        },
        new() {
            let obj = rsvm.RsCreate(PerformanceEntry.prototype);
            return obj;
        },
    };

    Object.defineProperties(PerformanceEntry, {
        prototype: { value: PerformanceEntry.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PerformanceEntry.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        entryType: {
            get: rsvm.RsCreateGetter("entryType", function entryType() {
                return rsvm.get(this, "entryType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        startTime: {
            get: rsvm.RsCreateGetter("startTime", function startTime() {
                return rsvm.get(this, "startTime");
            }), set: undefined, enumerable: true, configurable: true,
        },
        duration: {
            get: rsvm.RsCreateGetter("duration", function duration() {
                return rsvm.get(this, "duration");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PerformanceEntry },
        [Symbol.toStringTag]: { value: "PerformanceEntry", writable: false, enumerable: false, configurable: true, },
    });
}();