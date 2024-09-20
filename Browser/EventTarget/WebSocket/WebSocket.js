!function () {
    Object.defineProperty(window, "WebSocket", {
        value: rsvm.RsCreateConstructor("WebSocket"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebSocket = {
        memory: {
            url: undefined,
            readyState: undefined,
            bufferedAmount: undefined,
            onopen: undefined,
            onerror: undefined,
            onclose: undefined,
            extensions: undefined,
            protocol: undefined,
            onmessage: undefined,
            binaryType: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("WebSocket", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebSocket.prototype);
            return obj;
        },
    };

    Object.defineProperties(WebSocket, {
        prototype: { value: WebSocket.prototype, writable: false, enumerable: false, configurable: false },
        CONNECTING: { value: 0, writable: false, enumerable: true, configurable: false },
        OPEN: { value: 1, writable: false, enumerable: true, configurable: false },
        CLOSING: { value: 2, writable: false, enumerable: true, configurable: false },
        CLOSED: { value: 3, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(WebSocket.prototype, {
        url: {
            get: rsvm.RsCreateGetter("url", function url() {
                return rsvm.get(this, "url");
            }), set: undefined, enumerable: true, configurable: true,
        },
        readyState: {
            get: rsvm.RsCreateGetter("readyState", function readyState() {
                return rsvm.get(this, "readyState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        bufferedAmount: {
            get: rsvm.RsCreateGetter("bufferedAmount", function bufferedAmount() {
                return rsvm.get(this, "bufferedAmount");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onopen: {
            get: rsvm.RsCreateGetter("onopen", function onopen() {
                return rsvm.get(this, "onopen");
            }), set: rsvm.RsCreateSetter("onopen", function onopen() {
                rsvm.set(this, "onopen", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onclose: {
            get: rsvm.RsCreateGetter("onclose", function onclose() {
                return rsvm.get(this, "onclose");
            }), set: rsvm.RsCreateSetter("onclose", function onclose() {
                rsvm.set(this, "onclose", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        extensions: {
            get: rsvm.RsCreateGetter("extensions", function extensions() {
                return rsvm.get(this, "extensions");
            }), set: undefined, enumerable: true, configurable: true,
        },
        protocol: {
            get: rsvm.RsCreateGetter("protocol", function protocol() {
                return rsvm.get(this, "protocol");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onmessage: {
            get: rsvm.RsCreateGetter("onmessage", function onmessage() {
                return rsvm.get(this, "onmessage");
            }), set: rsvm.RsCreateSetter("onmessage", function onmessage() {
                rsvm.set(this, "onmessage", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        binaryType: {
            get: rsvm.RsCreateGetter("binaryType", function binaryType() {
                return rsvm.get(this, "binaryType");
            }), set: rsvm.RsCreateSetter("binaryType", function binaryType() {
                rsvm.set(this, "binaryType", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        CONNECTING: { value: undefined, writable: false, enumerable: true, configurable: false, },
        OPEN: { value: undefined, writable: false, enumerable: true, configurable: false, },
        CLOSING: { value: undefined, writable: false, enumerable: true, configurable: false, },
        CLOSED: { value: undefined, writable: false, enumerable: true, configurable: false, },
        close: { value: undefined, writable: true, enumerable: true, configurable: true, },
        send: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: WebSocket },
        [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(WebSocket, EventTarget);
    Object.setPrototypeOf(WebSocket.prototype, EventTarget.prototype);
}();