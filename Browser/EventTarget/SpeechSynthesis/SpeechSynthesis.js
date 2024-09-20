!function () {
    let SpeechSynthesis = {};

    rsvm.prototype.SpeechSynthesis = {
        memory: {
            pending: false,
            speaking: false,
            paused: false,
            onvoiceschanged: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SpeechSynthesis", target);
        },
        new() {
            let obj = rsvm.RsCreate(SpeechSynthesis);
            return obj;
        },
    };

    Object.defineProperties(SpeechSynthesis, {
        pending: {
            get: rsvm.RsCreateGetter("pending", function pending() {
                return rsvm.get(this, "pending");
            }), set: undefined, enumerable: true, configurable: true,
        },
        speaking: {
            get: rsvm.RsCreateGetter("speaking", function speaking() {
                return rsvm.get(this, "speaking");
            }), set: undefined, enumerable: true, configurable: true,
        },
        paused: {
            get: rsvm.RsCreateGetter("paused", function paused() {
                return rsvm.get(this, "paused");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onvoiceschanged: {
            get: rsvm.RsCreateGetter("onvoiceschanged", function onvoiceschanged() {
                return rsvm.get(this, "onvoiceschanged");
            }), set: rsvm.RsCreateSetter("onvoiceschanged", function onvoiceschanged() {
                rsvm.set(this, "onvoiceschanged", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        cancel: {
            value: rsvm.RsCreateAction("cancel", 0, function cancel() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getVoices: {
            value: rsvm.RsCreateAction("getVoices", 0, function getVoices() {
                return rsvm.siteInfo.voices;
            }), writable: true, enumerable: true, configurable: true,
        },
        pause: {
            value: rsvm.RsCreateAction("pause", 0, function pause() {
            }), writable: true, enumerable: true, configurable: true,
        },
        resume: {
            value: rsvm.RsCreateAction("resume", 0, function resume() {
            }), writable: true, enumerable: true, configurable: true,
        },
        speak: {
            value: rsvm.RsCreateAction("speak", 1, function speak() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "SpeechSynthesis", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(SpeechSynthesis, EventTarget.prototype);
}();