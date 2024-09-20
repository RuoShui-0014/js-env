!function () {
    Object.defineProperty(window, "HTMLSpanElement", {
        value: rsvm.RsCreateConstructor("HTMLSpanElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLSpanElement = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLSpanElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLSpanElement.prototype);
            rsvm.set(obj, "nodeName", "span".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "span");
            rsvm.set(obj, "tagName", "span".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLSpanElement, {
        prototype: { value: HTMLSpanElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLSpanElement.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLSpanElement },
        [Symbol.toStringTag]: { value: "HTMLSpanElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLSpanElement, HTMLElement);
    Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
}();