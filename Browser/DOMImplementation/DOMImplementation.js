!function () {
    Object.defineProperty(window, "DOMImplementation", {
        value: rsvm.RsCreateConstructor("DOMImplementation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMImplementation = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DOMImplementation", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMImplementation.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMImplementation, {
        prototype: { value: DOMImplementation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DOMImplementation.prototype, {
        createDocument: {
            value: rsvm.RsCreateAction("createDocument", 2, function createDocument() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createDocumentType: {
            value: rsvm.RsCreateAction("createDocumentType", 3, function createDocumentType() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createHTMLDocument: {
            value: rsvm.RsCreateAction("createHTMLDocument", 0, function createHTMLDocument() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasFeature: {
            value: rsvm.RsCreateAction("hasFeature", 0, function hasFeature() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMImplementation },
        [Symbol.toStringTag]: { value: "DOMImplementation", writable: false, enumerable: false, configurable: true, },
    });
}();