!function () {
    Object.defineProperty(window, "HTMLMetaElement", {
        value: rsvm.RsCreateConstructor("HTMLMetaElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLMetaElement = {
        memory: {
            name: "",
            httpEquiv: "",
            content: "",
            media: "",
            scheme: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLMetaElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLMetaElement.prototype);
            rsvm.set(obj, "nodeName", "meta".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "meta");
            rsvm.set(obj, "tagName", "meta".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLMetaElement, {
        prototype: { value: HTMLMetaElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLMetaElement.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        httpEquiv: {
            get: rsvm.RsCreateGetter("httpEquiv", function httpEquiv() {
                return rsvm.get(this, "httpEquiv");
            }), set: rsvm.RsCreateSetter("httpEquiv", function httpEquiv() {
                rsvm.set(this, "httpEquiv", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        content: {
            get: rsvm.RsCreateGetter("content", function content() {
                return rsvm.get(this, "content");
            }), set: rsvm.RsCreateSetter("content", function content() {
                rsvm.set(this, "content", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        media: {
            get: rsvm.RsCreateGetter("media", function media() {
                return rsvm.get(this, "media");
            }), set: rsvm.RsCreateSetter("media", function media() {
                rsvm.set(this, "media", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        scheme: {
            get: rsvm.RsCreateGetter("scheme", function scheme() {
                return rsvm.get(this, "scheme");
            }), set: rsvm.RsCreateSetter("scheme", function scheme() {
                rsvm.set(this, "scheme", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLMetaElement },
        [Symbol.toStringTag]: { value: "HTMLMetaElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLMetaElement, HTMLElement);
    Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
}();