!function () {
    Object.defineProperty(window, "SourceBufferList", {
        value: rsvm.RsCreateConstructor("SourceBufferList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SourceBufferList = {
        memory: {
            length: undefined,
            onaddsourcebuffer: undefined,
            onremovesourcebuffer: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SourceBufferList", target);
        },
        new() {
            let obj = rsvm.RsCreate(SourceBufferList.prototype);
            return obj;
        },
    };

    Object.defineProperties(SourceBufferList, {
        prototype: { value: SourceBufferList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SourceBufferList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onaddsourcebuffer: {
            get: rsvm.RsCreateGetter("onaddsourcebuffer", function onaddsourcebuffer() {
                return rsvm.get(this, "onaddsourcebuffer");
            }), set: rsvm.RsCreateSetter("onaddsourcebuffer", function onaddsourcebuffer() {
                rsvm.set(this, "onaddsourcebuffer", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onremovesourcebuffer: {
            get: rsvm.RsCreateGetter("onremovesourcebuffer", function onremovesourcebuffer() {
                return rsvm.get(this, "onremovesourcebuffer");
            }), set: rsvm.RsCreateSetter("onremovesourcebuffer", function onremovesourcebuffer() {
                rsvm.set(this, "onremovesourcebuffer", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: SourceBufferList },
        [Symbol.toStringTag]: { value: "SourceBufferList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
    Object.setPrototypeOf(SourceBufferList, EventTarget);
    Object.setPrototypeOf(SourceBufferList.prototype, EventTarget.prototype);
}();