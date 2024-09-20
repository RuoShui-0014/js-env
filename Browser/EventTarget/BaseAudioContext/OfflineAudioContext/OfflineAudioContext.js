!function () {
    Object.defineProperty(window, "OfflineAudioContext", {
        value: rsvm.RsCreateConstructor("OfflineAudioContext"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.OfflineAudioContext = {
        memory: {
            oncomplete: undefined,
            length: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("OfflineAudioContext", target);
        },
        new() {
            let obj = rsvm.RsCreate(OfflineAudioContext.prototype);
            return obj;
        },
    };

    Object.defineProperties(OfflineAudioContext, {
        prototype: { value: OfflineAudioContext.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(OfflineAudioContext.prototype, {
        oncomplete: {
            get: rsvm.RsCreateGetter("oncomplete", function oncomplete() {
                return rsvm.get(this, "oncomplete");
            }), set: rsvm.RsCreateSetter("oncomplete", function oncomplete() {
                rsvm.set(this, "oncomplete", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        resume: { value: undefined, writable: true, enumerable: true, configurable: true, },
        startRendering: { value: undefined, writable: true, enumerable: true, configurable: true, },
        suspend: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: OfflineAudioContext },
        [Symbol.toStringTag]: { value: "OfflineAudioContext", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(OfflineAudioContext, BaseAudioContext);
    Object.setPrototypeOf(OfflineAudioContext.prototype, BaseAudioContext.prototype);
}();