!function () {
    Object.defineProperty(window, "HTMLElement", {
        value: rsvm.RsCreateConstructor("HTMLElement"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.HTMLElement = {
        memory: {
            title: "",
            lang: "",
            translate: true,
            dir: "",
            hidden: false,
            accessKey: "",
            draggable: false,
            spellcheck: true,
            autocapitalize: "",
            contentEditable: "inherit",
            enterKeyHint: "",
            isContentEditable: false,
            inputMode: "",
            virtualKeyboardPolicy: "",
            offsetParent: null,
            offsetTop: 0,
            offsetLeft: 0,
            offsetWidth: 0,
            offsetHeight: 0,
            popover: null,
            innerText: "",
            outerText: "",
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
            dataset: rsvm.prototype.DOMStringMap.new(),
            nonce: "",
            autofocus: false,
            tabIndex: -1,
            style: rsvm.prototype.CSSStyleDeclaration.new(),
            attributeStyleMap: rsvm.prototype.StylePropertyMap.new(),
            inert: false,
            oncontentvisibilityautostatechange: null,
            onscrollend: null,
            onbeforematch: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("HTMLElement", target);
        },
        new(ownerDocument, tagName) {
            let obj = rsvm.RsCreate(HTMLElement.prototype);
            rsvm.set(obj, "nodeName", tagName.toLocaleUpperCase());
            rsvm.set(obj, "ownerDocument", ownerDocument);
            rsvm.set(obj, "localName", tagName.toLocaleLowerCase());
            rsvm.set(obj, "tagName", tagName.toLocaleUpperCase());
            return obj;
        },
    };

    Object.defineProperties(HTMLElement, {
        prototype: { value: HTMLElement.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(HTMLElement.prototype, {
        title: {
            get: rsvm.RsCreateGetter("title", function title() {
                return rsvm.get(this, "title");
            }), set: rsvm.RsCreateSetter("title", function title() {
                rsvm.set(this, "title", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lang: {
            get: rsvm.RsCreateGetter("lang", function lang() {
                return rsvm.get(this, "lang");
            }), set: rsvm.RsCreateSetter("lang", function lang() {
                rsvm.set(this, "lang", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        translate: {
            get: rsvm.RsCreateGetter("translate", function translate() {
                return rsvm.get(this, "translate");
            }), set: rsvm.RsCreateSetter("translate", function translate() {
                rsvm.set(this, "translate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        dir: {
            get: rsvm.RsCreateGetter("dir", function dir() {
                return rsvm.get(this, "dir");
            }), set: rsvm.RsCreateSetter("dir", function dir() {
                rsvm.set(this, "dir", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        hidden: {
            get: rsvm.RsCreateGetter("hidden", function hidden() {
                if (this.isConnected) {
                    return rsvm.get(this, "hidden");
                }
                return false;
            }), set: rsvm.RsCreateSetter("hidden", function hidden() {
                rsvm.set(this, "hidden", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        accessKey: {
            get: rsvm.RsCreateGetter("accessKey", function accessKey() {
                return rsvm.get(this, "accessKey");
            }), set: rsvm.RsCreateSetter("accessKey", function accessKey() {
                rsvm.set(this, "accessKey", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        draggable: {
            get: rsvm.RsCreateGetter("draggable", function draggable() {
                return rsvm.get(this, "draggable");
            }), set: rsvm.RsCreateSetter("draggable", function draggable() {
                rsvm.set(this, "draggable", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        spellcheck: {
            get: rsvm.RsCreateGetter("spellcheck", function spellcheck() {
                return rsvm.get(this, "spellcheck");
            }), set: rsvm.RsCreateSetter("spellcheck", function spellcheck() {
                rsvm.set(this, "spellcheck", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        autocapitalize: {
            get: rsvm.RsCreateGetter("autocapitalize", function autocapitalize() {
                return rsvm.get(this, "autocapitalize");
            }), set: rsvm.RsCreateSetter("autocapitalize", function autocapitalize() {
                rsvm.set(this, "autocapitalize", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        contentEditable: {
            get: rsvm.RsCreateGetter("contentEditable", function contentEditable() {
                return rsvm.get(this, "contentEditable");
            }), set: rsvm.RsCreateSetter("contentEditable", function contentEditable() {
                rsvm.set(this, "contentEditable", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        enterKeyHint: {
            get: rsvm.RsCreateGetter("enterKeyHint", function enterKeyHint() {
                return rsvm.get(this, "enterKeyHint");
            }), set: rsvm.RsCreateSetter("enterKeyHint", function enterKeyHint() {
                rsvm.set(this, "enterKeyHint", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        isContentEditable: {
            get: rsvm.RsCreateGetter("isContentEditable", function isContentEditable() {
                return rsvm.get(this, "isContentEditable");
            }), set: undefined, enumerable: true, configurable: true,
        },
        inputMode: {
            get: rsvm.RsCreateGetter("inputMode", function inputMode() {
                return rsvm.get(this, "inputMode");
            }), set: rsvm.RsCreateSetter("inputMode", function inputMode() {
                rsvm.set(this, "inputMode", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        virtualKeyboardPolicy: {
            get: rsvm.RsCreateGetter("virtualKeyboardPolicy", function virtualKeyboardPolicy() {
                return rsvm.get(this, "virtualKeyboardPolicy");
            }), set: rsvm.RsCreateSetter("virtualKeyboardPolicy", function virtualKeyboardPolicy() {
                rsvm.set(this, "virtualKeyboardPolicy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        offsetParent: {
            get: rsvm.RsCreateGetter("offsetParent", function offsetParent() {
                return rsvm.get(this, "offsetParent");
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetTop: {
            get: rsvm.RsCreateGetter("offsetTop", function offsetTop() {
                return rsvm.get(this, "offsetTop");
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetLeft: {
            get: rsvm.RsCreateGetter("offsetLeft", function offsetLeft() {
                return rsvm.get(this, "offsetLeft");
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetWidth: {
            get: rsvm.RsCreateGetter("offsetWidth", function offsetWidth() {
                let value = rsvm.get(this, "offsetWidth");
                if (this.isConnected) {
                    switch (rsvm.siteInfo.version) {
                        case "226":
                        case "227":
                            if (this.localName === 'span') {
                                if (this.style['fontSize'] === '72px') {
                                    if (this.style['fontFamily'] === 'monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MT Extra", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 487;
                                    }
                                    if (this.style['fontFamily'] === '"MT Extra", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 487;
                                    }
                                    if (this.style['fontFamily'] === '"MT Extra", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 487;
                                    }
                                    if (this.style['fontFamily'] === 'ZWAdobeF, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'ZWAdobeF, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'ZWAdobeF, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Unicode MS", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Unicode MS", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Unicode MS", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Outlook", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Outlook", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"MS Outlook", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Terminal, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Terminal, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Terminal, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"TRAJAN PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"TRAJAN PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"TRAJAN PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Specialty", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Specialty", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Specialty", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Haettenschweiler, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Haettenschweiler, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Haettenschweiler, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"OCR A Extended", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"OCR A Extended", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"OCR A Extended", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Staccato222 BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Staccato222 BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Staccato222 BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Century Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 719;
                                    }
                                    if (this.style['fontFamily'] === '"Century Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 719;
                                    }
                                    if (this.style['fontFamily'] === '"Century Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 719;
                                    }
                                    if (this.style['fontFamily'] === '"MS Mincho", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Mincho", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"MS Mincho", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft YaHei", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft YaHei", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft YaHei", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Century, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Century, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Century, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Sylfaen, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 653;
                                    }
                                    if (this.style['fontFamily'] === 'Sylfaen, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 653;
                                    }
                                    if (this.style['fontFamily'] === 'Sylfaen, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 653;
                                    }
                                    if (this.style['fontFamily'] === '"Agency FB", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Agency FB", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Agency FB", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti TC", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti TC", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti TC", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Cambria Math", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 658;
                                    }
                                    if (this.style['fontFamily'] === '"Cambria Math", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 658;
                                    }
                                    if (this.style['fontFamily'] === '"Cambria Math", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 658;
                                    }
                                    if (this.style['fontFamily'] === '"MYRIAD PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 651;
                                    }
                                    if (this.style['fontFamily'] === '"MYRIAD PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 651;
                                    }
                                    if (this.style['fontFamily'] === '"MYRIAD PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 651;
                                    }
                                    if (this.style['fontFamily'] === '"Futura Md BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 687;
                                    }
                                    if (this.style['fontFamily'] === '"Futura Md BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 687;
                                    }
                                    if (this.style['fontFamily'] === '"Futura Md BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 687;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti SC", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti SC", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti SC", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SimSun-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SimSun-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SimSun-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Sans Serif", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Sans Serif", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Sans Serif", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Vijaya, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Vijaya, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Vijaya, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 583;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 583;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 583;
                                    }
                                    if (this.style['fontFamily'] === 'Marlett, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 936;
                                    }
                                    if (this.style['fontFamily'] === 'Marlett, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 936;
                                    }
                                    if (this.style['fontFamily'] === 'Marlett, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 936;
                                    }
                                    if (this.style['fontFamily'] === '"Bitstream Vera Sans Mono", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Bitstream Vera Sans Mono", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Bitstream Vera Sans Mono", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Bookman Old Style", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Bookman Old Style", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Bookman Old Style", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Gill Sans", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Gill Sans", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Gill Sans", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'OSAKA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'OSAKA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'OSAKA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Didot, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Didot, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Didot, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Typewriter", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Typewriter", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Typewriter", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'DIN, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'DIN, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'DIN, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Monotype Corsiva", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Monotype Corsiva", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Monotype Corsiva", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"ARNO PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"ARNO PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"ARNO PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'GOTHAM, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'GOTHAM, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'GOTHAM, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SimHei, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SimHei, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SimHei, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Narrow", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 648;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Narrow", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 648;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Narrow", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 648;
                                    }
                                    if (this.style['fontFamily'] === '"Letter Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Letter Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Letter Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft Uighur", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft Uighur", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft Uighur", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Bk BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 710;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Bk BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 710;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Bk BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 710;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft JhengHei", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 723;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft JhengHei", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 723;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft JhengHei", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 723;
                                    }
                                    if (this.style['fontFamily'] === '"MS PMincho", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS PMincho", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"MS PMincho", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SCRIPTINA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SCRIPTINA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'SCRIPTINA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Helvetica Neue", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Helvetica Neue", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Helvetica Neue", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Garamond, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Garamond, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Garamond, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Rockwell, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Rockwell, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Rockwell, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Monaco, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Monaco, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Monaco, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"BankGothic Md BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 653;
                                    }
                                    if (this.style['fontFamily'] === '"BankGothic Md BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 653;
                                    }
                                    if (this.style['fontFamily'] === '"BankGothic Md BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 653;
                                    }
                                    if (this.style['fontFamily'] === '"Minion Pro", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 646;
                                    }
                                    if (this.style['fontFamily'] === '"Minion Pro", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 646;
                                    }
                                    if (this.style['fontFamily'] === '"Minion Pro", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 646;
                                    }
                                    if (this.style['fontFamily'] === 'Clarendon, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Clarendon, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Clarendon, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Futura, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Futura, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Futura, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"BlairMdITC TT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"BlairMdITC TT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"BlairMdITC TT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'INCONSOLATA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'INCONSOLATA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'INCONSOLATA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Small Fonts", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Small Fonts", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Small Fonts", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU_HKSCS-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU_HKSCS-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU_HKSCS-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Calibri, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 625;
                                    }
                                    if (this.style['fontFamily'] === 'Calibri, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 625;
                                    }
                                    if (this.style['fontFamily'] === 'Calibri, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 625;
                                    }
                                    if (this.style['fontFamily'] === '"MS LineDraw", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS LineDraw", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"MS LineDraw", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Segoe UI Symbol", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 672;
                                    }
                                    if (this.style['fontFamily'] === '"Segoe UI Symbol", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 672;
                                    }
                                    if (this.style['fontFamily'] === '"Segoe UI Symbol", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 672;
                                    }
                                    if (this.style['fontFamily'] === 'AVENIR, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'AVENIR, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'AVENIR, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Swis721 BlkEx BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 997;
                                    }
                                    if (this.style['fontFamily'] === '"Swis721 BlkEx BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 997;
                                    }
                                    if (this.style['fontFamily'] === '"Swis721 BlkEx BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 997;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Black", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 792;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Black", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 792;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Black", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 792;
                                    }
                                    if (this.style['fontFamily'] === 'Consolas, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 515;
                                    }
                                    if (this.style['fontFamily'] === 'Consolas, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 515;
                                    }
                                    if (this.style['fontFamily'] === 'Consolas, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 515;
                                    }
                                    if (this.style['fontFamily'] === 'Gabriola, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 487;
                                    }
                                    if (this.style['fontFamily'] === 'Gabriola, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 487;
                                    }
                                    if (this.style['fontFamily'] === 'Gabriola, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 487;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Md BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 671;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Md BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 671;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Md BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 671;
                                    }
                                    if (this.style['fontFamily'] === '"Book Antiqua", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Book Antiqua", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Book Antiqua", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Leelawadee, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Leelawadee, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Leelawadee, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Academy Engraved LET", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Academy Engraved LET", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Academy Engraved LET", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"ADOBE CASLON PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"ADOBE CASLON PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"ADOBE CASLON PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'DFKai-SB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'DFKai-SB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'DFKai-SB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Serifa, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Serifa, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Serifa, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Thonburi, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Thonburi, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Thonburi, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'EUROSTILE, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'EUROSTILE, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'EUROSTILE, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Palatino, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Palatino, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Palatino, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'FangSong, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'FangSong, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'FangSong, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'KaiTi, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'KaiTi, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'KaiTi, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'NSimSun, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'NSimSun, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'NSimSun, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Andale Mono", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Andale Mono", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Andale Mono", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Amazone BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Amazone BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Amazone BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Edwardian Script ITC", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Edwardian Script ITC", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Edwardian Script ITC", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Bradley Hand", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Bradley Hand", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Bradley Hand", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Malgun Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 687;
                                    }
                                    if (this.style['fontFamily'] === '"Malgun Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 687;
                                    }
                                    if (this.style['fontFamily'] === '"Malgun Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 687;
                                    }
                                    if (this.style['fontFamily'] === 'NEVIS, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'NEVIS, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'NEVIS, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'VisualUI, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'VisualUI, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'VisualUI, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Bright", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Bright", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Bright", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Levenim MT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Levenim MT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Levenim MT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"MS UI Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 574;
                                    }
                                    if (this.style['fontFamily'] === '"MS UI Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 574;
                                    }
                                    if (this.style['fontFamily'] === '"MS UI Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 574;
                                    }
                                    if (this.style['fontFamily'] === '"Bodoni MT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Bodoni MT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Bodoni MT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Heather, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Heather, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Heather, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'OPTIMA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'OPTIMA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'OPTIMA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"PRINCETOWN LET", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"PRINCETOWN LET", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"PRINCETOWN LET", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Showcard Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Showcard Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Showcard Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SILKSCREEN, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'SILKSCREEN, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'SILKSCREEN, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Unicode", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 735;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Unicode", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 735;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Unicode", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 735;
                                    }
                                    if (this.style['fontFamily'] === '"Wingdings 2", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === '"Wingdings 2", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === '"Wingdings 2", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Cezanne, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }
                                    if (this.style['fontFamily'] === 'Cezanne, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 732;
                                    }
                                    if (this.style['fontFamily'] === 'Cezanne, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 468;
                                    }

                                }
                            }
                        case "rs6_yaojian":
                            if (this.localName === "span") {
                                if (this.innerHTML === "mmmmmmmmmmmlliii" && this.style.fontSize === "114px") {
                                    switch (this.style.fontFamily) {
                                        case "mmllii":
                                            return 1327;
                                        case "SimHei":
                                            return 912;
                                        case "SimSun":
                                            return 912;
                                        case "NSimSun":
                                            return 912;
                                        case "FangSong":
                                            return 912;
                                        case "KaiTi":
                                            return 912;
                                        case "FangSongGB2312":
                                            return 1327;
                                        case "KaiTiGB2312":
                                            return 1327;
                                        case "Microsoft YaHei":
                                            return 1327;
                                        case "Hiragino Sans GB":
                                            return 1327;
                                        case "STHeiti Light":
                                            return 1327;
                                        case "STHeiti":
                                            return 1327;
                                        case "STKaiti":
                                            return 1327;
                                        case "STSong":
                                            return 1327;
                                        case "STFangsong":
                                            return 1327;
                                        case "LiSu":
                                            return 1327;
                                        case "YouYuan":
                                            return 1327;
                                        case "STXihei":
                                            return 1327;
                                        case "STZhongsong":
                                            return 1327;
                                        case "FZShuTi":
                                            return 1327;
                                        case "FZYaoti":
                                            return 1327;
                                        case "STCaiyun":
                                            return 1327;
                                        case "STHupo":
                                            return 1327;
                                        case "STLiti":
                                            return 1327;
                                        case "STXingkai":
                                            return 1327;
                                        case "STXinwei":
                                            return 1327;
                                        case "DFPhelvetica":
                                            return 1327;
                                        case "Tibetan Machine Uni":
                                            return 1327;
                                        case "Cooljazz":
                                            return 1327;
                                        case "Verdana":
                                            return 1376;
                                        case "Helvetica Neue LT Pro 35 Thin":
                                            return 1376;
                                        case "tahoma":
                                            return 1184;
                                        case "LG Smart_H test Regular":
                                            return 1327;
                                        case "DINPro-light":
                                            return 1327;
                                        case "Helvetica LT 43 Light Extended":
                                            return 1327;
                                        case "HelveM_India":
                                            return 1327;
                                        case "SECRobotoLight Bold":
                                            return 1327;
                                        case "OR Mohanty Unicode Regular":
                                            return 1327;
                                        case "Droid Sans Thai":
                                            return 1327;
                                        case "Kannada Sangam MN":
                                            return 1327;
                                        case "DDC Uchen":
                                            return 1327;
                                        case "clock2016_v1.1":
                                            return 1327;
                                        case "SamsungKannadaRegular":
                                            return 1327;
                                        case "MI LANTING Bold":
                                            return 1327;
                                        case "SamsungSansNum3L Light":
                                            return 1327;
                                        case "verdana":
                                            return 1376;
                                        case "HelveticaNeueThin":
                                            return 1327;
                                        case "SECFallback":
                                            return 1327;
                                        case "SamsungEmoji":
                                            return 1327;
                                        case "Telugu Sangam MN":
                                            return 1327;
                                        case "Carrois Gothic SC":
                                            return 1327;
                                        case "Flyme Light Roboto Light":
                                            return 1327;
                                        case "SoMA-Digit Light":
                                            return 1327;
                                        case "SoMC Sans Regular":
                                            return 1327;
                                        case "HYXiYuanJ":
                                            return 1327;
                                        case "sst":
                                            return 1327;
                                        case "samsung-sans-num4T":
                                            return 1327;
                                        case "gm_mengmeng":
                                            return 1327;
                                        case "Lohit Kannada":
                                            return 1327;
                                        case "times new roman":
                                            return 1134;
                                        case "samsung-sans-num4L":
                                            return 1327;
                                        case "serif-monospace":
                                            return 1327;
                                        case "SamsungSansNum-3T Thin":
                                            return 1327;
                                        case "ColorOSUI-XThin":
                                            return 1327;
                                        case "Droid Naskh Shift Alt":
                                            return 1327;
                                        case "SamsungTeluguRegular":
                                            return 1327;
                                        case "Bengali OTS":
                                            return 1327;
                                        case "MI LanTing_GB Outside YS":
                                            return 1327;
                                        case "FZMiaoWu_GB18030":
                                            return 1327;
                                        case "helve-neue-regular":
                                            return 1327;
                                        case "SST Medium":
                                            return 1327;
                                        case "Courier New":
                                            return 1095;
                                        case "Khmer Mondulkiri Bold":
                                            return 1327;
                                        case "Helvetica LT 23 Ultra Light Extended":
                                            return 1327;
                                        case "Helvetica LT 25 Ultra Light":
                                            return 1327;
                                        case "Roboto Medium":
                                            return 1074;
                                        case "Droid Sans Bold":
                                            return 1327;
                                        case "goudy":
                                            return 1327;
                                        case "sans-serif-condensed-light":
                                            return 1327;
                                        case "SFinder":
                                            return 1327;
                                        case "noto-sans-cjk-medium":
                                            return 1327;
                                        case "miui":
                                            return 1327;
                                        case "MRocky PRC Bold":
                                            return 1327;
                                        case "AndroidClock Regular":
                                            return 1327;
                                        case "SamsungSansNum-4L Light":
                                            return 1327;
                                        case "sans-serif-thin":
                                            return 1327;
                                        case "AaPangYaer":
                                            return 1327;
                                        case "casual":
                                            return 1327;
                                        case "BN MohantyOT Bold":
                                            return 1327;
                                        case "x-sst":
                                            return 1327;
                                        case "NotoSansMyanmarZawgyi":
                                            return 1327;
                                        case "Helvetica LT 33 Thin Extended":
                                            return 1327;
                                        case "AshleyScriptMT Alt":
                                            return 1327;
                                        case "Noto Sans Devanagari UI":
                                            return 1327;
                                        case "Roboto Condensed Bold":
                                            return 1327;
                                        case "Roboto Medium Italic":
                                            return 1327;
                                        case "miuiex":
                                            return 1327;
                                        case "Noto Sans Gurmukhi UI":
                                            return 1327;
                                        case "SST Vietnamese Light":
                                            return 1327;
                                        case "LG_Oriya":
                                            return 1327;
                                        case "hycoffee":
                                            return 1327;
                                        case "x-sst-ultralight":
                                            return 1327;
                                        case "DFHeiAW7-A":
                                            return 1327;
                                        case "FZZWXBTOT_Unicode":
                                            return 1327;
                                        case "Devanagari Sangam MN Bold":
                                            return 1327;
                                        case "sans-serif-monospace":
                                            return 1327;
                                        case "Padauk Book Bold":
                                            return 1327;
                                        case "LG-FZYingBiKaiShu-S15-V2.2":
                                            return 1327;
                                        case "LG-FZYingBiKaiShu-S15-V2.3":
                                            return 1327;
                                        case "HelveticaNeueLT Pro 35 Th":
                                            return 1327;
                                        case "Microsoft Himalaya":
                                            return 759;
                                        case "SamsungSansFallback":
                                            return 1327;
                                        case "SST Medium Italic":
                                            return 1327;
                                        case "AndroidEmoji":
                                            return 1327;
                                        case "SamsungSansNum-3R":
                                            return 1327;
                                        case "ITC Stone Serif":
                                            return 1327;
                                        case "sans-serif-smallcaps":
                                            return 1327;
                                        case "x-sst-medium":
                                            return 1327;
                                        case "LG_Sinhalese":
                                            return 1327;
                                        case "Roboto Thin Italic":
                                            return 1327;
                                        case "century-gothic":
                                            return 1327;
                                        case "Clockopia":
                                            return 1327;
                                        case "Luminous_Sans":
                                            return 1327;
                                        case "Floridian Script Alt":
                                            return 1327;
                                        case "Noto Sans Gurmukhi Bold":
                                            return 1327;
                                        case "LTHYSZK Bold":
                                            return 1327;
                                        case "GS_Thai":
                                            return 1327;
                                        case "SamsungNeoNum_3T_2":
                                            return 1327;
                                        case "Arabic":
                                            return 1327;
                                        case "hans-sans-normal":
                                            return 1327;
                                        case "Lohit Telugu":
                                            return 1327;
                                        case "HYQiHei-50S Light":
                                            return 1327;
                                        case "Lindsey for Samsung":
                                            return 1327;
                                        case "AR Crystalhei DB":
                                            return 1327;
                                        case "Samsung Sans Medium":
                                            return 1327;
                                        case "samsung-sans-num45":
                                            return 1327;
                                        case "hans-sans-bold":
                                            return 1327;
                                        case "Luminous_Script":
                                            return 1327;
                                        case "SST Condensed":
                                            return 1327;
                                        case "SamsungDevanagariRegular":
                                            return 1327;
                                        case "Anjal Malayalam MN":
                                            return 1327;
                                        case "SamsungThai(test)":
                                            return 1327;
                                        case "FZLanTingHei-M-GB18030":
                                            return 1327;
                                        case "Hebrew OTS":
                                            return 1327;
                                        case "GS45_Arab(AndroidOS)":
                                            return 1327;
                                        case "Samsung Sans Light":
                                            return 1327;
                                        case "Choco cooky":
                                            return 1327;
                                        case "helve-neue-thin":
                                            return 1327;
                                        case "PN MohantyOT Medium":
                                            return 1327;
                                        case "LG-FZKaTong-M19-V2.4":
                                            return 1327;
                                        case "Droid Serif":
                                            return 1327;
                                        case "SamsungSinhalaRegular":
                                            return 1327;
                                        case "helvetica":
                                            return 1171;
                                        case "LG-FZKaTong-M19-V2.2":
                                            return 1171;
                                        case "Noto Sans Devanagari UI Bold":
                                            return 1327;
                                        case "SST Light":
                                            return 1327;
                                        case "DFPEmoji":
                                            return 1327;
                                        case "weatherfontnew Regular":
                                            return 1327;
                                        case "RobotoNum3R":
                                            return 1327;
                                        case "DINPro-medium":
                                            return 1327;
                                        case "Samsung Sans Num55":
                                            return 1327;
                                        case "SST Heavy Italic":
                                            return 1327;
                                        case "LGlock4 Regular_0805":
                                            return 1327;
                                        case "Georgia":
                                            return 1270;
                                        case "noto-sans-cjk":
                                            return 1327;
                                        case "Telugu Sangam MN Bold":
                                            return 1327;
                                        case "MIUI EX Normal":
                                            return 1327;
                                        case "HYQiHei-75S Bold":
                                            return 1327;
                                        case "NotoSansMyanmarZawgyi Bold":
                                            return 1327;
                                        case "yunospro-black":
                                            return 1327;
                                        case "helve-neue-normal":
                                            return 1327;
                                        case "Luminous_Serif":
                                            return 1327;
                                        case "TM MohantyOT Normal":
                                            return 1327;
                                        case "SamsungSansNum-3Lv Light":
                                            return 1327;
                                        case "Samsung Sans Num45":
                                            return 1327;
                                        case "SmartGothic Medium":
                                            return 1327;
                                        case "georgia":
                                            return 1270;
                                        case "casual-font-type":
                                            return 1327;
                                        case "Samsung Sans Bold":
                                            return 1327;
                                        case "small-capitals":
                                            return 1327;
                                        case "MFinance PRC Bold":
                                            return 1327;
                                        case "FZLanTingHei_GB18030":
                                            return 1327;
                                        case "SamsungArmenian":
                                            return 1327;
                                        case "Roboto Bold":
                                            return 1327;
                                        case "century-gothic-bold":
                                            return 1327;
                                        case "x-sst-heavy":
                                            return 1327;
                                        case "SST Light Italic":
                                            return 1327;
                                        case "TharLon":
                                            return 1327;
                                        case "x-sst-light":
                                            return 1327;
                                        case "Dinbol Regular":
                                            return 1327;
                                        case "SamsungBengaliRegular":
                                            return 1327;
                                        case "KN MohantyOTSmall Medium":
                                            return 1327;
                                        case "hypure":
                                            return 1327;
                                        case "SamsungTamilRegular":
                                            return 1327;
                                        case "Malayalam Sangam MN":
                                            return 1327;
                                        case "Noto Sans Kannada UI":
                                            return 1327;
                                        case "helve-neue":
                                            return 1327;
                                        case "Helvetica LT 55 Roman":
                                            return 1327;
                                        case "Noto Sans Kannada Bold":
                                            return 1327;
                                        case "Sanpya":
                                            return 1327;
                                        case "SamsungPunjabiRegular":
                                            return 1327;
                                        case "samsung-sans-num4Lv":
                                            return 1327;
                                        case "LG_Kannada":
                                            return 1327;
                                        case "Samsung Sans Regular":
                                            return 1327;
                                        case "Zawgyi-One":
                                            return 1327;
                                        case "Droid Serif Bold Italic":
                                            return 1327;
                                        case "FZKATJW":
                                            return 1327;
                                        case "courier new":
                                            return 1095;
                                        case "SamsungEmojiRegular":
                                            return 1327;
                                        case "MIUI EX Bold":
                                            return 1327;
                                        case "Android Emoji":
                                            return 1327;
                                        case "Noto Naskh Arabic UI":
                                            return 1327;
                                        case "LCD Com":
                                            return 1327;
                                        case "Futura Medium BT":
                                            return 1327;
                                        case "Vivo-extract":
                                            return 1327;
                                        case "Bangla Sangam MN Bold":
                                            return 1327;
                                        case "hans-sans-regular":
                                            return 1327;
                                        case "SNum-3R":
                                            return 1327;
                                        case "SNum-3T":
                                            return 1327;
                                        case "hans-sans":
                                            return 1327;
                                        case "SST Ultra Light":
                                            return 1327;
                                        case "Roboto Regular":
                                            return 1074;
                                        case "Roboto Light":
                                            return 1074;
                                        case "Hanuman":
                                            return 1327;
                                        case "newlggothic":
                                            return 1327;
                                        case "DFHeiAW5-A":
                                            return 1327;
                                        case "hans-sans-light":
                                            return 1327;
                                        case "Plate Gothic":
                                            return 1327;
                                        case "SNum-3L":
                                            return 1327;
                                        case "Helvetica LT 45 Light":
                                            return 1327;
                                        case "Myanmar Sangam Zawgyi Bold":
                                            return 1327;
                                        case "lg-sans-serif-light":
                                            return 1327;
                                        case "MIUI EX Light":
                                            return 1327;
                                        case "Roboto Thin":
                                            return 1074;
                                        case "SoMA Bold":
                                            return 1327;
                                        case "Padauk":
                                            return 1327;
                                        case "Samsung Sans":
                                            return 1327;
                                        case "Spacious_SmallCap":
                                            return 1327;
                                        case "sans-serif":
                                            return 1327;
                                        case "DV MohantyOT Medium":
                                            return 1327;
                                        case "Stable_Slap":
                                            return 1327;
                                        case "monaco":
                                            return 1327;
                                        case "Flyme-Light":
                                            return 1327;
                                        case "fzzys-dospy":
                                            return 1327;
                                        case "ScreenSans":
                                            return 1327;
                                        case "clock2016":
                                            return 1327;
                                        case "Roboto Condensed Bold Italic":
                                            return 1327;
                                        case "Arial":
                                            return 1171;
                                        case "KN Mohanty Medium":
                                            return 1327;
                                        case "MotoyaLMaru W3 mono":
                                            return 1327;
                                        case "Handset Condensed":
                                            return 1327;
                                        case "Roboto Italic":
                                            return 1327;
                                        case "HTC Hand":
                                            return 1327;
                                        case "SST Ultra Light Italic":
                                            return 1327;
                                        case "SST Vietnamese Roman":
                                            return 1327;
                                        case "Noto Naskh Arabic UI Bold":
                                            return 1327;
                                        case "chnfzxh-medium":
                                            return 1327;
                                        case "SNumCond-3T":
                                            return 1327;
                                        case "century-gothic-regular":
                                            return 1327;
                                        case "default_roboto-light":
                                            return 1327;
                                        case "Noto Sans Myanmar":
                                            return 1327;
                                        case "Myanmar Sangam MN":
                                            return 1327;
                                        case "Apple Color Emoji":
                                            return 1327;
                                        case "weatherfontReg":
                                            return 1327;
                                        case "SamsungMalayalamRegular":
                                            return 1327;
                                        case "arial":
                                            return 1171;
                                        case "Droid Serif Bold":
                                            return 1327;
                                        case "CPo3 PRC Bold":
                                            return 1327;
                                        case "MI LANTING":
                                            return 1327;
                                        case "SamsungKorean-Regular":
                                            return 1327;
                                        case "test45 Regular":
                                            return 1327;
                                        case "spirit_time":
                                            return 1327;
                                        case "Devanagari Sangam MN":
                                            return 1327;
                                        case "ScreenSerif":
                                            return 1327;
                                        case "Roboto":
                                            return 1327;
                                        case "cursive-font-type":
                                            return 1327;
                                        case "STHeiti_vivo":
                                            return 1327;
                                        case "chnfzxh":
                                            return 1327;
                                        case "Samsung ClockFont 3A":
                                            return 1327;
                                        case "Roboto Condensed Regular":
                                            return 1327;
                                        case "samsung-neo-num3R":
                                            return 1327;
                                        case "GJ MohantyOT Medium":
                                            return 1327;
                                        case "Chulho Neue Lock":
                                            return 1327;
                                        case "roboto-num3L":
                                            return 1327;
                                        case "helve-neue-ultraLightextended":
                                            return 1327;
                                        case "SamsungOriyaRegular":
                                            return 1327;
                                        case "SamsungSansNum-4Lv Light":
                                            return 1327;
                                        case "MYingHei_18030_C2-Bold":
                                            return 1327;
                                        case "DFPShaoNvW5-GB":
                                            return 1327;
                                        case "Roboto Black":
                                            return 1074;
                                        case "helve-neue-ultralight":
                                            return 1327;
                                        case "gm_xihei":
                                            return 1327;
                                        case "LGlock4 Light_0805":
                                            return 1327;
                                        case "Gujarati Sangam MN":
                                            return 1327;
                                        case "Malayalam Sangam MN Bold":
                                            return 1327;
                                        case "roboto-num3R":
                                            return 1327;
                                        case "STXihei_vivo":
                                            return 1327;
                                        case "FZZhunYuan_GB18030":
                                            return 1327;
                                        case "noto-sans-cjk-light":
                                            return 1327;
                                        case "coloros":
                                            return 1327;
                                        case "Noto Sans Gurmukhi":
                                            return 1327;
                                        case "Noto Sans Symbols":
                                            return 1327;
                                        case "Roboto Light Italic":
                                            return 1327;
                                        case "Lohit Tamil":
                                            return 1327;
                                        case "cursive":
                                            return 912;
                                        case "default_roboto":
                                            return 1327;
                                        case "BhashitaComplexSans Bold":
                                            return 1327;
                                        case "LG_Number_Roboto Thin":
                                            return 1327;
                                        case "monospaced-without-serifs":
                                            return 1327;
                                        case "Helvetica LT 35 Thin":
                                            return 1327;
                                        case "samsung-sans-num3LV":
                                            return 1327;
                                        case "DINPro":
                                            return 1327;
                                        case "Jomolhari":
                                            return 1327;
                                        case "sans-serif-light":
                                            return 1327;
                                        case "helve-neue-black":
                                            return 1327;
                                        case "Lohit Bengali":
                                            return 1327;
                                        case "Myanmar Sangam Zawgyi":
                                            return 1327;
                                        case "Droid Serif Italic":
                                            return 1327;
                                        case "Roboto Bold Italic":
                                            return 1327;
                                        case "NanumGothic":
                                            return 1327;
                                        case "Sony Mobile UD Gothic Regular":
                                            return 1327;
                                        case "Georgia Bold Italic":
                                            return 1327;
                                        case "samsung-sans-num3Lv":
                                            return 1327;
                                        case "yunos-thin":
                                            return 1327;
                                        case "samsung-neo-num3T-cond":
                                            return 1327;
                                        case "Noto Sans Myanmar UI Bold":
                                            return 1327;
                                        case "lgserif":
                                            return 1327;
                                        case "FZYouHei-R-GB18030":
                                            return 1327;
                                        case "Lohit Punjabi":
                                            return 1327;
                                        case "baskerville":
                                            return 1327;
                                        case "samsung-sans-num4Tv":
                                            return 1327;
                                        case "samsung-sans-thin":
                                            return 1327;
                                        case "LG Emoji":
                                            return 1327;
                                        case "AnjaliNewLipi":
                                            return 1327;
                                        case "SamsungSansNum-4T Thin":
                                            return 1327;
                                        case "SamsungKorean-Bold":
                                            return 1327;
                                        case "miuiex-light":
                                            return 1327;
                                        case "Noto Sans Kannada":
                                            return 1327;
                                        case "Roboto Normal Italic":
                                            return 1327;
                                        case "Georgia Italic":
                                            return 1327;
                                        case "sans-serif-medium":
                                            return 1327;
                                        case "Smart Zawgyi":
                                            return 1327;
                                        case "Roboto Condensed Italic":
                                            return 1327;
                                        case "Noto Sans Kannada UI Bold":
                                            return 1327;
                                        case "DFP Sc Sans Heue30_103":
                                            return 1327;
                                        case "LG_Number_Roboto Bold":
                                            return 1327;
                                        case "Padauk Book":
                                            return 1327;
                                        case "x-sst-condensed":
                                            return 1327;
                                        case "Sunshine-Uchen":
                                            return 1327;
                                        case "Roboto Black Italic":
                                            return 1327;
                                        case "Ringo Color Emoji":
                                            return 1327;
                                        case "Devanagari OTS":
                                            return 1327;
                                        case "Smart Zawgyi Pro":
                                            return 1327;
                                        case "FZLanTingHei-M-GBK":
                                            return 1327;
                                        case "AndroidClock-Large Regular":
                                            return 1327;
                                        case "proportionally-spaced-without-serifs":
                                            return 1327;
                                        case "Cutive Mono":
                                            return 1327;
                                        case "times":
                                            return 1134;
                                        case "LG Smart_H test Bold":
                                            return 1327;
                                        case "DINPro-Light":
                                            return 1327;
                                        case "sans-serif-black":
                                            return 1327;
                                        case "Lohit Devanagari":
                                            return 1327;
                                        case "proportionally-spaced-with-serifs":
                                            return 1327;
                                        case "samsung-sans-num3L":
                                            return 1327;
                                        case "MYoung PRC Medium":
                                            return 1327;
                                        case "DFGothicPW5-BIG5HK-SONY":
                                            return 1327;
                                        case "hans-sans-medium":
                                            return 1327;
                                        case "SST Heavy":
                                            return 1327;
                                        case "LG-FZZhunYuan-M02-V2.2":
                                            return 1327;
                                        case "MyanmarUNew Regular":
                                            return 1327;
                                        case "Noto Naskh Arabic Bold":
                                            return 1327;
                                        case "SamsungGujarathiRegular":
                                            return 1327;
                                        case "fantasy":
                                            return 1123;
                                        case "helve-neue-light":
                                            return 1327;
                                        case "Helvetica Neue OTS Bold":
                                            return 1327;
                                        case "noto-sans-cjk-bold":
                                            return 1327;
                                        case "samsung-sans-num3R":
                                            return 1327;
                                        case "Lindsey Samsung":
                                            return 1327;
                                        case "samsung-sans-num3T":
                                            return 1327;
                                        case "ScreenSerifMono":
                                            return 1327;
                                        case "ETrump Myanmar_ZW":
                                            return 1327;
                                        case "helve-neue-thinextended":
                                            return 1327;
                                        case "Noto Naskh Arabic":
                                            return 1327;
                                        case "LG_Gujarati":
                                            return 1327;
                                        case "Smart_Monospaced":
                                            return 1327;
                                        case "Tamil Sangam MN":
                                            return 1327;
                                        case "LG Emoji NonAME":
                                            return 1327;
                                        case "Roboto Condensed Light Italic":
                                            return 1327;
                                        case "gm_jingkai":
                                            return 1327;
                                        case "FZLanTingKanHei_GB18030":
                                            return 1327;
                                        case "lgtravel":
                                            return 1327;
                                        case "palatino":
                                            return 1327;
                                        case "Georgia Bold":
                                            return 1327;
                                        case "Droid Sans":
                                            return 1327;
                                        case "LG_Punjabi":
                                            return 1327;
                                        case "SmartGothic Bold":
                                            return 1327;
                                        case "Samsung Sans Thin":
                                            return 1327;
                                        case "SST Condensed Bold":
                                            return 1327;
                                        case "Comics_Narrow":
                                            return 1327;
                                        case "courier":
                                            return 1095;
                                        case "Oriya Sangam MN":
                                            return 1327;
                                        case "helve-neue-lightextended":
                                            return 1327;
                                        case "FZLanTingHei-R-GB18030":
                                            return 1327;
                                        case "AR CrystalheiHKSCS DB":
                                            return 1327;
                                        case "serif":
                                            return 912;
                                        case "RTWSYueRoudGoG0v1-Regular":
                                            return 1327;
                                        case "MiaoWu_prev":
                                            return 1327;
                                        case "FZY1K":
                                            return 1327;
                                        case "LG_Number_Roboto Regular":
                                            return 1327;
                                        case "AndroidClock":
                                            return 1327;
                                        case "SoMA Regular":
                                            return 1327;
                                        case "HYQiHei-40S Lightx":
                                            return 1327;
                                        case "lg-sans-serif":
                                            return 1327;
                                        case "Dancing Script Bold":
                                            return 1327;
                                        case "default":
                                            return 1327;
                                        case "sec-roboto-light":
                                            return 1327;
                                        case "ColorOSUI-Regular":
                                            return 1327;
                                        case "test Regular":
                                            return 1327;
                                        case "Tamil Sangam MN Bold":
                                            return 1327;
                                        case "FZYingBiXingShu-S16":
                                            return 1327;
                                        case "RobotoNum3L Light":
                                            return 1327;
                                        case "monospaced-with-serifs":
                                            return 1327;
                                        case "samsung-sans-num35":
                                            return 1327;
                                        case "Cool jazz":
                                            return 1327;
                                        case "SamsungNeoNum-3L":
                                            return 1327;
                                        case "STXingkai":
                                            return 1327;
                                        case "ScreenSansMono":
                                            return 1327;
                                        case "DFPWaWaW5-GB":
                                            return 1327;
                                        case "SamsungSansNum-3L Light":
                                            return 1327;
                                        case "Bangla Sangam MN":
                                            return 1327;
                                        case "Gurmukhi Sangam MN":
                                            return 1327;
                                        case "SECRobotoLight":
                                            return 1327;
                                        case "hyfonxrain":
                                            return 1327;
                                        case "MYingHeiGB18030C-Bold":
                                            return 1327;
                                        case "samsung-sans-light":
                                            return 1327;
                                        case "Helvetica LT 65 Medium":
                                            return 1327;
                                        case "Droid Sans Fallback":
                                            return 1327;
                                        case "Roboto Test1 Bold":
                                            return 1327;
                                        case "Noto Sans Myanmar Bold":
                                            return 1327;
                                        case "sans-serif-condensed-custom":
                                            return 1327;
                                        case "SamsungNeoNum-3T":
                                            return 1327;
                                        case "Samsung Sans Num35":
                                            return 1327;
                                        case "monospace":
                                            return 912;
                                        case "TL Mohanty Medium":
                                            return 1327;
                                        case "helve-neue-medium":
                                            return 1327;
                                        case "LTHYSZK":
                                            return 1327;
                                        case "Roboto Condensed custome Bold":
                                            return 1327;
                                        case "Myanmar3":
                                            return 1327;
                                        case "Droid Sans Devanagari":
                                            return 1327;
                                        case "ShaoNv_prev":
                                            return 1327;
                                        case "samsung-neo-num3L":
                                            return 1327;
                                        case "FZLanTingHei-EL-GBK":
                                            return 1327;
                                        case "yunos":
                                            return 1327;
                                        case "samsung-neo-num3T":
                                            return 1327;
                                        case "Times New Roman":
                                            return 1134;
                                        case "helve-neue-bold":
                                            return 1327;
                                        case "noto-sans-cjk-regular":
                                            return 1327;
                                        case "Noto Sans Gurmukhi UI Bold":
                                            return 1327;
                                        case "DINPro-black":
                                            return 1327;
                                        case "FZLanTingHei-EL-GB18030":
                                            return 1327;
                                        case "SST Vietnamese Medium":
                                            return 1327;
                                        case "Roboto Condensed Light":
                                            return 1327;
                                        case "SST Vietnamese Bold":
                                            return 1327;
                                        case "AR DJ-KK":
                                            return 1327;
                                        case "Droid Sans SEMC":
                                            return 1327;
                                        case "Noto Sans Myanmar UI":
                                            return 1327;
                                        case "Coming Soon":
                                            return 1327;
                                        case "MYuppy PRC Medium":
                                            return 1327;
                                        case "Rosemary":
                                            return 1327;
                                        case "Lohit Gujarati":
                                            return 1327;
                                        case "Roboto Condensed custom Bold":
                                            return 1327;
                                        case "FZLanTingHeiS-R-GB":
                                            return 1327;
                                        case "Helvetica Neue OTS":
                                            return 1327;
                                        case "Kaiti_prev":
                                            return 1327;
                                        case "Roboto-BigClock":
                                            return 1327;
                                        case "FZYBKSJW":
                                            return 1327;
                                        case "Handset Condensed Bold":
                                            return 1327;
                                        case "SamsungGeorgian":
                                            return 1327;
                                        case "Dancing Script":
                                            return 1327;
                                        case "sans-serif-condensed":
                                            return 1327;
                                        case "hans-sans-thin":
                                            return 1327;
                                        case "SamsungSansNum-4Tv Thin":
                                            return 1327;
                                        case "Lohit Odia":
                                            return 1327;
                                        case "BhashitaComplexSans":
                                            return 1327;

                                    }
                                }
                            }
                        case "akamai_adidas":
                            if (this.localName === "span") {
                                if (this.innerHTML === "mmmmmmmmlli" && this.style.fontSize === "192px") {
                                    switch (this.style.fontFamily) {
                                        case "adihausDIN":
                                            return 1593;
                                        case "Monospace":
                                            return 1056;
                                        case "Wingdings 2":
                                            return 1056;
                                        case "ITC Bodoni 72 Bold":
                                            return 1056;
                                        case "Menlo":
                                            return 1593;
                                        case "Gill Sans MT":
                                            return 1593;
                                        case "Lucida Sans":
                                            return 1593;
                                        case "Bodoni 72":
                                            return 1593;
                                        case "Serif":
                                            return 1056;
                                        case "Shree Devanagari 714":
                                            return 1056;
                                        case "Microsoft Tai Le":
                                            return 1463;
                                        case "Nimbus Roman No 9 L":
                                            return 1463;
                                        case "Candara":
                                            return 1388;
                                        case "Press Start 2P":
                                            return 1388;
                                        case "Waseem":
                                            return 1593;
                                    }
                                }
                            }
                    }
                }
                return value;
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetHeight: {
            get: rsvm.RsCreateGetter("offsetHeight", function offsetHeight() {
                let value = rsvm.get(this, "offsetHeight");
                if (this.isConnected) {
                    switch (rsvm.siteInfo.version) {
                        case "226":
                        case "227":
                            if (this.localName === 'span') {
                                if (this.style['fontSize'] === '72px') {
                                    if (this.style['fontFamily'] === 'monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MT Extra", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 124;
                                    }
                                    if (this.style['fontFamily'] === '"MT Extra", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 124;
                                    }
                                    if (this.style['fontFamily'] === '"MT Extra", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 124;
                                    }
                                    if (this.style['fontFamily'] === 'ZWAdobeF, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'ZWAdobeF, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'ZWAdobeF, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Unicode MS", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Unicode MS", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Unicode MS", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Outlook", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Outlook", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS Outlook", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Terminal, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Terminal, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Terminal, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"TRAJAN PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"TRAJAN PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"TRAJAN PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Specialty", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Specialty", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Specialty", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Haettenschweiler, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Haettenschweiler, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Haettenschweiler, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"OCR A Extended", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"OCR A Extended", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"OCR A Extended", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Staccato222 BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Staccato222 BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Staccato222 BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Century Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Century Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Century Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"MS Mincho", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Mincho", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS Mincho", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft YaHei", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft YaHei", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft YaHei", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Century, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Century, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Century, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Sylfaen, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 94;
                                    }
                                    if (this.style['fontFamily'] === 'Sylfaen, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 94;
                                    }
                                    if (this.style['fontFamily'] === 'Sylfaen, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 94;
                                    }
                                    if (this.style['fontFamily'] === '"Agency FB", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Agency FB", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Agency FB", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti TC", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti TC", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti TC", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Cambria Math", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Cambria Math", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Cambria Math", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MYRIAD PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MYRIAD PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MYRIAD PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Futura Md BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Futura Md BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Futura Md BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti SC", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti SC", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Heiti SC", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SimSun-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SimSun-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SimSun-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Sans Serif", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Sans Serif", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS Reference Sans Serif", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Vijaya, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Vijaya, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Vijaya, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Marlett, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Marlett, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Marlett, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bitstream Vera Sans Mono", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bitstream Vera Sans Mono", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Bitstream Vera Sans Mono", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bookman Old Style", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bookman Old Style", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Bookman Old Style", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Gill Sans", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Gill Sans", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Gill Sans", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'OSAKA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'OSAKA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'OSAKA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Didot, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Didot, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Didot, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Typewriter", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Typewriter", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Typewriter", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'DIN, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'DIN, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'DIN, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'PMingLiU, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Monotype Corsiva", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Monotype Corsiva", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Monotype Corsiva", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"ARNO PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"ARNO PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"ARNO PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'GOTHAM, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'GOTHAM, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'GOTHAM, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SimHei, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SimHei, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SimHei, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Narrow", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 80;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Narrow", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 80;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Narrow", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 80;
                                    }
                                    if (this.style['fontFamily'] === '"Letter Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Letter Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Letter Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft Uighur", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft Uighur", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft Uighur", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Bk BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Bk BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Bk BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft JhengHei", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft JhengHei", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Microsoft JhengHei", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS PMincho", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS PMincho", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS PMincho", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SCRIPTINA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SCRIPTINA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'SCRIPTINA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Helvetica Neue", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Helvetica Neue", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Helvetica Neue", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Garamond, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Garamond, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Garamond, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Rockwell, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Rockwell, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Rockwell, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Monaco, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Monaco, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Monaco, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"BankGothic Md BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 75;
                                    }
                                    if (this.style['fontFamily'] === '"BankGothic Md BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 75;
                                    }
                                    if (this.style['fontFamily'] === '"BankGothic Md BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 75;
                                    }
                                    if (this.style['fontFamily'] === '"Minion Pro", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Minion Pro", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Minion Pro", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Clarendon, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Clarendon, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Clarendon, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Futura, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Futura, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Futura, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"BlairMdITC TT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"BlairMdITC TT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"BlairMdITC TT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'INCONSOLATA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'INCONSOLATA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'INCONSOLATA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Small Fonts", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Small Fonts", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Small Fonts", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU_HKSCS-ExtB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU_HKSCS-ExtB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU_HKSCS-ExtB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Calibri, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 88;
                                    }
                                    if (this.style['fontFamily'] === 'Calibri, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 88;
                                    }
                                    if (this.style['fontFamily'] === 'Calibri, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 88;
                                    }
                                    if (this.style['fontFamily'] === '"MS LineDraw", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS LineDraw", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"MS LineDraw", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Segoe UI Symbol", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 96;
                                    }
                                    if (this.style['fontFamily'] === '"Segoe UI Symbol", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 96;
                                    }
                                    if (this.style['fontFamily'] === '"Segoe UI Symbol", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 96;
                                    }
                                    if (this.style['fontFamily'] === 'AVENIR, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'AVENIR, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'AVENIR, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Swis721 BlkEx BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Swis721 BlkEx BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Swis721 BlkEx BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Black", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 101;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Black", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 101;
                                    }
                                    if (this.style['fontFamily'] === '"Arial Black", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 101;
                                    }
                                    if (this.style['fontFamily'] === 'Consolas, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 84;
                                    }
                                    if (this.style['fontFamily'] === 'Consolas, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 84;
                                    }
                                    if (this.style['fontFamily'] === 'Consolas, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 84;
                                    }
                                    if (this.style['fontFamily'] === 'Gabriola, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Gabriola, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Gabriola, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Md BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Md BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"AvantGarde Md BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 86;
                                    }
                                    if (this.style['fontFamily'] === '"Book Antiqua", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Book Antiqua", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Book Antiqua", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Leelawadee, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Leelawadee, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Leelawadee, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Academy Engraved LET", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Academy Engraved LET", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Academy Engraved LET", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"ADOBE CASLON PRO", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"ADOBE CASLON PRO", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"ADOBE CASLON PRO", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'DFKai-SB, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'DFKai-SB, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'DFKai-SB, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Serifa, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Serifa, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Serifa, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Thonburi, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Thonburi, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Thonburi, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'EUROSTILE, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'EUROSTILE, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'EUROSTILE, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Palatino, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Palatino, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Palatino, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'FangSong, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'FangSong, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'FangSong, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'KaiTi, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'KaiTi, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'KaiTi, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'MingLiU, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'NSimSun, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'NSimSun, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'NSimSun, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Andale Mono", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Andale Mono", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Andale Mono", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Amazone BT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Amazone BT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Amazone BT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Edwardian Script ITC", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Edwardian Script ITC", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Edwardian Script ITC", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bradley Hand", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bradley Hand", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Bradley Hand", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Malgun Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Malgun Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Malgun Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'NEVIS, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'NEVIS, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'NEVIS, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'VisualUI, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'VisualUI, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'VisualUI, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Bright", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Bright", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Bright", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Levenim MT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Levenim MT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Levenim MT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS UI Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS UI Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"MS UI Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bodoni MT", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Bodoni MT", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Bodoni MT", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Heather, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Heather, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Heather, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'OPTIMA, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'OPTIMA, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'OPTIMA, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"PRINCETOWN LET", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"PRINCETOWN LET", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"PRINCETOWN LET", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Showcard Gothic", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Showcard Gothic", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Showcard Gothic", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SILKSCREEN, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'SILKSCREEN, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'SILKSCREEN, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Unicode", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 111;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Unicode", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 111;
                                    }
                                    if (this.style['fontFamily'] === '"Lucida Sans Unicode", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 111;
                                    }
                                    if (this.style['fontFamily'] === '"Wingdings 2", monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === '"Wingdings 2", sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === '"Wingdings 2", serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Cezanne, monospace' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }
                                    if (this.style['fontFamily'] === 'Cezanne, sans-serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 95;
                                    }
                                    if (this.style['fontFamily'] === 'Cezanne, serif' && this.innerHTML === 'mmmmmmmmmmlli') {
                                        return 72;
                                    }

                                }
                            }
                        case "rs6_yaojian":
                            if (this.localName === "span") {
                                if (this.innerHTML === "mmmmmmmmmmmlliii" && this.style.fontSize === "114px") {
                                    switch (this.style.fontFamily) {
                                        case "mmllii":
                                            return 151;
                                        case "SimHei":
                                            return 114;
                                        case "SimSun":
                                            return 114;
                                        case "NSimSun":
                                            return 114;
                                        case "FangSong":
                                            return 114;
                                        case "KaiTi":
                                            return 114;
                                        case "FangSongGB2312":
                                            return 151;
                                        case "KaiTiGB2312":
                                            return 151;
                                        case "Microsoft YaHei":
                                            return 151;
                                        case "Hiragino Sans GB":
                                            return 151;
                                        case "STHeiti Light":
                                            return 151;
                                        case "STHeiti":
                                            return 151;
                                        case "STKaiti":
                                            return 151;
                                        case "STSong":
                                            return 151;
                                        case "STFangsong":
                                            return 151;
                                        case "LiSu":
                                            return 151;
                                        case "YouYuan":
                                            return 151;
                                        case "STXihei":
                                            return 151;
                                        case "STZhongsong":
                                            return 151;
                                        case "FZShuTi":
                                            return 151;
                                        case "FZYaoti":
                                            return 151;
                                        case "STCaiyun":
                                            return 151;
                                        case "STHupo":
                                            return 151;
                                        case "STLiti":
                                            return 151;
                                        case "STXingkai":
                                            return 151;
                                        case "STXinwei":
                                            return 151;
                                        case "DFPhelvetica":
                                            return 151;
                                        case "Tibetan Machine Uni":
                                            return 151;
                                        case "Cooljazz":
                                            return 151;
                                        case "Verdana":
                                            return 139;
                                        case "Helvetica Neue LT Pro 35 Thin":
                                            return 139;
                                        case "tahoma":
                                            return 138;
                                        case "LG Smart_H test Regular":
                                            return 151;
                                        case "DINPro-light":
                                            return 151;
                                        case "Helvetica LT 43 Light Extended":
                                            return 151;
                                        case "HelveM_India":
                                            return 151;
                                        case "SECRobotoLight Bold":
                                            return 151;
                                        case "OR Mohanty Unicode Regular":
                                            return 151;
                                        case "Droid Sans Thai":
                                            return 151;
                                        case "Kannada Sangam MN":
                                            return 151;
                                        case "DDC Uchen":
                                            return 151;
                                        case "clock2016_v1.1":
                                            return 151;
                                        case "SamsungKannadaRegular":
                                            return 151;
                                        case "MI LANTING Bold":
                                            return 151;
                                        case "SamsungSansNum3L Light":
                                            return 151;
                                        case "verdana":
                                            return 139;
                                        case "HelveticaNeueThin":
                                            return 151;
                                        case "SECFallback":
                                            return 151;
                                        case "SamsungEmoji":
                                            return 151;
                                        case "Telugu Sangam MN":
                                            return 151;
                                        case "Carrois Gothic SC":
                                            return 151;
                                        case "Flyme Light Roboto Light":
                                            return 151;
                                        case "SoMA-Digit Light":
                                            return 151;
                                        case "SoMC Sans Regular":
                                            return 151;
                                        case "HYXiYuanJ":
                                            return 151;
                                        case "sst":
                                            return 151;
                                        case "samsung-sans-num4T":
                                            return 151;
                                        case "gm_mengmeng":
                                            return 151;
                                        case "Lohit Kannada":
                                            return 151;
                                        case "times new roman":
                                            return 127;
                                        case "samsung-sans-num4L":
                                            return 151;
                                        case "serif-monospace":
                                            return 151;
                                        case "SamsungSansNum-3T Thin":
                                            return 151;
                                        case "ColorOSUI-XThin":
                                            return 151;
                                        case "Droid Naskh Shift Alt":
                                            return 151;
                                        case "SamsungTeluguRegular":
                                            return 151;
                                        case "Bengali OTS":
                                            return 151;
                                        case "MI LanTing_GB Outside YS":
                                            return 151;
                                        case "FZMiaoWu_GB18030":
                                            return 151;
                                        case "helve-neue-regular":
                                            return 151;
                                        case "SST Medium":
                                            return 151;
                                        case "Courier New":
                                            return 129;
                                        case "Khmer Mondulkiri Bold":
                                            return 151;
                                        case "Helvetica LT 23 Ultra Light Extended":
                                            return 151;
                                        case "Helvetica LT 25 Ultra Light":
                                            return 151;
                                        case "Roboto Medium":
                                            return 137;
                                        case "Droid Sans Bold":
                                            return 151;
                                        case "goudy":
                                            return 151;
                                        case "sans-serif-condensed-light":
                                            return 151;
                                        case "SFinder":
                                            return 151;
                                        case "noto-sans-cjk-medium":
                                            return 151;
                                        case "miui":
                                            return 151;
                                        case "MRocky PRC Bold":
                                            return 151;
                                        case "AndroidClock Regular":
                                            return 151;
                                        case "SamsungSansNum-4L Light":
                                            return 151;
                                        case "sans-serif-thin":
                                            return 151;
                                        case "AaPangYaer":
                                            return 151;
                                        case "casual":
                                            return 151;
                                        case "BN MohantyOT Bold":
                                            return 151;
                                        case "x-sst":
                                            return 151;
                                        case "NotoSansMyanmarZawgyi":
                                            return 151;
                                        case "Helvetica LT 33 Thin Extended":
                                            return 151;
                                        case "AshleyScriptMT Alt":
                                            return 151;
                                        case "Noto Sans Devanagari UI":
                                            return 151;
                                        case "Roboto Condensed Bold":
                                            return 151;
                                        case "Roboto Medium Italic":
                                            return 151;
                                        case "miuiex":
                                            return 151;
                                        case "Noto Sans Gurmukhi UI":
                                            return 151;
                                        case "SST Vietnamese Light":
                                            return 151;
                                        case "LG_Oriya":
                                            return 151;
                                        case "hycoffee":
                                            return 151;
                                        case "x-sst-ultralight":
                                            return 151;
                                        case "DFHeiAW7-A":
                                            return 151;
                                        case "FZZWXBTOT_Unicode":
                                            return 151;
                                        case "Devanagari Sangam MN Bold":
                                            return 151;
                                        case "sans-serif-monospace":
                                            return 151;
                                        case "Padauk Book Bold":
                                            return 151;
                                        case "LG-FZYingBiKaiShu-S15-V2.2":
                                            return 151;
                                        case "LG-FZYingBiKaiShu-S15-V2.3":
                                            return 151;
                                        case "HelveticaNeueLT Pro 35 Th":
                                            return 151;
                                        case "Microsoft Himalaya":
                                            return 114;
                                        case "SamsungSansFallback":
                                            return 151;
                                        case "SST Medium Italic":
                                            return 151;
                                        case "AndroidEmoji":
                                            return 151;
                                        case "SamsungSansNum-3R":
                                            return 151;
                                        case "ITC Stone Serif":
                                            return 151;
                                        case "sans-serif-smallcaps":
                                            return 151;
                                        case "x-sst-medium":
                                            return 151;
                                        case "LG_Sinhalese":
                                            return 151;
                                        case "Roboto Thin Italic":
                                            return 151;
                                        case "century-gothic":
                                            return 151;
                                        case "Clockopia":
                                            return 151;
                                        case "Luminous_Sans":
                                            return 151;
                                        case "Floridian Script Alt":
                                            return 151;
                                        case "Noto Sans Gurmukhi Bold":
                                            return 151;
                                        case "LTHYSZK Bold":
                                            return 151;
                                        case "GS_Thai":
                                            return 151;
                                        case "SamsungNeoNum_3T_2":
                                            return 151;
                                        case "Arabic":
                                            return 151;
                                        case "hans-sans-normal":
                                            return 151;
                                        case "Lohit Telugu":
                                            return 151;
                                        case "HYQiHei-50S Light":
                                            return 151;
                                        case "Lindsey for Samsung":
                                            return 151;
                                        case "AR Crystalhei DB":
                                            return 151;
                                        case "Samsung Sans Medium":
                                            return 151;
                                        case "samsung-sans-num45":
                                            return 151;
                                        case "hans-sans-bold":
                                            return 151;
                                        case "Luminous_Script":
                                            return 151;
                                        case "SST Condensed":
                                            return 151;
                                        case "SamsungDevanagariRegular":
                                            return 151;
                                        case "Anjal Malayalam MN":
                                            return 151;
                                        case "SamsungThai(test)":
                                            return 151;
                                        case "FZLanTingHei-M-GB18030":
                                            return 151;
                                        case "Hebrew OTS":
                                            return 151;
                                        case "GS45_Arab(AndroidOS)":
                                            return 151;
                                        case "Samsung Sans Light":
                                            return 151;
                                        case "Choco cooky":
                                            return 151;
                                        case "helve-neue-thin":
                                            return 151;
                                        case "PN MohantyOT Medium":
                                            return 151;
                                        case "LG-FZKaTong-M19-V2.4":
                                            return 151;
                                        case "Droid Serif":
                                            return 151;
                                        case "SamsungSinhalaRegular":
                                            return 151;
                                        case "helvetica":
                                            return 127;
                                        case "LG-FZKaTong-M19-V2.2":
                                            return 127;
                                        case "Noto Sans Devanagari UI Bold":
                                            return 151;
                                        case "SST Light":
                                            return 151;
                                        case "DFPEmoji":
                                            return 151;
                                        case "weatherfontnew Regular":
                                            return 151;
                                        case "RobotoNum3R":
                                            return 151;
                                        case "DINPro-medium":
                                            return 151;
                                        case "Samsung Sans Num55":
                                            return 151;
                                        case "SST Heavy Italic":
                                            return 151;
                                        case "LGlock4 Regular_0805":
                                            return 151;
                                        case "Georgia":
                                            return 130;
                                        case "noto-sans-cjk":
                                            return 151;
                                        case "Telugu Sangam MN Bold":
                                            return 151;
                                        case "MIUI EX Normal":
                                            return 151;
                                        case "HYQiHei-75S Bold":
                                            return 151;
                                        case "NotoSansMyanmarZawgyi Bold":
                                            return 151;
                                        case "yunospro-black":
                                            return 151;
                                        case "helve-neue-normal":
                                            return 151;
                                        case "Luminous_Serif":
                                            return 151;
                                        case "TM MohantyOT Normal":
                                            return 151;
                                        case "SamsungSansNum-3Lv Light":
                                            return 151;
                                        case "Samsung Sans Num45":
                                            return 151;
                                        case "SmartGothic Medium":
                                            return 151;
                                        case "georgia":
                                            return 130;
                                        case "casual-font-type":
                                            return 151;
                                        case "Samsung Sans Bold":
                                            return 151;
                                        case "small-capitals":
                                            return 151;
                                        case "MFinance PRC Bold":
                                            return 151;
                                        case "FZLanTingHei_GB18030":
                                            return 151;
                                        case "SamsungArmenian":
                                            return 151;
                                        case "Roboto Bold":
                                            return 151;
                                        case "century-gothic-bold":
                                            return 151;
                                        case "x-sst-heavy":
                                            return 151;
                                        case "SST Light Italic":
                                            return 151;
                                        case "TharLon":
                                            return 151;
                                        case "x-sst-light":
                                            return 151;
                                        case "Dinbol Regular":
                                            return 151;
                                        case "SamsungBengaliRegular":
                                            return 151;
                                        case "KN MohantyOTSmall Medium":
                                            return 151;
                                        case "hypure":
                                            return 151;
                                        case "SamsungTamilRegular":
                                            return 151;
                                        case "Malayalam Sangam MN":
                                            return 151;
                                        case "Noto Sans Kannada UI":
                                            return 151;
                                        case "helve-neue":
                                            return 151;
                                        case "Helvetica LT 55 Roman":
                                            return 151;
                                        case "Noto Sans Kannada Bold":
                                            return 151;
                                        case "Sanpya":
                                            return 151;
                                        case "SamsungPunjabiRegular":
                                            return 151;
                                        case "samsung-sans-num4Lv":
                                            return 151;
                                        case "LG_Kannada":
                                            return 151;
                                        case "Samsung Sans Regular":
                                            return 151;
                                        case "Zawgyi-One":
                                            return 151;
                                        case "Droid Serif Bold Italic":
                                            return 151;
                                        case "FZKATJW":
                                            return 151;
                                        case "courier new":
                                            return 129;
                                        case "SamsungEmojiRegular":
                                            return 151;
                                        case "MIUI EX Bold":
                                            return 151;
                                        case "Android Emoji":
                                            return 151;
                                        case "Noto Naskh Arabic UI":
                                            return 151;
                                        case "LCD Com":
                                            return 151;
                                        case "Futura Medium BT":
                                            return 151;
                                        case "Vivo-extract":
                                            return 151;
                                        case "Bangla Sangam MN Bold":
                                            return 151;
                                        case "hans-sans-regular":
                                            return 151;
                                        case "SNum-3R":
                                            return 151;
                                        case "SNum-3T":
                                            return 151;
                                        case "hans-sans":
                                            return 151;
                                        case "SST Ultra Light":
                                            return 151;
                                        case "Roboto Regular":
                                            return 137;
                                        case "Roboto Light":
                                            return 137;
                                        case "Hanuman":
                                            return 151;
                                        case "newlggothic":
                                            return 151;
                                        case "DFHeiAW5-A":
                                            return 151;
                                        case "hans-sans-light":
                                            return 151;
                                        case "Plate Gothic":
                                            return 151;
                                        case "SNum-3L":
                                            return 151;
                                        case "Helvetica LT 45 Light":
                                            return 151;
                                        case "Myanmar Sangam Zawgyi Bold":
                                            return 151;
                                        case "lg-sans-serif-light":
                                            return 151;
                                        case "MIUI EX Light":
                                            return 151;
                                        case "Roboto Thin":
                                            return 137;
                                        case "SoMA Bold":
                                            return 151;
                                        case "Padauk":
                                            return 151;
                                        case "Samsung Sans":
                                            return 151;
                                        case "Spacious_SmallCap":
                                            return 151;
                                        case "sans-serif":
                                            return 151;
                                        case "DV MohantyOT Medium":
                                            return 151;
                                        case "Stable_Slap":
                                            return 151;
                                        case "monaco":
                                            return 151;
                                        case "Flyme-Light":
                                            return 151;
                                        case "fzzys-dospy":
                                            return 151;
                                        case "ScreenSans":
                                            return 151;
                                        case "clock2016":
                                            return 151;
                                        case "Roboto Condensed Bold Italic":
                                            return 151;
                                        case "Arial":
                                            return 127;
                                        case "KN Mohanty Medium":
                                            return 151;
                                        case "MotoyaLMaru W3 mono":
                                            return 151;
                                        case "Handset Condensed":
                                            return 151;
                                        case "Roboto Italic":
                                            return 151;
                                        case "HTC Hand":
                                            return 151;
                                        case "SST Ultra Light Italic":
                                            return 151;
                                        case "SST Vietnamese Roman":
                                            return 151;
                                        case "Noto Naskh Arabic UI Bold":
                                            return 151;
                                        case "chnfzxh-medium":
                                            return 151;
                                        case "SNumCond-3T":
                                            return 151;
                                        case "century-gothic-regular":
                                            return 151;
                                        case "default_roboto-light":
                                            return 151;
                                        case "Noto Sans Myanmar":
                                            return 151;
                                        case "Myanmar Sangam MN":
                                            return 151;
                                        case "Apple Color Emoji":
                                            return 151;
                                        case "weatherfontReg":
                                            return 151;
                                        case "SamsungMalayalamRegular":
                                            return 151;
                                        case "arial":
                                            return 127;
                                        case "Droid Serif Bold":
                                            return 151;
                                        case "CPo3 PRC Bold":
                                            return 151;
                                        case "MI LANTING":
                                            return 151;
                                        case "SamsungKorean-Regular":
                                            return 151;
                                        case "test45 Regular":
                                            return 151;
                                        case "spirit_time":
                                            return 151;
                                        case "Devanagari Sangam MN":
                                            return 151;
                                        case "ScreenSerif":
                                            return 151;
                                        case "Roboto":
                                            return 137;
                                        case "cursive-font-type":
                                            return 151;
                                        case "STHeiti_vivo":
                                            return 151;
                                        case "chnfzxh":
                                            return 151;
                                        case "Samsung ClockFont 3A":
                                            return 151;
                                        case "Roboto Condensed Regular":
                                            return 151;
                                        case "samsung-neo-num3R":
                                            return 151;
                                        case "GJ MohantyOT Medium":
                                            return 151;
                                        case "Chulho Neue Lock":
                                            return 151;
                                        case "roboto-num3L":
                                            return 151;
                                        case "helve-neue-ultraLightextended":
                                            return 151;
                                        case "SamsungOriyaRegular":
                                            return 151;
                                        case "SamsungSansNum-4Lv Light":
                                            return 151;
                                        case "MYingHei_18030_C2-Bold":
                                            return 151;
                                        case "DFPShaoNvW5-GB":
                                            return 151;
                                        case "Roboto Black":
                                            return 137;
                                        case "helve-neue-ultralight":
                                            return 151;
                                        case "gm_xihei":
                                            return 151;
                                        case "LGlock4 Light_0805":
                                            return 151;
                                        case "Gujarati Sangam MN":
                                            return 151;
                                        case "Malayalam Sangam MN Bold":
                                            return 151;
                                        case "roboto-num3R":
                                            return 151;
                                        case "STXihei_vivo":
                                            return 151;
                                        case "FZZhunYuan_GB18030":
                                            return 151;
                                        case "noto-sans-cjk-light":
                                            return 151;
                                        case "coloros":
                                            return 151;
                                        case "Noto Sans Gurmukhi":
                                            return 151;
                                        case "Noto Sans Symbols":
                                            return 151;
                                        case "Roboto Light Italic":
                                            return 151;
                                        case "Lohit Tamil":
                                            return 151;
                                        case "cursive":
                                            return 114;
                                        case "default_roboto":
                                            return 151;
                                        case "BhashitaComplexSans Bold":
                                            return 151;
                                        case "LG_Number_Roboto Thin":
                                            return 151;
                                        case "monospaced-without-serifs":
                                            return 151;
                                        case "Helvetica LT 35 Thin":
                                            return 151;
                                        case "samsung-sans-num3LV":
                                            return 151;
                                        case "DINPro":
                                            return 151;
                                        case "Jomolhari":
                                            return 151;
                                        case "sans-serif-light":
                                            return 151;
                                        case "helve-neue-black":
                                            return 151;
                                        case "Lohit Bengali":
                                            return 151;
                                        case "Myanmar Sangam Zawgyi":
                                            return 151;
                                        case "Droid Serif Italic":
                                            return 151;
                                        case "Roboto Bold Italic":
                                            return 151;
                                        case "NanumGothic":
                                            return 151;
                                        case "Sony Mobile UD Gothic Regular":
                                            return 151;
                                        case "Georgia Bold Italic":
                                            return 151;
                                        case "samsung-sans-num3Lv":
                                            return 151;
                                        case "yunos-thin":
                                            return 151;
                                        case "samsung-neo-num3T-cond":
                                            return 151;
                                        case "Noto Sans Myanmar UI Bold":
                                            return 151;
                                        case "lgserif":
                                            return 151;
                                        case "FZYouHei-R-GB18030":
                                            return 151;
                                        case "Lohit Punjabi":
                                            return 151;
                                        case "baskerville":
                                            return 151;
                                        case "samsung-sans-num4Tv":
                                            return 151;
                                        case "samsung-sans-thin":
                                            return 151;
                                        case "LG Emoji":
                                            return 151;
                                        case "AnjaliNewLipi":
                                            return 151;
                                        case "SamsungSansNum-4T Thin":
                                            return 151;
                                        case "SamsungKorean-Bold":
                                            return 151;
                                        case "miuiex-light":
                                            return 151;
                                        case "Noto Sans Kannada":
                                            return 151;
                                        case "Roboto Normal Italic":
                                            return 151;
                                        case "Georgia Italic":
                                            return 151;
                                        case "sans-serif-medium":
                                            return 151;
                                        case "Smart Zawgyi":
                                            return 151;
                                        case "Roboto Condensed Italic":
                                            return 151;
                                        case "Noto Sans Kannada UI Bold":
                                            return 151;
                                        case "DFP Sc Sans Heue30_103":
                                            return 151;
                                        case "LG_Number_Roboto Bold":
                                            return 151;
                                        case "Padauk Book":
                                            return 151;
                                        case "x-sst-condensed":
                                            return 151;
                                        case "Sunshine-Uchen":
                                            return 151;
                                        case "Roboto Black Italic":
                                            return 151;
                                        case "Ringo Color Emoji":
                                            return 151;
                                        case "Devanagari OTS":
                                            return 151;
                                        case "Smart Zawgyi Pro":
                                            return 151;
                                        case "FZLanTingHei-M-GBK":
                                            return 151;
                                        case "AndroidClock-Large Regular":
                                            return 151;
                                        case "proportionally-spaced-without-serifs":
                                            return 151;
                                        case "Cutive Mono":
                                            return 151;
                                        case "times":
                                            return 127;
                                        case "LG Smart_H test Bold":
                                            return 151;
                                        case "DINPro-Light":
                                            return 151;
                                        case "sans-serif-black":
                                            return 151;
                                        case "Lohit Devanagari":
                                            return 151;
                                        case "proportionally-spaced-with-serifs":
                                            return 151;
                                        case "samsung-sans-num3L":
                                            return 151;
                                        case "MYoung PRC Medium":
                                            return 151;
                                        case "DFGothicPW5-BIG5HK-SONY":
                                            return 151;
                                        case "hans-sans-medium":
                                            return 151;
                                        case "SST Heavy":
                                            return 151;
                                        case "LG-FZZhunYuan-M02-V2.2":
                                            return 151;
                                        case "MyanmarUNew Regular":
                                            return 151;
                                        case "Noto Naskh Arabic Bold":
                                            return 151;
                                        case "SamsungGujarathiRegular":
                                            return 151;
                                        case "fantasy":
                                            return 139;
                                        case "helve-neue-light":
                                            return 151;
                                        case "Helvetica Neue OTS Bold":
                                            return 151;
                                        case "noto-sans-cjk-bold":
                                            return 151;
                                        case "samsung-sans-num3R":
                                            return 151;
                                        case "Lindsey Samsung":
                                            return 151;
                                        case "samsung-sans-num3T":
                                            return 151;
                                        case "ScreenSerifMono":
                                            return 151;
                                        case "ETrump Myanmar_ZW":
                                            return 151;
                                        case "helve-neue-thinextended":
                                            return 151;
                                        case "Noto Naskh Arabic":
                                            return 151;
                                        case "LG_Gujarati":
                                            return 151;
                                        case "Smart_Monospaced":
                                            return 151;
                                        case "Tamil Sangam MN":
                                            return 151;
                                        case "LG Emoji NonAME":
                                            return 151;
                                        case "Roboto Condensed Light Italic":
                                            return 151;
                                        case "gm_jingkai":
                                            return 151;
                                        case "FZLanTingKanHei_GB18030":
                                            return 151;
                                        case "lgtravel":
                                            return 151;
                                        case "palatino":
                                            return 151;
                                        case "Georgia Bold":
                                            return 151;
                                        case "Droid Sans":
                                            return 151;
                                        case "LG_Punjabi":
                                            return 151;
                                        case "SmartGothic Bold":
                                            return 151;
                                        case "Samsung Sans Thin":
                                            return 151;
                                        case "SST Condensed Bold":
                                            return 151;
                                        case "Comics_Narrow":
                                            return 151;
                                        case "courier":
                                            return 129;
                                        case "Oriya Sangam MN":
                                            return 151;
                                        case "helve-neue-lightextended":
                                            return 151;
                                        case "FZLanTingHei-R-GB18030":
                                            return 151;
                                        case "AR CrystalheiHKSCS DB":
                                            return 151;
                                        case "serif":
                                            return 114;
                                        case "RTWSYueRoudGoG0v1-Regular":
                                            return 151;
                                        case "MiaoWu_prev":
                                            return 151;
                                        case "FZY1K":
                                            return 151;
                                        case "LG_Number_Roboto Regular":
                                            return 151;
                                        case "AndroidClock":
                                            return 151;
                                        case "SoMA Regular":
                                            return 151;
                                        case "HYQiHei-40S Lightx":
                                            return 151;
                                        case "lg-sans-serif":
                                            return 151;
                                        case "Dancing Script Bold":
                                            return 151;
                                        case "default":
                                            return 151;
                                        case "sec-roboto-light":
                                            return 151;
                                        case "ColorOSUI-Regular":
                                            return 151;
                                        case "test Regular":
                                            return 151;
                                        case "Tamil Sangam MN Bold":
                                            return 151;
                                        case "FZYingBiXingShu-S16":
                                            return 151;
                                        case "RobotoNum3L Light":
                                            return 151;
                                        case "monospaced-with-serifs":
                                            return 151;
                                        case "samsung-sans-num35":
                                            return 151;
                                        case "Cool jazz":
                                            return 151;
                                        case "SamsungNeoNum-3L":
                                            return 151;
                                        case "STXingkai":
                                            return 151;
                                        case "ScreenSansMono":
                                            return 151;
                                        case "DFPWaWaW5-GB":
                                            return 151;
                                        case "SamsungSansNum-3L Light":
                                            return 151;
                                        case "Bangla Sangam MN":
                                            return 151;
                                        case "Gurmukhi Sangam MN":
                                            return 151;
                                        case "SECRobotoLight":
                                            return 151;
                                        case "hyfonxrain":
                                            return 151;
                                        case "MYingHeiGB18030C-Bold":
                                            return 151;
                                        case "samsung-sans-light":
                                            return 151;
                                        case "Helvetica LT 65 Medium":
                                            return 151;
                                        case "Droid Sans Fallback":
                                            return 151;
                                        case "Roboto Test1 Bold":
                                            return 151;
                                        case "Noto Sans Myanmar Bold":
                                            return 151;
                                        case "sans-serif-condensed-custom":
                                            return 151;
                                        case "SamsungNeoNum-3T":
                                            return 151;
                                        case "Samsung Sans Num35":
                                            return 151;
                                        case "monospace":
                                            return 114;
                                        case "TL Mohanty Medium":
                                            return 151;
                                        case "helve-neue-medium":
                                            return 151;
                                        case "LTHYSZK":
                                            return 151;
                                        case "Roboto Condensed custome Bold":
                                            return 151;
                                        case "Myanmar3":
                                            return 151;
                                        case "Droid Sans Devanagari":
                                            return 151;
                                        case "ShaoNv_prev":
                                            return 151;
                                        case "samsung-neo-num3L":
                                            return 151;
                                        case "FZLanTingHei-EL-GBK":
                                            return 151;
                                        case "yunos":
                                            return 151;
                                        case "samsung-neo-num3T":
                                            return 151;
                                        case "Times New Roman":
                                            return 127;
                                        case "helve-neue-bold":
                                            return 151;
                                        case "noto-sans-cjk-regular":
                                            return 151;
                                        case "Noto Sans Gurmukhi UI Bold":
                                            return 151;
                                        case "DINPro-black":
                                            return 151;
                                        case "FZLanTingHei-EL-GB18030":
                                            return 151;
                                        case "SST Vietnamese Medium":
                                            return 151;
                                        case "Roboto Condensed Light":
                                            return 151;
                                        case "SST Vietnamese Bold":
                                            return 151;
                                        case "AR DJ-KK":
                                            return 151;
                                        case "Droid Sans SEMC":
                                            return 151;
                                        case "Noto Sans Myanmar UI":
                                            return 151;
                                        case "Coming Soon":
                                            return 151;
                                        case "MYuppy PRC Medium":
                                            return 151;
                                        case "Rosemary":
                                            return 151;
                                        case "Lohit Gujarati":
                                            return 151;
                                        case "Roboto Condensed custom Bold":
                                            return 151;
                                        case "FZLanTingHeiS-R-GB":
                                            return 151;
                                        case "Helvetica Neue OTS":
                                            return 151;
                                        case "Kaiti_prev":
                                            return 151;
                                        case "Roboto-BigClock":
                                            return 151;
                                        case "FZYBKSJW":
                                            return 151;
                                        case "Handset Condensed Bold":
                                            return 151;
                                        case "SamsungGeorgian":
                                            return 151;
                                        case "Dancing Script":
                                            return 151;
                                        case "sans-serif-condensed":
                                            return 151;
                                        case "hans-sans-thin":
                                            return 151;
                                        case "SamsungSansNum-4Tv Thin":
                                            return 151;
                                        case "Lohit Odia":
                                            return 151;
                                        case "BhashitaComplexSans":
                                            return 151;

                                    }
                                }
                            }
                        case "akamai_adidas":
                            if (this.localName === "span") {
                                if (this.innerHTML === "mmmmmmmmlli" && this.style.fontSize === "192px") {
                                    switch (this.style.fontFamily) {
                                        case "adihausDIN":
                                            return 253;
                                        case "Monospace":
                                            return 192;
                                        case "Wingdings 2":
                                            return 192;
                                        case "ITC Bodoni 72 Bold":
                                            return 192;
                                        case "Menlo":
                                            return 253;
                                        case "Gill Sans MT":
                                            return 253;
                                        case "Lucida Sans":
                                            return 253;
                                        case "Bodoni 72":
                                            return 253;
                                        case "Serif":
                                            return 192;
                                        case "Shree Devanagari 714":
                                            return 192;
                                        case "Microsoft Tai Le":
                                            return 244;
                                        case "Nimbus Roman No 9 L":
                                            return 244;
                                        case "Candara":
                                            return 235;
                                        case "Press Start 2P":
                                            return 235;
                                        case "Waseem":
                                            return 253;
                                    }
                                }
                            }
                    }
                }
                return value;
            }), set: undefined, enumerable: true, configurable: true,
        },
        popover: {
            get: rsvm.RsCreateGetter("popover", function popover() {
                return rsvm.get(this, "popover");
            }), set: rsvm.RsCreateSetter("popover", function popover() {
                rsvm.set(this, "popover", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        innerText: {
            get: rsvm.RsCreateGetter("innerText", function innerText() {
                let text = "";
                // 文本内容
                for (const node of this.childNodes) {
                    if (node.nodeType === 3) {
                        text += node.data;
                    } else if (node.nodeType === 1) {
                        text += node.outerText;
                    }
                }
                return text;
            }), set: rsvm.RsCreateSetter("innerText", function innerText() {
                let isConnected = this.isConnected;
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                for (const node of nodeArray) {
                    rsvm.set(node, "parentNode", null);
                    if (node.nodeType === 1) {
                        rsvm.set(node, "parentElement", null);
                    }
                }
                nodeArray.splice(0);
                nodeArray.push(rsvm.prototype.Text.new(arguments[0]));
            }), enumerable: true, configurable: true,
        },
        outerText: {
            get: rsvm.RsCreateGetter("outerText", function outerText() {
                let text = "";
                // 文本内容
                for (const node of this.childNodes) {
                    if (node.nodeType === 3) {
                        text += node.data;
                    } else if (node.nodeType === 1) {
                        text += node.outerText;
                    }
                }
                return text;
            }), set: rsvm.RsCreateSetter("outerText", function outerText() {
                if (this.parentNode === null) {
                    throw new DOMException("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.", "DOMException");
                }
                let isConnected = this.isConnected;
                let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                for (const node of nodeArray) {
                    rsvm.set(node, "parentNode", null);
                    if (node.nodeType === 1) {
                        rsvm.set(node, "parentElement", null);
                    }
                }
                nodeArray.splice(0);
                nodeArray.push(rsvm.prototype.Text.new(arguments[0]));
            }), enumerable: true, configurable: true,
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
                rsvm.elementEvent['']
                if (!Object.hasOwn(rsvm.elementEvent, 'onload')) {
                    rsvm.elementEvent['onload'] = [];
                }
                rsvm.elementEvent['onload'].push(this);
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
        dataset: {
            get: rsvm.RsCreateGetter("dataset", function dataset() {
                return rsvm.get(this, "dataset");
            }), set: undefined, enumerable: true, configurable: true,
        },
        nonce: {
            get: rsvm.RsCreateGetter("nonce", function nonce() {
                return rsvm.get(this, "nonce");
            }), set: rsvm.RsCreateSetter("nonce", function nonce() {
                rsvm.set(this, "nonce", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        autofocus: {
            get: rsvm.RsCreateGetter("autofocus", function autofocus() {
                return rsvm.get(this, "autofocus");
            }), set: rsvm.RsCreateSetter("autofocus", function autofocus() {
                rsvm.set(this, "autofocus", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        tabIndex: {
            get: rsvm.RsCreateGetter("tabIndex", function tabIndex() {
                return rsvm.get(this, "tabIndex");
            }), set: rsvm.RsCreateSetter("tabIndex", function tabIndex() {
                rsvm.set(this, "tabIndex", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        style: {
            get: rsvm.RsCreateGetter("style", function style() {
                return rsvm.get(this, "style");
            }), set: rsvm.RsCreateSetter("style", function style() {
                rsvm.set(this, "style", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        attributeStyleMap: {
            get: rsvm.RsCreateGetter("attributeStyleMap", function attributeStyleMap() {
                return rsvm.get(this, "attributeStyleMap");
            }), set: undefined, enumerable: true, configurable: true,
        },
        attachInternals: {
            value: rsvm.RsCreateAction("attachInternals", 0, function attachInternals() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blur: {
            value: rsvm.RsCreateAction("blur", 0, function blur() {
            }), writable: true, enumerable: true, configurable: true,
        },
        click: {
            value: rsvm.RsCreateAction("click", 0, function click() {
            }), writable: true, enumerable: true, configurable: true,
        },
        focus: {
            value: rsvm.RsCreateAction("focus", 0, function focus() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hidePopover: {
            value: rsvm.RsCreateAction("hidePopover", 0, function hidePopover() {
            }), writable: true, enumerable: true, configurable: true,
        },
        showPopover: {
            value: rsvm.RsCreateAction("showPopover", 0, function showPopover() {
            }), writable: true, enumerable: true, configurable: true,
        },
        togglePopover: {
            value: rsvm.RsCreateAction("togglePopover", 0, function togglePopover() {
            }), writable: true, enumerable: true, configurable: true,
        },
        inert: {
            get: rsvm.RsCreateGetter("inert", function inert() {
                return rsvm.get(this, "inert");
            }), set: rsvm.RsCreateSetter("inert", function inert() {
                rsvm.set(this, "inert", arguments[0]);
            }), enumerable: true, configurable: true,
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
        constructor: { writable: true, enumerable: false, configurable: true, value: HTMLElement },
        onbeforematch: {
            get: rsvm.RsCreateGetter("onbeforematch", function onbeforematch() {
                return rsvm.get(this, "onbeforematch");
            }), set: rsvm.RsCreateSetter("onbeforematch", function onbeforematch() {
                rsvm.set(this, "onbeforematch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "HTMLElement", writable: false, enumerable: false, configurable: true, },
    });

    Object.setPrototypeOf(HTMLElement, Element);
    Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
}();