!function () {
    Object.defineProperty(window, "TrustedTypePolicyFactory", {
        value: rsvm.RsCreateConstructor("TrustedTypePolicyFactory"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TrustedTypePolicyFactory = {
        memory: {
            emptyHTML: rsvm.prototype.TrustedHTML.new(),
            emptyScript: rsvm.prototype.TrustedScript.new(),
            defaultPolicy: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TrustedTypePolicyFactory", target);
        },
        new() {
            let obj = rsvm.RsCreate(TrustedTypePolicyFactory.prototype);
            return obj;
        },
    };

    Object.defineProperties(TrustedTypePolicyFactory, {
        prototype: { value: TrustedTypePolicyFactory.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TrustedTypePolicyFactory.prototype, {
        emptyHTML: {
            get: rsvm.RsCreateGetter("emptyHTML", function emptyHTML() {
                return rsvm.get(this, "emptyHTML");
            }), set: undefined, enumerable: true, configurable: true,
        },
        emptyScript: {
            get: rsvm.RsCreateGetter("emptyScript", function emptyScript() {
                return rsvm.get(this, "emptyScript");
            }), set: undefined, enumerable: true, configurable: true,
        },
        defaultPolicy: {
            get: rsvm.RsCreateGetter("defaultPolicy", function defaultPolicy() {
                return rsvm.get(this, "defaultPolicy");
            }), set: undefined, enumerable: true, configurable: true,
        },
        createPolicy: {
            value: rsvm.RsCreateAction("createPolicy", 1, function createPolicy() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttributeType: {
            value: rsvm.RsCreateAction("getAttributeType", 2, function getAttributeType() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getPropertyType: {
            value: rsvm.RsCreateAction("getPropertyType", 2, function getPropertyType() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getTypeMapping: {
            value: rsvm.RsCreateAction("getTypeMapping", 0, function getTypeMapping() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isHTML: {
            value: rsvm.RsCreateAction("isHTML", 1, function isHTML() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isScript: {
            value: rsvm.RsCreateAction("isScript", 1, function isScript() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isScriptURL: {
            value: rsvm.RsCreateAction("isScriptURL", 1, function isScriptURL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TrustedTypePolicyFactory },
        [Symbol.toStringTag]: { value: "TrustedTypePolicyFactory", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(TrustedTypePolicyFactory, EventTarget);
    Object.setPrototypeOf(TrustedTypePolicyFactory.prototype, EventTarget.prototype);
}();