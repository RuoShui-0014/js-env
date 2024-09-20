!function () {
    Object.defineProperty(window, "NamedNodeMap", {
        value: rsvm.RsCreateConstructor("NamedNodeMap"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.NamedNodeMap = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("NamedNodeMap", target);
        },
        new() {
            let obj = rsvm.RsCreate(NamedNodeMap.prototype);
            return obj;
        },
    };

    Object.defineProperties(NamedNodeMap, {
        prototype: { value: NamedNodeMap.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(NamedNodeMap.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        getNamedItem: {
            value: rsvm.RsCreateAction("getNamedItem", 1, function getNamedItem() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        getNamedItemNS: {
            value: rsvm.RsCreateAction("getNamedItemNS", 2, function getNamedItemNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        removeNamedItem: {
            value: rsvm.RsCreateAction("removeNamedItem", 1, function removeNamedItem() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeNamedItemNS: {
            value: rsvm.RsCreateAction("removeNamedItemNS", 2, function removeNamedItemNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setNamedItem: {
            value: rsvm.RsCreateAction("setNamedItem", 1, function setNamedItem() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setNamedItemNS: {
            value: rsvm.RsCreateAction("setNamedItemNS", 1, function setNamedItemNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: NamedNodeMap },
        [Symbol.toStringTag]: { value: "NamedNodeMap", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();