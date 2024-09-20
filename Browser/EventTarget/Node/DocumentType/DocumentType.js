!function () {
    Object.defineProperty(window, "DocumentType", {
        value: rsvm.RsCreateConstructor("DocumentType"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DocumentType = {
        memory: {
            name: "html",
            publicId: "",
            systemId: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DocumentType", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory["nodeType"] = 10;
            memory["nodeValue"] = null;
            memory["textContent"] = null;
        },
        new(name, publicId, systemId, ownerDocument) {
            if (publicId === null) { publicId = ""; }
            if (systemId === null) { systemId = ""; }

            let obj = rsvm.RsCreate(DocumentType.prototype);
            rsvm.set(obj, "nodeName", name);
            rsvm.set(obj, "ownerDocument", ownerDocument);

            rsvm.set(obj, "name", name);
            rsvm.set(obj, "publicId", publicId);
            rsvm.set(obj, "systemId", systemId);

            return obj;
        },
    };

    Object.defineProperties(DocumentType, {
        prototype: { value: DocumentType.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DocumentType.prototype, {
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        publicId: {
            get: rsvm.RsCreateGetter("publicId", function publicId() {
                return rsvm.get(this, "publicId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        systemId: {
            get: rsvm.RsCreateGetter("systemId", function systemId() {
                return rsvm.get(this, "systemId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        after: {
            value: rsvm.RsCreateAction("after", 0, function after() {
            }), writable: true, enumerable: true, configurable: true,
        },
        before: {
            value: rsvm.RsCreateAction("before", 0, function before() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 0, function remove() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceWith: {
            value: rsvm.RsCreateAction("replaceWith", 0, function replaceWith() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: DocumentType },
        [Symbol.toStringTag]: { value: "DocumentType", writable: false, enumerable: false, configurable: true, },
        [Symbol.unscopables]: { value: { after: true, before: true, remove: true, replaceWith: true, }, writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DocumentType, Node);
    Object.setPrototypeOf(DocumentType.prototype, Node.prototype);
}();