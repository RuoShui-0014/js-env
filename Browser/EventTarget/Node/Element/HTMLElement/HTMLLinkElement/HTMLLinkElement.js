!function () {
    Object.defineProperty(window, "HTMLLinkElement", {
        value: rsvm.RsCreateConstructor("HTMLLinkElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLLinkElement = {
        memory: {
            disabled: false,
            href: "",
            crossOrigin: null,
            rel: "",
            relList: rsvm.prototype.DOMTokenList.new(),
            media: "",
            hreflang: "",
            type: "",
            as: "",
            referrerPolicy: "",
            sizes: rsvm.prototype.DOMTokenList.new(),
            fetchPriority: "auto",
            imageSrcset: "",
            imageSizes: "",
            charset: "",
            rev: "",
            target: "",
            sheet: null,
            integrity: "",
            blocking: rsvm.prototype.DOMTokenList.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLLinkElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLLinkElement.prototype);
            rsvm.set(obj, "nodeName", "link".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "link");
            rsvm.set(obj, "tagName", "link".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLLinkElement, {
        prototype: { value: HTMLLinkElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLLinkElement.prototype, {
        disabled: {
            get: rsvm.RsCreateGetter("disabled", function disabled() {
                return rsvm.get(this, "disabled");
            }), set: rsvm.RsCreateSetter("disabled", function disabled() {
                rsvm.set(this, "disabled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        href: {
            get: rsvm.RsCreateGetter("href", function href() {
                return rsvm.get(this, "href");
            }), set: rsvm.RsCreateSetter("href", function href() {
                rsvm.set(this, "href", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        crossOrigin: {
            get: rsvm.RsCreateGetter("crossOrigin", function crossOrigin() {
                return rsvm.get(this, "crossOrigin");
            }), set: rsvm.RsCreateSetter("crossOrigin", function crossOrigin() {
                rsvm.set(this, "crossOrigin", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        rel: {
            get: rsvm.RsCreateGetter("rel", function rel() {
                return rsvm.get(this, "rel");
            }), set: rsvm.RsCreateSetter("rel", function rel() {
                rsvm.set(this, "rel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        relList: {
            get: rsvm.RsCreateGetter("relList", function relList() {
                return rsvm.get(this, "relList");
            }), set: rsvm.RsCreateSetter("relList", function relList() {
                rsvm.set(this, "relList", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        media: {
            get: rsvm.RsCreateGetter("media", function media() {
                return rsvm.get(this, "media");
            }), set: rsvm.RsCreateSetter("media", function media() {
                rsvm.set(this, "media", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hreflang: {
            get: rsvm.RsCreateGetter("hreflang", function hreflang() {
                return rsvm.get(this, "hreflang");
            }), set: rsvm.RsCreateSetter("hreflang", function hreflang() {
                rsvm.set(this, "hreflang", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: rsvm.RsCreateSetter("type", function type() {
                rsvm.set(this, "type", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        as: {
            get: rsvm.RsCreateGetter("as", function as() {
                return rsvm.get(this, "as");
            }), set: rsvm.RsCreateSetter("as", function as() {
                rsvm.set(this, "as", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        referrerPolicy: {
            get: rsvm.RsCreateGetter("referrerPolicy", function referrerPolicy() {
                return rsvm.get(this, "referrerPolicy");
            }), set: rsvm.RsCreateSetter("referrerPolicy", function referrerPolicy() {
                rsvm.set(this, "referrerPolicy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sizes: {
            get: rsvm.RsCreateGetter("sizes", function sizes() {
                return rsvm.get(this, "sizes");
            }), set: rsvm.RsCreateSetter("sizes", function sizes() {
                rsvm.set(this, "sizes", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fetchPriority: {
            get: rsvm.RsCreateGetter("fetchPriority", function fetchPriority() {
                return rsvm.get(this, "fetchPriority");
            }), set: rsvm.RsCreateSetter("fetchPriority", function fetchPriority() {
                rsvm.set(this, "fetchPriority", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        imageSrcset: {
            get: rsvm.RsCreateGetter("imageSrcset", function imageSrcset() {
                return rsvm.get(this, "imageSrcset");
            }), set: rsvm.RsCreateSetter("imageSrcset", function imageSrcset() {
                rsvm.set(this, "imageSrcset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        imageSizes: {
            get: rsvm.RsCreateGetter("imageSizes", function imageSizes() {
                return rsvm.get(this, "imageSizes");
            }), set: rsvm.RsCreateSetter("imageSizes", function imageSizes() {
                rsvm.set(this, "imageSizes", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        charset: {
            get: rsvm.RsCreateGetter("charset", function charset() {
                return rsvm.get(this, "charset");
            }), set: rsvm.RsCreateSetter("charset", function charset() {
                rsvm.set(this, "charset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        rev: {
            get: rsvm.RsCreateGetter("rev", function rev() {
                return rsvm.get(this, "rev");
            }), set: rsvm.RsCreateSetter("rev", function rev() {
                rsvm.set(this, "rev", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        target: {
            get: rsvm.RsCreateGetter("target", function target() {
                return rsvm.get(this, "target");
            }), set: rsvm.RsCreateSetter("target", function target() {
                rsvm.set(this, "target", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sheet: {
            get: rsvm.RsCreateGetter("sheet", function sheet() {
                return rsvm.get(this, "sheet");
            }), set: undefined, enumerable: true, configurable: true,
        },
        integrity: {
            get: rsvm.RsCreateGetter("integrity", function integrity() {
                return rsvm.get(this, "integrity");
            }), set: rsvm.RsCreateSetter("integrity", function integrity() {
                rsvm.set(this, "integrity", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        blocking: {
            get: rsvm.RsCreateGetter("blocking", function blocking() {
                return rsvm.get(this, "blocking");
            }), set: rsvm.RsCreateSetter("blocking", function blocking() {
                rsvm.set(this, "blocking", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLLinkElement },
        [Symbol.toStringTag]: { value: "HTMLLinkElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLLinkElement, HTMLElement);
    Object.setPrototypeOf(HTMLLinkElement.prototype, HTMLElement.prototype);
}();