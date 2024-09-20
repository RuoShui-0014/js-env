!function () {
    Object.defineProperty(window, "AnimationTimeline", {
        value: rsvm.RsCreateConstructor("AnimationTimeline"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.AnimationTimeline = {
        memory: {
            currentTime: null,
            duration: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("AnimationTimeline", target);
        },
        new() {
            let obj = rsvm.RsCreate(AnimationTimeline.prototype);
            return obj;
        },
    };

    Object.defineProperties(AnimationTimeline, {
        prototype: { value: AnimationTimeline.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(AnimationTimeline.prototype, {
        currentTime: {
            get: rsvm.RsCreateGetter("currentTime", function currentTime() {
                return rsvm.get(this, "currentTime");
            }), set: undefined, enumerable: true, configurable: true,
        },
        duration: {
            get: rsvm.RsCreateGetter("duration", function duration() {
                return rsvm.get(this, "duration");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: AnimationTimeline },
        [Symbol.toStringTag]: { value: "AnimationTimeline", writable: false, enumerable: false, configurable: true, },
    });
}();