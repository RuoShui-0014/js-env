!function () {
    Object.defineProperty(window, "FileSystemHandle", {
        value: rsvm.RsCreateConstructor("FileSystemHandle"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FileSystemHandle = {
        memory: {
            kind: "directory",
            name: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("FileSystemHandle", target);
        },
        new() {
            let obj = rsvm.RsCreate(FileSystemHandle.prototype);
            return obj;
        },
    };

    Object.defineProperties(FileSystemHandle, {
        prototype: { value: FileSystemHandle.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FileSystemHandle.prototype, {
        kind: {
            get: rsvm.RsCreateGetter("kind", function kind() {
                return rsvm.get(this, "kind");
            }), set: undefined, enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        isSameEntry: {
            value: rsvm.RsCreateAction("isSameEntry", 1, function isSameEntry() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryPermission: {
            value: rsvm.RsCreateAction("queryPermission", 0, function queryPermission() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 0, function remove() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestPermission: {
            value: rsvm.RsCreateAction("requestPermission", 0, function requestPermission() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: FileSystemHandle },
        [Symbol.toStringTag]: { value: "FileSystemHandle", writable: false, enumerable: false, configurable: true, },
    });
}();