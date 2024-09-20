!function () {
    Object.defineProperty(window, "Plugin", {
        value: rsvm.RsCreateConstructor("Plugin"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Plugin = {
        memory: {
            name: "PDF Viewer",
            filename: "internal-pdf-viewer",
            description: "Portable Document Format",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Plugin", target);
        },
        new() {
            let obj = rsvm.RsCreate(Plugin.prototype);
            return obj;
        },
    };

    Object.defineProperties(Plugin, {
        prototype: { value: Plugin.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Plugin.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        filename: {
            get: rsvm.RsCreateGetter("filename", function filename() {
                return rsvm.get(this, "filename");
            }), set: undefined, enumerable: true, configurable: true,
        },
        description: {
            get: rsvm.RsCreateGetter("description", function description() {
                return rsvm.get(this, "description");
            }), set: undefined, enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        namedItem: {
            value: rsvm.RsCreateAction("namedItem", 1, function namedItem() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Plugin },
        [Symbol.toStringTag]: { value: "Plugin", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();