!function () {
    Object.defineProperty(window, "IDBOpenDBRequest", {
        value: rsvm.RsCreateConstructor("IDBOpenDBRequest"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.IDBOpenDBRequest = {
        memory: {
            onblocked: null,
            onupgradeneeded: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("IDBOpenDBRequest", target);
        },
        new() {
            let obj = rsvm.RsCreate(IDBOpenDBRequest.prototype);
            return obj;
        },
    };

    Object.defineProperties(IDBOpenDBRequest, {
        prototype: { value: IDBOpenDBRequest.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(IDBOpenDBRequest.prototype, {
        onblocked: {
            get: rsvm.RsCreateGetter("onblocked", function onblocked() {
                return rsvm.get(this, "onblocked");
            }), set: rsvm.RsCreateSetter("onblocked", function onblocked() {
                rsvm.set(this, "onblocked", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onupgradeneeded: {
            get: rsvm.RsCreateGetter("onupgradeneeded", function onupgradeneeded() {
                return rsvm.get(this, "onupgradeneeded");
            }), set: rsvm.RsCreateSetter("onupgradeneeded", function onupgradeneeded() {
                rsvm.set(this, "onupgradeneeded", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: IDBOpenDBRequest },
        [Symbol.toStringTag]: { value: "IDBOpenDBRequest", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(IDBOpenDBRequest, IDBRequest);
    Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
}();