!function () {
    Object.defineProperty(window, "CharacterData", {
        value: rsvm.RsCreateConstructor("CharacterData"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CharacterData = {
        memory: {
            data: "",
            length: 0,
            previousElementSibling: null,
            nextElementSibling: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("CharacterData", target);
        },
        new() {
            let obj = rsvm.RsCreate(CharacterData.prototype);
            return obj;
        },
    };

    Object.defineProperties(CharacterData, {
        prototype: { value: CharacterData.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CharacterData.prototype, {
        data: {
            get: rsvm.RsCreateGetter("data", function data() {
                return rsvm.get(this, "data");
            }), set: rsvm.RsCreateSetter("set data", function data() {
                rsvm.set(this, "data", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "data").length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        previousElementSibling: {
            get: rsvm.RsCreateGetter("previousElementSibling", function previousElementSibling() {
                if (this.parentNode !== null) {
                    for (const key of Object.keys(this.parentNode.children)) {
                        if (this.parentNode.children[key] === this && parseInt(key) > 0) {
                            return this.parentNode.children[parseInt(key) - 1];
                        }
                    }
                }
                return null;
            }), set: undefined, enumerable: true, configurable: true,
        },
        nextElementSibling: {
            get: rsvm.RsCreateGetter("nextElementSibling", function nextElementSibling() {
                if (this.parentNode !== null) {
                    for (const key of Object.keys(this.parentNode.children)) {
                        if (this.parentNode.children[key] === this && parseInt(key) < this.parentNode.children.length - 1) {
                            return this.parentNode.children[parseInt(key) + 1];
                        }
                    }
                }
                return null;
            }), set: undefined, enumerable: true, configurable: true,
        },
        after: {
            value: rsvm.RsCreateAction("after", 0, function after() {
            }), writable: true, enumerable: true, configurable: true,
        },
        appendData: {
            value: rsvm.RsCreateAction("appendData", 1, function appendData() {
                rsvm.set(this, "data", rsvm.get(this, "data") + arguments[0]);
            }), writable: true, enumerable: true, configurable: true,
        },
        before: {
            value: rsvm.RsCreateAction("before", 0, function before() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteData: {
            value: rsvm.RsCreateAction("deleteData", 2, function deleteData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        insertData: {
            value: rsvm.RsCreateAction("insertData", 2, function insertData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 0, function remove() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceData: {
            value: rsvm.RsCreateAction("replaceData", 3, function replaceData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceWith: {
            value: rsvm.RsCreateAction("replaceWith", 0, function replaceWith() {
            }), writable: true, enumerable: true, configurable: true,
        },
        substringData: {
            value: rsvm.RsCreateAction("substringData", 2, function substringData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CharacterData },
        [Symbol.toStringTag]: { value: "CharacterData", writable: false, enumerable: false, configurable: true, },
        [Symbol.unscopables]: { value: { after: true, before: true, remove: true, replaceWith: true, }, writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(CharacterData, Node);
    Object.setPrototypeOf(CharacterData.prototype, Node.prototype);
}();