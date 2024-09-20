!function () {
    Object.defineProperty(window, "DocumentPictureInPicture", {
        value: rsvm.RsCreateConstructor("DocumentPictureInPicture"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DocumentPictureInPicture = {
        memory: {
            window: null,
            onenter: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DocumentPictureInPicture", target);
        },
        new() {
            let obj = rsvm.RsCreate(DocumentPictureInPicture.prototype);
            return obj;
        },
    };

    Object.defineProperties(DocumentPictureInPicture, {
        prototype: { value: DocumentPictureInPicture.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DocumentPictureInPicture.prototype, {
        window: {
            get: rsvm.RsCreateGetter("window", function window() {
                return rsvm.get(this, "window");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onenter: {
            get: rsvm.RsCreateGetter("onenter", function onenter() {
                return rsvm.get(this, "onenter");
            }), set: rsvm.RsCreateSetter("onenter", function onenter() {
                rsvm.set(this, "onenter", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        requestWindow: {
            value: rsvm.RsCreateAction("requestWindow", 0, function requestWindow() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DocumentPictureInPicture },
        [Symbol.toStringTag]: { value: "DocumentPictureInPicture", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DocumentPictureInPicture, EventTarget);
    Object.setPrototypeOf(DocumentPictureInPicture.prototype, EventTarget.prototype);
}();