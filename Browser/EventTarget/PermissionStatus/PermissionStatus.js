!function () {
    Object.defineProperty(window, "PermissionStatus", {
        value: rsvm.RsCreateConstructor("PermissionStatus"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PermissionStatus = {
        memory: {
            name: "geolocation",
            state: "prompt",
            onchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PermissionStatus", target);
        },
        new() {
            let obj = rsvm.RsCreate(PermissionStatus.prototype);
            return obj;
        },
    };

    Object.defineProperties(PermissionStatus, {
        prototype: { value: PermissionStatus.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PermissionStatus.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        state: {
            get: rsvm.RsCreateGetter("state", function state() {
                return rsvm.get(this, "state");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PermissionStatus },
        [Symbol.toStringTag]: { value: "PermissionStatus", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(PermissionStatus, EventTarget);
    Object.setPrototypeOf(PermissionStatus.prototype, EventTarget.prototype);
}();