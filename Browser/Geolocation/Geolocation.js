!function () {
    Object.defineProperty(window, "Geolocation", {
        value: rsvm.RsCreateConstructor("Geolocation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Geolocation = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Geolocation", target);
        },
        new() {
            let obj = rsvm.RsCreate(Geolocation.prototype);
            return obj;
        },
    };

    Object.defineProperties(Geolocation, {
        prototype: { value: Geolocation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Geolocation.prototype, {
        clearWatch: {
            value: rsvm.RsCreateAction("clearWatch", 1, function clearWatch() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getCurrentPosition: {
            value: rsvm.RsCreateAction("getCurrentPosition", 1, function getCurrentPosition() {
            }), writable: true, enumerable: true, configurable: true,
        },
        watchPosition: {
            value: rsvm.RsCreateAction("watchPosition", 1, function watchPosition() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Geolocation },
        [Symbol.toStringTag]: { value: "Geolocation", writable: false, enumerable: false, configurable: true, },
    });
}();