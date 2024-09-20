!function () {
    Object.defineProperty(window, "HTMLFormElement", {
        value: rsvm.RsCreateConstructor("HTMLFormElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLFormElement = {
        memory: {
            acceptCharset: "",
            action: "chrome://newtab/",
            autocomplete: "on",
            enctype: "application/x-www-form-urlencoded",
            encoding: "application/x-www-form-urlencoded",
            method: "get",
            name: "",
            noValidate: false,
            target: "",
            elements: rsvm.prototype.HTMLFormControlsCollection.new(),
            length: 0,
            rel: "",
            relList: rsvm.prototype.DOMTokenList.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLFormElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreateInterceptor({
                getter(target, property) {
                    rsvm.prevent();
                    let value = undefined, nodeAry = [];
                    function find(children) {
                        for (const node of children) {
                            if (rsvm.get(node, "nodeType") == 1) {
                                if (property == node.name || property == node.id) {
                                    nodeAry.push(node);
                                }
                                find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                            }
                        }
                    } find(rsvm.RsGetPrivateProperty(target, "nodeArray"));
                    if (nodeAry.length == 1) {
                        value = nodeAry[0];
                    } else if (nodeAry.length > 1) {
                        value = rsvm.prototype.RadioNodeList.new();
                        for (const key of Object.keys(nodeAry)) {
                            Object.defineProperty(value, key, { value: nodeAry[key], writable: false, enumerable: true, configurable: true });
                        }
                    }
                    rsvm.recover();
                    let flag = rsvm.log;
                    if (rsvm.log) {
                        rsvm.log = false;
                        let msg = { "原型": target[Symbol.toStringTag], "操作": "Getter", "属性": property, "获取值": target[property], "值类型": typeof (target[property]) };
                        rsvm.$log.call(console, msg);
                        rsvm.log = flag;
                    }
                    if (value) {
                        return {
                            value: value,
                            intercept: true
                        };
                    } else {
                        return { intercept: false };
                    }
                },
                setter(target, property, value) {
                    let flag = rsvm.log;
                    if (rsvm.log) {
                        rsvm.log = false;
                        let original = target[property];
                        let msg = { "原型": target[Symbol.toStringTag], "操作": "Setter", "属性": property, "设置值": value, "原值": original, "值类型": typeof (value) };
                        rsvm.$log.call(console, msg);
                        rsvm.log = flag;
                    }
                    return { intercept: false };
                },
            });
            Object.setPrototypeOf(obj, HTMLFormElement.prototype);
            rsvm.deepMalloc(obj);

            rsvm.set(obj, "nodeName", "form".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "form");
            rsvm.set(obj, "tagName", "form".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLFormElement, {
        prototype: { value: HTMLFormElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLFormElement.prototype, {
        acceptCharset: {
            get: rsvm.RsCreateGetter("acceptCharset", function acceptCharset() {
                return rsvm.get(this, "acceptCharset");
            }), set: rsvm.RsCreateSetter("acceptCharset", function acceptCharset() {
                rsvm.set(this, "acceptCharset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        action: {
            get: rsvm.RsCreateGetter("action", function action() {
                return rsvm.get(this, "action");
            }), set: rsvm.RsCreateSetter("action", function action() {
                rsvm.set(this, "action", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        autocomplete: {
            get: rsvm.RsCreateGetter("autocomplete", function autocomplete() {
                return rsvm.get(this, "autocomplete");
            }), set: rsvm.RsCreateSetter("autocomplete", function autocomplete() {
                rsvm.set(this, "autocomplete", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        enctype: {
            get: rsvm.RsCreateGetter("enctype", function enctype() {
                return rsvm.get(this, "enctype");
            }), set: rsvm.RsCreateSetter("enctype", function enctype() {
                rsvm.set(this, "enctype", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        encoding: {
            get: rsvm.RsCreateGetter("encoding", function encoding() {
                return rsvm.get(this, "encoding");
            }), set: rsvm.RsCreateSetter("encoding", function encoding() {
                rsvm.set(this, "encoding", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        method: {
            get: rsvm.RsCreateGetter("method", function method() {
                return rsvm.get(this, "method");
            }), set: rsvm.RsCreateSetter("method", function method() {
                rsvm.set(this, "method", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        noValidate: {
            get: rsvm.RsCreateGetter("noValidate", function noValidate() {
                return rsvm.get(this, "noValidate");
            }), set: rsvm.RsCreateSetter("noValidate", function noValidate() {
                rsvm.set(this, "noValidate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        target: {
            get: rsvm.RsCreateGetter("target", function target() {
                return rsvm.get(this, "target");
            }), set: rsvm.RsCreateSetter("target", function target() {
                rsvm.set(this, "target", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        elements: {
            get: rsvm.RsCreateGetter("elements", function elements() {
                return rsvm.get(this, "elements");
            }), set: undefined, enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        checkValidity: {
            value: rsvm.RsCreateAction("checkValidity", 0, function checkValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        reportValidity: {
            value: rsvm.RsCreateAction("reportValidity", 0, function reportValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestSubmit: {
            value: rsvm.RsCreateAction("requestSubmit", 0, function requestSubmit() {
            }), writable: true, enumerable: true, configurable: true,
        },
        reset: {
            value: rsvm.RsCreateAction("reset", 0, function reset() {
            }), writable: true, enumerable: true, configurable: true,
        },
        submit: {
            value: rsvm.RsCreateAction("submit", 0, function submit() {
            }), writable: true, enumerable: true, configurable: true,
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
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLFormElement },
        [Symbol.toStringTag]: { value: "HTMLFormElement", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(HTMLFormElement, HTMLElement);
    Object.setPrototypeOf(HTMLFormElement.prototype, HTMLElement.prototype);
}();