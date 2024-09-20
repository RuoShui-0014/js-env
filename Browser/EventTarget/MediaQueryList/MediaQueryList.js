!function () {
    Object.defineProperty(window, "MediaQueryList", {
        value: rsvm.RsCreateConstructor("MediaQueryList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MediaQueryList = {
        memory: {
            media: "(any-pointer: fine)",
            matches: true,
            onchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MediaQueryList", target);
        },
        new() {
            let obj = rsvm.RsCreate(MediaQueryList.prototype);
            return obj;
        },
    };

    Object.defineProperties(MediaQueryList, {
        prototype: { value: MediaQueryList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MediaQueryList.prototype, {
        media: {
            get: rsvm.RsCreateGetter("media", function media() {
                return rsvm.get(this, "media");
            }), set: undefined, enumerable: true, configurable: true,
        },
        matches: {
            get: rsvm.RsCreateGetter("matches", function matches() {
                return rsvm.get(this, "matches");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        addListener: { value: undefined, writable: true, enumerable: true, configurable: true, },
        removeListener: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: MediaQueryList },
        [Symbol.toStringTag]: { value: "MediaQueryList", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(MediaQueryList, EventTarget);
    Object.setPrototypeOf(MediaQueryList.prototype, EventTarget.prototype);
}();