!function () {
    Object.defineProperty(window, "MutationObserver", {
        value: rsvm.RsCreateConstructor("MutationObserver", 1, function () {
            if (typeof arguments[0] != "function"){
                throw new TypeError("Failed to construct 'MutationObserver': 1 argument required, but only 0 present.");
            }
            return rsvm.prototype.MutationObserver.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MutationObserver = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("MutationObserver", target);
        },
        new() {
            let obj = rsvm.RsCreate(MutationObserver.prototype);
            return obj;
        },
    };

    Object.defineProperties(MutationObserver, {
        prototype: { value: MutationObserver.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MutationObserver.prototype, {
        disconnect: {
            value: rsvm.RsCreateAction("disconnect", 0, function disconnect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        observe: {
            value: rsvm.RsCreateAction("observe", 1, function observe() {
            }), writable: true, enumerable: true, configurable: true,
        },
        takeRecords: {
            value: rsvm.RsCreateAction("takeRecords", 0, function takeRecords() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MutationObserver },
        [Symbol.toStringTag]: { value: "MutationObserver", writable: false, enumerable: false, configurable: true, },
    });
}();