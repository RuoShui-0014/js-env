!function () {
    let DirectoryEntry = {};

    rsvm.prototype.DirectoryEntry = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DirectoryEntry", target);
        },
        new() {
            let obj = rsvm.RsCreate(DirectoryEntry);
            return obj;
        },
    };

    Object.defineProperties(DirectoryEntry, {
        createReader: {
            value: rsvm.RsCreateAction("createReader", 0, function createReader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getDirectory: {
            value: rsvm.RsCreateAction("getDirectory", 1, function getDirectory() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getFile: {
            value: rsvm.RsCreateAction("getFile", 1, function getFile() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeRecursively: {
            value: rsvm.RsCreateAction("removeRecursively", 1, function removeRecursively() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "DirectoryEntry", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DirectoryEntry, rsvm.prototype.Entry.instance());
}();