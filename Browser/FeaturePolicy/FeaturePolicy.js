!function () {
    Object.defineProperty(window, "FeaturePolicy", {
        value: rsvm.RsCreateConstructor("FeaturePolicy"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FeaturePolicy = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("FeaturePolicy", target);
        },
        new() {
            let obj = rsvm.RsCreate(FeaturePolicy.prototype);
            return obj;
        },
    };

    Object.defineProperties(FeaturePolicy, {
        prototype: { value: FeaturePolicy.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FeaturePolicy.prototype, {
        allowedFeatures: {
            value: rsvm.RsCreateAction("allowedFeatures", 0, function allowedFeatures() {
            }), writable: true, enumerable: true, configurable: true,
        },
        allowsFeature: {
            value: rsvm.RsCreateAction("allowsFeature", 1, function allowsFeature() {
            }), writable: true, enumerable: true, configurable: true,
        },
        features: {
            value: rsvm.RsCreateAction("features", 0, function features() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAllowlistForFeature: {
            value: rsvm.RsCreateAction("getAllowlistForFeature", 1, function getAllowlistForFeature() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: FeaturePolicy },
        [Symbol.toStringTag]: { value: "FeaturePolicy", writable: false, enumerable: false, configurable: true, },
    });
}();