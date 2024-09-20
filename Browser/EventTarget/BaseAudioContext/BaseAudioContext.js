!function () {
    Object.defineProperty(window, "BaseAudioContext", {
        value: rsvm.RsCreateConstructor("BaseAudioContext"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.BaseAudioContext = {
        memory: {
            destination: undefined,
            currentTime: undefined,
            sampleRate: undefined,
            listener: undefined,
            state: undefined,
            onstatechange: undefined,
            audioWorklet: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("BaseAudioContext", target);
        },
        new() {
            let obj = rsvm.RsCreate(BaseAudioContext.prototype);
            return obj;
        },
    };

    Object.defineProperties(BaseAudioContext, {
        prototype: { value: BaseAudioContext.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(BaseAudioContext.prototype, {
        destination: {
            get: rsvm.RsCreateGetter("destination", function destination() {
                return rsvm.get(this, "destination");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentTime: {
            get: rsvm.RsCreateGetter("currentTime", function currentTime() {
                return rsvm.get(this, "currentTime");
            }), set: undefined, enumerable: true, configurable: true,
        },
        sampleRate: {
            get: rsvm.RsCreateGetter("sampleRate", function sampleRate() {
                return rsvm.get(this, "sampleRate");
            }), set: undefined, enumerable: true, configurable: true,
        },
        listener: {
            get: rsvm.RsCreateGetter("listener", function listener() {
                return rsvm.get(this, "listener");
            }), set: undefined, enumerable: true, configurable: true,
        },
        state: {
            get: rsvm.RsCreateGetter("state", function state() {
                return rsvm.get(this, "state");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onstatechange: {
            get: rsvm.RsCreateGetter("onstatechange", function onstatechange() {
                return rsvm.get(this, "onstatechange");
            }), set: rsvm.RsCreateSetter("onstatechange", function onstatechange() {
                rsvm.set(this, "onstatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        createAnalyser: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createBiquadFilter: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createBuffer: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createBufferSource: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createChannelMerger: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createChannelSplitter: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createConstantSource: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createConvolver: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createDelay: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createDynamicsCompressor: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createGain: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createIIRFilter: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createOscillator: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createPanner: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createPeriodicWave: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createScriptProcessor: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createStereoPanner: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createWaveShaper: { value: undefined, writable: true, enumerable: true, configurable: true, },
        decodeAudioData: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: BaseAudioContext },
        audioWorklet: {
            get: rsvm.RsCreateGetter("audioWorklet", function audioWorklet() {
                return rsvm.get(this, "audioWorklet");
            }), set: undefined, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "BaseAudioContext", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(BaseAudioContext, EventTarget);
    Object.setPrototypeOf(BaseAudioContext.prototype, EventTarget.prototype);
}();