!function () {
    Object.defineProperty(window, "ServiceWorker", {
        value: rsvm.RsCreateConstructor("ServiceWorker"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ServiceWorker = {
        memory: {
            scriptURL: undefined,
            state: undefined,
            onstatechange: undefined,
            onerror: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ServiceWorker", target);
        },
        new() {
            let obj = rsvm.RsCreate(ServiceWorker.prototype);
            return obj;
        },
    };

    Object.defineProperties(ServiceWorker, {
        prototype: { value: ServiceWorker.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ServiceWorker.prototype, {
        scriptURL: {
            get: rsvm.RsCreateGetter("scriptURL", function scriptURL() {
                return rsvm.get(this, "scriptURL");
            }), set: undefined, enumerable: true, configurable: true,
        },
        state: {
            get: rsvm.RsCreateGetter("state", function state() {
                return rsvm.get(this, "state");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onstatechange: {
            get: rsvm.RsCreateGetter("onstatechange", function onstatechange() {
                return rsvm.get(this, "onstatechange");
            }), set: rsvm.RsCreateSetter("onstatechange", function onstatechange() {
                rsvm.set(this, "onstatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        postMessage: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: ServiceWorker },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "ServiceWorker", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(ServiceWorker, EventTarget);
    Object.setPrototypeOf(ServiceWorker.prototype, EventTarget.prototype);
}();