!function () {
    Object.defineProperty(window, "IDBFactory", {
        value: rsvm.RsCreateConstructor("IDBFactory"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.IDBFactory = {
        memory: {
            databases: [],
        },
        malloc(target) {
            rsvm.mallocBaseMemory("IDBFactory", target);
        },
        new() {
            let obj = rsvm.RsCreate(IDBFactory.prototype);
            return obj;
        },
    };

    Object.defineProperties(IDBFactory, {
        prototype: { value: IDBFactory.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(IDBFactory.prototype, {
        cmp: {
            value: rsvm.RsCreateAction("cmp", 2, function cmp() {
            }), writable: true, enumerable: true, configurable: true,
        },
        databases: {
            value: rsvm.RsCreateAction("databases", 0, function databases() {
                let ary = [];
                for (const item of rsvm.get(this, "databases")) {
                    ary.push({ name: item.name, version: item.version });
                }
                return new Promise((resolve, reject) => { resolve(ary); });
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteDatabase: {
            value: rsvm.RsCreateAction("deleteDatabase", 1, function deleteDatabase() {
            }), writable: true, enumerable: true, configurable: true,
        },
        open: {
            value: rsvm.RsCreateAction("open", 1, function open() {
                let result = rsvm.prototype.IDBOpenDBRequest.new();
                let version = arguments[1] ? arguments[1] : 1;
                for (let item of rsvm.get(this, "databases")) {
                    if (item.name === arguments[0]) {
                        rsvm.set(result.result, 'name', "" + arguments[0]);
                        rsvm.set(result.result, 'version', version);
                        item.version = version;
                        return result;
                    }
                }
                rsvm.set(result.result, 'name', "" + arguments[0]);
                rsvm.set(result.result, 'version', version);
                let info = { name: arguments[0], version: version, data: {} };
                rsvm.get(this, "databases").push(info);
                return result;
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: IDBFactory },
        [Symbol.toStringTag]: { value: "IDBFactory", writable: false, enumerable: false, configurable: true, },
    });
}();