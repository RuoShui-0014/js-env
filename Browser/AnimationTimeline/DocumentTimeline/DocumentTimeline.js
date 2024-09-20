!function () {
    Object.defineProperty(window, "DocumentTimeline", {
        value: rsvm.RsCreateConstructor("DocumentTimeline"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DocumentTimeline = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("DocumentTimeline", target);
        },
        new() {
            let obj = rsvm.RsCreate(DocumentTimeline.prototype);
            return obj;
        },
    };

    Object.defineProperties(DocumentTimeline, {
        prototype: { value: DocumentTimeline.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DocumentTimeline.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: DocumentTimeline },
        [Symbol.toStringTag]: { value: "DocumentTimeline", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DocumentTimeline, AnimationTimeline);
    Object.setPrototypeOf(DocumentTimeline.prototype, AnimationTimeline.prototype);
}();