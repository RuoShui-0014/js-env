!function () {
    Object.defineProperty(window, "HTMLAnchorElement", {
        value: rsvm.RsCreateConstructor("HTMLAnchorElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLAnchorElement = {
        memory: {
            target: "",
            download: "",
            ping: "",
            rel: "",
            relList: rsvm.prototype.DOMTokenList.new(),
            hreflang: "",
            type: "",
            referrerPolicy: "",
            text: "",
            coords: "",
            charset: "",
            name: "",
            rev: "",
            shape: "",
            origin: "",
            protocol: ":",
            username: "",
            password: "",
            host: "",
            hostname: "",
            port: "",
            pathname: "",
            search: "",
            hash: "",
            href: "",
            hrefTranslate: "",
            attributionSrc: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLAnchorElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLAnchorElement.prototype);
            rsvm.set(obj, "nodeName", "a".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "a");
            rsvm.set(obj, "tagName", "a".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLAnchorElement, {
        prototype: { value: HTMLAnchorElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLAnchorElement.prototype, {
        target: {
            get: rsvm.RsCreateGetter("target", function target() {
                return rsvm.get(this, "target");
            }), set: rsvm.RsCreateSetter("target", function target() {
                rsvm.set(this, "target", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        download: {
            get: rsvm.RsCreateGetter("download", function download() {
                return rsvm.get(this, "download");
            }), set: rsvm.RsCreateSetter("download", function download() {
                rsvm.set(this, "download", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ping: {
            get: rsvm.RsCreateGetter("ping", function ping() {
                return rsvm.get(this, "ping");
            }), set: rsvm.RsCreateSetter("ping", function ping() {
                rsvm.set(this, "ping", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        rel: {
            get: rsvm.RsCreateGetter("rel", function rel() {
                return rsvm.get(this, "rel");
            }), set: rsvm.RsCreateSetter("rel", function rel() {
                rsvm.set(this, "rel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        relList: {
            get: rsvm.RsCreateGetter("relList", function relList() {
                return rsvm.get(this, "relList");
            }), set: rsvm.RsCreateSetter("relList", function relList() {
                rsvm.set(this, "relList", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hreflang: {
            get: rsvm.RsCreateGetter("hreflang", function hreflang() {
                return rsvm.get(this, "hreflang");
            }), set: rsvm.RsCreateSetter("hreflang", function hreflang() {
                rsvm.set(this, "hreflang", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: rsvm.RsCreateSetter("type", function type() {
                rsvm.set(this, "type", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        referrerPolicy: {
            get: rsvm.RsCreateGetter("referrerPolicy", function referrerPolicy() {
                return rsvm.get(this, "referrerPolicy");
            }), set: rsvm.RsCreateSetter("referrerPolicy", function referrerPolicy() {
                rsvm.set(this, "referrerPolicy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        text: {
            get: rsvm.RsCreateGetter("text", function text() {
                return rsvm.get(this, "text");
            }), set: rsvm.RsCreateSetter("text", function text() {
                rsvm.set(this, "text", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        coords: {
            get: rsvm.RsCreateGetter("coords", function coords() {
                return rsvm.get(this, "coords");
            }), set: rsvm.RsCreateSetter("coords", function coords() {
                rsvm.set(this, "coords", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        charset: {
            get: rsvm.RsCreateGetter("charset", function charset() {
                return rsvm.get(this, "charset");
            }), set: rsvm.RsCreateSetter("charset", function charset() {
                rsvm.set(this, "charset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        rev: {
            get: rsvm.RsCreateGetter("rev", function rev() {
                return rsvm.get(this, "rev");
            }), set: rsvm.RsCreateSetter("rev", function rev() {
                rsvm.set(this, "rev", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        shape: {
            get: rsvm.RsCreateGetter("shape", function shape() {
                return rsvm.get(this, "shape");
            }), set: rsvm.RsCreateSetter("shape", function shape() {
                rsvm.set(this, "shape", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        origin: {
            get: rsvm.RsCreateGetter("origin", function origin() {
                let protocol = rsvm.get(this, "protocol"), host = rsvm.get(this, "host"), port = rsvm.get(this, "port");
                return `${protocol}//${host}${port ? ":" + port : ""}`;
            }), set: undefined, enumerable: true, configurable: true,
        },
        protocol: {
            get: rsvm.RsCreateGetter("protocol", function protocol() {
                return rsvm.get(this, "protocol");
            }), set: rsvm.RsCreateSetter("protocol", function protocol() {
                rsvm.set(this, "protocol", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        username: {
            get: rsvm.RsCreateGetter("username", function username() {
                return rsvm.get(this, "username");
            }), set: rsvm.RsCreateSetter("username", function username() {
                rsvm.set(this, "username", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        password: {
            get: rsvm.RsCreateGetter("password", function password() {
                return rsvm.get(this, "password");
            }), set: rsvm.RsCreateSetter("password", function password() {
                rsvm.set(this, "password", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        host: {
            get: rsvm.RsCreateGetter("host", function host() {
                return rsvm.get(this, "host");
            }), set: rsvm.RsCreateSetter("host", function host() {
                rsvm.set(this, "host", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hostname: {
            get: rsvm.RsCreateGetter("hostname", function hostname() {
                return rsvm.get(this, "hostname");
            }), set: rsvm.RsCreateSetter("hostname", function hostname() {
                rsvm.set(this, "hostname", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        port: {
            get: rsvm.RsCreateGetter("port", function port() {
                return rsvm.get(this, "port");
            }), set: rsvm.RsCreateSetter("port", function port() {
                rsvm.set(this, "port", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        pathname: {
            get: rsvm.RsCreateGetter("pathname", function pathname() {
                return rsvm.get(this, "pathname");
            }), set: rsvm.RsCreateSetter("pathname", function pathname() {
                rsvm.set(this, "pathname", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        search: {
            get: rsvm.RsCreateGetter("search", function search() {
                return rsvm.get(this, "search");
            }), set: rsvm.RsCreateSetter("search", function search() {
                rsvm.set(this, "search", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hash: {
            get: rsvm.RsCreateGetter("hash", function hash() {
                return rsvm.get(this, "hash");
            }), set: rsvm.RsCreateSetter("hash", function hash() {
                rsvm.set(this, "hash", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        href: {
            get: rsvm.RsCreateGetter("href", function href() {
                let protocol = rsvm.get(this, "protocol"), host = rsvm.get(this, "host");
                let port = rsvm.get(this, "port"), pathname = rsvm.get(this, "pathname");
                let search = rsvm.get(this, "search"), hash = rsvm.get(this, "hash");
                return `${protocol}//${host}${port ? ":" + port : ""}${pathname}${search}${hash}`;
            }), set: rsvm.RsCreateSetter("href", function href() {
                let href = arguments[0];
                if (!href){ this.href = location.href; return; }
                rsvm.set(this, "href", href);

                let a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
                let protocol = a[1] ? a[1] : "", host = a[2] ? a[2] : "", port = a[3] ? a[3] : "";
                let pathname = a[4] ? a[4] : "", search = a[5] ? a[5] : "", hash = a[6] ? a[6] : "";
                if (port == '443' && protocol == 'https:') { port = ''; }
                if (port == '80' && protocol == 'http:') { port = ''; }

                rsvm.set(this, "protocol", protocol);
                rsvm.set(this, "host", host);
                rsvm.set(this, "hostname", host);
                rsvm.set(this, "port", port);
                rsvm.set(this, "pathname", pathname);
                rsvm.set(this, "search", search);
                rsvm.set(this, "hash", hash);
            }), enumerable: true, configurable: true,
        },
        toString: {
            value: rsvm.RsCreateAction("toString", 0, function toString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLAnchorElement },
        hrefTranslate: {
            get: rsvm.RsCreateGetter("hrefTranslate", function hrefTranslate() {
                return rsvm.get(this, "hrefTranslate");
            }), set: rsvm.RsCreateSetter("hrefTranslate", function hrefTranslate() {
                rsvm.set(this, "hrefTranslate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        attributionSrc: {
            get: rsvm.RsCreateGetter("attributionSrc", function attributionSrc() {
                return rsvm.get(this, "attributionSrc");
            }), set: rsvm.RsCreateSetter("attributionSrc", function attributionSrc() {
                rsvm.set(this, "attributionSrc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HTMLAnchorElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLAnchorElement, HTMLElement);
    Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);
}();