!function () {
    Object.defineProperty(window, "MediaSession", {
        value: rsvm.RsCreateConstructor("MediaSession"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MediaSession = {
        memory: {
            metadata: null,
            playbackState: "none",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MediaSession", target);
        },
        new() {
            let obj = rsvm.RsCreate(MediaSession.prototype);
            return obj;
        },
    };

    Object.defineProperties(MediaSession, {
        prototype: { value: MediaSession.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MediaSession.prototype, {
        metadata: {
            get: rsvm.RsCreateGetter("metadata", function metadata() {
                return rsvm.get(this, "metadata");
            }), set: rsvm.RsCreateSetter("metadata", function metadata() {
                rsvm.set(this, "metadata", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        playbackState: {
            get: rsvm.RsCreateGetter("playbackState", function playbackState() {
                return rsvm.get(this, "playbackState");
            }), set: rsvm.RsCreateSetter("playbackState", function playbackState() {
                rsvm.set(this, "playbackState", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        setActionHandler: {
            value: rsvm.RsCreateAction("setActionHandler", 2, function setActionHandler() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setCameraActive: {
            value: rsvm.RsCreateAction("setCameraActive", 1, function setCameraActive() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setMicrophoneActive: {
            value: rsvm.RsCreateAction("setMicrophoneActive", 1, function setMicrophoneActive() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setPositionState: {
            value: rsvm.RsCreateAction("setPositionState", 0, function setPositionState() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MediaSession },
        [Symbol.toStringTag]: { value: "MediaSession", writable: false, enumerable: false, configurable: true, },
    });
}();