!function () {
    Object.defineProperty(window, "Clipboard", {
        value: rsvm.RsCreateConstructor("Clipboard"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Clipboard = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Clipboard", target);
        },
        new() {
            let obj = rsvm.RsCreate(Clipboard.prototype);
            return obj;
        },
    };

    Object.defineProperties(Clipboard, {
        prototype: { value: Clipboard.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Clipboard.prototype, {
        read: {
            value: rsvm.RsCreateAction("read", 0, function read() {
            }), writable: true, enumerable: true, configurable: true,
        },
        readText: {
            value: rsvm.RsCreateAction("readText", 0, function readText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        write: {
            value: rsvm.RsCreateAction("write", 1, function write() {
            }), writable: true, enumerable: true, configurable: true,
        },
        writeText: {
            value: rsvm.RsCreateAction("writeText", 1, function writeText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Clipboard },
        [Symbol.toStringTag]: { value: "Clipboard", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Clipboard, EventTarget);
    Object.setPrototypeOf(Clipboard.prototype, EventTarget.prototype);
}();