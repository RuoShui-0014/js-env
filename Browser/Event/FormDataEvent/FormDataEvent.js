!function () {
    Object.defineProperty(window, "FormDataEvent", {
        value: rsvm.RsCreateConstructor("FormDataEvent"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FormDataEvent = {
        memory: {
            formData: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("FormDataEvent", target);
        },
        new() {
            let obj = rsvm.RsCreate(FormDataEvent.prototype);
            return obj;
        },
    };

    Object.defineProperties(FormDataEvent, {
        prototype: { value: FormDataEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FormDataEvent.prototype, {
        formData: {
            get: rsvm.RsCreateGetter("formData", function formData() {
                return rsvm.get(this, "formData");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: FormDataEvent },
        [Symbol.toStringTag]: { value: "FormDataEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(FormDataEvent, Event);
    Object.setPrototypeOf(FormDataEvent.prototype, Event.prototype);
}();