!function () {
    Object.defineProperty(window, "HTMLAllCollection", {
        value: rsvm.RsCreateConstructor("HTMLAllCollection"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLAllCollection = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLAllCollection", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreateDocumentAll({
                callAsFunction() {
                    rsvm.prevent();
                    let value = null;
                    if (Object.getOwnPropertyNames(this).includes("" + arguments[0])) {
                        value = this[arguments[0]];
                    }
                    rsvm.recover();
                    if (rsvm.log) {
                        let msg = { '调用者': 'HTMLAllCollection作为函数执行', '参数': arguments[0], '返回值': value };
                        rsvm.$log.call(console, msg);
                    }
                    return value;
                },
                getter(target, property) {
                    let index = 0, value = undefined;
                    function find(nodeArray) {
                        for (const node of nodeArray) {
                            if (value) { break; }
                            if (rsvm.get(node, 'nodeType') === 1) {
                                if (typeof (property) == "number") {
                                    if (index == property) { value = node; break; }
                                    index += 1;
                                } else if (typeof (property) == "string") {
                                    if (rsvm.get(node, "id") == property) { value = node; break; }
                                }
                                find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                            }
                        }
                    }
                    rsvm.prevent();
                    find(rsvm.RsGetPrivateProperty(ownerDocument, "nodeArray"));
                    rsvm.recover();
                    if (rsvm.log) {
                        rsvm.log = false;
                        let msg = { '调用者': 'HTMLAllCollection', '属性': property, '返回值': target[property] };
                        rsvm.$log.call(console, msg);
                        rsvm.log = true;
                    }
                    if (value) {
                        return { value: value, intercept: true };
                    } else {
                        return { intercept: false };
                    }
                },
                query(target, property) {
                    let index = 0, value = undefined;
                    function find(nodeArray) {
                        for (const node of nodeArray) {
                            if (value) { break; }
                            if (rsvm.get(node, 'nodeType') === 1) {
                                if (typeof (property) == "number") {
                                    if (index == property) { value = node; break; }
                                    index += 1;
                                } else if (typeof (property) == "string") {
                                    if (rsvm.get(node, "id") == property) { value = node; break; }
                                }
                                find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                            }
                        }
                    }
                    rsvm.prevent();
                    find(rsvm.RsGetPrivateProperty(ownerDocument, "nodeArray"));
                    rsvm.recover();
                    if (value) {
                        if (typeof (property) == "number") {
                            return {
                                value: { value: value, writable: false, enumerable: true, configurable: true },
                                intercept: true,
                            };
                        } else if (typeof (property) == "string") {
                            return {
                                value: { value: value, writable: false, enumerable: false, configurable: true },
                                intercept: true,
                            };
                        }
                    } else {
                        return { intercept: false };
                    }
                },
                descriptor(target, property) {
                    let index = 0, value = undefined;
                    function find(nodeArray) {
                        for (const node of nodeArray) {
                            if (value) { break; }
                            if (rsvm.get(node, 'nodeType') === 1) {
                                if (typeof (property) == "number") {
                                    if (index == property) { value = node; break; }
                                    index += 1;
                                } else if (typeof (property) == "string") {
                                    if (rsvm.get(node, "id") == property) { value = node; break; }
                                }
                                find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                            }
                        }
                    }
                    rsvm.prevent();
                    find(rsvm.RsGetPrivateProperty(ownerDocument, "nodeArray"));
                    rsvm.recover();
                    if (value) {
                        if (typeof (property) == "number") {
                            return {
                                value: { value: value, writable: false, enumerable: true, configurable: true },
                                intercept: true,
                            };
                        } else if (typeof (property) == "string") {
                            return {
                                value: { value: value, writable: false, enumerable: false, configurable: true },
                                intercept: true,
                            };
                        }
                    } else {
                        return { intercept: false };
                    }
                },
                enumerator(target) {
                    let nameAry = [], indexAry = [];
                    function travel(nodeArray) {
                        for (const node of nodeArray) {
                            if (rsvm.get(node, 'nodeType') === 1) {
                                let id = rsvm.get(node, 'id');
                                if (id) { nameAry.push(id); }
                                indexAry.push(indexAry.length);
                                travel(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                            }
                        }
                    }
                    travel(rsvm.RsGetPrivateProperty(ownerDocument, "nodeArray"));
                    return {
                        value: [...nameAry, ...indexAry],
                        intercept: true,
                    };
                },
            });
            rsvm.RsSetPrivateProperty(obj, "__memory__", {});
            Object.setPrototypeOf(obj, HTMLAllCollection.prototype);
            return obj;
        },
    };

    Object.defineProperties(HTMLAllCollection, {
        prototype: { value: HTMLAllCollection.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLAllCollection.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 0, function item() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        namedItem: {
            value: rsvm.RsCreateAction("namedItem", 1, function namedItem() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLAllCollection },
        [Symbol.toStringTag]: { value: "HTMLAllCollection", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();