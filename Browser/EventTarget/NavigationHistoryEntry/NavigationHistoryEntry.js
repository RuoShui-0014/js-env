!function () {
    Object.defineProperty(window, "NavigationHistoryEntry", {
        value: rsvm.RsCreateConstructor("NavigationHistoryEntry"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.NavigationHistoryEntry = {
        memory: {
            key: "0863b51a-914d-4da0-9b6b-daa2af7d1d08",
            id: "bd9abb38-51e3-4962-b53d-a14074c2eba5",
            url: "chrome://newtab/",
            index: 0,
            sameDocument: true,
            ondispose: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("NavigationHistoryEntry", target);
        },
        new() {
            let obj = rsvm.RsCreate(NavigationHistoryEntry.prototype);
            return obj;
        },
    };

    Object.defineProperties(NavigationHistoryEntry, {
        prototype: { value: NavigationHistoryEntry.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(NavigationHistoryEntry.prototype, {
        key: {
            get: rsvm.RsCreateGetter("key", function key() {
                return rsvm.get(this, "key");
            }), set: undefined, enumerable: true, configurable: true,
        },
        id: {
            get: rsvm.RsCreateGetter("id", function id() {
                return rsvm.get(this, "id");
            }), set: undefined, enumerable: true, configurable: true,
        },
        url: {
            get: rsvm.RsCreateGetter("url", function url() {
                return rsvm.get(this, "url");
            }), set: undefined, enumerable: true, configurable: true,
        },
        index: {
            get: rsvm.RsCreateGetter("index", function index() {
                return rsvm.get(this, "index");
            }), set: undefined, enumerable: true, configurable: true,
        },
        sameDocument: {
            get: rsvm.RsCreateGetter("sameDocument", function sameDocument() {
                return rsvm.get(this, "sameDocument");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ondispose: {
            get: rsvm.RsCreateGetter("ondispose", function ondispose() {
                return rsvm.get(this, "ondispose");
            }), set: rsvm.RsCreateSetter("ondispose", function ondispose() {
                rsvm.set(this, "ondispose", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getState: {
            value: rsvm.RsCreateAction("getState", 0, function getState() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: NavigationHistoryEntry },
        [Symbol.toStringTag]: { value: "NavigationHistoryEntry", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(NavigationHistoryEntry, EventTarget);
    Object.setPrototypeOf(NavigationHistoryEntry.prototype, EventTarget.prototype);
}();