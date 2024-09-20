!function () {
    Object.defineProperty(window, "VisualViewport", {
        value: rsvm.RsCreateConstructor("VisualViewport"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.VisualViewport = {
        memory: {
            offsetLeft: 0,
            offsetTop: 0,
            pageLeft: 0,
            pageTop: 0,
            width: 150,
            height: 801,
            scale: 1,
            onresize: null,
            onscroll: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("VisualViewport", target);
        },
        new() {
            let obj = rsvm.RsCreate(VisualViewport.prototype);
            return obj;
        },
    };

    Object.defineProperties(VisualViewport, {
        prototype: { value: VisualViewport.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(VisualViewport.prototype, {
        offsetLeft: {
            get: rsvm.RsCreateGetter("offsetLeft", function offsetLeft() {
                return rsvm.get(this, "offsetLeft");
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetTop: {
            get: rsvm.RsCreateGetter("offsetTop", function offsetTop() {
                return rsvm.get(this, "offsetTop");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pageLeft: {
            get: rsvm.RsCreateGetter("pageLeft", function pageLeft() {
                return rsvm.get(this, "pageLeft");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pageTop: {
            get: rsvm.RsCreateGetter("pageTop", function pageTop() {
                return rsvm.get(this, "pageTop");
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
        scale: {
            get: rsvm.RsCreateGetter("scale", function scale() {
                return rsvm.get(this, "scale");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onresize: {
            get: rsvm.RsCreateGetter("onresize", function onresize() {
                return rsvm.get(this, "onresize");
            }), set: rsvm.RsCreateSetter("onresize", function onresize() {
                rsvm.set(this, "onresize", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onscroll: {
            get: rsvm.RsCreateGetter("onscroll", function onscroll() {
                return rsvm.get(this, "onscroll");
            }), set: rsvm.RsCreateSetter("onscroll", function onscroll() {
                rsvm.set(this, "onscroll", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: VisualViewport },
        [Symbol.toStringTag]: { value: "VisualViewport", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(VisualViewport, EventTarget);
    Object.setPrototypeOf(VisualViewport.prototype, EventTarget.prototype);
}();