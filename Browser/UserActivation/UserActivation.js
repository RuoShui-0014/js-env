!function () {
    Object.defineProperty(window, "UserActivation", {
        value: rsvm.RsCreateConstructor("UserActivation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.UserActivation = {
        memory: {
            hasBeenActive: true,
            isActive: true,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("UserActivation", target);
        },
        new() {
            let obj = rsvm.RsCreate(UserActivation.prototype);
            return obj;
        },
    };

    Object.defineProperties(UserActivation, {
        prototype: { value: UserActivation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(UserActivation.prototype, {
        hasBeenActive: {
            get: rsvm.RsCreateGetter("hasBeenActive", function hasBeenActive() {
                return rsvm.get(this, "hasBeenActive");
            }), set: undefined, enumerable: true, configurable: true,
        },
        isActive: {
            get: rsvm.RsCreateGetter("isActive", function isActive() {
                return rsvm.get(this, "isActive");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: UserActivation },
        [Symbol.toStringTag]: { value: "UserActivation", writable: false, enumerable: false, configurable: true, },
    });
}();