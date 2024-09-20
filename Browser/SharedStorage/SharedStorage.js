!function () {
    Object.defineProperty(window, "SharedStorage", {
        value: rsvm.RsCreateConstructor("SharedStorage"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SharedStorage = {
        memory: {
            worklet: rsvm.prototype.SharedStorageWorklet.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SharedStorage", target);
        },
        new() {
            let obj = rsvm.RsCreate(SharedStorage.prototype);
            return obj;
        },
    };

    Object.defineProperties(SharedStorage, {
        prototype: { value: SharedStorage.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SharedStorage.prototype, {
        append: {
            value: rsvm.RsCreateAction("append", 2, function append() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clear: {
            value: rsvm.RsCreateAction("clear", 0, function clear() {
            }), writable: true, enumerable: true, configurable: true,
        },
        delete: {
            value: rsvm.RsCreateAction("delete", 1, function delete_() {
            }), writable: true, enumerable: true, configurable: true,
        },
        set: {
            value: rsvm.RsCreateAction("set", 2, function set() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: SharedStorage },
        worklet: {
            get: rsvm.RsCreateGetter("worklet", function worklet() {
                return rsvm.get(this, "worklet");
            }), set: undefined, enumerable: true, configurable: true,
        },
        run: {
            value: rsvm.RsCreateAction("run", 1, function run() {
            }), writable: true, enumerable: true, configurable: true,
        },
        selectURL: {
            value: rsvm.RsCreateAction("selectURL", 2, function selectURL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "SharedStorage", writable: false, enumerable: false, configurable: true, },
        [Symbol.asyncIterator]: { value: undefined, writable: true, enumerable: false, configurable: true, },
    });
}();