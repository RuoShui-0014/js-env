!function () {
    Object.defineProperty(window, "History", {
        value: rsvm.RsCreateConstructor("History"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.History = {
        memory: {
            length: 1,
            scrollRestoration: "auto",
            state: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("History", target);
        },
        new() {
            let obj = rsvm.RsCreate(History.prototype);
            return obj;
        },
    };

    Object.defineProperties(History, {
        prototype: { value: History.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(History.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        scrollRestoration: {
            get: rsvm.RsCreateGetter("scrollRestoration", function scrollRestoration() {
                return rsvm.get(this, "scrollRestoration");
            }), set: rsvm.RsCreateSetter("scrollRestoration", function scrollRestoration() {
                rsvm.set(this, "scrollRestoration", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        state: {
            get: rsvm.RsCreateGetter("state", function state() {
                return rsvm.get(this, "state");
            }), set: undefined, enumerable: true, configurable: true,
        },
        back: {
            value: rsvm.RsCreateAction("back", 0, function back() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forward: {
            value: rsvm.RsCreateAction("forward", 0, function forward() {
            }), writable: true, enumerable: true, configurable: true,
        },
        go: {
            value: rsvm.RsCreateAction("go", 0, function go() {
            }), writable: true, enumerable: true, configurable: true,
        },
        pushState: {
            value: rsvm.RsCreateAction("pushState", 2, function pushState() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceState: {
            value: rsvm.RsCreateAction("replaceState", 2, function replaceState() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: History },
        [Symbol.toStringTag]: { value: "History", writable: false, enumerable: false, configurable: true, },
    });
}();