!function () {
    Object.defineProperty(window, "Touch", {
        value: rsvm.RsCreateConstructor("Touch"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Touch = {
        memory: {
            identifier: undefined,
            target: null,
            screenX: undefined,
            screenY: undefined,
            clientX: undefined,
            clientY: undefined,
            pageX: undefined,
            pageY: undefined,
            radiusX: undefined,
            radiusY: undefined,
            rotationAngle: undefined,
            force: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Touch", target);
        },
        new() {
            let obj = rsvm.RsCreate(Touch.prototype);
            return obj;
        },
    };

    Object.defineProperties(Touch, {
        prototype: { value: Touch.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Touch.prototype, {
        identifier: {
            get: rsvm.RsCreateGetter("identifier", function identifier() {
                return rsvm.get(this, "identifier");
            }), set: undefined, enumerable: true, configurable: true,
        },
        target: {
            get: rsvm.RsCreateGetter("target", function target() {
                return rsvm.get(this, "target");
            }), set: undefined, enumerable: true, configurable: true,
        },
        screenX: {
            get: rsvm.RsCreateGetter("screenX", function screenX() {
                return rsvm.get(this, "screenX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        screenY: {
            get: rsvm.RsCreateGetter("screenY", function screenY() {
                return rsvm.get(this, "screenY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientX: {
            get: rsvm.RsCreateGetter("clientX", function clientX() {
                return rsvm.get(this, "clientX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientY: {
            get: rsvm.RsCreateGetter("clientY", function clientY() {
                return rsvm.get(this, "clientY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pageX: {
            get: rsvm.RsCreateGetter("pageX", function pageX() {
                return rsvm.get(this, "pageX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pageY: {
            get: rsvm.RsCreateGetter("pageY", function pageY() {
                return rsvm.get(this, "pageY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        radiusX: {
            get: rsvm.RsCreateGetter("radiusX", function radiusX() {
                return rsvm.get(this, "radiusX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        radiusY: {
            get: rsvm.RsCreateGetter("radiusY", function radiusY() {
                return rsvm.get(this, "radiusY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rotationAngle: {
            get: rsvm.RsCreateGetter("rotationAngle", function rotationAngle() {
                return rsvm.get(this, "rotationAngle");
            }), set: undefined, enumerable: true, configurable: true,
        },
        force: {
            get: rsvm.RsCreateGetter("force", function force() {
                return rsvm.get(this, "force");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Touch },
        [Symbol.toStringTag]: { value: "Touch", writable: false, enumerable: false, configurable: true, },
    });
}();