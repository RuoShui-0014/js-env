!function () {
    Object.defineProperty(window, "Comment", {
        value: rsvm.RsCreateConstructor("Comment", 0, function Comment() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.Comment.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Comment = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Comment", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory["nodeType"] = 8;
            memory["nodeName"] = "#comment";
        },
        new(text, ownerDocument) {
            let obj = rsvm.RsCreate(Comment.prototype);
            rsvm.set(obj, "nodeValue", text);
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "textContent", text);

            rsvm.set(obj, "data", text);
            return obj;
        },
    };

    Object.defineProperties(Comment, {
        prototype: { value: Comment.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Comment.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: Comment },
        [Symbol.toStringTag]: { value: "Comment", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Comment, CharacterData);
    Object.setPrototypeOf(Comment.prototype, CharacterData.prototype);
}();