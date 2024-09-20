!function () {
    Object.defineProperty(window, "AnimationEvent", {
        value: rsvm.RsCreateConstructor("AnimationEvent", 1, function AnimationEvent() {
            return rsvm.prototype.AnimationEvent.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.AnimationEvent = {
        memory: {
            animationName: undefined,
            elapsedTime: undefined,
            pseudoElement: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("AnimationEvent", target);
        },
        new() {
            let obj = rsvm.RsCreate(AnimationEvent.prototype);
            return obj;
        },
    };

    Object.defineProperties(AnimationEvent, {
        prototype: { value: AnimationEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(AnimationEvent.prototype, {
        animationName: {
            get: rsvm.RsCreateGetter("animationName", function animationName() {
                return rsvm.get(this, "animationName");
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
        constructor: { writable: true, enumerable: false, configurable: true, value: AnimationEvent },
        [Symbol.toStringTag]: { value: "AnimationEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(AnimationEvent, Event);
    Object.setPrototypeOf(AnimationEvent.prototype, Event.prototype);
}();