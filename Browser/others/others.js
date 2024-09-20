!function () {
    Object.defineProperty(window, "DataTransferItemList", {
        value: rsvm.RsCreateConstructor("DataTransferItemList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DataTransferItemList = {
        memory: {
            length: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DataTransferItemList", target);
        },
        new() {
            let obj = rsvm.RsCreate(DataTransferItemList.prototype);
            return obj;
        },
    };

    Object.defineProperties(DataTransferItemList, {
        prototype: { value: DataTransferItemList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(DataTransferItemList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        add: { value: undefined, writable: true, enumerable: true, configurable: true, },
        clear: { value: undefined, writable: true, enumerable: true, configurable: true, },
        remove: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: DataTransferItemList },
        [Symbol.toStringTag]: { value: "DataTransferItemList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();


!function () {
    Object.defineProperty(window, "FileList", {
        value: rsvm.RsCreateConstructor("FileList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.FileList = {
        memory: {
            length: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("FileList", target);
        },
        new() {
            let obj = rsvm.RsCreate(FileList.prototype);
            return obj;
        },
    };

    Object.defineProperties(FileList, {
        prototype: { value: FileList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(FileList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        item: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: FileList },
        [Symbol.toStringTag]: { value: "FileList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();


!function () {
    Object.defineProperty(window, "ValidityState", {
        value: rsvm.RsCreateConstructor("ValidityState"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.ValidityState = {
        memory: {
            valueMissing: false,
            typeMismatch: false,
            patternMismatch: false,
            tooLong: false,
            tooShort: false,
            rangeUnderflow: false,
            rangeOverflow: false,
            stepMismatch: false,
            badInput: false,
            customError: false,
            valid: true,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("ValidityState", target);
        },
        new() {
            let obj = rsvm.RsCreate(ValidityState.prototype);
            return obj;
        },
    };

    Object.defineProperties(ValidityState, {
        prototype: { value: ValidityState.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(ValidityState.prototype, {
        valueMissing: {
            get: rsvm.RsCreateGetter("valueMissing", function valueMissing() {
                return rsvm.get(this, "valueMissing");
            }), set: undefined, enumerable: true, configurable: true,
        },
        typeMismatch: {
            get: rsvm.RsCreateGetter("typeMismatch", function typeMismatch() {
                return rsvm.get(this, "typeMismatch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        patternMismatch: {
            get: rsvm.RsCreateGetter("patternMismatch", function patternMismatch() {
                return rsvm.get(this, "patternMismatch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tooLong: {
            get: rsvm.RsCreateGetter("tooLong", function tooLong() {
                return rsvm.get(this, "tooLong");
            }), set: undefined, enumerable: true, configurable: true,
        },
        tooShort: {
            get: rsvm.RsCreateGetter("tooShort", function tooShort() {
                return rsvm.get(this, "tooShort");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rangeUnderflow: {
            get: rsvm.RsCreateGetter("rangeUnderflow", function rangeUnderflow() {
                return rsvm.get(this, "rangeUnderflow");
            }), set: undefined, enumerable: true, configurable: true,
        },
        rangeOverflow: {
            get: rsvm.RsCreateGetter("rangeOverflow", function rangeOverflow() {
                return rsvm.get(this, "rangeOverflow");
            }), set: undefined, enumerable: true, configurable: true,
        },
        stepMismatch: {
            get: rsvm.RsCreateGetter("stepMismatch", function stepMismatch() {
                return rsvm.get(this, "stepMismatch");
            }), set: undefined, enumerable: true, configurable: true,
        },
        badInput: {
            get: rsvm.RsCreateGetter("badInput", function badInput() {
                return rsvm.get(this, "badInput");
            }), set: undefined, enumerable: true, configurable: true,
        },
        customError: {
            get: rsvm.RsCreateGetter("customError", function customError() {
                return rsvm.get(this, "customError");
            }), set: undefined, enumerable: true, configurable: true,
        },
        valid: {
            get: rsvm.RsCreateGetter("valid", function valid() {
                return rsvm.get(this, "valid");
            }), set: undefined, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: ValidityState },
        [Symbol.toStringTag]: { value: "ValidityState", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    Object.defineProperty(window, "MediaList", {
        value: rsvm.RsCreateConstructor("MediaList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.MediaList = {
        memory: {
            length: undefined,
            mediaText: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("MediaList", target);
        },
        new() {
            let obj = rsvm.RsCreate(MediaList.prototype);
            return obj;
        },
    };

    Object.defineProperties(MediaList, {
        prototype: { value: MediaList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(MediaList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        mediaText: {
            get: rsvm.RsCreateGetter("mediaText", function mediaText() {
                return rsvm.get(this, "mediaText");
            }), set: rsvm.RsCreateSetter("mediaText", function mediaText() {
                rsvm.set(this, "mediaText", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        appendMedium: { value: undefined, writable: true, enumerable: true, configurable: true, },
        deleteMedium: { value: undefined, writable: true, enumerable: true, configurable: true, },
        item: { value: undefined, writable: true, enumerable: true, configurable: true, },
        toString: {
            value: rsvm.RsCreateAction("toString", 0, function toString() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: MediaList },
        [Symbol.toStringTag]: { value: "MediaList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();




!function () {
    Object.defineProperty(window, "SVGLengthList", {
        value: rsvm.RsCreateConstructor("SVGLengthList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SVGLengthList = {
        memory: {
            length: undefined,
            numberOfItems: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SVGLengthList", target);
        },
        new() {
            let obj = rsvm.RsCreate(SVGLengthList.prototype);
            return obj;
        },
    };

    Object.defineProperties(SVGLengthList, {
        prototype: { value: SVGLengthList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SVGLengthList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        numberOfItems: {
            get: rsvm.RsCreateGetter("numberOfItems", function numberOfItems() {
                return rsvm.get(this, "numberOfItems");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appendItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        clear: { value: undefined, writable: true, enumerable: true, configurable: true, },
        getItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        initialize: { value: undefined, writable: true, enumerable: true, configurable: true, },
        insertItemBefore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        removeItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        replaceItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: SVGLengthList },
        [Symbol.toStringTag]: { value: "SVGLengthList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();


!function () {
    Object.defineProperty(window, "SVGNumberList", {
        value: rsvm.RsCreateConstructor("SVGNumberList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SVGNumberList = {
        memory: {
            length: undefined,
            numberOfItems: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SVGNumberList", target);
        },
        new() {
            let obj = rsvm.RsCreate(SVGNumberList.prototype);
            return obj;
        },
    };

    Object.defineProperties(SVGNumberList, {
        prototype: { value: SVGNumberList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SVGNumberList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        numberOfItems: {
            get: rsvm.RsCreateGetter("numberOfItems", function numberOfItems() {
                return rsvm.get(this, "numberOfItems");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appendItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        clear: { value: undefined, writable: true, enumerable: true, configurable: true, },
        getItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        initialize: { value: undefined, writable: true, enumerable: true, configurable: true, },
        insertItemBefore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        removeItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        replaceItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: SVGNumberList },
        [Symbol.toStringTag]: { value: "SVGNumberList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();



!function () {
    Object.defineProperty(window, "SVGPointList", {
        value: rsvm.RsCreateConstructor("SVGPointList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SVGPointList = {
        memory: {
            length: undefined,
            numberOfItems: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SVGPointList", target);
        },
        new() {
            let obj = rsvm.RsCreate(SVGPointList.prototype);
            return obj;
        },
    };

    Object.defineProperties(SVGPointList, {
        prototype: { value: SVGPointList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SVGPointList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        numberOfItems: {
            get: rsvm.RsCreateGetter("numberOfItems", function numberOfItems() {
                return rsvm.get(this, "numberOfItems");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appendItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        clear: { value: undefined, writable: true, enumerable: true, configurable: true, },
        getItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        initialize: { value: undefined, writable: true, enumerable: true, configurable: true, },
        insertItemBefore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        removeItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        replaceItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: SVGPointList },
        [Symbol.toStringTag]: { value: "SVGPointList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();



!function () {
    Object.defineProperty(window, "SVGStringList", {
        value: rsvm.RsCreateConstructor("SVGStringList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SVGStringList = {
        memory: {
            length: undefined,
            numberOfItems: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SVGStringList", target);
        },
        new() {
            let obj = rsvm.RsCreate(SVGStringList.prototype);
            return obj;
        },
    };

    Object.defineProperties(SVGStringList, {
        prototype: { value: SVGStringList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SVGStringList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        numberOfItems: {
            get: rsvm.RsCreateGetter("numberOfItems", function numberOfItems() {
                return rsvm.get(this, "numberOfItems");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appendItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        clear: { value: undefined, writable: true, enumerable: true, configurable: true, },
        getItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        initialize: { value: undefined, writable: true, enumerable: true, configurable: true, },
        insertItemBefore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        removeItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        replaceItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: SVGStringList },
        [Symbol.toStringTag]: { value: "SVGStringList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();


!function () {
    Object.defineProperty(window, "SVGTransformList", {
        value: rsvm.RsCreateConstructor("SVGTransformList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SVGTransformList = {
        memory: {
            length: undefined,
            numberOfItems: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("SVGTransformList", target);
        },
        new() {
            let obj = rsvm.RsCreate(SVGTransformList.prototype);
            return obj;
        },
    };

    Object.defineProperties(SVGTransformList, {
        prototype: { value: SVGTransformList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SVGTransformList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        numberOfItems: {
            get: rsvm.RsCreateGetter("numberOfItems", function numberOfItems() {
                return rsvm.get(this, "numberOfItems");
            }), set: undefined, enumerable: true, configurable: true,
        },
        appendItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        clear: { value: undefined, writable: true, enumerable: true, configurable: true, },
        consolidate: { value: undefined, writable: true, enumerable: true, configurable: true, },
        createSVGTransformFromMatrix: { value: undefined, writable: true, enumerable: true, configurable: true, },
        getItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        initialize: { value: undefined, writable: true, enumerable: true, configurable: true, },
        insertItemBefore: { value: undefined, writable: true, enumerable: true, configurable: true, },
        removeItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        replaceItem: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: SVGTransformList },
        [Symbol.toStringTag]: { value: "SVGTransformList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();



!function () {
    Object.defineProperty(window, "TextTrackCueList", {
        value: rsvm.RsCreateConstructor("TextTrackCueList"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.TextTrackCueList = {
        memory: {
            length: undefined,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("TextTrackCueList", target);
        },
        new() {
            let obj = rsvm.RsCreate(TextTrackCueList.prototype);
            return obj;
        },
    };

    Object.defineProperties(TextTrackCueList, {
        prototype: { value: TextTrackCueList.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(TextTrackCueList.prototype, {
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return rsvm.get(this, "length");
            }), set: undefined, enumerable: true, configurable: true,
        },
        getCueById: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: TextTrackCueList },
        [Symbol.toStringTag]: { value: "TextTrackCueList", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();




!function () {
    Object.defineProperty(window, "Path2D", {
        value: rsvm.RsCreateConstructor("Path2D", 0, function Path2D() {
            return rsvm.prototype.Path2D.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Path2D = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Path2D", target);
        },
        new() {
            let obj = rsvm.RsCreate(Path2D.prototype);
            return obj;
        },
    };

    Object.defineProperties(Path2D, {
        prototype: { value: Path2D.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Path2D.prototype, {
        addPath: { value: undefined, writable: true, enumerable: true, configurable: true, },
        roundRect: { value: undefined, writable: true, enumerable: true, configurable: true, },
        arc: { value: undefined, writable: true, enumerable: true, configurable: true, },
        arcTo: { value: undefined, writable: true, enumerable: true, configurable: true, },
        bezierCurveTo: { value: undefined, writable: true, enumerable: true, configurable: true, },
        closePath: { value: undefined, writable: true, enumerable: true, configurable: true, },
        ellipse: { value: undefined, writable: true, enumerable: true, configurable: true, },
        lineTo: { value: undefined, writable: true, enumerable: true, configurable: true, },
        moveTo: { value: undefined, writable: true, enumerable: true, configurable: true, },
        quadraticCurveTo: { value: undefined, writable: true, enumerable: true, configurable: true, },
        rect: { value: undefined, writable: true, enumerable: true, configurable: true, },
        constructor: { writable: true, enumerable: false, configurable: true, value: Path2D },
        [Symbol.toStringTag]: { value: "Path2D", writable: false, enumerable: false, configurable: true, },
    });
}();




