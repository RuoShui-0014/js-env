!function () {
    Object.defineProperty(window, "DocumentFragment", {
        value: rsvm.RsCreateConstructor("DocumentFragment", 0, function DocumentFragment() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.DocumentFragment.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DocumentFragment = {
        memory: {
            children: null,
            firstElementChild: null,
            lastElementChild: null,
            childElementCount: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DocumentFragment", target);
        },
        new() {
            let obj = rsvm.RsCreate(DocumentFragment.prototype);
            return obj;
        },
    };

    Object.defineProperties(DocumentFragment, {
        prototype: { value: DocumentFragment.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DocumentFragment.prototype, {
        children: {
            get: rsvm.RsCreateGetter("children", function children() {
                return rsvm.get(this, "children");
            }), set: undefined, enumerable: true, configurable: true,
        },
        firstElementChild: {
            get: rsvm.RsCreateGetter("firstElementChild", function firstElementChild() {
                if (this.children.length !== 0) {
                    return this.children[0];
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        lastElementChild: {
            get: rsvm.RsCreateGetter("lastElementChild", function lastElementChild() {
                if (this.children.length !== 0) {
                    return this.children[this.children.length - 1];
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        childElementCount: {
            get: rsvm.RsCreateGetter("childElementCount", function childElementCount() {
                return this.children.length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        append: {
            value: rsvm.RsCreateAction("append", 0, function append() {
                let content = arguments[0];
                if ("string" === typeof content) {
                    let textNode = rsvm.prototype.Text.new(content);
                    rsvm.set(textNode, "parentNode", this);
                    rsvm.RsGetPrivateProperty(this, "nodeArray").push(textNode);
                }
                else if (Array.isArray(content)) {
                    for (const node of content) {
                        this.append(node);
                    }
                } else if (content instanceof Node) {
                    rsvm.set(content, "parentNode", this);
                    if (content.nodeType === 1) {
                        rsvm.set(content, "parentElement", this);
                    }
                    rsvm.RsGetPrivateProperty(this, "nodeArray").push(content);
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementById: {
            value: rsvm.RsCreateAction("getElementById", 1, function getElementById() {
                let id = arguments[0];
                if (id === "") { return null; }
                function travel(parent) {
                    for (const elem of parent.children) {
                        if (elem.id === id) {
                            return elem;
                        } else {
                            let result = travel(elem);
                            if (result !== null) {
                                return result;
                            }
                        }
                    }
                    return null
                }
                return travel(this);
            }), writable: true, enumerable: true, configurable: true,
        },
        prepend: {
            value: rsvm.RsCreateAction("prepend", 0, function prepend() {
                let content = arguments[0];
                if ("string" === typeof content) {
                    let textNode = rsvm.prototype.Text.new(content);
                    rsvm.set(textNode, "parentNode", this);
                    rsvm.RsGetPrivateProperty(this, "nodeArray").splice(0, 0, textNode);
                }
                else if (Array.isArray(content)) {
                    for (const node of content) {
                        this.prepend(node);
                    }
                } else if (content instanceof Node) {
                    rsvm.set(content, "parentNode", this);
                    if (content.nodeType === 1) {
                        rsvm.set(content, "parentElement", this);
                    }
                    rsvm.RsGetPrivateProperty(this, "nodeArray").splice(0, 0, content);
                }
                if (this.isConnected) { rsvm.update(this.ownerDocument); }
            }), writable: true, enumerable: true, configurable: true,
        },
        querySelector: {
            value: rsvm.RsCreateAction("querySelector", 1, function querySelector() {
            }), writable: true, enumerable: true, configurable: true,
        },
        querySelectorAll: {
            value: rsvm.RsCreateAction("querySelectorAll", 1, function querySelectorAll() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceChildren: {
            value: rsvm.RsCreateAction("replaceChildren", 0, function replaceChildren() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "DocumentFragment", writable: false, enumerable: false, configurable: true, },
        [Symbol.unscopables]: { value: { append: true, prepend: true, replaceChildren: true, }, writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(DocumentFragment, Node);
    Object.setPrototypeOf(DocumentFragment.prototype, Node.prototype);
}();
