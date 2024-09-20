!function () {
    Object.defineProperty(window, "Ink", {
        value: rsvm.RsCreateConstructor("Ink"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Ink = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Ink", target);
        },
        new() {
            let obj = rsvm.RsCreate(Ink.prototype);
            return obj;
        },
    };

    Object.defineProperties(Ink, {
        prototype: { value: Ink.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Ink.prototype, {
        requestPresenter: {
            value: rsvm.RsCreateAction("requestPresenter", 0, function requestPresenter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Ink },
        [Symbol.toStringTag]: { value: "Ink", writable: false, enumerable: false, configurable: true, },
    });
}();