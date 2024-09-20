!function () {
    Object.defineProperty(window, "Navigation", {
        value: rsvm.RsCreateConstructor("Navigation"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Navigation = {
        memory: {
            currentEntry: rsvm.prototype.NavigationHistoryEntry.new(),
            transition: null,
            canGoBack: false,
            canGoForward: false,
            onnavigate: null,
            onnavigatesuccess: null,
            onnavigateerror: null,
            oncurrententrychange: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Navigation", target);
        },
        new() {
            let obj = rsvm.RsCreate(Navigation.prototype);
            return obj;
        },
    };

    Object.defineProperties(Navigation, {
        prototype: { value: Navigation.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Navigation.prototype, {
        currentEntry: {
            get: rsvm.RsCreateGetter("currentEntry", function currentEntry() {
                return rsvm.get(this, "currentEntry");
            }), set: undefined, enumerable: true, configurable: true,
        },
        transition: {
            get: rsvm.RsCreateGetter("transition", function transition() {
                return rsvm.get(this, "transition");
            }), set: undefined, enumerable: true, configurable: true,
        },
        canGoBack: {
            get: rsvm.RsCreateGetter("canGoBack", function canGoBack() {
                return rsvm.get(this, "canGoBack");
            }), set: undefined, enumerable: true, configurable: true,
        },
        canGoForward: {
            get: rsvm.RsCreateGetter("canGoForward", function canGoForward() {
                return rsvm.get(this, "canGoForward");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onnavigate: {
            get: rsvm.RsCreateGetter("onnavigate", function onnavigate() {
                return rsvm.get(this, "onnavigate");
            }), set: rsvm.RsCreateSetter("onnavigate", function onnavigate() {
                rsvm.set(this, "onnavigate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onnavigatesuccess: {
            get: rsvm.RsCreateGetter("onnavigatesuccess", function onnavigatesuccess() {
                return rsvm.get(this, "onnavigatesuccess");
            }), set: rsvm.RsCreateSetter("onnavigatesuccess", function onnavigatesuccess() {
                rsvm.set(this, "onnavigatesuccess", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onnavigateerror: {
            get: rsvm.RsCreateGetter("onnavigateerror", function onnavigateerror() {
                return rsvm.get(this, "onnavigateerror");
            }), set: rsvm.RsCreateSetter("onnavigateerror", function onnavigateerror() {
                rsvm.set(this, "onnavigateerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oncurrententrychange: {
            get: rsvm.RsCreateGetter("oncurrententrychange", function oncurrententrychange() {
                return rsvm.get(this, "oncurrententrychange");
            }), set: rsvm.RsCreateSetter("oncurrententrychange", function oncurrententrychange() {
                rsvm.set(this, "oncurrententrychange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        back: {
            value: rsvm.RsCreateAction("back", 0, function back() {
            }), writable: true, enumerable: true, configurable: true,
        },
        entries: {
            value: rsvm.RsCreateAction("entries", 0, function entries() {
            }), writable: true, enumerable: true, configurable: true,
        },
        forward: {
            value: rsvm.RsCreateAction("forward", 0, function forward() {
            }), writable: true, enumerable: true, configurable: true,
        },
        navigate: {
            value: rsvm.RsCreateAction("navigate", 1, function navigate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        reload: {
            value: rsvm.RsCreateAction("reload", 0, function reload() {
            }), writable: true, enumerable: true, configurable: true,
        },
        traverseTo: {
            value: rsvm.RsCreateAction("traverseTo", 1, function traverseTo() {
            }), writable: true, enumerable: true, configurable: true,
        },
        updateCurrentEntry: {
            value: rsvm.RsCreateAction("updateCurrentEntry", 1, function updateCurrentEntry() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Navigation },
        [Symbol.toStringTag]: { value: "Navigation", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Navigation, EventTarget);
    Object.setPrototypeOf(Navigation.prototype, EventTarget.prototype);
}();