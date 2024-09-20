!function () {
    Object.defineProperty(window, "HTMLHeadElement", {
        value: rsvm.RsCreateConstructor("HTMLHeadElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLHeadElement = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLHeadElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLHeadElement.prototype);
            rsvm.set(obj, "nodeName", "head".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "head");
            rsvm.set(obj, "tagName", "head".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLHeadElement, {
        prototype: { value: HTMLHeadElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLHeadElement.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLHeadElement },
        [Symbol.toStringTag]: { value: "HTMLHeadElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLHeadElement, HTMLElement);
    Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);
}();