!function () {
    Object.defineProperty(window, "Performance", {
        value: rsvm.RsCreateConstructor("Performance"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Performance = {
        memory: {
            timeOrigin: 1699779042570.6,
            onresourcetimingbufferfull: null,
            timing: rsvm.prototype.PerformanceTiming.new(),
            navigation: rsvm.prototype.PerformanceNavigation.new(),
            memory: rsvm.prototype.MemoryInfo.new(),
            eventCounts: rsvm.prototype.EventCounts.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Performance", target);
        },
        new() {
            let obj = rsvm.RsCreate(Performance.prototype);
            return obj;
        },
    };

    Object.defineProperties(Performance, {
        prototype: { value: Performance.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Performance.prototype, {
        timeOrigin: {
            get: rsvm.RsCreateGetter("timeOrigin", function timeOrigin() {
                return rsvm.startTimeStamp + (Math.random() * 100).toFixed(2);
            }), set: undefined, enumerable: true, configurable: true,
        },
        onresourcetimingbufferfull: {
            get: rsvm.RsCreateGetter("onresourcetimingbufferfull", function onresourcetimingbufferfull() {
                return rsvm.get(this, "onresourcetimingbufferfull");
            }), set: rsvm.RsCreateSetter("onresourcetimingbufferfull", function onresourcetimingbufferfull() {
                rsvm.set(this, "onresourcetimingbufferfull", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        clearMarks: {
            value: rsvm.RsCreateAction("clearMarks", 0, function clearMarks() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearMeasures: {
            value: rsvm.RsCreateAction("clearMeasures", 0, function clearMeasures() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearResourceTimings: {
            value: rsvm.RsCreateAction("clearResourceTimings", 0, function clearResourceTimings() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getEntries: {
            value: rsvm.RsCreateAction("getEntries", 0, function getEntries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getEntriesByName: {
            value: rsvm.RsCreateAction("getEntriesByName", 1, function getEntriesByName() {
                switch(rsvm.siteInfo.version){
                    case "227":
                        if (arguments[0].indexOf('fireyejs.js') != -1){
                            let value = rsvm.prototype.PerformanceResourceTiming.new();
                            let data = {"name":arguments[0],"entryType":"resource","startTime":14219.10000000894,"duration":54.29999999701977,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":14219.10000000894,"domainLookupStart":14219.10000000894,"domainLookupEnd":14219.10000000894,"connectStart":14219.10000000894,"secureConnectionStart":14219.10000000894,"connectEnd":14219.10000000894,"requestStart":14220.60000000894,"responseStart":14272,"responseEnd":14273.40000000596,"transferSize":260474,"encodedBodySize":260174,"decodedBodySize":260174,"responseStatus":0,"serverTiming":[]};
                            for (const key of Object.keys(data)){
                                rsvm.set(value, key, data[key]);
                            }
                            return [value];
                        }else if (arguments[0].indexOf('dss.js') != -1){
                            let value = rsvm.prototype.PerformanceResourceTiming.new();
                            let data = {"name":arguments[0],"entryType":"resource","startTime":14288.60000000894,"duration":448.5,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":14288.60000000894,"domainLookupStart":14288.60000000894,"domainLookupEnd":14288.60000000894,"connectStart":14365.20000000298,"secureConnectionStart":14385.70000000298,"connectEnd":14391.70000000298,"requestStart":14391.90000000596,"responseStart":14736.60000000894,"responseEnd":14737.10000000894,"transferSize":352,"encodedBodySize":52,"decodedBodySize":52,"responseStatus":0,"serverTiming":[]};
                            for (const key of Object.keys(data)){
                                rsvm.set(value, key, data[key]);
                            }
                            return [value];
                        }
                }
                return [];
            }), writable: true, enumerable: true, configurable: true,
        },
        getEntriesByType: {
            value: rsvm.RsCreateAction("getEntriesByType", 1, function getEntriesByType() {
                switch (rsvm.siteInfo.version){
                    case "227":
                        if(arguments[0] == "resource"){
                            let ary = [], dataAry = [{"name":"https://img.alicdn.com/imgextra/i1/O1CN01L12MaQ1ZwfYKk7Yrc_!!6000000003259-2-tps-900-594.png","entryType":"resource","startTime":87.5,"duration":52,"initiatorType":"img","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":87.5,"domainLookupStart":96.5,"domainLookupEnd":102.5,"connectStart":102.5,"secureConnectionStart":110.89999999850988,"connectEnd":123.60000000149012,"requestStart":123.60000000149012,"responseStart":134.69999999925494,"responseEnd":139.5,"transferSize":10628,"encodedBodySize":10328,"decodedBodySize":10328,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/AWSC/AWSC/awsc.js?t=2048","entryType":"resource","startTime":90.69999999925494,"duration":17.300000000745058,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":90.69999999925494,"domainLookupStart":90.69999999925494,"domainLookupEnd":90.69999999925494,"connectStart":90.69999999925494,"secureConnectionStart":90.69999999925494,"connectEnd":90.69999999925494,"requestStart":100.5,"responseStart":107.30000000074506,"responseEnd":108,"transferSize":3954,"encodedBodySize":3654,"decodedBodySize":9741,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/AWSC/fireyejs/1.227.0/fireyejs.js","entryType":"resource","startTime":110.89999999850988,"duration":25.300000000745058,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":110.89999999850988,"domainLookupStart":110.89999999850988,"domainLookupEnd":110.89999999850988,"connectStart":110.89999999850988,"secureConnectionStart":110.89999999850988,"connectEnd":110.89999999850988,"requestStart":112.89999999850988,"responseStart":121.60000000149012,"responseEnd":136.19999999925494,"transferSize":125559,"encodedBodySize":125259,"decodedBodySize":260174,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/AWSC/nc/1.94.0/nc.js","entryType":"resource","startTime":111.10000000149012,"duration":24.799999997019768,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":111.10000000149012,"domainLookupStart":111.10000000149012,"domainLookupEnd":111.10000000149012,"connectStart":111.10000000149012,"secureConnectionStart":111.10000000149012,"connectEnd":111.10000000149012,"requestStart":113,"responseStart":131.69999999925494,"responseEnd":135.89999999850988,"transferSize":22174,"encodedBodySize":21874,"decodedBodySize":72120,"responseStatus":0,"serverTiming":[]},{"name":"https://4l386c.tdum.alibaba.com/dss.js","entryType":"resource","startTime":149.39999999850988,"duration":246,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":149.39999999850988,"domainLookupStart":207.5,"domainLookupEnd":235.10000000149012,"connectStart":235.10000000149012,"secureConnectionStart":283.30000000074506,"connectEnd":345.80000000074506,"requestStart":345.80000000074506,"responseStart":395,"responseEnd":395.3999999985099,"transferSize":362,"encodedBodySize":62,"decodedBodySize":52,"responseStatus":0,"serverTiming":[]},{"name":"https://cf-app-waf.cfc.aliyuncs.com/nocaptcha/initialize.jsonp?a=CF_APP_WAF&t=346d779a-3cc4-4056-8216-bd297f5d965c&scene=register&lang=cn&v=v1.3.21&href=https%3A%2F%2Fwe.51job.com%2Fapi%2Fjob%2Fsearch-pc&comm={}&callback=initializeJsonp_08131828818795162","entryType":"resource","startTime":208.19999999925494,"duration":2951.199999999255,"initiatorType":"script","nextHopProtocol":"","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":208.19999999925494,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":0,"responseStart":0,"responseEnd":3159.39999999851,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"responseStatus":0,"serverTiming":[]},{"name":"https://at.alicdn.com/t/font_1465353706_4784257.woff","entryType":"resource","startTime":3158.60000000149,"duration":73.39999999850988,"initiatorType":"css","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3158.60000000149,"domainLookupStart":3161,"domainLookupEnd":3161,"connectStart":3161,"secureConnectionStart":3181.10000000149,"connectEnd":3205.699999999255,"requestStart":3205.800000000745,"responseStart":3228.60000000149,"responseEnd":3232,"transferSize":5516,"encodedBodySize":5216,"decodedBodySize":5216,"responseStatus":200,"serverTiming":[]},{"name":"https://we.51job.com/favicon.ico","entryType":"resource","startTime":3234.300000000745,"duration":31,"initiatorType":"other","nextHopProtocol":"http/1.1","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3234.300000000745,"domainLookupStart":3234.300000000745,"domainLookupEnd":3234.300000000745,"connectStart":3234.300000000745,"secureConnectionStart":3234.300000000745,"connectEnd":3234.300000000745,"requestStart":3234.89999999851,"responseStart":3265,"responseEnd":3265.300000000745,"transferSize":9962,"encodedBodySize":9662,"decodedBodySize":9662,"responseStatus":200,"serverTiming":[]}];
                            for (const item of dataAry){
                                let elem = rsvm.prototype.PerformanceResourceTiming.new();
                                for (const key of Object.keys(item)){
                                    rsvm.set(elem, key, item[key]);
                                }
                                ary.push(elem);
                            }
                            return ary;
                        }
                }
                return [];
            }), writable: true, enumerable: true, configurable: true,
        },
        mark: {
            value: rsvm.RsCreateAction("mark", 1, function mark() {
            }), writable: true, enumerable: true, configurable: true,
        },
        measure: {
            value: rsvm.RsCreateAction("measure", 1, function measure() {
            }), writable: true, enumerable: true, configurable: true,
        },
        now: {
            value: rsvm.RsCreateAction("now", 0, function now() {
                return Date.now() - rsvm.startTimeStamp;
            }), writable: true, enumerable: true, configurable: true,
        },
        setResourceTimingBufferSize: {
            value: rsvm.RsCreateAction("setResourceTimingBufferSize", 1, function setResourceTimingBufferSize() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toJSON: {
            value: rsvm.RsCreateAction("toJSON", 0, function toJSON() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Performance },
        timing: {
            get: rsvm.RsCreateGetter("timing", function timing() {
                return rsvm.get(this, "timing");
            }), set: undefined, enumerable: true, configurable: true,
        },
        navigation: {
            get: rsvm.RsCreateGetter("navigation", function navigation() {
                return rsvm.get(this, "navigation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        memory: {
            get: rsvm.RsCreateGetter("memory", function memory() {
                return rsvm.get(this, "memory");
            }), set: undefined, enumerable: true, configurable: true,
        },
        eventCounts: {
            get: rsvm.RsCreateGetter("eventCounts", function eventCounts() {
                return rsvm.get(this, "eventCounts");
            }), set: undefined, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Performance", writable: false, enumerable: false, configurable: true, },
    });
    
    Object.setPrototypeOf(Performance, EventTarget);
    Object.setPrototypeOf(Performance.prototype, EventTarget.prototype);
}();