!function () {
    Object.defineProperty(window, "NetworkInformation", {
        value: rsvm.RsCreateConstructor("NetworkInformation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.NetworkInformation = {
        memory: {
            onchange: null,
            effectiveType: "4g",
            rtt: 100,
            downlink: 1.3,
            saveData: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("NetworkInformation", target);
        },
        new() {
            let obj = rsvm.RsCreate(NetworkInformation.prototype);
            return obj;
        },
    };

    Object.defineProperties(NetworkInformation, {
        prototype: { value: NetworkInformation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(NetworkInformation.prototype, {
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        effectiveType: {
            get: rsvm.RsCreateGetter("effectiveType", function effectiveType() {
                return rsvm.get(this, "effectiveType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rtt: {
            get: rsvm.RsCreateGetter("rtt", function rtt() {
                return rsvm.get(this, "rtt");
            }), set: undefined, enumerable: true, configurable: true,
        },
        downlink: {
            get: rsvm.RsCreateGetter("downlink", function downlink() {
                return rsvm.get(this, "downlink");
            }), set: undefined, enumerable: true, configurable: true,
        },
        saveData: {
            get: rsvm.RsCreateGetter("saveData", function saveData() {
                return rsvm.get(this, "saveData");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: NetworkInformation },
        [Symbol.toStringTag]: { value: "NetworkInformation", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(NetworkInformation, EventTarget);
    Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
}();