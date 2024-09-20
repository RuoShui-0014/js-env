!function () {
    Object.defineProperty(window, "HTMLHtmlElement", {
        value: rsvm.RsCreateConstructor("HTMLHtmlElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLHtmlElement = {
        memory: {
            version: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLHtmlElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLHtmlElement.prototype);
            rsvm.set(obj, "nodeName", "html".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "html");
            rsvm.set(obj, "tagName", "html".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLHtmlElement, {
        prototype: { value: HTMLHtmlElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLHtmlElement.prototype, {
        version: {
            get: rsvm.RsCreateGetter("version", function version() {
                return rsvm.get(this, "version");
            }), set: rsvm.RsCreateSetter("version", function version() {
                rsvm.set(this, "version", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLHtmlElement },
        [Symbol.toStringTag]: { value: "HTMLHtmlElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLHtmlElement, HTMLElement);
    Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
}();