!function () {
    Object.defineProperty(window, "RemotePlayback", {
        value: rsvm.RsCreateConstructor("RemotePlayback"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.RemotePlayback = {
        memory: {
            state: "disconnected",
            onconnecting: null,
            onconnect: null,
            ondisconnect: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("RemotePlayback", target);
        },
        new() {
            let obj = rsvm.RsCreate(RemotePlayback.prototype);
            return obj;
        },
    };

    Object.defineProperties(RemotePlayback, {
        prototype: { value: RemotePlayback.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(RemotePlayback.prototype, {
        state: {
            get: rsvm.RsCreateGetter("state", function state() {
                return rsvm.get(this, "state");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onconnecting: {
            get: rsvm.RsCreateGetter("onconnecting", function onconnecting() {
                return rsvm.get(this, "onconnecting");
            }), set: rsvm.RsCreateSetter("onconnecting", function onconnecting() {
                rsvm.set(this, "onconnecting", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onconnect: {
            get: rsvm.RsCreateGetter("onconnect", function onconnect() {
                return rsvm.get(this, "onconnect");
            }), set: rsvm.RsCreateSetter("onconnect", function onconnect() {
                rsvm.set(this, "onconnect", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondisconnect: {
            get: rsvm.RsCreateGetter("ondisconnect", function ondisconnect() {
                return rsvm.get(this, "ondisconnect");
            }), set: rsvm.RsCreateSetter("ondisconnect", function ondisconnect() {
                rsvm.set(this, "ondisconnect", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        cancelWatchAvailability: {
            value: rsvm.RsCreateAction("cancelWatchAvailability", 0, function cancelWatchAvailability() {
            }), writable: true, enumerable: true, configurable: true,
        },
        prompt: {
            value: rsvm.RsCreateAction("prompt", 0, function prompt() {
            }), writable: true, enumerable: true, configurable: true,
        },
        watchAvailability: {
            value: rsvm.RsCreateAction("watchAvailability", 1, function watchAvailability() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: RemotePlayback },
        [Symbol.toStringTag]: { value: "RemotePlayback", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(RemotePlayback, EventTarget);
    Object.setPrototypeOf(RemotePlayback.prototype, EventTarget.prototype);
}();