!function () {
    Object.defineProperty(window, "Text", {
        value: rsvm.RsCreateConstructor("Text", 0, function Text() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.Text.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Text = {
        memory: {
            wholeText: "",
            assignedSlot: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Text", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory["nodeType"] = 3;
            memory["nodeName"] = "#text";
        },
        new(text) {
            let obj = rsvm.RsCreate(Text.prototype);
            rsvm.set(obj, "nodeValue", text);
            rsvm.set(obj, "ownerDocument", window.document);
            rsvm.set(obj, "textContent", text);

            rsvm.set(obj, "data", text);
            rsvm.set(obj, "wholeText", text);

            return obj;
        },
    };

    Object.defineProperties(Text, {
        prototype: { value: Text.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Text.prototype, {
        wholeText: {
            get: rsvm.RsCreateGetter("wholeText", function wholeText() {
                return rsvm.get(this, "wholeText");
            }), set: undefined, enumerable: true, configurable: true,
        },
        assignedSlot: {
            get: rsvm.RsCreateGetter("assignedSlot", function assignedSlot() {
                return rsvm.get(this, "assignedSlot");
            }), set: undefined, enumerable: true, configurable: true,
        },
        splitText: {
            value: rsvm.RsCreateAction("splitText", 1, function splitText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Text },
        [Symbol.toStringTag]: { value: "Text", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Text, CharacterData);
    Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
}();