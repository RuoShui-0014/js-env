!function () {
    Object.defineProperty(window, "HTMLParagraphElement", {
        value: rsvm.RsCreateConstructor("HTMLParagraphElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLParagraphElement = {
        memory: {
            align: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLParagraphElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLParagraphElement.prototype);
            rsvm.set(obj, "nodeName", "p".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "p");
            rsvm.set(obj, "tagName", "p".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLParagraphElement, {
        prototype: { value: HTMLParagraphElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLParagraphElement.prototype, {
        align: {
            get: rsvm.RsCreateGetter("align", function align() {
                return rsvm.get(this, "align");
            }), set: rsvm.RsCreateSetter("align", function align() {
                rsvm.set(this, "align", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLParagraphElement },
        [Symbol.toStringTag]: { value: "HTMLParagraphElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLParagraphElement, HTMLElement);
    Object.setPrototypeOf(HTMLParagraphElement.prototype, HTMLElement.prototype);
}();