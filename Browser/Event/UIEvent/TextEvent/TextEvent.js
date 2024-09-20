!function () {
    Object.defineProperty(window, "TextEvent", {
        value: rsvm.RsCreateConstructor("TextEvent"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TextEvent = {
        memory: {
            data: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TextEvent", target);
        },
        new() {
            let obj = rsvm.RsCreate(TextEvent.prototype);
            return obj;
        },
    };

    Object.defineProperties(TextEvent, {
        prototype: { value: TextEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TextEvent.prototype, {
        data: {
            get: rsvm.RsCreateGetter("data", function data() {
                return rsvm.get(this, "data");
            }), set: undefined, enumerable: true, configurable: true,
        },
        initTextEvent: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: TextEvent },
        [Symbol.toStringTag]: { value: "TextEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(TextEvent, UIEvent);
    Object.setPrototypeOf(TextEvent.prototype, UIEvent.prototype);
}();