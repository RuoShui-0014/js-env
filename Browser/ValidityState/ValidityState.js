!function () {
    Object.defineProperty(window, "ValidityState", {
        value: rsvm.RsCreateConstructor("ValidityState"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ValidityState = {
        memory: {
            valueMissing: false,
            typeMismatch: false,
            patternMismatch: false,
            tooLong: false,
            tooShort: false,
            rangeUnderflow: false,
            rangeOverflow: false,
            stepMismatch: false,
            badInput: false,
            customError: false,
            valid: true,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ValidityState", target);
        },
        new() {
            let obj = rsvm.RsCreate(ValidityState.prototype);
            return obj;
        },
    };

    Object.defineProperties(ValidityState, {
        prototype: { value: ValidityState.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ValidityState.prototype, {
        valueMissing: {
            get: rsvm.RsCreateGetter("valueMissing", function valueMissing() {
                return rsvm.get(this, "valueMissing");
            }), set: undefined, enumerable: true, configurable: true,
        },
        typeMismatch: {
            get: rsvm.RsCreateGetter("typeMismatch", function typeMismatch() {
                return rsvm.get(this, "typeMismatch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        patternMismatch: {
            get: rsvm.RsCreateGetter("patternMismatch", function patternMismatch() {
                return rsvm.get(this, "patternMismatch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tooLong: {
            get: rsvm.RsCreateGetter("tooLong", function tooLong() {
                return rsvm.get(this, "tooLong");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tooShort: {
            get: rsvm.RsCreateGetter("tooShort", function tooShort() {
                return rsvm.get(this, "tooShort");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rangeUnderflow: {
            get: rsvm.RsCreateGetter("rangeUnderflow", function rangeUnderflow() {
                return rsvm.get(this, "rangeUnderflow");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rangeOverflow: {
            get: rsvm.RsCreateGetter("rangeOverflow", function rangeOverflow() {
                return rsvm.get(this, "rangeOverflow");
            }), set: undefined, enumerable: true, configurable: true,
        },
        stepMismatch: {
            get: rsvm.RsCreateGetter("stepMismatch", function stepMismatch() {
                return rsvm.get(this, "stepMismatch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        badInput: {
            get: rsvm.RsCreateGetter("badInput", function badInput() {
                return rsvm.get(this, "badInput");
            }), set: undefined, enumerable: true, configurable: true,
        },
        customError: {
            get: rsvm.RsCreateGetter("customError", function customError() {
                return rsvm.get(this, "customError");
            }), set: undefined, enumerable: true, configurable: true,
        },
        valid: {
            get: rsvm.RsCreateGetter("valid", function valid() {
                return rsvm.get(this, "valid");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: ValidityState },
        [Symbol.toStringTag]: { value: "ValidityState", writable: false, enumerable: false, configurable: true, },
    });
}();