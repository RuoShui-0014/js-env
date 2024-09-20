!function () {
    let DeprecatedStorageQuota = {};

    rsvm.prototype.DeprecatedStorageQuota = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DeprecatedStorageQuota", target);
        },
        new() {
            let obj = rsvm.RsCreate(DeprecatedStorageQuota);
            return obj;
        },
    };

    Object.defineProperties(DeprecatedStorageQuota, {
        queryUsageAndQuota: {
            value: rsvm.RsCreateAction("queryUsageAndQuota", 1, function queryUsageAndQuota() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestQuota: {
            value: rsvm.RsCreateAction("requestQuota", 1, function requestQuota() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "DeprecatedStorageQuota", writable: false, enumerable: false, configurable: true, },
    });
}();