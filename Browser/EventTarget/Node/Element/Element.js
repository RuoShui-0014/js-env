!function () {
    Object.defineProperty(window, "Element", {
        value: rsvm.RsCreateConstructor("Element"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Element = {
        memory: {
            namespaceURI: "http://www.w3.org/1999/xhtml",
            prefix: null,
            localName: "div",
            tagName: "DIV",
            id: "",
            className: "",
            classList: rsvm.prototype.DOMTokenList.new(),
            slot: "",
            attributes: rsvm.prototype.NamedNodeMap.new(),
            shadowRoot: null,
            part: rsvm.prototype.DOMTokenList.new(),
            assignedSlot: null,
            innerHTML: "",
            outerHTML: "<div></div>",
            scrollTop: 0,
            scrollLeft: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            clientTop: 0,
            clientLeft: 0,
            clientWidth: 0,
            clientHeight: 0,
            onbeforecopy: null,
            onbeforecut: null,
            onbeforepaste: null,
            onsearch: null,
            elementTiming: "",
            onfullscreenchange: null,
            onfullscreenerror: null,
            onwebkitfullscreenchange: null,
            onwebkitfullscreenerror: null,
            role: null,
            ariaAtomic: null,
            ariaAutoComplete: null,
            ariaBusy: null,
            ariaBrailleLabel: null,
            ariaBrailleRoleDescription: null,
            ariaChecked: null,
            ariaColCount: null,
            ariaColIndex: null,
            ariaColSpan: null,
            ariaCurrent: null,
            ariaDescription: null,
            ariaDisabled: null,
            ariaExpanded: null,
            ariaHasPopup: null,
            ariaHidden: null,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLevel: null,
            ariaLive: null,
            ariaModal: null,
            ariaMultiLine: null,
            ariaMultiSelectable: null,
            ariaOrientation: null,
            ariaPlaceholder: null,
            ariaPosInSet: null,
            ariaPressed: null,
            ariaReadOnly: null,
            ariaRelevant: null,
            ariaRequired: null,
            ariaRoleDescription: null,
            ariaRowCount: null,
            ariaRowIndex: null,
            ariaRowSpan: null,
            ariaSelected: null,
            ariaSetSize: null,
            ariaSort: null,
            ariaValueMax: null,
            ariaValueMin: null,
            ariaValueNow: null,
            ariaValueText: null,
            children: null,
            firstElementChild: null,
            lastElementChild: null,
            childElementCount: 0,
            previousElementSibling: null,
            nextElementSibling: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Element", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory["nodeValue"] = null;
            memory["textContent"] = "";
            memory["nodeType"] = 1;
            memory['children'] = rsvm.prototype.HTMLCollection.children(target);
            memory['classList'] = rsvm.prototype.DOMTokenList.classList(target);
        },
        new() {
            let obj = rsvm.RsCreate(Element.prototype);
            return obj;
        },
    };

    Object.defineProperties(Element, {
        prototype: { value: Element.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Element.prototype, {
        namespaceURI: {
            get: rsvm.RsCreateGetter("namespaceURI", function namespaceURI() {
                return rsvm.get(this, "namespaceURI");
            }), set: undefined, enumerable: true, configurable: true,
        },
        prefix: {
            get: rsvm.RsCreateGetter("prefix", function prefix() {
                return rsvm.get(this, "prefix");
            }), set: undefined, enumerable: true, configurable: true,
        },
        localName: {
            get: rsvm.RsCreateGetter("localName", function localName() {
                return rsvm.get(this, "localName");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tagName: {
            get: rsvm.RsCreateGetter("tagName", function tagName() {
                return rsvm.get(this, "tagName");
            }), set: undefined, enumerable: true, configurable: true,
        },
        id: {
            get: rsvm.RsCreateGetter("id", function id() {
                return rsvm.get(this, "id");
            }), set: rsvm.RsCreateSetter("id", function id() {
                rsvm.set(this, "id", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        className: {
            get: rsvm.RsCreateGetter("className", function className() {
                return rsvm.get(this, "className");
            }), set: rsvm.RsCreateSetter("className", function className() {
                rsvm.set(this, "className", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        classList: {
            get: rsvm.RsCreateGetter("classList", function classList() {
                return rsvm.get(this, "classList");
            }), set: rsvm.RsCreateSetter("classList", function classList() {
                rsvm.set(this, "classList", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        slot: {
            get: rsvm.RsCreateGetter("slot", function slot() {
                return rsvm.get(this, "slot");
            }), set: rsvm.RsCreateSetter("slot", function slot() {
                rsvm.set(this, "slot", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        attributes: {
            get: rsvm.RsCreateGetter("attributes", function attributes() {
                return rsvm.get(this, "attributes");
            }), set: undefined, enumerable: true, configurable: true,
        },
        shadowRoot: {
            get: rsvm.RsCreateGetter("shadowRoot", function shadowRoot() {
                return rsvm.get(this, "shadowRoot");
            }), set: undefined, enumerable: true, configurable: true,
        },
        part: {
            get: rsvm.RsCreateGetter("part", function part() {
                return rsvm.get(this, "part");
            }), set: rsvm.RsCreateSetter("part", function part() {
                rsvm.set(this, "part", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        assignedSlot: {
            get: rsvm.RsCreateGetter("assignedSlot", function assignedSlot() {
                return rsvm.get(this, "assignedSlot");
            }), set: undefined, enumerable: true, configurable: true,
        },
        innerHTML: {
            get: rsvm.RsCreateGetter("innerHTML", function innerHTML() {
                let text = "";
                for (const node of this.childNodes) {
                    if (node.nodeType === 3) {
                        text += node.data;
                    } else if (node.nodeType === 1) {
                        text += node.outerHTML;
                    }
                }
                return text;
            }), set: rsvm.RsCreateSetter("innerHTML", function innerHTML() {
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                for (const node of nodeArray) {
                    rsvm.set(node, "parentNode", null);
                    if (node.nodeType === 1) {
                        rsvm.set(node, "parentElement", null);
                    }
                }
                nodeArray.splice(0);
                if (arguments[0] != "") {
                    rsvm.buildFragment(arguments[0], window, this);
                }
            }), enumerable: true, configurable: true,
        },
        outerHTML: {
            get: rsvm.RsCreateGetter("outerHTML", function outerHTML() {
                let text = `<${this.localName}`;
                // 处理属性
                for (const attr of this.attributes) {
                    text += ` ${attr.name}${attr.value === "" ? "" : `="${attr.value}"`}`;
                }
                text += '>';
                // 文本内容
                for (const node of this.childNodes) {
                    if (node.nodeType === 3) {
                        text += node.data;
                    } else if (node.nodeType === 1) {
                        text += node.outerHTML;
                    }
                }
                text += `</${this.localName}>`;
                return text;
            }), set: rsvm.RsCreateSetter("outerHTML", function outerHTML() {
                if (this.parentNode === null) {
                    throw new DOMException("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.", "DOMException");
                }
                let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                for (const node of nodeArray) {
                    rsvm.set(node, "parentNode", null);
                    if (node.nodeType === 1) {
                        rsvm.set(node, "parentElement", null);
                    }
                }
                nodeArray.splice(0);
                this.parentNode.innerHTML = arguments[0];
            }), enumerable: true, configurable: true,
        },
        scrollTop: {
            get: rsvm.RsCreateGetter("scrollTop", function scrollTop() {
                return rsvm.get(this, "scrollTop");
            }), set: rsvm.RsCreateSetter("scrollTop", function scrollTop() {
                rsvm.set(this, "scrollTop", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        scrollLeft: {
            get: rsvm.RsCreateGetter("scrollLeft", function scrollLeft() {
                return rsvm.get(this, "scrollLeft");
            }), set: rsvm.RsCreateSetter("scrollLeft", function scrollLeft() {
                rsvm.set(this, "scrollLeft", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        scrollWidth: {
            get: rsvm.RsCreateGetter("scrollWidth", function scrollWidth() {
                return rsvm.get(this, "scrollWidth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        scrollHeight: {
            get: rsvm.RsCreateGetter("scrollHeight", function scrollHeight() {
                return rsvm.get(this, "scrollHeight");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientTop: {
            get: rsvm.RsCreateGetter("clientTop", function clientTop() {
                return rsvm.get(this, "clientTop");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientLeft: {
            get: rsvm.RsCreateGetter("clientLeft", function clientLeft() {
                return rsvm.get(this, "clientLeft");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientWidth: {
            get: rsvm.RsCreateGetter("clientWidth", function clientWidth() {
                if (this.isConnected) {
                    return rsvm.get(this, "clientWidth");
                }
                return 0;
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientHeight: {
            get: rsvm.RsCreateGetter("clientHeight", function clientHeight() {
                if (this.isConnected) {
                    return rsvm.get(this, "clientHeight");
                }
                return 0;
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
        onsearch: {
            get: rsvm.RsCreateGetter("onsearch", function onsearch() {
                return rsvm.get(this, "onsearch");
            }), set: rsvm.RsCreateSetter("onsearch", function onsearch() {
                rsvm.set(this, "onsearch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        elementTiming: {
            get: rsvm.RsCreateGetter("elementTiming", function elementTiming() {
                return rsvm.get(this, "elementTiming");
            }), set: rsvm.RsCreateSetter("elementTiming", function elementTiming() {
                rsvm.set(this, "elementTiming", arguments[0]);
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
        role: {
            get: rsvm.RsCreateGetter("role", function role() {
                return rsvm.get(this, "role");
            }), set: rsvm.RsCreateSetter("role", function role() {
                rsvm.set(this, "role", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaAtomic: {
            get: rsvm.RsCreateGetter("ariaAtomic", function ariaAtomic() {
                return rsvm.get(this, "ariaAtomic");
            }), set: rsvm.RsCreateSetter("ariaAtomic", function ariaAtomic() {
                rsvm.set(this, "ariaAtomic", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaAutoComplete: {
            get: rsvm.RsCreateGetter("ariaAutoComplete", function ariaAutoComplete() {
                return rsvm.get(this, "ariaAutoComplete");
            }), set: rsvm.RsCreateSetter("ariaAutoComplete", function ariaAutoComplete() {
                rsvm.set(this, "ariaAutoComplete", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaBusy: {
            get: rsvm.RsCreateGetter("ariaBusy", function ariaBusy() {
                return rsvm.get(this, "ariaBusy");
            }), set: rsvm.RsCreateSetter("ariaBusy", function ariaBusy() {
                rsvm.set(this, "ariaBusy", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaBrailleLabel: {
            get: rsvm.RsCreateGetter("ariaBrailleLabel", function ariaBrailleLabel() {
                return rsvm.get(this, "ariaBrailleLabel");
            }), set: rsvm.RsCreateSetter("ariaBrailleLabel", function ariaBrailleLabel() {
                rsvm.set(this, "ariaBrailleLabel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaBrailleRoleDescription: {
            get: rsvm.RsCreateGetter("ariaBrailleRoleDescription", function ariaBrailleRoleDescription() {
                return rsvm.get(this, "ariaBrailleRoleDescription");
            }), set: rsvm.RsCreateSetter("ariaBrailleRoleDescription", function ariaBrailleRoleDescription() {
                rsvm.set(this, "ariaBrailleRoleDescription", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaChecked: {
            get: rsvm.RsCreateGetter("ariaChecked", function ariaChecked() {
                return rsvm.get(this, "ariaChecked");
            }), set: rsvm.RsCreateSetter("ariaChecked", function ariaChecked() {
                rsvm.set(this, "ariaChecked", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaColCount: {
            get: rsvm.RsCreateGetter("ariaColCount", function ariaColCount() {
                return rsvm.get(this, "ariaColCount");
            }), set: rsvm.RsCreateSetter("ariaColCount", function ariaColCount() {
                rsvm.set(this, "ariaColCount", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaColIndex: {
            get: rsvm.RsCreateGetter("ariaColIndex", function ariaColIndex() {
                return rsvm.get(this, "ariaColIndex");
            }), set: rsvm.RsCreateSetter("ariaColIndex", function ariaColIndex() {
                rsvm.set(this, "ariaColIndex", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaColSpan: {
            get: rsvm.RsCreateGetter("ariaColSpan", function ariaColSpan() {
                return rsvm.get(this, "ariaColSpan");
            }), set: rsvm.RsCreateSetter("ariaColSpan", function ariaColSpan() {
                rsvm.set(this, "ariaColSpan", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaCurrent: {
            get: rsvm.RsCreateGetter("ariaCurrent", function ariaCurrent() {
                return rsvm.get(this, "ariaCurrent");
            }), set: rsvm.RsCreateSetter("ariaCurrent", function ariaCurrent() {
                rsvm.set(this, "ariaCurrent", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaDescription: {
            get: rsvm.RsCreateGetter("ariaDescription", function ariaDescription() {
                return rsvm.get(this, "ariaDescription");
            }), set: rsvm.RsCreateSetter("ariaDescription", function ariaDescription() {
                rsvm.set(this, "ariaDescription", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaDisabled: {
            get: rsvm.RsCreateGetter("ariaDisabled", function ariaDisabled() {
                return rsvm.get(this, "ariaDisabled");
            }), set: rsvm.RsCreateSetter("ariaDisabled", function ariaDisabled() {
                rsvm.set(this, "ariaDisabled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaExpanded: {
            get: rsvm.RsCreateGetter("ariaExpanded", function ariaExpanded() {
                return rsvm.get(this, "ariaExpanded");
            }), set: rsvm.RsCreateSetter("ariaExpanded", function ariaExpanded() {
                rsvm.set(this, "ariaExpanded", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaHasPopup: {
            get: rsvm.RsCreateGetter("ariaHasPopup", function ariaHasPopup() {
                return rsvm.get(this, "ariaHasPopup");
            }), set: rsvm.RsCreateSetter("ariaHasPopup", function ariaHasPopup() {
                rsvm.set(this, "ariaHasPopup", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaHidden: {
            get: rsvm.RsCreateGetter("ariaHidden", function ariaHidden() {
                return rsvm.get(this, "ariaHidden");
            }), set: rsvm.RsCreateSetter("ariaHidden", function ariaHidden() {
                rsvm.set(this, "ariaHidden", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaInvalid: {
            get: rsvm.RsCreateGetter("ariaInvalid", function ariaInvalid() {
                return rsvm.get(this, "ariaInvalid");
            }), set: rsvm.RsCreateSetter("ariaInvalid", function ariaInvalid() {
                rsvm.set(this, "ariaInvalid", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaKeyShortcuts: {
            get: rsvm.RsCreateGetter("ariaKeyShortcuts", function ariaKeyShortcuts() {
                return rsvm.get(this, "ariaKeyShortcuts");
            }), set: rsvm.RsCreateSetter("ariaKeyShortcuts", function ariaKeyShortcuts() {
                rsvm.set(this, "ariaKeyShortcuts", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaLabel: {
            get: rsvm.RsCreateGetter("ariaLabel", function ariaLabel() {
                return rsvm.get(this, "ariaLabel");
            }), set: rsvm.RsCreateSetter("ariaLabel", function ariaLabel() {
                rsvm.set(this, "ariaLabel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaLevel: {
            get: rsvm.RsCreateGetter("ariaLevel", function ariaLevel() {
                return rsvm.get(this, "ariaLevel");
            }), set: rsvm.RsCreateSetter("ariaLevel", function ariaLevel() {
                rsvm.set(this, "ariaLevel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaLive: {
            get: rsvm.RsCreateGetter("ariaLive", function ariaLive() {
                return rsvm.get(this, "ariaLive");
            }), set: rsvm.RsCreateSetter("ariaLive", function ariaLive() {
                rsvm.set(this, "ariaLive", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaModal: {
            get: rsvm.RsCreateGetter("ariaModal", function ariaModal() {
                return rsvm.get(this, "ariaModal");
            }), set: rsvm.RsCreateSetter("ariaModal", function ariaModal() {
                rsvm.set(this, "ariaModal", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaMultiLine: {
            get: rsvm.RsCreateGetter("ariaMultiLine", function ariaMultiLine() {
                return rsvm.get(this, "ariaMultiLine");
            }), set: rsvm.RsCreateSetter("ariaMultiLine", function ariaMultiLine() {
                rsvm.set(this, "ariaMultiLine", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaMultiSelectable: {
            get: rsvm.RsCreateGetter("ariaMultiSelectable", function ariaMultiSelectable() {
                return rsvm.get(this, "ariaMultiSelectable");
            }), set: rsvm.RsCreateSetter("ariaMultiSelectable", function ariaMultiSelectable() {
                rsvm.set(this, "ariaMultiSelectable", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaOrientation: {
            get: rsvm.RsCreateGetter("ariaOrientation", function ariaOrientation() {
                return rsvm.get(this, "ariaOrientation");
            }), set: rsvm.RsCreateSetter("ariaOrientation", function ariaOrientation() {
                rsvm.set(this, "ariaOrientation", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaPlaceholder: {
            get: rsvm.RsCreateGetter("ariaPlaceholder", function ariaPlaceholder() {
                return rsvm.get(this, "ariaPlaceholder");
            }), set: rsvm.RsCreateSetter("ariaPlaceholder", function ariaPlaceholder() {
                rsvm.set(this, "ariaPlaceholder", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaPosInSet: {
            get: rsvm.RsCreateGetter("ariaPosInSet", function ariaPosInSet() {
                return rsvm.get(this, "ariaPosInSet");
            }), set: rsvm.RsCreateSetter("ariaPosInSet", function ariaPosInSet() {
                rsvm.set(this, "ariaPosInSet", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaPressed: {
            get: rsvm.RsCreateGetter("ariaPressed", function ariaPressed() {
                return rsvm.get(this, "ariaPressed");
            }), set: rsvm.RsCreateSetter("ariaPressed", function ariaPressed() {
                rsvm.set(this, "ariaPressed", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaReadOnly: {
            get: rsvm.RsCreateGetter("ariaReadOnly", function ariaReadOnly() {
                return rsvm.get(this, "ariaReadOnly");
            }), set: rsvm.RsCreateSetter("ariaReadOnly", function ariaReadOnly() {
                rsvm.set(this, "ariaReadOnly", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaRelevant: {
            get: rsvm.RsCreateGetter("ariaRelevant", function ariaRelevant() {
                return rsvm.get(this, "ariaRelevant");
            }), set: rsvm.RsCreateSetter("ariaRelevant", function ariaRelevant() {
                rsvm.set(this, "ariaRelevant", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaRequired: {
            get: rsvm.RsCreateGetter("ariaRequired", function ariaRequired() {
                return rsvm.get(this, "ariaRequired");
            }), set: rsvm.RsCreateSetter("ariaRequired", function ariaRequired() {
                rsvm.set(this, "ariaRequired", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaRoleDescription: {
            get: rsvm.RsCreateGetter("ariaRoleDescription", function ariaRoleDescription() {
                return rsvm.get(this, "ariaRoleDescription");
            }), set: rsvm.RsCreateSetter("ariaRoleDescription", function ariaRoleDescription() {
                rsvm.set(this, "ariaRoleDescription", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaRowCount: {
            get: rsvm.RsCreateGetter("ariaRowCount", function ariaRowCount() {
                return rsvm.get(this, "ariaRowCount");
            }), set: rsvm.RsCreateSetter("ariaRowCount", function ariaRowCount() {
                rsvm.set(this, "ariaRowCount", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaRowIndex: {
            get: rsvm.RsCreateGetter("ariaRowIndex", function ariaRowIndex() {
                return rsvm.get(this, "ariaRowIndex");
            }), set: rsvm.RsCreateSetter("ariaRowIndex", function ariaRowIndex() {
                rsvm.set(this, "ariaRowIndex", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaRowSpan: {
            get: rsvm.RsCreateGetter("ariaRowSpan", function ariaRowSpan() {
                return rsvm.get(this, "ariaRowSpan");
            }), set: rsvm.RsCreateSetter("ariaRowSpan", function ariaRowSpan() {
                rsvm.set(this, "ariaRowSpan", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaSelected: {
            get: rsvm.RsCreateGetter("ariaSelected", function ariaSelected() {
                return rsvm.get(this, "ariaSelected");
            }), set: rsvm.RsCreateSetter("ariaSelected", function ariaSelected() {
                rsvm.set(this, "ariaSelected", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaSetSize: {
            get: rsvm.RsCreateGetter("ariaSetSize", function ariaSetSize() {
                return rsvm.get(this, "ariaSetSize");
            }), set: rsvm.RsCreateSetter("ariaSetSize", function ariaSetSize() {
                rsvm.set(this, "ariaSetSize", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaSort: {
            get: rsvm.RsCreateGetter("ariaSort", function ariaSort() {
                return rsvm.get(this, "ariaSort");
            }), set: rsvm.RsCreateSetter("ariaSort", function ariaSort() {
                rsvm.set(this, "ariaSort", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaValueMax: {
            get: rsvm.RsCreateGetter("ariaValueMax", function ariaValueMax() {
                return rsvm.get(this, "ariaValueMax");
            }), set: rsvm.RsCreateSetter("ariaValueMax", function ariaValueMax() {
                rsvm.set(this, "ariaValueMax", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaValueMin: {
            get: rsvm.RsCreateGetter("ariaValueMin", function ariaValueMin() {
                return rsvm.get(this, "ariaValueMin");
            }), set: rsvm.RsCreateSetter("ariaValueMin", function ariaValueMin() {
                rsvm.set(this, "ariaValueMin", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaValueNow: {
            get: rsvm.RsCreateGetter("ariaValueNow", function ariaValueNow() {
                return rsvm.get(this, "ariaValueNow");
            }), set: rsvm.RsCreateSetter("ariaValueNow", function ariaValueNow() {
                rsvm.set(this, "ariaValueNow", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ariaValueText: {
            get: rsvm.RsCreateGetter("ariaValueText", function ariaValueText() {
                return rsvm.get(this, "ariaValueText");
            }), set: rsvm.RsCreateSetter("ariaValueText", function ariaValueText() {
                rsvm.set(this, "ariaValueText", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        children: {
            get: rsvm.RsCreateGetter("children", function children() {
                return rsvm.get(this, "children");
            }), set: undefined, enumerable: true, configurable: true,
        },
        firstElementChild: {
            get: rsvm.RsCreateGetter("firstElementChild", function firstElementChild() {
                if (this.children.length !== 0) {
                    return this.children[0];
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        lastElementChild: {
            get: rsvm.RsCreateGetter("lastElementChild", function lastElementChild() {
                if (this.children.length !== 0) {
                    return this.children[this.children.length - 1];
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        childElementCount: {
            get: rsvm.RsCreateGetter("childElementCount", function childElementCount() {
                return this.children.length;
            }), set: undefined, enumerable: true, configurable: true,
        },
        previousElementSibling: {
            get: rsvm.RsCreateGetter("previousElementSibling", function previousElementSibling() {
                let value = null;
                if (this.parentNode !== null) {
                    let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                    let flag = false;
                    for (const node of nodeArray.toReversed()) {
                        if (node.nodeType == 1) {
                            if (flag) {
                                value = node; break;
                            }
                            if (node === this) { flag = true; }
                        }
                    }
                }
                return value;
            }), set: undefined, enumerable: true, configurable: true,
        },
        nextElementSibling: {
            get: rsvm.RsCreateGetter("nextElementSibling", function nextElementSibling() {
                let value = null;
                if (this.parentNode !== null) {
                    let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                    let flag = false;
                    for (const node of nodeArray) {
                        if (node.nodeType == 1) {
                            if (flag) {
                                value = node; break;
                            }
                            if (node === this) { flag = true; }
                        }
                    }
                }
                return value;
            }), set: undefined, enumerable: true, configurable: true,
        },
        after: {
            value: rsvm.RsCreateAction("after", 0, function after() {
            }), writable: true, enumerable: true, configurable: true,
        },
        animate: {
            value: rsvm.RsCreateAction("animate", 1, function animate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        append: {
            value: rsvm.RsCreateAction("append", 0, function append() {
                let newNode = arguments[0];
                if ("string" === typeof newNode) {
                    let textNode = rsvm.prototype.Text.new(newNode);
                    rsvm.set(textNode, "parentNode", this);
                    rsvm.RsGetPrivateProperty(this, "nodeArray").push(textNode);
                }
                else if (Array.isArray(newNode)) {
                    for (const node of newNode) {
                        this.append(node);
                    }
                } else if (newNode instanceof Node) {
                    rsvm.set(newNode, "parentNode", this);
                    if (newNode.nodeType === 1) {
                        rsvm.set(newNode, "parentElement", this);
                    }
                    rsvm.RsGetPrivateProperty(this, "nodeArray").push(newNode);
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        attachShadow: {
            value: rsvm.RsCreateAction("attachShadow", 1, function attachShadow() {
            }), writable: true, enumerable: true, configurable: true,
        },
        before: {
            value: rsvm.RsCreateAction("before", 0, function before() {
            }), writable: true, enumerable: true, configurable: true,
        },
        closest: {
            value: rsvm.RsCreateAction("closest", 1, function closest() {
            }), writable: true, enumerable: true, configurable: true,
        },
        computedStyleMap: {
            value: rsvm.RsCreateAction("computedStyleMap", 0, function computedStyleMap() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttribute: {
            value: rsvm.RsCreateAction("getAttribute", 1, function getAttribute() {
                let value = null;
                if (Object.hasOwn(this.attributes, arguments[0])) {
                    value = this.attributes[arguments[0]].value;
                }
                return value;
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttributeNS: {
            value: rsvm.RsCreateAction("getAttributeNS", 2, function getAttributeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttributeNames: {
            value: rsvm.RsCreateAction("getAttributeNames", 0, function getAttributeNames() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttributeNode: {
            value: rsvm.RsCreateAction("getAttributeNode", 1, function getAttributeNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttributeNodeNS: {
            value: rsvm.RsCreateAction("getAttributeNodeNS", 2, function getAttributeNodeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getBoundingClientRect: {
            value: rsvm.RsCreateAction("getBoundingClientRect", 0, function getBoundingClientRect() {
                let pos = rsvm.prototype.DOMRect.new();
                switch (rsvm.siteInfo.version) {
                    case "226":
                        pos = rsvm.rect_226;
                        break;
                    case "227":
                        if (this.id == "nc_1_n1t"){
                            rsvm.set(pos, "bottom", 340.4375);
                            rsvm.set(pos, "height", 48);
                            rsvm.set(pos, "left", 831);
                            rsvm.set(pos, "right", 1131);
                            rsvm.set(pos, "top", 292.4375);
                            rsvm.set(pos, "width", 300);
                            rsvm.set(pos, "x", 831);
                            rsvm.set(pos, "y", 292.4375);
                        }else if (this.id == "nc_1_n1z"){
                            pos = rsvm.data.rect_227;
                        }
                        break;
                    case "rs6_yaojian":
                        rsvm.set(pos, "bottom", 587.375);
                        rsvm.set(pos, "height", 32.171875);
                        rsvm.set(pos, "left", 294);
                        rsvm.set(pos, "right", 578);
                        rsvm.set(pos, "top", 555.203125);
                        rsvm.set(pos, "width", 284);
                        rsvm.set(pos, "x", 294);
                        rsvm.set(pos, "y", 555.203125);
                        break;
                }
                return pos;
            }), writable: true, enumerable: true, configurable: true,
        },
        getClientRects: {
            value: rsvm.RsCreateAction("getClientRects", 0, function getClientRects() {
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
                    Object.setPrototypeOf(obj, HTMLCollection.prototype);
                    rsvm.RsSetPrivateProperty(obj, "__memory__", {});
                    memory[keyword] = obj;
                }
                return memory[keyword];
            }), writable: true, enumerable: true, configurable: true,
        },
        getElementsByTagNameNS: {
            value: rsvm.RsCreateAction("getElementsByTagNameNS", 2, function getElementsByTagNameNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getInnerHTML: {
            value: rsvm.RsCreateAction("getInnerHTML", 0, function getInnerHTML() {
                let text = "";
                for (const node of this.childNodes) {
                    if (node.nodeType === 3) {
                        text += node.data;
                    } else if (node.nodeType === 1) {
                        text += node.outerHTML;
                    }
                }
                return text;
            }), writable: true, enumerable: true, configurable: true,
        },
        hasAttribute: {
            value: rsvm.RsCreateAction("hasAttribute", 1, function hasAttribute() {
                return Object.hasOwn(this.attributes, arguments[0]);
            }), writable: true, enumerable: true, configurable: true,
        },
        hasAttributeNS: {
            value: rsvm.RsCreateAction("hasAttributeNS", 2, function hasAttributeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasAttributes: {
            value: rsvm.RsCreateAction("hasAttributes", 0, function hasAttributes() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hasPointerCapture: {
            value: rsvm.RsCreateAction("hasPointerCapture", 1, function hasPointerCapture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        insertAdjacentElement: {
            value: rsvm.RsCreateAction("insertAdjacentElement", 2, function insertAdjacentElement() {
            }), writable: true, enumerable: true, configurable: true,
        },
        insertAdjacentHTML: {
            value: rsvm.RsCreateAction("insertAdjacentHTML", 2, function insertAdjacentHTML() {
            }), writable: true, enumerable: true, configurable: true,
        },
        insertAdjacentText: {
            value: rsvm.RsCreateAction("insertAdjacentText", 2, function insertAdjacentText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        matches: {
            value: rsvm.RsCreateAction("matches", 1, function matches() {
            }), writable: true, enumerable: true, configurable: true,
        },
        prepend: {
            value: rsvm.RsCreateAction("prepend", 0, function prepend() {
                let content = arguments[0];
                if ("string" === typeof content) {
                    let textNode = rsvm.prototype.Text.new(content);
                    rsvm.set(textNode, "parentNode", this);
                    rsvm.RsGetPrivateProperty(this, "nodeArray").splice(0, 0, textNode);
                }
                else if (Array.isArray(content)) {
                    for (const node of content) {
                        this.prepend(node);
                    }
                } else if (content instanceof Node) {
                    rsvm.set(content, "parentNode", this);
                    if (content.nodeType === 1) {
                        rsvm.set(content, "parentElement", this);
                    }
                    rsvm.RsGetPrivateProperty(this, "nodeArray").splice(0, 0, content);
                }
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
                return null;
            }), writable: true, enumerable: true, configurable: true,
        },
        querySelectorAll: {
            value: rsvm.RsCreateAction("querySelectorAll", 1, function querySelectorAll() {
            }), writable: true, enumerable: true, configurable: true,
        },
        releasePointerCapture: {
            value: rsvm.RsCreateAction("releasePointerCapture", 1, function releasePointerCapture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        remove: {
            value: rsvm.RsCreateAction("remove", 0, function remove() {
                if (this.parentNode !== null) {
                    let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                    let index = nodeArray.indexOf(this);
                    if (index != -1) {
                        nodeArray.splice(index, 0, this);
                        rsvm.set(this, "parentNode", null);
                        rsvm.set(this, "parentElement", null);
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        removeAttribute: {
            value: rsvm.RsCreateAction("removeAttribute", 1, function removeAttribute() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeAttributeNS: {
            value: rsvm.RsCreateAction("removeAttributeNS", 2, function removeAttributeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeAttributeNode: {
            value: rsvm.RsCreateAction("removeAttributeNode", 1, function removeAttributeNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceChildren: {
            value: rsvm.RsCreateAction("replaceChildren", 0, function replaceChildren() {
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceWith: {
            value: rsvm.RsCreateAction("replaceWith", 0, function replaceWith() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestFullscreen: {
            value: rsvm.RsCreateAction("requestFullscreen", 0, function requestFullscreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        requestPointerLock: {
            value: rsvm.RsCreateAction("requestPointerLock", 0, function requestPointerLock() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scroll: {
            value: rsvm.RsCreateAction("scroll", 0, function scroll() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scrollBy: {
            value: rsvm.RsCreateAction("scrollBy", 0, function scrollBy() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scrollIntoView: {
            value: rsvm.RsCreateAction("scrollIntoView", 0, function scrollIntoView() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scrollIntoViewIfNeeded: {
            value: rsvm.RsCreateAction("scrollIntoViewIfNeeded", 0, function scrollIntoViewIfNeeded() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scrollTo: {
            value: rsvm.RsCreateAction("scrollTo", 0, function scrollTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setAttribute: {
            value: rsvm.RsCreateAction("setAttribute", 2, function setAttribute() {
                let key = arguments[0].toLocaleLowerCase();
                if (Object.hasOwn(this.attributes, key)) {
                    let target = this.attributes[key];
                    rsvm.set(target, "value", "" + arguments[1]);
                    rsvm.set(target, "textContent", "" + arguments[1]);
                    rsvm.set(target, "nodeValue", "" + arguments[1]);
                } else {
                    let attrNode = rsvm.prototype.Attr.new(key, "" + arguments[1]);
                    Object.defineProperty(this.attributes, this.attributes.length, { value: attrNode, writable: false, enumerable: true, configurable: true });
                    Object.defineProperty(this.attributes, key, { value: attrNode, writable: false, enumerable: false, configurable: true });
                    rsvm.set(attrNode, "ownerElement", this);
                    rsvm.set(attrNode, "ownerDocument", this.ownerDocument);
                }
                if (key === "id") {
                    rsvm.set(this, "id", arguments[1]);
                } else if (key === "class") {
                    rsvm.set(this, "className", arguments[1]);
                } else if (this[Symbol.toStringTag] == "HTMLCanvasElement") {
                    if (["width", "height"].includes(key)) {
                        rsvm.set(this, key, arguments[1]);
                    }
                } else if (this[Symbol.toStringTag] == "HTMLAnchorElement") {
                    if (["href"].includes(key)) {
                        // rsvm.set(this, key, arguments[1]);
                        this.href = arguments[1];
                    }
                } else if (this[Symbol.toStringTag] == "HTMLMetaElement") {
                    if (["content"].includes(key)) {
                        rsvm.set(this, key, arguments[1]);
                    }
                } else if (this[Symbol.toStringTag] == "HTMLScriptElement") {
                    if (["src", "type"].includes(key)) {
                        rsvm.set(this, key, arguments[1]);
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        setAttributeNS: {
            value: rsvm.RsCreateAction("setAttributeNS", 3, function setAttributeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setAttributeNode: {
            value: rsvm.RsCreateAction("setAttributeNode", 1, function setAttributeNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setAttributeNodeNS: {
            value: rsvm.RsCreateAction("setAttributeNodeNS", 1, function setAttributeNodeNS() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setPointerCapture: {
            value: rsvm.RsCreateAction("setPointerCapture", 1, function setPointerCapture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        toggleAttribute: {
            value: rsvm.RsCreateAction("toggleAttribute", 1, function toggleAttribute() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitMatchesSelector: {
            value: rsvm.RsCreateAction("webkitMatchesSelector", 1, function webkitMatchesSelector() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitRequestFullScreen: {
            value: rsvm.RsCreateAction("webkitRequestFullScreen", 0, function webkitRequestFullScreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        webkitRequestFullscreen: {
            value: rsvm.RsCreateAction("webkitRequestFullscreen", 0, function webkitRequestFullscreen() {
            }), writable: true, enumerable: true, configurable: true,
        },
        checkVisibility: {
            value: rsvm.RsCreateAction("checkVisibility", 0, function checkVisibility() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAnimations: {
            value: rsvm.RsCreateAction("getAnimations", 0, function getAnimations() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Element },
        setHTML: {
            value: rsvm.RsCreateAction("setHTML", 1, function setHTML() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Element", writable: false, enumerable: false, configurable: true, },
        [Symbol.unscopables]: { value: { after: true, append: true, before: true, prepend: true, remove: true, replaceChildren: true, replaceWith: true, slot: true, }, writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Element, Node);
    Object.setPrototypeOf(Element.prototype, Node.prototype);
}();