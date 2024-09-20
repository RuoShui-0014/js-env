!function () {
    Object.defineProperty(window, "CacheStorage", {
        value: rsvm.RsCreateConstructor("CacheStorage"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CacheStorage = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("CacheStorage", target);
        },
        new() {
            let obj = rsvm.RsCreate(CacheStorage.prototype);
            return obj;
        },
    };

    Object.defineProperties(CacheStorage, {
        prototype: { value: CacheStorage.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CacheStorage.prototype, {
        delete: {
            value: rsvm.RsCreateAction("delete", 1, function delete_() {
                if(rsvm.debugger) { debugger }     // 调试测试
            }), writable: true, enumerable: true, configurable: true,
        },
        has: {
            value: rsvm.RsCreateAction("has", 1, function has() {
            }), writable: true, enumerable: true, configurable: true,
        },
        keys: {
            value: rsvm.RsCreateAction("keys", 0, function keys() {
            }), writable: true, enumerable: true, configurable: true,
        },
        match: {
            value: rsvm.RsCreateAction("match", 1, function match() {
            }), writable: true, enumerable: true, configurable: true,
        },
        open: {
            value: rsvm.RsCreateAction("open", 1, function open() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CacheStorage },
        [Symbol.toStringTag]: { value: "CacheStorage", writable: false, enumerable: false, configurable: true, },
    });
}();