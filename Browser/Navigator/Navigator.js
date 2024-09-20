!function () {
    Object.defineProperty(window, "Navigator", {
        value: rsvm.RsCreateConstructor("Navigator"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Navigator = {
        memory: {
            vendorSub: "",
            productSub: "20030107",
            vendor: "Google Inc.",
            maxTouchPoints: 0,
            scheduling: rsvm.prototype.Scheduling.new(),
            userActivation: rsvm.prototype.UserActivation.new(),
            doNotTrack: null,
            geolocation: rsvm.prototype.Geolocation.new(),
            connection: rsvm.prototype.NetworkInformation.new(),
            plugins: rsvm.prototype.PluginArray.new(),
            mimeTypes: rsvm.prototype.MimeTypeArray.new(),
            pdfViewerEnabled: true,
            webkitTemporaryStorage: rsvm.prototype.DeprecatedStorageQuota.new(),
            webkitPersistentStorage: rsvm.prototype.DeprecatedStorageQuota.new(),
            hardwareConcurrency: 20,
            cookieEnabled: true,
            appCodeName: "Mozilla",
            appName: "Netscape",
            appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
            platform: "Win32",
            product: "Gecko",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
            language: "zh-CN",
            languages: ["zh-CN",],
            onLine: true,
            webdriver: false,
            deprecatedRunAdAuctionEnforcesKAnonymity: false,
            bluetooth: rsvm.prototype.Bluetooth.new(),
            clipboard: rsvm.prototype.Clipboard.new(),
            credentials: rsvm.prototype.CredentialsContainer.new(),
            keyboard: rsvm.prototype.Keyboard.new(),
            managed: rsvm.prototype.NavigatorManagedData.new(),
            mediaDevices: rsvm.prototype.MediaDevices.new(),
            storage: rsvm.prototype.StorageManager.new(),
            serviceWorker: rsvm.prototype.ServiceWorkerContainer.new(),
            virtualKeyboard: rsvm.prototype.VirtualKeyboard.new(),
            wakeLock: rsvm.prototype.WakeLock.new(),
            deviceMemory: 8,
            ink: rsvm.prototype.Ink.new(),
            hid: rsvm.prototype.HID.new(),
            locks: rsvm.prototype.LockManager.new(),
            gpu: rsvm.prototype.GPU.new(),
            mediaCapabilities: rsvm.prototype.MediaCapabilities.new(),
            mediaSession: rsvm.prototype.MediaSession.new(),
            permissions: rsvm.prototype.Permissions.new(),
            presentation: rsvm.prototype.Presentation.new(),
            usb: rsvm.prototype.USB.new(),
            xr: rsvm.prototype.XRSystem.new(),
            serial: rsvm.prototype.Serial.new(),
            windowControlsOverlay: rsvm.prototype.WindowControlsOverlay.new(),
            userAgentData: rsvm.prototype.NavigatorUAData.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Navigator", target);
        },
        new() {
            let obj = rsvm.RsCreate(Navigator.prototype);
            // rsvm.set(obj.mimeTypes[0], 'enabledPlugin', obj.plugins[0]);
            // rsvm.set(obj.mimeTypes[1], 'enabledPlugin', obj.plugins[1]);
            return obj;
        },
    };

    Object.defineProperties(Navigator, {
        prototype: { value: Navigator.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Navigator.prototype, {
        vendorSub: {
            get: rsvm.RsCreateGetter("vendorSub", function vendorSub() {
                return rsvm.get(this, "vendorSub");
            }), set: undefined, enumerable: true, configurable: true,
        },
        productSub: {
            get: rsvm.RsCreateGetter("productSub", function productSub() {
                return rsvm.get(this, "productSub");
            }), set: undefined, enumerable: true, configurable: true,
        },
        vendor: {
            get: rsvm.RsCreateGetter("vendor", function vendor() {
                return rsvm.get(this, "vendor");
            }), set: undefined, enumerable: true, configurable: true,
        },
        maxTouchPoints: {
            get: rsvm.RsCreateGetter("maxTouchPoints", function maxTouchPoints() {
                return rsvm.get(this, "maxTouchPoints");
            }), set: undefined, enumerable: true, configurable: true,
        },
        scheduling: {
            get: rsvm.RsCreateGetter("scheduling", function scheduling() {
                return rsvm.get(this, "scheduling");
            }), set: undefined, enumerable: true, configurable: true,
        },
        userActivation: {
            get: rsvm.RsCreateGetter("userActivation", function userActivation() {
                return rsvm.get(this, "userActivation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        doNotTrack: {
            get: rsvm.RsCreateGetter("doNotTrack", function doNotTrack() {
                return rsvm.get(this, "doNotTrack");
            }), set: undefined, enumerable: true, configurable: true,
        },
        geolocation: {
            get: rsvm.RsCreateGetter("geolocation", function geolocation() {
                return rsvm.get(this, "geolocation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        connection: {
            get: rsvm.RsCreateGetter("connection", function connection() {
                return rsvm.get(this, "connection");
            }), set: undefined, enumerable: true, configurable: true,
        },
        plugins: {
            get: rsvm.RsCreateGetter("plugins", function plugins() {
                return rsvm.get(this, "plugins");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mimeTypes: {
            get: rsvm.RsCreateGetter("mimeTypes", function mimeTypes() {
                return rsvm.get(this, "mimeTypes");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pdfViewerEnabled: {
            get: rsvm.RsCreateGetter("pdfViewerEnabled", function pdfViewerEnabled() {
                return rsvm.get(this, "pdfViewerEnabled");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitTemporaryStorage: {
            get: rsvm.RsCreateGetter("webkitTemporaryStorage", function webkitTemporaryStorage() {
                return rsvm.get(this, "webkitTemporaryStorage");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitPersistentStorage: {
            get: rsvm.RsCreateGetter("webkitPersistentStorage", function webkitPersistentStorage() {
                return rsvm.get(this, "webkitPersistentStorage");
            }), set: undefined, enumerable: true, configurable: true,
        },
        hardwareConcurrency: {
            get: rsvm.RsCreateGetter("hardwareConcurrency", function hardwareConcurrency() {
                return rsvm.siteInfo.hardwareConcurrency;
            }), set: undefined, enumerable: true, configurable: true,
        },
        cookieEnabled: {
            get: rsvm.RsCreateGetter("cookieEnabled", function cookieEnabled() {
                return rsvm.get(this, "cookieEnabled");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appCodeName: {
            get: rsvm.RsCreateGetter("appCodeName", function appCodeName() {
                return rsvm.siteInfo.userAgent.match(/(\w+)\//)[1];
            }), set: undefined, enumerable: true, configurable: true,
        },
        appName: {
            get: rsvm.RsCreateGetter("appName", function appName() {
                return rsvm.get(this, "appName");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appVersion: {
            get: rsvm.RsCreateGetter("appVersion", function appVersion() {
                return rsvm.siteInfo.userAgent.match(/\w+\/(.*)/)[1];
            }), set: undefined, enumerable: true, configurable: true,
        },
        platform: {
            get: rsvm.RsCreateGetter("platform", function platform() {
                return rsvm.get(this, "platform");
            }), set: undefined, enumerable: true, configurable: true,
        },
        product: {
            get: rsvm.RsCreateGetter("product", function product() {
                return rsvm.get(this, "product");
            }), set: undefined, enumerable: true, configurable: true,
        },
        userAgent: {
            get: rsvm.RsCreateGetter("userAgent", function userAgent() {
                return rsvm.siteInfo.userAgent;
            }), set: undefined, enumerable: true, configurable: true,
        },
        language: {
            get: rsvm.RsCreateGetter("language", function language() {
                return rsvm.siteInfo.languages[0];
            }), set: undefined, enumerable: true, configurable: true,
        },
        languages: {
            get: rsvm.RsCreateGetter("languages", function languages() {
                return rsvm.siteInfo.languages;
            }), set: undefined, enumerable: true, configurable: true,
        },
        onLine: {
            get: rsvm.RsCreateGetter("onLine", function onLine() {
                return rsvm.get(this, "onLine");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webdriver: {
            get: rsvm.RsCreateGetter("webdriver", function webdriver() {
                return rsvm.get(this, "webdriver");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getGamepads: {
            value: rsvm.RsCreateAction("getGamepads", 0, function getGamepads() {
                return [null, null, null, null];
            }), writable: true, enumerable: true, configurable: true,
        },
        javaEnabled: {
            value: rsvm.RsCreateAction("javaEnabled", 0, function javaEnabled() {
                return false;
            }), writable: true, enumerable: true, configurable: true,
        },
        sendBeacon: {
            value: rsvm.RsCreateAction("sendBeacon", 1, function sendBeacon() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vibrate: {
            value: rsvm.RsCreateAction("vibrate", 1, function vibrate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Navigator },
        deprecatedRunAdAuctionEnforcesKAnonymity: {
            get: rsvm.RsCreateGetter("deprecatedRunAdAuctionEnforcesKAnonymity", function deprecatedRunAdAuctionEnforcesKAnonymity() {
                return rsvm.get(this, "deprecatedRunAdAuctionEnforcesKAnonymity");
            }), set: undefined, enumerable: true, configurable: true,
        },
        bluetooth: {
            get: rsvm.RsCreateGetter("bluetooth", function bluetooth() {
                return rsvm.get(this, "bluetooth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clipboard: {
            get: rsvm.RsCreateGetter("clipboard", function clipboard() {
                return rsvm.get(this, "clipboard");
            }), set: undefined, enumerable: true, configurable: true,
        },
        credentials: {
            get: rsvm.RsCreateGetter("credentials", function credentials() {
                return rsvm.get(this, "credentials");
            }), set: undefined, enumerable: true, configurable: true,
        },
        keyboard: {
            get: rsvm.RsCreateGetter("keyboard", function keyboard() {
                return rsvm.get(this, "keyboard");
            }), set: undefined, enumerable: true, configurable: true,
        },
        managed: {
            get: rsvm.RsCreateGetter("managed", function managed() {
                return rsvm.get(this, "managed");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mediaDevices: {
            get: rsvm.RsCreateGetter("mediaDevices", function mediaDevices() {
                return rsvm.get(this, "mediaDevices");
            }), set: undefined, enumerable: true, configurable: true,
        },
        storage: {
            get: rsvm.RsCreateGetter("storage", function storage() {
                return rsvm.get(this, "storage");
            }), set: undefined, enumerable: true, configurable: true,
        },
        serviceWorker: {
            get: rsvm.RsCreateGetter("serviceWorker", function serviceWorker() {
                return rsvm.get(this, "serviceWorker");
            }), set: undefined, enumerable: true, configurable: true,
        },
        virtualKeyboard: {
            get: rsvm.RsCreateGetter("virtualKeyboard", function virtualKeyboard() {
                return rsvm.get(this, "virtualKeyboard");
            }), set: undefined, enumerable: true, configurable: true,
        },
        wakeLock: {
            get: rsvm.RsCreateGetter("wakeLock", function wakeLock() {
                return rsvm.get(this, "wakeLock");
            }), set: undefined, enumerable: true, configurable: true,
        },
        deviceMemory: {
            get: rsvm.RsCreateGetter("deviceMemory", function deviceMemory() {
                return rsvm.get(this, "deviceMemory");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ink: {
            get: rsvm.RsCreateGetter("ink", function ink() {
                return rsvm.get(this, "ink");
            }), set: undefined, enumerable: true, configurable: true,
        },
        hid: {
            get: rsvm.RsCreateGetter("hid", function hid() {
                return rsvm.get(this, "hid");
            }), set: undefined, enumerable: true, configurable: true,
        },
        locks: {
            get: rsvm.RsCreateGetter("locks", function locks() {
                return rsvm.get(this, "locks");
            }), set: undefined, enumerable: true, configurable: true,
        },
        gpu: {
            get: rsvm.RsCreateGetter("gpu", function gpu() {
                return rsvm.get(this, "gpu");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mediaCapabilities: {
            get: rsvm.RsCreateGetter("mediaCapabilities", function mediaCapabilities() {
                return rsvm.get(this, "mediaCapabilities");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mediaSession: {
            get: rsvm.RsCreateGetter("mediaSession", function mediaSession() {
                return rsvm.get(this, "mediaSession");
            }), set: undefined, enumerable: true, configurable: true,
        },
        permissions: {
            get: rsvm.RsCreateGetter("permissions", function permissions() {
                return rsvm.get(this, "permissions");
            }), set: undefined, enumerable: true, configurable: true,
        },
        presentation: {
            get: rsvm.RsCreateGetter("presentation", function presentation() {
                return rsvm.get(this, "presentation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        usb: {
            get: rsvm.RsCreateGetter("usb", function usb() {
                return rsvm.get(this, "usb");
            }), set: undefined, enumerable: true, configurable: true,
        },
        xr: {
            get: rsvm.RsCreateGetter("xr", function xr() {
                return rsvm.get(this, "xr");
            }), set: undefined, enumerable: true, configurable: true,
        },
        serial: {
            get: rsvm.RsCreateGetter("serial", function serial() {
                return rsvm.get(this, "serial");
            }), set: undefined, enumerable: true, configurable: true,
        },
        windowControlsOverlay: {
            get: rsvm.RsCreateGetter("windowControlsOverlay", function windowControlsOverlay() {
                return rsvm.get(this, "windowControlsOverlay");
            }), set: undefined, enumerable: true, configurable: true,
        },
        userAgentData: {
            get: rsvm.RsCreateGetter("userAgentData", function userAgentData() {
                return rsvm.get(this, "userAgentData");
            }), set: undefined, enumerable: true, configurable: true,
        },
        adAuctionComponents: {
            value: rsvm.RsCreateAction("adAuctionComponents", 1, function adAuctionComponents() {
            }), writable: true, enumerable: true, configurable: true,
        },
        runAdAuction: {
            value: rsvm.RsCreateAction("runAdAuction", 1, function runAdAuction() {
            }), writable: true, enumerable: true, configurable: true,
        },
        canLoadAdAuctionFencedFrame: {
            value: rsvm.RsCreateAction("canLoadAdAuctionFencedFrame", 0, function canLoadAdAuctionFencedFrame() {
            }), writable: true, enumerable: true, configurable: true,
        },
        canShare: {
            value: rsvm.RsCreateAction("canShare", 0, function canShare() {
            }), writable: true, enumerable: true, configurable: true,
        },
        share: {
            value: rsvm.RsCreateAction("share", 0, function share() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearAppBadge: {
            value: rsvm.RsCreateAction("clearAppBadge", 0, function clearAppBadge() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getBattery: {
            value: rsvm.RsCreateAction("getBattery", 0, function getBattery() {
                return new Promise((resolve, reject)=>{
                    resolve(rsvm.prototype.BatteryManager.new());
                });
            }), writable: true, enumerable: true, configurable: true,
        },
        getUserMedia: {
            value: rsvm.RsCreateAction("getUserMedia", 3, function getUserMedia() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestMIDIAccess: {
            value: rsvm.RsCreateAction("requestMIDIAccess", 0, function requestMIDIAccess() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestMediaKeySystemAccess: {
            value: rsvm.RsCreateAction("requestMediaKeySystemAccess", 2, function requestMediaKeySystemAccess() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setAppBadge: {
            value: rsvm.RsCreateAction("setAppBadge", 0, function setAppBadge() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitGetUserMedia: {
            value: rsvm.RsCreateAction("webkitGetUserMedia", 3, function webkitGetUserMedia() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deprecatedReplaceInURN: {
            value: rsvm.RsCreateAction("deprecatedReplaceInURN", 2, function deprecatedReplaceInURN() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deprecatedURNToURL: {
            value: rsvm.RsCreateAction("deprecatedURNToURL", 1, function deprecatedURNToURL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getInstalledRelatedApps: {
            value: rsvm.RsCreateAction("getInstalledRelatedApps", 0, function getInstalledRelatedApps() {
            }), writable: true, enumerable: true, configurable: true,
        },
        joinAdInterestGroup: {
            value: rsvm.RsCreateAction("joinAdInterestGroup", 1, function joinAdInterestGroup() {
            }), writable: true, enumerable: true, configurable: true,
        },
        leaveAdInterestGroup: {
            value: rsvm.RsCreateAction("leaveAdInterestGroup", 0, function leaveAdInterestGroup() {
            }), writable: true, enumerable: true, configurable: true,
        },
        updateAdInterestGroups: {
            value: rsvm.RsCreateAction("updateAdInterestGroups", 0, function updateAdInterestGroups() {
            }), writable: true, enumerable: true, configurable: true,
        },
        registerProtocolHandler: {
            value: rsvm.RsCreateAction("registerProtocolHandler", 2, function registerProtocolHandler() {
            }), writable: true, enumerable: true, configurable: true,
        },
        unregisterProtocolHandler: {
            value: rsvm.RsCreateAction("unregisterProtocolHandler", 2, function unregisterProtocolHandler() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Navigator", writable: false, enumerable: false, configurable: true, },
    });
}();