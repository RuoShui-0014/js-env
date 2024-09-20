!function () {
    Object.defineProperty(window, "HTMLTitleElement", {
        value: rsvm.RsCreateConstructor("HTMLTitleElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLTitleElement = {
        memory: {
            text: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLTitleElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLTitleElement.prototype);
            rsvm.set(obj, "nodeName", "title".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "title");
            rsvm.set(obj, "tagName", "title".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLTitleElement, {
        prototype: { value: HTMLTitleElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLTitleElement.prototype, {
        text: {
            get: rsvm.RsCreateGetter("text", function text() {
                return rsvm.get(this, "text");
            }), set: rsvm.RsCreateSetter("text", function text() {
                rsvm.set(this, "text", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLTitleElement },
        [Symbol.toStringTag]: { value: "HTMLTitleElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLTitleElement, HTMLElement);
    Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype);
}();