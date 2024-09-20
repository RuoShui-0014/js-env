!function () {
    Object.defineProperty(window, "HTMLMediaElement", {
        value: rsvm.RsCreateConstructor("HTMLMediaElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLMediaElement = {
        memory: {
            error: null,
            src: "",
            currentSrc: "",
            crossOrigin: null,
            networkState: 0,
            preload: "metadata",
            buffered: rsvm.prototype.TimeRanges.new(),
            readyState: 0,
            seeking: false,
            currentTime: 0,
            duration: NaN,
            paused: true,
            defaultPlaybackRate: 1,
            playbackRate: 1,
            played: rsvm.prototype.TimeRanges.new(),
            seekable: rsvm.prototype.TimeRanges.new(),
            ended: false,
            autoplay: false,
            loop: false,
            preservesPitch: true,
            controls: false,
            controlsList: rsvm.prototype.DOMTokenList.new(),
            volume: 1,
            muted: false,
            defaultMuted: false,
            textTracks: rsvm.prototype.TextTrackList.new(),
            webkitAudioDecodedByteCount: 0,
            webkitVideoDecodedByteCount: 0,
            onencrypted: null,
            onwaitingforkey: null,
            srcObject: null,
            sinkId: "",
            remote: rsvm.prototype.RemotePlayback.new(),
            disableRemotePlayback: false,
            mediaKeys: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLMediaElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLMediaElement.prototype);
            rsvm.set(obj, "nodeName", "media".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "media");
            rsvm.set(obj, "tagName", "media".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLMediaElement, {
        prototype: { value: HTMLMediaElement.prototype, writable: false, enumerable: false, configurable: false },
        NETWORK_EMPTY: { value: 0, writable: false, enumerable: true, configurable: false },
        NETWORK_IDLE: { value: 1, writable: false, enumerable: true, configurable: false },
        NETWORK_LOADING: { value: 2, writable: false, enumerable: true, configurable: false },
        NETWORK_NO_SOURCE: { value: 3, writable: false, enumerable: true, configurable: false },
        HAVE_NOTHING: { value: 0, writable: false, enumerable: true, configurable: false },
        HAVE_METADATA: { value: 1, writable: false, enumerable: true, configurable: false },
        HAVE_CURRENT_DATA: { value: 2, writable: false, enumerable: true, configurable: false },
        HAVE_FUTURE_DATA: { value: 3, writable: false, enumerable: true, configurable: false },
        HAVE_ENOUGH_DATA: { value: 4, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(HTMLMediaElement.prototype, {
        error: {
            get: rsvm.RsCreateGetter("error", function error() {
                return rsvm.get(this, "error");
            }), set: undefined, enumerable: true, configurable: true,
        },
        src: {
            get: rsvm.RsCreateGetter("src", function src() {
                return rsvm.get(this, "src");
            }), set: rsvm.RsCreateSetter("src", function src() {
                rsvm.set(this, "src", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        currentSrc: {
            get: rsvm.RsCreateGetter("currentSrc", function currentSrc() {
                return rsvm.get(this, "currentSrc");
            }), set: undefined, enumerable: true, configurable: true,
        },
        crossOrigin: {
            get: rsvm.RsCreateGetter("crossOrigin", function crossOrigin() {
                return rsvm.get(this, "crossOrigin");
            }), set: rsvm.RsCreateSetter("crossOrigin", function crossOrigin() {
                rsvm.set(this, "crossOrigin", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        networkState: {
            get: rsvm.RsCreateGetter("networkState", function networkState() {
                return rsvm.get(this, "networkState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        preload: {
            get: rsvm.RsCreateGetter("preload", function preload() {
                return rsvm.get(this, "preload");
            }), set: rsvm.RsCreateSetter("preload", function preload() {
                rsvm.set(this, "preload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        buffered: {
            get: rsvm.RsCreateGetter("buffered", function buffered() {
                return rsvm.get(this, "buffered");
            }), set: undefined, enumerable: true, configurable: true,
        },
        readyState: {
            get: rsvm.RsCreateGetter("readyState", function readyState() {
                return rsvm.get(this, "readyState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        seeking: {
            get: rsvm.RsCreateGetter("seeking", function seeking() {
                return rsvm.get(this, "seeking");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentTime: {
            get: rsvm.RsCreateGetter("currentTime", function currentTime() {
                return rsvm.get(this, "currentTime");
            }), set: rsvm.RsCreateSetter("currentTime", function currentTime() {
                rsvm.set(this, "currentTime", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        duration: {
            get: rsvm.RsCreateGetter("duration", function duration() {
                return rsvm.get(this, "duration");
            }), set: undefined, enumerable: true, configurable: true,
        },
        paused: {
            get: rsvm.RsCreateGetter("paused", function paused() {
                return rsvm.get(this, "paused");
            }), set: undefined, enumerable: true, configurable: true,
        },
        defaultPlaybackRate: {
            get: rsvm.RsCreateGetter("defaultPlaybackRate", function defaultPlaybackRate() {
                return rsvm.get(this, "defaultPlaybackRate");
            }), set: rsvm.RsCreateSetter("defaultPlaybackRate", function defaultPlaybackRate() {
                rsvm.set(this, "defaultPlaybackRate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        playbackRate: {
            get: rsvm.RsCreateGetter("playbackRate", function playbackRate() {
                return rsvm.get(this, "playbackRate");
            }), set: rsvm.RsCreateSetter("playbackRate", function playbackRate() {
                rsvm.set(this, "playbackRate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        played: {
            get: rsvm.RsCreateGetter("played", function played() {
                return rsvm.get(this, "played");
            }), set: undefined, enumerable: true, configurable: true,
        },
        seekable: {
            get: rsvm.RsCreateGetter("seekable", function seekable() {
                return rsvm.get(this, "seekable");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ended: {
            get: rsvm.RsCreateGetter("ended", function ended() {
                return rsvm.get(this, "ended");
            }), set: undefined, enumerable: true, configurable: true,
        },
        autoplay: {
            get: rsvm.RsCreateGetter("autoplay", function autoplay() {
                return rsvm.get(this, "autoplay");
            }), set: rsvm.RsCreateSetter("autoplay", function autoplay() {
                rsvm.set(this, "autoplay", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        loop: {
            get: rsvm.RsCreateGetter("loop", function loop() {
                return rsvm.get(this, "loop");
            }), set: rsvm.RsCreateSetter("loop", function loop() {
                rsvm.set(this, "loop", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        preservesPitch: {
            get: rsvm.RsCreateGetter("preservesPitch", function preservesPitch() {
                return rsvm.get(this, "preservesPitch");
            }), set: rsvm.RsCreateSetter("preservesPitch", function preservesPitch() {
                rsvm.set(this, "preservesPitch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        controls: {
            get: rsvm.RsCreateGetter("controls", function controls() {
                return rsvm.get(this, "controls");
            }), set: rsvm.RsCreateSetter("controls", function controls() {
                rsvm.set(this, "controls", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        controlsList: {
            get: rsvm.RsCreateGetter("controlsList", function controlsList() {
                return rsvm.get(this, "controlsList");
            }), set: rsvm.RsCreateSetter("controlsList", function controlsList() {
                rsvm.set(this, "controlsList", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        volume: {
            get: rsvm.RsCreateGetter("volume", function volume() {
                return rsvm.get(this, "volume");
            }), set: rsvm.RsCreateSetter("volume", function volume() {
                rsvm.set(this, "volume", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        muted: {
            get: rsvm.RsCreateGetter("muted", function muted() {
                return rsvm.get(this, "muted");
            }), set: rsvm.RsCreateSetter("muted", function muted() {
                rsvm.set(this, "muted", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        defaultMuted: {
            get: rsvm.RsCreateGetter("defaultMuted", function defaultMuted() {
                return rsvm.get(this, "defaultMuted");
            }), set: rsvm.RsCreateSetter("defaultMuted", function defaultMuted() {
                rsvm.set(this, "defaultMuted", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        textTracks: {
            get: rsvm.RsCreateGetter("textTracks", function textTracks() {
                return rsvm.get(this, "textTracks");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitAudioDecodedByteCount: {
            get: rsvm.RsCreateGetter("webkitAudioDecodedByteCount", function webkitAudioDecodedByteCount() {
                return rsvm.get(this, "webkitAudioDecodedByteCount");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitVideoDecodedByteCount: {
            get: rsvm.RsCreateGetter("webkitVideoDecodedByteCount", function webkitVideoDecodedByteCount() {
                return rsvm.get(this, "webkitVideoDecodedByteCount");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onencrypted: {
            get: rsvm.RsCreateGetter("onencrypted", function onencrypted() {
                return rsvm.get(this, "onencrypted");
            }), set: rsvm.RsCreateSetter("onencrypted", function onencrypted() {
                rsvm.set(this, "onencrypted", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwaitingforkey: {
            get: rsvm.RsCreateGetter("onwaitingforkey", function onwaitingforkey() {
                return rsvm.get(this, "onwaitingforkey");
            }), set: rsvm.RsCreateSetter("onwaitingforkey", function onwaitingforkey() {
                rsvm.set(this, "onwaitingforkey", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        srcObject: {
            get: rsvm.RsCreateGetter("srcObject", function srcObject() {
                return rsvm.get(this, "srcObject");
            }), set: rsvm.RsCreateSetter("srcObject", function srcObject() {
                rsvm.set(this, "srcObject", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        NETWORK_EMPTY: { value: 0, writable: false, enumerable: true, configurable: false, },
        NETWORK_IDLE: { value: 1, writable: false, enumerable: true, configurable: false, },
        NETWORK_LOADING: { value: 2, writable: false, enumerable: true, configurable: false, },
        NETWORK_NO_SOURCE: { value: 3, writable: false, enumerable: true, configurable: false, },
        HAVE_NOTHING: { value: 0, writable: false, enumerable: true, configurable: false, },
        HAVE_METADATA: { value: 1, writable: false, enumerable: true, configurable: false, },
        HAVE_CURRENT_DATA: { value: 2, writable: false, enumerable: true, configurable: false, },
        HAVE_FUTURE_DATA: { value: 3, writable: false, enumerable: true, configurable: false, },
        HAVE_ENOUGH_DATA: { value: 4, writable: false, enumerable: true, configurable: false, },
        addTextTrack: {
            value: rsvm.RsCreateAction("addTextTrack", 1, function addTextTrack() {
            }), writable: true, enumerable: true, configurable: true,
        },
        canPlayType: {
            value: rsvm.RsCreateAction("canPlayType", 1, function canPlayType() {
                if (this.localName === 'audio') {
                    switch (arguments[0]) {
                        case 'audio/ogg; codecs="vorbis"':
                            return 'probably';
                        case 'audio/wav; codecs="1"':
                            return 'probably';
                        case 'audio/mpeg;':
                            return 'probably';
                        case 'audio/x-m4a;audio/aac;':
                            return 'maybe';
                    }
                } else if (this.localName === 'video') {
                    switch (arguments[0]) {
                        case 'video/ogg; codecs="theora"':
                            return 'probably';
                        case 'video/mp4; codecs="avc1.42E01E"':
                            return 'probably';
                        case 'video/webm; codecs="vp8, vorbis"':
                            return 'probably';
                        case 'video/mp4; codecs="mp4v.20.8, mp4a.40.2"':
                            return '';
                        case 'video/mp4; codecs="mp4v.20.240, mp4a.40.2"':
                            return '';
                        case 'video/x-matroska; codecs="theora, vorbis"':
                            return '';
                    }
                }

            }), writable: true, enumerable: true, configurable: true,
        },
        captureStream: {
            value: rsvm.RsCreateAction("captureStream", 0, function captureStream() {
            }), writable: true, enumerable: true, configurable: true,
        },
        load: {
            value: rsvm.RsCreateAction("load", 0, function load() {
            }), writable: true, enumerable: true, configurable: true,
        },
        pause: {
            value: rsvm.RsCreateAction("pause", 0, function pause() {
            }), writable: true, enumerable: true, configurable: true,
        },
        play: {
            value: rsvm.RsCreateAction("play", 0, function play() {
            }), writable: true, enumerable: true, configurable: true,
        },
        sinkId: {
            get: rsvm.RsCreateGetter("sinkId", function sinkId() {
                return rsvm.get(this, "sinkId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        remote: {
            get: rsvm.RsCreateGetter("remote", function remote() {
                return rsvm.get(this, "remote");
            }), set: undefined, enumerable: true, configurable: true,
        },
        disableRemotePlayback: {
            get: rsvm.RsCreateGetter("disableRemotePlayback", function disableRemotePlayback() {
                return rsvm.get(this, "disableRemotePlayback");
            }), set: rsvm.RsCreateSetter("disableRemotePlayback", function disableRemotePlayback() {
                rsvm.set(this, "disableRemotePlayback", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        setSinkId: {
            value: rsvm.RsCreateAction("setSinkId", 1, function setSinkId() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLMediaElement },
        mediaKeys: {
            get: rsvm.RsCreateGetter("mediaKeys", function mediaKeys() {
                return rsvm.get(this, "mediaKeys");
            }), set: undefined, enumerable: true, configurable: true,
        },
        setMediaKeys: {
            value: rsvm.RsCreateAction("setMediaKeys", 1, function setMediaKeys() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HTMLMediaElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLMediaElement, HTMLElement);
    Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype);
}();