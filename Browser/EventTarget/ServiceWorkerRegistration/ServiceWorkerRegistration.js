!function () {
    Object.defineProperty(window, "ServiceWorkerRegistration", {
        value: rsvm.RsCreateConstructor("ServiceWorkerRegistration"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ServiceWorkerRegistration = {
        memory: {
            installing: undefined,
            waiting: undefined,
            active: undefined,
            navigationPreload: undefined,
            scope: undefined,
            updateViaCache: undefined,
            onupdatefound: undefined,
            paymentManager: undefined,
            backgroundFetch: undefined,
            periodicSync: undefined,
            sync: undefined,
            cookies: undefined,
            pushManager: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ServiceWorkerRegistration", target);
        },
        new() {
            let obj = rsvm.RsCreate(ServiceWorkerRegistration.prototype);
            return obj;
        },
    };

    Object.defineProperties(ServiceWorkerRegistration, {
        prototype: { value: ServiceWorkerRegistration.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ServiceWorkerRegistration.prototype, {
        installing: {
            get: rsvm.RsCreateGetter("installing", function installing() {
                return rsvm.get(this, "installing");
            }), set: undefined, enumerable: true, configurable: true,
        },
        waiting: {
            get: rsvm.RsCreateGetter("waiting", function waiting() {
                return rsvm.get(this, "waiting");
            }), set: undefined, enumerable: true, configurable: true,
        },
        active: {
            get: rsvm.RsCreateGetter("active", function active() {
                return rsvm.get(this, "active");
            }), set: undefined, enumerable: true, configurable: true,
        },
        navigationPreload: {
            get: rsvm.RsCreateGetter("navigationPreload", function navigationPreload() {
                return rsvm.get(this, "navigationPreload");
            }), set: undefined, enumerable: true, configurable: true,
        },
        scope: {
            get: rsvm.RsCreateGetter("scope", function scope() {
                return rsvm.get(this, "scope");
            }), set: undefined, enumerable: true, configurable: true,
        },
        updateViaCache: {
            get: rsvm.RsCreateGetter("updateViaCache", function updateViaCache() {
                return rsvm.get(this, "updateViaCache");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onupdatefound: {
            get: rsvm.RsCreateGetter("onupdatefound", function onupdatefound() {
                return rsvm.get(this, "onupdatefound");
            }), set: rsvm.RsCreateSetter("onupdatefound", function onupdatefound() {
                rsvm.set(this, "onupdatefound", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        unregister: { value: undefined, writable: true, enumerable: true, configurable: true, },
        update: { value: undefined, writable: true, enumerable: true, configurable: true, },
        paymentManager: {
            get: rsvm.RsCreateGetter("paymentManager", function paymentManager() {
                return rsvm.get(this, "paymentManager");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: ServiceWorkerRegistration },
        backgroundFetch: {
            get: rsvm.RsCreateGetter("backgroundFetch", function backgroundFetch() {
                return rsvm.get(this, "backgroundFetch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        periodicSync: {
            get: rsvm.RsCreateGetter("periodicSync", function periodicSync() {
                return rsvm.get(this, "periodicSync");
            }), set: undefined, enumerable: true, configurable: true,
        },
        sync: {
            get: rsvm.RsCreateGetter("sync", function sync() {
                return rsvm.get(this, "sync");
            }), set: undefined, enumerable: true, configurable: true,
        },
        cookies: {
            get: rsvm.RsCreateGetter("cookies", function cookies() {
                return rsvm.get(this, "cookies");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pushManager: {
            get: rsvm.RsCreateGetter("pushManager", function pushManager() {
                return rsvm.get(this, "pushManager");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getNotifications: { value: undefined, writable: true, enumerable: true, configurable: true, },
        showNotification: { value: undefined, writable: true, enumerable: true, configurable: true, },
        [Symbol.toStringTag]: { value: "ServiceWorkerRegistration", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(ServiceWorkerRegistration, EventTarget);
    Object.setPrototypeOf(ServiceWorkerRegistration.prototype, EventTarget.prototype);
}();