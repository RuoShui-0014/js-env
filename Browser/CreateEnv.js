!function () {
    rsvm.prototype.window = {
        memory: {
            listener: {},
            window: globalThis,
            self: globalThis,
            document: rsvm.prototype.HTMLDocument.new(),
            name: "",
            location: rsvm.prototype.Location.new(),
            customElements: rsvm.prototype.CustomElementRegistry.new(),
            history: rsvm.prototype.History.new(),
            navigation: rsvm.prototype.Navigation.new(),
            locationbar: rsvm.prototype.BarProp.new(),
            menubar: rsvm.prototype.BarProp.new(),
            personalbar: rsvm.prototype.BarProp.new(),
            scrollbars: rsvm.prototype.BarProp.new(),
            statusbar: rsvm.prototype.BarProp.new(),
            toolbar: rsvm.prototype.BarProp.new(),
            status: "",
            closed: false,
            frames: globalThis,
            length: 0,
            top: globalThis,
            opener: null,
            parent: globalThis,
            frameElement: null,
            navigator: rsvm.prototype.Navigator.new(),
            origin: "chrome://newtab",
            external: rsvm.prototype.External.new(),
            screen: rsvm.prototype.Screen.new(),
            innerWidth: 1872,
            innerHeight: 956,
            scrollX: 0,
            pageXOffset: 0,
            scrollY: 0,
            pageYOffset: 0,
            visualViewport: rsvm.prototype.VisualViewport.new(),
            screenX: 0,
            screenY: 0,
            outerWidth: 1920,
            outerHeight: 1032,
            devicePixelRatio: 1,
            clientInformation: null,
            screenLeft: 0,
            screenTop: 0,
            styleMedia: rsvm.prototype.StyleMedia.new(),
            onsearch: null,
            isSecureContext: true,
            trustedTypes: rsvm.prototype.TrustedTypePolicyFactory.new(),
            performance: rsvm.prototype.Performance.new(),
            onappinstalled: null,
            onbeforeinstallprompt: null,
            crypto: rsvm.prototype.Crypto.new(),
            indexedDB: rsvm.prototype.IDBFactory.new(),
            sessionStorage: rsvm.prototype.Storage.new(),
            localStorage: rsvm.prototype.Storage.new(),
            onbeforexrselect: null,
            onabort: null,
            onbeforeinput: null,
            onbeforetoggle: null,
            onblur: null,
            oncancel: null,
            oncanplay: null,
            oncanplaythrough: null,
            onchange: null,
            onclick: null,
            onclose: null,
            oncontextlost: null,
            oncontextmenu: null,
            oncontextrestored: null,
            oncuechange: null,
            ondblclick: null,
            ondrag: null,
            ondragend: null,
            ondragenter: null,
            ondragleave: null,
            ondragover: null,
            ondragstart: null,
            ondrop: null,
            ondurationchange: null,
            onemptied: null,
            onended: null,
            onerror: null,
            onfocus: null,
            onformdata: null,
            oninput: null,
            oninvalid: null,
            onkeydown: null,
            onkeypress: null,
            onkeyup: null,
            onload: null,
            onloadeddata: null,
            onloadedmetadata: null,
            onloadstart: null,
            onmousedown: null,
            onmouseenter: null,
            onmouseleave: null,
            onmousemove: null,
            onmouseout: null,
            onmouseover: null,
            onmouseup: null,
            onmousewheel: null,
            onpause: null,
            onplay: null,
            onplaying: null,
            onprogress: null,
            onratechange: null,
            onreset: null,
            onresize: null,
            onscroll: null,
            onsecuritypolicyviolation: null,
            onseeked: null,
            onseeking: null,
            onselect: null,
            onslotchange: null,
            onstalled: null,
            onsubmit: null,
            onsuspend: null,
            ontimeupdate: null,
            ontoggle: null,
            onvolumechange: null,
            onwaiting: null,
            onwebkitanimationend: null,
            onwebkitanimationiteration: null,
            onwebkitanimationstart: null,
            onwebkittransitionend: null,
            onwheel: null,
            onauxclick: null,
            ongotpointercapture: null,
            onlostpointercapture: null,
            onpointerdown: null,
            onpointermove: null,
            onpointerrawupdate: null,
            onpointerup: null,
            onpointercancel: null,
            onpointerover: null,
            onpointerout: null,
            onpointerenter: null,
            onpointerleave: null,
            onselectstart: null,
            onselectionchange: null,
            onanimationend: null,
            onanimationiteration: null,
            onanimationstart: null,
            ontransitionrun: null,
            ontransitionstart: null,
            ontransitionend: null,
            ontransitioncancel: null,
            onafterprint: null,
            onbeforeprint: null,
            onbeforeunload: null,
            onhashchange: null,
            onlanguagechange: null,
            onmessage: null,
            onmessageerror: null,
            onoffline: null,
            ononline: null,
            onpagehide: null,
            onpageshow: null,
            onpopstate: null,
            onrejectionhandled: null,
            onstorage: null,
            onunhandledrejection: null,
            onunload: null,
            crossOriginIsolated: false,
            scheduler: rsvm.prototype.Scheduler.new(),
            fence: null,
            caches: rsvm.prototype.CacheStorage.new(),
            cookieStore: rsvm.prototype.CookieStore.new(),
            ondevicemotion: null,
            ondeviceorientation: null,
            ondeviceorientationabsolute: null,
            launchQueue: rsvm.prototype.LaunchQueue.new(),
            sharedStorage: rsvm.prototype.SharedStorage.new(),
            documentPictureInPicture: rsvm.prototype.DocumentPictureInPicture.new(),
            onbeforematch: null,
            originAgentCluster: true,
            credentialless: false,
            speechSynthesis: rsvm.prototype.SpeechSynthesis.new(),
            oncontentvisibilityautostatechange: null,
            onscrollend: null,
        },
    };
    rsvm.prototype.window.memory.clientInformation = rsvm.prototype.window.memory.navigator;
    rsvm.RsSetPrivateProperty(window, "__memory__", rsvm.prototype.window.memory);
    Object.defineProperties(window, {
        self: {
            get: rsvm.RsCreateWindowGetter("self", function self() {
                return rsvm.get(globalThis, "self");
            }), set: rsvm.RsCreateWindowSetter("self", function self() {
                rsvm.set(globalThis, "self", arguments[0]);
            }), enumerable: true, configurable: true
        },
        document: {
            get: rsvm.RsCreateWindowGetter("document", function document() {
                return rsvm.get(globalThis, "document");
            }), set: undefined, enumerable: true, configurable: false
        },
        name: {
            get: rsvm.RsCreateWindowGetter("name", function name() {
                return rsvm.get(globalThis, "name");
            }), set: rsvm.RsCreateWindowSetter("name", function name() {
                rsvm.set(globalThis, "name", arguments[0]);
            }), enumerable: true, configurable: true
        },
        location: {
            get: rsvm.RsCreateWindowGetter("location", function location() {
                return rsvm.get(globalThis, "location");
            }), set: rsvm.RsCreateWindowSetter("location", function location() {
                rsvm.set(globalThis, "location", arguments[0]);
            }), enumerable: true, configurable: false
        },
        customElements: {
            get: rsvm.RsCreateWindowGetter("customElements", function customElements() {
                return rsvm.get(globalThis, "customElements");
            }), set: undefined, enumerable: true, configurable: true
        },
        history: {
            get: rsvm.RsCreateWindowGetter("history", function history() {
                return rsvm.get(globalThis, "history");
            }), set: undefined, enumerable: true, configurable: true
        },
        navigation: {
            get: rsvm.RsCreateWindowGetter("navigation", function navigation() {
                return rsvm.get(globalThis, "navigation");
            }), set: rsvm.RsCreateWindowSetter("navigation", function navigation() {
                rsvm.set(globalThis, "navigation", arguments[0]);
            }), enumerable: true, configurable: true
        },
        locationbar: {
            get: rsvm.RsCreateWindowGetter("locationbar", function locationbar() {
                return rsvm.get(globalThis, "locationbar");
            }), set: rsvm.RsCreateWindowSetter("locationbar", function locationbar() {
                rsvm.set(globalThis, "locationbar", arguments[0]);
            }), enumerable: true, configurable: true
        },
        menubar: {
            get: rsvm.RsCreateWindowGetter("menubar", function menubar() {
                return rsvm.get(globalThis, "menubar");
            }), set: rsvm.RsCreateWindowSetter("menubar", function menubar() {
                rsvm.set(globalThis, "menubar", arguments[0]);
            }), enumerable: true, configurable: true
        },
        personalbar: {
            get: rsvm.RsCreateWindowGetter("personalbar", function personalbar() {
                return rsvm.get(globalThis, "personalbar");
            }), set: rsvm.RsCreateWindowSetter("personalbar", function personalbar() {
                rsvm.set(globalThis, "personalbar", arguments[0]);
            }), enumerable: true, configurable: true
        },
        scrollbars: {
            get: rsvm.RsCreateWindowGetter("scrollbars", function scrollbars() {
                return rsvm.get(globalThis, "scrollbars");
            }), set: rsvm.RsCreateWindowSetter("scrollbars", function scrollbars() {
                rsvm.set(globalThis, "scrollbars", arguments[0]);
            }), enumerable: true, configurable: true
        },
        statusbar: {
            get: rsvm.RsCreateWindowGetter("statusbar", function statusbar() {
                return rsvm.get(globalThis, "statusbar");
            }), set: rsvm.RsCreateWindowSetter("statusbar", function statusbar() {
                rsvm.set(globalThis, "statusbar", arguments[0]);
            }), enumerable: true, configurable: true
        },
        toolbar: {
            get: rsvm.RsCreateWindowGetter("toolbar", function toolbar() {
                return rsvm.get(globalThis, "toolbar");
            }), set: rsvm.RsCreateWindowSetter("toolbar", function toolbar() {
                rsvm.set(globalThis, "toolbar", arguments[0]);
            }), enumerable: true, configurable: true
        },
        status: {
            get: rsvm.RsCreateWindowGetter("status", function status() {
                return rsvm.get(globalThis, "status");
            }), set: rsvm.RsCreateWindowSetter("status", function status() {
                rsvm.set(globalThis, "status", arguments[0]);
            }), enumerable: true, configurable: true
        },
        closed: {
            get: rsvm.RsCreateWindowGetter("closed", function closed() {
                return rsvm.get(globalThis, "closed");
            }), set: undefined, enumerable: true, configurable: true
        },
        frames: {
            get: rsvm.RsCreateWindowGetter("frames", function frames() {
                return rsvm.get(globalThis, "frames");
            }), set: rsvm.RsCreateWindowSetter("frames", function frames() {
                rsvm.set(globalThis, "frames", arguments[0]);
            }), enumerable: true, configurable: true
        },
        length: {
            get: rsvm.RsCreateWindowGetter("length", function length() {
                return rsvm.get(globalThis, "length");
            }), set: rsvm.RsCreateWindowSetter("length", function length() {
                rsvm.set(globalThis, "length", arguments[0]);
            }), enumerable: true, configurable: true
        },
        top: {
            get: rsvm.RsCreateWindowGetter("top", function top() {
                return rsvm.get(globalThis, "top");
            }), set: undefined, enumerable: true, configurable: false
        },
        opener: {
            get: rsvm.RsCreateWindowGetter("opener", function opener() {
                return rsvm.get(globalThis, "opener");
            }), set: rsvm.RsCreateWindowSetter("opener", function opener() {
                rsvm.set(globalThis, "opener", arguments[0]);
            }), enumerable: true, configurable: true
        },
        parent: {
            get: rsvm.RsCreateWindowGetter("parent", function parent() {
                return rsvm.get(globalThis, "parent");
            }), set: rsvm.RsCreateWindowSetter("parent", function parent() {
                rsvm.set(globalThis, "parent", arguments[0]);
            }), enumerable: true, configurable: true
        },
        frameElement: {
            get: rsvm.RsCreateWindowGetter("frameElement", function frameElement() {
                return rsvm.get(globalThis, "frameElement");
            }), set: undefined, enumerable: true, configurable: true
        },
        navigator: {
            get: rsvm.RsCreateWindowGetter("navigator", function navigator() {
                return rsvm.get(globalThis, "navigator");
            }), set: undefined, enumerable: true, configurable: true
        },
        origin: {
            get: rsvm.RsCreateWindowGetter("origin", function origin() {
                return location.protocol + "//" + location.hostname;
            }), set: rsvm.RsCreateWindowSetter("origin", function origin() {
                rsvm.siteInfo.url = arguments[0];
            }), enumerable: true, configurable: true
        },
        external: {
            get: rsvm.RsCreateWindowGetter("external", function external() {
                return rsvm.get(globalThis, "external");
            }), set: rsvm.RsCreateWindowSetter("external", function external() {
                rsvm.set(globalThis, "external", arguments[0]);
            }), enumerable: true, configurable: true
        },
        screen: {
            get: rsvm.RsCreateWindowGetter("screen", function screen() {
                return rsvm.get(globalThis, "screen");
            }), set: rsvm.RsCreateWindowSetter("screen", function screen() {
                rsvm.set(globalThis, "screen", arguments[0]);
            }), enumerable: true, configurable: true
        },
        innerWidth: {
            get: rsvm.RsCreateWindowGetter("innerWidth", function innerWidth() {
                return rsvm.get(globalThis, "innerWidth");
            }), set: rsvm.RsCreateWindowSetter("innerWidth", function innerWidth() {
                rsvm.set(globalThis, "innerWidth", arguments[0]);
            }), enumerable: true, configurable: true
        },
        innerHeight: {
            get: rsvm.RsCreateWindowGetter("innerHeight", function innerHeight() {
                return rsvm.get(globalThis, "innerHeight");
            }), set: rsvm.RsCreateWindowSetter("innerHeight", function innerHeight() {
                rsvm.set(globalThis, "innerHeight", arguments[0]);
            }), enumerable: true, configurable: true
        },
        scrollX: {
            get: rsvm.RsCreateWindowGetter("scrollX", function scrollX() {
                return rsvm.get(globalThis, "scrollX");
            }), set: rsvm.RsCreateWindowSetter("scrollX", function scrollX() {
                rsvm.set(globalThis, "scrollX", arguments[0]);
            }), enumerable: true, configurable: true
        },
        pageXOffset: {
            get: rsvm.RsCreateWindowGetter("pageXOffset", function pageXOffset() {
                return rsvm.get(globalThis, "pageXOffset");
            }), set: rsvm.RsCreateWindowSetter("pageXOffset", function pageXOffset() {
                rsvm.set(globalThis, "pageXOffset", arguments[0]);
            }), enumerable: true, configurable: true
        },
        scrollY: {
            get: rsvm.RsCreateWindowGetter("scrollY", function scrollY() {
                return rsvm.get(globalThis, "scrollY");
            }), set: rsvm.RsCreateWindowSetter("scrollY", function scrollY() {
                rsvm.set(globalThis, "scrollY", arguments[0]);
            }), enumerable: true, configurable: true
        },
        pageYOffset: {
            get: rsvm.RsCreateWindowGetter("pageYOffset", function pageYOffset() {
                return rsvm.get(globalThis, "pageYOffset");
            }), set: rsvm.RsCreateWindowSetter("pageYOffset", function pageYOffset() {
                rsvm.set(globalThis, "pageYOffset", arguments[0]);
            }), enumerable: true, configurable: true
        },
        visualViewport: {
            get: rsvm.RsCreateWindowGetter("visualViewport", function visualViewport() {
                return rsvm.get(globalThis, "visualViewport");
            }), set: rsvm.RsCreateWindowSetter("visualViewport", function visualViewport() {
                rsvm.set(globalThis, "visualViewport", arguments[0]);
            }), enumerable: true, configurable: true
        },
        screenX: {
            get: rsvm.RsCreateWindowGetter("screenX", function screenX() {
                return rsvm.get(globalThis, "screenX");
            }), set: rsvm.RsCreateWindowSetter("screenX", function screenX() {
                rsvm.set(globalThis, "screenX", arguments[0]);
            }), enumerable: true, configurable: true
        },
        screenY: {
            get: rsvm.RsCreateWindowGetter("screenY", function screenY() {
                return rsvm.get(globalThis, "screenY");
            }), set: rsvm.RsCreateWindowSetter("screenY", function screenY() {
                rsvm.set(globalThis, "screenY", arguments[0]);
            }), enumerable: true, configurable: true
        },
        outerWidth: {
            get: rsvm.RsCreateWindowGetter("outerWidth", function outerWidth() {
                return rsvm.get(globalThis, "outerWidth");
            }), set: rsvm.RsCreateWindowSetter("outerWidth", function outerWidth() {
                rsvm.set(globalThis, "outerWidth", arguments[0]);
            }), enumerable: true, configurable: true
        },
        outerHeight: {
            get: rsvm.RsCreateWindowGetter("outerHeight", function outerHeight() {
                return rsvm.get(globalThis, "outerHeight");
            }), set: rsvm.RsCreateWindowSetter("outerHeight", function outerHeight() {
                rsvm.set(globalThis, "outerHeight", arguments[0]);
            }), enumerable: true, configurable: true
        },
        devicePixelRatio: {
            get: rsvm.RsCreateWindowGetter("devicePixelRatio", function devicePixelRatio() {
                return rsvm.get(globalThis, "devicePixelRatio");
            }), set: rsvm.RsCreateWindowSetter("devicePixelRatio", function devicePixelRatio() {
                rsvm.set(globalThis, "devicePixelRatio", arguments[0]);
            }), enumerable: true, configurable: true
        },
        clientInformation: {
            get: rsvm.RsCreateWindowGetter("clientInformation", function clientInformation() {
                return rsvm.get(globalThis, "clientInformation");
            }), set: rsvm.RsCreateWindowSetter("clientInformation", function clientInformation() {
                rsvm.set(globalThis, "clientInformation", arguments[0]);
            }), enumerable: true, configurable: true
        },
        screenLeft: {
            get: rsvm.RsCreateWindowGetter("screenLeft", function screenLeft() {
                return rsvm.get(globalThis, "screenLeft");
            }), set: rsvm.RsCreateWindowSetter("screenLeft", function screenLeft() {
                rsvm.set(globalThis, "screenLeft", arguments[0]);
            }), enumerable: true, configurable: true
        },
        screenTop: {
            get: rsvm.RsCreateWindowGetter("screenTop", function screenTop() {
                return rsvm.get(globalThis, "screenTop");
            }), set: rsvm.RsCreateWindowSetter("screenTop", function screenTop() {
                rsvm.set(globalThis, "screenTop", arguments[0]);
            }), enumerable: true, configurable: true
        },
        styleMedia: {
            get: rsvm.RsCreateWindowGetter("styleMedia", function styleMedia() {
                return rsvm.get(globalThis, "styleMedia");
            }), set: undefined, enumerable: true, configurable: true
        },
        onsearch: {
            get: rsvm.RsCreateWindowGetter("onsearch", function onsearch() {
                return rsvm.get(globalThis, "onsearch");
            }), set: rsvm.RsCreateWindowSetter("onsearch", function onsearch() {
                rsvm.set(globalThis, "onsearch", arguments[0]);
            }), enumerable: true, configurable: true
        },
        isSecureContext: {
            get: rsvm.RsCreateWindowGetter("isSecureContext", function isSecureContext() {
                return rsvm.get(globalThis, "isSecureContext");
            }), set: undefined, enumerable: true, configurable: true
        },
        trustedTypes: {
            get: rsvm.RsCreateWindowGetter("trustedTypes", function trustedTypes() {
                return rsvm.get(globalThis, "trustedTypes");
            }), set: undefined, enumerable: true, configurable: true
        },
        performance: {
            get: rsvm.RsCreateWindowGetter("performance", function performance() {
                return rsvm.get(globalThis, "performance");
            }), set: rsvm.RsCreateWindowSetter("performance", function performance() {
                rsvm.set(globalThis, "performance", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onappinstalled: {
            get: rsvm.RsCreateWindowGetter("onappinstalled", function onappinstalled() {
                return rsvm.get(globalThis, "onappinstalled");
            }), set: rsvm.RsCreateWindowSetter("onappinstalled", function onappinstalled() {
                rsvm.set(globalThis, "onappinstalled", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onbeforeinstallprompt: {
            get: rsvm.RsCreateWindowGetter("onbeforeinstallprompt", function onbeforeinstallprompt() {
                return rsvm.get(globalThis, "onbeforeinstallprompt");
            }), set: rsvm.RsCreateWindowSetter("onbeforeinstallprompt", function onbeforeinstallprompt() {
                rsvm.set(globalThis, "onbeforeinstallprompt", arguments[0]);
            }), enumerable: true, configurable: true
        },
        crypto: {
            get: rsvm.RsCreateWindowGetter("crypto", function crypto() {
                return rsvm.get(globalThis, "crypto");
            }), set: undefined, enumerable: true, configurable: true
        },
        indexedDB: {
            get: rsvm.RsCreateWindowGetter("indexedDB", function indexedDB() {
                return rsvm.get(globalThis, "indexedDB");
            }), set: undefined, enumerable: true, configurable: true
        },
        sessionStorage: {
            get: rsvm.RsCreateWindowGetter("sessionStorage", function sessionStorage() {
                return rsvm.get(globalThis, "sessionStorage");
            }), set: undefined, enumerable: true, configurable: true
        },
        localStorage: {
            get: rsvm.RsCreateWindowGetter("localStorage", function localStorage() {
                return rsvm.get(globalThis, "localStorage");
            }), set: undefined, enumerable: true, configurable: true
        },
        onbeforexrselect: {
            get: rsvm.RsCreateWindowGetter("onbeforexrselect", function onbeforexrselect() {
                return rsvm.get(globalThis, "onbeforexrselect");
            }), set: rsvm.RsCreateWindowSetter("onbeforexrselect", function onbeforexrselect() {
                rsvm.set(globalThis, "onbeforexrselect", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onabort: {
            get: rsvm.RsCreateWindowGetter("onabort", function onabort() {
                return rsvm.get(globalThis, "onabort");
            }), set: rsvm.RsCreateWindowSetter("onabort", function onabort() {
                rsvm.set(globalThis, "onabort", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onbeforeinput: {
            get: rsvm.RsCreateWindowGetter("onbeforeinput", function onbeforeinput() {
                return rsvm.get(globalThis, "onbeforeinput");
            }), set: rsvm.RsCreateWindowSetter("onbeforeinput", function onbeforeinput() {
                rsvm.set(globalThis, "onbeforeinput", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onbeforetoggle: {
            get: rsvm.RsCreateWindowGetter("onbeforetoggle", function onbeforetoggle() {
                return rsvm.get(globalThis, "onbeforetoggle");
            }), set: rsvm.RsCreateWindowSetter("onbeforetoggle", function onbeforetoggle() {
                rsvm.set(globalThis, "onbeforetoggle", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onblur: {
            get: rsvm.RsCreateWindowGetter("onblur", function onblur() {
                return rsvm.get(globalThis, "onblur");
            }), set: rsvm.RsCreateWindowSetter("onblur", function onblur() {
                rsvm.set(globalThis, "onblur", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncancel: {
            get: rsvm.RsCreateWindowGetter("oncancel", function oncancel() {
                return rsvm.get(globalThis, "oncancel");
            }), set: rsvm.RsCreateWindowSetter("oncancel", function oncancel() {
                rsvm.set(globalThis, "oncancel", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncanplay: {
            get: rsvm.RsCreateWindowGetter("oncanplay", function oncanplay() {
                return rsvm.get(globalThis, "oncanplay");
            }), set: rsvm.RsCreateWindowSetter("oncanplay", function oncanplay() {
                rsvm.set(globalThis, "oncanplay", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncanplaythrough: {
            get: rsvm.RsCreateWindowGetter("oncanplaythrough", function oncanplaythrough() {
                return rsvm.get(globalThis, "oncanplaythrough");
            }), set: rsvm.RsCreateWindowSetter("oncanplaythrough", function oncanplaythrough() {
                rsvm.set(globalThis, "oncanplaythrough", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onchange: {
            get: rsvm.RsCreateWindowGetter("onchange", function onchange() {
                return rsvm.get(globalThis, "onchange");
            }), set: rsvm.RsCreateWindowSetter("onchange", function onchange() {
                rsvm.set(globalThis, "onchange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onclick: {
            get: rsvm.RsCreateWindowGetter("onclick", function onclick() {
                return rsvm.get(globalThis, "onclick");
            }), set: rsvm.RsCreateWindowSetter("onclick", function onclick() {
                rsvm.set(globalThis, "onclick", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onclose: {
            get: rsvm.RsCreateWindowGetter("onclose", function onclose() {
                return rsvm.get(globalThis, "onclose");
            }), set: rsvm.RsCreateWindowSetter("onclose", function onclose() {
                rsvm.set(globalThis, "onclose", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncontextlost: {
            get: rsvm.RsCreateWindowGetter("oncontextlost", function oncontextlost() {
                return rsvm.get(globalThis, "oncontextlost");
            }), set: rsvm.RsCreateWindowSetter("oncontextlost", function oncontextlost() {
                rsvm.set(globalThis, "oncontextlost", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncontextmenu: {
            get: rsvm.RsCreateWindowGetter("oncontextmenu", function oncontextmenu() {
                return rsvm.get(globalThis, "oncontextmenu");
            }), set: rsvm.RsCreateWindowSetter("oncontextmenu", function oncontextmenu() {
                rsvm.set(globalThis, "oncontextmenu", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncontextrestored: {
            get: rsvm.RsCreateWindowGetter("oncontextrestored", function oncontextrestored() {
                return rsvm.get(globalThis, "oncontextrestored");
            }), set: rsvm.RsCreateWindowSetter("oncontextrestored", function oncontextrestored() {
                rsvm.set(globalThis, "oncontextrestored", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oncuechange: {
            get: rsvm.RsCreateWindowGetter("oncuechange", function oncuechange() {
                return rsvm.get(globalThis, "oncuechange");
            }), set: rsvm.RsCreateWindowSetter("oncuechange", function oncuechange() {
                rsvm.set(globalThis, "oncuechange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondblclick: {
            get: rsvm.RsCreateWindowGetter("ondblclick", function ondblclick() {
                return rsvm.get(globalThis, "ondblclick");
            }), set: rsvm.RsCreateWindowSetter("ondblclick", function ondblclick() {
                rsvm.set(globalThis, "ondblclick", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondrag: {
            get: rsvm.RsCreateWindowGetter("ondrag", function ondrag() {
                return rsvm.get(globalThis, "ondrag");
            }), set: rsvm.RsCreateWindowSetter("ondrag", function ondrag() {
                rsvm.set(globalThis, "ondrag", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondragend: {
            get: rsvm.RsCreateWindowGetter("ondragend", function ondragend() {
                return rsvm.get(globalThis, "ondragend");
            }), set: rsvm.RsCreateWindowSetter("ondragend", function ondragend() {
                rsvm.set(globalThis, "ondragend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondragenter: {
            get: rsvm.RsCreateWindowGetter("ondragenter", function ondragenter() {
                return rsvm.get(globalThis, "ondragenter");
            }), set: rsvm.RsCreateWindowSetter("ondragenter", function ondragenter() {
                rsvm.set(globalThis, "ondragenter", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondragleave: {
            get: rsvm.RsCreateWindowGetter("ondragleave", function ondragleave() {
                return rsvm.get(globalThis, "ondragleave");
            }), set: rsvm.RsCreateWindowSetter("ondragleave", function ondragleave() {
                rsvm.set(globalThis, "ondragleave", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondragover: {
            get: rsvm.RsCreateWindowGetter("ondragover", function ondragover() {
                return rsvm.get(globalThis, "ondragover");
            }), set: rsvm.RsCreateWindowSetter("ondragover", function ondragover() {
                rsvm.set(globalThis, "ondragover", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondragstart: {
            get: rsvm.RsCreateWindowGetter("ondragstart", function ondragstart() {
                return rsvm.get(globalThis, "ondragstart");
            }), set: rsvm.RsCreateWindowSetter("ondragstart", function ondragstart() {
                rsvm.set(globalThis, "ondragstart", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondrop: {
            get: rsvm.RsCreateWindowGetter("ondrop", function ondrop() {
                return rsvm.get(globalThis, "ondrop");
            }), set: rsvm.RsCreateWindowSetter("ondrop", function ondrop() {
                rsvm.set(globalThis, "ondrop", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondurationchange: {
            get: rsvm.RsCreateWindowGetter("ondurationchange", function ondurationchange() {
                return rsvm.get(globalThis, "ondurationchange");
            }), set: rsvm.RsCreateWindowSetter("ondurationchange", function ondurationchange() {
                rsvm.set(globalThis, "ondurationchange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onemptied: {
            get: rsvm.RsCreateWindowGetter("onemptied", function onemptied() {
                return rsvm.get(globalThis, "onemptied");
            }), set: rsvm.RsCreateWindowSetter("onemptied", function onemptied() {
                rsvm.set(globalThis, "onemptied", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onended: {
            get: rsvm.RsCreateWindowGetter("onended", function onended() {
                return rsvm.get(globalThis, "onended");
            }), set: rsvm.RsCreateWindowSetter("onended", function onended() {
                rsvm.set(globalThis, "onended", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onerror: {
            get: rsvm.RsCreateWindowGetter("onerror", function onerror() {
                return rsvm.get(globalThis, "onerror");
            }), set: rsvm.RsCreateWindowSetter("onerror", function onerror() {
                rsvm.set(globalThis, "onerror", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onfocus: {
            get: rsvm.RsCreateWindowGetter("onfocus", function onfocus() {
                return rsvm.get(globalThis, "onfocus");
            }), set: rsvm.RsCreateWindowSetter("onfocus", function onfocus() {
                rsvm.set(globalThis, "onfocus", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onformdata: {
            get: rsvm.RsCreateWindowGetter("onformdata", function onformdata() {
                return rsvm.get(globalThis, "onformdata");
            }), set: rsvm.RsCreateWindowSetter("onformdata", function onformdata() {
                rsvm.set(globalThis, "onformdata", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oninput: {
            get: rsvm.RsCreateWindowGetter("oninput", function oninput() {
                return rsvm.get(globalThis, "oninput");
            }), set: rsvm.RsCreateWindowSetter("oninput", function oninput() {
                rsvm.set(globalThis, "oninput", arguments[0]);
            }), enumerable: true, configurable: true
        },
        oninvalid: {
            get: rsvm.RsCreateWindowGetter("oninvalid", function oninvalid() {
                return rsvm.get(globalThis, "oninvalid");
            }), set: rsvm.RsCreateWindowSetter("oninvalid", function oninvalid() {
                rsvm.set(globalThis, "oninvalid", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onkeydown: {
            get: rsvm.RsCreateWindowGetter("onkeydown", function onkeydown() {
                return rsvm.get(globalThis, "onkeydown");
            }), set: rsvm.RsCreateWindowSetter("onkeydown", function onkeydown() {
                rsvm.set(globalThis, "onkeydown", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onkeypress: {
            get: rsvm.RsCreateWindowGetter("onkeypress", function onkeypress() {
                return rsvm.get(globalThis, "onkeypress");
            }), set: rsvm.RsCreateWindowSetter("onkeypress", function onkeypress() {
                rsvm.set(globalThis, "onkeypress", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onkeyup: {
            get: rsvm.RsCreateWindowGetter("onkeyup", function onkeyup() {
                return rsvm.get(globalThis, "onkeyup");
            }), set: rsvm.RsCreateWindowSetter("onkeyup", function onkeyup() {
                rsvm.set(globalThis, "onkeyup", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onload: {
            get: rsvm.RsCreateWindowGetter("onload", function onload() {
                return rsvm.get(globalThis, "onload");
            }), set: rsvm.RsCreateWindowSetter("onload", function onload() {
                rsvm.set(globalThis, "onload", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onloadeddata: {
            get: rsvm.RsCreateWindowGetter("onloadeddata", function onloadeddata() {
                return rsvm.get(globalThis, "onloadeddata");
            }), set: rsvm.RsCreateWindowSetter("onloadeddata", function onloadeddata() {
                rsvm.set(globalThis, "onloadeddata", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onloadedmetadata: {
            get: rsvm.RsCreateWindowGetter("onloadedmetadata", function onloadedmetadata() {
                return rsvm.get(globalThis, "onloadedmetadata");
            }), set: rsvm.RsCreateWindowSetter("onloadedmetadata", function onloadedmetadata() {
                rsvm.set(globalThis, "onloadedmetadata", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onloadstart: {
            get: rsvm.RsCreateWindowGetter("onloadstart", function onloadstart() {
                return rsvm.get(globalThis, "onloadstart");
            }), set: rsvm.RsCreateWindowSetter("onloadstart", function onloadstart() {
                rsvm.set(globalThis, "onloadstart", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmousedown: {
            get: rsvm.RsCreateWindowGetter("onmousedown", function onmousedown() {
                return rsvm.get(globalThis, "onmousedown");
            }), set: rsvm.RsCreateWindowSetter("onmousedown", function onmousedown() {
                rsvm.set(globalThis, "onmousedown", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmouseenter: {
            get: rsvm.RsCreateWindowGetter("onmouseenter", function onmouseenter() {
                return rsvm.get(globalThis, "onmouseenter");
            }), set: rsvm.RsCreateWindowSetter("onmouseenter", function onmouseenter() {
                rsvm.set(globalThis, "onmouseenter", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmouseleave: {
            get: rsvm.RsCreateWindowGetter("onmouseleave", function onmouseleave() {
                return rsvm.get(globalThis, "onmouseleave");
            }), set: rsvm.RsCreateWindowSetter("onmouseleave", function onmouseleave() {
                rsvm.set(globalThis, "onmouseleave", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmousemove: {
            get: rsvm.RsCreateWindowGetter("onmousemove", function onmousemove() {
                return rsvm.get(globalThis, "onmousemove");
            }), set: rsvm.RsCreateWindowSetter("onmousemove", function onmousemove() {
                rsvm.set(globalThis, "onmousemove", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmouseout: {
            get: rsvm.RsCreateWindowGetter("onmouseout", function onmouseout() {
                return rsvm.get(globalThis, "onmouseout");
            }), set: rsvm.RsCreateWindowSetter("onmouseout", function onmouseout() {
                rsvm.set(globalThis, "onmouseout", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmouseover: {
            get: rsvm.RsCreateWindowGetter("onmouseover", function onmouseover() {
                return rsvm.get(globalThis, "onmouseover");
            }), set: rsvm.RsCreateWindowSetter("onmouseover", function onmouseover() {
                rsvm.set(globalThis, "onmouseover", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmouseup: {
            get: rsvm.RsCreateWindowGetter("onmouseup", function onmouseup() {
                return rsvm.get(globalThis, "onmouseup");
            }), set: rsvm.RsCreateWindowSetter("onmouseup", function onmouseup() {
                rsvm.set(globalThis, "onmouseup", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmousewheel: {
            get: rsvm.RsCreateWindowGetter("onmousewheel", function onmousewheel() {
                return rsvm.get(globalThis, "onmousewheel");
            }), set: rsvm.RsCreateWindowSetter("onmousewheel", function onmousewheel() {
                rsvm.set(globalThis, "onmousewheel", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpause: {
            get: rsvm.RsCreateWindowGetter("onpause", function onpause() {
                return rsvm.get(globalThis, "onpause");
            }), set: rsvm.RsCreateWindowSetter("onpause", function onpause() {
                rsvm.set(globalThis, "onpause", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onplay: {
            get: rsvm.RsCreateWindowGetter("onplay", function onplay() {
                return rsvm.get(globalThis, "onplay");
            }), set: rsvm.RsCreateWindowSetter("onplay", function onplay() {
                rsvm.set(globalThis, "onplay", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onplaying: {
            get: rsvm.RsCreateWindowGetter("onplaying", function onplaying() {
                return rsvm.get(globalThis, "onplaying");
            }), set: rsvm.RsCreateWindowSetter("onplaying", function onplaying() {
                rsvm.set(globalThis, "onplaying", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onprogress: {
            get: rsvm.RsCreateWindowGetter("onprogress", function onprogress() {
                return rsvm.get(globalThis, "onprogress");
            }), set: rsvm.RsCreateWindowSetter("onprogress", function onprogress() {
                rsvm.set(globalThis, "onprogress", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onratechange: {
            get: rsvm.RsCreateWindowGetter("onratechange", function onratechange() {
                return rsvm.get(globalThis, "onratechange");
            }), set: rsvm.RsCreateWindowSetter("onratechange", function onratechange() {
                rsvm.set(globalThis, "onratechange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onreset: {
            get: rsvm.RsCreateWindowGetter("onreset", function onreset() {
                return rsvm.get(globalThis, "onreset");
            }), set: rsvm.RsCreateWindowSetter("onreset", function onreset() {
                rsvm.set(globalThis, "onreset", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onresize: {
            get: rsvm.RsCreateWindowGetter("onresize", function onresize() {
                return rsvm.get(globalThis, "onresize");
            }), set: rsvm.RsCreateWindowSetter("onresize", function onresize() {
                rsvm.set(globalThis, "onresize", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onscroll: {
            get: rsvm.RsCreateWindowGetter("onscroll", function onscroll() {
                return rsvm.get(globalThis, "onscroll");
            }), set: rsvm.RsCreateWindowSetter("onscroll", function onscroll() {
                rsvm.set(globalThis, "onscroll", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onsecuritypolicyviolation: {
            get: rsvm.RsCreateWindowGetter("onsecuritypolicyviolation", function onsecuritypolicyviolation() {
                return rsvm.get(globalThis, "onsecuritypolicyviolation");
            }), set: rsvm.RsCreateWindowSetter("onsecuritypolicyviolation", function onsecuritypolicyviolation() {
                rsvm.set(globalThis, "onsecuritypolicyviolation", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onseeked: {
            get: rsvm.RsCreateWindowGetter("onseeked", function onseeked() {
                return rsvm.get(globalThis, "onseeked");
            }), set: rsvm.RsCreateWindowSetter("onseeked", function onseeked() {
                rsvm.set(globalThis, "onseeked", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onseeking: {
            get: rsvm.RsCreateWindowGetter("onseeking", function onseeking() {
                return rsvm.get(globalThis, "onseeking");
            }), set: rsvm.RsCreateWindowSetter("onseeking", function onseeking() {
                rsvm.set(globalThis, "onseeking", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onselect: {
            get: rsvm.RsCreateWindowGetter("onselect", function onselect() {
                return rsvm.get(globalThis, "onselect");
            }), set: rsvm.RsCreateWindowSetter("onselect", function onselect() {
                rsvm.set(globalThis, "onselect", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onslotchange: {
            get: rsvm.RsCreateWindowGetter("onslotchange", function onslotchange() {
                return rsvm.get(globalThis, "onslotchange");
            }), set: rsvm.RsCreateWindowSetter("onslotchange", function onslotchange() {
                rsvm.set(globalThis, "onslotchange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onstalled: {
            get: rsvm.RsCreateWindowGetter("onstalled", function onstalled() {
                return rsvm.get(globalThis, "onstalled");
            }), set: rsvm.RsCreateWindowSetter("onstalled", function onstalled() {
                rsvm.set(globalThis, "onstalled", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onsubmit: {
            get: rsvm.RsCreateWindowGetter("onsubmit", function onsubmit() {
                return rsvm.get(globalThis, "onsubmit");
            }), set: rsvm.RsCreateWindowSetter("onsubmit", function onsubmit() {
                rsvm.set(globalThis, "onsubmit", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onsuspend: {
            get: rsvm.RsCreateWindowGetter("onsuspend", function onsuspend() {
                return rsvm.get(globalThis, "onsuspend");
            }), set: rsvm.RsCreateWindowSetter("onsuspend", function onsuspend() {
                rsvm.set(globalThis, "onsuspend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ontimeupdate: {
            get: rsvm.RsCreateWindowGetter("ontimeupdate", function ontimeupdate() {
                return rsvm.get(globalThis, "ontimeupdate");
            }), set: rsvm.RsCreateWindowSetter("ontimeupdate", function ontimeupdate() {
                rsvm.set(globalThis, "ontimeupdate", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ontoggle: {
            get: rsvm.RsCreateWindowGetter("ontoggle", function ontoggle() {
                return rsvm.get(globalThis, "ontoggle");
            }), set: rsvm.RsCreateWindowSetter("ontoggle", function ontoggle() {
                rsvm.set(globalThis, "ontoggle", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onvolumechange: {
            get: rsvm.RsCreateWindowGetter("onvolumechange", function onvolumechange() {
                return rsvm.get(globalThis, "onvolumechange");
            }), set: rsvm.RsCreateWindowSetter("onvolumechange", function onvolumechange() {
                rsvm.set(globalThis, "onvolumechange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onwaiting: {
            get: rsvm.RsCreateWindowGetter("onwaiting", function onwaiting() {
                return rsvm.get(globalThis, "onwaiting");
            }), set: rsvm.RsCreateWindowSetter("onwaiting", function onwaiting() {
                rsvm.set(globalThis, "onwaiting", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onwebkitanimationend: {
            get: rsvm.RsCreateWindowGetter("onwebkitanimationend", function onwebkitanimationend() {
                return rsvm.get(globalThis, "onwebkitanimationend");
            }), set: rsvm.RsCreateWindowSetter("onwebkitanimationend", function onwebkitanimationend() {
                rsvm.set(globalThis, "onwebkitanimationend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onwebkitanimationiteration: {
            get: rsvm.RsCreateWindowGetter("onwebkitanimationiteration", function onwebkitanimationiteration() {
                return rsvm.get(globalThis, "onwebkitanimationiteration");
            }), set: rsvm.RsCreateWindowSetter("onwebkitanimationiteration", function onwebkitanimationiteration() {
                rsvm.set(globalThis, "onwebkitanimationiteration", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onwebkitanimationstart: {
            get: rsvm.RsCreateWindowGetter("onwebkitanimationstart", function onwebkitanimationstart() {
                return rsvm.get(globalThis, "onwebkitanimationstart");
            }), set: rsvm.RsCreateWindowSetter("onwebkitanimationstart", function onwebkitanimationstart() {
                rsvm.set(globalThis, "onwebkitanimationstart", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onwebkittransitionend: {
            get: rsvm.RsCreateWindowGetter("onwebkittransitionend", function onwebkittransitionend() {
                return rsvm.get(globalThis, "onwebkittransitionend");
            }), set: rsvm.RsCreateWindowSetter("onwebkittransitionend", function onwebkittransitionend() {
                rsvm.set(globalThis, "onwebkittransitionend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onwheel: {
            get: rsvm.RsCreateWindowGetter("onwheel", function onwheel() {
                return rsvm.get(globalThis, "onwheel");
            }), set: rsvm.RsCreateWindowSetter("onwheel", function onwheel() {
                rsvm.set(globalThis, "onwheel", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onauxclick: {
            get: rsvm.RsCreateWindowGetter("onauxclick", function onauxclick() {
                return rsvm.get(globalThis, "onauxclick");
            }), set: rsvm.RsCreateWindowSetter("onauxclick", function onauxclick() {
                rsvm.set(globalThis, "onauxclick", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ongotpointercapture: {
            get: rsvm.RsCreateWindowGetter("ongotpointercapture", function ongotpointercapture() {
                return rsvm.get(globalThis, "ongotpointercapture");
            }), set: rsvm.RsCreateWindowSetter("ongotpointercapture", function ongotpointercapture() {
                rsvm.set(globalThis, "ongotpointercapture", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onlostpointercapture: {
            get: rsvm.RsCreateWindowGetter("onlostpointercapture", function onlostpointercapture() {
                return rsvm.get(globalThis, "onlostpointercapture");
            }), set: rsvm.RsCreateWindowSetter("onlostpointercapture", function onlostpointercapture() {
                rsvm.set(globalThis, "onlostpointercapture", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerdown: {
            get: rsvm.RsCreateWindowGetter("onpointerdown", function onpointerdown() {
                return rsvm.get(globalThis, "onpointerdown");
            }), set: rsvm.RsCreateWindowSetter("onpointerdown", function onpointerdown() {
                rsvm.set(globalThis, "onpointerdown", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointermove: {
            get: rsvm.RsCreateWindowGetter("onpointermove", function onpointermove() {
                return rsvm.get(globalThis, "onpointermove");
            }), set: rsvm.RsCreateWindowSetter("onpointermove", function onpointermove() {
                rsvm.set(globalThis, "onpointermove", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerrawupdate: {
            get: rsvm.RsCreateWindowGetter("onpointerrawupdate", function onpointerrawupdate() {
                return rsvm.get(globalThis, "onpointerrawupdate");
            }), set: rsvm.RsCreateWindowSetter("onpointerrawupdate", function onpointerrawupdate() {
                rsvm.set(globalThis, "onpointerrawupdate", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerup: {
            get: rsvm.RsCreateWindowGetter("onpointerup", function onpointerup() {
                return rsvm.get(globalThis, "onpointerup");
            }), set: rsvm.RsCreateWindowSetter("onpointerup", function onpointerup() {
                rsvm.set(globalThis, "onpointerup", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointercancel: {
            get: rsvm.RsCreateWindowGetter("onpointercancel", function onpointercancel() {
                return rsvm.get(globalThis, "onpointercancel");
            }), set: rsvm.RsCreateWindowSetter("onpointercancel", function onpointercancel() {
                rsvm.set(globalThis, "onpointercancel", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerover: {
            get: rsvm.RsCreateWindowGetter("onpointerover", function onpointerover() {
                return rsvm.get(globalThis, "onpointerover");
            }), set: rsvm.RsCreateWindowSetter("onpointerover", function onpointerover() {
                rsvm.set(globalThis, "onpointerover", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerout: {
            get: rsvm.RsCreateWindowGetter("onpointerout", function onpointerout() {
                return rsvm.get(globalThis, "onpointerout");
            }), set: rsvm.RsCreateWindowSetter("onpointerout", function onpointerout() {
                rsvm.set(globalThis, "onpointerout", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerenter: {
            get: rsvm.RsCreateWindowGetter("onpointerenter", function onpointerenter() {
                return rsvm.get(globalThis, "onpointerenter");
            }), set: rsvm.RsCreateWindowSetter("onpointerenter", function onpointerenter() {
                rsvm.set(globalThis, "onpointerenter", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpointerleave: {
            get: rsvm.RsCreateWindowGetter("onpointerleave", function onpointerleave() {
                return rsvm.get(globalThis, "onpointerleave");
            }), set: rsvm.RsCreateWindowSetter("onpointerleave", function onpointerleave() {
                rsvm.set(globalThis, "onpointerleave", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onselectstart: {
            get: rsvm.RsCreateWindowGetter("onselectstart", function onselectstart() {
                return rsvm.get(globalThis, "onselectstart");
            }), set: rsvm.RsCreateWindowSetter("onselectstart", function onselectstart() {
                rsvm.set(globalThis, "onselectstart", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onselectionchange: {
            get: rsvm.RsCreateWindowGetter("onselectionchange", function onselectionchange() {
                return rsvm.get(globalThis, "onselectionchange");
            }), set: rsvm.RsCreateWindowSetter("onselectionchange", function onselectionchange() {
                rsvm.set(globalThis, "onselectionchange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onanimationend: {
            get: rsvm.RsCreateWindowGetter("onanimationend", function onanimationend() {
                return rsvm.get(globalThis, "onanimationend");
            }), set: rsvm.RsCreateWindowSetter("onanimationend", function onanimationend() {
                rsvm.set(globalThis, "onanimationend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onanimationiteration: {
            get: rsvm.RsCreateWindowGetter("onanimationiteration", function onanimationiteration() {
                return rsvm.get(globalThis, "onanimationiteration");
            }), set: rsvm.RsCreateWindowSetter("onanimationiteration", function onanimationiteration() {
                rsvm.set(globalThis, "onanimationiteration", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onanimationstart: {
            get: rsvm.RsCreateWindowGetter("onanimationstart", function onanimationstart() {
                return rsvm.get(globalThis, "onanimationstart");
            }), set: rsvm.RsCreateWindowSetter("onanimationstart", function onanimationstart() {
                rsvm.set(globalThis, "onanimationstart", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ontransitionrun: {
            get: rsvm.RsCreateWindowGetter("ontransitionrun", function ontransitionrun() {
                return rsvm.get(globalThis, "ontransitionrun");
            }), set: rsvm.RsCreateWindowSetter("ontransitionrun", function ontransitionrun() {
                rsvm.set(globalThis, "ontransitionrun", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ontransitionstart: {
            get: rsvm.RsCreateWindowGetter("ontransitionstart", function ontransitionstart() {
                return rsvm.get(globalThis, "ontransitionstart");
            }), set: rsvm.RsCreateWindowSetter("ontransitionstart", function ontransitionstart() {
                rsvm.set(globalThis, "ontransitionstart", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ontransitionend: {
            get: rsvm.RsCreateWindowGetter("ontransitionend", function ontransitionend() {
                return rsvm.get(globalThis, "ontransitionend");
            }), set: rsvm.RsCreateWindowSetter("ontransitionend", function ontransitionend() {
                rsvm.set(globalThis, "ontransitionend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ontransitioncancel: {
            get: rsvm.RsCreateWindowGetter("ontransitioncancel", function ontransitioncancel() {
                return rsvm.get(globalThis, "ontransitioncancel");
            }), set: rsvm.RsCreateWindowSetter("ontransitioncancel", function ontransitioncancel() {
                rsvm.set(globalThis, "ontransitioncancel", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onafterprint: {
            get: rsvm.RsCreateWindowGetter("onafterprint", function onafterprint() {
                return rsvm.get(globalThis, "onafterprint");
            }), set: rsvm.RsCreateWindowSetter("onafterprint", function onafterprint() {
                rsvm.set(globalThis, "onafterprint", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onbeforeprint: {
            get: rsvm.RsCreateWindowGetter("onbeforeprint", function onbeforeprint() {
                return rsvm.get(globalThis, "onbeforeprint");
            }), set: rsvm.RsCreateWindowSetter("onbeforeprint", function onbeforeprint() {
                rsvm.set(globalThis, "onbeforeprint", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onbeforeunload: {
            get: rsvm.RsCreateWindowGetter("onbeforeunload", function onbeforeunload() {
                return rsvm.get(globalThis, "onbeforeunload");
            }), set: rsvm.RsCreateWindowSetter("onbeforeunload", function onbeforeunload() {
                rsvm.set(globalThis, "onbeforeunload", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onhashchange: {
            get: rsvm.RsCreateWindowGetter("onhashchange", function onhashchange() {
                return rsvm.get(globalThis, "onhashchange");
            }), set: rsvm.RsCreateWindowSetter("onhashchange", function onhashchange() {
                rsvm.set(globalThis, "onhashchange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onlanguagechange: {
            get: rsvm.RsCreateWindowGetter("onlanguagechange", function onlanguagechange() {
                return rsvm.get(globalThis, "onlanguagechange");
            }), set: rsvm.RsCreateWindowSetter("onlanguagechange", function onlanguagechange() {
                rsvm.set(globalThis, "onlanguagechange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmessage: {
            get: rsvm.RsCreateWindowGetter("onmessage", function onmessage() {
                return rsvm.get(globalThis, "onmessage");
            }), set: rsvm.RsCreateWindowSetter("onmessage", function onmessage() {
                rsvm.set(globalThis, "onmessage", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onmessageerror: {
            get: rsvm.RsCreateWindowGetter("onmessageerror", function onmessageerror() {
                return rsvm.get(globalThis, "onmessageerror");
            }), set: rsvm.RsCreateWindowSetter("onmessageerror", function onmessageerror() {
                rsvm.set(globalThis, "onmessageerror", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onoffline: {
            get: rsvm.RsCreateWindowGetter("onoffline", function onoffline() {
                return rsvm.get(globalThis, "onoffline");
            }), set: rsvm.RsCreateWindowSetter("onoffline", function onoffline() {
                rsvm.set(globalThis, "onoffline", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ononline: {
            get: rsvm.RsCreateWindowGetter("ononline", function ononline() {
                return rsvm.get(globalThis, "ononline");
            }), set: rsvm.RsCreateWindowSetter("ononline", function ononline() {
                rsvm.set(globalThis, "ononline", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpagehide: {
            get: rsvm.RsCreateWindowGetter("onpagehide", function onpagehide() {
                return rsvm.get(globalThis, "onpagehide");
            }), set: rsvm.RsCreateWindowSetter("onpagehide", function onpagehide() {
                rsvm.set(globalThis, "onpagehide", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpageshow: {
            get: rsvm.RsCreateWindowGetter("onpageshow", function onpageshow() {
                return rsvm.get(globalThis, "onpageshow");
            }), set: rsvm.RsCreateWindowSetter("onpageshow", function onpageshow() {
                rsvm.set(globalThis, "onpageshow", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onpopstate: {
            get: rsvm.RsCreateWindowGetter("onpopstate", function onpopstate() {
                return rsvm.get(globalThis, "onpopstate");
            }), set: rsvm.RsCreateWindowSetter("onpopstate", function onpopstate() {
                rsvm.set(globalThis, "onpopstate", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onrejectionhandled: {
            get: rsvm.RsCreateWindowGetter("onrejectionhandled", function onrejectionhandled() {
                return rsvm.get(globalThis, "onrejectionhandled");
            }), set: rsvm.RsCreateWindowSetter("onrejectionhandled", function onrejectionhandled() {
                rsvm.set(globalThis, "onrejectionhandled", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onstorage: {
            get: rsvm.RsCreateWindowGetter("onstorage", function onstorage() {
                return rsvm.get(globalThis, "onstorage");
            }), set: rsvm.RsCreateWindowSetter("onstorage", function onstorage() {
                rsvm.set(globalThis, "onstorage", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onunhandledrejection: {
            get: rsvm.RsCreateWindowGetter("onunhandledrejection", function onunhandledrejection() {
                return rsvm.get(globalThis, "onunhandledrejection");
            }), set: rsvm.RsCreateWindowSetter("onunhandledrejection", function onunhandledrejection() {
                rsvm.set(globalThis, "onunhandledrejection", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onunload: {
            get: rsvm.RsCreateWindowGetter("onunload", function onunload() {
                return rsvm.get(globalThis, "onunload");
            }), set: rsvm.RsCreateWindowSetter("onunload", function onunload() {
                rsvm.set(globalThis, "onunload", arguments[0]);
            }), enumerable: true, configurable: true
        },
        crossOriginIsolated: {
            get: rsvm.RsCreateWindowGetter("crossOriginIsolated", function crossOriginIsolated() {
                return rsvm.get(globalThis, "crossOriginIsolated");
            }), set: undefined, enumerable: true, configurable: true
        },
        scheduler: {
            get: rsvm.RsCreateWindowGetter("scheduler", function scheduler() {
                return rsvm.get(globalThis, "scheduler");
            }), set: rsvm.RsCreateWindowSetter("scheduler", function scheduler() {
                rsvm.set(globalThis, "scheduler", arguments[0]);
            }), enumerable: true, configurable: true
        },
        alert: {
            value: rsvm.RsCreateWindowAction("alert", 0, function alert() {
            }), writable: true, enumerable: true, configurable: true
        },
        atob: {
            value: rsvm.RsCreateWindowAction("atob", 1, function atob() {
                return rsvm.atob.apply(this, arguments);
            }), writable: true, enumerable: true, configurable: true
        },
        blur: {
            value: rsvm.RsCreateWindowAction("blur", 0, function blur() {
            }), writable: true, enumerable: true, configurable: true
        },
        btoa: {
            value: rsvm.RsCreateWindowAction("btoa", 1, function btoa() {
                return rsvm.btoa.apply(this, arguments);
            }), writable: true, enumerable: true, configurable: true
        },
        cancelAnimationFrame: {
            value: rsvm.RsCreateWindowAction("cancelAnimationFrame", 1, function cancelAnimationFrame() {
            }), writable: true, enumerable: true, configurable: true
        },
        cancelIdleCallback: {
            value: rsvm.RsCreateWindowAction("cancelIdleCallback", 1, function cancelIdleCallback() {
            }), writable: true, enumerable: true, configurable: true
        },
        captureEvents: {
            value: rsvm.RsCreateWindowAction("captureEvents", 0, function captureEvents() {
            }), writable: true, enumerable: true, configurable: true
        },
        clearInterval: {
            value: rsvm.RsCreateWindowAction("clearInterval", 0, function clearInterval() {
                if (rsvm.timerID.hasOwnProperty(arguments[0])) {
                    delete rsvm.timerID[arguments[0]];
                }
            }), writable: true, enumerable: true, configurable: true
        },
        clearTimeout: {
            value: rsvm.RsCreateWindowAction("clearTimeout", 0, function clearTimeout() {
                if (rsvm.timerID.hasOwnProperty(arguments[0])) {
                    delete rsvm.timerID[arguments[0]];
                }
            }), writable: true, enumerable: true, configurable: true
        },
        close: {
            value: rsvm.RsCreateWindowAction("close", 0, function close() {
            }), writable: true, enumerable: true, configurable: true
        },
        confirm: {
            value: rsvm.RsCreateWindowAction("confirm", 0, function confirm() {
            }), writable: true, enumerable: true, configurable: true
        },
        createImageBitmap: {
            value: rsvm.RsCreateWindowAction("createImageBitmap", 1, function createImageBitmap() {
            }), writable: true, enumerable: true, configurable: true
        },
        fetch: {
            value: rsvm.RsCreateWindowAction("fetch", 1, function fetch() {
                // return rsvm.fetch.apply(this, arguments);
            }), writable: true, enumerable: true, configurable: true
        },
        find: {
            value: rsvm.RsCreateWindowAction("find", 0, function find() {
            }), writable: true, enumerable: true, configurable: true
        },
        focus: {
            value: rsvm.RsCreateWindowAction("focus", 0, function focus() {
            }), writable: true, enumerable: true, configurable: true
        },
        getComputedStyle: {
            value: rsvm.RsCreateWindowAction("getComputedStyle", 1, function getComputedStyle() {
                switch (rsvm.siteInfo.version) {
                    case "226":
                    case "227":
                        var target = rsvm.prototype.CSSStyleDeclaration.new();
                        var obj = JSON.parse('{"0":"accent-color","1":"align-content","2":"align-items","3":"align-self","4":"alignment-baseline","5":"animation-composition","6":"animation-delay","7":"animation-direction","8":"animation-duration","9":"animation-fill-mode","10":"animation-iteration-count","11":"animation-name","12":"animation-play-state","13":"animation-timing-function","14":"app-region","15":"appearance","16":"backdrop-filter","17":"backface-visibility","18":"background-attachment","19":"background-blend-mode","20":"background-clip","21":"background-color","22":"background-image","23":"background-origin","24":"background-position","25":"background-repeat","26":"background-size","27":"baseline-shift","28":"baseline-source","29":"block-size","30":"border-block-end-color","31":"border-block-end-style","32":"border-block-end-width","33":"border-block-start-color","34":"border-block-start-style","35":"border-block-start-width","36":"border-bottom-color","37":"border-bottom-left-radius","38":"border-bottom-right-radius","39":"border-bottom-style","40":"border-bottom-width","41":"border-collapse","42":"border-end-end-radius","43":"border-end-start-radius","44":"border-image-outset","45":"border-image-repeat","46":"border-image-slice","47":"border-image-source","48":"border-image-width","49":"border-inline-end-color","50":"border-inline-end-style","51":"border-inline-end-width","52":"border-inline-start-color","53":"border-inline-start-style","54":"border-inline-start-width","55":"border-left-color","56":"border-left-style","57":"border-left-width","58":"border-right-color","59":"border-right-style","60":"border-right-width","61":"border-start-end-radius","62":"border-start-start-radius","63":"border-top-color","64":"border-top-left-radius","65":"border-top-right-radius","66":"border-top-style","67":"border-top-width","68":"bottom","69":"box-shadow","70":"box-sizing","71":"break-after","72":"break-before","73":"break-inside","74":"buffered-rendering","75":"caption-side","76":"caret-color","77":"clear","78":"clip","79":"clip-path","80":"clip-rule","81":"color","82":"color-interpolation","83":"color-interpolation-filters","84":"color-rendering","85":"column-count","86":"column-gap","87":"column-rule-color","88":"column-rule-style","89":"column-rule-width","90":"column-span","91":"column-width","92":"contain-intrinsic-block-size","93":"contain-intrinsic-height","94":"contain-intrinsic-inline-size","95":"contain-intrinsic-size","96":"contain-intrinsic-width","97":"container-name","98":"container-type","99":"content","100":"cursor","101":"cx","102":"cy","103":"d","104":"direction","105":"display","106":"dominant-baseline","107":"empty-cells","108":"fill","109":"fill-opacity","110":"fill-rule","111":"filter","112":"flex-basis","113":"flex-direction","114":"flex-grow","115":"flex-shrink","116":"flex-wrap","117":"float","118":"flood-color","119":"flood-opacity","120":"font-family","121":"font-kerning","122":"font-optical-sizing","123":"font-palette","124":"font-size","125":"font-stretch","126":"font-style","127":"font-synthesis-small-caps","128":"font-synthesis-style","129":"font-synthesis-weight","130":"font-variant","131":"font-variant-alternates","132":"font-variant-caps","133":"font-variant-east-asian","134":"font-variant-ligatures","135":"font-variant-numeric","136":"font-weight","137":"grid-auto-columns","138":"grid-auto-flow","139":"grid-auto-rows","140":"grid-column-end","141":"grid-column-start","142":"grid-row-end","143":"grid-row-start","144":"grid-template-areas","145":"grid-template-columns","146":"grid-template-rows","147":"height","148":"hyphenate-character","149":"hyphenate-limit-chars","150":"hyphens","151":"image-orientation","152":"image-rendering","153":"initial-letter","154":"inline-size","155":"inset-block-end","156":"inset-block-start","157":"inset-inline-end","158":"inset-inline-start","159":"isolation","160":"justify-content","161":"justify-items","162":"justify-self","163":"left","164":"letter-spacing","165":"lighting-color","166":"line-break","167":"line-height","168":"list-style-image","169":"list-style-position","170":"list-style-type","171":"margin-block-end","172":"margin-block-start","173":"margin-bottom","174":"margin-inline-end","175":"margin-inline-start","176":"margin-left","177":"margin-right","178":"margin-top","179":"marker-end","180":"marker-mid","181":"marker-start","182":"mask-type","183":"math-depth","184":"math-shift","185":"math-style","186":"max-block-size","187":"max-height","188":"max-inline-size","189":"max-width","190":"min-block-size","191":"min-height","192":"min-inline-size","193":"min-width","194":"mix-blend-mode","195":"object-fit","196":"object-position","197":"object-view-box","198":"offset-distance","199":"offset-path","200":"offset-rotate","201":"opacity","202":"order","203":"orphans","204":"outline-color","205":"outline-offset","206":"outline-style","207":"outline-width","208":"overflow-anchor","209":"overflow-clip-margin","210":"overflow-wrap","211":"overflow-x","212":"overflow-y","213":"overscroll-behavior-block","214":"overscroll-behavior-inline","215":"padding-block-end","216":"padding-block-start","217":"padding-bottom","218":"padding-inline-end","219":"padding-inline-start","220":"padding-left","221":"padding-right","222":"padding-top","223":"paint-order","224":"perspective","225":"perspective-origin","226":"pointer-events","227":"position","228":"r","229":"resize","230":"right","231":"rotate","232":"row-gap","233":"ruby-position","234":"rx","235":"ry","236":"scale","237":"scroll-behavior","238":"scroll-margin-block-end","239":"scroll-margin-block-start","240":"scroll-margin-inline-end","241":"scroll-margin-inline-start","242":"scroll-padding-block-end","243":"scroll-padding-block-start","244":"scroll-padding-inline-end","245":"scroll-padding-inline-start","246":"scrollbar-gutter","247":"shape-image-threshold","248":"shape-margin","249":"shape-outside","250":"shape-rendering","251":"speak","252":"stop-color","253":"stop-opacity","254":"stroke","255":"stroke-dasharray","256":"stroke-dashoffset","257":"stroke-linecap","258":"stroke-linejoin","259":"stroke-miterlimit","260":"stroke-opacity","261":"stroke-width","262":"tab-size","263":"table-layout","264":"text-align","265":"text-align-last","266":"text-anchor","267":"text-decoration","268":"text-decoration-color","269":"text-decoration-line","270":"text-decoration-skip-ink","271":"text-decoration-style","272":"text-emphasis-color","273":"text-emphasis-position","274":"text-emphasis-style","275":"text-indent","276":"text-overflow","277":"text-rendering","278":"text-shadow","279":"text-size-adjust","280":"text-transform","281":"text-underline-position","282":"text-wrap","283":"top","284":"touch-action","285":"transform","286":"transform-origin","287":"transform-style","288":"transition-delay","289":"transition-duration","290":"transition-property","291":"transition-timing-function","292":"translate","293":"unicode-bidi","294":"user-select","295":"vector-effect","296":"vertical-align","297":"view-transition-name","298":"visibility","299":"white-space-collapse","300":"widows","301":"width","302":"will-change","303":"word-break","304":"word-spacing","305":"writing-mode","306":"x","307":"y","308":"z-index","309":"zoom","310":"-webkit-border-horizontal-spacing","311":"-webkit-border-image","312":"-webkit-border-vertical-spacing","313":"-webkit-box-align","314":"-webkit-box-decoration-break","315":"-webkit-box-direction","316":"-webkit-box-flex","317":"-webkit-box-ordinal-group","318":"-webkit-box-orient","319":"-webkit-box-pack","320":"-webkit-box-reflect","321":"-webkit-font-smoothing","322":"-webkit-highlight","323":"-webkit-line-break","324":"-webkit-line-clamp","325":"-webkit-locale","326":"-webkit-mask-box-image","327":"-webkit-mask-box-image-outset","328":"-webkit-mask-box-image-repeat","329":"-webkit-mask-box-image-slice","330":"-webkit-mask-box-image-source","331":"-webkit-mask-box-image-width","332":"-webkit-mask-clip","333":"-webkit-mask-composite","334":"-webkit-mask-image","335":"-webkit-mask-origin","336":"-webkit-mask-position","337":"-webkit-mask-repeat","338":"-webkit-mask-size","339":"-webkit-print-color-adjust","340":"-webkit-rtl-ordering","341":"-webkit-tap-highlight-color","342":"-webkit-text-combine","343":"-webkit-text-decorations-in-effect","344":"-webkit-text-fill-color","345":"-webkit-text-orientation","346":"-webkit-text-security","347":"-webkit-text-stroke-color","348":"-webkit-text-stroke-width","349":"-webkit-user-drag","350":"-webkit-user-modify","351":"-webkit-writing-mode","accentColor":"auto","additiveSymbols":"","alignContent":"normal","alignItems":"normal","alignSelf":"auto","alignmentBaseline":"auto","all":"","animation":"none 0s ease 0s 1 normal none running","animationComposition":"replace","animationDelay":"0s","animationDirection":"normal","animationDuration":"0s","animationFillMode":"none","animationIterationCount":"1","animationName":"none","animationPlayState":"running","animationTimingFunction":"ease","appRegion":"none","appearance":"none","ascentOverride":"","aspectRatio":"auto","backdropFilter":"none","backfaceVisibility":"visible","background":"rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box","backgroundAttachment":"scroll","backgroundBlendMode":"normal","backgroundClip":"border-box","backgroundColor":"rgb(255, 255, 255)","backgroundImage":"none","backgroundOrigin":"padding-box","backgroundPosition":"0% 0%","backgroundPositionX":"0%","backgroundPositionY":"0%","backgroundRepeat":"repeat","backgroundRepeatX":"repeat","backgroundRepeatY":"repeat","backgroundSize":"auto","basePalette":"","baselineShift":"0px","baselineSource":"auto","blockSize":"269px","border":"0px none rgb(0, 0, 0)","borderBlock":"0px none rgb(0, 0, 0)","borderBlockColor":"rgb(0, 0, 0)","borderBlockEnd":"0px none rgb(0, 0, 0)","borderBlockEndColor":"rgb(0, 0, 0)","borderBlockEndStyle":"none","borderBlockEndWidth":"0px","borderBlockStart":"0px none rgb(0, 0, 0)","borderBlockStartColor":"rgb(0, 0, 0)","borderBlockStartStyle":"none","borderBlockStartWidth":"0px","borderBlockStyle":"none","borderBlockWidth":"0px","borderBottom":"0px none rgb(0, 0, 0)","borderBottomColor":"rgb(0, 0, 0)","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderBottomStyle":"none","borderBottomWidth":"0px","borderCollapse":"separate","borderColor":"rgb(0, 0, 0)","borderEndEndRadius":"0px","borderEndStartRadius":"0px","borderImage":"none","borderImageOutset":"0","borderImageRepeat":"stretch","borderImageSlice":"100%","borderImageSource":"none","borderImageWidth":"1","borderInline":"0px none rgb(0, 0, 0)","borderInlineColor":"rgb(0, 0, 0)","borderInlineEnd":"0px none rgb(0, 0, 0)","borderInlineEndColor":"rgb(0, 0, 0)","borderInlineEndStyle":"none","borderInlineEndWidth":"0px","borderInlineStart":"0px none rgb(0, 0, 0)","borderInlineStartColor":"rgb(0, 0, 0)","borderInlineStartStyle":"none","borderInlineStartWidth":"0px","borderInlineStyle":"none","borderInlineWidth":"0px","borderLeft":"0px none rgb(0, 0, 0)","borderLeftColor":"rgb(0, 0, 0)","borderLeftStyle":"none","borderLeftWidth":"0px","borderRadius":"0px","borderRight":"0px none rgb(0, 0, 0)","borderRightColor":"rgb(0, 0, 0)","borderRightStyle":"none","borderRightWidth":"0px","borderSpacing":"0px 0px","borderStartEndRadius":"0px","borderStartStartRadius":"0px","borderStyle":"none","borderTop":"0px none rgb(0, 0, 0)","borderTopColor":"rgb(0, 0, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderTopStyle":"none","borderTopWidth":"0px","borderWidth":"0px","bottom":"auto","boxShadow":"none","boxSizing":"content-box","breakAfter":"auto","breakBefore":"auto","breakInside":"auto","bufferedRendering":"auto","captionSide":"top","caretColor":"rgb(0, 0, 0)","clear":"none","clip":"auto","clipPath":"none","clipRule":"nonzero","color":"rgb(0, 0, 0)","colorInterpolation":"srgb","colorInterpolationFilters":"linearrgb","colorRendering":"auto","colorScheme":"normal","columnCount":"auto","columnFill":"balance","columnGap":"normal","columnRule":"0px none rgb(0, 0, 0)","columnRuleColor":"rgb(0, 0, 0)","columnRuleStyle":"none","columnRuleWidth":"0px","columnSpan":"none","columnWidth":"auto","columns":"auto auto","contain":"none","containIntrinsicBlockSize":"none","containIntrinsicHeight":"none","containIntrinsicInlineSize":"none","containIntrinsicSize":"none","containIntrinsicWidth":"none","container":"none","containerName":"none","containerType":"normal","content":"normal","contentVisibility":"visible","counterIncrement":"none","counterReset":"none","counterSet":"none","cursor":"auto","cx":"0px","cy":"0px","d":"none","descentOverride":"","direction":"ltr","display":"block","dominantBaseline":"auto","emptyCells":"show","fallback":"","fill":"rgb(0, 0, 0)","fillOpacity":"1","fillRule":"nonzero","filter":"none","flex":"0 1 auto","flexBasis":"auto","flexDirection":"row","flexFlow":"row nowrap","flexGrow":"0","flexShrink":"1","flexWrap":"nowrap","float":"none","floodColor":"rgb(0, 0, 0)","floodOpacity":"1","font":"16px \\"Microsoft YaHei\\"","fontDisplay":"","fontFamily":"\\"Microsoft YaHei\\"","fontFeatureSettings":"normal","fontKerning":"auto","fontOpticalSizing":"auto","fontPalette":"normal","fontSize":"16px","fontStretch":"100%","fontStyle":"normal","fontSynthesis":"weight style small-caps","fontSynthesisSmallCaps":"auto","fontSynthesisStyle":"auto","fontSynthesisWeight":"auto","fontVariant":"normal","fontVariantAlternates":"normal","fontVariantCaps":"normal","fontVariantEastAsian":"normal","fontVariantLigatures":"normal","fontVariantNumeric":"normal","fontVariationSettings":"normal","fontWeight":"400","forcedColorAdjust":"auto","gap":"normal","grid":"none / none / none / row / auto / auto","gridArea":"auto / auto / auto / auto","gridAutoColumns":"auto","gridAutoFlow":"row","gridAutoRows":"auto","gridColumn":"auto / auto","gridColumnEnd":"auto","gridColumnGap":"normal","gridColumnStart":"auto","gridGap":"normal normal","gridRow":"auto / auto","gridRowEnd":"auto","gridRowGap":"normal","gridRowStart":"auto","gridTemplate":"none / none / none","gridTemplateAreas":"none","gridTemplateColumns":"none","gridTemplateRows":"none","height":"269px","hyphenateCharacter":"auto","hyphenateLimitChars":"auto","hyphens":"manual","imageOrientation":"from-image","imageRendering":"auto","inherits":"","initialLetter":"normal","initialValue":"","inlineSize":"707px","inset":"auto","insetBlock":"auto","insetBlockEnd":"auto","insetBlockStart":"auto","insetInline":"auto","insetInlineEnd":"auto","insetInlineStart":"auto","isolation":"auto","justifyContent":"normal","justifyItems":"normal","justifySelf":"auto","left":"auto","letterSpacing":"normal","lightingColor":"rgb(255, 255, 255)","lineBreak":"auto","lineGapOverride":"","lineHeight":"normal","listStyle":"outside none disc","listStyleImage":"none","listStylePosition":"outside","listStyleType":"disc","margin":"0px","marginBlock":"0px","marginBlockEnd":"0px","marginBlockStart":"0px","marginBottom":"0px","marginInline":"0px","marginInlineEnd":"0px","marginInlineStart":"0px","marginLeft":"0px","marginRight":"0px","marginTop":"0px","marker":"none","markerEnd":"none","markerMid":"none","markerStart":"none","mask":"none","maskType":"luminance","mathDepth":"0","mathShift":"normal","mathStyle":"normal","maxBlockSize":"none","maxHeight":"none","maxInlineSize":"none","maxWidth":"none","minBlockSize":"0px","minHeight":"0px","minInlineSize":"0px","minWidth":"0px","mixBlendMode":"normal","negative":"","objectFit":"fill","objectPosition":"50% 50%","objectViewBox":"none","offset":"none 0px auto 0deg","offsetDistance":"0px","offsetPath":"none","offsetRotate":"auto 0deg","opacity":"1","order":"0","orphans":"2","outline":"rgb(0, 0, 0) none 0px","outlineColor":"rgb(0, 0, 0)","outlineOffset":"0px","outlineStyle":"none","outlineWidth":"0px","overflow":"visible","overflowAnchor":"auto","overflowClipMargin":"0px","overflowWrap":"normal","overflowX":"visible","overflowY":"visible","overrideColors":"","overscrollBehavior":"auto","overscrollBehaviorBlock":"auto","overscrollBehaviorInline":"auto","overscrollBehaviorX":"auto","overscrollBehaviorY":"auto","pad":"","padding":"0px","paddingBlock":"0px","paddingBlockEnd":"0px","paddingBlockStart":"0px","paddingBottom":"0px","paddingInline":"0px","paddingInlineEnd":"0px","paddingInlineStart":"0px","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","page":"auto","pageBreakAfter":"auto","pageBreakBefore":"auto","pageBreakInside":"auto","pageOrientation":"","paintOrder":"normal","perspective":"none","perspectiveOrigin":"353.5px 134.5px","placeContent":"normal","placeItems":"normal","placeSelf":"auto","pointerEvents":"auto","position":"static","prefix":"","quotes":"auto","r":"0px","range":"","resize":"none","right":"auto","rotate":"none","rowGap":"normal","rubyPosition":"over","rx":"auto","ry":"auto","scale":"none","scrollBehavior":"auto","scrollMargin":"0px","scrollMarginBlock":"0px","scrollMarginBlockEnd":"0px","scrollMarginBlockStart":"0px","scrollMarginBottom":"0px","scrollMarginInline":"0px","scrollMarginInlineEnd":"0px","scrollMarginInlineStart":"0px","scrollMarginLeft":"0px","scrollMarginRight":"0px","scrollMarginTop":"0px","scrollPadding":"auto","scrollPaddingBlock":"auto","scrollPaddingBlockEnd":"auto","scrollPaddingBlockStart":"auto","scrollPaddingBottom":"auto","scrollPaddingInline":"auto","scrollPaddingInlineEnd":"auto","scrollPaddingInlineStart":"auto","scrollPaddingLeft":"auto","scrollPaddingRight":"auto","scrollPaddingTop":"auto","scrollSnapAlign":"none","scrollSnapStop":"normal","scrollSnapType":"none","scrollbarGutter":"auto","shapeImageThreshold":"0","shapeMargin":"0px","shapeOutside":"none","shapeRendering":"auto","size":"","sizeAdjust":"","speak":"normal","speakAs":"","src":"","stopColor":"rgb(0, 0, 0)","stopOpacity":"1","stroke":"none","strokeDasharray":"none","strokeDashoffset":"0px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeWidth":"1px","suffix":"","symbols":"","syntax":"","system":"","tabSize":"8","tableLayout":"auto","textAlign":"start","textAlignLast":"auto","textAnchor":"start","textCombineUpright":"none","textDecoration":"none solid rgb(0, 0, 0)","textDecorationColor":"rgb(0, 0, 0)","textDecorationLine":"none","textDecorationSkipInk":"auto","textDecorationStyle":"solid","textDecorationThickness":"auto","textEmphasis":"none rgb(0, 0, 0)","textEmphasisColor":"rgb(0, 0, 0)","textEmphasisPosition":"over","textEmphasisStyle":"none","textIndent":"0px","textOrientation":"mixed","textOverflow":"clip","textRendering":"auto","textShadow":"none","textSizeAdjust":"auto","textTransform":"none","textUnderlineOffset":"auto","textUnderlinePosition":"auto","textWrap":"wrap","top":"auto","touchAction":"auto","transform":"none","transformBox":"view-box","transformOrigin":"353.5px 134.5px","transformStyle":"flat","transition":"all 0s ease 0s","transitionDelay":"0s","transitionDuration":"0s","transitionProperty":"all","transitionTimingFunction":"ease","translate":"none","unicodeBidi":"normal","unicodeRange":"","userSelect":"auto","vectorEffect":"none","verticalAlign":"baseline","viewTransitionName":"none","visibility":"visible","webkitAlignContent":"normal","webkitAlignItems":"normal","webkitAlignSelf":"auto","webkitAnimation":"none 0s ease 0s 1 normal none running","webkitAnimationDelay":"0s","webkitAnimationDirection":"normal","webkitAnimationDuration":"0s","webkitAnimationFillMode":"none","webkitAnimationIterationCount":"1","webkitAnimationName":"none","webkitAnimationPlayState":"running","webkitAnimationTimingFunction":"ease","webkitAppRegion":"none","webkitAppearance":"none","webkitBackfaceVisibility":"visible","webkitBackgroundClip":"border-box","webkitBackgroundOrigin":"padding-box","webkitBackgroundSize":"auto","webkitBorderAfter":"0px none rgb(0, 0, 0)","webkitBorderAfterColor":"rgb(0, 0, 0)","webkitBorderAfterStyle":"none","webkitBorderAfterWidth":"0px","webkitBorderBefore":"0px none rgb(0, 0, 0)","webkitBorderBeforeColor":"rgb(0, 0, 0)","webkitBorderBeforeStyle":"none","webkitBorderBeforeWidth":"0px","webkitBorderBottomLeftRadius":"0px","webkitBorderBottomRightRadius":"0px","webkitBorderEnd":"0px none rgb(0, 0, 0)","webkitBorderEndColor":"rgb(0, 0, 0)","webkitBorderEndStyle":"none","webkitBorderEndWidth":"0px","webkitBorderHorizontalSpacing":"0px","webkitBorderImage":"none","webkitBorderRadius":"0px","webkitBorderStart":"0px none rgb(0, 0, 0)","webkitBorderStartColor":"rgb(0, 0, 0)","webkitBorderStartStyle":"none","webkitBorderStartWidth":"0px","webkitBorderTopLeftRadius":"0px","webkitBorderTopRightRadius":"0px","webkitBorderVerticalSpacing":"0px","webkitBoxAlign":"stretch","webkitBoxDecorationBreak":"slice","webkitBoxDirection":"normal","webkitBoxFlex":"0","webkitBoxOrdinalGroup":"1","webkitBoxOrient":"horizontal","webkitBoxPack":"start","webkitBoxReflect":"none","webkitBoxShadow":"none","webkitBoxSizing":"content-box","webkitClipPath":"none","webkitColumnBreakAfter":"auto","webkitColumnBreakBefore":"auto","webkitColumnBreakInside":"auto","webkitColumnCount":"auto","webkitColumnGap":"normal","webkitColumnRule":"0px none rgb(0, 0, 0)","webkitColumnRuleColor":"rgb(0, 0, 0)","webkitColumnRuleStyle":"none","webkitColumnRuleWidth":"0px","webkitColumnSpan":"none","webkitColumnWidth":"auto","webkitColumns":"auto auto","webkitFilter":"none","webkitFlex":"0 1 auto","webkitFlexBasis":"auto","webkitFlexDirection":"row","webkitFlexFlow":"row nowrap","webkitFlexGrow":"0","webkitFlexShrink":"1","webkitFlexWrap":"nowrap","webkitFontFeatureSettings":"normal","webkitFontSmoothing":"auto","webkitHighlight":"none","webkitHyphenateCharacter":"auto","webkitJustifyContent":"normal","webkitLineBreak":"auto","webkitLineClamp":"none","webkitLocale":"auto","webkitLogicalHeight":"269px","webkitLogicalWidth":"707px","webkitMarginAfter":"0px","webkitMarginBefore":"0px","webkitMarginEnd":"0px","webkitMarginStart":"0px","webkitMask":"","webkitMaskBoxImage":"none","webkitMaskBoxImageOutset":"0","webkitMaskBoxImageRepeat":"stretch","webkitMaskBoxImageSlice":"0 fill","webkitMaskBoxImageSource":"none","webkitMaskBoxImageWidth":"auto","webkitMaskClip":"border-box","webkitMaskComposite":"source-over","webkitMaskImage":"none","webkitMaskOrigin":"border-box","webkitMaskPosition":"0% 0%","webkitMaskPositionX":"0%","webkitMaskPositionY":"0%","webkitMaskRepeat":"repeat","webkitMaskRepeatX":"","webkitMaskRepeatY":"","webkitMaskSize":"auto","webkitMaxLogicalHeight":"none","webkitMaxLogicalWidth":"none","webkitMinLogicalHeight":"0px","webkitMinLogicalWidth":"0px","webkitOpacity":"1","webkitOrder":"0","webkitPaddingAfter":"0px","webkitPaddingBefore":"0px","webkitPaddingEnd":"0px","webkitPaddingStart":"0px","webkitPerspective":"none","webkitPerspectiveOrigin":"353.5px 134.5px","webkitPerspectiveOriginX":"","webkitPerspectiveOriginY":"","webkitPrintColorAdjust":"economy","webkitRtlOrdering":"logical","webkitRubyPosition":"before","webkitShapeImageThreshold":"0","webkitShapeMargin":"0px","webkitShapeOutside":"none","webkitTapHighlightColor":"rgba(0, 0, 0, 0.18)","webkitTextCombine":"none","webkitTextDecorationsInEffect":"none","webkitTextEmphasis":"none rgb(0, 0, 0)","webkitTextEmphasisColor":"rgb(0, 0, 0)","webkitTextEmphasisPosition":"over","webkitTextEmphasisStyle":"none","webkitTextFillColor":"rgb(0, 0, 0)","webkitTextOrientation":"vertical-right","webkitTextSecurity":"none","webkitTextSizeAdjust":"auto","webkitTextStroke":"","webkitTextStrokeColor":"rgb(0, 0, 0)","webkitTextStrokeWidth":"0px","webkitTransform":"none","webkitTransformOrigin":"353.5px 134.5px","webkitTransformOriginX":"","webkitTransformOriginY":"","webkitTransformOriginZ":"","webkitTransformStyle":"flat","webkitTransition":"all 0s ease 0s","webkitTransitionDelay":"0s","webkitTransitionDuration":"0s","webkitTransitionProperty":"all","webkitTransitionTimingFunction":"ease","webkitUserDrag":"auto","webkitUserModify":"read-only","webkitUserSelect":"auto","webkitWritingMode":"horizontal-tb","whiteSpace":"normal","whiteSpaceCollapse":"collapse","widows":"2","width":"707px","willChange":"auto","wordBreak":"normal","wordSpacing":"0px","wordWrap":"normal","writingMode":"horizontal-tb","x":"0px","y":"0px","zIndex":"auto","zoom":"1"}');
                        for (const key of Object.keys(obj)) {
                            target[key] = obj[key];
                        }
                        return target;
                    case "akamai":
                        if (arguments[0].localName === "div") {
                            var target = rsvm.prototype.CSSStyleDeclaration.new();
                            var obj = { "accentColor": "", "additiveSymbols": "", "alignContent": "", "alignItems": "", "alignSelf": "", "alignmentBaseline": "", "all": "", "animation": "", "animationComposition": "", "animationDelay": "", "animationDirection": "", "animationDuration": "", "animationFillMode": "", "animationIterationCount": "", "animationName": "", "animationPlayState": "", "animationTimingFunction": "", "appRegion": "", "appearance": "", "ascentOverride": "", "aspectRatio": "", "backdropFilter": "", "backfaceVisibility": "", "background": "", "backgroundAttachment": "", "backgroundBlendMode": "", "backgroundClip": "", "backgroundColor": "", "backgroundImage": "", "backgroundOrigin": "", "backgroundPosition": "", "backgroundPositionX": "", "backgroundPositionY": "", "backgroundRepeat": "", "backgroundRepeatX": "", "backgroundRepeatY": "", "backgroundSize": "", "basePalette": "", "baselineShift": "", "baselineSource": "", "blockSize": "", "border": "", "borderBlock": "", "borderBlockColor": "", "borderBlockEnd": "", "borderBlockEndColor": "", "borderBlockEndStyle": "", "borderBlockEndWidth": "", "borderBlockStart": "", "borderBlockStartColor": "", "borderBlockStartStyle": "", "borderBlockStartWidth": "", "borderBlockStyle": "", "borderBlockWidth": "", "borderBottom": "", "borderBottomColor": "", "borderBottomLeftRadius": "", "borderBottomRightRadius": "", "borderBottomStyle": "", "borderBottomWidth": "", "borderCollapse": "", "borderColor": "", "borderEndEndRadius": "", "borderEndStartRadius": "", "borderImage": "", "borderImageOutset": "", "borderImageRepeat": "", "borderImageSlice": "", "borderImageSource": "", "borderImageWidth": "", "borderInline": "", "borderInlineColor": "", "borderInlineEnd": "", "borderInlineEndColor": "", "borderInlineEndStyle": "", "borderInlineEndWidth": "", "borderInlineStart": "", "borderInlineStartColor": "", "borderInlineStartStyle": "", "borderInlineStartWidth": "", "borderInlineStyle": "", "borderInlineWidth": "", "borderLeft": "", "borderLeftColor": "", "borderLeftStyle": "", "borderLeftWidth": "", "borderRadius": "", "borderRight": "", "borderRightColor": "", "borderRightStyle": "", "borderRightWidth": "", "borderSpacing": "", "borderStartEndRadius": "", "borderStartStartRadius": "", "borderStyle": "", "borderTop": "", "borderTopColor": "", "borderTopLeftRadius": "", "borderTopRightRadius": "", "borderTopStyle": "", "borderTopWidth": "", "borderWidth": "", "bottom": "", "boxShadow": "", "boxSizing": "", "breakAfter": "", "breakBefore": "", "breakInside": "", "bufferedRendering": "", "captionSide": "", "caretColor": "", "clear": "", "clip": "", "clipPath": "", "clipRule": "", "color": "", "colorInterpolation": "", "colorInterpolationFilters": "", "colorRendering": "", "colorScheme": "", "columnCount": "", "columnFill": "", "columnGap": "", "columnRule": "", "columnRuleColor": "", "columnRuleStyle": "", "columnRuleWidth": "", "columnSpan": "", "columnWidth": "", "columns": "", "contain": "", "containIntrinsicBlockSize": "", "containIntrinsicHeight": "", "containIntrinsicInlineSize": "", "containIntrinsicSize": "", "containIntrinsicWidth": "", "container": "", "containerName": "", "containerType": "", "content": "", "contentVisibility": "", "counterIncrement": "", "counterReset": "", "counterSet": "", "cursor": "", "cx": "", "cy": "", "d": "", "descentOverride": "", "direction": "", "display": "", "dominantBaseline": "", "emptyCells": "", "fallback": "", "fill": "", "fillOpacity": "", "fillRule": "", "filter": "", "flex": "", "flexBasis": "", "flexDirection": "", "flexFlow": "", "flexGrow": "", "flexShrink": "", "flexWrap": "", "float": "", "floodColor": "", "floodOpacity": "", "font": "", "fontDisplay": "", "fontFamily": "", "fontFeatureSettings": "", "fontKerning": "", "fontOpticalSizing": "", "fontPalette": "", "fontSize": "", "fontStretch": "", "fontStyle": "", "fontSynthesis": "", "fontSynthesisSmallCaps": "", "fontSynthesisStyle": "", "fontSynthesisWeight": "", "fontVariant": "", "fontVariantAlternates": "", "fontVariantCaps": "", "fontVariantEastAsian": "", "fontVariantLigatures": "", "fontVariantNumeric": "", "fontVariationSettings": "", "fontWeight": "", "forcedColorAdjust": "", "gap": "", "grid": "", "gridArea": "", "gridAutoColumns": "", "gridAutoFlow": "", "gridAutoRows": "", "gridColumn": "", "gridColumnEnd": "", "gridColumnGap": "", "gridColumnStart": "", "gridGap": "", "gridRow": "", "gridRowEnd": "", "gridRowGap": "", "gridRowStart": "", "gridTemplate": "", "gridTemplateAreas": "", "gridTemplateColumns": "", "gridTemplateRows": "", "height": "", "hyphenateCharacter": "", "hyphenateLimitChars": "", "hyphens": "", "imageOrientation": "", "imageRendering": "", "inherits": "", "initialLetter": "", "initialValue": "", "inlineSize": "", "inset": "", "insetBlock": "", "insetBlockEnd": "", "insetBlockStart": "", "insetInline": "", "insetInlineEnd": "", "insetInlineStart": "", "isolation": "", "justifyContent": "", "justifyItems": "", "justifySelf": "", "left": "", "letterSpacing": "", "lightingColor": "", "lineBreak": "", "lineGapOverride": "", "lineHeight": "", "listStyle": "", "listStyleImage": "", "listStylePosition": "", "listStyleType": "", "margin": "", "marginBlock": "", "marginBlockEnd": "", "marginBlockStart": "", "marginBottom": "", "marginInline": "", "marginInlineEnd": "", "marginInlineStart": "", "marginLeft": "", "marginRight": "", "marginTop": "", "marker": "", "markerEnd": "", "markerMid": "", "markerStart": "", "mask": "", "maskType": "", "mathDepth": "", "mathShift": "", "mathStyle": "", "maxBlockSize": "", "maxHeight": "", "maxInlineSize": "", "maxWidth": "", "minBlockSize": "", "minHeight": "", "minInlineSize": "", "minWidth": "", "mixBlendMode": "", "negative": "", "objectFit": "", "objectPosition": "", "objectViewBox": "", "offset": "", "offsetDistance": "", "offsetPath": "", "offsetRotate": "", "opacity": "", "order": "", "orphans": "", "outline": "", "outlineColor": "", "outlineOffset": "", "outlineStyle": "", "outlineWidth": "", "overflow": "", "overflowAnchor": "", "overflowClipMargin": "", "overflowWrap": "", "overflowX": "", "overflowY": "", "overrideColors": "", "overscrollBehavior": "", "overscrollBehaviorBlock": "", "overscrollBehaviorInline": "", "overscrollBehaviorX": "", "overscrollBehaviorY": "", "pad": "", "padding": "", "paddingBlock": "", "paddingBlockEnd": "", "paddingBlockStart": "", "paddingBottom": "", "paddingInline": "", "paddingInlineEnd": "", "paddingInlineStart": "", "paddingLeft": "", "paddingRight": "", "paddingTop": "", "page": "", "pageBreakAfter": "", "pageBreakBefore": "", "pageBreakInside": "", "pageOrientation": "", "paintOrder": "", "perspective": "", "perspectiveOrigin": "", "placeContent": "", "placeItems": "", "placeSelf": "", "pointerEvents": "", "position": "", "prefix": "", "quotes": "", "r": "", "range": "", "resize": "", "right": "", "rotate": "", "rowGap": "", "rubyPosition": "", "rx": "", "ry": "", "scale": "", "scrollBehavior": "", "scrollMargin": "", "scrollMarginBlock": "", "scrollMarginBlockEnd": "", "scrollMarginBlockStart": "", "scrollMarginBottom": "", "scrollMarginInline": "", "scrollMarginInlineEnd": "", "scrollMarginInlineStart": "", "scrollMarginLeft": "", "scrollMarginRight": "", "scrollMarginTop": "", "scrollPadding": "", "scrollPaddingBlock": "", "scrollPaddingBlockEnd": "", "scrollPaddingBlockStart": "", "scrollPaddingBottom": "", "scrollPaddingInline": "", "scrollPaddingInlineEnd": "", "scrollPaddingInlineStart": "", "scrollPaddingLeft": "", "scrollPaddingRight": "", "scrollPaddingTop": "", "scrollSnapAlign": "", "scrollSnapStop": "", "scrollSnapType": "", "scrollbarGutter": "", "shapeImageThreshold": "", "shapeMargin": "", "shapeOutside": "", "shapeRendering": "", "size": "", "sizeAdjust": "", "speak": "", "speakAs": "", "src": "", "stopColor": "", "stopOpacity": "", "stroke": "", "strokeDasharray": "", "strokeDashoffset": "", "strokeLinecap": "", "strokeLinejoin": "", "strokeMiterlimit": "", "strokeOpacity": "", "strokeWidth": "", "suffix": "", "symbols": "", "syntax": "", "system": "", "tabSize": "", "tableLayout": "", "textAlign": "", "textAlignLast": "", "textAnchor": "", "textCombineUpright": "", "textDecoration": "", "textDecorationColor": "", "textDecorationLine": "", "textDecorationSkipInk": "", "textDecorationStyle": "", "textDecorationThickness": "", "textEmphasis": "", "textEmphasisColor": "", "textEmphasisPosition": "", "textEmphasisStyle": "", "textIndent": "", "textOrientation": "", "textOverflow": "", "textRendering": "", "textShadow": "", "textSizeAdjust": "", "textTransform": "", "textUnderlineOffset": "", "textUnderlinePosition": "", "textWrap": "", "top": "", "touchAction": "", "transform": "", "transformBox": "", "transformOrigin": "", "transformStyle": "", "transition": "", "transitionDelay": "", "transitionDuration": "", "transitionProperty": "", "transitionTimingFunction": "", "translate": "", "unicodeBidi": "", "unicodeRange": "", "userSelect": "", "vectorEffect": "", "verticalAlign": "", "viewTransitionName": "", "visibility": "", "webkitAlignContent": "", "webkitAlignItems": "", "webkitAlignSelf": "", "webkitAnimation": "", "webkitAnimationDelay": "", "webkitAnimationDirection": "", "webkitAnimationDuration": "", "webkitAnimationFillMode": "", "webkitAnimationIterationCount": "", "webkitAnimationName": "", "webkitAnimationPlayState": "", "webkitAnimationTimingFunction": "", "webkitAppRegion": "", "webkitAppearance": "", "webkitBackfaceVisibility": "", "webkitBackgroundClip": "", "webkitBackgroundOrigin": "", "webkitBackgroundSize": "", "webkitBorderAfter": "", "webkitBorderAfterColor": "", "webkitBorderAfterStyle": "", "webkitBorderAfterWidth": "", "webkitBorderBefore": "", "webkitBorderBeforeColor": "", "webkitBorderBeforeStyle": "", "webkitBorderBeforeWidth": "", "webkitBorderBottomLeftRadius": "", "webkitBorderBottomRightRadius": "", "webkitBorderEnd": "", "webkitBorderEndColor": "", "webkitBorderEndStyle": "", "webkitBorderEndWidth": "", "webkitBorderHorizontalSpacing": "", "webkitBorderImage": "", "webkitBorderRadius": "", "webkitBorderStart": "", "webkitBorderStartColor": "", "webkitBorderStartStyle": "", "webkitBorderStartWidth": "", "webkitBorderTopLeftRadius": "", "webkitBorderTopRightRadius": "", "webkitBorderVerticalSpacing": "", "webkitBoxAlign": "", "webkitBoxDecorationBreak": "", "webkitBoxDirection": "", "webkitBoxFlex": "", "webkitBoxOrdinalGroup": "", "webkitBoxOrient": "", "webkitBoxPack": "", "webkitBoxReflect": "", "webkitBoxShadow": "", "webkitBoxSizing": "", "webkitClipPath": "", "webkitColumnBreakAfter": "", "webkitColumnBreakBefore": "", "webkitColumnBreakInside": "", "webkitColumnCount": "", "webkitColumnGap": "", "webkitColumnRule": "", "webkitColumnRuleColor": "", "webkitColumnRuleStyle": "", "webkitColumnRuleWidth": "", "webkitColumnSpan": "", "webkitColumnWidth": "", "webkitColumns": "", "webkitFilter": "", "webkitFlex": "", "webkitFlexBasis": "", "webkitFlexDirection": "", "webkitFlexFlow": "", "webkitFlexGrow": "", "webkitFlexShrink": "", "webkitFlexWrap": "", "webkitFontFeatureSettings": "", "webkitFontSmoothing": "", "webkitHighlight": "", "webkitHyphenateCharacter": "", "webkitJustifyContent": "", "webkitLineBreak": "", "webkitLineClamp": "", "webkitLocale": "", "webkitLogicalHeight": "", "webkitLogicalWidth": "", "webkitMarginAfter": "", "webkitMarginBefore": "", "webkitMarginEnd": "", "webkitMarginStart": "", "webkitMask": "", "webkitMaskBoxImage": "", "webkitMaskBoxImageOutset": "", "webkitMaskBoxImageRepeat": "", "webkitMaskBoxImageSlice": "", "webkitMaskBoxImageSource": "", "webkitMaskBoxImageWidth": "", "webkitMaskClip": "", "webkitMaskComposite": "", "webkitMaskImage": "", "webkitMaskOrigin": "", "webkitMaskPosition": "", "webkitMaskPositionX": "", "webkitMaskPositionY": "", "webkitMaskRepeat": "", "webkitMaskRepeatX": "", "webkitMaskRepeatY": "", "webkitMaskSize": "", "webkitMaxLogicalHeight": "", "webkitMaxLogicalWidth": "", "webkitMinLogicalHeight": "", "webkitMinLogicalWidth": "", "webkitOpacity": "", "webkitOrder": "", "webkitPaddingAfter": "", "webkitPaddingBefore": "", "webkitPaddingEnd": "", "webkitPaddingStart": "", "webkitPerspective": "", "webkitPerspectiveOrigin": "", "webkitPerspectiveOriginX": "", "webkitPerspectiveOriginY": "", "webkitPrintColorAdjust": "", "webkitRtlOrdering": "", "webkitRubyPosition": "", "webkitShapeImageThreshold": "", "webkitShapeMargin": "", "webkitShapeOutside": "", "webkitTapHighlightColor": "", "webkitTextCombine": "", "webkitTextDecorationsInEffect": "", "webkitTextEmphasis": "", "webkitTextEmphasisColor": "", "webkitTextEmphasisPosition": "", "webkitTextEmphasisStyle": "", "webkitTextFillColor": "", "webkitTextOrientation": "", "webkitTextSecurity": "", "webkitTextSizeAdjust": "", "webkitTextStroke": "", "webkitTextStrokeColor": "", "webkitTextStrokeWidth": "", "webkitTransform": "", "webkitTransformOrigin": "", "webkitTransformOriginX": "", "webkitTransformOriginY": "", "webkitTransformOriginZ": "", "webkitTransformStyle": "", "webkitTransition": "", "webkitTransitionDelay": "", "webkitTransitionDuration": "", "webkitTransitionProperty": "", "webkitTransitionTimingFunction": "", "webkitUserDrag": "", "webkitUserModify": "", "webkitUserSelect": "", "webkitWritingMode": "", "whiteSpace": "", "whiteSpaceCollapse": "", "widows": "", "width": "", "willChange": "", "wordBreak": "", "wordSpacing": "", "wordWrap": "", "writingMode": "", "x": "", "y": "", "zIndex": "", "zoom": "" };
                            for (const key of Object.keys(obj)) {
                                target[key] = obj[key];
                            }
                            return target;
                        }
                }
            }), writable: true, enumerable: true, configurable: true
        },
        getSelection: {
            value: rsvm.RsCreateWindowAction("getSelection", 0, function getSelection() {
            }), writable: true, enumerable: true, configurable: true
        },
        matchMedia: {
            value: rsvm.RsCreateWindowAction("matchMedia", 1, function matchMedia() {
                switch (rsvm.siteInfo.version) {
                    case 'rs6_yaojian':
                        var value = rsvm.prototype.MediaQueryList.new();
                        var args = arguments[0].split(": ").map(e => {
                            return e.replace(/ +/, "");
                        }).join(": ");
                        rsvm.set(value, "media", args);
                        switch (args) {
                            case '(any-pointer: fine)':
                                rsvm.set(value, "matches", false); break;
                            case '(any-pointer: coarse)':
                                rsvm.set(value, "matches", true); break;
                            case '(any-pointer: none)':
                                rsvm.set(value, "matches", false); break;
                            case '(any-pointer)':
                                rsvm.set(value, "matches", true); break;
                            case '(any-hover: hover)':
                                rsvm.set(value, "matches", false); break;
                            case '(any-hover: on-demand)':
                                rsvm.set(value, "matches", false); break;
                            case '(any-hover: none)':
                                rsvm.set(value, "matches", true); break;
                            case '(any-hover)':
                                rsvm.set(value, "matches", false); break;
                            case '(color-gamut: srgb)':
                                rsvm.set(value, "matches", true); break;
                            case '(color-gamut: p3)':
                                rsvm.set(value, "matches", false); break;
                            case '(color-gamut: rec2020)':
                                rsvm.set(value, "matches", false); break;
                            case '(color-gamut)':
                                rsvm.set(value, "matches", true); break;
                        }
                        return value;
                }
            }), writable: true, enumerable: true, configurable: true
        },
        moveBy: {
            value: rsvm.RsCreateWindowAction("moveBy", 2, function moveBy() {
            }), writable: true, enumerable: true, configurable: true
        },
        moveTo: {
            value: rsvm.RsCreateWindowAction("moveTo", 2, function moveTo() {
            }), writable: true, enumerable: true, configurable: true
        },
        open: {
            value: rsvm.RsCreateWindowAction("open", 0, function open() {
            }), writable: true, enumerable: true, configurable: true
        },
        postMessage: {
            value: rsvm.RsCreateWindowAction("postMessage", 1, function postMessage() {
            }), writable: true, enumerable: true, configurable: true
        },
        print: {
            value: rsvm.RsCreateWindowAction("print", 0, function print() {
            }), writable: true, enumerable: true, configurable: true
        },
        prompt: {
            value: rsvm.RsCreateWindowAction("prompt", 0, function prompt() {
            }), writable: true, enumerable: true, configurable: true
        },
        queueMicrotask: {
            value: rsvm.RsCreateWindowAction("queueMicrotask", 1, function queueMicrotask() {
            }), writable: true, enumerable: true, configurable: true
        },
        releaseEvents: {
            value: rsvm.RsCreateWindowAction("releaseEvents", 0, function releaseEvents() {
            }), writable: true, enumerable: true, configurable: true
        },
        reportError: {
            value: rsvm.RsCreateWindowAction("reportError", 1, function reportError() {
            }), writable: true, enumerable: true, configurable: true
        },
        requestAnimationFrame: {
            value: rsvm.RsCreateWindowAction("requestAnimationFrame", 1, function requestAnimationFrame() {
            }), writable: true, enumerable: true, configurable: true
        },
        requestIdleCallback: {
            value: rsvm.RsCreateWindowAction("requestIdleCallback", 1, function requestIdleCallback() {
            }), writable: true, enumerable: true, configurable: true
        },
        resizeBy: {
            value: rsvm.RsCreateWindowAction("resizeBy", 2, function resizeBy() {
            }), writable: true, enumerable: true, configurable: true
        },
        resizeTo: {
            value: rsvm.RsCreateWindowAction("resizeTo", 2, function resizeTo() {
            }), writable: true, enumerable: true, configurable: true
        },
        scroll: {
            value: rsvm.RsCreateWindowAction("scroll", 0, function scroll() {
            }), writable: true, enumerable: true, configurable: true
        },
        scrollBy: {
            value: rsvm.RsCreateWindowAction("scrollBy", 0, function scrollBy() {
            }), writable: true, enumerable: true, configurable: true
        },
        scrollTo: {
            value: rsvm.RsCreateWindowAction("scrollTo", 0, function scrollTo() {
            }), writable: true, enumerable: true, configurable: true
        },
        setInterval: {
            value: rsvm.RsCreateWindowAction("setInterval", 1, function setInterval() {
                rsvm.timerIndex += 1;
                let func = arguments[0], delay = arguments[1], id = rsvm.timerIndex;
                rsvm.timerID[id] = {
                    type: "setInterval",
                    callback: func,
                    start: Date.now(),
                    againStart: Date.now(),
                    delay: delay,
                    execNumber: 0,
                };
                // if (delay <= 0) {   // 
                //     if (typeof (func) == "function") {
                //         func();
                //     } else if (typeof (func) == "string") {
                //         eval(func);
                //     }
                //     clearInterval(id);
                // }
                return id;
            }), writable: true, enumerable: true, configurable: true
        },
        setTimeout: {
            value: rsvm.RsCreateWindowAction("setTimeout", 1, function setTimeout() {
                rsvm.timerIndex += 1;
                let func = arguments[0], delay = arguments[1], id = rsvm.timerIndex;
                // if (delay == 5000) {
                //     return -1;
                // }
                let args = [];
                for (let i = 2; i < arguments.length; i++){
                    args.push(arguments[i]);
                }
                rsvm.timerID[id] = {
                    type: "setTimeout",
                    callback: func,
                    start: Date.now(),
                    delay: delay,
                    args: args
                };
                // if (delay <= 0) {   // 
                //     if (typeof (func) == "function") {
                //         func();
                //     } else if (typeof (func) == "string") {
                //         eval(func);
                //     }
                //     clearTimeout(id);
                // }
                return id;
            }), writable: true, enumerable: true, configurable: true
        },
        stop: {
            value: rsvm.RsCreateWindowAction("stop", 0, function stop() {
            }), writable: true, enumerable: true, configurable: true
        },
        structuredClone: {
            value: rsvm.RsCreateWindowAction("structuredClone", 1, function structuredClone() {
            }), writable: true, enumerable: true, configurable: true
        },
        webkitCancelAnimationFrame: {
            value: rsvm.RsCreateWindowAction("webkitCancelAnimationFrame", 1, function webkitCancelAnimationFrame() {
            }), writable: true, enumerable: true, configurable: true
        },
        webkitRequestAnimationFrame: {
            value: rsvm.RsCreateWindowAction("webkitRequestAnimationFrame", 1, function webkitRequestAnimationFrame() {
            }), writable: true, enumerable: true, configurable: true
        },
        fence: {
            get: rsvm.RsCreateWindowGetter("fence", function fence() {
                return rsvm.get(globalThis, "fence");
            }), set: undefined, enumerable: true, configurable: true
        },
        caches: {
            get: rsvm.RsCreateWindowGetter("caches", function caches() {
                return rsvm.get(globalThis, "caches");
            }), set: undefined, enumerable: true, configurable: true
        },
        cookieStore: {
            get: rsvm.RsCreateWindowGetter("cookieStore", function cookieStore() {
                return rsvm.get(globalThis, "cookieStore");
            }), set: undefined, enumerable: true, configurable: true
        },
        ondevicemotion: {
            get: rsvm.RsCreateWindowGetter("ondevicemotion", function ondevicemotion() {
                return rsvm.get(globalThis, "ondevicemotion");
            }), set: rsvm.RsCreateWindowSetter("ondevicemotion", function ondevicemotion() {
                rsvm.set(globalThis, "ondevicemotion", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondeviceorientation: {
            get: rsvm.RsCreateWindowGetter("ondeviceorientation", function ondeviceorientation() {
                return rsvm.get(globalThis, "ondeviceorientation");
            }), set: rsvm.RsCreateWindowSetter("ondeviceorientation", function ondeviceorientation() {
                rsvm.set(globalThis, "ondeviceorientation", arguments[0]);
            }), enumerable: true, configurable: true
        },
        ondeviceorientationabsolute: {
            get: rsvm.RsCreateWindowGetter("ondeviceorientationabsolute", function ondeviceorientationabsolute() {
                return rsvm.get(globalThis, "ondeviceorientationabsolute");
            }), set: rsvm.RsCreateWindowSetter("ondeviceorientationabsolute", function ondeviceorientationabsolute() {
                rsvm.set(globalThis, "ondeviceorientationabsolute", arguments[0]);
            }), enumerable: true, configurable: true
        },
        launchQueue: {
            get: rsvm.RsCreateWindowGetter("launchQueue", function launchQueue() {
                return rsvm.get(globalThis, "launchQueue");
            }), set: undefined, enumerable: true, configurable: true
        },
        sharedStorage: {
            get: rsvm.RsCreateWindowGetter("sharedStorage", function sharedStorage() {
                return rsvm.get(globalThis, "sharedStorage");
            }), set: undefined, enumerable: true, configurable: true
        },
        documentPictureInPicture: {
            get: rsvm.RsCreateWindowGetter("documentPictureInPicture", function documentPictureInPicture() {
                return rsvm.get(globalThis, "documentPictureInPicture");
            }), set: undefined, enumerable: true, configurable: true
        },
        onbeforematch: {
            get: rsvm.RsCreateWindowGetter("onbeforematch", function onbeforematch() {
                return rsvm.get(globalThis, "onbeforematch");
            }), set: rsvm.RsCreateWindowSetter("onbeforematch", function onbeforematch() {
                rsvm.set(globalThis, "onbeforematch", arguments[0]);
            }), enumerable: true, configurable: true
        },
        getScreenDetails: {
            value: rsvm.RsCreateWindowAction("getScreenDetails", 0, function getScreenDetails() {
            }), writable: true, enumerable: true, configurable: true
        },
        openDatabase: {
            value: rsvm.RsCreateWindowAction("openDatabase", 4, function openDatabase() {
            }), writable: true, enumerable: true, configurable: true
        },
        queryLocalFonts: {
            value: rsvm.RsCreateWindowAction("queryLocalFonts", 0, function queryLocalFonts() {
            }), writable: true, enumerable: true, configurable: true
        },
        showDirectoryPicker: {
            value: rsvm.RsCreateWindowAction("showDirectoryPicker", 0, function showDirectoryPicker() {
            }), writable: true, enumerable: true, configurable: true
        },
        showOpenFilePicker: {
            value: rsvm.RsCreateWindowAction("showOpenFilePicker", 0, function showOpenFilePicker() {
            }), writable: true, enumerable: true, configurable: true
        },
        showSaveFilePicker: {
            value: rsvm.RsCreateWindowAction("showSaveFilePicker", 0, function showSaveFilePicker() {
            }), writable: true, enumerable: true, configurable: true
        },
        originAgentCluster: {
            get: rsvm.RsCreateWindowGetter("originAgentCluster", function originAgentCluster() {
                return rsvm.get(globalThis, "originAgentCluster");
            }), set: undefined, enumerable: true, configurable: true
        },
        credentialless: {
            get: rsvm.RsCreateWindowGetter("credentialless", function credentialless() {
                return rsvm.get(globalThis, "credentialless");
            }), set: undefined, enumerable: true, configurable: true
        },
        speechSynthesis: {
            get: rsvm.RsCreateWindowGetter("speechSynthesis", function speechSynthesis() {
                return rsvm.get(globalThis, "speechSynthesis");
            }), set: undefined, enumerable: true, configurable: true
        },
        oncontentvisibilityautostatechange: {
            get: rsvm.RsCreateWindowGetter("oncontentvisibilityautostatechange", function oncontentvisibilityautostatechange() {
                return rsvm.get(globalThis, "oncontentvisibilityautostatechange");
            }), set: rsvm.RsCreateWindowSetter("oncontentvisibilityautostatechange", function oncontentvisibilityautostatechange() {
                rsvm.set(globalThis, "oncontentvisibilityautostatechange", arguments[0]);
            }), enumerable: true, configurable: true
        },
        onscrollend: {
            get: rsvm.RsCreateWindowGetter("onscrollend", function onscrollend() {
                return rsvm.get(globalThis, "onscrollend");
            }), set: rsvm.RsCreateWindowSetter("onscrollend", function onscrollend() {
                rsvm.set(globalThis, "onscrollend", arguments[0]);
            }), enumerable: true, configurable: true
        },
        webkitRequestFileSystem: {
            value: rsvm.RsCreateWindowAction("webkitRequestFileSystem", 3, function webkitRequestFileSystem() {
                if (arguments[0] === 0 && arguments[1] === 1) {
                    let value = rsvm.prototype.DOMFileSystem.new();
                    rsvm.set(value, 'name', 'https_www.nmpa.gov.cn_0:Temporary');
                    arguments[3](value);
                }
            }), writable: true, enumerable: true, configurable: true
        },
        webkitResolveLocalFileSystemURL: {
            value: rsvm.RsCreateWindowAction("webkitResolveLocalFileSystemURL", 2, function webkitResolveLocalFileSystemURL() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperty(window, "chrome", {
        value: {
            csi: function () { },
            getVariableValue(){},
            loadTimes: function () {},
            get runtime() {
                return {};
            },
            set runtime(value) {

            },
            send(){},
            timeTicks: {
                nowInMicroseconds(){}
            },
        }, writable: true, enumerable: true, configurable: false
    })
}();

!function () {
    let WindowProperties = rsvm.RsCreateNameInterceptor({
        getter(target, property) {
            let flag = rsvm.log;
            rsvm.prevent();
            let value = undefined;
            function travel(nodeArray) {
                for (const node of nodeArray) {
                    if (value) { return; }
                    if (rsvm.get(node, 'nodeType') == 1) {
                        if (property == rsvm.get(node, 'id')) {
                            value = node; return;
                        }
                        travel(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                    }
                }
            }
            let nodeArray = rsvm.RsGetPrivateProperty(window.document, "nodeArray");
            if (nodeArray) {
                travel(nodeArray);
            }
            if (flag) {
                let msg = { '原型': this[Symbol.toStringTag], '属性': property, '返回值': value };
                rsvm.$log.call(console, msg);
            }
            rsvm.recover();
            if (value) {
                return { value: value, intercept: true };
            } else {
                return { intercept: false };
            }
        },
        query(target, property) {
            rsvm.prevent();
            let value = undefined;
            function travel(nodeArray) {
                for (const node of nodeArray) {
                    if (value) { return; }
                    if (rsvm.get(node, 'nodeType') == 1) {
                        if (property == rsvm.get(node, 'id')) {
                            value = node; return;
                        }
                        travel(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                    }
                }
            }
            let nodeArray = rsvm.RsGetPrivateProperty(window.document, "nodeArray");
            if (nodeArray) {
                travel(nodeArray);
            }
            rsvm.recover();
            if (value) {
                return {
                    value: { value: value, writable: true, enumerable: false, configurable: true },
                    intercept: true,
                };
            } else {
                return { intercept: false };
            }
        },
        descriptor(target, property) {
            rsvm.prevent();
            let value = undefined;
            function travel(nodeArray) {
                for (const node of nodeArray) {
                    if (value) { return; }
                    if (rsvm.get(node, 'nodeType') == 1) {
                        if (property == rsvm.get(node, 'id')) {
                            value = node; return;
                        }
                        travel(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                    }
                }
            }
            let nodeArray = rsvm.RsGetPrivateProperty(window.document, "nodeArray");
            if (nodeArray) {
                travel(nodeArray);
            }
            rsvm.recover();
            if (value) {
                return {
                    value: { value: value, writable: true, enumerable: false, configurable: true },
                    intercept: true,
                };
            } else {
                return { intercept: false };
            }
        }
    });

    rsvm.prototype.WindowProperties = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WindowProperties", target);
        },
        instance() {
            return WindowProperties;
        },
        new() {
            let obj = rsvm.RsCreate(WindowProperties);
            return obj;
        },
    };

    Object.defineProperties(WindowProperties, {
        [Symbol.toStringTag]: { value: "WindowProperties", writable: false, enumerable: false, configurable: true, },
    });

    Object.setPrototypeOf(WindowProperties, EventTarget.prototype);
    Object.setPrototypeOf(Window.prototype, WindowProperties);
}();
