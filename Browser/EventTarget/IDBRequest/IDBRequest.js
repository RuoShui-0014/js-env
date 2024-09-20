!function () {
    Object.defineProperty(window, "IDBRequest", {
        value: rsvm.RsCreateConstructor("IDBRequest"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.IDBRequest = {
        memory: {
            result: rsvm.prototype.IDBDatabase.new(),
            error: null,
            source: null,
            transaction: null,
            readyState: "done",
            onsuccess: null,
            onerror: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("IDBRequest", target);
        },
        new() {
            let obj = rsvm.RsCreate(IDBRequest.prototype);
            return obj;
        },
    };

    Object.defineProperties(IDBRequest, {
        prototype: { value: IDBRequest.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(IDBRequest.prototype, {
        result: {
            get: rsvm.RsCreateGetter("result", function result() {
                return rsvm.get(this, "result");
            }), set: undefined, enumerable: true, configurable: true,
        },
        error: {
            get: rsvm.RsCreateGetter("error", function error() {
                return rsvm.get(this, "error");
            }), set: undefined, enumerable: true, configurable: true,
        },
        source: {
            get: rsvm.RsCreateGetter("source", function source() {
                return rsvm.get(this, "source");
            }), set: undefined, enumerable: true, configurable: true,
        },
        transaction: {
            get: rsvm.RsCreateGetter("transaction", function transaction() {
                return rsvm.get(this, "transaction");
            }), set: undefined, enumerable: true, configurable: true,
        },
        readyState: {
            get: rsvm.RsCreateGetter("readyState", function readyState() {
                return rsvm.get(this, "readyState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onsuccess: {
            get: rsvm.RsCreateGetter("onsuccess", function onsuccess() {
                return rsvm.get(this, "onsuccess");
            }), set: rsvm.RsCreateSetter("onsuccess", function onsuccess() {
                rsvm.set(this, "onsuccess", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: IDBRequest },
        [Symbol.toStringTag]: { value: "IDBRequest", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(IDBRequest, EventTarget);
    Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);
}();