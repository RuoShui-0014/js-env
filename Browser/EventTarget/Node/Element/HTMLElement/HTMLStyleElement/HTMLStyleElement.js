!function () {
    Object.defineProperty(window, "HTMLStyleElement", {
        value: rsvm.RsCreateConstructor("HTMLStyleElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLStyleElement = {
        memory: {
            disabled: false,
            media: "",
            type: "",
            sheet: null,
            blocking: rsvm.prototype.DOMTokenList.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLStyleElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLStyleElement.prototype);
            rsvm.set(obj, "nodeName", "style".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "style");
            rsvm.set(obj, "tagName", "style".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLStyleElement, {
        prototype: { value: HTMLStyleElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLStyleElement.prototype, {
        disabled: {
            get: rsvm.RsCreateGetter("disabled", function disabled() {
                return rsvm.get(this, "disabled");
            }), set: rsvm.RsCreateSetter("disabled", function disabled() {
                rsvm.set(this, "disabled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        media: {
            get: rsvm.RsCreateGetter("media", function media() {
                return rsvm.get(this, "media");
            }), set: rsvm.RsCreateSetter("media", function media() {
                rsvm.set(this, "media", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: rsvm.RsCreateSetter("type", function type() {
                rsvm.set(this, "type", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sheet: {
            get: rsvm.RsCreateGetter("sheet", function sheet() {
                return rsvm.get(this, "sheet");
            }), set: undefined, enumerable: true, configurable: true,
        },
        blocking: {
            get: rsvm.RsCreateGetter("blocking", function blocking() {
                return rsvm.get(this, "blocking");
            }), set: rsvm.RsCreateSetter("blocking", function blocking() {
                rsvm.set(this, "blocking", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLStyleElement },
        [Symbol.toStringTag]: { value: "HTMLStyleElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLStyleElement, HTMLElement);
    Object.setPrototypeOf(HTMLStyleElement.prototype, HTMLElement.prototype);
}();