!function () {
    let MemoryInfo = {};

    rsvm.prototype.MemoryInfo = {
        memory: {
            totalJSHeapSize: 10135337,
            usedJSHeapSize: 7834197,
            jsHeapSizeLimit: 4294705152,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MemoryInfo", target);
        },
        new() {
            let obj = rsvm.RsCreate(MemoryInfo);
            return obj;
        },
    };

    Object.defineProperties(MemoryInfo, {
        totalJSHeapSize: {
            get: rsvm.RsCreateGetter("totalJSHeapSize", function totalJSHeapSize() {
                return rsvm.get(this, "totalJSHeapSize");
            }), set: undefined, enumerable: true, configurable: true,
        },
        usedJSHeapSize: {
            get: rsvm.RsCreateGetter("usedJSHeapSize", function usedJSHeapSize() {
                return rsvm.get(this, "usedJSHeapSize");
            }), set: undefined, enumerable: true, configurable: true,
        },
        jsHeapSizeLimit: {
            get: rsvm.RsCreateGetter("jsHeapSizeLimit", function jsHeapSizeLimit() {
                return rsvm.get(this, "jsHeapSizeLimit");
            }), set: undefined, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "MemoryInfo", writable: false, enumerable: false, configurable: true, },
    });
}();