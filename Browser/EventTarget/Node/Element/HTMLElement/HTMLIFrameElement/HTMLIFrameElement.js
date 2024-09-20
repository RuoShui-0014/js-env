!function () {
    // ------------------------------------window------------------------------------------------
    rsvm.prototype.IframeWindow = {
        new() {
            let iframeWindow = rsvm.RsCreate(Window.prototype);
            let memory = {
                listener: {},
                window: iframeWindow,
                self: iframeWindow,
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
                frames: iframeWindow,
                length: 0,
                top: iframeWindow,
                opener: null,
                parent: iframeWindow,
                frameElement: null,
                navigator: rsvm.prototype.Navigator.new(),
                origin: "chrome://newtab",
                external: rsvm.prototype.External.new(),
                screen: rsvm.prototype.Screen.new(),
                innerWidth: 150,
                innerHeight: 818,
                scrollX: 0,
                pageXOffset: 0,
                scrollY: 0,
                pageYOffset: 0,
                visualViewport: rsvm.prototype.VisualViewport.new(),
                screenX: 968,
                screenY: 39,
                outerWidth: 894,
                outerHeight: 944,
                devicePixelRatio: 1,
                clientInformation: null,
                screenLeft: 968,
                screenTop: 39,
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
                originAgentCluster: false,
                credentialless: false,
                speechSynthesis: rsvm.prototype.SpeechSynthesis.new(),
                oncontentvisibilityautostatechange: null,
                onscrollend: null,
            };
            rsvm.RsSetPrivateProperty(iframeWindow, '__memory__', memory)
            Object.defineProperties(iframeWindow, {
                window: {
                    get: rsvm.RsCreateWindowGetter("window", function window() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return iframeWindow;
                    }), set: undefined, enumerable: true, configurable: false
                },
                self: {
                    get: rsvm.RsCreateWindowGetter("self", function self() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "self");
                    }), set: rsvm.RsCreateWindowSetter("self", function self() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "self", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                document: {
                    get: rsvm.RsCreateWindowGetter("document", function document() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "document");
                    }), set: undefined, enumerable: true, configurable: false
                },
                name: {
                    get: rsvm.RsCreateWindowGetter("name", function name() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "name");
                    }), set: rsvm.RsCreateWindowSetter("name", function name() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "name", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                location: {
                    get: rsvm.RsCreateWindowGetter("location", function location() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "location");
                    }), set: rsvm.RsCreateWindowSetter("location", function location() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "location", arguments[0]);
                    }), enumerable: true, configurable: false
                },
                customElements: {
                    get: rsvm.RsCreateWindowGetter("customElements", function customElements() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "customElements");
                    }), set: undefined, enumerable: true, configurable: true
                },
                history: {
                    get: rsvm.RsCreateWindowGetter("history", function history() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "history");
                    }), set: undefined, enumerable: true, configurable: true
                },
                navigation: {
                    get: rsvm.RsCreateWindowGetter("navigation", function navigation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "navigation");
                    }), set: rsvm.RsCreateWindowSetter("navigation", function navigation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "navigation", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                locationbar: {
                    get: rsvm.RsCreateWindowGetter("locationbar", function locationbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "locationbar");
                    }), set: rsvm.RsCreateWindowSetter("locationbar", function locationbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "locationbar", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                menubar: {
                    get: rsvm.RsCreateWindowGetter("menubar", function menubar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "menubar");
                    }), set: rsvm.RsCreateWindowSetter("menubar", function menubar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "menubar", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                personalbar: {
                    get: rsvm.RsCreateWindowGetter("personalbar", function personalbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "personalbar");
                    }), set: rsvm.RsCreateWindowSetter("personalbar", function personalbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "personalbar", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                scrollbars: {
                    get: rsvm.RsCreateWindowGetter("scrollbars", function scrollbars() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "scrollbars");
                    }), set: rsvm.RsCreateWindowSetter("scrollbars", function scrollbars() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "scrollbars", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                statusbar: {
                    get: rsvm.RsCreateWindowGetter("statusbar", function statusbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "statusbar");
                    }), set: rsvm.RsCreateWindowSetter("statusbar", function statusbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "statusbar", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                toolbar: {
                    get: rsvm.RsCreateWindowGetter("toolbar", function toolbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "toolbar");
                    }), set: rsvm.RsCreateWindowSetter("toolbar", function toolbar() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "toolbar", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                status: {
                    get: rsvm.RsCreateWindowGetter("status", function status() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "status");
                    }), set: rsvm.RsCreateWindowSetter("status", function status() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "status", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                closed: {
                    get: rsvm.RsCreateWindowGetter("closed", function closed() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "closed");
                    }), set: undefined, enumerable: true, configurable: true
                },
                frames: {
                    get: rsvm.RsCreateWindowGetter("frames", function frames() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "frames");
                    }), set: rsvm.RsCreateWindowSetter("frames", function frames() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "frames", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                length: {
                    get: rsvm.RsCreateWindowGetter("length", function length() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "length");
                    }), set: rsvm.RsCreateWindowSetter("length", function length() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "length", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                top: {
                    get: rsvm.RsCreateWindowGetter("top", function top() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "top");
                    }), set: undefined, enumerable: true, configurable: false
                },
                opener: {
                    get: rsvm.RsCreateWindowGetter("opener", function opener() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "opener");
                    }), set: rsvm.RsCreateWindowSetter("opener", function opener() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "opener", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                parent: {
                    get: rsvm.RsCreateWindowGetter("parent", function parent() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "parent");
                    }), set: rsvm.RsCreateWindowSetter("parent", function parent() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "parent", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                frameElement: {
                    get: rsvm.RsCreateWindowGetter("frameElement", function frameElement() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "frameElement");
                    }), set: undefined, enumerable: true, configurable: true
                },
                navigator: {
                    get: rsvm.RsCreateWindowGetter("navigator", function navigator() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "navigator");
                    }), set: undefined, enumerable: true, configurable: true
                },
                origin: {
                    get: rsvm.RsCreateWindowGetter("origin", function origin() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "origin");
                    }), set: rsvm.RsCreateWindowSetter("origin", function origin() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "origin", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                external: {
                    get: rsvm.RsCreateWindowGetter("external", function external() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "external");
                    }), set: rsvm.RsCreateWindowSetter("external", function external() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "external", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                screen: {
                    get: rsvm.RsCreateWindowGetter("screen", function screen() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "screen");
                    }), set: rsvm.RsCreateWindowSetter("screen", function screen() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "screen", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                innerWidth: {
                    get: rsvm.RsCreateWindowGetter("innerWidth", function innerWidth() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "innerWidth");
                    }), set: rsvm.RsCreateWindowSetter("innerWidth", function innerWidth() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "innerWidth", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                innerHeight: {
                    get: rsvm.RsCreateWindowGetter("innerHeight", function innerHeight() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "innerHeight");
                    }), set: rsvm.RsCreateWindowSetter("innerHeight", function innerHeight() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "innerHeight", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                scrollX: {
                    get: rsvm.RsCreateWindowGetter("scrollX", function scrollX() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "scrollX");
                    }), set: rsvm.RsCreateWindowSetter("scrollX", function scrollX() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "scrollX", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                pageXOffset: {
                    get: rsvm.RsCreateWindowGetter("pageXOffset", function pageXOffset() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "pageXOffset");
                    }), set: rsvm.RsCreateWindowSetter("pageXOffset", function pageXOffset() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "pageXOffset", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                scrollY: {
                    get: rsvm.RsCreateWindowGetter("scrollY", function scrollY() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "scrollY");
                    }), set: rsvm.RsCreateWindowSetter("scrollY", function scrollY() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "scrollY", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                pageYOffset: {
                    get: rsvm.RsCreateWindowGetter("pageYOffset", function pageYOffset() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "pageYOffset");
                    }), set: rsvm.RsCreateWindowSetter("pageYOffset", function pageYOffset() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "pageYOffset", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                visualViewport: {
                    get: rsvm.RsCreateWindowGetter("visualViewport", function visualViewport() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "visualViewport");
                    }), set: rsvm.RsCreateWindowSetter("visualViewport", function visualViewport() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "visualViewport", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                screenX: {
                    get: rsvm.RsCreateWindowGetter("screenX", function screenX() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "screenX");
                    }), set: rsvm.RsCreateWindowSetter("screenX", function screenX() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "screenX", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                screenY: {
                    get: rsvm.RsCreateWindowGetter("screenY", function screenY() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "screenY");
                    }), set: rsvm.RsCreateWindowSetter("screenY", function screenY() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "screenY", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                outerWidth: {
                    get: rsvm.RsCreateWindowGetter("outerWidth", function outerWidth() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "outerWidth");
                    }), set: rsvm.RsCreateWindowSetter("outerWidth", function outerWidth() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "outerWidth", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                outerHeight: {
                    get: rsvm.RsCreateWindowGetter("outerHeight", function outerHeight() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "outerHeight");
                    }), set: rsvm.RsCreateWindowSetter("outerHeight", function outerHeight() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "outerHeight", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                devicePixelRatio: {
                    get: rsvm.RsCreateWindowGetter("devicePixelRatio", function devicePixelRatio() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "devicePixelRatio");
                    }), set: rsvm.RsCreateWindowSetter("devicePixelRatio", function devicePixelRatio() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "devicePixelRatio", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                clientInformation: {
                    get: rsvm.RsCreateWindowGetter("clientInformation", function clientInformation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "clientInformation");
                    }), set: rsvm.RsCreateWindowSetter("clientInformation", function clientInformation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "clientInformation", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                screenLeft: {
                    get: rsvm.RsCreateWindowGetter("screenLeft", function screenLeft() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "screenLeft");
                    }), set: rsvm.RsCreateWindowSetter("screenLeft", function screenLeft() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "screenLeft", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                screenTop: {
                    get: rsvm.RsCreateWindowGetter("screenTop", function screenTop() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "screenTop");
                    }), set: rsvm.RsCreateWindowSetter("screenTop", function screenTop() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "screenTop", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                styleMedia: {
                    get: rsvm.RsCreateWindowGetter("styleMedia", function styleMedia() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "styleMedia");
                    }), set: undefined, enumerable: true, configurable: true
                },
                onsearch: {
                    get: rsvm.RsCreateWindowGetter("onsearch", function onsearch() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onsearch");
                    }), set: rsvm.RsCreateWindowSetter("onsearch", function onsearch() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onsearch", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                isSecureContext: {
                    get: rsvm.RsCreateWindowGetter("isSecureContext", function isSecureContext() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "isSecureContext");
                    }), set: undefined, enumerable: true, configurable: true
                },
                trustedTypes: {
                    get: rsvm.RsCreateWindowGetter("trustedTypes", function trustedTypes() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "trustedTypes");
                    }), set: undefined, enumerable: true, configurable: true
                },
                performance: {
                    get: rsvm.RsCreateWindowGetter("performance", function performance() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "performance");
                    }), set: rsvm.RsCreateWindowSetter("performance", function performance() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "performance", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onappinstalled: {
                    get: rsvm.RsCreateWindowGetter("onappinstalled", function onappinstalled() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onappinstalled");
                    }), set: rsvm.RsCreateWindowSetter("onappinstalled", function onappinstalled() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onappinstalled", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onbeforeinstallprompt: {
                    get: rsvm.RsCreateWindowGetter("onbeforeinstallprompt", function onbeforeinstallprompt() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforeinstallprompt");
                    }), set: rsvm.RsCreateWindowSetter("onbeforeinstallprompt", function onbeforeinstallprompt() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforeinstallprompt", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                crypto: {
                    get: rsvm.RsCreateWindowGetter("crypto", function crypto() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "crypto");
                    }), set: undefined, enumerable: true, configurable: true
                },
                indexedDB: {
                    get: rsvm.RsCreateWindowGetter("indexedDB", function indexedDB() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "indexedDB");
                    }), set: undefined, enumerable: true, configurable: true
                },
                sessionStorage: {
                    get: rsvm.RsCreateWindowGetter("sessionStorage", function sessionStorage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "sessionStorage");
                    }), set: undefined, enumerable: true, configurable: true
                },
                localStorage: {
                    get: rsvm.RsCreateWindowGetter("localStorage", function localStorage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "localStorage");
                    }), set: undefined, enumerable: true, configurable: true
                },
                onbeforexrselect: {
                    get: rsvm.RsCreateWindowGetter("onbeforexrselect", function onbeforexrselect() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforexrselect");
                    }), set: rsvm.RsCreateWindowSetter("onbeforexrselect", function onbeforexrselect() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforexrselect", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onabort: {
                    get: rsvm.RsCreateWindowGetter("onabort", function onabort() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onabort");
                    }), set: rsvm.RsCreateWindowSetter("onabort", function onabort() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onabort", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onbeforeinput: {
                    get: rsvm.RsCreateWindowGetter("onbeforeinput", function onbeforeinput() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforeinput");
                    }), set: rsvm.RsCreateWindowSetter("onbeforeinput", function onbeforeinput() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforeinput", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onbeforetoggle: {
                    get: rsvm.RsCreateWindowGetter("onbeforetoggle", function onbeforetoggle() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforetoggle");
                    }), set: rsvm.RsCreateWindowSetter("onbeforetoggle", function onbeforetoggle() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforetoggle", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onblur: {
                    get: rsvm.RsCreateWindowGetter("onblur", function onblur() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onblur");
                    }), set: rsvm.RsCreateWindowSetter("onblur", function onblur() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onblur", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncancel: {
                    get: rsvm.RsCreateWindowGetter("oncancel", function oncancel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncancel");
                    }), set: rsvm.RsCreateWindowSetter("oncancel", function oncancel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncancel", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncanplay: {
                    get: rsvm.RsCreateWindowGetter("oncanplay", function oncanplay() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncanplay");
                    }), set: rsvm.RsCreateWindowSetter("oncanplay", function oncanplay() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncanplay", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncanplaythrough: {
                    get: rsvm.RsCreateWindowGetter("oncanplaythrough", function oncanplaythrough() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncanplaythrough");
                    }), set: rsvm.RsCreateWindowSetter("oncanplaythrough", function oncanplaythrough() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncanplaythrough", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onchange: {
                    get: rsvm.RsCreateWindowGetter("onchange", function onchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onchange");
                    }), set: rsvm.RsCreateWindowSetter("onchange", function onchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onchange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onclick: {
                    get: rsvm.RsCreateWindowGetter("onclick", function onclick() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onclick");
                    }), set: rsvm.RsCreateWindowSetter("onclick", function onclick() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onclick", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onclose: {
                    get: rsvm.RsCreateWindowGetter("onclose", function onclose() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onclose");
                    }), set: rsvm.RsCreateWindowSetter("onclose", function onclose() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onclose", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncontextlost: {
                    get: rsvm.RsCreateWindowGetter("oncontextlost", function oncontextlost() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncontextlost");
                    }), set: rsvm.RsCreateWindowSetter("oncontextlost", function oncontextlost() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncontextlost", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncontextmenu: {
                    get: rsvm.RsCreateWindowGetter("oncontextmenu", function oncontextmenu() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncontextmenu");
                    }), set: rsvm.RsCreateWindowSetter("oncontextmenu", function oncontextmenu() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncontextmenu", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncontextrestored: {
                    get: rsvm.RsCreateWindowGetter("oncontextrestored", function oncontextrestored() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncontextrestored");
                    }), set: rsvm.RsCreateWindowSetter("oncontextrestored", function oncontextrestored() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncontextrestored", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oncuechange: {
                    get: rsvm.RsCreateWindowGetter("oncuechange", function oncuechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncuechange");
                    }), set: rsvm.RsCreateWindowSetter("oncuechange", function oncuechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncuechange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondblclick: {
                    get: rsvm.RsCreateWindowGetter("ondblclick", function ondblclick() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondblclick");
                    }), set: rsvm.RsCreateWindowSetter("ondblclick", function ondblclick() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondblclick", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondrag: {
                    get: rsvm.RsCreateWindowGetter("ondrag", function ondrag() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondrag");
                    }), set: rsvm.RsCreateWindowSetter("ondrag", function ondrag() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondrag", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondragend: {
                    get: rsvm.RsCreateWindowGetter("ondragend", function ondragend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondragend");
                    }), set: rsvm.RsCreateWindowSetter("ondragend", function ondragend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondragend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondragenter: {
                    get: rsvm.RsCreateWindowGetter("ondragenter", function ondragenter() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondragenter");
                    }), set: rsvm.RsCreateWindowSetter("ondragenter", function ondragenter() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondragenter", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondragleave: {
                    get: rsvm.RsCreateWindowGetter("ondragleave", function ondragleave() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondragleave");
                    }), set: rsvm.RsCreateWindowSetter("ondragleave", function ondragleave() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondragleave", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondragover: {
                    get: rsvm.RsCreateWindowGetter("ondragover", function ondragover() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondragover");
                    }), set: rsvm.RsCreateWindowSetter("ondragover", function ondragover() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondragover", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondragstart: {
                    get: rsvm.RsCreateWindowGetter("ondragstart", function ondragstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondragstart");
                    }), set: rsvm.RsCreateWindowSetter("ondragstart", function ondragstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondragstart", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondrop: {
                    get: rsvm.RsCreateWindowGetter("ondrop", function ondrop() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondrop");
                    }), set: rsvm.RsCreateWindowSetter("ondrop", function ondrop() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondrop", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondurationchange: {
                    get: rsvm.RsCreateWindowGetter("ondurationchange", function ondurationchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondurationchange");
                    }), set: rsvm.RsCreateWindowSetter("ondurationchange", function ondurationchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondurationchange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onemptied: {
                    get: rsvm.RsCreateWindowGetter("onemptied", function onemptied() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onemptied");
                    }), set: rsvm.RsCreateWindowSetter("onemptied", function onemptied() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onemptied", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onended: {
                    get: rsvm.RsCreateWindowGetter("onended", function onended() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onended");
                    }), set: rsvm.RsCreateWindowSetter("onended", function onended() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onended", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onerror: {
                    get: rsvm.RsCreateWindowGetter("onerror", function onerror() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onerror");
                    }), set: rsvm.RsCreateWindowSetter("onerror", function onerror() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onerror", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onfocus: {
                    get: rsvm.RsCreateWindowGetter("onfocus", function onfocus() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onfocus");
                    }), set: rsvm.RsCreateWindowSetter("onfocus", function onfocus() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onfocus", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onformdata: {
                    get: rsvm.RsCreateWindowGetter("onformdata", function onformdata() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onformdata");
                    }), set: rsvm.RsCreateWindowSetter("onformdata", function onformdata() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onformdata", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oninput: {
                    get: rsvm.RsCreateWindowGetter("oninput", function oninput() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oninput");
                    }), set: rsvm.RsCreateWindowSetter("oninput", function oninput() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oninput", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                oninvalid: {
                    get: rsvm.RsCreateWindowGetter("oninvalid", function oninvalid() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oninvalid");
                    }), set: rsvm.RsCreateWindowSetter("oninvalid", function oninvalid() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oninvalid", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onkeydown: {
                    get: rsvm.RsCreateWindowGetter("onkeydown", function onkeydown() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onkeydown");
                    }), set: rsvm.RsCreateWindowSetter("onkeydown", function onkeydown() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onkeydown", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onkeypress: {
                    get: rsvm.RsCreateWindowGetter("onkeypress", function onkeypress() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onkeypress");
                    }), set: rsvm.RsCreateWindowSetter("onkeypress", function onkeypress() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onkeypress", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onkeyup: {
                    get: rsvm.RsCreateWindowGetter("onkeyup", function onkeyup() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onkeyup");
                    }), set: rsvm.RsCreateWindowSetter("onkeyup", function onkeyup() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onkeyup", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onload: {
                    get: rsvm.RsCreateWindowGetter("onload", function onload() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onload");
                    }), set: rsvm.RsCreateWindowSetter("onload", function onload() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onload", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onloadeddata: {
                    get: rsvm.RsCreateWindowGetter("onloadeddata", function onloadeddata() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onloadeddata");
                    }), set: rsvm.RsCreateWindowSetter("onloadeddata", function onloadeddata() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onloadeddata", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onloadedmetadata: {
                    get: rsvm.RsCreateWindowGetter("onloadedmetadata", function onloadedmetadata() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onloadedmetadata");
                    }), set: rsvm.RsCreateWindowSetter("onloadedmetadata", function onloadedmetadata() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onloadedmetadata", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onloadstart: {
                    get: rsvm.RsCreateWindowGetter("onloadstart", function onloadstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onloadstart");
                    }), set: rsvm.RsCreateWindowSetter("onloadstart", function onloadstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onloadstart", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmousedown: {
                    get: rsvm.RsCreateWindowGetter("onmousedown", function onmousedown() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmousedown");
                    }), set: rsvm.RsCreateWindowSetter("onmousedown", function onmousedown() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmousedown", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmouseenter: {
                    get: rsvm.RsCreateWindowGetter("onmouseenter", function onmouseenter() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmouseenter");
                    }), set: rsvm.RsCreateWindowSetter("onmouseenter", function onmouseenter() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmouseenter", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmouseleave: {
                    get: rsvm.RsCreateWindowGetter("onmouseleave", function onmouseleave() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmouseleave");
                    }), set: rsvm.RsCreateWindowSetter("onmouseleave", function onmouseleave() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmouseleave", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmousemove: {
                    get: rsvm.RsCreateWindowGetter("onmousemove", function onmousemove() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmousemove");
                    }), set: rsvm.RsCreateWindowSetter("onmousemove", function onmousemove() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmousemove", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmouseout: {
                    get: rsvm.RsCreateWindowGetter("onmouseout", function onmouseout() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmouseout");
                    }), set: rsvm.RsCreateWindowSetter("onmouseout", function onmouseout() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmouseout", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmouseover: {
                    get: rsvm.RsCreateWindowGetter("onmouseover", function onmouseover() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmouseover");
                    }), set: rsvm.RsCreateWindowSetter("onmouseover", function onmouseover() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmouseover", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmouseup: {
                    get: rsvm.RsCreateWindowGetter("onmouseup", function onmouseup() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmouseup");
                    }), set: rsvm.RsCreateWindowSetter("onmouseup", function onmouseup() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmouseup", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmousewheel: {
                    get: rsvm.RsCreateWindowGetter("onmousewheel", function onmousewheel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmousewheel");
                    }), set: rsvm.RsCreateWindowSetter("onmousewheel", function onmousewheel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmousewheel", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpause: {
                    get: rsvm.RsCreateWindowGetter("onpause", function onpause() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpause");
                    }), set: rsvm.RsCreateWindowSetter("onpause", function onpause() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpause", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onplay: {
                    get: rsvm.RsCreateWindowGetter("onplay", function onplay() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onplay");
                    }), set: rsvm.RsCreateWindowSetter("onplay", function onplay() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onplay", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onplaying: {
                    get: rsvm.RsCreateWindowGetter("onplaying", function onplaying() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onplaying");
                    }), set: rsvm.RsCreateWindowSetter("onplaying", function onplaying() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onplaying", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onprogress: {
                    get: rsvm.RsCreateWindowGetter("onprogress", function onprogress() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onprogress");
                    }), set: rsvm.RsCreateWindowSetter("onprogress", function onprogress() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onprogress", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onratechange: {
                    get: rsvm.RsCreateWindowGetter("onratechange", function onratechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onratechange");
                    }), set: rsvm.RsCreateWindowSetter("onratechange", function onratechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onratechange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onreset: {
                    get: rsvm.RsCreateWindowGetter("onreset", function onreset() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onreset");
                    }), set: rsvm.RsCreateWindowSetter("onreset", function onreset() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onreset", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onresize: {
                    get: rsvm.RsCreateWindowGetter("onresize", function onresize() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onresize");
                    }), set: rsvm.RsCreateWindowSetter("onresize", function onresize() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onresize", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onscroll: {
                    get: rsvm.RsCreateWindowGetter("onscroll", function onscroll() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onscroll");
                    }), set: rsvm.RsCreateWindowSetter("onscroll", function onscroll() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onscroll", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onsecuritypolicyviolation: {
                    get: rsvm.RsCreateWindowGetter("onsecuritypolicyviolation", function onsecuritypolicyviolation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onsecuritypolicyviolation");
                    }), set: rsvm.RsCreateWindowSetter("onsecuritypolicyviolation", function onsecuritypolicyviolation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onsecuritypolicyviolation", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onseeked: {
                    get: rsvm.RsCreateWindowGetter("onseeked", function onseeked() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onseeked");
                    }), set: rsvm.RsCreateWindowSetter("onseeked", function onseeked() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onseeked", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onseeking: {
                    get: rsvm.RsCreateWindowGetter("onseeking", function onseeking() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onseeking");
                    }), set: rsvm.RsCreateWindowSetter("onseeking", function onseeking() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onseeking", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onselect: {
                    get: rsvm.RsCreateWindowGetter("onselect", function onselect() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onselect");
                    }), set: rsvm.RsCreateWindowSetter("onselect", function onselect() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onselect", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onslotchange: {
                    get: rsvm.RsCreateWindowGetter("onslotchange", function onslotchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onslotchange");
                    }), set: rsvm.RsCreateWindowSetter("onslotchange", function onslotchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onslotchange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onstalled: {
                    get: rsvm.RsCreateWindowGetter("onstalled", function onstalled() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onstalled");
                    }), set: rsvm.RsCreateWindowSetter("onstalled", function onstalled() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onstalled", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onsubmit: {
                    get: rsvm.RsCreateWindowGetter("onsubmit", function onsubmit() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onsubmit");
                    }), set: rsvm.RsCreateWindowSetter("onsubmit", function onsubmit() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onsubmit", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onsuspend: {
                    get: rsvm.RsCreateWindowGetter("onsuspend", function onsuspend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onsuspend");
                    }), set: rsvm.RsCreateWindowSetter("onsuspend", function onsuspend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onsuspend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ontimeupdate: {
                    get: rsvm.RsCreateWindowGetter("ontimeupdate", function ontimeupdate() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ontimeupdate");
                    }), set: rsvm.RsCreateWindowSetter("ontimeupdate", function ontimeupdate() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ontimeupdate", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ontoggle: {
                    get: rsvm.RsCreateWindowGetter("ontoggle", function ontoggle() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ontoggle");
                    }), set: rsvm.RsCreateWindowSetter("ontoggle", function ontoggle() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ontoggle", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onvolumechange: {
                    get: rsvm.RsCreateWindowGetter("onvolumechange", function onvolumechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onvolumechange");
                    }), set: rsvm.RsCreateWindowSetter("onvolumechange", function onvolumechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onvolumechange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onwaiting: {
                    get: rsvm.RsCreateWindowGetter("onwaiting", function onwaiting() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onwaiting");
                    }), set: rsvm.RsCreateWindowSetter("onwaiting", function onwaiting() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onwaiting", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onwebkitanimationend: {
                    get: rsvm.RsCreateWindowGetter("onwebkitanimationend", function onwebkitanimationend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onwebkitanimationend");
                    }), set: rsvm.RsCreateWindowSetter("onwebkitanimationend", function onwebkitanimationend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onwebkitanimationend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onwebkitanimationiteration: {
                    get: rsvm.RsCreateWindowGetter("onwebkitanimationiteration", function onwebkitanimationiteration() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onwebkitanimationiteration");
                    }), set: rsvm.RsCreateWindowSetter("onwebkitanimationiteration", function onwebkitanimationiteration() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onwebkitanimationiteration", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onwebkitanimationstart: {
                    get: rsvm.RsCreateWindowGetter("onwebkitanimationstart", function onwebkitanimationstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onwebkitanimationstart");
                    }), set: rsvm.RsCreateWindowSetter("onwebkitanimationstart", function onwebkitanimationstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onwebkitanimationstart", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onwebkittransitionend: {
                    get: rsvm.RsCreateWindowGetter("onwebkittransitionend", function onwebkittransitionend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onwebkittransitionend");
                    }), set: rsvm.RsCreateWindowSetter("onwebkittransitionend", function onwebkittransitionend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onwebkittransitionend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onwheel: {
                    get: rsvm.RsCreateWindowGetter("onwheel", function onwheel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onwheel");
                    }), set: rsvm.RsCreateWindowSetter("onwheel", function onwheel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onwheel", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onauxclick: {
                    get: rsvm.RsCreateWindowGetter("onauxclick", function onauxclick() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onauxclick");
                    }), set: rsvm.RsCreateWindowSetter("onauxclick", function onauxclick() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onauxclick", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ongotpointercapture: {
                    get: rsvm.RsCreateWindowGetter("ongotpointercapture", function ongotpointercapture() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ongotpointercapture");
                    }), set: rsvm.RsCreateWindowSetter("ongotpointercapture", function ongotpointercapture() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ongotpointercapture", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onlostpointercapture: {
                    get: rsvm.RsCreateWindowGetter("onlostpointercapture", function onlostpointercapture() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onlostpointercapture");
                    }), set: rsvm.RsCreateWindowSetter("onlostpointercapture", function onlostpointercapture() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onlostpointercapture", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerdown: {
                    get: rsvm.RsCreateWindowGetter("onpointerdown", function onpointerdown() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerdown");
                    }), set: rsvm.RsCreateWindowSetter("onpointerdown", function onpointerdown() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerdown", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointermove: {
                    get: rsvm.RsCreateWindowGetter("onpointermove", function onpointermove() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointermove");
                    }), set: rsvm.RsCreateWindowSetter("onpointermove", function onpointermove() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointermove", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerrawupdate: {
                    get: rsvm.RsCreateWindowGetter("onpointerrawupdate", function onpointerrawupdate() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerrawupdate");
                    }), set: rsvm.RsCreateWindowSetter("onpointerrawupdate", function onpointerrawupdate() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerrawupdate", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerup: {
                    get: rsvm.RsCreateWindowGetter("onpointerup", function onpointerup() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerup");
                    }), set: rsvm.RsCreateWindowSetter("onpointerup", function onpointerup() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerup", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointercancel: {
                    get: rsvm.RsCreateWindowGetter("onpointercancel", function onpointercancel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointercancel");
                    }), set: rsvm.RsCreateWindowSetter("onpointercancel", function onpointercancel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointercancel", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerover: {
                    get: rsvm.RsCreateWindowGetter("onpointerover", function onpointerover() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerover");
                    }), set: rsvm.RsCreateWindowSetter("onpointerover", function onpointerover() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerover", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerout: {
                    get: rsvm.RsCreateWindowGetter("onpointerout", function onpointerout() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerout");
                    }), set: rsvm.RsCreateWindowSetter("onpointerout", function onpointerout() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerout", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerenter: {
                    get: rsvm.RsCreateWindowGetter("onpointerenter", function onpointerenter() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerenter");
                    }), set: rsvm.RsCreateWindowSetter("onpointerenter", function onpointerenter() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerenter", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpointerleave: {
                    get: rsvm.RsCreateWindowGetter("onpointerleave", function onpointerleave() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpointerleave");
                    }), set: rsvm.RsCreateWindowSetter("onpointerleave", function onpointerleave() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpointerleave", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onselectstart: {
                    get: rsvm.RsCreateWindowGetter("onselectstart", function onselectstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onselectstart");
                    }), set: rsvm.RsCreateWindowSetter("onselectstart", function onselectstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onselectstart", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onselectionchange: {
                    get: rsvm.RsCreateWindowGetter("onselectionchange", function onselectionchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onselectionchange");
                    }), set: rsvm.RsCreateWindowSetter("onselectionchange", function onselectionchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onselectionchange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onanimationend: {
                    get: rsvm.RsCreateWindowGetter("onanimationend", function onanimationend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onanimationend");
                    }), set: rsvm.RsCreateWindowSetter("onanimationend", function onanimationend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onanimationend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onanimationiteration: {
                    get: rsvm.RsCreateWindowGetter("onanimationiteration", function onanimationiteration() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onanimationiteration");
                    }), set: rsvm.RsCreateWindowSetter("onanimationiteration", function onanimationiteration() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onanimationiteration", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onanimationstart: {
                    get: rsvm.RsCreateWindowGetter("onanimationstart", function onanimationstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onanimationstart");
                    }), set: rsvm.RsCreateWindowSetter("onanimationstart", function onanimationstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onanimationstart", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ontransitionrun: {
                    get: rsvm.RsCreateWindowGetter("ontransitionrun", function ontransitionrun() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ontransitionrun");
                    }), set: rsvm.RsCreateWindowSetter("ontransitionrun", function ontransitionrun() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ontransitionrun", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ontransitionstart: {
                    get: rsvm.RsCreateWindowGetter("ontransitionstart", function ontransitionstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ontransitionstart");
                    }), set: rsvm.RsCreateWindowSetter("ontransitionstart", function ontransitionstart() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ontransitionstart", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ontransitionend: {
                    get: rsvm.RsCreateWindowGetter("ontransitionend", function ontransitionend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ontransitionend");
                    }), set: rsvm.RsCreateWindowSetter("ontransitionend", function ontransitionend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ontransitionend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ontransitioncancel: {
                    get: rsvm.RsCreateWindowGetter("ontransitioncancel", function ontransitioncancel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ontransitioncancel");
                    }), set: rsvm.RsCreateWindowSetter("ontransitioncancel", function ontransitioncancel() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ontransitioncancel", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onafterprint: {
                    get: rsvm.RsCreateWindowGetter("onafterprint", function onafterprint() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onafterprint");
                    }), set: rsvm.RsCreateWindowSetter("onafterprint", function onafterprint() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onafterprint", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onbeforeprint: {
                    get: rsvm.RsCreateWindowGetter("onbeforeprint", function onbeforeprint() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforeprint");
                    }), set: rsvm.RsCreateWindowSetter("onbeforeprint", function onbeforeprint() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforeprint", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onbeforeunload: {
                    get: rsvm.RsCreateWindowGetter("onbeforeunload", function onbeforeunload() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforeunload");
                    }), set: rsvm.RsCreateWindowSetter("onbeforeunload", function onbeforeunload() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforeunload", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onhashchange: {
                    get: rsvm.RsCreateWindowGetter("onhashchange", function onhashchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onhashchange");
                    }), set: rsvm.RsCreateWindowSetter("onhashchange", function onhashchange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onhashchange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onlanguagechange: {
                    get: rsvm.RsCreateWindowGetter("onlanguagechange", function onlanguagechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onlanguagechange");
                    }), set: rsvm.RsCreateWindowSetter("onlanguagechange", function onlanguagechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onlanguagechange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmessage: {
                    get: rsvm.RsCreateWindowGetter("onmessage", function onmessage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmessage");
                    }), set: rsvm.RsCreateWindowSetter("onmessage", function onmessage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmessage", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onmessageerror: {
                    get: rsvm.RsCreateWindowGetter("onmessageerror", function onmessageerror() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onmessageerror");
                    }), set: rsvm.RsCreateWindowSetter("onmessageerror", function onmessageerror() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onmessageerror", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onoffline: {
                    get: rsvm.RsCreateWindowGetter("onoffline", function onoffline() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onoffline");
                    }), set: rsvm.RsCreateWindowSetter("onoffline", function onoffline() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onoffline", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ononline: {
                    get: rsvm.RsCreateWindowGetter("ononline", function ononline() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ononline");
                    }), set: rsvm.RsCreateWindowSetter("ononline", function ononline() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ononline", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpagehide: {
                    get: rsvm.RsCreateWindowGetter("onpagehide", function onpagehide() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpagehide");
                    }), set: rsvm.RsCreateWindowSetter("onpagehide", function onpagehide() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpagehide", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpageshow: {
                    get: rsvm.RsCreateWindowGetter("onpageshow", function onpageshow() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpageshow");
                    }), set: rsvm.RsCreateWindowSetter("onpageshow", function onpageshow() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpageshow", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onpopstate: {
                    get: rsvm.RsCreateWindowGetter("onpopstate", function onpopstate() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onpopstate");
                    }), set: rsvm.RsCreateWindowSetter("onpopstate", function onpopstate() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onpopstate", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onrejectionhandled: {
                    get: rsvm.RsCreateWindowGetter("onrejectionhandled", function onrejectionhandled() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onrejectionhandled");
                    }), set: rsvm.RsCreateWindowSetter("onrejectionhandled", function onrejectionhandled() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onrejectionhandled", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onstorage: {
                    get: rsvm.RsCreateWindowGetter("onstorage", function onstorage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onstorage");
                    }), set: rsvm.RsCreateWindowSetter("onstorage", function onstorage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onstorage", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onunhandledrejection: {
                    get: rsvm.RsCreateWindowGetter("onunhandledrejection", function onunhandledrejection() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onunhandledrejection");
                    }), set: rsvm.RsCreateWindowSetter("onunhandledrejection", function onunhandledrejection() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onunhandledrejection", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onunload: {
                    get: rsvm.RsCreateWindowGetter("onunload", function onunload() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onunload");
                    }), set: rsvm.RsCreateWindowSetter("onunload", function onunload() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onunload", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                crossOriginIsolated: {
                    get: rsvm.RsCreateWindowGetter("crossOriginIsolated", function crossOriginIsolated() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "crossOriginIsolated");
                    }), set: undefined, enumerable: true, configurable: true
                },
                scheduler: {
                    get: rsvm.RsCreateWindowGetter("scheduler", function scheduler() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "scheduler");
                    }), set: rsvm.RsCreateWindowSetter("scheduler", function scheduler() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "scheduler", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                alert: {
                    value: rsvm.RsCreateWindowAction("alert", 0, function alert() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                atob: {
                    value: rsvm.RsCreateWindowAction("atob", 1, function atob() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                blur: {
                    value: rsvm.RsCreateWindowAction("blur", 0, function blur() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                btoa: {
                    value: rsvm.RsCreateWindowAction("btoa", 1, function btoa() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                cancelAnimationFrame: {
                    value: rsvm.RsCreateWindowAction("cancelAnimationFrame", 1, function cancelAnimationFrame() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                cancelIdleCallback: {
                    value: rsvm.RsCreateWindowAction("cancelIdleCallback", 1, function cancelIdleCallback() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                captureEvents: {
                    value: rsvm.RsCreateWindowAction("captureEvents", 0, function captureEvents() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                clearInterval: {
                    value: rsvm.RsCreateWindowAction("clearInterval", 0, function clearInterval() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                clearTimeout: {
                    value: rsvm.RsCreateWindowAction("clearTimeout", 0, function clearTimeout() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                close: {
                    value: rsvm.RsCreateWindowAction("close", 0, function close() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                confirm: {
                    value: rsvm.RsCreateWindowAction("confirm", 0, function confirm() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                createImageBitmap: {
                    value: rsvm.RsCreateWindowAction("createImageBitmap", 1, function createImageBitmap() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                fetch: {
                    value: rsvm.RsCreateWindowAction("fetch", 1, function fetch() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                find: {
                    value: rsvm.RsCreateWindowAction("find", 0, function find() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                focus: {
                    value: rsvm.RsCreateWindowAction("focus", 0, function focus() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                getComputedStyle: {
                    value: rsvm.RsCreateWindowAction("getComputedStyle", 1, function getComputedStyle() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                getSelection: {
                    value: rsvm.RsCreateWindowAction("getSelection", 0, function getSelection() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                matchMedia: {
                    value: rsvm.RsCreateWindowAction("matchMedia", 1, function matchMedia() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                moveBy: {
                    value: rsvm.RsCreateWindowAction("moveBy", 2, function moveBy() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                moveTo: {
                    value: rsvm.RsCreateWindowAction("moveTo", 2, function moveTo() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                open: {
                    value: rsvm.RsCreateWindowAction("open", 0, function open() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                postMessage: {
                    value: rsvm.RsCreateWindowAction("postMessage", 1, function postMessage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                print: {
                    value: rsvm.RsCreateWindowAction("print", 0, function print() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                prompt: {
                    value: rsvm.RsCreateWindowAction("prompt", 0, function prompt() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                queueMicrotask: {
                    value: rsvm.RsCreateWindowAction("queueMicrotask", 1, function queueMicrotask() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                releaseEvents: {
                    value: rsvm.RsCreateWindowAction("releaseEvents", 0, function releaseEvents() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                reportError: {
                    value: rsvm.RsCreateWindowAction("reportError", 1, function reportError() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                requestAnimationFrame: {
                    value: rsvm.RsCreateWindowAction("requestAnimationFrame", 1, function requestAnimationFrame() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                requestIdleCallback: {
                    value: rsvm.RsCreateWindowAction("requestIdleCallback", 1, function requestIdleCallback() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                resizeBy: {
                    value: rsvm.RsCreateWindowAction("resizeBy", 2, function resizeBy() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                resizeTo: {
                    value: rsvm.RsCreateWindowAction("resizeTo", 2, function resizeTo() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                scroll: {
                    value: rsvm.RsCreateWindowAction("scroll", 0, function scroll() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                scrollBy: {
                    value: rsvm.RsCreateWindowAction("scrollBy", 0, function scrollBy() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                scrollTo: {
                    value: rsvm.RsCreateWindowAction("scrollTo", 0, function scrollTo() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                setInterval: {
                    value: rsvm.RsCreateWindowAction("setInterval", 1, function setInterval() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                setTimeout: {
                    value: rsvm.RsCreateWindowAction("setTimeout", 1, function setTimeout() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                stop: {
                    value: rsvm.RsCreateWindowAction("stop", 0, function stop() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                structuredClone: {
                    value: rsvm.RsCreateWindowAction("structuredClone", 1, function structuredClone() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                webkitCancelAnimationFrame: {
                    value: rsvm.RsCreateWindowAction("webkitCancelAnimationFrame", 1, function webkitCancelAnimationFrame() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                webkitRequestAnimationFrame: {
                    value: rsvm.RsCreateWindowAction("webkitRequestAnimationFrame", 1, function webkitRequestAnimationFrame() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                fence: {
                    get: rsvm.RsCreateWindowGetter("fence", function fence() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "fence");
                    }), set: undefined, enumerable: true, configurable: true
                },
                caches: {
                    get: rsvm.RsCreateWindowGetter("caches", function caches() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "caches");
                    }), set: undefined, enumerable: true, configurable: true
                },
                cookieStore: {
                    get: rsvm.RsCreateWindowGetter("cookieStore", function cookieStore() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "cookieStore");
                    }), set: undefined, enumerable: true, configurable: true
                },
                ondevicemotion: {
                    get: rsvm.RsCreateWindowGetter("ondevicemotion", function ondevicemotion() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondevicemotion");
                    }), set: rsvm.RsCreateWindowSetter("ondevicemotion", function ondevicemotion() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondevicemotion", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondeviceorientation: {
                    get: rsvm.RsCreateWindowGetter("ondeviceorientation", function ondeviceorientation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondeviceorientation");
                    }), set: rsvm.RsCreateWindowSetter("ondeviceorientation", function ondeviceorientation() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondeviceorientation", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                ondeviceorientationabsolute: {
                    get: rsvm.RsCreateWindowGetter("ondeviceorientationabsolute", function ondeviceorientationabsolute() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "ondeviceorientationabsolute");
                    }), set: rsvm.RsCreateWindowSetter("ondeviceorientationabsolute", function ondeviceorientationabsolute() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "ondeviceorientationabsolute", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                launchQueue: {
                    get: rsvm.RsCreateWindowGetter("launchQueue", function launchQueue() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "launchQueue");
                    }), set: undefined, enumerable: true, configurable: true
                },
                sharedStorage: {
                    get: rsvm.RsCreateWindowGetter("sharedStorage", function sharedStorage() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "sharedStorage");
                    }), set: undefined, enumerable: true, configurable: true
                },
                documentPictureInPicture: {
                    get: rsvm.RsCreateWindowGetter("documentPictureInPicture", function documentPictureInPicture() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "documentPictureInPicture");
                    }), set: undefined, enumerable: true, configurable: true
                },
                onbeforematch: {
                    get: rsvm.RsCreateWindowGetter("onbeforematch", function onbeforematch() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onbeforematch");
                    }), set: rsvm.RsCreateWindowSetter("onbeforematch", function onbeforematch() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onbeforematch", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                getScreenDetails: {
                    value: rsvm.RsCreateWindowAction("getScreenDetails", 0, function getScreenDetails() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                openDatabase: {
                    value: rsvm.RsCreateWindowAction("openDatabase", 4, function openDatabase() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                queryLocalFonts: {
                    value: rsvm.RsCreateWindowAction("queryLocalFonts", 0, function queryLocalFonts() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                showDirectoryPicker: {
                    value: rsvm.RsCreateWindowAction("showDirectoryPicker", 0, function showDirectoryPicker() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                showOpenFilePicker: {
                    value: rsvm.RsCreateWindowAction("showOpenFilePicker", 0, function showOpenFilePicker() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                showSaveFilePicker: {
                    value: rsvm.RsCreateWindowAction("showSaveFilePicker", 0, function showSaveFilePicker() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                originAgentCluster: {
                    get: rsvm.RsCreateWindowGetter("originAgentCluster", function originAgentCluster() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "originAgentCluster");
                    }), set: undefined, enumerable: true, configurable: true
                },
                credentialless: {
                    get: rsvm.RsCreateWindowGetter("credentialless", function credentialless() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "credentialless");
                    }), set: undefined, enumerable: true, configurable: true
                },
                speechSynthesis: {
                    get: rsvm.RsCreateWindowGetter("speechSynthesis", function speechSynthesis() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "speechSynthesis");
                    }), set: undefined, enumerable: true, configurable: true
                },
                oncontentvisibilityautostatechange: {
                    get: rsvm.RsCreateWindowGetter("oncontentvisibilityautostatechange", function oncontentvisibilityautostatechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "oncontentvisibilityautostatechange");
                    }), set: rsvm.RsCreateWindowSetter("oncontentvisibilityautostatechange", function oncontentvisibilityautostatechange() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "oncontentvisibilityautostatechange", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                onscrollend: {
                    get: rsvm.RsCreateWindowGetter("onscrollend", function onscrollend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        return rsvm.get(iframeWindow, "onscrollend");
                    }), set: rsvm.RsCreateWindowSetter("onscrollend", function onscrollend() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                        rsvm.set(iframeWindow, "onscrollend", arguments[0]);
                    }), enumerable: true, configurable: true
                },
                webkitRequestFileSystem: {
                    value: rsvm.RsCreateWindowAction("webkitRequestFileSystem", 3, function webkitRequestFileSystem() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
                webkitResolveLocalFileSystemURL: {
                    value: rsvm.RsCreateWindowAction("webkitResolveLocalFileSystemURL", 2, function webkitResolveLocalFileSystemURL() {
                        if (rsvm.debugger) { debugger }     // 调试测试
                    }), writable: true, enumerable: true, configurable: true
                },
            });
            Object.defineProperty(iframeWindow, "chrome", {
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
            return iframeWindow;
        }
    };
}();

!function () {
    Object.defineProperty(window, "HTMLIFrameElement", {
        value: rsvm.RsCreateConstructor("HTMLIFrameElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLIFrameElement = {
        memory: {
            iframeWindow: null,
            src: "",
            srcdoc: "",
            name: "",
            sandbox: rsvm.prototype.DOMTokenList.new(),
            allowFullscreen: false,
            width: "",
            height: "",
            contentDocument: null,
            contentWindow: null,
            referrerPolicy: "",
            csp: "",
            allow: "",
            featurePolicy: rsvm.prototype.FeaturePolicy.new(),
            align: "",
            scrolling: "",
            frameBorder: "",
            longDesc: "",
            marginHeight: "",
            marginWidth: "",
            loading: "auto",
            credentialless: false,
            allowPaymentRequest: false,
            privateToken: "",
            browsingTopics: false,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLIFrameElement", target);
        },
        new(ownerDocument) {
            let obj = rsvm.RsCreate(HTMLIFrameElement.prototype);
            rsvm.set(obj, "nodeName", "iframe".toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", "iframe");
            rsvm.set(obj, "tagName", "iframe".toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLIFrameElement, {
        prototype: { value: HTMLIFrameElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLIFrameElement.prototype, {
        src: {
            get: rsvm.RsCreateGetter("src", function src() {
                return rsvm.get(this, "src");
            }), set: rsvm.RsCreateSetter("src", function src() {
                rsvm.set(this, "src", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        srcdoc: {
            get: rsvm.RsCreateGetter("srcdoc", function srcdoc() {
                return rsvm.get(this, "srcdoc");
            }), set: rsvm.RsCreateSetter("srcdoc", function srcdoc() {
                rsvm.set(this, "srcdoc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: rsvm.RsCreateSetter("name", function name() {
                rsvm.set(this, "name", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sandbox: {
            get: rsvm.RsCreateGetter("sandbox", function sandbox() {
                return rsvm.get(this, "sandbox");
            }), set: rsvm.RsCreateSetter("sandbox", function sandbox() {
                rsvm.set(this, "sandbox", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        allowFullscreen: {
            get: rsvm.RsCreateGetter("allowFullscreen", function allowFullscreen() {
                return rsvm.get(this, "allowFullscreen");
            }), set: rsvm.RsCreateSetter("allowFullscreen", function allowFullscreen() {
                rsvm.set(this, "allowFullscreen", arguments[0]);
            }), enumerable: true, configurable: true,
        },
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
        contentDocument: {
            get: rsvm.RsCreateGetter("contentDocument", function contentDocument() {
                if (this.isConnected) {
                    let iframeWindow = rsvm.get(this, "iframeWindow");
                    if (iframeWindow === null) {
                        iframeWindow = rsvm.prototype.IframeWindow.new();
                        let htmlStr = `<html>\n\t<head></head>\n\t<body></body>\n</html>`;
                        rsvm.buildDom(htmlStr, iframeWindow);
                    }
                    return iframeWindow.document;
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        contentWindow: {
            get: rsvm.RsCreateGetter("contentWindow", function contentWindow() {
                if (this.isConnected) {
                    let iframeWindow = rsvm.get(this, "iframeWindow");
                    if (iframeWindow === null) {
                        iframeWindow = rsvm.prototype.IframeWindow.new();
                        let htmlStr = `<html>\n\t<head></head>\n\t<body></body>\n</html>`;
                        rsvm.buildDom(htmlStr, iframeWindow);
                    };
                    return iframeWindow;
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        referrerPolicy: {
            get: rsvm.RsCreateGetter("referrerPolicy", function referrerPolicy() {
                return rsvm.get(this, "referrerPolicy");
            }), set: rsvm.RsCreateSetter("referrerPolicy", function referrerPolicy() {
                rsvm.set(this, "referrerPolicy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        csp: {
            get: rsvm.RsCreateGetter("csp", function csp() {
                return rsvm.get(this, "csp");
            }), set: rsvm.RsCreateSetter("csp", function csp() {
                rsvm.set(this, "csp", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        allow: {
            get: rsvm.RsCreateGetter("allow", function allow() {
                return rsvm.get(this, "allow");
            }), set: rsvm.RsCreateSetter("allow", function allow() {
                rsvm.set(this, "allow", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        featurePolicy: {
            get: rsvm.RsCreateGetter("featurePolicy", function featurePolicy() {
                return rsvm.get(this, "featurePolicy");
            }), set: undefined, enumerable: true, configurable: true,
        },
        align: {
            get: rsvm.RsCreateGetter("align", function align() {
                return rsvm.get(this, "align");
            }), set: rsvm.RsCreateSetter("align", function align() {
                rsvm.set(this, "align", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        scrolling: {
            get: rsvm.RsCreateGetter("scrolling", function scrolling() {
                return rsvm.get(this, "scrolling");
            }), set: rsvm.RsCreateSetter("scrolling", function scrolling() {
                rsvm.set(this, "scrolling", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        frameBorder: {
            get: rsvm.RsCreateGetter("frameBorder", function frameBorder() {
                return rsvm.get(this, "frameBorder");
            }), set: rsvm.RsCreateSetter("frameBorder", function frameBorder() {
                rsvm.set(this, "frameBorder", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        longDesc: {
            get: rsvm.RsCreateGetter("longDesc", function longDesc() {
                return rsvm.get(this, "longDesc");
            }), set: rsvm.RsCreateSetter("longDesc", function longDesc() {
                rsvm.set(this, "longDesc", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        marginHeight: {
            get: rsvm.RsCreateGetter("marginHeight", function marginHeight() {
                return rsvm.get(this, "marginHeight");
            }), set: rsvm.RsCreateSetter("marginHeight", function marginHeight() {
                rsvm.set(this, "marginHeight", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        marginWidth: {
            get: rsvm.RsCreateGetter("marginWidth", function marginWidth() {
                return rsvm.get(this, "marginWidth");
            }), set: rsvm.RsCreateSetter("marginWidth", function marginWidth() {
                rsvm.set(this, "marginWidth", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getSVGDocument: {
            value: rsvm.RsCreateAction("getSVGDocument", 0, function getSVGDocument() {
            }), writable: true, enumerable: true, configurable: true,
        },
        loading: {
            get: rsvm.RsCreateGetter("loading", function loading() {
                return rsvm.get(this, "loading");
            }), set: rsvm.RsCreateSetter("loading", function loading() {
                rsvm.set(this, "loading", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        credentialless: {
            get: rsvm.RsCreateGetter("credentialless", function credentialless() {
                return rsvm.get(this, "credentialless");
            }), set: rsvm.RsCreateSetter("credentialless", function credentialless() {
                rsvm.set(this, "credentialless", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        allowPaymentRequest: {
            get: rsvm.RsCreateGetter("allowPaymentRequest", function allowPaymentRequest() {
                return rsvm.get(this, "allowPaymentRequest");
            }), set: rsvm.RsCreateSetter("allowPaymentRequest", function allowPaymentRequest() {
                rsvm.set(this, "allowPaymentRequest", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLIFrameElement },
        privateToken: {
            get: rsvm.RsCreateGetter("privateToken", function privateToken() {
                return rsvm.get(this, "privateToken");
            }), set: rsvm.RsCreateSetter("privateToken", function privateToken() {
                rsvm.set(this, "privateToken", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        browsingTopics: {
            get: rsvm.RsCreateGetter("browsingTopics", function browsingTopics() {
                return rsvm.get(this, "browsingTopics");
            }), set: rsvm.RsCreateSetter("browsingTopics", function browsingTopics() {
                rsvm.set(this, "browsingTopics", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HTMLIFrameElement", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(HTMLIFrameElement, HTMLElement);
    Object.setPrototypeOf(HTMLIFrameElement.prototype, HTMLElement.prototype);
}();