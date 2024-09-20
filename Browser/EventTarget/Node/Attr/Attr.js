!function () {
    Object.defineProperty(window, "Attr", {
        value: rsvm.RsCreateConstructor("Attr"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Attr = {
        memory: {
            namespaceURI: null,
            prefix: null,
            localName: "class",
            name: "class",
            value: "learn-more-button",
            ownerElement: null,
            specified: true,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Attr", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory["nodeType"] = 2;
            memory["ownerDocument"] = null;
        },
        new(key, value) {
            let obj = rsvm.RsCreate(Attr.prototype);
            rsvm.set(obj, "nodeName", key);
            rsvm.set(obj, "nodeValue", value);
            rsvm.set(obj, "textContent", value);
            rsvm.set(obj, "localName", key);
            rsvm.set(obj, "name", key);
            rsvm.set(obj, "value", value);
            return obj;
        },
    };

    Object.defineProperties(Attr, {
        prototype: { value: Attr.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Attr.prototype, {
        namespaceURI: {
            get: rsvm.RsCreateGetter("namespaceURI", function namespaceURI() {
                return rsvm.get(this, "namespaceURI");
            }), set: undefined, enumerable: true, configurable: true,
        },
        prefix: {
            get: rsvm.RsCreateGetter("prefix", function prefix() {
                return rsvm.get(this, "prefix");
            }), set: undefined, enumerable: true, configurable: true,
        },
        localName: {
            get: rsvm.RsCreateGetter("localName", function localName() {
                return rsvm.get(this, "localName");
            }), set: undefined, enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        value: {
            get: rsvm.RsCreateGetter("value", function value() {
                return rsvm.get(this, "value");
            }), set: rsvm.RsCreateSetter("value", function value() {
                rsvm.set(this, "value", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ownerElement: {
            get: rsvm.RsCreateGetter("ownerElement", function ownerElement() {
                return rsvm.get(this, "ownerElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        specified: {
            get: rsvm.RsCreateGetter("specified", function specified() {
                return rsvm.get(this, "specified");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Attr },
        [Symbol.toStringTag]: { value: "Attr", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Attr, Node);
    Object.setPrototypeOf(Attr.prototype, Node.prototype);
}();