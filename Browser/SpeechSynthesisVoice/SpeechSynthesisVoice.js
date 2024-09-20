!function () {
    let SpeechSynthesisVoice = {};

    rsvm.prototype.SpeechSynthesisVoice = {
        memory: {
            voiceURI: "Microsoft Huihui - Chinese (Simplified, PRC)",
            name: "Microsoft Huihui - Chinese (Simplified, PRC)",
            lang: "zh-CN",
            localService: true,
            default: true,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SpeechSynthesisVoice", target);
        },
        new() {
            let obj = rsvm.RsCreate(SpeechSynthesisVoice);
            return obj;
        },
    };

    Object.defineProperties(SpeechSynthesisVoice, {
        voiceURI: {
            get: rsvm.RsCreateGetter("voiceURI", function voiceURI() {
                return rsvm.get(this, "voiceURI");
            }), set: undefined, enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        lang: {
            get: rsvm.RsCreateGetter("lang", function lang() {
                return rsvm.get(this, "lang");
            }), set: undefined, enumerable: true, configurable: true,
        },
        localService: {
            get: rsvm.RsCreateGetter("localService", function localService() {
                return rsvm.get(this, "localService");
            }), set: undefined, enumerable: true, configurable: true,
        },
        default: {
            get: rsvm.RsCreateGetter("default", function default_() {
                return rsvm.get(this, "default");
            }), set: undefined, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "SpeechSynthesisVoice", writable: false, enumerable: false, configurable: true, },
    });
}();