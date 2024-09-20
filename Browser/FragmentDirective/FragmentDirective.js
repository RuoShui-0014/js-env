!function () {
    Object.defineProperty(window, "FragmentDirective", {
        value: rsvm.RsCreateConstructor("FragmentDirective"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FragmentDirective = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("FragmentDirective", target);
        },
        new() {
            let obj = rsvm.RsCreate(FragmentDirective.prototype);
            return obj;
        },
    };

    Object.defineProperties(FragmentDirective, {
        prototype: { value: FragmentDirective.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FragmentDirective.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: FragmentDirective },
        [Symbol.toStringTag]: { value: "FragmentDirective", writable: false, enumerable: false, configurable: true, },
    });
}();