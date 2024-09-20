!function () {
    Object.defineProperty(window, "TextDecoder", {
        value: rsvm.RsCreateConstructor("TextDecoder", 0, function TextDecoder() {
            return rsvm.prototype.TextDecoder.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TextDecoder = {
        memory: {
            encoding: "utf-8",
            fatal: false,
            ignoreBOM: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TextDecoder", target);
        },
        new() {
            let obj = rsvm.RsCreate(TextDecoder.prototype);
            return obj;
        },
    };

    Object.defineProperties(TextDecoder, {
        prototype: { value: TextDecoder.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TextDecoder.prototype, {
        encoding: {
            get: rsvm.RsCreateGetter("encoding", function encoding() {
                return rsvm.get(this, "encoding");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fatal: {
            get: rsvm.RsCreateGetter("fatal", function fatal() {
                return rsvm.get(this, "fatal");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ignoreBOM: {
            get: rsvm.RsCreateGetter("ignoreBOM", function ignoreBOM() {
                return rsvm.get(this, "ignoreBOM");
            }), set: undefined, enumerable: true, configurable: true,
        },
        decode: {
            value: rsvm.RsCreateAction("decode", 0, function decode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TextDecoder },
        [Symbol.toStringTag]: { value: "TextDecoder", writable: false, enumerable: false, configurable: true, },
    });
}();

