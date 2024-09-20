!function () {
    Object.defineProperty(window, "MimeType", {
        value: rsvm.RsCreateConstructor("MimeType"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MimeType = {
        memory: {
            type: "application/pdf",
            suffixes: "pdf",
            description: "Portable Document Format",
            enabledPlugin: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MimeType", target);
        },
        new() {
            let obj = rsvm.RsCreate(MimeType.prototype);
            return obj;
        },
    };

    Object.defineProperties(MimeType, {
        prototype: { value: MimeType.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MimeType.prototype, {
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        suffixes: {
            get: rsvm.RsCreateGetter("suffixes", function suffixes() {
                return rsvm.get(this, "suffixes");
            }), set: undefined, enumerable: true, configurable: true,
        },
        description: {
            get: rsvm.RsCreateGetter("description", function description() {
                return rsvm.get(this, "description");
            }), set: undefined, enumerable: true, configurable: true,
        },
        enabledPlugin: {
            get: rsvm.RsCreateGetter("enabledPlugin", function enabledPlugin() {
                return rsvm.get(this, "enabledPlugin");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MimeType },
        [Symbol.toStringTag]: { value: "MimeType", writable: false, enumerable: false, configurable: true, },
    });
}();