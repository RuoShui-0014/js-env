!function () {
    Object.defineProperty(window, "HTMLAudioElement", {
        value: rsvm.RsCreateConstructor("HTMLAudioElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLAudioElement = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLAudioElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLAudioElement.prototype);
            rsvm.set(obj, "nodeName", "audio".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "audio");
            rsvm.set(obj, "tagName", "audio".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLAudioElement, {
        prototype: { value: HTMLAudioElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLAudioElement.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLAudioElement },
        [Symbol.toStringTag]: { value: "HTMLAudioElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLAudioElement, HTMLMediaElement);
    Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
}();