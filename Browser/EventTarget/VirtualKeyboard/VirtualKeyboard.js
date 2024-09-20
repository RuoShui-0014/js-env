!function () {
    Object.defineProperty(window, "VirtualKeyboard", {
        value: rsvm.RsCreateConstructor("VirtualKeyboard"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.VirtualKeyboard = {
        memory: {
            boundingRect: rsvm.prototype.DOMRect.new(),
            overlaysContent: false,
            ongeometrychange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("VirtualKeyboard", target);
        },
        new() {
            let obj = rsvm.RsCreate(VirtualKeyboard.prototype);
            return obj;
        },
    };

    Object.defineProperties(VirtualKeyboard, {
        prototype: { value: VirtualKeyboard.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(VirtualKeyboard.prototype, {
        boundingRect: {
            get: rsvm.RsCreateGetter("boundingRect", function boundingRect() {
                return rsvm.get(this, "boundingRect");
            }), set: undefined, enumerable: true, configurable: true,
        },
        overlaysContent: {
            get: rsvm.RsCreateGetter("overlaysContent", function overlaysContent() {
                return rsvm.get(this, "overlaysContent");
            }), set: rsvm.RsCreateSetter("overlaysContent", function overlaysContent() {
                rsvm.set(this, "overlaysContent", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ongeometrychange: {
            get: rsvm.RsCreateGetter("ongeometrychange", function ongeometrychange() {
                return rsvm.get(this, "ongeometrychange");
            }), set: rsvm.RsCreateSetter("ongeometrychange", function ongeometrychange() {
                rsvm.set(this, "ongeometrychange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hide: {
            value: rsvm.RsCreateAction("hide", 0, function hide() {
            }), writable: true, enumerable: true, configurable: true,
        },
        show: {
            value: rsvm.RsCreateAction("show", 0, function show() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: VirtualKeyboard },
        [Symbol.toStringTag]: { value: "VirtualKeyboard", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(VirtualKeyboard, EventTarget);
    Object.setPrototypeOf(VirtualKeyboard.prototype, EventTarget.prototype);
}();