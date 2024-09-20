!function () {
    Object.defineProperty(window, "BatteryManager", {
        value: rsvm.RsCreateConstructor("BatteryManager"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.BatteryManager = {
        memory: {
            charging: true,
            chargingTime: 0,
            dischargingTime: Infinity,
            level: 1,
            onchargingchange: null,
            onchargingtimechange: null,
            ondischargingtimechange: null,
            onlevelchange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("BatteryManager", target);
        },
        new() {
            let obj = rsvm.RsCreate(BatteryManager.prototype);
            return obj;
        },
    };

    Object.defineProperties(BatteryManager, {
        prototype: { value: BatteryManager.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(BatteryManager.prototype, {
        charging: {
            get: rsvm.RsCreateGetter("charging", function charging() {
                return rsvm.get(this, "charging");
            }), set: undefined, enumerable: true, configurable: true,
        },
        chargingTime: {
            get: rsvm.RsCreateGetter("chargingTime", function chargingTime() {
                return rsvm.get(this, "chargingTime");
            }), set: undefined, enumerable: true, configurable: true,
        },
        dischargingTime: {
            get: rsvm.RsCreateGetter("dischargingTime", function dischargingTime() {
                return rsvm.get(this, "dischargingTime");
            }), set: undefined, enumerable: true, configurable: true,
        },
        level: {
            get: rsvm.RsCreateGetter("level", function level() {
                return rsvm.get(this, "level");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onchargingchange: {
            get: rsvm.RsCreateGetter("onchargingchange", function onchargingchange() {
                return rsvm.get(this, "onchargingchange");
            }), set: rsvm.RsCreateSetter("onchargingchange", function onchargingchange() {
                rsvm.set(this, "onchargingchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onchargingtimechange: {
            get: rsvm.RsCreateGetter("onchargingtimechange", function onchargingtimechange() {
                return rsvm.get(this, "onchargingtimechange");
            }), set: rsvm.RsCreateSetter("onchargingtimechange", function onchargingtimechange() {
                rsvm.set(this, "onchargingtimechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondischargingtimechange: {
            get: rsvm.RsCreateGetter("ondischargingtimechange", function ondischargingtimechange() {
                return rsvm.get(this, "ondischargingtimechange");
            }), set: rsvm.RsCreateSetter("ondischargingtimechange", function ondischargingtimechange() {
                rsvm.set(this, "ondischargingtimechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onlevelchange: {
            get: rsvm.RsCreateGetter("onlevelchange", function onlevelchange() {
                return rsvm.get(this, "onlevelchange");
            }), set: rsvm.RsCreateSetter("onlevelchange", function onlevelchange() {
                rsvm.set(this, "onlevelchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: BatteryManager },
        [Symbol.toStringTag]: { value: "BatteryManager", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(BatteryManager, EventTarget);
    Object.setPrototypeOf(BatteryManager.prototype, EventTarget.prototype);
}();