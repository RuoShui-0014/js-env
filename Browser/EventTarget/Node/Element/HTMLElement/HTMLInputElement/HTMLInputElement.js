!function () {
    Object.defineProperty(window, "HTMLInputElement", {
        value: rsvm.RsCreateConstructor("HTMLInputElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLInputElement = {
        memory: {
            accept: "",
            alt: "",
            autocomplete: "",
            defaultChecked: false,
            checked: false,
            dirName: "",
            disabled: false,
            form: null,
            files: null,
            formAction: "chrome://newtab/",
            formEnctype: "",
            formMethod: "",
            formNoValidate: false,
            formTarget: "",
            height: 0,
            indeterminate: false,
            list: null,
            max: "",
            maxLength: -1,
            min: "",
            minLength: -1,
            multiple: false,
            name: "",
            pattern: "",
            placeholder: "",
            readOnly: false,
            required: false,
            size: 20,
            src: "",
            step: "",
            type: "text",
            defaultValue: "",
            value: "",
            valueAsDate: null,
            valueAsNumber: NaN,
            width: 0,
            willValidate: true,
            validity: rsvm.prototype.ValidityState.new(),
            validationMessage: "",
            labels: rsvm.prototype.NodeList.new(),
            selectionStart: 0,
            selectionEnd: 0,
            selectionDirection: "forward",
            align: "",
            useMap: "",
            webkitdirectory: false,
            incremental: false,
            popoverTargetElement: null,
            popoverTargetAction: "toggle",
            webkitEntries: [],
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLInputElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLInputElement.prototype);
            rsvm.set(obj, "nodeName", "input".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "input");
            rsvm.set(obj, "tagName", "input".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLInputElement, {
        prototype: { value: HTMLInputElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLInputElement.prototype, {
        accept: {
            get: rsvm.RsCreateGetter("accept", function accept() {
                return rsvm.get(this, "accept");
            }), set: rsvm.RsCreateSetter("accept", function accept() {
                rsvm.set(this, "accept", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        alt: {
            get: rsvm.RsCreateGetter("alt", function alt() {
                return rsvm.get(this, "alt");
            }), set: rsvm.RsCreateSetter("alt", function alt() {
                rsvm.set(this, "alt", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        autocomplete: {
            get: rsvm.RsCreateGetter("autocomplete", function autocomplete() {
                return rsvm.get(this, "autocomplete");
            }), set: rsvm.RsCreateSetter("autocomplete", function autocomplete() {
                rsvm.set(this, "autocomplete", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        defaultChecked: {
            get: rsvm.RsCreateGetter("defaultChecked", function defaultChecked() {
                return rsvm.get(this, "defaultChecked");
            }), set: rsvm.RsCreateSetter("defaultChecked", function defaultChecked() {
                rsvm.set(this, "defaultChecked", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        checked: {
            get: rsvm.RsCreateGetter("checked", function checked() {
                return rsvm.get(this, "checked");
            }), set: rsvm.RsCreateSetter("checked", function checked() {
                rsvm.set(this, "checked", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        dirName: {
            get: rsvm.RsCreateGetter("dirName", function dirName() {
                return rsvm.get(this, "dirName");
            }), set: rsvm.RsCreateSetter("dirName", function dirName() {
                rsvm.set(this, "dirName", arguments[0]);
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
        files: {
            get: rsvm.RsCreateGetter("files", function files() {
                return rsvm.get(this, "files");
            }), set: rsvm.RsCreateSetter("files", function files() {
                rsvm.set(this, "files", arguments[0]);
            }), enumerable: true, configurable: true,
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
        height: {
            get: rsvm.RsCreateGetter("height", function height() {
                return rsvm.get(this, "height");
            }), set: rsvm.RsCreateSetter("height", function height() {
                rsvm.set(this, "height", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        indeterminate: {
            get: rsvm.RsCreateGetter("indeterminate", function indeterminate() {
                return rsvm.get(this, "indeterminate");
            }), set: rsvm.RsCreateSetter("indeterminate", function indeterminate() {
                rsvm.set(this, "indeterminate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        list: {
            get: rsvm.RsCreateGetter("list", function list() {
                return rsvm.get(this, "list");
            }), set: undefined, enumerable: true, configurable: true,
        },
        max: {
            get: rsvm.RsCreateGetter("max", function max() {
                return rsvm.get(this, "max");
            }), set: rsvm.RsCreateSetter("max", function max() {
                rsvm.set(this, "max", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        maxLength: {
            get: rsvm.RsCreateGetter("maxLength", function maxLength() {
                return rsvm.get(this, "maxLength");
            }), set: rsvm.RsCreateSetter("maxLength", function maxLength() {
                rsvm.set(this, "maxLength", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        min: {
            get: rsvm.RsCreateGetter("min", function min() {
                return rsvm.get(this, "min");
            }), set: rsvm.RsCreateSetter("min", function min() {
                rsvm.set(this, "min", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        minLength: {
            get: rsvm.RsCreateGetter("minLength", function minLength() {
                return rsvm.get(this, "minLength");
            }), set: rsvm.RsCreateSetter("minLength", function minLength() {
                rsvm.set(this, "minLength", arguments[0]);
            }), enumerable: true, configurable: true,
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
        pattern: {
            get: rsvm.RsCreateGetter("pattern", function pattern() {
                return rsvm.get(this, "pattern");
            }), set: rsvm.RsCreateSetter("pattern", function pattern() {
                rsvm.set(this, "pattern", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        placeholder: {
            get: rsvm.RsCreateGetter("placeholder", function placeholder() {
                return rsvm.get(this, "placeholder");
            }), set: rsvm.RsCreateSetter("placeholder", function placeholder() {
                rsvm.set(this, "placeholder", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        readOnly: {
            get: rsvm.RsCreateGetter("readOnly", function readOnly() {
                return rsvm.get(this, "readOnly");
            }), set: rsvm.RsCreateSetter("readOnly", function readOnly() {
                rsvm.set(this, "readOnly", arguments[0]);
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
        src: {
            get: rsvm.RsCreateGetter("src", function src() {
                return rsvm.get(this, "src");
            }), set: rsvm.RsCreateSetter("src", function src() {
                rsvm.set(this, "src", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        step: {
            get: rsvm.RsCreateGetter("step", function step() {
                return rsvm.get(this, "step");
            }), set: rsvm.RsCreateSetter("step", function step() {
                rsvm.set(this, "step", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: rsvm.RsCreateSetter("type", function type() {
                rsvm.set(this, "type", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        defaultValue: {
            get: rsvm.RsCreateGetter("defaultValue", function defaultValue() {
                return rsvm.get(this, "defaultValue");
            }), set: rsvm.RsCreateSetter("defaultValue", function defaultValue() {
                rsvm.set(this, "defaultValue", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        value: {
            get: rsvm.RsCreateGetter("value", function value() {
                return rsvm.get(this, "value");
            }), set: rsvm.RsCreateSetter("value", function value() {
                rsvm.set(this, "value", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        valueAsDate: {
            get: rsvm.RsCreateGetter("valueAsDate", function valueAsDate() {
                return rsvm.get(this, "valueAsDate");
            }), set: rsvm.RsCreateSetter("valueAsDate", function valueAsDate() {
                rsvm.set(this, "valueAsDate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        valueAsNumber: {
            get: rsvm.RsCreateGetter("valueAsNumber", function valueAsNumber() {
                return rsvm.get(this, "valueAsNumber");
            }), set: rsvm.RsCreateSetter("valueAsNumber", function valueAsNumber() {
                rsvm.set(this, "valueAsNumber", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        width: {
            get: rsvm.RsCreateGetter("width", function width() {
                return rsvm.get(this, "width");
            }), set: rsvm.RsCreateSetter("width", function width() {
                rsvm.set(this, "width", arguments[0]);
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
        selectionStart: {
            get: rsvm.RsCreateGetter("selectionStart", function selectionStart() {
                return rsvm.get(this, "selectionStart");
            }), set: rsvm.RsCreateSetter("selectionStart", function selectionStart() {
                rsvm.set(this, "selectionStart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        selectionEnd: {
            get: rsvm.RsCreateGetter("selectionEnd", function selectionEnd() {
                return rsvm.get(this, "selectionEnd");
            }), set: rsvm.RsCreateSetter("selectionEnd", function selectionEnd() {
                rsvm.set(this, "selectionEnd", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        selectionDirection: {
            get: rsvm.RsCreateGetter("selectionDirection", function selectionDirection() {
                return rsvm.get(this, "selectionDirection");
            }), set: rsvm.RsCreateSetter("selectionDirection", function selectionDirection() {
                rsvm.set(this, "selectionDirection", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        align: {
            get: rsvm.RsCreateGetter("align", function align() {
                return rsvm.get(this, "align");
            }), set: rsvm.RsCreateSetter("align", function align() {
                rsvm.set(this, "align", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        useMap: {
            get: rsvm.RsCreateGetter("useMap", function useMap() {
                return rsvm.get(this, "useMap");
            }), set: rsvm.RsCreateSetter("useMap", function useMap() {
                rsvm.set(this, "useMap", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        webkitdirectory: {
            get: rsvm.RsCreateGetter("webkitdirectory", function webkitdirectory() {
                return rsvm.get(this, "webkitdirectory");
            }), set: rsvm.RsCreateSetter("webkitdirectory", function webkitdirectory() {
                rsvm.set(this, "webkitdirectory", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        incremental: {
            get: rsvm.RsCreateGetter("incremental", function incremental() {
                return rsvm.get(this, "incremental");
            }), set: rsvm.RsCreateSetter("incremental", function incremental() {
                rsvm.set(this, "incremental", arguments[0]);
            }), enumerable: true, configurable: true,
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
        select: {
            value: rsvm.RsCreateAction("select", 0, function select() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setCustomValidity: {
            value: rsvm.RsCreateAction("setCustomValidity", 1, function setCustomValidity() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setRangeText: {
            value: rsvm.RsCreateAction("setRangeText", 1, function setRangeText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setSelectionRange: {
            value: rsvm.RsCreateAction("setSelectionRange", 2, function setSelectionRange() {
            }), writable: true, enumerable: true, configurable: true,
        },
        showPicker: {
            value: rsvm.RsCreateAction("showPicker", 0, function showPicker() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stepDown: {
            value: rsvm.RsCreateAction("stepDown", 0, function stepDown() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stepUp: {
            value: rsvm.RsCreateAction("stepUp", 0, function stepUp() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitEntries: {
            get: rsvm.RsCreateGetter("webkitEntries", function webkitEntries() {
                return rsvm.get(this, "webkitEntries");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLInputElement },
        [Symbol.toStringTag]: { value: "HTMLInputElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLInputElement, HTMLElement);
    Object.setPrototypeOf(HTMLInputElement.prototype, HTMLElement.prototype);
}();