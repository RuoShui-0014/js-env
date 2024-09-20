!function () {
    Object.defineProperty(window, "NavigatorManagedData", {
        value: rsvm.RsCreateConstructor("NavigatorManagedData"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.NavigatorManagedData = {
        memory: {
            onmanagedconfigurationchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("NavigatorManagedData", target);
        },
        new() {
            let obj = rsvm.RsCreate(NavigatorManagedData.prototype);
            return obj;
        },
    };

    Object.defineProperties(NavigatorManagedData, {
        prototype: { value: NavigatorManagedData.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(NavigatorManagedData.prototype, {
        onmanagedconfigurationchange: {
            get: rsvm.RsCreateGetter("onmanagedconfigurationchange", function onmanagedconfigurationchange() {
                return rsvm.get(this, "onmanagedconfigurationchange");
            }), set: rsvm.RsCreateSetter("onmanagedconfigurationchange", function onmanagedconfigurationchange() {
                rsvm.set(this, "onmanagedconfigurationchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getManagedConfiguration: {
            value: rsvm.RsCreateAction("getManagedConfiguration", 1, function getManagedConfiguration() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: NavigatorManagedData },
        [Symbol.toStringTag]: { value: "NavigatorManagedData", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(NavigatorManagedData, EventTarget);
    Object.setPrototypeOf(NavigatorManagedData.prototype, EventTarget.prototype);
}();