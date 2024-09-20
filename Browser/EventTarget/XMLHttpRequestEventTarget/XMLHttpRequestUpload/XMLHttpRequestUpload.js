!function () {
    Object.defineProperty(window, "XMLHttpRequestUpload", {
        value: rsvm.RsCreateConstructor("XMLHttpRequestUpload"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.XMLHttpRequestUpload = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("XMLHttpRequestUpload", target);
        },
        new() {
            let obj = rsvm.RsCreate(XMLHttpRequestUpload.prototype);
            return obj;
        },
    };

    Object.defineProperties(XMLHttpRequestUpload, {
        prototype: { value: XMLHttpRequestUpload.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(XMLHttpRequestUpload.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: XMLHttpRequestUpload },
        [Symbol.toStringTag]: { value: "XMLHttpRequestUpload", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(XMLHttpRequestUpload, XMLHttpRequestEventTarget);
    Object.setPrototypeOf(XMLHttpRequestUpload.prototype, XMLHttpRequestEventTarget.prototype);
}();