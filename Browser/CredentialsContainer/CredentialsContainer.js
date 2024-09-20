!function () {
    Object.defineProperty(window, "CredentialsContainer", {
        value: rsvm.RsCreateConstructor("CredentialsContainer"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CredentialsContainer = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("CredentialsContainer", target);
        },
        new() {
            let obj = rsvm.RsCreate(CredentialsContainer.prototype);
            return obj;
        },
    };

    Object.defineProperties(CredentialsContainer, {
        prototype: { value: CredentialsContainer.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CredentialsContainer.prototype, {
        create: {
            value: rsvm.RsCreateAction("create", 0, function create() {
            }), writable: true, enumerable: true, configurable: true,
        },
        get: {
            value: rsvm.RsCreateAction("get", 0, function get() {
            }), writable: true, enumerable: true, configurable: true,
        },
        preventSilentAccess: {
            value: rsvm.RsCreateAction("preventSilentAccess", 0, function preventSilentAccess() {
            }), writable: true, enumerable: true, configurable: true,
        },
        store: {
            value: rsvm.RsCreateAction("store", 1, function store() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CredentialsContainer },
        [Symbol.toStringTag]: { value: "CredentialsContainer", writable: false, enumerable: false, configurable: true, },
    });
}();