!function () {
    Object.defineProperty(window, "Screen", {
        value: rsvm.RsCreateConstructor("Screen"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Screen = {
        memory: {
            availWidth: 1920,
            availHeight: 1032,
            width: 1920,
            height: 1080,
            colorDepth: 24,
            pixelDepth: 24,
            availLeft: 0,
            availTop: 0,
            orientation: rsvm.prototype.ScreenOrientation.new(),
            onchange: null,
            isExtended: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Screen", target);
        },
        new() {
            let obj = rsvm.RsCreate(Screen.prototype);
            return obj;
        },
    };

    Object.defineProperties(Screen, {
        prototype: { value: Screen.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Screen.prototype, {
        availWidth: {
            get: rsvm.RsCreateGetter("availWidth", function availWidth() {
                return rsvm.get(this, "availWidth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        availHeight: {
            get: rsvm.RsCreateGetter("availHeight", function availHeight() {
                return rsvm.get(this, "availHeight");
            }), set: undefined, enumerable: true, configurable: true,
        },
        width: {
            get: rsvm.RsCreateGetter("width", function width() {
                return rsvm.get(this, "width");
            }), set: undefined, enumerable: true, configurable: true,
        },
        height: {
            get: rsvm.RsCreateGetter("height", function height() {
                return rsvm.get(this, "height");
            }), set: undefined, enumerable: true, configurable: true,
        },
        colorDepth: {
            get: rsvm.RsCreateGetter("colorDepth", function colorDepth() {
                return rsvm.get(this, "colorDepth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pixelDepth: {
            get: rsvm.RsCreateGetter("pixelDepth", function pixelDepth() {
                return rsvm.get(this, "pixelDepth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        availLeft: {
            get: rsvm.RsCreateGetter("availLeft", function availLeft() {
                return rsvm.get(this, "availLeft");
            }), set: undefined, enumerable: true, configurable: true,
        },
        availTop: {
            get: rsvm.RsCreateGetter("availTop", function availTop() {
                return rsvm.get(this, "availTop");
            }), set: undefined, enumerable: true, configurable: true,
        },
        orientation: {
            get: rsvm.RsCreateGetter("orientation", function orientation() {
                return rsvm.get(this, "orientation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Screen },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        isExtended: {
            get: rsvm.RsCreateGetter("isExtended", function isExtended() {
                return rsvm.get(this, "isExtended");
            }), set: undefined, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Screen", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Screen, EventTarget);
    Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
}();