!function () {
    Object.defineProperty(window, "MimeTypeArray", {
        value: rsvm.RsCreateConstructor("MimeTypeArray"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MimeTypeArray = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("MimeTypeArray", target);
        },
        new() {
            let obj = rsvm.RsCreate(MimeTypeArray.prototype);

            // let mimeType_0 = rsvm.prototype.MimeType.new();
            // rsvm.set(mimeType_0, 'description', 'Portable Document Format');
            // rsvm.set(mimeType_0, 'enabledPlugin', 'null');
            // rsvm.set(mimeType_0, 'suffixes', 'pdf');
            // rsvm.set(mimeType_0, 'type', 'application/pdf');

            // let mimeType_1 = rsvm.prototype.MimeType.new();
            // rsvm.set(mimeType_1, 'description', 'Portable Document Format');
            // rsvm.set(mimeType_1, 'enabledPlugin', 'null');
            // rsvm.set(mimeType_1, 'suffixes', 'pdf');
            // rsvm.set(mimeType_1, 'type', 'text/pdf');

            // Object.defineProperty(obj, obj.length, { value: mimeType_0, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(obj, "application/pdf", { value: mimeType_0, writable: false, enumerable: false, configurable: true });

            // Object.defineProperty(obj, obj.length, { value: mimeType_1, writable: false, enumerable: true, configurable: true });
            // Object.defineProperty(obj, "text/pdf", { value: mimeType_1, writable: false, enumerable: false, configurable: true });
            
            return obj;
        },
    };

    Object.defineProperties(MimeTypeArray, {
        prototype: { value: MimeTypeArray.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MimeTypeArray.prototype, {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: MimeTypeArray },
        [Symbol.toStringTag]: { value: "MimeTypeArray", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();