!function () {
    Object.defineProperty(window, "Location", {
        value: rsvm.RsCreateConstructor("Location"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Location = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Location", target);
            rsvm.set(target, "ancestorOrigins", rsvm.prototype.DOMStringList.new());
            rsvm.set(target, "href", "chrome://newtab/");
            rsvm.set(target, "origin", "chrome://newtab");
            rsvm.set(target, "protocol", "chrome:");
            rsvm.set(target, "host", "newtab");
            rsvm.set(target, "hostname", "newtab");
            rsvm.set(target, "port", "");
            rsvm.set(target, "pathname", "/");
            rsvm.set(target, "search", "");
            rsvm.set(target, "hash", "");
        },
        new() {
            let obj = rsvm.RsCreate(Location.prototype);
            Object.defineProperties(obj, {
                valueOf: {
                    value: rsvm.RsCreateAction("valueOf", 0, function valueOf() {
                    }), writable: false, enumerable: false, configurable: false,
                },
                ancestorOrigins: {
                    get: rsvm.RsCreateGetter("ancestorOrigins", function ancestorOrigins() {
                        return rsvm.get(this, "ancestorOrigins");
                    }), set: undefined, enumerable: true, configurable: false,
                },
                href: {
                    get: rsvm.RsCreateGetter("href", function href() {
                        let protocol = rsvm.get(this, "protocol"), host = rsvm.get(this, "host");
                        let port = rsvm.get(this, "port"), pathname = rsvm.get(this, "pathname");
                        let search = rsvm.get(this, "search"), hash = rsvm.get(this, "hash");
                        return `${protocol}//${host}${port ? ":" + port : ""}${pathname}${search}${hash}`;
                    }), set: rsvm.RsCreateSetter("href", function href() {
                        let href = arguments[0];
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
                    }), enumerable: true, configurable: false,
                },
                origin: {
                    get: rsvm.RsCreateGetter("origin", function origin() {
                        let protocol = rsvm.get(this, "protocol"), host = rsvm.get(this, "host"), port = rsvm.get(this, "port");
                        return `${protocol}//${host}${port ? ":" + port : ""}`;
                    }), set: undefined, enumerable: true, configurable: false,
                },
                protocol: {
                    get: rsvm.RsCreateGetter("protocol", function protocol() {
                        return rsvm.get(this, "protocol");
                    }), set: rsvm.RsCreateSetter("protocol", function protocol() {
                        rsvm.set(this, "protocol", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                host: {
                    get: rsvm.RsCreateGetter("host", function host() {
                        return rsvm.get(this, "host");
                    }), set: rsvm.RsCreateSetter("host", function host() {
                        rsvm.set(this, "host", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                hostname: {
                    get: rsvm.RsCreateGetter("hostname", function hostname() {
                        return rsvm.get(this, "hostname");
                    }), set: rsvm.RsCreateSetter("hostname", function hostname() {
                        rsvm.set(this, "hostname", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                port: {
                    get: rsvm.RsCreateGetter("port", function port() {
                        return rsvm.get(this, "port");
                    }), set: rsvm.RsCreateSetter("port", function port() {
                        rsvm.set(this, "port", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                pathname: {
                    get: rsvm.RsCreateGetter("pathname", function pathname() {
                        return rsvm.get(this, "pathname");
                    }), set: rsvm.RsCreateSetter("pathname", function pathname() {
                        rsvm.set(this, "pathname", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                search: {
                    get: rsvm.RsCreateGetter("search", function search() {
                        return rsvm.get(this, "search");
                    }), set: rsvm.RsCreateSetter("search", function search() {
                        rsvm.set(this, "search", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                hash: {
                    get: rsvm.RsCreateGetter("hash", function hash() {
                        return rsvm.get(this, "hash");
                    }), set: rsvm.RsCreateSetter("hash", function hash() {
                        rsvm.set(this, "hash", arguments[0]);
                    }), enumerable: true, configurable: false,
                },
                assign: {
                    value: rsvm.RsCreateAction("assign", 1, function assign() {
                    }), writable: false, enumerable: true, configurable: false,
                },
                reload: {
                    value: rsvm.RsCreateAction("reload", 0, function reload() {
                    }), writable: false, enumerable: true, configurable: false,
                },
                replace: {
                    value: rsvm.RsCreateAction("replace", 1, function replace() {
                        rsvm.siteInfo.url = arguments[0];
                    }), writable: false, enumerable: true, configurable: false,
                },
                toString: {
                    value: rsvm.RsCreateAction("toString", 0, function toString() {
                        let protocol = rsvm.get(this, "protocol"), host = rsvm.get(this, "host");
                        let port = rsvm.get(this, "port"), pathname = rsvm.get(this, "pathname");
                        let search = rsvm.get(this, "search"), hash = rsvm.get(this, "hash");
                        return `${protocol}//${host}${port ? ":" + port : ""}${pathname}${search}${hash}`;
                    }), writable: false, enumerable: true, configurable: false,
                },
                [Symbol.toPrimitive]: { value: undefined, writable: false, enumerable: false, configurable: false, },
            });
            return obj;
        },
    };

    Object.defineProperties(Location, {
        prototype: { value: Location.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Location.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: Location },
        [Symbol.toStringTag]: { value: "Location", writable: false, enumerable: false, configurable: true, },
    });
}();

rsvm.setPrototypeOf = Object.setPrototypeOf;
Object.setPrototypeOf = function (target) {
    if (target === globalThis || target === globalThis.location) {
        rsvm.prevent();
        let flag = target[Symbol.toStringTag];
        rsvm.recover();
        throw new TypeError(`Immutable prototype object '[object ${flag}]' cannot have their prototype set`);
    } else {
        rsvm.setPrototypeOf.apply(this, arguments);
    }
};