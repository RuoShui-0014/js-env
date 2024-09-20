!function () {
    Object.defineProperty(window, "Presentation", {
        value: rsvm.RsCreateConstructor("Presentation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Presentation = {
        memory: {
            defaultRequest: null,
            receiver: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Presentation", target);
        },
        new() {
            let obj = rsvm.RsCreate(Presentation.prototype);
            return obj;
        },
    };

    Object.defineProperties(Presentation, {
        prototype: { value: Presentation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Presentation.prototype, {
        defaultRequest: {
            get: rsvm.RsCreateGetter("defaultRequest", function defaultRequest() {
                return rsvm.get(this, "defaultRequest");
            }), set: rsvm.RsCreateSetter("defaultRequest", function defaultRequest() {
                rsvm.set(this, "defaultRequest", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        receiver: {
            get: rsvm.RsCreateGetter("receiver", function receiver() {
                return rsvm.get(this, "receiver");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Presentation },
        [Symbol.toStringTag]: { value: "Presentation", writable: false, enumerable: false, configurable: true, },
    });
}();