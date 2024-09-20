!function () {
    Object.defineProperty(window, "CSSRuleList", {
        value: rsvm.RsCreateConstructor("CSSRuleList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CSSRuleList = {
        memory: {
            length: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("CSSRuleList", target);
        },
        new() {
            let obj = rsvm.RsCreate(CSSRuleList.prototype);
            return obj;
        },
    };

    Object.defineProperties(CSSRuleList, {
        prototype: { value: CSSRuleList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CSSRuleList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: CSSRuleList },
        [Symbol.toStringTag]: { value: "CSSRuleList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();