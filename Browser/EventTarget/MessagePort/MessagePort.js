!function () {
    Object.defineProperty(window, "MessagePort", {
        value: rsvm.RsCreateConstructor("MessagePort"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MessagePort = {
        memory: {
            onmessage: null,
            onmessageerror: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MessagePort", target);
        },
        new() {
            let obj = rsvm.RsCreate(MessagePort.prototype);
            return obj;
        },
    };

    Object.defineProperties(MessagePort, {
        prototype: { value: MessagePort.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MessagePort.prototype, {
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
        close: {
            value: rsvm.RsCreateAction("close", 0, function close() {
            }), writable: true, enumerable: true, configurable: true,
        },
        postMessage: {
            value: rsvm.RsCreateAction("postMessage", 1, function postMessage() {
            }), writable: true, enumerable: true, configurable: true,
        },
        start: {
            value: rsvm.RsCreateAction("start", 0, function start() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MessagePort },
        [Symbol.toStringTag]: { value: "MessagePort", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(MessagePort, EventTarget);
    Object.setPrototypeOf(MessagePort.prototype, EventTarget.prototype);
}();



!function () {
    Object.defineProperty(window, "MessageChannel", {
        value: rsvm.RsCreateConstructor("MessageChannel", 0, function MessageChannel() {
            return rsvm.prototype.MessageChannel.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MessageChannel = {
        memory: {
            port1: rsvm.prototype.MessagePort.new(),
            port2: rsvm.prototype.MessagePort.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MessageChannel", target);
        },
        new() {
            let obj = rsvm.RsCreate(MessageChannel.prototype);
            return obj;
        },
    };

    Object.defineProperties(MessageChannel, {
        prototype: { value: MessageChannel.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MessageChannel.prototype, {
        port1: {
            get: rsvm.RsCreateGetter("port1", function port1() {
                return rsvm.get(this, "port1");
            }), set: undefined, enumerable: true, configurable: true,
        },
        port2: {
            get: rsvm.RsCreateGetter("port2", function port2() {
                return rsvm.get(this, "port2");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MessageChannel },
        [Symbol.toStringTag]: { value: "MessageChannel", writable: false, enumerable: false, configurable: true, },
    });
}();