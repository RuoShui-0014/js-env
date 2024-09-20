!function () {
    Object.defineProperty(window, "DOMRect", {
        value: rsvm.RsCreateConstructor("DOMRect", 0, function DOMRect() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.DOMRect.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMRect = {
        memory: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DOMRect", target);
        },
        new() {
            let obj = rsvm.RsCreate(DOMRect.prototype);
            return obj;
        },
    };

    Object.defineProperties(DOMRect, {
        prototype: { value: DOMRect.prototype, writable: false, enumerable: false, configurable: false },
        fromRect: {
            value: rsvm.RsCreateAction("fromRect", 0, function fromRect() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperties(DOMRect.prototype, {
        x: {
            get: rsvm.RsCreateGetter("x", function x() {
                return rsvm.get(this, "x");
            }), set: rsvm.RsCreateSetter("x", function x() {
                rsvm.set(this, "x", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        y: {
            get: rsvm.RsCreateGetter("y", function y() {
                return rsvm.get(this, "y");
            }), set: rsvm.RsCreateSetter("y", function y() {
                rsvm.set(this, "y", arguments[0]);
            }), enumerable: true, configurable: true,
        },
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
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMRect },
        [Symbol.toStringTag]: { value: "DOMRect", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DOMRect, DOMRectReadOnly);
    Object.setPrototypeOf(DOMRect.prototype, DOMRectReadOnly.prototype);
}();