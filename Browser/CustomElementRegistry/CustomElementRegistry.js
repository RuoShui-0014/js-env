!function () {
    Object.defineProperty(window, "CustomElementRegistry", {
        value: rsvm.RsCreateConstructor("CustomElementRegistry"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CustomElementRegistry = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("CustomElementRegistry", target);
        },
        new() {
            let obj = rsvm.RsCreate(CustomElementRegistry.prototype);
            return obj;
        },
    };

    Object.defineProperties(CustomElementRegistry, {
        prototype: { value: CustomElementRegistry.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CustomElementRegistry.prototype, {
        define: {
            value: rsvm.RsCreateAction("define", 2, function define() {
            }), writable: true, enumerable: true, configurable: true,
        },
        get: {
            value: rsvm.RsCreateAction("get", 1, function get() {
            }), writable: true, enumerable: true, configurable: true,
        },
        upgrade: {
            value: rsvm.RsCreateAction("upgrade", 1, function upgrade() {
            }), writable: true, enumerable: true, configurable: true,
        },
        whenDefined: {
            value: rsvm.RsCreateAction("whenDefined", 1, function whenDefined() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getName: {
            value: rsvm.RsCreateAction("getName", 1, function getName() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CustomElementRegistry },
        [Symbol.toStringTag]: { value: "CustomElementRegistry", writable: false, enumerable: false, configurable: true, },
    });
}();