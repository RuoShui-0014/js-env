!function () {
    Object.defineProperty(window, "StorageManager", {
        value: rsvm.RsCreateConstructor("StorageManager"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.StorageManager = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("StorageManager", target);
        },
        new() {
            let obj = rsvm.RsCreate(StorageManager.prototype);
            return obj;
        },
    };

    Object.defineProperties(StorageManager, {
        prototype: { value: StorageManager.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(StorageManager.prototype, {
        estimate: {
            value: rsvm.RsCreateAction("estimate", 0, function estimate() {
                return Promise.resolve({quota: 128850274713, usage: 0, usageDetails: {}});
            }), writable: true, enumerable: true, configurable: true,
        },
        persisted: {
            value: rsvm.RsCreateAction("persisted", 0, function persisted() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: StorageManager },
        getDirectory: {
            value: rsvm.RsCreateAction("getDirectory", 0, function getDirectory() {
                return Promise.resolve(rsvm.prototype.FileSystemDirectoryHandle.new());
            }), writable: true, enumerable: true, configurable: true,
        },
        persist: {
            value: rsvm.RsCreateAction("persist", 0, function persist() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "StorageManager", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(StorageManager, EventTarget);
    Object.setPrototypeOf(StorageManager.prototype, EventTarget.prototype);
}();