!function () {
    Object.defineProperty(window, "DOMRectReadOnly", {
        value: rsvm.RsCreateConstructor("DOMRectReadOnly", 0, function DOMRectReadOnly() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.DOMRectReadOnly.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMRectReadOnly = {
        memory: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DOMRectReadOnly", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMRectReadOnly.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMRectReadOnly, {
        prototype: { value: DOMRectReadOnly.prototype, writable: false, enumerable: false, configurable: false },
        fromRect: {
            value: rsvm.RsCreateAction("fromRect", 0, function fromRect() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperties(DOMRectReadOnly.prototype, {
        x: {
            get: rsvm.RsCreateGetter("x", function x() {
                return rsvm.get(this, "x");
            }), set: undefined, enumerable: true, configurable: true,
        },
        y: {
            get: rsvm.RsCreateGetter("y", function y() {
                return rsvm.get(this, "y");
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
        top: {
            get: rsvm.RsCreateGetter("top", function top() {
                return rsvm.get(this, "top");
            }), set: undefined, enumerable: true, configurable: true,
        },
        right: {
            get: rsvm.RsCreateGetter("right", function right() {
                return rsvm.get(this, "right");
            }), set: undefined, enumerable: true, configurable: true,
        },
        bottom: {
            get: rsvm.RsCreateGetter("bottom", function bottom() {
                return rsvm.get(this, "bottom");
            }), set: undefined, enumerable: true, configurable: true,
        },
        left: {
            get: rsvm.RsCreateGetter("left", function left() {
                return rsvm.get(this, "left");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMRectReadOnly },
        [Symbol.toStringTag]: { value: "DOMRectReadOnly", writable: false, enumerable: false, configurable: true, },
    });
}();