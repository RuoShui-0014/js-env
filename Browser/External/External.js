!function () {
    Object.defineProperty(window, "External", {
        value: rsvm.RsCreateConstructor("External"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.External = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("External", target);
        },
        new() {
            let obj = rsvm.RsCreate(External.prototype);
            return obj;
        },
    };

    Object.defineProperties(External, {
        prototype: { value: External.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(External.prototype, {
        AddSearchProvider: {
            value: rsvm.RsCreateAction("AddSearchProvider", 0, function AddSearchProvider() {
            }), writable: true, enumerable: true, configurable: true,
        },
        IsSearchProviderInstalled: {
            value: rsvm.RsCreateAction("IsSearchProviderInstalled", 0, function IsSearchProviderInstalled() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: External },
        [Symbol.toStringTag]: { value: "External", writable: false, enumerable: false, configurable: true, },
    });
}();