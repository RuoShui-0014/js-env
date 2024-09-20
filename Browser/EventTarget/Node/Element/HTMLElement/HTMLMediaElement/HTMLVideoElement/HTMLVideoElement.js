!function () {
    Object.defineProperty(window, "HTMLVideoElement", {
        value: rsvm.RsCreateConstructor("HTMLVideoElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLVideoElement = {
        memory: {
            width: 0,
            height: 0,
            videoWidth: 0,
            videoHeight: 0,
            poster: "",
            webkitDecodedFrameCount: 0,
            webkitDroppedFrameCount: 0,
            playsInline: false,
            onenterpictureinpicture: null,
            onleavepictureinpicture: null,
            disablePictureInPicture: false,
            webkitSupportsFullscreen: true,
            webkitDisplayingFullscreen: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLVideoElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLVideoElement.prototype);
            rsvm.set(obj, "nodeName", "video".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "video");
            rsvm.set(obj, "tagName", "video".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLVideoElement, {
        prototype: { value: HTMLVideoElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLVideoElement.prototype, {
        width: {
            get: rsvm.RsCreateGetter("width", function width() {
                return rsvm.get(this, "width");
            }), set: rsvm.RsCreateSetter("width", function width() {
                rsvm.set(this, "width", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        height: {
            get: rsvm.RsCreateGetter("height", function height() {
                return rsvm.get(this, "height");
            }), set: rsvm.RsCreateSetter("height", function height() {
                rsvm.set(this, "height", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        videoWidth: {
            get: rsvm.RsCreateGetter("videoWidth", function videoWidth() {
                return rsvm.get(this, "videoWidth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        videoHeight: {
            get: rsvm.RsCreateGetter("videoHeight", function videoHeight() {
                return rsvm.get(this, "videoHeight");
            }), set: undefined, enumerable: true, configurable: true,
        },
        poster: {
            get: rsvm.RsCreateGetter("poster", function poster() {
                return rsvm.get(this, "poster");
            }), set: rsvm.RsCreateSetter("poster", function poster() {
                rsvm.set(this, "poster", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        webkitDecodedFrameCount: {
            get: rsvm.RsCreateGetter("webkitDecodedFrameCount", function webkitDecodedFrameCount() {
                return rsvm.get(this, "webkitDecodedFrameCount");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitDroppedFrameCount: {
            get: rsvm.RsCreateGetter("webkitDroppedFrameCount", function webkitDroppedFrameCount() {
                return rsvm.get(this, "webkitDroppedFrameCount");
            }), set: undefined, enumerable: true, configurable: true,
        },
        playsInline: {
            get: rsvm.RsCreateGetter("playsInline", function playsInline() {
                return rsvm.get(this, "playsInline");
            }), set: rsvm.RsCreateSetter("playsInline", function playsInline() {
                rsvm.set(this, "playsInline", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onenterpictureinpicture: {
            get: rsvm.RsCreateGetter("onenterpictureinpicture", function onenterpictureinpicture() {
                return rsvm.get(this, "onenterpictureinpicture");
            }), set: rsvm.RsCreateSetter("onenterpictureinpicture", function onenterpictureinpicture() {
                rsvm.set(this, "onenterpictureinpicture", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onleavepictureinpicture: {
            get: rsvm.RsCreateGetter("onleavepictureinpicture", function onleavepictureinpicture() {
                return rsvm.get(this, "onleavepictureinpicture");
            }), set: rsvm.RsCreateSetter("onleavepictureinpicture", function onleavepictureinpicture() {
                rsvm.set(this, "onleavepictureinpicture", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        disablePictureInPicture: {
            get: rsvm.RsCreateGetter("disablePictureInPicture", function disablePictureInPicture() {
                return rsvm.get(this, "disablePictureInPicture");
            }), set: rsvm.RsCreateSetter("disablePictureInPicture", function disablePictureInPicture() {
                rsvm.set(this, "disablePictureInPicture", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        cancelVideoFrameCallback: {
            value: rsvm.RsCreateAction("cancelVideoFrameCallback", 1, function cancelVideoFrameCallback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestPictureInPicture: {
            value: rsvm.RsCreateAction("requestPictureInPicture", 0, function requestPictureInPicture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestVideoFrameCallback: {
            value: rsvm.RsCreateAction("requestVideoFrameCallback", 1, function requestVideoFrameCallback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitSupportsFullscreen: {
            get: rsvm.RsCreateGetter("webkitSupportsFullscreen", function webkitSupportsFullscreen() {
                return rsvm.get(this, "webkitSupportsFullscreen");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitDisplayingFullscreen: {
            get: rsvm.RsCreateGetter("webkitDisplayingFullscreen", function webkitDisplayingFullscreen() {
                return rsvm.get(this, "webkitDisplayingFullscreen");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getVideoPlaybackQuality: {
            value: rsvm.RsCreateAction("getVideoPlaybackQuality", 0, function getVideoPlaybackQuality() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitEnterFullScreen: {
            value: rsvm.RsCreateAction("webkitEnterFullScreen", 0, function webkitEnterFullScreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitEnterFullscreen: {
            value: rsvm.RsCreateAction("webkitEnterFullscreen", 0, function webkitEnterFullscreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitExitFullScreen: {
            value: rsvm.RsCreateAction("webkitExitFullScreen", 0, function webkitExitFullScreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitExitFullscreen: {
            value: rsvm.RsCreateAction("webkitExitFullscreen", 0, function webkitExitFullscreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLVideoElement },
        [Symbol.toStringTag]: { value: "HTMLVideoElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLVideoElement, HTMLMediaElement);
    Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
}();