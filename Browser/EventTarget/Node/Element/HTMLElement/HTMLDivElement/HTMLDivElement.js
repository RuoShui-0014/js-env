!function () {
    Object.defineProperty(window, "HTMLDivElement", {
        value: rsvm.RsCreateConstructor("HTMLDivElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLDivElement = {
        memory: {
            align: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLDivElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLDivElement.prototype);
            rsvm.set(obj, "nodeName", "div".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "div");
            rsvm.set(obj, "tagName", "div".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLDivElement, {
        prototype: { value: HTMLDivElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLDivElement.prototype, {
        align: {
            get: rsvm.RsCreateGetter("align", function align() {
                return rsvm.get(this, "align");
            }), set: rsvm.RsCreateSetter("align", function align() {
                rsvm.set(this, "align", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLDivElement },
        [Symbol.toStringTag]: { value: "HTMLDivElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLDivElement, HTMLElement);
    Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
}();