!function () {
    Object.defineProperty(window, "PerformanceResourceTiming", {
        value: rsvm.RsCreateConstructor("PerformanceResourceTiming"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.PerformanceResourceTiming = {
        memory: {
            initiatorType: "script",
            nextHopProtocol: "h2",
            workerStart: 0,
            redirectStart: 0,
            redirectEnd: 0,
            fetchStart: 3182.100000000559,
            domainLookupStart: 3182.100000000559,
            domainLookupEnd: 3182.100000000559,
            connectStart: 3182.100000000559,
            connectEnd: 3182.100000000559,
            secureConnectionStart: 3182.100000000559,
            requestStart: 3183.5,
            responseStart: 3203.4000000003725,
            responseEnd: 3227.7000000001863,
            transferSize: 125894,
            encodedBodySize: 125594,
            decodedBodySize: 260174,
            serverTiming: [],
            renderBlockingStatus: "non-blocking",
            responseStatus: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("PerformanceResourceTiming", target);
        },
        new() {
            let obj = rsvm.RsCreate(PerformanceResourceTiming.prototype);
            return obj;
        },
    };

    Object.defineProperties(PerformanceResourceTiming, {
        prototype: { value: PerformanceResourceTiming.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(PerformanceResourceTiming.prototype, {
        initiatorType: {
            get: rsvm.RsCreateGetter("initiatorType", function initiatorType() {
                return rsvm.get(this, "initiatorType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        nextHopProtocol: {
            get: rsvm.RsCreateGetter("nextHopProtocol", function nextHopProtocol() {
                return rsvm.get(this, "nextHopProtocol");
            }), set: undefined, enumerable: true, configurable: true,
        },
        workerStart: {
            get: rsvm.RsCreateGetter("workerStart", function workerStart() {
                return rsvm.get(this, "workerStart");
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
        transferSize: {
            get: rsvm.RsCreateGetter("transferSize", function transferSize() {
                return rsvm.get(this, "transferSize");
            }), set: undefined, enumerable: true, configurable: true,
        },
        encodedBodySize: {
            get: rsvm.RsCreateGetter("encodedBodySize", function encodedBodySize() {
                return rsvm.get(this, "encodedBodySize");
            }), set: undefined, enumerable: true, configurable: true,
        },
        decodedBodySize: {
            get: rsvm.RsCreateGetter("decodedBodySize", function decodedBodySize() {
                return rsvm.get(this, "decodedBodySize");
            }), set: undefined, enumerable: true, configurable: true,
        },
        serverTiming: {
            get: rsvm.RsCreateGetter("serverTiming", function serverTiming() {
                return rsvm.get(this, "serverTiming");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        renderBlockingStatus: {
            get: rsvm.RsCreateGetter("renderBlockingStatus", function renderBlockingStatus() {
                return rsvm.get(this, "renderBlockingStatus");
            }), set: undefined, enumerable: true, configurable: true,
        },
        responseStatus: {
            get: rsvm.RsCreateGetter("responseStatus", function responseStatus() {
                return rsvm.get(this, "responseStatus");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: PerformanceResourceTiming },
        [Symbol.toStringTag]: { value: "PerformanceResourceTiming", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(PerformanceResourceTiming, PerformanceEntry);
    Object.setPrototypeOf(PerformanceResourceTiming.prototype, PerformanceEntry.prototype);
}();