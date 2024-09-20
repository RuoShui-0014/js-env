!function () {
    let DOMFileSystem = {};

    rsvm.prototype.DOMFileSystem = {
        memory: {
            name: "https_zwfw.nmpa.gov.cn_0:Temporary",
            root: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DOMFileSystem", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMFileSystem);
            let dirEntry = rsvm.prototype.DirectoryEntry.new();
            rsvm.set(dirEntry, "filesystem", obj);
            rsvm.set(obj, "root", dirEntry);
            return obj;
        },
    };

    Object.defineProperties(DOMFileSystem, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        root: {
            get: rsvm.RsCreateGetter("root", function root() {
                return rsvm.get(this, "root");
            }), set: undefined, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "DOMFileSystem", writable: false, enumerable: false, configurable: true, },
    });
}();