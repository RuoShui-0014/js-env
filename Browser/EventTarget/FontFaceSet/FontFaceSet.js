!function () {
    let FontFaceSet = {};

    rsvm.prototype.FontFaceSet = {
        memory: {
            onloading: null,
            onloadingdone: null,
            onloadingerror: null,
            ready: null,
            status: "loaded",
            size: 3,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("FontFaceSet", target);
        },
        new() {
            let obj = rsvm.RsCreate(FontFaceSet);
            rsvm.set(obj, 'ready', new Promise((resolve, reject) => { resolve(obj); }))
            return obj;
        },
    };

    Object.defineProperties(FontFaceSet, {
        onloading: {
            get: rsvm.RsCreateGetter("onloading", function onloading() {
                return rsvm.get(this, "onloading");
            }), set: rsvm.RsCreateSetter("onloading", function onloading() {
                rsvm.set(this, "onloading", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadingdone: {
            get: rsvm.RsCreateGetter("onloadingdone", function onloadingdone() {
                return rsvm.get(this, "onloadingdone");
            }), set: rsvm.RsCreateSetter("onloadingdone", function onloadingdone() {
                rsvm.set(this, "onloadingdone", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadingerror: {
            get: rsvm.RsCreateGetter("onloadingerror", function onloadingerror() {
                return rsvm.get(this, "onloadingerror");
            }), set: rsvm.RsCreateSetter("onloadingerror", function onloadingerror() {
                rsvm.set(this, "onloadingerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ready: {
            get: rsvm.RsCreateGetter("ready", function ready() {
                return rsvm.get(this, "ready");
            }), set: undefined, enumerable: true, configurable: true,
        },
        status: {
            get: rsvm.RsCreateGetter("status", function status() {
                return rsvm.get(this, "status");
            }), set: undefined, enumerable: true, configurable: true,
        },
        size: {
            get: rsvm.RsCreateGetter("size", function size() {
                return rsvm.get(this, "size");
            }), set: undefined, enumerable: true, configurable: true,
        },
        check: {
            value: rsvm.RsCreateAction("check", 1, function check() {
            }), writable: true, enumerable: true, configurable: true,
        },
        load: {
            value: rsvm.RsCreateAction("load", 1, function load() {
            }), writable: true, enumerable: true, configurable: true,
        },
        add: {
            value: rsvm.RsCreateAction("add", 1, function add() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clear: {
            value: rsvm.RsCreateAction("clear", 0, function clear() {
                for (const key of Object.keys(this)){
                    delete this[key];
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        delete: {
            value: rsvm.RsCreateAction("delete", 1, function delete_() {
            }), writable: true, enumerable: true, configurable: true,
        },
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forEach: {
            value: rsvm.RsCreateAction("forEach", 1, function forEach() {
                for (const key of Object.keys(this)){
                    if (typeof(arguments[0]) === 'function'){
                        arguments[0](this[key]);
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        has: {
            value: rsvm.RsCreateAction("has", 1, function has() {
            }), writable: true, enumerable: true, configurable: true,
        },
        keys: {
            value: rsvm.RsCreateAction("keys", 0, function keys() {
                return Object.keys(this);
            }), writable: true, enumerable: true, configurable: true,
        },
        values: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "FontFaceSet", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(FontFaceSet, EventTarget.prototype);
}();