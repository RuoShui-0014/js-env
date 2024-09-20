!function () {
    Object.defineProperty(window, "HTMLCollection", {
        value: rsvm.RsCreateConstructor("HTMLCollection"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLCollection = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLCollection", target);
        },
        children(parentNode) {
            let nodeArray = rsvm.RsGetPrivateProperty(parentNode, "nodeArray");
            let obj = rsvm.RsCreateInterceptor({
                getter(target, property) {
                    let index = 0, value = undefined;
                    for (const node of rsvm.RsGetPrivateProperty(target, "__memory__")) {
                        if (rsvm.get(node, 'nodeType') == 1) {
                            if (typeof (property) == "number") {
                                if (index == property) { value = node; break; }
                                index += 1;
                            } else if (typeof (property) == "string") {
                                if (rsvm.get(node, "id") == property) { value = node; break; }
                            }
                        }
                    }
                    if (rsvm.log) {
                        rsvm.log = false;
                        let msg = { '调用者': `HTMLCollection`, '属性': property, '返回值': target[property] };
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
                    for (const node of rsvm.RsGetPrivateProperty(target, "__memory__")) {
                        if (rsvm.get(node, 'nodeType') == 1) {
                            if (typeof (property) == "number") {
                                if (index == property) { value = node; break; }
                                index += 1;
                            } else if (typeof (property) == "string") {
                                if (rsvm.get(node, "id") == property) { value = node; break; }
                            }
                        }
                    }
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
                    for (const node of rsvm.RsGetPrivateProperty(target, "__memory__")) {
                        if (rsvm.get(node, 'nodeType') == 1) {
                            if (typeof (property) == "number") {
                                if (index == property) { value = node; break; }
                                index += 1;
                            } else if (typeof (property) == "string") {
                                if (rsvm.get(node, "id") == property) { value = node; break; }
                            }
                        }
                    }
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
                    for (const node of rsvm.RsGetPrivateProperty(target, "__memory__")) {
                        if (rsvm.get(node, 'nodeType') == 1) {
                            let id = rsvm.get(node, "id");
                            if (id) { nameAry.push(id); }
                            indexAry.push(indexAry.length);
                        }
                    }
                    return {
                        value: [...nameAry, ...indexAry],
                        intercept: true,
                    };
                },
            });
            Object.setPrototypeOf(obj, HTMLCollection.prototype);
            rsvm.RsSetPrivateProperty(obj, "__memory__", nodeArray);
            return obj;
        },
        new() {
            let obj = rsvm.RsCreate(HTMLCollection.prototype);
            return obj;
        },
    };

    Object.defineProperties(HTMLCollection, {
        prototype: { value: HTMLCollection.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLCollection.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return Object.keys(this).length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        namedItem: {
            value: rsvm.RsCreateAction("namedItem", 1, function namedItem() {
                return this[arguments[0]];
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLCollection },
        [Symbol.toStringTag]: { value: "HTMLCollection", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function* values() {
                for (const key of Object.keys(this)) {
                    yield this[key];
                }
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();