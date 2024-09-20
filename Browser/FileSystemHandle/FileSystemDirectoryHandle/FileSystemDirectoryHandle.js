!function () {
    Object.defineProperty(window, "FileSystemDirectoryHandle", {
        value: rsvm.RsCreateConstructor("FileSystemDirectoryHandle"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FileSystemDirectoryHandle = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("FileSystemDirectoryHandle", target);
        },
        new() {
            let obj = rsvm.RsCreate(FileSystemDirectoryHandle.prototype);
            return obj;
        },
    };

    Object.defineProperties(FileSystemDirectoryHandle, {
        prototype: { value: FileSystemDirectoryHandle.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FileSystemDirectoryHandle.prototype, {
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getDirectoryHandle: {
            value: rsvm.RsCreateAction("getDirectoryHandle", 1, function getDirectoryHandle() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getFileHandle: {
            value: rsvm.RsCreateAction("getFileHandle", 1, function getFileHandle() {
            }), writable: true, enumerable: true, configurable: true,
        },
        keys: {
            value: rsvm.RsCreateAction("keys", 0, function keys() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeEntry: {
            value: rsvm.RsCreateAction("removeEntry", 1, function removeEntry() {
            }), writable: true, enumerable: true, configurable: true,
        },
        resolve: {
            value: rsvm.RsCreateAction("resolve", 1, function resolve() {
            }), writable: true, enumerable: true, configurable: true,
        },
        values: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: FileSystemDirectoryHandle },
        [Symbol.toStringTag]: { value: "FileSystemDirectoryHandle", writable: false, enumerable: false, configurable: true, },
        [Symbol.asyncIterator]: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(FileSystemDirectoryHandle, FileSystemHandle);
    Object.setPrototypeOf(FileSystemDirectoryHandle.prototype, FileSystemHandle.prototype);
}();