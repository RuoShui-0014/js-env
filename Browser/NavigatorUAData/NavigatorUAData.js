!function () {
    Object.defineProperty(window, "NavigatorUAData", {
        value: rsvm.RsCreateConstructor("NavigatorUAData"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.NavigatorUAData = {
        memory: {
            brands: [
                { brand: "Chromium", version: "118", },
                { brand: "Google Chrome", version: "118", },
                { brand: "Not=A?Brand", version: "99", },
            ],
            mobile: false,
            platform: "Windows",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("NavigatorUAData", target);
        },
        new() {
            let obj = rsvm.RsCreate(NavigatorUAData.prototype);
            return obj;
        },
    };

    Object.defineProperties(NavigatorUAData, {
        prototype: { value: NavigatorUAData.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(NavigatorUAData.prototype, {
        brands: {
            get: rsvm.RsCreateGetter("brands", function brands() {
                return rsvm.get(this, "brands");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mobile: {
            get: rsvm.RsCreateGetter("mobile", function mobile() {
                return rsvm.get(this, "mobile");
            }), set: undefined, enumerable: true, configurable: true,
        },
        platform: {
            get: rsvm.RsCreateGetter("platform", function platform() {
                return rsvm.get(this, "platform");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getHighEntropyValues: {
            value: rsvm.RsCreateAction("getHighEntropyValues", 1, function getHighEntropyValues() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: NavigatorUAData },
        [Symbol.toStringTag]: { value: "NavigatorUAData", writable: false, enumerable: false, configurable: true, },
    });
}();