!function () {
    Object.defineProperty(window, "IDBDatabase", {
        value: rsvm.RsCreateConstructor("IDBDatabase"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.IDBDatabase = {
        memory: {
            name: "",
            version: 1,
            objectStoreNames: rsvm.prototype.DOMStringList.new(),
            onabort: null,
            onclose: null,
            onerror: null,
            onversionchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("IDBDatabase", target);
        },
        new() {
            let obj = rsvm.RsCreate(IDBDatabase.prototype);
            return obj;
        },
    };

    Object.defineProperties(IDBDatabase, {
        prototype: { value: IDBDatabase.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(IDBDatabase.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        version: {
            get: rsvm.RsCreateGetter("version", function version() {
                return rsvm.get(this, "version");
            }), set: undefined, enumerable: true, configurable: true,
        },
        objectStoreNames: {
            get: rsvm.RsCreateGetter("objectStoreNames", function objectStoreNames() {
                return rsvm.get(this, "objectStoreNames");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onabort: {
            get: rsvm.RsCreateGetter("onabort", function onabort() {
                return rsvm.get(this, "onabort");
            }), set: rsvm.RsCreateSetter("onabort", function onabort() {
                rsvm.set(this, "onabort", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onclose: {
            get: rsvm.RsCreateGetter("onclose", function onclose() {
                return rsvm.get(this, "onclose");
            }), set: rsvm.RsCreateSetter("onclose", function onclose() {
                rsvm.set(this, "onclose", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onversionchange: {
            get: rsvm.RsCreateGetter("onversionchange", function onversionchange() {
                return rsvm.get(this, "onversionchange");
            }), set: rsvm.RsCreateSetter("onversionchange", function onversionchange() {
                rsvm.set(this, "onversionchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        close: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createObjectStore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        deleteObjectStore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        transaction: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: IDBDatabase },
        [Symbol.toStringTag]: { value: "IDBDatabase", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(IDBDatabase, EventTarget);
    Object.setPrototypeOf(IDBDatabase.prototype, EventTarget.prototype);
}();