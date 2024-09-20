!function () {
    Object.defineProperty(window, "Storage", {
        value: rsvm.RsCreateConstructor("Storage"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Storage = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Storage", target);
        },
        new() {
            let obj = rsvm.RsCreate(Storage.prototype);
            return obj;
        },
    };

    Object.defineProperties(Storage, {
        prototype: { value: Storage.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Storage.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        clear: {
            value: rsvm.RsCreateAction("clear", 0, function clear() {
                for (const key of Object.getOwnPropertyNames(this)) {
                    delete this[key];
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        getItem: {
            value: rsvm.RsCreateAction("getItem", 1, function getItem() {
                let key = arguments[0];
                if (Object.hasOwn(this, key)) {
                    return this[key];
                } else {
                    return null;
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        key: {
            value: rsvm.RsCreateAction("key", 1, function key() {
                let keyArray = Object.keys(this), index = arguments[0];
                if (index >= 0 && index < keyArray.length) {
                    return keyArray[index];
                } else {
                    return null;
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        removeItem: {
            value: rsvm.RsCreateAction("removeItem", 1, function removeItem() {
                let key = arguments[0];
                if (Object.hasOwn(this, key)) {
                    delete this[key];
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        setItem: {
            value: rsvm.RsCreateAction("setItem", 2, function setItem() {
                let key = arguments[0], value = "" + arguments[1];
                Object.defineProperty(this, key, { value: value, writable: true, enumerable: true, configurable: true });
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Storage },
        [Symbol.toStringTag]: { value: "Storage", writable: false, enumerable: false, configurable: true, },
    });
}();