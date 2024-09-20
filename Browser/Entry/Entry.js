!function () {
    let Entry = {};

    rsvm.prototype.Entry = {
        memory: {
            isFile: false,
            isDirectory: true,
            name: "",
            fullPath: "/",
            filesystem: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Entry", target);
        },
        instance(){
            return Entry;
        },
        new() {
            let obj = rsvm.RsCreate(Entry);
            return obj;
        },
    };

    Object.defineProperties(Entry, {
        isFile: {
            get: rsvm.RsCreateGetter("isFile", function isFile() {
                return rsvm.get(this, "isFile");
            }), set: undefined, enumerable: true, configurable: true,
        },
        isDirectory: {
            get: rsvm.RsCreateGetter("isDirectory", function isDirectory() {
                return rsvm.get(this, "isDirectory");
            }), set: undefined, enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fullPath: {
            get: rsvm.RsCreateGetter("fullPath", function fullPath() {
                return rsvm.get(this, "fullPath");
            }), set: undefined, enumerable: true, configurable: true,
        },
        filesystem: {
            get: rsvm.RsCreateGetter("filesystem", function filesystem() {
                return rsvm.get(this, "filesystem");
            }), set: undefined, enumerable: true, configurable: true,
        },
        copyTo: {
            value: rsvm.RsCreateAction("copyTo", 1, function copyTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getMetadata: {
            value: rsvm.RsCreateAction("getMetadata", 1, function getMetadata() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getParent: {
            value: rsvm.RsCreateAction("getParent", 0, function getParent() {
            }), writable: true, enumerable: true, configurable: true,
        },
        moveTo: {
            value: rsvm.RsCreateAction("moveTo", 1, function moveTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 1, function remove() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toURL: {
            value: rsvm.RsCreateAction("toURL", 0, function toURL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Entry", writable: false, enumerable: false, configurable: true, },
    });
}();