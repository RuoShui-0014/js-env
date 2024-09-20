!function () {
    Object.defineProperty(window, "HTMLFormControlsCollection", {
        value: rsvm.RsCreateConstructor("HTMLFormControlsCollection"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLFormControlsCollection = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLFormControlsCollection", target);
        },
        new() {
            let obj = rsvm.RsCreate(HTMLFormControlsCollection.prototype);
            return obj;
        },
    };

    Object.defineProperties(HTMLFormControlsCollection, {
        prototype: { value: HTMLFormControlsCollection.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLFormControlsCollection.prototype, {
        namedItem: {
            value: rsvm.RsCreateAction("namedItem", 1, function namedItem() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLFormControlsCollection },
        [Symbol.toStringTag]: { value: "HTMLFormControlsCollection", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(HTMLFormControlsCollection, HTMLCollection);
    Object.setPrototypeOf(HTMLFormControlsCollection.prototype, HTMLCollection.prototype);
}();