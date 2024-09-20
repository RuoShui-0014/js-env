!function () {
    Object.defineProperty(window, "HTMLScriptElement", {
        value: rsvm.RsCreateConstructor("HTMLScriptElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLScriptElement = {
        memory: {
            src: "",
            type: "",
            noModule: false,
            charset: "",
            async: true,
            defer: false,
            crossOrigin: null,
            text: "",
            referrerPolicy: "",
            fetchPriority: "auto",
            event: "",
            htmlFor: "",
            integrity: "",
            blocking: rsvm.prototype.DOMTokenList.new(),
            attributionSrc: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLScriptElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLScriptElement.prototype);
            rsvm.set(obj, "nodeName", "script".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "script");
            rsvm.set(obj, "tagName", "script".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLScriptElement, {
        prototype: { value: HTMLScriptElement.prototype, writable: false, enumerable: false, configurable: false },
        supports: {
            value: rsvm.RsCreateAction("supports", 1, function supports() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperties(HTMLScriptElement.prototype, {
        src: {
            get: rsvm.RsCreateGetter("src", function src() {
                return rsvm.get(this, "src");
            }), set: rsvm.RsCreateSetter("src", function src() {
                if (arguments[0].indexOf('https:') == -1){
                    rsvm.set(this, "src", "https:" + arguments[0]);
                    return;
                }
                rsvm.set(this, "src", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: rsvm.RsCreateSetter("type", function type() {
                rsvm.set(this, "type", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        noModule: {
            get: rsvm.RsCreateGetter("noModule", function noModule() {
                return rsvm.get(this, "noModule");
            }), set: rsvm.RsCreateSetter("noModule", function noModule() {
                rsvm.set(this, "noModule", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        charset: {
            get: rsvm.RsCreateGetter("charset", function charset() {
                return rsvm.get(this, "charset");
            }), set: rsvm.RsCreateSetter("charset", function charset() {
                rsvm.set(this, "charset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        async: {
            get: rsvm.RsCreateGetter("async", function async() {
                return rsvm.get(this, "async");
            }), set: rsvm.RsCreateSetter("async", function async() {
                rsvm.set(this, "async", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        defer: {
            get: rsvm.RsCreateGetter("defer", function defer() {
                return rsvm.get(this, "defer");
            }), set: rsvm.RsCreateSetter("defer", function defer() {
                rsvm.set(this, "defer", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        crossOrigin: {
            get: rsvm.RsCreateGetter("crossOrigin", function crossOrigin() {
                return rsvm.get(this, "crossOrigin");
            }), set: rsvm.RsCreateSetter("crossOrigin", function crossOrigin() {
                rsvm.set(this, "crossOrigin", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        text: {
            get: rsvm.RsCreateGetter("text", function text() {
                return rsvm.get(this, "text");
            }), set: rsvm.RsCreateSetter("text", function text() {
                rsvm.set(this, "text", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        referrerPolicy: {
            get: rsvm.RsCreateGetter("referrerPolicy", function referrerPolicy() {
                return rsvm.get(this, "referrerPolicy");
            }), set: rsvm.RsCreateSetter("referrerPolicy", function referrerPolicy() {
                rsvm.set(this, "referrerPolicy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fetchPriority: {
            get: rsvm.RsCreateGetter("fetchPriority", function fetchPriority() {
                return rsvm.get(this, "fetchPriority");
            }), set: rsvm.RsCreateSetter("fetchPriority", function fetchPriority() {
                rsvm.set(this, "fetchPriority", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        event: {
            get: rsvm.RsCreateGetter("event", function event() {
                return rsvm.get(this, "event");
            }), set: rsvm.RsCreateSetter("event", function event() {
                rsvm.set(this, "event", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        htmlFor: {
            get: rsvm.RsCreateGetter("htmlFor", function htmlFor() {
                return rsvm.get(this, "htmlFor");
            }), set: rsvm.RsCreateSetter("htmlFor", function htmlFor() {
                rsvm.set(this, "htmlFor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        integrity: {
            get: rsvm.RsCreateGetter("integrity", function integrity() {
                return rsvm.get(this, "integrity");
            }), set: rsvm.RsCreateSetter("integrity", function integrity() {
                rsvm.set(this, "integrity", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        blocking: {
            get: rsvm.RsCreateGetter("blocking", function blocking() {
                return rsvm.get(this, "blocking");
            }), set: rsvm.RsCreateSetter("blocking", function blocking() {
                rsvm.set(this, "blocking", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLScriptElement },
        attributionSrc: {
            get: rsvm.RsCreateGetter("attributionSrc", function attributionSrc() {
                return rsvm.get(this, "attributionSrc");
            }), set: rsvm.RsCreateSetter("attributionSrc", function attributionSrc() {
                rsvm.set(this, "attributionSrc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HTMLScriptElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLScriptElement, HTMLElement);
    Object.setPrototypeOf(HTMLScriptElement.prototype, HTMLElement.prototype);
}();