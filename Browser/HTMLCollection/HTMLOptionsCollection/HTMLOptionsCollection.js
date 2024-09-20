!function () {
    Object.defineProperty(window, "HTMLOptionsCollection", {
        value: rsvm.RsCreateConstructor("HTMLOptionsCollection"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLOptionsCollection = {
        memory: {
            length: 0,
            selectedIndex: -1,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLOptionsCollection", target);
        },
        new() {
            let obj = rsvm.RsCreate(HTMLOptionsCollection.prototype);
            return obj;
        },
    };

    Object.defineProperties(HTMLOptionsCollection, {
        prototype: { value: HTMLOptionsCollection.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLOptionsCollection.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: rsvm.RsCreateSetter("length", function length() {
                rsvm.set(this, "length", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        selectedIndex: {
            get: rsvm.RsCreateGetter("selectedIndex", function selectedIndex() {
                return rsvm.get(this, "selectedIndex");
            }), set: rsvm.RsCreateSetter("selectedIndex", function selectedIndex() {
                rsvm.set(this, "selectedIndex", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        add: {
            value: rsvm.RsCreateAction("add", 1, function add() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 1, function remove() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLOptionsCollection },
        [Symbol.toStringTag]: { value: "HTMLOptionsCollection", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(HTMLOptionsCollection, HTMLCollection);
    Object.setPrototypeOf(HTMLOptionsCollection.prototype, HTMLCollection.prototype);
}();