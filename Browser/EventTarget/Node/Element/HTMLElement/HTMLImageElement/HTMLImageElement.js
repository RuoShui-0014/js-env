!function () {
    Object.defineProperty(window, "HTMLImageElement", {
        value: rsvm.RsCreateConstructor("HTMLImageElement"), writable: true, enumerable: false, configurable: true
    });
    Object.defineProperty(window, "Image", {
        value: rsvm.RsCreateConstructor("Image", 0, function Image() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.HTMLImageElement.new(document);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLImageElement = {
        memory: {
            alt: "",
            src: "",
            srcset: "",
            sizes: "",
            crossOrigin: null,
            useMap: "",
            isMap: false,
            width: 0,
            height: 0,
            naturalWidth: 0,
            naturalHeight: 0,
            complete: true,
            currentSrc: "",
            referrerPolicy: "",
            decoding: "auto",
            fetchPriority: "auto",
            loading: "auto",
            name: "",
            lowsrc: "",
            align: "",
            hspace: 0,
            vspace: 0,
            longDesc: "",
            border: "",
            x: 0,
            y: 0,
            attributionSrc: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLImageElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLImageElement.prototype);
            rsvm.set(obj, "nodeName", "img".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "img");
            rsvm.set(obj, "tagName", "img".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLImageElement, {
        prototype: { value: HTMLImageElement.prototype, writable: false, enumerable: false, configurable: false },
    });
    Object.defineProperties(Image, {
        prototype: { value: HTMLImageElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLImageElement.prototype, {
        alt: {
            get: rsvm.RsCreateGetter("alt", function alt() {
                return rsvm.get(this, "alt");
            }), set: rsvm.RsCreateSetter("alt", function alt() {
                rsvm.set(this, "alt", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        src: {
            get: rsvm.RsCreateGetter("src", function src() {
                return rsvm.get(this, "src");
            }), set: rsvm.RsCreateSetter("src", function src() {
                rsvm.set(this, "src", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        srcset: {
            get: rsvm.RsCreateGetter("srcset", function srcset() {
                return rsvm.get(this, "srcset");
            }), set: rsvm.RsCreateSetter("srcset", function srcset() {
                rsvm.set(this, "srcset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sizes: {
            get: rsvm.RsCreateGetter("sizes", function sizes() {
                return rsvm.get(this, "sizes");
            }), set: rsvm.RsCreateSetter("sizes", function sizes() {
                rsvm.set(this, "sizes", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        crossOrigin: {
            get: rsvm.RsCreateGetter("crossOrigin", function crossOrigin() {
                return rsvm.get(this, "crossOrigin");
            }), set: rsvm.RsCreateSetter("crossOrigin", function crossOrigin() {
                rsvm.set(this, "crossOrigin", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        useMap: {
            get: rsvm.RsCreateGetter("useMap", function useMap() {
                return rsvm.get(this, "useMap");
            }), set: rsvm.RsCreateSetter("useMap", function useMap() {
                rsvm.set(this, "useMap", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        isMap: {
            get: rsvm.RsCreateGetter("isMap", function isMap() {
                return rsvm.get(this, "isMap");
            }), set: rsvm.RsCreateSetter("isMap", function isMap() {
                rsvm.set(this, "isMap", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        width: {
            get: rsvm.RsCreateGetter("width", function width() {
                return rsvm.get(this, "width");
            }), set: rsvm.RsCreateSetter("width", function width() {
                rsvm.set(this, "width", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        height: {
            get: rsvm.RsCreateGetter("height", function height() {
                return rsvm.get(this, "height");
            }), set: rsvm.RsCreateSetter("height", function height() {
                rsvm.set(this, "height", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        naturalWidth: {
            get: rsvm.RsCreateGetter("naturalWidth", function naturalWidth() {
                return rsvm.get(this, "naturalWidth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        naturalHeight: {
            get: rsvm.RsCreateGetter("naturalHeight", function naturalHeight() {
                return rsvm.get(this, "naturalHeight");
            }), set: undefined, enumerable: true, configurable: true,
        },
        complete: {
            get: rsvm.RsCreateGetter("complete", function complete() {
                return rsvm.get(this, "complete");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentSrc: {
            get: rsvm.RsCreateGetter("currentSrc", function currentSrc() {
                return rsvm.get(this, "currentSrc");
            }), set: undefined, enumerable: true, configurable: true,
        },
        referrerPolicy: {
            get: rsvm.RsCreateGetter("referrerPolicy", function referrerPolicy() {
                return rsvm.get(this, "referrerPolicy");
            }), set: rsvm.RsCreateSetter("referrerPolicy", function referrerPolicy() {
                rsvm.set(this, "referrerPolicy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        decoding: {
            get: rsvm.RsCreateGetter("decoding", function decoding() {
                return rsvm.get(this, "decoding");
            }), set: rsvm.RsCreateSetter("decoding", function decoding() {
                rsvm.set(this, "decoding", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fetchPriority: {
            get: rsvm.RsCreateGetter("fetchPriority", function fetchPriority() {
                return rsvm.get(this, "fetchPriority");
            }), set: rsvm.RsCreateSetter("fetchPriority", function fetchPriority() {
                rsvm.set(this, "fetchPriority", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        loading: {
            get: rsvm.RsCreateGetter("loading", function loading() {
                return rsvm.get(this, "loading");
            }), set: rsvm.RsCreateSetter("loading", function loading() {
                rsvm.set(this, "loading", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lowsrc: {
            get: rsvm.RsCreateGetter("lowsrc", function lowsrc() {
                return rsvm.get(this, "lowsrc");
            }), set: rsvm.RsCreateSetter("lowsrc", function lowsrc() {
                rsvm.set(this, "lowsrc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        align: {
            get: rsvm.RsCreateGetter("align", function align() {
                return rsvm.get(this, "align");
            }), set: rsvm.RsCreateSetter("align", function align() {
                rsvm.set(this, "align", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hspace: {
            get: rsvm.RsCreateGetter("hspace", function hspace() {
                return rsvm.get(this, "hspace");
            }), set: rsvm.RsCreateSetter("hspace", function hspace() {
                rsvm.set(this, "hspace", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        vspace: {
            get: rsvm.RsCreateGetter("vspace", function vspace() {
                return rsvm.get(this, "vspace");
            }), set: rsvm.RsCreateSetter("vspace", function vspace() {
                rsvm.set(this, "vspace", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        longDesc: {
            get: rsvm.RsCreateGetter("longDesc", function longDesc() {
                return rsvm.get(this, "longDesc");
            }), set: rsvm.RsCreateSetter("longDesc", function longDesc() {
                rsvm.set(this, "longDesc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        border: {
            get: rsvm.RsCreateGetter("border", function border() {
                return rsvm.get(this, "border");
            }), set: rsvm.RsCreateSetter("border", function border() {
                rsvm.set(this, "border", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        x: {
            get: rsvm.RsCreateGetter("x", function x() {
                return rsvm.get(this, "x");
            }), set: undefined, enumerable: true, configurable: true,
        },
        y: {
            get: rsvm.RsCreateGetter("y", function y() {
                return rsvm.get(this, "y");
            }), set: undefined, enumerable: true, configurable: true,
        },
        decode: {
            value: rsvm.RsCreateAction("decode", 0, function decode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLImageElement },
        attributionSrc: {
            get: rsvm.RsCreateGetter("attributionSrc", function attributionSrc() {
                return rsvm.get(this, "attributionSrc");
            }), set: rsvm.RsCreateSetter("attributionSrc", function attributionSrc() {
                rsvm.set(this, "attributionSrc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HTMLImageElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLImageElement, HTMLElement);
    Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
}();