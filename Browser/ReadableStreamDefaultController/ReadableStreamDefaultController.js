!function () {
    Object.defineProperty(window, "ReadableStreamDefaultController", {
        value: rsvm.RsCreateConstructor("ReadableStreamDefaultController"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ReadableStreamDefaultController = {
        memory: {
            desiredSize: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ReadableStreamDefaultController", target);
        },
        new() {
            let obj = rsvm.RsCreate(ReadableStreamDefaultController.prototype);
            return obj;
        },
    };

    Object.defineProperties(ReadableStreamDefaultController, {
        prototype: { value: ReadableStreamDefaultController.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ReadableStreamDefaultController.prototype, {
        desiredSize: {
            get: rsvm.RsCreateGetter("desiredSize", function desiredSize() {
                return rsvm.get(this, "desiredSize");
            }), set: undefined, enumerable: true, configurable: true,
        },
        close: { value: undefined, writable: true, enumerable: true, configurable: true, },
        enqueue: { value: undefined, writable: true, enumerable: true, configurable: true, },
        error: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: ReadableStreamDefaultController },
        [Symbol.toStringTag]: { value: "ReadableStreamDefaultController", writable: false, enumerable: false, configurable: true, },
    });
}();