!function () {
    Object.defineProperty(window, "XMLHttpRequestEventTarget", {
        value: rsvm.RsCreateConstructor("XMLHttpRequestEventTarget"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.XMLHttpRequestEventTarget = {
        memory: {
            onloadstart: null,
            onprogress: null,
            onabort: null,
            onerror: null,
            onload: null,
            ontimeout: null,
            onloadend: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("XMLHttpRequestEventTarget", target);
        },
        new() {
            let obj = rsvm.RsCreate(XMLHttpRequestEventTarget.prototype);
            return obj;
        },
    };

    Object.defineProperties(XMLHttpRequestEventTarget, {
        prototype: { value: XMLHttpRequestEventTarget.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
        onloadstart: {
            get: rsvm.RsCreateGetter("onloadstart", function onloadstart() {
                return rsvm.get(this, "onloadstart");
            }), set: rsvm.RsCreateSetter("onloadstart", function onloadstart() {
                rsvm.set(this, "onloadstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onprogress: {
            get: rsvm.RsCreateGetter("onprogress", function onprogress() {
                return rsvm.get(this, "onprogress");
            }), set: rsvm.RsCreateSetter("onprogress", function onprogress() {
                rsvm.set(this, "onprogress", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onabort: {
            get: rsvm.RsCreateGetter("onabort", function onabort() {
                return rsvm.get(this, "onabort");
            }), set: rsvm.RsCreateSetter("onabort", function onabort() {
                rsvm.set(this, "onabort", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onload: {
            get: rsvm.RsCreateGetter("onload", function onload() {
                return rsvm.get(this, "onload");
            }), set: rsvm.RsCreateSetter("onload", function onload() {
                rsvm.set(this, "onload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontimeout: {
            get: rsvm.RsCreateGetter("ontimeout", function ontimeout() {
                return rsvm.get(this, "ontimeout");
            }), set: rsvm.RsCreateSetter("ontimeout", function ontimeout() {
                rsvm.set(this, "ontimeout", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadend: {
            get: rsvm.RsCreateGetter("onloadend", function onloadend() {
                return rsvm.get(this, "onloadend");
            }), set: rsvm.RsCreateSetter("onloadend", function onloadend() {
                rsvm.set(this, "onloadend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: XMLHttpRequestEventTarget },
        [Symbol.toStringTag]: { value: "XMLHttpRequestEventTarget", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(XMLHttpRequestEventTarget, EventTarget);
    Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
}();