!function () {
    Object.defineProperty(window, "PerformanceTiming", {
        value: rsvm.RsCreateConstructor("PerformanceTiming"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PerformanceTiming = {
        memory: {
            navigationStart: 1699779042570,
            unloadEventStart: 0,
            unloadEventEnd: 0,
            redirectStart: 0,
            redirectEnd: 0,
            fetchStart: 1699779042574,
            domainLookupStart: 1699779042574,
            domainLookupEnd: 1699779042574,
            connectStart: 1699779042574,
            connectEnd: 1699779042574,
            secureConnectionStart: 0,
            requestStart: 1699779042574,
            responseStart: 1699779042574,
            responseEnd: 1699779042596,
            domLoading: 1699779042662,
            domInteractive: 1699779042667,
            domContentLoadedEventStart: 1699779042691,
            domContentLoadedEventEnd: 1699779042691,
            domComplete: 1699779042702,
            loadEventStart: 1699779042702,
            loadEventEnd: 1699779042702,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PerformanceTiming", target);
        },
        new() {
            let obj = rsvm.RsCreate(PerformanceTiming.prototype);
            return obj;
        },
    };

    Object.defineProperties(PerformanceTiming, {
        prototype: { value: PerformanceTiming.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PerformanceTiming.prototype, {
        navigationStart: {
            get: rsvm.RsCreateGetter("navigationStart", function navigationStart() {
                return rsvm.get(this, "navigationStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        unloadEventStart: {
            get: rsvm.RsCreateGetter("unloadEventStart", function unloadEventStart() {
                return rsvm.get(this, "unloadEventStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        unloadEventEnd: {
            get: rsvm.RsCreateGetter("unloadEventEnd", function unloadEventEnd() {
                return rsvm.get(this, "unloadEventEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        redirectStart: {
            get: rsvm.RsCreateGetter("redirectStart", function redirectStart() {
                return rsvm.get(this, "redirectStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        redirectEnd: {
            get: rsvm.RsCreateGetter("redirectEnd", function redirectEnd() {
                return rsvm.get(this, "redirectEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fetchStart: {
            get: rsvm.RsCreateGetter("fetchStart", function fetchStart() {
                return rsvm.get(this, "fetchStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domainLookupStart: {
            get: rsvm.RsCreateGetter("domainLookupStart", function domainLookupStart() {
                return rsvm.get(this, "domainLookupStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domainLookupEnd: {
            get: rsvm.RsCreateGetter("domainLookupEnd", function domainLookupEnd() {
                return rsvm.get(this, "domainLookupEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        connectStart: {
            get: rsvm.RsCreateGetter("connectStart", function connectStart() {
                return rsvm.get(this, "connectStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        connectEnd: {
            get: rsvm.RsCreateGetter("connectEnd", function connectEnd() {
                return rsvm.get(this, "connectEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        secureConnectionStart: {
            get: rsvm.RsCreateGetter("secureConnectionStart", function secureConnectionStart() {
                return rsvm.get(this, "secureConnectionStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        requestStart: {
            get: rsvm.RsCreateGetter("requestStart", function requestStart() {
                return rsvm.get(this, "requestStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseStart: {
            get: rsvm.RsCreateGetter("responseStart", function responseStart() {
                return rsvm.get(this, "responseStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseEnd: {
            get: rsvm.RsCreateGetter("responseEnd", function responseEnd() {
                return rsvm.get(this, "responseEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domLoading: {
            get: rsvm.RsCreateGetter("domLoading", function domLoading() {
                return rsvm.get(this, "domLoading");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domInteractive: {
            get: rsvm.RsCreateGetter("domInteractive", function domInteractive() {
                return rsvm.get(this, "domInteractive");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domContentLoadedEventStart: {
            get: rsvm.RsCreateGetter("domContentLoadedEventStart", function domContentLoadedEventStart() {
                return rsvm.get(this, "domContentLoadedEventStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domContentLoadedEventEnd: {
            get: rsvm.RsCreateGetter("domContentLoadedEventEnd", function domContentLoadedEventEnd() {
                return rsvm.get(this, "domContentLoadedEventEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        domComplete: {
            get: rsvm.RsCreateGetter("domComplete", function domComplete() {
                return rsvm.get(this, "domComplete");
            }), set: undefined, enumerable: true, configurable: true,
        },
        loadEventStart: {
            get: rsvm.RsCreateGetter("loadEventStart", function loadEventStart() {
                return rsvm.get(this, "loadEventStart");
            }), set: undefined, enumerable: true, configurable: true,
        },
        loadEventEnd: {
            get: rsvm.RsCreateGetter("loadEventEnd", function loadEventEnd() {
                return rsvm.get(this, "loadEventEnd");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PerformanceTiming },
        [Symbol.toStringTag]: { value: "PerformanceTiming", writable: false, enumerable: false, configurable: true, },
    });
}();