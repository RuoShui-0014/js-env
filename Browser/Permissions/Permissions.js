!function () {
    Object.defineProperty(window, "Permissions", {
        value: rsvm.RsCreateConstructor("Permissions"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Permissions = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Permissions", target);
        },
        new() {
            let obj = rsvm.RsCreate(Permissions.prototype);
            return obj;
        },
    };

    Object.defineProperties(Permissions, {
        prototype: { value: Permissions.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Permissions.prototype, {
        query: {
            value: rsvm.RsCreateAction("query", 1, function query() {
                switch (arguments[0]["name"]) {
                    case "geolocation":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "geolocation");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "prompt");
                        return Promise.resolve(result);
                    case "notifications":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "notifications");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "prompt");
                        return Promise.resolve(result);
                    case "push":
                        var err = new DOMException("Failed to execute 'query' on 'Permissions': Push Permission without userVisibleOnly:true isn't supported yet.");
                        rsvm.set(err, "code", 9);
                        rsvm.set(err, "name", "NotSupportedError");
                        return Promise.reject(err);
                    case "midi":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "midi");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                    case "camera":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "video_capture");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "prompt");
                        return Promise.resolve(result);
                    case "microphone":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "audio_capture");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "prompt");
                        return Promise.resolve(result);
                    case "speaker":
                        var err = new TypeError(`Failed to execute 'query' on 'Permissions': Failed to read the 'name' property from 'PermissionDescriptor': The provided value 'speaker' is not a valid enum value of type PermissionName.`);
                        return Promise.reject(err);
                    case "device-info":
                        var err = new TypeError(`Failed to execute 'query' on 'Permissions': Failed to read the 'name' property from 'PermissionDescriptor': The provided value 'device-info' is not a valid enum value of type PermissionName.`);
                        return Promise.reject(err);
                    case "background-sync":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "background_sync");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                    case "bluetooth":
                        var err = new TypeError(`Failed to execute 'query' on 'Permissions': Failed to read the 'name' property from 'PermissionDescriptor': The provided value 'bluetooth' is not a valid enum value of type PermissionName.`);
                        return Promise.reject(err);
                    case "persistent-storage":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "durable_storage");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "prompt");
                        return Promise.resolve(result);
                    case "ambient-light-sensor":
                        var err = new TypeError(`Failed to execute 'query' on 'Permissions': GenericSensorExtraClasses flag is not enabled.`);
                        return Promise.reject(err);
                    case "accelerometer":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "sensors");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                    case "gyroscope":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "sensors");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                    case "magnetometer":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "sensors");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                    case "clipboard":
                        var err = new TypeError(`Failed to execute 'query' on 'Permissions': Failed to read the 'name' property from 'PermissionDescriptor': The provided value 'clipboard' is not a valid enum value of type PermissionName.`);
                        return Promise.reject(err);
                    case "accessibility-events":
                        var err = new TypeError(`Failed to execute 'query' on 'Permissions': Accessibility Object Model is not enabled.`);
                        return Promise.reject(err);
                    case "clipboard-read":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "clipboard-read");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "prompt");
                        return Promise.resolve(result);
                    case "clipboard-write":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "clipboard-write");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                    case "payment-handler":
                        var result = rsvm.prototype.PermissionStatus.new();
                        rsvm.set(result, "name", "payment_handler");
                        rsvm.set(result, "onchange", null);
                        rsvm.set(result, "state", "granted");
                        return Promise.resolve(result);
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Permissions },
        [Symbol.toStringTag]: { value: "Permissions", writable: false, enumerable: false, configurable: true, },
    });
}();