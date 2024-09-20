!function () {
    Object.defineProperty(window, "MediaDeviceInfo", {
        value: rsvm.RsCreateConstructor("MediaDeviceInfo"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MediaDeviceInfo = {
        memory: {
            deviceId: "communications",
            kind: "audiooutput",
            label: "通讯 - 扬声器 (5- USB Audio Device) (1b3f:2008)",
            groupId: "a9993f1e145f06deb7009aee86e16ed21d79f5709e44b445cfd343f1491eaa12",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MediaDeviceInfo", target);
        },
        new() {
            let obj = rsvm.RsCreate(MediaDeviceInfo.prototype);
            return obj;
        },
    };

    Object.defineProperties(MediaDeviceInfo, {
        prototype: { value: MediaDeviceInfo.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MediaDeviceInfo.prototype, {
        deviceId: {
            get: rsvm.RsCreateGetter("deviceId", function deviceId() {
                return rsvm.get(this, "deviceId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        kind: {
            get: rsvm.RsCreateGetter("kind", function kind() {
                return rsvm.get(this, "kind");
            }), set: undefined, enumerable: true, configurable: true,
        },
        label: {
            get: rsvm.RsCreateGetter("label", function label() {
                return rsvm.get(this, "label");
            }), set: undefined, enumerable: true, configurable: true,
        },
        groupId: {
            get: rsvm.RsCreateGetter("groupId", function groupId() {
                return rsvm.get(this, "groupId");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction('toJSON', 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MediaDeviceInfo },
        [Symbol.toStringTag]: { value: "MediaDeviceInfo", writable: false, enumerable: false, configurable: true, },
    });
}();