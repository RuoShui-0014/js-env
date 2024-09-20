!function () {
    Object.defineProperty(window, "HTMLButtonElement", {
        value: rsvm.RsCreateConstructor("HTMLButtonElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLButtonElement = {
        memory: {
            disabled: false,
            form: null,
            formAction: "chrome://newtab/",
            formEnctype: "",
            formMethod: "",
            formNoValidate: false,
            formTarget: "",
            name: "",
            type: "submit",
            value: "",
            willValidate: true,
            validity: rsvm.prototype.ValidityState.new(),
            validationMessage: "",
            labels: rsvm.prototype.NodeList.new(),
            popoverTargetElement: null,
            popoverTargetAction: "toggle",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLButtonElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLButtonElement.prototype);
            rsvm.set(obj, "nodeName", "button".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "button");
            rsvm.set(obj, "tagName", "button".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLButtonElement, {
        prototype: { value: HTMLButtonElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLButtonElement.prototype, {
        disabled: {
            get: rsvm.RsCreateGetter("disabled", function disabled() {
                return rsvm.get(this, "disabled");
            }), set: rsvm.RsCreateSetter("disabled", function disabled() {
                rsvm.set(this, "disabled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        form: {
            get: rsvm.RsCreateGetter("form", function form() {
                return rsvm.get(this, "form");
            }), set: undefined, enumerable: true, configurable: true,
        },
        formAction: {
            get: rsvm.RsCreateGetter("formAction", function formAction() {
                return rsvm.get(this, "formAction");
            }), set: rsvm.RsCreateSetter("formAction", function formAction() {
                rsvm.set(this, "formAction", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        formEnctype: {
            get: rsvm.RsCreateGetter("formEnctype", function formEnctype() {
                return rsvm.get(this, "formEnctype");
            }), set: rsvm.RsCreateSetter("formEnctype", function formEnctype() {
                rsvm.set(this, "formEnctype", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        formMethod: {
            get: rsvm.RsCreateGetter("formMethod", function formMethod() {
                return rsvm.get(this, "formMethod");
            }), set: rsvm.RsCreateSetter("formMethod", function formMethod() {
                rsvm.set(this, "formMethod", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        formNoValidate: {
            get: rsvm.RsCreateGetter("formNoValidate", function formNoValidate() {
                return rsvm.get(this, "formNoValidate");
            }), set: rsvm.RsCreateSetter("formNoValidate", function formNoValidate() {
                rsvm.set(this, "formNoValidate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        formTarget: {
            get: rsvm.RsCreateGetter("formTarget", function formTarget() {
                return rsvm.get(this, "formTarget");
            }), set: rsvm.RsCreateSetter("formTarget", function formTarget() {
                rsvm.set(this, "formTarget", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: rsvm.RsCreateSetter("type", function type() {
                rsvm.set(this, "type", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        value: {
            get: rsvm.RsCreateGetter("value", function value() {
                return rsvm.get(this, "value");
            }), set: rsvm.RsCreateSetter("value", function value() {
                rsvm.set(this, "value", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        willValidate: {
            get: rsvm.RsCreateGetter("willValidate", function willValidate() {
                return rsvm.get(this, "willValidate");
            }), set: undefined, enumerable: true, configurable: true,
        },
        validity: {
            get: rsvm.RsCreateGetter("validity", function validity() {
                return rsvm.get(this, "validity");
            }), set: undefined, enumerable: true, configurable: true,
        },
        validationMessage: {
            get: rsvm.RsCreateGetter("validationMessage", function validationMessage() {
                return rsvm.get(this, "validationMessage");
            }), set: undefined, enumerable: true, configurable: true,
        },
        labels: {
            get: rsvm.RsCreateGetter("labels", function labels() {
                return rsvm.get(this, "labels");
            }), set: undefined, enumerable: true, configurable: true,
        },
        popoverTargetElement: {
            get: rsvm.RsCreateGetter("popoverTargetElement", function popoverTargetElement() {
                return rsvm.get(this, "popoverTargetElement");
            }), set: rsvm.RsCreateSetter("popoverTargetElement", function popoverTargetElement() {
                rsvm.set(this, "popoverTargetElement", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        popoverTargetAction: {
            get: rsvm.RsCreateGetter("popoverTargetAction", function popoverTargetAction() {
                return rsvm.get(this, "popoverTargetAction");
            }), set: rsvm.RsCreateSetter("popoverTargetAction", function popoverTargetAction() {
                rsvm.set(this, "popoverTargetAction", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        checkValidity: {
            value: rsvm.RsCreateAction("checkValidity", 0, function checkValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        reportValidity: {
            value: rsvm.RsCreateAction("reportValidity", 0, function reportValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setCustomValidity: {
            value: rsvm.RsCreateAction("setCustomValidity", 1, function setCustomValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLButtonElement },
        [Symbol.toStringTag]: { value: "HTMLButtonElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLButtonElement, HTMLElement);
    Object.setPrototypeOf(HTMLButtonElement.prototype, HTMLElement.prototype);
}();