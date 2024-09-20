!function () {
    Object.defineProperty(window, "Response", {
        value: rsvm.RsCreateConstructor("Response", 0, function Response() {
            return rsvm.prototype.Response.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Response = {
        memory: {
            type: "default",
            url: "",
            redirected: false,
            status: 200,
            ok: true,
            statusText: "",
            headers: rsvm.prototype.Headers.new(),
            body: null,
            bodyUsed: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Response", target);
        },
        new() {
            let obj = rsvm.RsCreate(Response.prototype);
            return obj;
        },
    };

    Object.defineProperties(Response, {
        prototype: { value: Response.prototype, writable: false, enumerable: false, configurable: false },
        error: {
            value: rsvm.RsCreateAction("error", 0, function error() {
            }), writable: true, enumerable: true, configurable: true
        },
        json: {
            value: rsvm.RsCreateAction("json", 1, function json() {
            }), writable: true, enumerable: true, configurable: true
        },
        redirect: {
            value: rsvm.RsCreateAction("redirect", 1, function redirect() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperties(Response.prototype, {
        type: {
            get: rsvm.RsCreateGetter("type", function type() {
                return rsvm.get(this, "type");
            }), set: undefined, enumerable: true, configurable: true,
        },
        url: {
            get: rsvm.RsCreateGetter("url", function url() {
                return rsvm.get(this, "url");
            }), set: undefined, enumerable: true, configurable: true,
        },
        redirected: {
            get: rsvm.RsCreateGetter("redirected", function redirected() {
                return rsvm.get(this, "redirected");
            }), set: undefined, enumerable: true, configurable: true,
        },
        status: {
            get: rsvm.RsCreateGetter("status", function status() {
                return rsvm.get(this, "status");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ok: {
            get: rsvm.RsCreateGetter("ok", function ok() {
                return rsvm.get(this, "ok");
            }), set: undefined, enumerable: true, configurable: true,
        },
        statusText: {
            get: rsvm.RsCreateGetter("statusText", function statusText() {
                return rsvm.get(this, "statusText");
            }), set: undefined, enumerable: true, configurable: true,
        },
        headers: {
            get: rsvm.RsCreateGetter("headers", function headers() {
                return rsvm.get(this, "headers");
            }), set: undefined, enumerable: true, configurable: true,
        },
        body: {
            get: rsvm.RsCreateGetter("body", function body() {
                return rsvm.get(this, "body");
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
        constructor: { writable: true, enumerable: false, configurable: true, value: Response },
        [Symbol.toStringTag]: { value: "Response", writable: false, enumerable: false, configurable: true, },
    });
}();