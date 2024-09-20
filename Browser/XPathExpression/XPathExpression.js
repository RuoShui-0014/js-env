!function () {
    Object.defineProperty(window, "XPathExpression", {
        value: rsvm.RsCreateConstructor("XPathExpression"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.XPathExpression = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("XPathExpression", target);
        },
        new() {
            let obj = rsvm.RsCreate(XPathExpression.prototype);
            return obj;
        },
    };

    Object.defineProperties(XPathExpression, {
        prototype: { value: XPathExpression.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(XPathExpression.prototype, {
        evaluate: {
            value: rsvm.RsCreateAction("evaluate", 1, function evaluate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: XPathExpression },
        [Symbol.toStringTag]: { value: "XPathExpression", writable: false, enumerable: false, configurable: true, },
    });
}();