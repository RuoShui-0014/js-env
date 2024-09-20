!function () {
    Object.defineProperty(window, "HTMLSelectElement", {
        value: rsvm.RsCreateConstructor("HTMLSelectElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLSelectElement = {
        memory: {
            autocomplete: "",
            disabled: false,
            form: null,
            multiple: false,
            name: "",
            required: false,
            size: 0,
            type: "select-one",
            options: rsvm.prototype.HTMLOptionsCollection.new(),
            length: 0,
            selectedOptions: rsvm.prototype.HTMLCollection.new(),
            selectedIndex: -1,
            value: "",
            willValidate: true,
            validity: rsvm.prototype.ValidityState.new(),
            validationMessage: "",
            labels: rsvm.prototype.NodeList.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLSelectElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLSelectElement.prototype);
            rsvm.set(obj, "nodeName", "select".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "select");
            rsvm.set(obj, "tagName", "select".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLSelectElement, {
        prototype: { value: HTMLSelectElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLSelectElement.prototype, {
        autocomplete: {
            get: rsvm.RsCreateGetter("autocomplete", function autocomplete() {
                return rsvm.get(this, "autocomplete");
            }), set: rsvm.RsCreateSetter("autocomplete", function autocomplete() {
                rsvm.set(this, "autocomplete", arguments[0]);
            }), enumerable: true, configurable: true,
        },
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
        multiple: {
            get: rsvm.RsCreateGetter("multiple", function multiple() {
                return rsvm.get(this, "multiple");
            }), set: rsvm.RsCreateSetter("multiple", function multiple() {
                rsvm.set(this, "multiple", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        required: {
            get: rsvm.RsCreateGetter("required", function required() {
                return rsvm.get(this, "required");
            }), set: rsvm.RsCreateSetter("required", function required() {
                rsvm.set(this, "required", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        size: {
            get: rsvm.RsCreateGetter("size", function size() {
                return rsvm.get(this, "size");
            }), set: rsvm.RsCreateSetter("size", function size() {
                rsvm.set(this, "size", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        options: {
            get: rsvm.RsCreateGetter("options", function options() {
                return rsvm.get(this, "options");
            }), set: undefined, enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: rsvm.RsCreateSetter("length", function length() {
                rsvm.set(this, "length", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        selectedOptions: {
            get: rsvm.RsCreateGetter("selectedOptions", function selectedOptions() {
                return rsvm.get(this, "selectedOptions");
            }), set: undefined, enumerable: true, configurable: true,
        },
        selectedIndex: {
            get: rsvm.RsCreateGetter("selectedIndex", function selectedIndex() {
                return rsvm.get(this, "selectedIndex");
            }), set: rsvm.RsCreateSetter("selectedIndex", function selectedIndex() {
                rsvm.set(this, "selectedIndex", arguments[0]);
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
        add: {
            value: rsvm.RsCreateAction("add", 1, function add() {
            }), writable: true, enumerable: true, configurable: true,
        },
        checkValidity: {
            value: rsvm.RsCreateAction("checkValidity", 0, function checkValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
            }), writable: true, enumerable: true, configurable: true,
        },
        namedItem: {
            value: rsvm.RsCreateAction("namedItem", 1, function namedItem() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 0, function remove() {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLSelectElement },
        [Symbol.toStringTag]: { value: "HTMLSelectElement", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(HTMLSelectElement, HTMLElement);
    Object.setPrototypeOf(HTMLSelectElement.prototype, HTMLElement.prototype);
}();