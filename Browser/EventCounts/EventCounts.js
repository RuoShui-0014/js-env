!function () {
    Object.defineProperty(window, "EventCounts", {
        value: rsvm.RsCreateConstructor("EventCounts"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.EventCounts = {
        memory: {
            size: 36,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("EventCounts", target);
        },
        new() {
            let obj = rsvm.RsCreate(EventCounts.prototype);
            return obj;
        },
    };

    Object.defineProperties(EventCounts, {
        prototype: { value: EventCounts.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(EventCounts.prototype, {
        size: {
            get: rsvm.RsCreateGetter("size", function size() {
                return rsvm.get(this, "size");
            }), set: undefined, enumerable: true, configurable: true,
        },
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forEach: {
            value: rsvm.RsCreateAction("forEach", 1, function forEach() {
                for (const key of Object.keys(this)){
                    if (typeof(arguments[0]) === 'function'){
                        arguments[0](this[key]);
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        get: {
            value: rsvm.RsCreateAction("get", 1, function get() {
            }), writable: true, enumerable: true, configurable: true,
        },
        has: {
            value: rsvm.RsCreateAction("has", 1, function has() {
            }), writable: true, enumerable: true, configurable: true,
        },
        keys: {
            value: rsvm.RsCreateAction("keys", 0, function keys() {
                return Object.keys(this);
            }), writable: true, enumerable: true, configurable: true,
        },
        values: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: EventCounts },
        [Symbol.toStringTag]: { value: "EventCounts", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("entries", 0, function* entries() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();