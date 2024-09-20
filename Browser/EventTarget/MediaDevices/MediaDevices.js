!function () {
    Object.defineProperty(window, "MediaDevices", {
        value: rsvm.RsCreateConstructor("MediaDevices"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MediaDevices = {
        memory: {
            ondevicechange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MediaDevices", target);
        },
        new() {
            let obj = rsvm.RsCreate(MediaDevices.prototype);
            return obj;
        },
    };

    Object.defineProperties(MediaDevices, {
        prototype: { value: MediaDevices.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MediaDevices.prototype, {
        enumerateDevices: {
            value: rsvm.RsCreateAction("enumerateDevices", 0, function enumerateDevices() {
                return new Promise((resolve, reject) => {
                    resolve(rsvm.siteInfo.enumerateDevices);
                });
            }), writable: true, enumerable: true, configurable: true,
        },
        getSupportedConstraints: {
            value: rsvm.RsCreateAction("getSupportedConstraints", 0, function getSupportedConstraints() {
                return {
                    aspectRatio: true,
                    autoGainControl: true,
                    brightness: true,
                    channelCount: true,
                    colorTemperature: true,
                    contrast: true,
                    deviceId: true,
                    displaySurface: true,
                    echoCancellation: true,
                    exposureCompensation: true,
                    exposureMode: true,
                    exposureTime: true,
                    facingMode: true,
                    focusDistance: true,
                    focusMode: true,
                    frameRate: true,
                    groupId: true,
                    height: true,
                    iso: true,
                    latency: true,
                    noiseSuppression: true,
                    pan: true,
                    pointsOfInterest: true,
                    resizeMode: true,
                    sampleRate: true,
                    sampleSize: true,
                    saturation: true,
                    sharpness: true,
                    suppressLocalAudioPlayback: true,
                    tilt: true,
                    torch: true,
                    whiteBalanceMode: true,
                    width: true,
                    zoom: true,
                };
            }), writable: true, enumerable: true, configurable: true,
        },
        getUserMedia: {
            value: rsvm.RsCreateAction("getUserMedia", 0, function getUserMedia() {
                return new Promise((resolve, reject) => { reject(new TypeError()); });
            }), writable: true, enumerable: true, configurable: true,
        },
        ondevicechange: {
            get: rsvm.RsCreateGetter("ondevicechange", function ondevicechange() {
                return rsvm.get(this, "ondevicechange");
            }), set: rsvm.RsCreateSetter("ondevicechange", function ondevicechange() {
                rsvm.set(this, "ondevicechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getDisplayMedia: {
            value: rsvm.RsCreateAction("getDisplayMedia", 0, function getDisplayMedia() {
                return new Promise((resolve, reject) => {});
            }), writable: true, enumerable: true, configurable: true,
        },
        setCaptureHandleConfig: {
            value: rsvm.RsCreateAction("setCaptureHandleConfig", 0, function setCaptureHandleConfig() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MediaDevices },
        [Symbol.toStringTag]: { value: "MediaDevices", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(MediaDevices, EventTarget);
    Object.setPrototypeOf(MediaDevices.prototype, EventTarget.prototype);
}();