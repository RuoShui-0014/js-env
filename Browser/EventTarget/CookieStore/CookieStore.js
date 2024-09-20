!function () {
    Object.defineProperty(window, "CookieStore", {
        value: rsvm.RsCreateConstructor("CookieStore"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CookieStore = {
        memory: {
            onchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("CookieStore", target);
        },
        new() {
            let obj = rsvm.RsCreate(CookieStore.prototype);
            return obj;
        },
    };

    Object.defineProperties(CookieStore, {
        prototype: { value: CookieStore.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CookieStore.prototype, {
        delete: {
            value: rsvm.RsCreateAction("delete", 1, function delete_() {
            }), writable: true, enumerable: true, configurable: true,
        },
        get: {
            value: rsvm.RsCreateAction("get", 0, function get() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAll: {
            value: rsvm.RsCreateAction("getAll", 0, function getAll() {
            }), writable: true, enumerable: true, configurable: true,
        },
        set: {
            value: rsvm.RsCreateAction("set", 1, function set() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CookieStore },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "CookieStore", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(CookieStore, EventTarget);
    Object.setPrototypeOf(CookieStore.prototype, EventTarget.prototype);
}();