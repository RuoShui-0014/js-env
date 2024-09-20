!function () {
    Object.defineProperty(window, "TransitionEvent", {
        value: rsvm.RsCreateConstructor("TransitionEvent", 1, function TransitionEvent() {
            return rsvm.prototype.TransitionEvent.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TransitionEvent = {
        memory: {
            propertyName: undefined,
            elapsedTime: undefined,
            pseudoElement: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TransitionEvent", target);
        },
        new() {
            let obj = rsvm.RsCreate(TransitionEvent.prototype);
            return obj;
        },
    };

    Object.defineProperties(TransitionEvent, {
        prototype: { value: TransitionEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TransitionEvent.prototype, {
        propertyName: {
            get: rsvm.RsCreateGetter("propertyName", function propertyName() {
                return rsvm.get(this, "propertyName");
            }), set: undefined, enumerable: true, configurable: true,
        },
        elapsedTime: {
            get: rsvm.RsCreateGetter("elapsedTime", function elapsedTime() {
                return rsvm.get(this, "elapsedTime");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pseudoElement: {
            get: rsvm.RsCreateGetter("pseudoElement", function pseudoElement() {
                return rsvm.get(this, "pseudoElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: TransitionEvent },
        [Symbol.toStringTag]: { value: "TransitionEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(TransitionEvent, Event);
    Object.setPrototypeOf(TransitionEvent.prototype, Event.prototype);
}();