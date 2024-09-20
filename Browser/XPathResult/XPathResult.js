!function () {
    Object.defineProperty(window, "XPathResult", {
        value: rsvm.RsCreateConstructor("XPathResult"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.XPathResult = {
        memory: {
            resultType: undefined,
            numberValue: undefined,
            stringValue: undefined,
            booleanValue: undefined,
            singleNodeValue: undefined,
            invalidIteratorState: undefined,
            snapshotLength: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("XPathResult", target);
        },
        new() {
            let obj = rsvm.RsCreate(XPathResult.prototype);
            return obj;
        },
    };

    Object.defineProperties(XPathResult, {
        prototype: { value: XPathResult.prototype, writable: false, enumerable: false, configurable: false },
        ANY_TYPE: { value: 0, writable: false, enumerable: true, configurable: false },
        NUMBER_TYPE: { value: 1, writable: false, enumerable: true, configurable: false },
        STRING_TYPE: { value: 2, writable: false, enumerable: true, configurable: false },
        BOOLEAN_TYPE: { value: 3, writable: false, enumerable: true, configurable: false },
        UNORDERED_NODE_ITERATOR_TYPE: { value: 4, writable: false, enumerable: true, configurable: false },
        ORDERED_NODE_ITERATOR_TYPE: { value: 5, writable: false, enumerable: true, configurable: false },
        UNORDERED_NODE_SNAPSHOT_TYPE: { value: 6, writable: false, enumerable: true, configurable: false },
        ORDERED_NODE_SNAPSHOT_TYPE: { value: 7, writable: false, enumerable: true, configurable: false },
        ANY_UNORDERED_NODE_TYPE: { value: 8, writable: false, enumerable: true, configurable: false },
        FIRST_ORDERED_NODE_TYPE: { value: 9, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(XPathResult.prototype, {
        resultType: {
            get: rsvm.RsCreateGetter("resultType", function resultType() {
                return rsvm.get(this, "resultType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        numberValue: {
            get: rsvm.RsCreateGetter("numberValue", function numberValue() {
                return rsvm.get(this, "numberValue");
            }), set: undefined, enumerable: true, configurable: true,
        },
        stringValue: {
            get: rsvm.RsCreateGetter("stringValue", function stringValue() {
                return rsvm.get(this, "stringValue");
            }), set: undefined, enumerable: true, configurable: true,
        },
        booleanValue: {
            get: rsvm.RsCreateGetter("booleanValue", function booleanValue() {
                return rsvm.get(this, "booleanValue");
            }), set: undefined, enumerable: true, configurable: true,
        },
        singleNodeValue: {
            get: rsvm.RsCreateGetter("singleNodeValue", function singleNodeValue() {
                return rsvm.get(this, "singleNodeValue");
            }), set: undefined, enumerable: true, configurable: true,
        },
        invalidIteratorState: {
            get: rsvm.RsCreateGetter("invalidIteratorState", function invalidIteratorState() {
                return rsvm.get(this, "invalidIteratorState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        snapshotLength: {
            get: rsvm.RsCreateGetter("snapshotLength", function snapshotLength() {
                return rsvm.get(this, "snapshotLength");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ANY_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        NUMBER_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        STRING_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        BOOLEAN_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        UNORDERED_NODE_ITERATOR_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        ORDERED_NODE_ITERATOR_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        UNORDERED_NODE_SNAPSHOT_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        ORDERED_NODE_SNAPSHOT_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        ANY_UNORDERED_NODE_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        FIRST_ORDERED_NODE_TYPE: { value: undefined, writable: false, enumerable: true, configurable: false, },
        iterateNext: { value: undefined, writable: true, enumerable: true, configurable: true, },
        snapshotItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: XPathResult },
        [Symbol.toStringTag]: { value: "XPathResult", writable: false, enumerable: false, configurable: true, },
    });
}();