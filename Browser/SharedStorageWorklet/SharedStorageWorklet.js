!function () {
    Object.defineProperty(window, "SharedStorageWorklet", {
        value: rsvm.RsCreateConstructor("SharedStorageWorklet"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SharedStorageWorklet = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("SharedStorageWorklet", target);
        },
        new() {
            let obj = rsvm.RsCreate(SharedStorageWorklet.prototype);
            return obj;
        },
    };

    Object.defineProperties(SharedStorageWorklet, {
        prototype: { value: SharedStorageWorklet.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SharedStorageWorklet.prototype, {
        addModule: {
            value: rsvm.RsCreateAction("addModule", 1, function addModule() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: SharedStorageWorklet },
        [Symbol.toStringTag]: { value: "SharedStorageWorklet", writable: false, enumerable: false, configurable: true, },
    });
}();