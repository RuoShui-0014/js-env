!function () {
    Object.defineProperty(window, "HTMLDocument", {
        value: rsvm.RsCreateConstructor("HTMLDocument"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLDocument = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLDocument", target);
        },
        new() {
            let obj = rsvm.RsCreate(HTMLDocument.prototype);
            Object.defineProperty(obj, "location", {
                get: rsvm.RsCreateGetter("location", function location(){
                    return window.location;
                }), set:rsvm.RsCreateSetter("location", function location(){
                    window.location = arguments[0];
                }), enumerable: true, configurable: false
            });
            return obj;
        },
    };

    Object.defineProperties(HTMLDocument, {
        prototype: { value: HTMLDocument.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLDocument.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLDocument },
        [Symbol.toStringTag]: { value: "HTMLDocument", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLDocument, Document);
    Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
}();