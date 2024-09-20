!function () {
    Object.defineProperty(window, "Document", {
        value: rsvm.RsCreateConstructor("Document", 0, function Document() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.Document.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Document = {
        memory: {
            implementation: rsvm.prototype.DOMImplementation.new(),
            URL: "chrome://newtab/",
            documentURI: "chrome://newtab/",
            compatMode: "CSS1Compat",
            characterSet: "UTF-8",
            charset: "UTF-8",
            inputEncoding: "UTF-8",
            contentType: "text/html",
            doctype: null,
            documentElement: null,
            xmlEncoding: null,
            xmlVersion: null,
            xmlStandalone: false,
            domain: "newtab",
            referrer: "",
            cookie: "",
            lastModified: "11/12/2023 20:39:02",
            readyState: "complete",
            title: "打开新的无痕模式标签页",
            dir: "ltr",
            body: null,
            head: null,
            images: rsvm.prototype.HTMLCollection.new(),
            embeds: rsvm.prototype.HTMLCollection.new(),
            plugins: rsvm.prototype.HTMLCollection.new(),
            links: rsvm.prototype.HTMLCollection.new(),
            forms: rsvm.prototype.HTMLCollection.new(),
            scripts: rsvm.prototype.HTMLCollection.new(),
            currentScript: null,
            defaultView: null,
            designMode: "off",
            onreadystatechange: null,
            anchors: rsvm.prototype.HTMLCollection.new(),
            applets: rsvm.prototype.HTMLCollection.new(),
            fgColor: "",
            linkColor: "",
            vlinkColor: "",
            alinkColor: "",
            bgColor: "",
            all: null,
            scrollingElement: null,
            onpointerlockchange: null,
            onpointerlockerror: null,
            hidden: false,
            visibilityState: "visible",
            wasDiscarded: false,
            prerendering: false,
            featurePolicy: rsvm.prototype.FeaturePolicy.new(),
            webkitVisibilityState: "visible",
            webkitHidden: false,
            onbeforecopy: null,
            onbeforecut: null,
            onbeforepaste: null,
            onfreeze: null,
            onprerenderingchange: null,
            onresume: null,
            onsearch: null,
            onvisibilitychange: null,
            fullscreenEnabled: true,
            fullscreen: false,
            onfullscreenchange: null,
            onfullscreenerror: null,
            webkitIsFullScreen: false,
            webkitCurrentFullScreenElement: null,
            webkitFullscreenEnabled: true,
            webkitFullscreenElement: null,
            onwebkitfullscreenchange: null,
            onwebkitfullscreenerror: null,
            rootElement: null,
            pictureInPictureEnabled: true,
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
            oncopy: null,
            oncut: null,
            onpaste: null,
            children: null,
            firstElementChild: null,
            lastElementChild: null,
            childElementCount: 1,
            activeElement: null,
            styleSheets: rsvm.prototype.StyleSheetList.new(),
            pointerLockElement: null,
            fullscreenElement: null,
            adoptedStyleSheets: [],
            pictureInPictureElement: null,
            fonts: rsvm.prototype.FontFaceSet.new(),
            fragmentDirective: rsvm.prototype.FragmentDirective.new(),
            onbeforematch: null,
            timeline: rsvm.prototype.DocumentTimeline.new(),
            oncontentvisibilityautostatechange: null,
            onscrollend: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Document", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory["nodeType"] = 9;
            memory["nodeName"] = "#document";
            memory["nodeValue"] = null;
            memory["ownerDocument"] = null;
            memory["textContent"] = null;
            memory['children'] = rsvm.prototype.HTMLCollection.children(target);
            memory['all'] = rsvm.prototype.HTMLAllCollection.new(target);
        },
        new() {
            let obj = rsvm.RsCreate(Document.prototype);
            return obj;
        },
    };

    Object.defineProperties(Document, {
        prototype: { value: Document.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Document.prototype, {
        implementation: {
            get: rsvm.RsCreateGetter("implementation", function implementation() {
                return rsvm.get(this, "implementation");
            }), set: undefined, enumerable: true, configurable: true,
        },
        URL: {
            get: rsvm.RsCreateGetter("URL", function URL() {
                return rsvm.siteInfo.url;
            }), set: undefined, enumerable: true, configurable: true,
        },
        documentURI: {
            get: rsvm.RsCreateGetter("documentURI", function documentURI() {
                return rsvm.siteInfo.url;
            }), set: undefined, enumerable: true, configurable: true,
        },
        compatMode: {
            get: rsvm.RsCreateGetter("compatMode", function compatMode() {
                return rsvm.get(this, "compatMode");
            }), set: undefined, enumerable: true, configurable: true,
        },
        characterSet: {
            get: rsvm.RsCreateGetter("characterSet", function characterSet() {
                return rsvm.get(this, "characterSet");
            }), set: undefined, enumerable: true, configurable: true,
        },
        charset: {
            get: rsvm.RsCreateGetter("charset", function charset() {
                return rsvm.get(this, "charset");
            }), set: undefined, enumerable: true, configurable: true,
        },
        inputEncoding: {
            get: rsvm.RsCreateGetter("inputEncoding", function inputEncoding() {
                return rsvm.get(this, "inputEncoding");
            }), set: undefined, enumerable: true, configurable: true,
        },
        contentType: {
            get: rsvm.RsCreateGetter("contentType", function contentType() {
                return rsvm.get(this, "contentType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        doctype: {
            get: rsvm.RsCreateGetter("doctype", function doctype() {
                return rsvm.get(this, "doctype");
            }), set: undefined, enumerable: true, configurable: true,
        },
        documentElement: {
            get: rsvm.RsCreateGetter("documentElement", function documentElement() {
                return rsvm.get(this, "documentElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        xmlEncoding: {
            get: rsvm.RsCreateGetter("xmlEncoding", function xmlEncoding() {
                return rsvm.get(this, "xmlEncoding");
            }), set: undefined, enumerable: true, configurable: true,
        },
        xmlVersion: {
            get: rsvm.RsCreateGetter("xmlVersion", function xmlVersion() {
                return rsvm.get(this, "xmlVersion");
            }), set: rsvm.RsCreateSetter("xmlVersion", function xmlVersion() {
                rsvm.set(this, "xmlVersion", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        xmlStandalone: {
            get: rsvm.RsCreateGetter("xmlStandalone", function xmlStandalone() {
                return rsvm.get(this, "xmlStandalone");
            }), set: rsvm.RsCreateSetter("xmlStandalone", function xmlStandalone() {
                rsvm.set(this, "xmlStandalone", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        domain: {
            get: rsvm.RsCreateGetter("domain", function domain() {
                return location.host;
            }), set: rsvm.RsCreateSetter("domain", function domain() {
                location.host = arguments[0];
            }), enumerable: true, configurable: true,
        },
        referrer: {
            get: rsvm.RsCreateGetter("referrer", function referrer() {
                return rsvm.siteInfo.referrer;
            }), set: undefined, enumerable: true, configurable: true,
        },
        cookie: {
            get: rsvm.RsCreateGetter("cookie", function cookie() {
                return rsvm.get(this, "cookie");
            }), set: rsvm.RsCreateSetter("cookie", function cookie() {
                let item = arguments[0].replace(/ /g, "").split(';')[0];
                let item_key = item.split('=')[0];
                let cookie = rsvm.get(this, "cookie");
                let item_list = cookie.split('; ');
                if (item_list[0] === '') { item_list = []; };
                let cooke_list = item_list;
                for (let i = 0; i < item_list.length; i++) {
                    if (item_list[i].split('=')[0] === item_key) {
                        cooke_list.splice(i, 1);
                    }
                }
                cooke_list.push(item);
                rsvm.set(this, "cookie", cooke_list.join("; "));
            }), enumerable: true, configurable: true,
        },
        lastModified: {
            get: rsvm.RsCreateGetter("lastModified", function lastModified() {
                return rsvm.get(this, "lastModified");
            }), set: undefined, enumerable: true, configurable: true,
        },
        readyState: {
            get: rsvm.RsCreateGetter("readyState", function readyState() {
                return rsvm.get(this, "readyState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        title: {
            get: rsvm.RsCreateGetter("title", function title() {
                return rsvm.get(this, "title");
            }), set: rsvm.RsCreateSetter("title", function title() {
                rsvm.set(this, "title", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        dir: {
            get: rsvm.RsCreateGetter("dir", function dir() {
                return rsvm.get(this, "dir");
            }), set: rsvm.RsCreateSetter("dir", function dir() {
                rsvm.set(this, "dir", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        body: {
            get: rsvm.RsCreateGetter("body", function body() {
                return rsvm.get(this, "body");
            }), set: rsvm.RsCreateSetter("body", function body() {
                rsvm.set(this, "body", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        head: {
            get: rsvm.RsCreateGetter("head", function head() {
                return rsvm.get(this, "head");
            }), set: undefined, enumerable: true, configurable: true,
        },
        images: {
            get: rsvm.RsCreateGetter("images", function images() {
                return rsvm.get(this, "images");
            }), set: undefined, enumerable: true, configurable: true,
        },
        embeds: {
            get: rsvm.RsCreateGetter("embeds", function embeds() {
                return rsvm.get(this, "embeds");
            }), set: undefined, enumerable: true, configurable: true,
        },
        plugins: {
            get: rsvm.RsCreateGetter("plugins", function plugins() {
                return rsvm.get(this, "plugins");
            }), set: undefined, enumerable: true, configurable: true,
        },
        links: {
            get: rsvm.RsCreateGetter("links", function links() {
                return rsvm.get(this, "links");
            }), set: undefined, enumerable: true, configurable: true,
        },
        forms: {
            get: rsvm.RsCreateGetter("forms", function forms() {
                return rsvm.get(this, "forms");
            }), set: undefined, enumerable: true, configurable: true,
        },
        scripts: {
            get: rsvm.RsCreateGetter("scripts", function scripts() {
                return rsvm.get(this, "scripts");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentScript: {
            get: rsvm.RsCreateGetter("currentScript", function currentScript() {
                return rsvm.get(this, "currentScript");
            }), set: undefined, enumerable: true, configurable: true,
        },
        defaultView: {
            get: rsvm.RsCreateGetter("defaultView", function defaultView() {
                return rsvm.get(this, "defaultView");
            }), set: undefined, enumerable: true, configurable: true,
        },
        designMode: {
            get: rsvm.RsCreateGetter("designMode", function designMode() {
                return rsvm.get(this, "designMode");
            }), set: rsvm.RsCreateSetter("designMode", function designMode() {
                rsvm.set(this, "designMode", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onreadystatechange: {
            get: rsvm.RsCreateGetter("onreadystatechange", function onreadystatechange() {
                return rsvm.get(this, "onreadystatechange");
            }), set: rsvm.RsCreateSetter("onreadystatechange", function onreadystatechange() {
                rsvm.set(this, "onreadystatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        anchors: {
            get: rsvm.RsCreateGetter("anchors", function anchors() {
                return rsvm.get(this, "anchors");
            }), set: undefined, enumerable: true, configurable: true,
        },
        applets: {
            get: rsvm.RsCreateGetter("applets", function applets() {
                return rsvm.get(this, "applets");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fgColor: {
            get: rsvm.RsCreateGetter("fgColor", function fgColor() {
                return rsvm.get(this, "fgColor");
            }), set: rsvm.RsCreateSetter("fgColor", function fgColor() {
                rsvm.set(this, "fgColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        linkColor: {
            get: rsvm.RsCreateGetter("linkColor", function linkColor() {
                return rsvm.get(this, "linkColor");
            }), set: rsvm.RsCreateSetter("linkColor", function linkColor() {
                rsvm.set(this, "linkColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        vlinkColor: {
            get: rsvm.RsCreateGetter("vlinkColor", function vlinkColor() {
                return rsvm.get(this, "vlinkColor");
            }), set: rsvm.RsCreateSetter("vlinkColor", function vlinkColor() {
                rsvm.set(this, "vlinkColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        alinkColor: {
            get: rsvm.RsCreateGetter("alinkColor", function alinkColor() {
                return rsvm.get(this, "alinkColor");
            }), set: rsvm.RsCreateSetter("alinkColor", function alinkColor() {
                rsvm.set(this, "alinkColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        bgColor: {
            get: rsvm.RsCreateGetter("bgColor", function bgColor() {
                return rsvm.get(this, "bgColor");
            }), set: rsvm.RsCreateSetter("bgColor", function bgColor() {
                rsvm.set(this, "bgColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        all: {
            get: rsvm.RsCreateGetter("all", function all() {
                return rsvm.get(this, "all");
            }), set: undefined, enumerable: true, configurable: true,
        },
        scrollingElement: {
            get: rsvm.RsCreateGetter("scrollingElement", function scrollingElement() {
                return rsvm.get(this, "scrollingElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onpointerlockchange: {
            get: rsvm.RsCreateGetter("onpointerlockchange", function onpointerlockchange() {
                return rsvm.get(this, "onpointerlockchange");
            }), set: rsvm.RsCreateSetter("onpointerlockchange", function onpointerlockchange() {
                rsvm.set(this, "onpointerlockchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerlockerror: {
            get: rsvm.RsCreateGetter("onpointerlockerror", function onpointerlockerror() {
                return rsvm.get(this, "onpointerlockerror");
            }), set: rsvm.RsCreateSetter("onpointerlockerror", function onpointerlockerror() {
                rsvm.set(this, "onpointerlockerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hidden: {
            get: rsvm.RsCreateGetter("hidden", function hidden() {
                return rsvm.get(this, "hidden");
            }), set: undefined, enumerable: true, configurable: true,
        },
        visibilityState: {
            get: rsvm.RsCreateGetter("visibilityState", function visibilityState() {
                return rsvm.get(this, "visibilityState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        wasDiscarded: {
            get: rsvm.RsCreateGetter("wasDiscarded", function wasDiscarded() {
                return rsvm.get(this, "wasDiscarded");
            }), set: undefined, enumerable: true, configurable: true,
        },
        prerendering: {
            get: rsvm.RsCreateGetter("prerendering", function prerendering() {
                return rsvm.get(this, "prerendering");
            }), set: undefined, enumerable: true, configurable: true,
        },
        featurePolicy: {
            get: rsvm.RsCreateGetter("featurePolicy", function featurePolicy() {
                return rsvm.get(this, "featurePolicy");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitVisibilityState: {
            get: rsvm.RsCreateGetter("webkitVisibilityState", function webkitVisibilityState() {
                return rsvm.get(this, "webkitVisibilityState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitHidden: {
            get: rsvm.RsCreateGetter("webkitHidden", function webkitHidden() {
                return rsvm.get(this, "webkitHidden");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onbeforecopy: {
            get: rsvm.RsCreateGetter("onbeforecopy", function onbeforecopy() {
                return rsvm.get(this, "onbeforecopy");
            }), set: rsvm.RsCreateSetter("onbeforecopy", function onbeforecopy() {
                rsvm.set(this, "onbeforecopy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onbeforecut: {
            get: rsvm.RsCreateGetter("onbeforecut", function onbeforecut() {
                return rsvm.get(this, "onbeforecut");
            }), set: rsvm.RsCreateSetter("onbeforecut", function onbeforecut() {
                rsvm.set(this, "onbeforecut", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onbeforepaste: {
            get: rsvm.RsCreateGetter("onbeforepaste", function onbeforepaste() {
                return rsvm.get(this, "onbeforepaste");
            }), set: rsvm.RsCreateSetter("onbeforepaste", function onbeforepaste() {
                rsvm.set(this, "onbeforepaste", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onfreeze: {
            get: rsvm.RsCreateGetter("onfreeze", function onfreeze() {
                return rsvm.get(this, "onfreeze");
            }), set: rsvm.RsCreateSetter("onfreeze", function onfreeze() {
                rsvm.set(this, "onfreeze", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onprerenderingchange: {
            get: rsvm.RsCreateGetter("onprerenderingchange", function onprerenderingchange() {
                return rsvm.get(this, "onprerenderingchange");
            }), set: rsvm.RsCreateSetter("onprerenderingchange", function onprerenderingchange() {
                rsvm.set(this, "onprerenderingchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onresume: {
            get: rsvm.RsCreateGetter("onresume", function onresume() {
                return rsvm.get(this, "onresume");
            }), set: rsvm.RsCreateSetter("onresume", function onresume() {
                rsvm.set(this, "onresume", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onsearch: {
            get: rsvm.RsCreateGetter("onsearch", function onsearch() {
                return rsvm.get(this, "onsearch");
            }), set: rsvm.RsCreateSetter("onsearch", function onsearch() {
                rsvm.set(this, "onsearch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onvisibilitychange: {
            get: rsvm.RsCreateGetter("onvisibilitychange", function onvisibilitychange() {
                return rsvm.get(this, "onvisibilitychange");
            }), set: rsvm.RsCreateSetter("onvisibilitychange", function onvisibilitychange() {
                rsvm.set(this, "onvisibilitychange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fullscreenEnabled: {
            get: rsvm.RsCreateGetter("fullscreenEnabled", function fullscreenEnabled() {
                return rsvm.get(this, "fullscreenEnabled");
            }), set: rsvm.RsCreateSetter("fullscreenEnabled", function fullscreenEnabled() {
                rsvm.set(this, "fullscreenEnabled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fullscreen: {
            get: rsvm.RsCreateGetter("fullscreen", function fullscreen() {
                return rsvm.get(this, "fullscreen");
            }), set: rsvm.RsCreateSetter("fullscreen", function fullscreen() {
                rsvm.set(this, "fullscreen", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onfullscreenchange: {
            get: rsvm.RsCreateGetter("onfullscreenchange", function onfullscreenchange() {
                return rsvm.get(this, "onfullscreenchange");
            }), set: rsvm.RsCreateSetter("onfullscreenchange", function onfullscreenchange() {
                rsvm.set(this, "onfullscreenchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onfullscreenerror: {
            get: rsvm.RsCreateGetter("onfullscreenerror", function onfullscreenerror() {
                return rsvm.get(this, "onfullscreenerror");
            }), set: rsvm.RsCreateSetter("onfullscreenerror", function onfullscreenerror() {
                rsvm.set(this, "onfullscreenerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        webkitIsFullScreen: {
            get: rsvm.RsCreateGetter("webkitIsFullScreen", function webkitIsFullScreen() {
                return rsvm.get(this, "webkitIsFullScreen");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitCurrentFullScreenElement: {
            get: rsvm.RsCreateGetter("webkitCurrentFullScreenElement", function webkitCurrentFullScreenElement() {
                return rsvm.get(this, "webkitCurrentFullScreenElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitFullscreenEnabled: {
            get: rsvm.RsCreateGetter("webkitFullscreenEnabled", function webkitFullscreenEnabled() {
                return rsvm.get(this, "webkitFullscreenEnabled");
            }), set: undefined, enumerable: true, configurable: true,
        },
        webkitFullscreenElement: {
            get: rsvm.RsCreateGetter("webkitFullscreenElement", function webkitFullscreenElement() {
                return rsvm.get(this, "webkitFullscreenElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onwebkitfullscreenchange: {
            get: rsvm.RsCreateGetter("onwebkitfullscreenchange", function onwebkitfullscreenchange() {
                return rsvm.get(this, "onwebkitfullscreenchange");
            }), set: rsvm.RsCreateSetter("onwebkitfullscreenchange", function onwebkitfullscreenchange() {
                rsvm.set(this, "onwebkitfullscreenchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwebkitfullscreenerror: {
            get: rsvm.RsCreateGetter("onwebkitfullscreenerror", function onwebkitfullscreenerror() {
                return rsvm.get(this, "onwebkitfullscreenerror");
            }), set: rsvm.RsCreateSetter("onwebkitfullscreenerror", function onwebkitfullscreenerror() {
                rsvm.set(this, "onwebkitfullscreenerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        rootElement: {
            get: rsvm.RsCreateGetter("rootElement", function rootElement() {
                return rsvm.get(this, "rootElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pictureInPictureEnabled: {
            get: rsvm.RsCreateGetter("pictureInPictureEnabled", function pictureInPictureEnabled() {
                return rsvm.get(this, "pictureInPictureEnabled");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onbeforexrselect: {
            get: rsvm.RsCreateGetter("onbeforexrselect", function onbeforexrselect() {
                return rsvm.get(this, "onbeforexrselect");
            }), set: rsvm.RsCreateSetter("onbeforexrselect", function onbeforexrselect() {
                rsvm.set(this, "onbeforexrselect", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onabort: {
            get: rsvm.RsCreateGetter("onabort", function onabort() {
                return rsvm.get(this, "onabort");
            }), set: rsvm.RsCreateSetter("onabort", function onabort() {
                rsvm.set(this, "onabort", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onbeforeinput: {
            get: rsvm.RsCreateGetter("onbeforeinput", function onbeforeinput() {
                return rsvm.get(this, "onbeforeinput");
            }), set: rsvm.RsCreateSetter("onbeforeinput", function onbeforeinput() {
                rsvm.set(this, "onbeforeinput", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onbeforetoggle: {
            get: rsvm.RsCreateGetter("onbeforetoggle", function onbeforetoggle() {
                return rsvm.get(this, "onbeforetoggle");
            }), set: rsvm.RsCreateSetter("onbeforetoggle", function onbeforetoggle() {
                rsvm.set(this, "onbeforetoggle", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onblur: {
            get: rsvm.RsCreateGetter("onblur", function onblur() {
                return rsvm.get(this, "onblur");
            }), set: rsvm.RsCreateSetter("onblur", function onblur() {
                rsvm.set(this, "onblur", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncancel: {
            get: rsvm.RsCreateGetter("oncancel", function oncancel() {
                return rsvm.get(this, "oncancel");
            }), set: rsvm.RsCreateSetter("oncancel", function oncancel() {
                rsvm.set(this, "oncancel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncanplay: {
            get: rsvm.RsCreateGetter("oncanplay", function oncanplay() {
                return rsvm.get(this, "oncanplay");
            }), set: rsvm.RsCreateSetter("oncanplay", function oncanplay() {
                rsvm.set(this, "oncanplay", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncanplaythrough: {
            get: rsvm.RsCreateGetter("oncanplaythrough", function oncanplaythrough() {
                return rsvm.get(this, "oncanplaythrough");
            }), set: rsvm.RsCreateSetter("oncanplaythrough", function oncanplaythrough() {
                rsvm.set(this, "oncanplaythrough", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onchange: {
            get: rsvm.RsCreateGetter("onchange", function onchange() {
                return rsvm.get(this, "onchange");
            }), set: rsvm.RsCreateSetter("onchange", function onchange() {
                rsvm.set(this, "onchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onclick: {
            get: rsvm.RsCreateGetter("onclick", function onclick() {
                return rsvm.get(this, "onclick");
            }), set: rsvm.RsCreateSetter("onclick", function onclick() {
                rsvm.set(this, "onclick", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onclose: {
            get: rsvm.RsCreateGetter("onclose", function onclose() {
                return rsvm.get(this, "onclose");
            }), set: rsvm.RsCreateSetter("onclose", function onclose() {
                rsvm.set(this, "onclose", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncontextlost: {
            get: rsvm.RsCreateGetter("oncontextlost", function oncontextlost() {
                return rsvm.get(this, "oncontextlost");
            }), set: rsvm.RsCreateSetter("oncontextlost", function oncontextlost() {
                rsvm.set(this, "oncontextlost", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncontextmenu: {
            get: rsvm.RsCreateGetter("oncontextmenu", function oncontextmenu() {
                return rsvm.get(this, "oncontextmenu");
            }), set: rsvm.RsCreateSetter("oncontextmenu", function oncontextmenu() {
                rsvm.set(this, "oncontextmenu", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncontextrestored: {
            get: rsvm.RsCreateGetter("oncontextrestored", function oncontextrestored() {
                return rsvm.get(this, "oncontextrestored");
            }), set: rsvm.RsCreateSetter("oncontextrestored", function oncontextrestored() {
                rsvm.set(this, "oncontextrestored", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncuechange: {
            get: rsvm.RsCreateGetter("oncuechange", function oncuechange() {
                return rsvm.get(this, "oncuechange");
            }), set: rsvm.RsCreateSetter("oncuechange", function oncuechange() {
                rsvm.set(this, "oncuechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondblclick: {
            get: rsvm.RsCreateGetter("ondblclick", function ondblclick() {
                return rsvm.get(this, "ondblclick");
            }), set: rsvm.RsCreateSetter("ondblclick", function ondblclick() {
                rsvm.set(this, "ondblclick", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondrag: {
            get: rsvm.RsCreateGetter("ondrag", function ondrag() {
                return rsvm.get(this, "ondrag");
            }), set: rsvm.RsCreateSetter("ondrag", function ondrag() {
                rsvm.set(this, "ondrag", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondragend: {
            get: rsvm.RsCreateGetter("ondragend", function ondragend() {
                return rsvm.get(this, "ondragend");
            }), set: rsvm.RsCreateSetter("ondragend", function ondragend() {
                rsvm.set(this, "ondragend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondragenter: {
            get: rsvm.RsCreateGetter("ondragenter", function ondragenter() {
                return rsvm.get(this, "ondragenter");
            }), set: rsvm.RsCreateSetter("ondragenter", function ondragenter() {
                rsvm.set(this, "ondragenter", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondragleave: {
            get: rsvm.RsCreateGetter("ondragleave", function ondragleave() {
                return rsvm.get(this, "ondragleave");
            }), set: rsvm.RsCreateSetter("ondragleave", function ondragleave() {
                rsvm.set(this, "ondragleave", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondragover: {
            get: rsvm.RsCreateGetter("ondragover", function ondragover() {
                return rsvm.get(this, "ondragover");
            }), set: rsvm.RsCreateSetter("ondragover", function ondragover() {
                rsvm.set(this, "ondragover", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondragstart: {
            get: rsvm.RsCreateGetter("ondragstart", function ondragstart() {
                return rsvm.get(this, "ondragstart");
            }), set: rsvm.RsCreateSetter("ondragstart", function ondragstart() {
                rsvm.set(this, "ondragstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondrop: {
            get: rsvm.RsCreateGetter("ondrop", function ondrop() {
                return rsvm.get(this, "ondrop");
            }), set: rsvm.RsCreateSetter("ondrop", function ondrop() {
                rsvm.set(this, "ondrop", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ondurationchange: {
            get: rsvm.RsCreateGetter("ondurationchange", function ondurationchange() {
                return rsvm.get(this, "ondurationchange");
            }), set: rsvm.RsCreateSetter("ondurationchange", function ondurationchange() {
                rsvm.set(this, "ondurationchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onemptied: {
            get: rsvm.RsCreateGetter("onemptied", function onemptied() {
                return rsvm.get(this, "onemptied");
            }), set: rsvm.RsCreateSetter("onemptied", function onemptied() {
                rsvm.set(this, "onemptied", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onended: {
            get: rsvm.RsCreateGetter("onended", function onended() {
                return rsvm.get(this, "onended");
            }), set: rsvm.RsCreateSetter("onended", function onended() {
                rsvm.set(this, "onended", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onerror: {
            get: rsvm.RsCreateGetter("onerror", function onerror() {
                return rsvm.get(this, "onerror");
            }), set: rsvm.RsCreateSetter("onerror", function onerror() {
                rsvm.set(this, "onerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onfocus: {
            get: rsvm.RsCreateGetter("onfocus", function onfocus() {
                return rsvm.get(this, "onfocus");
            }), set: rsvm.RsCreateSetter("onfocus", function onfocus() {
                rsvm.set(this, "onfocus", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onformdata: {
            get: rsvm.RsCreateGetter("onformdata", function onformdata() {
                return rsvm.get(this, "onformdata");
            }), set: rsvm.RsCreateSetter("onformdata", function onformdata() {
                rsvm.set(this, "onformdata", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oninput: {
            get: rsvm.RsCreateGetter("oninput", function oninput() {
                return rsvm.get(this, "oninput");
            }), set: rsvm.RsCreateSetter("oninput", function oninput() {
                rsvm.set(this, "oninput", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oninvalid: {
            get: rsvm.RsCreateGetter("oninvalid", function oninvalid() {
                return rsvm.get(this, "oninvalid");
            }), set: rsvm.RsCreateSetter("oninvalid", function oninvalid() {
                rsvm.set(this, "oninvalid", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onkeydown: {
            get: rsvm.RsCreateGetter("onkeydown", function onkeydown() {
                return rsvm.get(this, "onkeydown");
            }), set: rsvm.RsCreateSetter("onkeydown", function onkeydown() {
                rsvm.set(this, "onkeydown", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onkeypress: {
            get: rsvm.RsCreateGetter("onkeypress", function onkeypress() {
                return rsvm.get(this, "onkeypress");
            }), set: rsvm.RsCreateSetter("onkeypress", function onkeypress() {
                rsvm.set(this, "onkeypress", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onkeyup: {
            get: rsvm.RsCreateGetter("onkeyup", function onkeyup() {
                return rsvm.get(this, "onkeyup");
            }), set: rsvm.RsCreateSetter("onkeyup", function onkeyup() {
                rsvm.set(this, "onkeyup", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onload: {
            get: rsvm.RsCreateGetter("onload", function onload() {
                return rsvm.get(this, "onload");
            }), set: rsvm.RsCreateSetter("onload", function onload() {
                rsvm.set(this, "onload", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadeddata: {
            get: rsvm.RsCreateGetter("onloadeddata", function onloadeddata() {
                return rsvm.get(this, "onloadeddata");
            }), set: rsvm.RsCreateSetter("onloadeddata", function onloadeddata() {
                rsvm.set(this, "onloadeddata", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadedmetadata: {
            get: rsvm.RsCreateGetter("onloadedmetadata", function onloadedmetadata() {
                return rsvm.get(this, "onloadedmetadata");
            }), set: rsvm.RsCreateSetter("onloadedmetadata", function onloadedmetadata() {
                rsvm.set(this, "onloadedmetadata", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onloadstart: {
            get: rsvm.RsCreateGetter("onloadstart", function onloadstart() {
                return rsvm.get(this, "onloadstart");
            }), set: rsvm.RsCreateSetter("onloadstart", function onloadstart() {
                rsvm.set(this, "onloadstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmousedown: {
            get: rsvm.RsCreateGetter("onmousedown", function onmousedown() {
                return rsvm.get(this, "onmousedown");
            }), set: rsvm.RsCreateSetter("onmousedown", function onmousedown() {
                rsvm.set(this, "onmousedown", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmouseenter: {
            get: rsvm.RsCreateGetter("onmouseenter", function onmouseenter() {
                return rsvm.get(this, "onmouseenter");
            }), set: rsvm.RsCreateSetter("onmouseenter", function onmouseenter() {
                rsvm.set(this, "onmouseenter", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmouseleave: {
            get: rsvm.RsCreateGetter("onmouseleave", function onmouseleave() {
                return rsvm.get(this, "onmouseleave");
            }), set: rsvm.RsCreateSetter("onmouseleave", function onmouseleave() {
                rsvm.set(this, "onmouseleave", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmousemove: {
            get: rsvm.RsCreateGetter("onmousemove", function onmousemove() {
                return rsvm.get(this, "onmousemove");
            }), set: rsvm.RsCreateSetter("onmousemove", function onmousemove() {
                rsvm.set(this, "onmousemove", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmouseout: {
            get: rsvm.RsCreateGetter("onmouseout", function onmouseout() {
                return rsvm.get(this, "onmouseout");
            }), set: rsvm.RsCreateSetter("onmouseout", function onmouseout() {
                rsvm.set(this, "onmouseout", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmouseover: {
            get: rsvm.RsCreateGetter("onmouseover", function onmouseover() {
                return rsvm.get(this, "onmouseover");
            }), set: rsvm.RsCreateSetter("onmouseover", function onmouseover() {
                rsvm.set(this, "onmouseover", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmouseup: {
            get: rsvm.RsCreateGetter("onmouseup", function onmouseup() {
                return rsvm.get(this, "onmouseup");
            }), set: rsvm.RsCreateSetter("onmouseup", function onmouseup() {
                rsvm.set(this, "onmouseup", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onmousewheel: {
            get: rsvm.RsCreateGetter("onmousewheel", function onmousewheel() {
                return rsvm.get(this, "onmousewheel");
            }), set: rsvm.RsCreateSetter("onmousewheel", function onmousewheel() {
                rsvm.set(this, "onmousewheel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpause: {
            get: rsvm.RsCreateGetter("onpause", function onpause() {
                return rsvm.get(this, "onpause");
            }), set: rsvm.RsCreateSetter("onpause", function onpause() {
                rsvm.set(this, "onpause", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onplay: {
            get: rsvm.RsCreateGetter("onplay", function onplay() {
                return rsvm.get(this, "onplay");
            }), set: rsvm.RsCreateSetter("onplay", function onplay() {
                rsvm.set(this, "onplay", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onplaying: {
            get: rsvm.RsCreateGetter("onplaying", function onplaying() {
                return rsvm.get(this, "onplaying");
            }), set: rsvm.RsCreateSetter("onplaying", function onplaying() {
                rsvm.set(this, "onplaying", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onprogress: {
            get: rsvm.RsCreateGetter("onprogress", function onprogress() {
                return rsvm.get(this, "onprogress");
            }), set: rsvm.RsCreateSetter("onprogress", function onprogress() {
                rsvm.set(this, "onprogress", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onratechange: {
            get: rsvm.RsCreateGetter("onratechange", function onratechange() {
                return rsvm.get(this, "onratechange");
            }), set: rsvm.RsCreateSetter("onratechange", function onratechange() {
                rsvm.set(this, "onratechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onreset: {
            get: rsvm.RsCreateGetter("onreset", function onreset() {
                return rsvm.get(this, "onreset");
            }), set: rsvm.RsCreateSetter("onreset", function onreset() {
                rsvm.set(this, "onreset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onresize: {
            get: rsvm.RsCreateGetter("onresize", function onresize() {
                return rsvm.get(this, "onresize");
            }), set: rsvm.RsCreateSetter("onresize", function onresize() {
                rsvm.set(this, "onresize", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onscroll: {
            get: rsvm.RsCreateGetter("onscroll", function onscroll() {
                return rsvm.get(this, "onscroll");
            }), set: rsvm.RsCreateSetter("onscroll", function onscroll() {
                rsvm.set(this, "onscroll", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onsecuritypolicyviolation: {
            get: rsvm.RsCreateGetter("onsecuritypolicyviolation", function onsecuritypolicyviolation() {
                return rsvm.get(this, "onsecuritypolicyviolation");
            }), set: rsvm.RsCreateSetter("onsecuritypolicyviolation", function onsecuritypolicyviolation() {
                rsvm.set(this, "onsecuritypolicyviolation", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onseeked: {
            get: rsvm.RsCreateGetter("onseeked", function onseeked() {
                return rsvm.get(this, "onseeked");
            }), set: rsvm.RsCreateSetter("onseeked", function onseeked() {
                rsvm.set(this, "onseeked", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onseeking: {
            get: rsvm.RsCreateGetter("onseeking", function onseeking() {
                return rsvm.get(this, "onseeking");
            }), set: rsvm.RsCreateSetter("onseeking", function onseeking() {
                rsvm.set(this, "onseeking", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onselect: {
            get: rsvm.RsCreateGetter("onselect", function onselect() {
                return rsvm.get(this, "onselect");
            }), set: rsvm.RsCreateSetter("onselect", function onselect() {
                rsvm.set(this, "onselect", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onslotchange: {
            get: rsvm.RsCreateGetter("onslotchange", function onslotchange() {
                return rsvm.get(this, "onslotchange");
            }), set: rsvm.RsCreateSetter("onslotchange", function onslotchange() {
                rsvm.set(this, "onslotchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onstalled: {
            get: rsvm.RsCreateGetter("onstalled", function onstalled() {
                return rsvm.get(this, "onstalled");
            }), set: rsvm.RsCreateSetter("onstalled", function onstalled() {
                rsvm.set(this, "onstalled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onsubmit: {
            get: rsvm.RsCreateGetter("onsubmit", function onsubmit() {
                return rsvm.get(this, "onsubmit");
            }), set: rsvm.RsCreateSetter("onsubmit", function onsubmit() {
                rsvm.set(this, "onsubmit", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onsuspend: {
            get: rsvm.RsCreateGetter("onsuspend", function onsuspend() {
                return rsvm.get(this, "onsuspend");
            }), set: rsvm.RsCreateSetter("onsuspend", function onsuspend() {
                rsvm.set(this, "onsuspend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontimeupdate: {
            get: rsvm.RsCreateGetter("ontimeupdate", function ontimeupdate() {
                return rsvm.get(this, "ontimeupdate");
            }), set: rsvm.RsCreateSetter("ontimeupdate", function ontimeupdate() {
                rsvm.set(this, "ontimeupdate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontoggle: {
            get: rsvm.RsCreateGetter("ontoggle", function ontoggle() {
                return rsvm.get(this, "ontoggle");
            }), set: rsvm.RsCreateSetter("ontoggle", function ontoggle() {
                rsvm.set(this, "ontoggle", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onvolumechange: {
            get: rsvm.RsCreateGetter("onvolumechange", function onvolumechange() {
                return rsvm.get(this, "onvolumechange");
            }), set: rsvm.RsCreateSetter("onvolumechange", function onvolumechange() {
                rsvm.set(this, "onvolumechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwaiting: {
            get: rsvm.RsCreateGetter("onwaiting", function onwaiting() {
                return rsvm.get(this, "onwaiting");
            }), set: rsvm.RsCreateSetter("onwaiting", function onwaiting() {
                rsvm.set(this, "onwaiting", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwebkitanimationend: {
            get: rsvm.RsCreateGetter("onwebkitanimationend", function onwebkitanimationend() {
                return rsvm.get(this, "onwebkitanimationend");
            }), set: rsvm.RsCreateSetter("onwebkitanimationend", function onwebkitanimationend() {
                rsvm.set(this, "onwebkitanimationend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwebkitanimationiteration: {
            get: rsvm.RsCreateGetter("onwebkitanimationiteration", function onwebkitanimationiteration() {
                return rsvm.get(this, "onwebkitanimationiteration");
            }), set: rsvm.RsCreateSetter("onwebkitanimationiteration", function onwebkitanimationiteration() {
                rsvm.set(this, "onwebkitanimationiteration", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwebkitanimationstart: {
            get: rsvm.RsCreateGetter("onwebkitanimationstart", function onwebkitanimationstart() {
                return rsvm.get(this, "onwebkitanimationstart");
            }), set: rsvm.RsCreateSetter("onwebkitanimationstart", function onwebkitanimationstart() {
                rsvm.set(this, "onwebkitanimationstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwebkittransitionend: {
            get: rsvm.RsCreateGetter("onwebkittransitionend", function onwebkittransitionend() {
                return rsvm.get(this, "onwebkittransitionend");
            }), set: rsvm.RsCreateSetter("onwebkittransitionend", function onwebkittransitionend() {
                rsvm.set(this, "onwebkittransitionend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onwheel: {
            get: rsvm.RsCreateGetter("onwheel", function onwheel() {
                return rsvm.get(this, "onwheel");
            }), set: rsvm.RsCreateSetter("onwheel", function onwheel() {
                rsvm.set(this, "onwheel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onauxclick: {
            get: rsvm.RsCreateGetter("onauxclick", function onauxclick() {
                return rsvm.get(this, "onauxclick");
            }), set: rsvm.RsCreateSetter("onauxclick", function onauxclick() {
                rsvm.set(this, "onauxclick", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ongotpointercapture: {
            get: rsvm.RsCreateGetter("ongotpointercapture", function ongotpointercapture() {
                return rsvm.get(this, "ongotpointercapture");
            }), set: rsvm.RsCreateSetter("ongotpointercapture", function ongotpointercapture() {
                rsvm.set(this, "ongotpointercapture", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onlostpointercapture: {
            get: rsvm.RsCreateGetter("onlostpointercapture", function onlostpointercapture() {
                return rsvm.get(this, "onlostpointercapture");
            }), set: rsvm.RsCreateSetter("onlostpointercapture", function onlostpointercapture() {
                rsvm.set(this, "onlostpointercapture", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerdown: {
            get: rsvm.RsCreateGetter("onpointerdown", function onpointerdown() {
                return rsvm.get(this, "onpointerdown");
            }), set: rsvm.RsCreateSetter("onpointerdown", function onpointerdown() {
                rsvm.set(this, "onpointerdown", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointermove: {
            get: rsvm.RsCreateGetter("onpointermove", function onpointermove() {
                return rsvm.get(this, "onpointermove");
            }), set: rsvm.RsCreateSetter("onpointermove", function onpointermove() {
                rsvm.set(this, "onpointermove", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerrawupdate: {
            get: rsvm.RsCreateGetter("onpointerrawupdate", function onpointerrawupdate() {
                return rsvm.get(this, "onpointerrawupdate");
            }), set: rsvm.RsCreateSetter("onpointerrawupdate", function onpointerrawupdate() {
                rsvm.set(this, "onpointerrawupdate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerup: {
            get: rsvm.RsCreateGetter("onpointerup", function onpointerup() {
                return rsvm.get(this, "onpointerup");
            }), set: rsvm.RsCreateSetter("onpointerup", function onpointerup() {
                rsvm.set(this, "onpointerup", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointercancel: {
            get: rsvm.RsCreateGetter("onpointercancel", function onpointercancel() {
                return rsvm.get(this, "onpointercancel");
            }), set: rsvm.RsCreateSetter("onpointercancel", function onpointercancel() {
                rsvm.set(this, "onpointercancel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerover: {
            get: rsvm.RsCreateGetter("onpointerover", function onpointerover() {
                return rsvm.get(this, "onpointerover");
            }), set: rsvm.RsCreateSetter("onpointerover", function onpointerover() {
                rsvm.set(this, "onpointerover", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerout: {
            get: rsvm.RsCreateGetter("onpointerout", function onpointerout() {
                return rsvm.get(this, "onpointerout");
            }), set: rsvm.RsCreateSetter("onpointerout", function onpointerout() {
                rsvm.set(this, "onpointerout", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerenter: {
            get: rsvm.RsCreateGetter("onpointerenter", function onpointerenter() {
                return rsvm.get(this, "onpointerenter");
            }), set: rsvm.RsCreateSetter("onpointerenter", function onpointerenter() {
                rsvm.set(this, "onpointerenter", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpointerleave: {
            get: rsvm.RsCreateGetter("onpointerleave", function onpointerleave() {
                return rsvm.get(this, "onpointerleave");
            }), set: rsvm.RsCreateSetter("onpointerleave", function onpointerleave() {
                rsvm.set(this, "onpointerleave", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onselectstart: {
            get: rsvm.RsCreateGetter("onselectstart", function onselectstart() {
                return rsvm.get(this, "onselectstart");
            }), set: rsvm.RsCreateSetter("onselectstart", function onselectstart() {
                rsvm.set(this, "onselectstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onselectionchange: {
            get: rsvm.RsCreateGetter("onselectionchange", function onselectionchange() {
                return rsvm.get(this, "onselectionchange");
            }), set: rsvm.RsCreateSetter("onselectionchange", function onselectionchange() {
                rsvm.set(this, "onselectionchange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onanimationend: {
            get: rsvm.RsCreateGetter("onanimationend", function onanimationend() {
                return rsvm.get(this, "onanimationend");
            }), set: rsvm.RsCreateSetter("onanimationend", function onanimationend() {
                rsvm.set(this, "onanimationend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onanimationiteration: {
            get: rsvm.RsCreateGetter("onanimationiteration", function onanimationiteration() {
                return rsvm.get(this, "onanimationiteration");
            }), set: rsvm.RsCreateSetter("onanimationiteration", function onanimationiteration() {
                rsvm.set(this, "onanimationiteration", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onanimationstart: {
            get: rsvm.RsCreateGetter("onanimationstart", function onanimationstart() {
                return rsvm.get(this, "onanimationstart");
            }), set: rsvm.RsCreateSetter("onanimationstart", function onanimationstart() {
                rsvm.set(this, "onanimationstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontransitionrun: {
            get: rsvm.RsCreateGetter("ontransitionrun", function ontransitionrun() {
                return rsvm.get(this, "ontransitionrun");
            }), set: rsvm.RsCreateSetter("ontransitionrun", function ontransitionrun() {
                rsvm.set(this, "ontransitionrun", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontransitionstart: {
            get: rsvm.RsCreateGetter("ontransitionstart", function ontransitionstart() {
                return rsvm.get(this, "ontransitionstart");
            }), set: rsvm.RsCreateSetter("ontransitionstart", function ontransitionstart() {
                rsvm.set(this, "ontransitionstart", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontransitionend: {
            get: rsvm.RsCreateGetter("ontransitionend", function ontransitionend() {
                return rsvm.get(this, "ontransitionend");
            }), set: rsvm.RsCreateSetter("ontransitionend", function ontransitionend() {
                rsvm.set(this, "ontransitionend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontransitioncancel: {
            get: rsvm.RsCreateGetter("ontransitioncancel", function ontransitioncancel() {
                return rsvm.get(this, "ontransitioncancel");
            }), set: rsvm.RsCreateSetter("ontransitioncancel", function ontransitioncancel() {
                rsvm.set(this, "ontransitioncancel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncopy: {
            get: rsvm.RsCreateGetter("oncopy", function oncopy() {
                return rsvm.get(this, "oncopy");
            }), set: rsvm.RsCreateSetter("oncopy", function oncopy() {
                rsvm.set(this, "oncopy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncut: {
            get: rsvm.RsCreateGetter("oncut", function oncut() {
                return rsvm.get(this, "oncut");
            }), set: rsvm.RsCreateSetter("oncut", function oncut() {
                rsvm.set(this, "oncut", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onpaste: {
            get: rsvm.RsCreateGetter("onpaste", function onpaste() {
                return rsvm.get(this, "onpaste");
            }), set: rsvm.RsCreateSetter("onpaste", function onpaste() {
                rsvm.set(this, "onpaste", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        children: {
            get: rsvm.RsCreateGetter("children", function children() {
                return rsvm.get(this, "children");
            }), set: undefined, enumerable: true, configurable: true,
        },
        firstElementChild: {
            get: rsvm.RsCreateGetter("firstElementChild", function firstElementChild() {
                let children = rsvm.get(this, "children");
                if (children.length > 0) {
                    return children[0];
                }
                return null;
            }), set: undefined, enumerable: true, configurable: true,
        },
        lastElementChild: {
            get: rsvm.RsCreateGetter("lastElementChild", function lastElementChild() {
                let children = rsvm.get(this, "children");
                if (children.length > 0) {
                    return children[children.length - 1];
                }
                return null;
            }), set: undefined, enumerable: true, configurable: true,
        },
        childElementCount: {
            get: rsvm.RsCreateGetter("childElementCount", function childElementCount() {
                return rsvm.get(this, "children").length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        activeElement: {
            get: rsvm.RsCreateGetter("activeElement", function activeElement() {
                return rsvm.get(this, "activeElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        styleSheets: {
            get: rsvm.RsCreateGetter("styleSheets", function styleSheets() {
                return rsvm.get(this, "styleSheets");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pointerLockElement: {
            get: rsvm.RsCreateGetter("pointerLockElement", function pointerLockElement() {
                return rsvm.get(this, "pointerLockElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fullscreenElement: {
            get: rsvm.RsCreateGetter("fullscreenElement", function fullscreenElement() {
                return rsvm.get(this, "fullscreenElement");
            }), set: rsvm.RsCreateSetter("fullscreenElement", function fullscreenElement() {
                rsvm.set(this, "fullscreenElement", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        adoptedStyleSheets: {
            get: rsvm.RsCreateGetter("adoptedStyleSheets", function adoptedStyleSheets() {
                return rsvm.get(this, "adoptedStyleSheets");
            }), set: rsvm.RsCreateSetter("adoptedStyleSheets", function adoptedStyleSheets() {
                rsvm.set(this, "adoptedStyleSheets", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        pictureInPictureElement: {
            get: rsvm.RsCreateGetter("pictureInPictureElement", function pictureInPictureElement() {
                return rsvm.get(this, "pictureInPictureElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fonts: {
            get: rsvm.RsCreateGetter("fonts", function fonts() {
                return rsvm.get(this, "fonts");
            }), set: undefined, enumerable: true, configurable: true,
        },
        adoptNode: {
            value: rsvm.RsCreateAction("adoptNode", 1, function adoptNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        append: {
            value: rsvm.RsCreateAction("append", 0, function append() {
            }), writable: true, enumerable: true, configurable: true,
        },
        captureEvents: {
            value: rsvm.RsCreateAction("captureEvents", 0, function captureEvents() {
            }), writable: true, enumerable: true, configurable: true,
        },
        caretRangeFromPoint: {
            value: rsvm.RsCreateAction("caretRangeFromPoint", 0, function caretRangeFromPoint() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clear: {
            value: rsvm.RsCreateAction("clear", 0, function clear() {
            }), writable: true, enumerable: true, configurable: true,
        },
        close: {
            value: rsvm.RsCreateAction("close", 0, function close() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createAttribute: {
            value: rsvm.RsCreateAction("createAttribute", 1, function createAttribute() {
                return rsvm.prototype.Attr.new(arguments[0], "", this);
            }), writable: true, enumerable: true, configurable: true,
        },
        createAttributeNS: {
            value: rsvm.RsCreateAction("createAttributeNS", 2, function createAttributeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createCDATASection: {
            value: rsvm.RsCreateAction("createCDATASection", 1, function createCDATASection() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createComment: {
            value: rsvm.RsCreateAction("createComment", 1, function createComment() {
                return rsvm.prototype.Comment.new(arguments[0], this);
            }), writable: true, enumerable: true, configurable: true,
        },
        createDocumentFragment: {
            value: rsvm.RsCreateAction("createDocumentFragment", 0, function createDocumentFragment() {
                return rsvm.prototype.DocumentFragment.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createElement: {
            value: rsvm.RsCreateAction("createElement", 1, function createElement() {
                return rsvm.createElement(arguments[0].toLocaleLowerCase(), this);
            }), writable: true, enumerable: true, configurable: true,
        },
        createElementNS: {
            value: rsvm.RsCreateAction("createElementNS", 2, function createElementNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createEvent: {
            value: rsvm.RsCreateAction("createEvent", 1, function createEvent() {
                if (!['Event', 'UIEvent', 'TouchEvent', 'MouseEvent', 'PointerEvent', 'MessageEvent', 'DeviceOrientationEvent', 'DeviceMotionEvent'].includes(arguments[0])) {
                    throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${arguments[0]}') is invalid.`, 'DOMException');
                }
                return rsvm.prototype[arguments[0]].new("");
            }), writable: true, enumerable: true, configurable: true,
        },
        createExpression: {
            value: rsvm.RsCreateAction("createExpression", 1, function createExpression() {
                return rsvm.prototype.XPathExpression.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createNSResolver: {
            value: rsvm.RsCreateAction("createNSResolver", 1, function createNSResolver() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createNodeIterator: {
            value: rsvm.RsCreateAction("createNodeIterator", 1, function createNodeIterator() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createProcessingInstruction: {
            value: rsvm.RsCreateAction("createProcessingInstruction", 2, function createProcessingInstruction() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createRange: {
            value: rsvm.RsCreateAction("createRange", 0, function createRange() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createTextNode: {
            value: rsvm.RsCreateAction("createTextNode", 1, function createTextNode() {
                let textNode = rsvm.prototype.Text.new(arguments[0]);  // 文本节点
                rsvm.set(textNode, "ownerDocument", this);
                rsvm.set(textNode, "parentNode", null);
                return textNode;
            }), writable: true, enumerable: true, configurable: true,
        },
        createTreeWalker: {
            value: rsvm.RsCreateAction("createTreeWalker", 1, function createTreeWalker() {
            }), writable: true, enumerable: true, configurable: true,
        },
        elementFromPoint: {
            value: rsvm.RsCreateAction("elementFromPoint", 2, function elementFromPoint() {
            }), writable: true, enumerable: true, configurable: true,
        },
        elementsFromPoint: {
            value: rsvm.RsCreateAction("elementsFromPoint", 2, function elementsFromPoint() {
            }), writable: true, enumerable: true, configurable: true,
        },
        evaluate: {
            value: rsvm.RsCreateAction("evaluate", 2, function evaluate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        execCommand: {
            value: rsvm.RsCreateAction("execCommand", 1, function execCommand() {
            }), writable: true, enumerable: true, configurable: true,
        },
        exitFullscreen: {
            value: rsvm.RsCreateAction("exitFullscreen", 0, function exitFullscreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        exitPictureInPicture: {
            value: rsvm.RsCreateAction("exitPictureInPicture", 0, function exitPictureInPicture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        exitPointerLock: {
            value: rsvm.RsCreateAction("exitPointerLock", 0, function exitPointerLock() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementById: {
            value: rsvm.RsCreateAction("getElementById", 1, function getElementById() {
                let id = arguments[0], value = null;
                if (id === "") { return null; }
                function travel(nodeArray) {
                    for (const node of nodeArray) {
                        if (value) { break; }
                        if (rsvm.get(node, 'nodeType') === 1) {
                            if (id == node.id) { value = node; break; }
                            travel(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                        }
                    }
                }
                travel(rsvm.RsGetPrivateProperty(this, "nodeArray"));
                return value;
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementsByClassName: {
            value: rsvm.RsCreateAction("getElementsByClassName", 1, function getElementsByClassName() {
                let targetObj = this, keyword = arguments[0].toLocaleLowerCase();
                if (!rsvm.RsGetPrivateProperty(targetObj, "getElementsByClassName")) {
                    rsvm.RsSetPrivateProperty(targetObj, "getElementsByClassName", {});
                }
                let memory = rsvm.RsGetPrivateProperty(targetObj, "getElementsByClassName");
                if (!Object.hasOwn(memory, 'getElementsByClassName')) {
                    memory['getElementsByClassName'] = {};
                }
                memory = memory['getElementsByClassName'];
                if (!Object.hasOwn(memory, keyword)) {
                    let obj = rsvm.RsCreateInterceptor({
                        getter(target, property) {
                            let keywordAry = keyword.split(' '), index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        let word = node.className.split(' ');
                                        if (keywordAry.every(item => word.includes(item))) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (rsvm.log) {
                                rsvm.log = false;
                                let msg = { '调用者': `HTMLCollection -> "${keyword}"`, '属性': property, '返回值': targetObj[property] };
                                rsvm.$log.call(console, msg);
                                rsvm.log = true;
                            }
                            if (value) {
                                return { value: value, intercept: true };
                            } else {
                                return { intercept: false };
                            }
                        },
                        query(target, property) {
                            let keywordAry = keyword.split(' '), index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        let word = node.className.split(' ');
                                        if (keywordAry.every(item => word.includes(item))) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (value) {
                                if (typeof (property) == "number") {
                                    return {
                                        value: { value: value, writable: false, enumerable: true, configurable: true },
                                        intercept: true,
                                    };
                                } else if (typeof (property) == "string") {
                                    return {
                                        value: { value: value, writable: false, enumerable: false, configurable: true },
                                        intercept: true,
                                    };
                                }
                            } else {
                                return { intercept: false };
                            }
                        },
                        descriptor(target, property) {
                            let keywordAry = keyword.split(' '), index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        let word = node.className.split(' ');
                                        if (keywordAry.every(item => word.includes(item))) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (value) {
                                if (typeof (property) == "number") {
                                    return {
                                        value: { value: value, writable: false, enumerable: true, configurable: true },
                                        intercept: true,
                                    };
                                } else if (typeof (property) == "string") {
                                    return {
                                        value: { value: value, writable: false, enumerable: false, configurable: true },
                                        intercept: true,
                                    };
                                }
                            } else {
                                return { intercept: false };
                            }
                        },
                        enumerator(target) {
                            let nameAry = [], indexAry = [];
                            let keywordAry = keyword.split(' ');
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        let word = node.className.split(' ');
                                        if (keywordAry.every(item => word.includes(item))) {
                                            let id = rsvm.get(node, "id");
                                            if (id) { nameAry.push(id); }
                                            indexAry.push(indexAry.length);
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            return {
                                value: [...nameAry, ...indexAry],
                                intercept: true,
                            };
                        },
                    });
                    Object.setPrototypeOf(obj, HTMLCollection.prototype);
                    rsvm.RsSetPrivateProperty(obj, "__memory__", {});
                    memory[keyword] = obj;
                }
                return memory[keyword];
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementsByName: {
            value: rsvm.RsCreateAction("getElementsByName", 1, function getElementsByName() {
                let targetObj = this, keyword = arguments[0].toLocaleLowerCase();
                if (!rsvm.RsGetPrivateProperty(targetObj, "getElementsByName")) {
                    rsvm.RsSetPrivateProperty(targetObj, "getElementsByName", {});
                }
                let memory = rsvm.RsGetPrivateProperty(targetObj, "getElementsByName");
                if (!Object.hasOwn(memory, 'getElementsByName')) {
                    memory['getElementsByName'] = {};
                }
                memory = memory['getElementsByName'];
                if (!Object.hasOwn(memory, keyword)) {
                    let obj = rsvm.RsCreateInterceptor({
                        getter(target, property) {
                            let index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.name.toLocaleLowerCase() === keyword) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (rsvm.log) {
                                rsvm.log = false;
                                let msg = { '调用者': `HTMLCollection -> "${keyword}"`, '属性': property, '返回值': target[property] };
                                rsvm.$log.call(console, msg);
                                rsvm.log = true;
                            }
                            if (value) {
                                return { value: value, intercept: true };
                            } else {
                                return { intercept: false };
                            }
                        },
                        query(target, property) {
                            let index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.name.toLocaleLowerCase() === keyword) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (value) {
                                if (typeof (property) == "number") {
                                    return {
                                        value: { value: value, writable: false, enumerable: true, configurable: true },
                                        intercept: true,
                                    };
                                } else if (typeof (property) == "string") {
                                    return {
                                        value: { value: value, writable: false, enumerable: false, configurable: true },
                                        intercept: true,
                                    };
                                }
                            } else {
                                return { intercept: false };
                            }
                        },
                        descriptor(target, property) {
                            let index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.name.toLocaleLowerCase() === keyword) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (value) {
                                if (typeof (property) == "number") {
                                    return {
                                        value: { value: value, writable: false, enumerable: true, configurable: true },
                                        intercept: true,
                                    };
                                } else if (typeof (property) == "string") {
                                    return {
                                        value: { value: value, writable: false, enumerable: false, configurable: true },
                                        intercept: true,
                                    };
                                }
                            } else {
                                return { intercept: false };
                            }
                        },
                        enumerator(target) {
                            let nameAry = [], indexAry = [];
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.name.toLocaleLowerCase() === keyword) {
                                            let id = rsvm.get(node, "id");
                                            if (id) { nameAry.push(id); }
                                            indexAry.push(indexAry.length);
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            return {
                                value: [...nameAry, ...indexAry],
                                intercept: true,
                            };
                        },
                    });
                    Object.setPrototypeOf(obj, NodeList.prototype);
                    rsvm.RsSetPrivateProperty(obj, "__memory__", {});
                    memory[keyword] = obj;
                }
                return memory[keyword];
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementsByTagName: {
            value: rsvm.RsCreateAction("getElementsByTagName", 1, function getElementsByTagName() {
                let targetObj = this, keyword = arguments[0].toLocaleLowerCase();
                if (!rsvm.RsGetPrivateProperty(targetObj, "getElementsByTagName")) {
                    rsvm.RsSetPrivateProperty(targetObj, "getElementsByTagName", {});
                }
                let memory = rsvm.RsGetPrivateProperty(targetObj, "getElementsByTagName");
                if (!Object.hasOwn(memory, 'getElementsByTagName')) {
                    memory['getElementsByTagName'] = {};
                }
                memory = memory['getElementsByTagName'];
                if (!Object.hasOwn(memory, keyword)) {
                    let obj = rsvm.RsCreateInterceptor({
                        getter(target, property) {
                            let index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.localName.toLocaleLowerCase() === keyword) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (rsvm.log) {
                                rsvm.log = false;
                                let msg = { '调用者': `HTMLCollection -> "${keyword}"`, '属性': property, '返回值': target[property] };
                                rsvm.$log.call(console, msg);
                                rsvm.log = true;
                            }
                            if (value) {
                                return { value: value, intercept: true };
                            } else {
                                return { intercept: false };
                            }
                        },
                        query(target, property) {
                            let index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.localName.toLocaleLowerCase() === keyword) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; }
                                                index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (value) {
                                if (typeof (property) == "number") {
                                    return {
                                        value: { value: value, writable: false, enumerable: true, configurable: true },
                                        intercept: true,
                                    };
                                } else if (typeof (property) == "string") {
                                    return {
                                        value: { value: value, writable: false, enumerable: false, configurable: true },
                                        intercept: true,
                                    };
                                }
                            } else {
                                return { intercept: false };
                            }
                        },
                        descriptor(target, property) {
                            let index = 0, value = undefined;
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (value) { break; }
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.localName.toLocaleLowerCase() === keyword) {
                                            if (typeof (property) == "number") {
                                                if (index == property) { value = node; break; } index += 1;
                                            } else if (typeof (property) == "string") {
                                                if (rsvm.get(node, "id") == property) { value = node; break; }
                                            }
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            if (value) {
                                if (typeof (property) == "number") {
                                    return {
                                        value: { value: value, writable: false, enumerable: true, configurable: true },
                                        intercept: true,
                                    };
                                } else if (typeof (property) == "string") {
                                    return {
                                        value: { value: value, writable: false, enumerable: false, configurable: true },
                                        intercept: true,
                                    };
                                }
                            } else {
                                return { intercept: false };
                            }
                        },
                        enumerator(target) {
                            let nameAry = [], indexAry = [];
                            function find(nodeArray) {
                                for (const node of nodeArray) {
                                    if (rsvm.get(node, 'nodeType') === 1) {
                                        if (node.localName.toLocaleLowerCase() === keyword) {
                                            let id = rsvm.get(node, "id");
                                            if (id) { nameAry.push(id); }
                                            indexAry.push(indexAry.length);
                                        }
                                        find(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                                    }
                                }
                            }
                            rsvm.prevent();
                            find(rsvm.RsGetPrivateProperty(targetObj, "nodeArray"));
                            rsvm.recover();
                            return {
                                value: [...nameAry, ...indexAry],
                                intercept: true,
                            };
                        },
                    });
                    rsvm.RsSetPrivateProperty(obj, "__memory__", rsvm.RsGetPrivateProperty(this, "nodeArray"));
                    Object.setPrototypeOf(obj, HTMLCollection.prototype);
                    memory[keyword] = obj;
                }
                return memory[keyword];
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementsByTagNameNS: {
            value: rsvm.RsCreateAction("getElementsByTagNameNS", 2, function getElementsByTagNameNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSelection: {
            value: rsvm.RsCreateAction("getSelection", 0, function getSelection() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasFocus: {
            value: rsvm.RsCreateAction("hasFocus", 0, function hasFocus() {
                switch (rsvm.siteInfo.version) {
                    case "227":
                        return false;
                }
                return false;
            }), writable: true, enumerable: true, configurable: true,
        },
        importNode: {
            value: rsvm.RsCreateAction("importNode", 1, function importNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        open: {
            value: rsvm.RsCreateAction("open", 0, function open() {
                return new Document();
            }), writable: true, enumerable: true, configurable: true,
        },
        prepend: {
            value: rsvm.RsCreateAction("prepend", 0, function prepend() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryCommandEnabled: {
            value: rsvm.RsCreateAction("queryCommandEnabled", 1, function queryCommandEnabled() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryCommandIndeterm: {
            value: rsvm.RsCreateAction("queryCommandIndeterm", 1, function queryCommandIndeterm() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryCommandState: {
            value: rsvm.RsCreateAction("queryCommandState", 1, function queryCommandState() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryCommandSupported: {
            value: rsvm.RsCreateAction("queryCommandSupported", 1, function queryCommandSupported() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryCommandValue: {
            value: rsvm.RsCreateAction("queryCommandValue", 1, function queryCommandValue() {
            }), writable: true, enumerable: true, configurable: true,
        },
        querySelector: {
            value: rsvm.RsCreateAction("querySelector", 1, function querySelector() {
                // if (typeof arguments[0] != "string"){ return; }
                // let value = undefined;
                // function travel(nodeArray, items) {
                //     for (const node of nodeArray) {
                //         if (value) { return; }
                //         if (rsvm.get(node, 'nodeType') === 1) {
                //             if (value) { return; }
                //             let flag = true;
                //             for (const item of items){
                //                 if (item.type == "WildcardTag"){ continue; }
                //                 else if (item.type == "TagName" && node.localName != item.name){
                //                     flag = false;
                //                 }else if (item.type == "Attribute"){
                //                     if (item.operator == "=" && item.value.value != node.attributes[item.name]){
                //                         flag = false;
                //                     }
                //                 }
                //             }
                //             if (flag){ value = node; }
                //             travel(rsvm.RsGetPrivateProperty(node, "nodeArray"), items);
                //         }
                //     }
                // }

                // let parse = rsvm.selectorParser(arguments[0]);
                // for (const rule of parse.rules){
                //     let items = rule.items;
                //     travel(rsvm.RsGetPrivateProperty(this, "nodeArray"), items);
                //     if (value){ return value; }
                // }
                if (arguments[0] == 'html') {
                    return this.firstElementChild;
                } else if (arguments[0] == 'head') {
                    return this.head;
                } else if (arguments[0] == 'body') {
                    return this.body;
                }
                return null;
            }), writable: true, enumerable: true, configurable: true,
        },
        querySelectorAll: {
            value: rsvm.RsCreateAction("querySelectorAll", 1, function querySelectorAll() {
            }), writable: true, enumerable: true, configurable: true,
        },
        releaseEvents: {
            value: rsvm.RsCreateAction("releaseEvents", 0, function releaseEvents() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceChildren: {
            value: rsvm.RsCreateAction("replaceChildren", 0, function replaceChildren() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitCancelFullScreen: {
            value: rsvm.RsCreateAction("webkitCancelFullScreen", 0, function webkitCancelFullScreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitExitFullscreen: {
            value: rsvm.RsCreateAction("webkitExitFullscreen", 0, function webkitExitFullscreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        write: {
            value: rsvm.RsCreateAction("write", 0, function write() {
            }), writable: true, enumerable: true, configurable: true,
        },
        writeln: {
            value: rsvm.RsCreateAction("writeln", 0, function writeln() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Document },
        fragmentDirective: {
            get: rsvm.RsCreateGetter("fragmentDirective", function fragmentDirective() {
                return rsvm.get(this, "fragmentDirective");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onbeforematch: {
            get: rsvm.RsCreateGetter("onbeforematch", function onbeforematch() {
                return rsvm.get(this, "onbeforematch");
            }), set: rsvm.RsCreateSetter("onbeforematch", function onbeforematch() {
                rsvm.set(this, "onbeforematch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        browsingTopics: {
            value: rsvm.RsCreateAction("browsingTopics", 0, function browsingTopics() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasPrivateToken: {
            value: rsvm.RsCreateAction("hasPrivateToken", 1, function hasPrivateToken() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasRedemptionRecord: {
            value: rsvm.RsCreateAction("hasRedemptionRecord", 1, function hasRedemptionRecord() {
            }), writable: true, enumerable: true, configurable: true,
        },
        timeline: {
            get: rsvm.RsCreateGetter("timeline", function timeline() {
                return rsvm.get(this, "timeline");
            }), set: undefined, enumerable: true, configurable: true,
        },
        oncontentvisibilityautostatechange: {
            get: rsvm.RsCreateGetter("oncontentvisibilityautostatechange", function oncontentvisibilityautostatechange() {
                return rsvm.get(this, "oncontentvisibilityautostatechange");
            }), set: rsvm.RsCreateSetter("oncontentvisibilityautostatechange", function oncontentvisibilityautostatechange() {
                rsvm.set(this, "oncontentvisibilityautostatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onscrollend: {
            get: rsvm.RsCreateGetter("onscrollend", function onscrollend() {
                return rsvm.get(this, "onscrollend");
            }), set: rsvm.RsCreateSetter("onscrollend", function onscrollend() {
                rsvm.set(this, "onscrollend", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getAnimations: {
            value: rsvm.RsCreateAction("getAnimations", 0, function getAnimations() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasStorageAccess: {
            value: rsvm.RsCreateAction("hasStorageAccess", 0, function hasStorageAccess() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestStorageAccess: {
            value: rsvm.RsCreateAction("requestStorageAccess", 0, function requestStorageAccess() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestStorageAccessFor: {
            value: rsvm.RsCreateAction("requestStorageAccessFor", 1, function requestStorageAccessFor() {
            }), writable: true, enumerable: true, configurable: true,
        },
        startViewTransition: {
            value: rsvm.RsCreateAction("startViewTransition", 0, function startViewTransition() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Document", writable: false, enumerable: false, configurable: true, },
        [Symbol.unscopables]: { value: { append: true, fullscreen: true, prepend: true, replaceChildren: true, }, writable: false, enumerable: false, configurable: true, },
    });

    Object.setPrototypeOf(Document, Node);
    Object.setPrototypeOf(Document.prototype, Node.prototype);
}();