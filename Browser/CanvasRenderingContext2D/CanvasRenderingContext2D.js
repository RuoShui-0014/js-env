!function () {
    Object.defineProperty(window, "CanvasRenderingContext2D", {
        value: rsvm.RsCreateConstructor("CanvasRenderingContext2D"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CanvasRenderingContext2D = {
        memory: {
            canvas: null,
            globalAlpha: 1,
            globalCompositeOperation: "source-over",
            filter: "none",
            imageSmoothingEnabled: true,
            imageSmoothingQuality: "low",
            strokeStyle: "#000000",
            fillStyle: "#000000",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 0,
            shadowColor: "rgba(0, 0, 0, 0)",
            lineWidth: 1,
            lineCap: "butt",
            lineJoin: "miter",
            miterLimit: 10,
            lineDashOffset: 0,
            font: "10px sans-serif",
            textAlign: "start",
            textBaseline: "alphabetic",
            direction: "ltr",
            fontKerning: "auto",
            fontStretch: "normal",
            fontVariantCaps: "normal",
            letterSpacing: "0px",
            textRendering: "auto",
            wordSpacing: "0px",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("CanvasRenderingContext2D", target);
        },
        new(canvas) {
            let obj = rsvm.RsCreate(CanvasRenderingContext2D.prototype);
            rsvm.set(obj, "canvas", canvas);
            return obj;
        },
    };

    Object.defineProperties(CanvasRenderingContext2D, {
        prototype: { value: CanvasRenderingContext2D.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CanvasRenderingContext2D.prototype, {
        canvas: {
            get: rsvm.RsCreateGetter("canvas", function canvas() {
                return rsvm.get(this, "canvas");
            }), set: undefined, enumerable: true, configurable: true,
        },
        globalAlpha: {
            get: rsvm.RsCreateGetter("globalAlpha", function globalAlpha() {
                return rsvm.get(this, "globalAlpha");
            }), set: rsvm.RsCreateSetter("globalAlpha", function globalAlpha() {
                rsvm.set(this, "globalAlpha", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        globalCompositeOperation: {
            get: rsvm.RsCreateGetter("globalCompositeOperation", function globalCompositeOperation() {
                return rsvm.get(this, "globalCompositeOperation");
            }), set: rsvm.RsCreateSetter("globalCompositeOperation", function globalCompositeOperation() {
                rsvm.set(this, "globalCompositeOperation", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        filter: {
            get: rsvm.RsCreateGetter("filter", function filter() {
                return rsvm.get(this, "filter");
            }), set: rsvm.RsCreateSetter("filter", function filter() {
                rsvm.set(this, "filter", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        imageSmoothingEnabled: {
            get: rsvm.RsCreateGetter("imageSmoothingEnabled", function imageSmoothingEnabled() {
                return rsvm.get(this, "imageSmoothingEnabled");
            }), set: rsvm.RsCreateSetter("imageSmoothingEnabled", function imageSmoothingEnabled() {
                rsvm.set(this, "imageSmoothingEnabled", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        imageSmoothingQuality: {
            get: rsvm.RsCreateGetter("imageSmoothingQuality", function imageSmoothingQuality() {
                return rsvm.get(this, "imageSmoothingQuality");
            }), set: rsvm.RsCreateSetter("imageSmoothingQuality", function imageSmoothingQuality() {
                rsvm.set(this, "imageSmoothingQuality", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        strokeStyle: {
            get: rsvm.RsCreateGetter("strokeStyle", function strokeStyle() {
                return rsvm.get(this, "strokeStyle");
            }), set: rsvm.RsCreateSetter("strokeStyle", function strokeStyle() {
                rsvm.set(this, "strokeStyle", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fillStyle: {
            get: rsvm.RsCreateGetter("fillStyle", function fillStyle() {
                return rsvm.get(this, "fillStyle");
            }), set: rsvm.RsCreateSetter("fillStyle", function fillStyle() {
                rsvm.set(this, "fillStyle", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        shadowOffsetX: {
            get: rsvm.RsCreateGetter("shadowOffsetX", function shadowOffsetX() {
                return rsvm.get(this, "shadowOffsetX");
            }), set: rsvm.RsCreateSetter("shadowOffsetX", function shadowOffsetX() {
                rsvm.set(this, "shadowOffsetX", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        shadowOffsetY: {
            get: rsvm.RsCreateGetter("shadowOffsetY", function shadowOffsetY() {
                return rsvm.get(this, "shadowOffsetY");
            }), set: rsvm.RsCreateSetter("shadowOffsetY", function shadowOffsetY() {
                rsvm.set(this, "shadowOffsetY", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        shadowBlur: {
            get: rsvm.RsCreateGetter("shadowBlur", function shadowBlur() {
                return rsvm.get(this, "shadowBlur");
            }), set: rsvm.RsCreateSetter("shadowBlur", function shadowBlur() {
                rsvm.set(this, "shadowBlur", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        shadowColor: {
            get: rsvm.RsCreateGetter("shadowColor", function shadowColor() {
                return rsvm.get(this, "shadowColor");
            }), set: rsvm.RsCreateSetter("shadowColor", function shadowColor() {
                rsvm.set(this, "shadowColor", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lineWidth: {
            get: rsvm.RsCreateGetter("lineWidth", function lineWidth() {
                return rsvm.get(this, "lineWidth");
            }), set: rsvm.RsCreateSetter("lineWidth", function lineWidth() {
                rsvm.set(this, "lineWidth", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lineCap: {
            get: rsvm.RsCreateGetter("lineCap", function lineCap() {
                return rsvm.get(this, "lineCap");
            }), set: rsvm.RsCreateSetter("lineCap", function lineCap() {
                rsvm.set(this, "lineCap", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lineJoin: {
            get: rsvm.RsCreateGetter("lineJoin", function lineJoin() {
                return rsvm.get(this, "lineJoin");
            }), set: rsvm.RsCreateSetter("lineJoin", function lineJoin() {
                rsvm.set(this, "lineJoin", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        miterLimit: {
            get: rsvm.RsCreateGetter("miterLimit", function miterLimit() {
                return rsvm.get(this, "miterLimit");
            }), set: rsvm.RsCreateSetter("miterLimit", function miterLimit() {
                rsvm.set(this, "miterLimit", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        lineDashOffset: {
            get: rsvm.RsCreateGetter("lineDashOffset", function lineDashOffset() {
                return rsvm.get(this, "lineDashOffset");
            }), set: rsvm.RsCreateSetter("lineDashOffset", function lineDashOffset() {
                rsvm.set(this, "lineDashOffset", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        font: {
            get: rsvm.RsCreateGetter("font", function font() {
                return rsvm.get(this, "font");
            }), set: rsvm.RsCreateSetter("font", function font() {
                rsvm.set(this, "font", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        textAlign: {
            get: rsvm.RsCreateGetter("textAlign", function textAlign() {
                return rsvm.get(this, "textAlign");
            }), set: rsvm.RsCreateSetter("textAlign", function textAlign() {
                rsvm.set(this, "textAlign", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        textBaseline: {
            get: rsvm.RsCreateGetter("textBaseline", function textBaseline() {
                return rsvm.get(this, "textBaseline");
            }), set: rsvm.RsCreateSetter("textBaseline", function textBaseline() {
                rsvm.set(this, "textBaseline", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        direction: {
            get: rsvm.RsCreateGetter("direction", function direction() {
                return rsvm.get(this, "direction");
            }), set: rsvm.RsCreateSetter("direction", function direction() {
                rsvm.set(this, "direction", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fontKerning: {
            get: rsvm.RsCreateGetter("fontKerning", function fontKerning() {
                return rsvm.get(this, "fontKerning");
            }), set: rsvm.RsCreateSetter("fontKerning", function fontKerning() {
                rsvm.set(this, "fontKerning", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fontStretch: {
            get: rsvm.RsCreateGetter("fontStretch", function fontStretch() {
                return rsvm.get(this, "fontStretch");
            }), set: rsvm.RsCreateSetter("fontStretch", function fontStretch() {
                rsvm.set(this, "fontStretch", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        fontVariantCaps: {
            get: rsvm.RsCreateGetter("fontVariantCaps", function fontVariantCaps() {
                return rsvm.get(this, "fontVariantCaps");
            }), set: rsvm.RsCreateSetter("fontVariantCaps", function fontVariantCaps() {
                rsvm.set(this, "fontVariantCaps", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        letterSpacing: {
            get: rsvm.RsCreateGetter("letterSpacing", function letterSpacing() {
                return rsvm.get(this, "letterSpacing");
            }), set: rsvm.RsCreateSetter("letterSpacing", function letterSpacing() {
                rsvm.set(this, "letterSpacing", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        textRendering: {
            get: rsvm.RsCreateGetter("textRendering", function textRendering() {
                return rsvm.get(this, "textRendering");
            }), set: rsvm.RsCreateSetter("textRendering", function textRendering() {
                rsvm.set(this, "textRendering", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        wordSpacing: {
            get: rsvm.RsCreateGetter("wordSpacing", function wordSpacing() {
                return rsvm.get(this, "wordSpacing");
            }), set: rsvm.RsCreateSetter("wordSpacing", function wordSpacing() {
                rsvm.set(this, "wordSpacing", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        clip: {
            value: rsvm.RsCreateAction("clip", 0, function clip() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createConicGradient: {
            value: rsvm.RsCreateAction("createConicGradient", 3, function createConicGradient() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createImageData: {
            value: rsvm.RsCreateAction("createImageData", 1, function createImageData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createLinearGradient: {
            value: rsvm.RsCreateAction("createLinearGradient", 4, function createLinearGradient() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createPattern: {
            value: rsvm.RsCreateAction("createPattern", 2, function createPattern() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createRadialGradient: {
            value: rsvm.RsCreateAction("createRadialGradient", 6, function createRadialGradient() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawFocusIfNeeded: {
            value: rsvm.RsCreateAction("drawFocusIfNeeded", 1, function drawFocusIfNeeded() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawImage: {
            value: rsvm.RsCreateAction("drawImage", 3, function drawImage() {
            }), writable: true, enumerable: true, configurable: true,
        },
        fill: {
            value: rsvm.RsCreateAction("fill", 0, function fill() {
            }), writable: true, enumerable: true, configurable: true,
        },
        fillText: {
            value: rsvm.RsCreateAction("fillText", 3, function fillText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getContextAttributes: {
            value: rsvm.RsCreateAction("getContextAttributes", 0, function getContextAttributes() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getImageData: {
            value: rsvm.RsCreateAction("getImageData", 4, function getImageData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getLineDash: {
            value: rsvm.RsCreateAction("getLineDash", 0, function getLineDash() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getTransform: {
            value: rsvm.RsCreateAction("getTransform", 0, function getTransform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isContextLost: {
            value: rsvm.RsCreateAction("isContextLost", 0, function isContextLost() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isPointInPath: {
            value: rsvm.RsCreateAction("isPointInPath", 2, function isPointInPath() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isPointInStroke: {
            value: rsvm.RsCreateAction("isPointInStroke", 2, function isPointInStroke() {
            }), writable: true, enumerable: true, configurable: true,
        },
        measureText: {
            value: rsvm.RsCreateAction("measureText", 1, function measureText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        putImageData: {
            value: rsvm.RsCreateAction("putImageData", 3, function putImageData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        reset: {
            value: rsvm.RsCreateAction("reset", 0, function reset() {
            }), writable: true, enumerable: true, configurable: true,
        },
        roundRect: {
            value: rsvm.RsCreateAction("roundRect", 4, function roundRect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        save: {
            value: rsvm.RsCreateAction("save", 0, function save() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scale: {
            value: rsvm.RsCreateAction("scale", 2, function scale() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setLineDash: {
            value: rsvm.RsCreateAction("setLineDash", 1, function setLineDash() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setTransform: {
            value: rsvm.RsCreateAction("setTransform", 0, function setTransform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stroke: {
            value: rsvm.RsCreateAction("stroke", 0, function stroke() {
            }), writable: true, enumerable: true, configurable: true,
        },
        strokeText: {
            value: rsvm.RsCreateAction("strokeText", 3, function strokeText() {
            }), writable: true, enumerable: true, configurable: true,
        },
        transform: {
            value: rsvm.RsCreateAction("transform", 6, function transform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        translate: {
            value: rsvm.RsCreateAction("translate", 2, function translate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        arc: {
            value: rsvm.RsCreateAction("arc", 5, function arc() {
            }), writable: true, enumerable: true, configurable: true,
        },
        arcTo: {
            value: rsvm.RsCreateAction("arcTo", 5, function arcTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        beginPath: {
            value: rsvm.RsCreateAction("beginPath", 0, function beginPath() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bezierCurveTo: {
            value: rsvm.RsCreateAction("bezierCurveTo", 6, function bezierCurveTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearRect: {
            value: rsvm.RsCreateAction("clearRect", 4, function clearRect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        closePath: {
            value: rsvm.RsCreateAction("closePath", 0, function closePath() {
            }), writable: true, enumerable: true, configurable: true,
        },
        ellipse: {
            value: rsvm.RsCreateAction("ellipse", 7, function ellipse() {
            }), writable: true, enumerable: true, configurable: true,
        },
        fillRect: {
            value: rsvm.RsCreateAction("fillRect", 4, function fillRect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        lineTo: {
            value: rsvm.RsCreateAction("lineTo", 2, function lineTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        moveTo: {
            value: rsvm.RsCreateAction("moveTo", 2, function moveTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        quadraticCurveTo: {
            value: rsvm.RsCreateAction("quadraticCurveTo", 4, function quadraticCurveTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        rect: {
            value: rsvm.RsCreateAction("rect", 4, function rect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        resetTransform: {
            value: rsvm.RsCreateAction("resetTransform", 0, function resetTransform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        restore: {
            value: rsvm.RsCreateAction("restore", 0, function restore() {
            }), writable: true, enumerable: true, configurable: true,
        },
        rotate: {
            value: rsvm.RsCreateAction("rotate", 1, function rotate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        strokeRect: {
            value: rsvm.RsCreateAction("strokeRect", 4, function strokeRect() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CanvasRenderingContext2D },
        [Symbol.toStringTag]: { value: "CanvasRenderingContext2D", writable: false, enumerable: false, configurable: true, },
    });
}();