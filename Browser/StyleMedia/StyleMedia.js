!function () {
    let StyleMedia = {};

    rsvm.prototype.StyleMedia = {
        memory: {
            type: "screen",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("StyleMedia", target);
        },
        new() {
            let obj = rsvm.RsCreate(StyleMedia);
            return obj;
        },
    };

    Object.defineProperties(StyleMedia, {
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        matchMedium: {
            value: rsvm.RsCreateAction("matchMedium", 0, function matchMedium() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "StyleMedia", writable: false, enumerable: false, configurable: true, },
    });
}();