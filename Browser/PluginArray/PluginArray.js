!function () {
    Object.defineProperty(window, "PluginArray", {
        value: rsvm.RsCreateConstructor("PluginArray"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PluginArray = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("PluginArray", target);
        },
        new() {
            let obj = rsvm.RsCreate(PluginArray.prototype);

            // let plugin = rsvm.prototype.Plugin.new();
            // rsvm.set(plugin, "description", "Portable Document Format");
            // rsvm.set(plugin, "filename", "internal-pdf-viewer");
            // rsvm.set(plugin, "name", "PDF Viewer");

            // let mimeType_0 = rsvm.prototype.MimeType.new();
            // rsvm.set(mimeType_0, "description", "Portable Document Format");
            // rsvm.set(mimeType_0, "enabledPlugin", plugin);
            // rsvm.set(mimeType_0, "suffixes", "pdf");
            // rsvm.set(mimeType_0, "type", "application/pdf");
            // let mimeType_1 = rsvm.prototype.MimeType.new();
            // rsvm.set(mimeType_1, "description", "Portable Document Format");
            // rsvm.set(mimeType_1, "enabledPlugin", plugin);
            // rsvm.set(mimeType_1, "suffixes", "pdf");
            // rsvm.set(mimeType_1, "type", "text/pdf");

            // Object.defineProperty(plugin, plugin.length, { value: mimeType_0, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(plugin, "application/pdf", { value: mimeType_0, writable: false, enumerable: false, configurable: true });
            // Object.defineProperty(plugin, plugin.length, { value: mimeType_1, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(plugin, "text/pdf", { value: mimeType_1, writable: false, enumerable: false, configurable: true });
            // Object.defineProperty(obj, obj.length, { value: plugin, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(obj, "PDF Viewer", { value: plugin, writable: false, enumerable: false, configurable: true });

            // plugin = rsvm.prototype.Plugin.new();
            // rsvm.set(plugin, "description", "Portable Document Format");
            // rsvm.set(plugin, "filename", "internal-pdf-viewer");
            // rsvm.set(plugin, "name", "Chrome PDF Viewer");

            // mimeType_0 = rsvm.prototype.MimeType.new();
            // rsvm.set(mimeType_0, "description", "Portable Document Format");
            // rsvm.set(mimeType_0, "enabledPlugin", plugin);
            // rsvm.set(mimeType_0, "suffixes", "pdf");
            // rsvm.set(mimeType_0, "type", "application/pdf");
            // mimeType_1 = rsvm.prototype.MimeType.new();
            // rsvm.set(mimeType_1, "description", "Portable Document Format");
            // rsvm.set(mimeType_1, "enabledPlugin", plugin);
            // rsvm.set(mimeType_1, "suffixes", "pdf");
            // rsvm.set(mimeType_1, "type", "text/pdf");

            // Object.defineProperty(plugin, plugin.length, { value: mimeType_0, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(plugin, "application/pdf", { value: mimeType_0, writable: false, enumerable: false, configurable: true });
            // Object.defineProperty(plugin, plugin.length, { value: mimeType_1, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(plugin, "text/pdf", { value: mimeType_1, writable: false, enumerable: false, configurable: true });
            // Object.defineProperty(obj, obj.length, { value: plugin, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(obj, "Chrome PDF Viewer", { value: plugin, writable: false, enumerable: false, configurable: true });

            return obj;
        },
    };

    Object.defineProperties(PluginArray, {
        prototype: { value: PluginArray.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PluginArray.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                let result = this[arguments[0]];
                if (arguments[0] === 4294967296) {
                    result = this[0];
                }
                if (result === undefined) {
                    result = null;
                }
                return result;
            }), writable: true, enumerable: true, configurable: true,
        },
        namedItem: {
            value: rsvm.RsCreateAction("namedItem", 1, function namedItem() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        refresh: {
            value: rsvm.RsCreateAction("refresh", 0, function refresh() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PluginArray },
        [Symbol.toStringTag]: { value: "PluginArray", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();