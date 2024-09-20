!function () {
    Object.defineProperty(window, "TimeRanges", {
        value: rsvm.RsCreateConstructor("TimeRanges"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TimeRanges = {
        memory: {
            length: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TimeRanges", target);
        },
        new() {
            let obj = rsvm.RsCreate(TimeRanges.prototype);
            return obj;
        },
    };

    Object.defineProperties(TimeRanges, {
        prototype: { value: TimeRanges.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TimeRanges.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        end: {
            value: rsvm.RsCreateAction("end", 1, function end() {
            }), writable: true, enumerable: true, configurable: true,
        },
        start: {
            value: rsvm.RsCreateAction("start", 1, function start() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TimeRanges },
        [Symbol.toStringTag]: { value: "TimeRanges", writable: false, enumerable: false, configurable: true, },
    });
}();