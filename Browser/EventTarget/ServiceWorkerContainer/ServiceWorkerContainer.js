!function () {
    Object.defineProperty(window, "ServiceWorkerContainer", {
        value: rsvm.RsCreateConstructor("ServiceWorkerContainer"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ServiceWorkerContainer = {
        memory: {
            controller: null,
            ready: null,
            oncontrollerchange: null,
            onmessage: null,
            onmessageerror: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ServiceWorkerContainer", target);
        },
        new() {
            let obj = rsvm.RsCreate(ServiceWorkerContainer.prototype);
            rsvm.set(obj, 'ready', new Promise((resolve, reject)=>{resolve(undefined);}));
            return obj;
        },
    };

    Object.defineProperties(ServiceWorkerContainer, {
        prototype: { value: ServiceWorkerContainer.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ServiceWorkerContainer.prototype, {
        controller: {
            get: rsvm.RsCreateGetter("controller", function controller() {
                return rsvm.get(this, "controller");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ready: {
            get: rsvm.RsCreateGetter("ready", function ready() {
                return rsvm.get(this, "ready");
            }), set: undefined, enumerable: true, configurable: true,
        },
        oncontrollerchange: {
            get: rsvm.RsCreateGetter("oncontrollerchange", function oncontrollerchange() {
                return rsvm.get(this, "oncontrollerchange");
            }), set: rsvm.RsCreateSetter("oncontrollerchange", function oncontrollerchange() {
                rsvm.set(this, "oncontrollerchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmessage: {
            get: rsvm.RsCreateGetter("onmessage", function onmessage() {
                return rsvm.get(this, "onmessage");
            }), set: rsvm.RsCreateSetter("onmessage", function onmessage() {
                rsvm.set(this, "onmessage", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmessageerror: {
            get: rsvm.RsCreateGetter("onmessageerror", function onmessageerror() {
                return rsvm.get(this, "onmessageerror");
            }), set: rsvm.RsCreateSetter("onmessageerror", function onmessageerror() {
                rsvm.set(this, "onmessageerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getRegistration: {
            value: rsvm.RsCreateAction("getRegistration", 0, function getRegistration() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getRegistrations: {
            value: rsvm.RsCreateAction("getRegistrations", 0, function getRegistrations() {
            }), writable: true, enumerable: true, configurable: true,
        },
        register: {
            value: rsvm.RsCreateAction("register", 1, function register() {
            }), writable: true, enumerable: true, configurable: true,
        },
        startMessages: {
            value: rsvm.RsCreateAction("startMessages", 0, function startMessages() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: ServiceWorkerContainer },
        [Symbol.toStringTag]: { value: "ServiceWorkerContainer", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(ServiceWorkerContainer, EventTarget);
    Object.setPrototypeOf(ServiceWorkerContainer.prototype, EventTarget.prototype);
}();