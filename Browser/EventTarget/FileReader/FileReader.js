!function () {
    Object.defineProperty(window, "FileReader", {
        value: rsvm.RsCreateConstructor("FileReader", 0, function FileReader() {
            return rsvm.prototype.FileReader.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FileReader = {
        memory: {
            readyState: 0,
            result: null,
            error: null,
            onloadstart: null,
            onprogress: null,
            onload: null,
            onabort: null,
            onerror: null,
            onloadend: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("FileReader", target);
        },
        new() {
            let obj = rsvm.RsCreate(FileReader.prototype);
            return obj;
        },
    };

    Object.defineProperties(FileReader, {
        prototype: { value: FileReader.prototype, writable: false, enumerable: false, configurable: false },
        EMPTY: { value: 0, writable: false, enumerable: true, configurable: false },
        LOADING: { value: 1, writable: false, enumerable: true, configurable: false },
        DONE: { value: 2, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(FileReader.prototype, {
        readyState: {
            get: rsvm.RsCreateGetter("readyState", function readyState() {
                return rsvm.get(this, "readyState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        result: {
            get: rsvm.RsCreateGetter("result", function result() {
                return rsvm.get(this, "result");
            }), set: undefined, enumerable: true, configurable: true,
        },
        error: {
            get: rsvm.RsCreateGetter("error", function error() {
                return rsvm.get(this, "error");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onloadstart: {
            get: rsvm.RsCreateGetter("onloadstart", function onloadstart() {
                return rsvm.get(this, "onloadstart");
            }), set: rsvm.RsCreateSetter("onloadstart", function onloadstart() {
                rsvm.set(this, "onloadstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onprogress: {
            get: rsvm.RsCreateGetter("onprogress", function onprogress() {
                return rsvm.get(this, "onprogress");
            }), set: rsvm.RsCreateSetter("onprogress", function onprogress() {
                rsvm.set(this, "onprogress", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onload: {
            get: rsvm.RsCreateGetter("onload", function onload() {
                return rsvm.get(this, "onload");
            }), set: rsvm.RsCreateSetter("onload", function onload() {
                rsvm.set(this, "onload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onabort: {
            get: rsvm.RsCreateGetter("onabort", function onabort() {
                return rsvm.get(this, "onabort");
            }), set: rsvm.RsCreateSetter("onabort", function onabort() {
                rsvm.set(this, "onabort", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadend: {
            get: rsvm.RsCreateGetter("onloadend", function onloadend() {
                return rsvm.get(this, "onloadend");
            }), set: rsvm.RsCreateSetter("onloadend", function onloadend() {
                rsvm.set(this, "onloadend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        EMPTY: { value: 0, writable: false, enumerable: true, configurable: false, },
        LOADING: { value: 1, writable: false, enumerable: true, configurable: false, },
        DONE: { value: 2, writable: false, enumerable: true, configurable: false, },
        abort: {
            value: rsvm.RsCreateAction("abort", 0, function abort() {
            }), writable: true, enumerable: true, configurable: true,
        },
        readAsArrayBuffer: {
            value: rsvm.RsCreateAction("readAsArrayBuffer", 1, function readAsArrayBuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        readAsBinaryString: {
            value: rsvm.RsCreateAction("readAsBinaryString", 1, function readAsBinaryString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        readAsDataURL: {
            value: rsvm.RsCreateAction("readAsDataURL", 1, function readAsDataURL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        readAsText: {
            value: rsvm.RsCreateAction("readAsText", 1, function readAsText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: FileReader },
        [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(FileReader, EventTarget);
    Object.setPrototypeOf(FileReader.prototype, EventTarget.prototype);
}();