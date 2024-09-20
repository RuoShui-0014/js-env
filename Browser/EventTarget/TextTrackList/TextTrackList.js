!function () {
    Object.defineProperty(window, "TextTrackList", {
        value: rsvm.RsCreateConstructor("TextTrackList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TextTrackList = {
        memory: {
            length: 0,
            onchange: null,
            onaddtrack: null,
            onremovetrack: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TextTrackList", target);
        },
        new() {
            let obj = rsvm.RsCreate(TextTrackList.prototype);
            return obj;
        },
    };

    Object.defineProperties(TextTrackList, {
        prototype: { value: TextTrackList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TextTrackList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onaddtrack: {
            get: rsvm.RsCreateGetter("onaddtrack", function onaddtrack() {
                return rsvm.get(this, "onaddtrack");
            }), set: rsvm.RsCreateSetter("onaddtrack", function onaddtrack() {
                rsvm.set(this, "onaddtrack", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onremovetrack: {
            get: rsvm.RsCreateGetter("onremovetrack", function onremovetrack() {
                return rsvm.get(this, "onremovetrack");
            }), set: rsvm.RsCreateSetter("onremovetrack", function onremovetrack() {
                rsvm.set(this, "onremovetrack", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getTrackById: {
            value: rsvm.RsCreateAction("getTrackById", 1, function getTrackById() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TextTrackList },
        [Symbol.toStringTag]: { value: "TextTrackList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(TextTrackList, EventTarget);
    Object.setPrototypeOf(TextTrackList.prototype, EventTarget.prototype);
}();