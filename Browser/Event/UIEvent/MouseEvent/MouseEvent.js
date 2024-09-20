!function () {
    Object.defineProperty(window, "MouseEvent", {
        value: rsvm.RsCreateConstructor("MouseEvent", 1, function MouseEvent() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.MouseEvent.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MouseEvent = {
        memory: {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            shiftKey: false,
            altKey: false,
            metaKey: false,
            button: 0,
            buttons: 0,
            relatedTarget: null,
            pageX: 0,
            pageY: 0,
            x: 0,
            y: 0,
            offsetX: 0,
            offsetY: 0,
            movementX: 0,
            movementY: 0,
            fromElement: null,
            toElement: null,
            layerX: 0,
            layerY: 0,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MouseEvent", target);
        },
        new(type) {
            rsvm.error.checkEvent("MouseEvent", arguments);
            let obj = rsvm.RsCreate(MouseEvent.prototype);
            rsvm.set(obj, "isTrusted", false);
            Object.defineProperty(obj, "isTrusted", {
                get: rsvm.RsCreateGetter("isTrusted", function(){
                    return rsvm.get(this, "isTrusted");
                }), set: undefined, enumerable: true, configurable: false
            });
            if (arguments[1] != undefined){
                for (const key in arguments[1]){
                    rsvm.set(obj, key, arguments[1][key]);
                }
            }
            return obj;
        },
    };

    Object.defineProperties(MouseEvent, {
        prototype: { value: MouseEvent.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MouseEvent.prototype, {
        screenX: {
            get: rsvm.RsCreateGetter("screenX", function screenX() {
                return rsvm.get(this, "screenX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        screenY: {
            get: rsvm.RsCreateGetter("screenY", function screenY() {
                return rsvm.get(this, "screenY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientX: {
            get: rsvm.RsCreateGetter("clientX", function clientX() {
                return rsvm.get(this, "clientX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        clientY: {
            get: rsvm.RsCreateGetter("clientY", function clientY() {
                return rsvm.get(this, "clientY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ctrlKey: {
            get: rsvm.RsCreateGetter("ctrlKey", function ctrlKey() {
                return rsvm.get(this, "ctrlKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        shiftKey: {
            get: rsvm.RsCreateGetter("shiftKey", function shiftKey() {
                return rsvm.get(this, "shiftKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        altKey: {
            get: rsvm.RsCreateGetter("altKey", function altKey() {
                return rsvm.get(this, "altKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        metaKey: {
            get: rsvm.RsCreateGetter("metaKey", function metaKey() {
                return rsvm.get(this, "metaKey");
            }), set: undefined, enumerable: true, configurable: true,
        },
        button: {
            get: rsvm.RsCreateGetter("button", function button() {
                return rsvm.get(this, "button");
            }), set: undefined, enumerable: true, configurable: true,
        },
        buttons: {
            get: rsvm.RsCreateGetter("buttons", function buttons() {
                return rsvm.get(this, "buttons");
            }), set: undefined, enumerable: true, configurable: true,
        },
        relatedTarget: {
            get: rsvm.RsCreateGetter("relatedTarget", function relatedTarget() {
                return rsvm.get(this, "relatedTarget");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pageX: {
            get: rsvm.RsCreateGetter("pageX", function pageX() {
                return rsvm.get(this, "pageX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pageY: {
            get: rsvm.RsCreateGetter("pageY", function pageY() {
                return rsvm.get(this, "pageY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        x: {
            get: rsvm.RsCreateGetter("x", function x() {
                return rsvm.get(this, "x");
            }), set: undefined, enumerable: true, configurable: true,
        },
        y: {
            get: rsvm.RsCreateGetter("y", function y() {
                return rsvm.get(this, "y");
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetX: {
            get: rsvm.RsCreateGetter("offsetX", function offsetX() {
                return rsvm.get(this, "offsetX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        offsetY: {
            get: rsvm.RsCreateGetter("offsetY", function offsetY() {
                return rsvm.get(this, "offsetY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        movementX: {
            get: rsvm.RsCreateGetter("movementX", function movementX() {
                return rsvm.get(this, "movementX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        movementY: {
            get: rsvm.RsCreateGetter("movementY", function movementY() {
                return rsvm.get(this, "movementY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        fromElement: {
            get: rsvm.RsCreateGetter("fromElement", function fromElement() {
                return rsvm.get(this, "fromElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        toElement: {
            get: rsvm.RsCreateGetter("toElement", function toElement() {
                return rsvm.get(this, "toElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        layerX: {
            get: rsvm.RsCreateGetter("layerX", function layerX() {
                return rsvm.get(this, "layerX");
            }), set: undefined, enumerable: true, configurable: true,
        },
        layerY: {
            get: rsvm.RsCreateGetter("layerY", function layerY() {
                return rsvm.get(this, "layerY");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getModifierState: {
            value: rsvm.RsCreateAction("getModifierState", 1, function getModifierState() {
            }), writable: true, enumerable: true, configurable: true,
        },
        initMouseEvent: {
            value: rsvm.RsCreateAction("initMouseEvent", 1, function initMouseEvent() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MouseEvent },
        [Symbol.toStringTag]: { value: "MouseEvent", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(MouseEvent, UIEvent);
    Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
}();