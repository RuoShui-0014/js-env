!function () {
    Object.defineProperty(window, "OffscreenCanvas", {
        value: rsvm.RsCreateConstructor("OffscreenCanvas"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.OffscreenCanvas = {
        memory: {
            width: undefined,
            height: undefined,
            oncontextlost: undefined,
            oncontextrestored: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("OffscreenCanvas", target);
        },
        new() {
            let obj = rsvm.RsCreate(OffscreenCanvas.prototype);
            return obj;
        },
    };

    Object.defineProperties(OffscreenCanvas, {
        prototype: { value: OffscreenCanvas.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(OffscreenCanvas.prototype, {
        width: {
            get: rsvm.RsCreateGetter("width", function width() {
                return rsvm.get(this, "width");
            }), set: rsvm.RsCreateSetter("width", function width() {
                rsvm.set(this, "width", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        height: {
            get: rsvm.RsCreateGetter("height", function height() {
                return rsvm.get(this, "height");
            }), set: rsvm.RsCreateSetter("height", function height() {
                rsvm.set(this, "height", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncontextlost: {
            get: rsvm.RsCreateGetter("oncontextlost", function oncontextlost() {
                return rsvm.get(this, "oncontextlost");
            }), set: rsvm.RsCreateSetter("oncontextlost", function oncontextlost() {
                rsvm.set(this, "oncontextlost", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncontextrestored: {
            get: rsvm.RsCreateGetter("oncontextrestored", function oncontextrestored() {
                return rsvm.get(this, "oncontextrestored");
            }), set: rsvm.RsCreateSetter("oncontextrestored", function oncontextrestored() {
                rsvm.set(this, "oncontextrestored", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        convertToBlob: { value: undefined, writable: true, enumerable: true, configurable: true, },
        getContext: { value: undefined, writable: true, enumerable: true, configurable: true, },
        transferToImageBitmap: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: OffscreenCanvas },
        [Symbol.toStringTag]: { value: "OffscreenCanvas", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(OffscreenCanvas, EventTarget);
    Object.setPrototypeOf(OffscreenCanvas.prototype, EventTarget.prototype);
}();