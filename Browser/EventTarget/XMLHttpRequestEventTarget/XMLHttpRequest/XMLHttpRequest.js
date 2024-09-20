!function () {
    Object.defineProperty(window, "XMLHttpRequest", {
        value: rsvm.RsCreateConstructor("XMLHttpRequest", 0, function XMLHttpRequest() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.XMLHttpRequest.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.XMLHttpRequest = {
        memory: {
            onreadystatechange: null,
            readyState: 0,
            timeout: 0,
            withCredentials: false,
            upload: rsvm.prototype.XMLHttpRequestUpload.new(),
            responseURL: "",
            status: 0,
            statusText: "",
            responseType: "",
            response: "",
            responseText: "",
            responseXML: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("XMLHttpRequest", target);
        },
        new() {
            let obj = rsvm.RsCreate(XMLHttpRequest.prototype);
            return obj;
        },
    };

    Object.defineProperties(XMLHttpRequest, {
        prototype: { value: XMLHttpRequest.prototype, writable: false, enumerable: false, configurable: false },
        UNSENT: { value: 0, writable: false, enumerable: true, configurable: false },
        OPENED: { value: 1, writable: false, enumerable: true, configurable: false },
        HEADERS_RECEIVED: { value: 2, writable: false, enumerable: true, configurable: false },
        LOADING: { value: 3, writable: false, enumerable: true, configurable: false },
        DONE: { value: 4, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(XMLHttpRequest.prototype, {
        onreadystatechange: {
            get: rsvm.RsCreateGetter("onreadystatechange", function onreadystatechange() {
                return rsvm.get(this, "onreadystatechange");
            }), set: rsvm.RsCreateSetter("onreadystatechange", function onreadystatechange() {
                rsvm.set(this, "onreadystatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        readyState: {
            get: rsvm.RsCreateGetter("readyState", function readyState() {
                return rsvm.get(this, "readyState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        timeout: {
            get: rsvm.RsCreateGetter("timeout", function timeout() {
                return rsvm.get(this, "timeout");
            }), set: rsvm.RsCreateSetter("timeout", function timeout() {
                rsvm.set(this, "timeout", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        withCredentials: {
            get: rsvm.RsCreateGetter("withCredentials", function withCredentials() {
                return rsvm.get(this, "withCredentials");
            }), set: rsvm.RsCreateSetter("withCredentials", function withCredentials() {
                rsvm.set(this, "withCredentials", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        upload: {
            get: rsvm.RsCreateGetter("upload", function upload() {
                return rsvm.get(this, "upload");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseURL: {
            get: rsvm.RsCreateGetter("responseURL", function responseURL() {
                return rsvm.get(this, "responseURL");
            }), set: undefined, enumerable: true, configurable: true,
        },
        status: {
            get: rsvm.RsCreateGetter("status", function status() {
                return rsvm.get(this, "status");
            }), set: undefined, enumerable: true, configurable: true,
        },
        statusText: {
            get: rsvm.RsCreateGetter("statusText", function statusText() {
                return rsvm.get(this, "statusText");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseType: {
            get: rsvm.RsCreateGetter("responseType", function responseType() {
                return rsvm.get(this, "responseType");
            }), set: rsvm.RsCreateSetter("responseType", function responseType() {
                rsvm.set(this, "responseType", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        response: {
            get: rsvm.RsCreateGetter("response", function response() {
                return rsvm.get(this, "response");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseText: {
            get: rsvm.RsCreateGetter("responseText", function responseText() {
                return rsvm.get(this, "responseText");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseXML: {
            get: rsvm.RsCreateGetter("responseXML", function responseXML() {
                return rsvm.get(this, "responseXML");
            }), set: undefined, enumerable: true, configurable: true,
        },
        UNSENT: { value: 0, writable: false, enumerable: true, configurable: false, },
        OPENED: { value: 1, writable: false, enumerable: true, configurable: false, },
        HEADERS_RECEIVED: { value: 2, writable: false, enumerable: true, configurable: false, },
        LOADING: { value: 3, writable: false, enumerable: true, configurable: false, },
        DONE: { value: 4, writable: false, enumerable: true, configurable: false, },
        abort: {
            value: rsvm.RsCreateAction("abort", 0, function abort() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAllResponseHeaders: {
            value: rsvm.RsCreateAction("getAllResponseHeaders", 0, function getAllResponseHeaders() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getResponseHeader: {
            value: rsvm.RsCreateAction("getResponseHeader", 1, function getResponseHeader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        open: {
            value: rsvm.RsCreateAction("open", 2, function open() {
                if(arguments[0]){
                    rsvm.set(this, 'method', arguments[0]);
                    if(arguments[1]){
                        rsvm.set(this, 'url', arguments[1]);
                        rsvm.set(this, 'responseURL', arguments[1]);
                        if(arguments[2]){
                            rsvm.set(this, 'async', arguments[2]);
                        }
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        overrideMimeType: {
            value: rsvm.RsCreateAction("overrideMimeType", 1, function overrideMimeType() {
            }), writable: true, enumerable: true, configurable: true,
        },
        send: {
            value: rsvm.RsCreateAction("send", 0, function send() {
                let info = {
                    method: rsvm.get(this, 'method'),
                    url: rsvm.get(this, 'url'),
                    data: arguments[0],
                    async: rsvm.get(this, 'async'),
                    target: this,
                };
                rsvm.result.push(info);
                rsvm.curRequest = info;
            }), writable: true, enumerable: true, configurable: true,
        },
        setRequestHeader: {
            value: rsvm.RsCreateAction("setRequestHeader", 2, function setRequestHeader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: XMLHttpRequest },
        setAttributionReporting: {
            value: rsvm.RsCreateAction("setAttributionReporting", 1, function setAttributionReporting() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setPrivateToken: {
            value: rsvm.RsCreateAction("setPrivateToken", 1, function setPrivateToken() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "XMLHttpRequest", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);
    Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
}();