!function () {
    Object.defineProperty(window, "FontFace", {
        value: rsvm.RsCreateConstructor("FontFace", 2, function FontFace() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.FontFace.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FontFace = {
        memory: {
            family: "iconfont",
            style: "normal",
            weight: "normal",
            stretch: "normal",
            unicodeRange: "U+0-10FFFF",
            variant: "normal",
            featureSettings: "normal",
            display: "auto",
            ascentOverride: "normal",
            descentOverride: "normal",
            lineGapOverride: "normal",
            sizeAdjust: "100%",
            status: "error",
            loaded: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("FontFace", target);
        },
        new() {
            if (arguments.length !== 2) {
                rsvm.error.new();       // 构造函数抛出异常
            }
            let obj = rsvm.RsCreate(FontFace.prototype);
            rsvm.set(obj, "family", arguments[0]);
            rsvm.set(obj, "loaded", new Promise((resolve, reject) => { resolve(new Error()); }));
            return obj;
        },
    };

    Object.defineProperties(FontFace, {
        prototype: { value: FontFace.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FontFace.prototype, {
        family: {
            get: rsvm.RsCreateGetter("family", function family() {
                return rsvm.get(this, "family");
            }), set: rsvm.RsCreateSetter("family", function family() {
                rsvm.set(this, "family", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        style: {
            get: rsvm.RsCreateGetter("style", function style() {
                return rsvm.get(this, "style");
            }), set: rsvm.RsCreateSetter("style", function style() {
                rsvm.set(this, "style", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        weight: {
            get: rsvm.RsCreateGetter("weight", function weight() {
                return rsvm.get(this, "weight");
            }), set: rsvm.RsCreateSetter("weight", function weight() {
                rsvm.set(this, "weight", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        stretch: {
            get: rsvm.RsCreateGetter("stretch", function stretch() {
                return rsvm.get(this, "stretch");
            }), set: rsvm.RsCreateSetter("stretch", function stretch() {
                rsvm.set(this, "stretch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        unicodeRange: {
            get: rsvm.RsCreateGetter("unicodeRange", function unicodeRange() {
                return rsvm.get(this, "unicodeRange");
            }), set: rsvm.RsCreateSetter("unicodeRange", function unicodeRange() {
                rsvm.set(this, "unicodeRange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        variant: {
            get: rsvm.RsCreateGetter("variant", function variant() {
                return rsvm.get(this, "variant");
            }), set: rsvm.RsCreateSetter("variant", function variant() {
                rsvm.set(this, "variant", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        featureSettings: {
            get: rsvm.RsCreateGetter("featureSettings", function featureSettings() {
                return rsvm.get(this, "featureSettings");
            }), set: rsvm.RsCreateSetter("featureSettings", function featureSettings() {
                rsvm.set(this, "featureSettings", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        display: {
            get: rsvm.RsCreateGetter("display", function display() {
                return rsvm.get(this, "display");
            }), set: rsvm.RsCreateSetter("display", function display() {
                rsvm.set(this, "display", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ascentOverride: {
            get: rsvm.RsCreateGetter("ascentOverride", function ascentOverride() {
                return rsvm.get(this, "ascentOverride");
            }), set: rsvm.RsCreateSetter("ascentOverride", function ascentOverride() {
                rsvm.set(this, "ascentOverride", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        descentOverride: {
            get: rsvm.RsCreateGetter("descentOverride", function descentOverride() {
                return rsvm.get(this, "descentOverride");
            }), set: rsvm.RsCreateSetter("descentOverride", function descentOverride() {
                rsvm.set(this, "descentOverride", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lineGapOverride: {
            get: rsvm.RsCreateGetter("lineGapOverride", function lineGapOverride() {
                return rsvm.get(this, "lineGapOverride");
            }), set: rsvm.RsCreateSetter("lineGapOverride", function lineGapOverride() {
                rsvm.set(this, "lineGapOverride", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sizeAdjust: {
            get: rsvm.RsCreateGetter("sizeAdjust", function sizeAdjust() {
                return rsvm.get(this, "sizeAdjust");
            }), set: rsvm.RsCreateSetter("sizeAdjust", function sizeAdjust() {
                rsvm.set(this, "sizeAdjust", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        status: {
            get: rsvm.RsCreateGetter("status", function status() {
                return rsvm.get(this, "status");
            }), set: undefined, enumerable: true, configurable: true,
        },
        loaded: {
            get: rsvm.RsCreateGetter("loaded", function loaded() {
                return rsvm.get(this, "loaded");
            }), set: undefined, enumerable: true, configurable: true,
        },
        load: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: FontFace },
        [Symbol.toStringTag]: { value: "FontFace", writable: false, enumerable: false, configurable: true, },
    });
}();