!function () {
    Object.defineProperty(window, "Request", {
        value: rsvm.RsCreateConstructor("Request", 1, function Request() {
            return rsvm.prototype.Request.apply(this, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Request = {
        memory: {
            method: "GET",
            url: "chrome-extension://bpelnogcookhocnaokfpoeinibimbeff/index.html",
            headers: rsvm.prototype.Headers.new(),
            destination: "",
            referrer: "about:client",
            referrerPolicy: "",
            mode: "cors",
            credentials: "same-origin",
            cache: "default",
            redirect: "follow",
            integrity: "",
            keepalive: false,
            signal: rsvm.prototype.AbortSignal.new(),
            isHistoryNavigation: false,
            bodyUsed: false,
            body: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Request", target);
        },
        new() {
            let obj = rsvm.RsCreate(Request.prototype);
            return obj;
        },
    };

    Object.defineProperties(Request, {
        prototype: { value: Request.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Request.prototype, {
        method: {
            get: rsvm.RsCreateGetter("method", function method() {
                return rsvm.get(this, "method");
            }), set: undefined, enumerable: true, configurable: true,
        },
        url: {
            get: rsvm.RsCreateGetter("url", function url() {
                return rsvm.get(this, "url");
            }), set: undefined, enumerable: true, configurable: true,
        },
        headers: {
            get: rsvm.RsCreateGetter("headers", function headers() {
                return rsvm.get(this, "headers");
            }), set: undefined, enumerable: true, configurable: true,
        },
        destination: {
            get: rsvm.RsCreateGetter("destination", function destination() {
                return rsvm.get(this, "destination");
            }), set: undefined, enumerable: true, configurable: true,
        },
        referrer: {
            get: rsvm.RsCreateGetter("referrer", function referrer() {
                return rsvm.get(this, "referrer");
            }), set: undefined, enumerable: true, configurable: true,
        },
        referrerPolicy: {
            get: rsvm.RsCreateGetter("referrerPolicy", function referrerPolicy() {
                return rsvm.get(this, "referrerPolicy");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mode: {
            get: rsvm.RsCreateGetter("mode", function mode() {
                return rsvm.get(this, "mode");
            }), set: undefined, enumerable: true, configurable: true,
        },
        credentials: {
            get: rsvm.RsCreateGetter("credentials", function credentials() {
                return rsvm.get(this, "credentials");
            }), set: undefined, enumerable: true, configurable: true,
        },
        cache: {
            get: rsvm.RsCreateGetter("cache", function cache() {
                return rsvm.get(this, "cache");
            }), set: undefined, enumerable: true, configurable: true,
        },
        redirect: {
            get: rsvm.RsCreateGetter("redirect", function redirect() {
                return rsvm.get(this, "redirect");
            }), set: undefined, enumerable: true, configurable: true,
        },
        integrity: {
            get: rsvm.RsCreateGetter("integrity", function integrity() {
                return rsvm.get(this, "integrity");
            }), set: undefined, enumerable: true, configurable: true,
        },
        keepalive: {
            get: rsvm.RsCreateGetter("keepalive", function keepalive() {
                return rsvm.get(this, "keepalive");
            }), set: undefined, enumerable: true, configurable: true,
        },
        signal: {
            get: rsvm.RsCreateGetter("signal", function signal() {
                return rsvm.get(this, "signal");
            }), set: undefined, enumerable: true, configurable: true,
        },
        isHistoryNavigation: {
            get: rsvm.RsCreateGetter("isHistoryNavigation", function isHistoryNavigation() {
                return rsvm.get(this, "isHistoryNavigation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        bodyUsed: {
            get: rsvm.RsCreateGetter("bodyUsed", function bodyUsed() {
                return rsvm.get(this, "bodyUsed");
            }), set: undefined, enumerable: true, configurable: true,
        },
        arrayBuffer: {
            value: rsvm.RsCreateAction("arrayBuffer", 0, function arrayBuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blob: {
            value: rsvm.RsCreateAction("blob", 0, function blob() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clone: {
            value: rsvm.RsCreateAction("clone", 0, function clone() {
            }), writable: true, enumerable: true, configurable: true,
        },
        formData: {
            value: rsvm.RsCreateAction("formData", 0, function formData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        json: {
            value: rsvm.RsCreateAction("json", 0, function json() {
            }), writable: true, enumerable: true, configurable: true,
        },
        text: {
            value: rsvm.RsCreateAction("text", 0, function text() {
            }), writable: true, enumerable: true, configurable: true,
        },
        body: {
            get: rsvm.RsCreateGetter("body", function body() {
                return rsvm.get(this, "body");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Request },
        [Symbol.toStringTag]: { value: "Request", writable: false, enumerable: false, configurable: true, },
    });
}();