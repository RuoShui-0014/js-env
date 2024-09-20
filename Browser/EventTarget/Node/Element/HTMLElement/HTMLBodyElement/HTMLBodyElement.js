!function () {
    Object.defineProperty(window, "HTMLBodyElement", {
        value: rsvm.RsCreateConstructor("HTMLBodyElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLBodyElement = {
        memory: {
            text: "",
            link: "",
            vLink: "",
            aLink: "",
            bgColor: "",
            background: "",
            onblur: null,
            onerror: null,
            onfocus: null,
            onload: null,
            onresize: null,
            onscroll: null,
            onafterprint: null,
            onbeforeprint: null,
            onbeforeunload: null,
            onhashchange: null,
            onlanguagechange: null,
            onmessage: null,
            onmessageerror: null,
            onoffline: null,
            ononline: null,
            onpagehide: null,
            onpageshow: null,
            onpopstate: null,
            onrejectionhandled: null,
            onstorage: null,
            onunhandledrejection: null,
            onunload: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLBodyElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLBodyElement.prototype);
            rsvm.set(obj, "nodeName", "body".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "body");
            rsvm.set(obj, "tagName", "body".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLBodyElement, {
        prototype: { value: HTMLBodyElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLBodyElement.prototype, {
        text: {
            get: rsvm.RsCreateGetter("text", function text() {
                return rsvm.get(this, "text");
            }), set: rsvm.RsCreateSetter("text", function text() {
                rsvm.set(this, "text", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        link: {
            get: rsvm.RsCreateGetter("link", function link() {
                return rsvm.get(this, "link");
            }), set: rsvm.RsCreateSetter("link", function link() {
                rsvm.set(this, "link", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        vLink: {
            get: rsvm.RsCreateGetter("vLink", function vLink() {
                return rsvm.get(this, "vLink");
            }), set: rsvm.RsCreateSetter("vLink", function vLink() {
                rsvm.set(this, "vLink", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        aLink: {
            get: rsvm.RsCreateGetter("aLink", function aLink() {
                return rsvm.get(this, "aLink");
            }), set: rsvm.RsCreateSetter("aLink", function aLink() {
                rsvm.set(this, "aLink", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        bgColor: {
            get: rsvm.RsCreateGetter("bgColor", function bgColor() {
                return rsvm.get(this, "bgColor");
            }), set: rsvm.RsCreateSetter("bgColor", function bgColor() {
                rsvm.set(this, "bgColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        background: {
            get: rsvm.RsCreateGetter("background", function background() {
                return rsvm.get(this, "background");
            }), set: rsvm.RsCreateSetter("background", function background() {
                rsvm.set(this, "background", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onblur: {
            get: rsvm.RsCreateGetter("onblur", function onblur() {
                return rsvm.get(this, "onblur");
            }), set: rsvm.RsCreateSetter("onblur", function onblur() {
                rsvm.set(this, "onblur", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onfocus: {
            get: rsvm.RsCreateGetter("onfocus", function onfocus() {
                return rsvm.get(this, "onfocus");
            }), set: rsvm.RsCreateSetter("onfocus", function onfocus() {
                rsvm.set(this, "onfocus", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onload: {
            get: rsvm.RsCreateGetter("onload", function onload() {
                return rsvm.get(this, "onload");
            }), set: rsvm.RsCreateSetter("onload", function onload() {
                rsvm.set(this, "onload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onresize: {
            get: rsvm.RsCreateGetter("onresize", function onresize() {
                return rsvm.get(this, "onresize");
            }), set: rsvm.RsCreateSetter("onresize", function onresize() {
                rsvm.set(this, "onresize", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onscroll: {
            get: rsvm.RsCreateGetter("onscroll", function onscroll() {
                return rsvm.get(this, "onscroll");
            }), set: rsvm.RsCreateSetter("onscroll", function onscroll() {
                rsvm.set(this, "onscroll", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onafterprint: {
            get: rsvm.RsCreateGetter("onafterprint", function onafterprint() {
                return rsvm.get(this, "onafterprint");
            }), set: rsvm.RsCreateSetter("onafterprint", function onafterprint() {
                rsvm.set(this, "onafterprint", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onbeforeprint: {
            get: rsvm.RsCreateGetter("onbeforeprint", function onbeforeprint() {
                return rsvm.get(this, "onbeforeprint");
            }), set: rsvm.RsCreateSetter("onbeforeprint", function onbeforeprint() {
                rsvm.set(this, "onbeforeprint", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onbeforeunload: {
            get: rsvm.RsCreateGetter("onbeforeunload", function onbeforeunload() {
                return rsvm.get(this, "onbeforeunload");
            }), set: rsvm.RsCreateSetter("onbeforeunload", function onbeforeunload() {
                rsvm.set(this, "onbeforeunload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onhashchange: {
            get: rsvm.RsCreateGetter("onhashchange", function onhashchange() {
                return rsvm.get(this, "onhashchange");
            }), set: rsvm.RsCreateSetter("onhashchange", function onhashchange() {
                rsvm.set(this, "onhashchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onlanguagechange: {
            get: rsvm.RsCreateGetter("onlanguagechange", function onlanguagechange() {
                return rsvm.get(this, "onlanguagechange");
            }), set: rsvm.RsCreateSetter("onlanguagechange", function onlanguagechange() {
                rsvm.set(this, "onlanguagechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmessage: {
            get: rsvm.RsCreateGetter("onmessage", function onmessage() {
                return rsvm.get(this, "onmessage");
            }), set: rsvm.RsCreateSetter("onmessage", function onmessage() {
                rsvm.set(this, "onmessage", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmessageerror: {
            get: rsvm.RsCreateGetter("onmessageerror", function onmessageerror() {
                return rsvm.get(this, "onmessageerror");
            }), set: rsvm.RsCreateSetter("onmessageerror", function onmessageerror() {
                rsvm.set(this, "onmessageerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onoffline: {
            get: rsvm.RsCreateGetter("onoffline", function onoffline() {
                return rsvm.get(this, "onoffline");
            }), set: rsvm.RsCreateSetter("onoffline", function onoffline() {
                rsvm.set(this, "onoffline", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ononline: {
            get: rsvm.RsCreateGetter("ononline", function ononline() {
                return rsvm.get(this, "ononline");
            }), set: rsvm.RsCreateSetter("ononline", function ononline() {
                rsvm.set(this, "ononline", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpagehide: {
            get: rsvm.RsCreateGetter("onpagehide", function onpagehide() {
                return rsvm.get(this, "onpagehide");
            }), set: rsvm.RsCreateSetter("onpagehide", function onpagehide() {
                rsvm.set(this, "onpagehide", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpageshow: {
            get: rsvm.RsCreateGetter("onpageshow", function onpageshow() {
                return rsvm.get(this, "onpageshow");
            }), set: rsvm.RsCreateSetter("onpageshow", function onpageshow() {
                rsvm.set(this, "onpageshow", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpopstate: {
            get: rsvm.RsCreateGetter("onpopstate", function onpopstate() {
                return rsvm.get(this, "onpopstate");
            }), set: rsvm.RsCreateSetter("onpopstate", function onpopstate() {
                rsvm.set(this, "onpopstate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onrejectionhandled: {
            get: rsvm.RsCreateGetter("onrejectionhandled", function onrejectionhandled() {
                return rsvm.get(this, "onrejectionhandled");
            }), set: rsvm.RsCreateSetter("onrejectionhandled", function onrejectionhandled() {
                rsvm.set(this, "onrejectionhandled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onstorage: {
            get: rsvm.RsCreateGetter("onstorage", function onstorage() {
                return rsvm.get(this, "onstorage");
            }), set: rsvm.RsCreateSetter("onstorage", function onstorage() {
                rsvm.set(this, "onstorage", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onunhandledrejection: {
            get: rsvm.RsCreateGetter("onunhandledrejection", function onunhandledrejection() {
                return rsvm.get(this, "onunhandledrejection");
            }), set: rsvm.RsCreateSetter("onunhandledrejection", function onunhandledrejection() {
                rsvm.set(this, "onunhandledrejection", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onunload: {
            get: rsvm.RsCreateGetter("onunload", function onunload() {
                return rsvm.get(this, "onunload");
            }), set: rsvm.RsCreateSetter("onunload", function onunload() {
                rsvm.set(this, "onunload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLBodyElement },
        [Symbol.toStringTag]: { value: "HTMLBodyElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLBodyElement, HTMLElement);
    Object.setPrototypeOf(HTMLBodyElement.prototype, HTMLElement.prototype);
}();