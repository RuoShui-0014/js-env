!function () {
    Object.defineProperty(window, "HTMLUnknownElement", {
        value: rsvm.RsCreateConstructor("HTMLUnknownElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLUnknownElement = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLUnknownElement", target);
        },
        new(ownerDocument, tagName) {
            let obj = rsvm.RsCreate(HTMLUnknownElement.prototype);
            rsvm.set(obj, "nodeName", tagName.toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", tagName.toLocaleLowerCase());
            rsvm.set(obj, "tagName", tagName.toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLUnknownElement, {
        prototype: { value: HTMLUnknownElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLUnknownElement.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLUnknownElement },
        [Symbol.toStringTag]: { value: "HTMLUnknownElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLUnknownElement, HTMLElement);
    Object.setPrototypeOf(HTMLUnknownElement.prototype, HTMLElement.prototype);
}();