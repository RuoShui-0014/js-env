!function () {
    Object.defineProperty(window, "EventTarget", {
        value: rsvm.RsCreateConstructor("EventTarget", 0, function EventTarget() {
            return rsvm.prototype.EventTarget.new();
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.EventTarget = {
        memory: {
            listener: {},
        },
        malloc(target) {
            rsvm.mallocBaseMemory("EventTarget", target);
        },
        new() {
            let obj = rsvm.RsCreate(EventTarget.prototype);
            return obj;
        },
    };

    Object.defineProperties(EventTarget, {
        prototype: { value: EventTarget.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(EventTarget.prototype, {
        addEventListener: {
            value: rsvm.RsCreateAction("addEventListener", 2, function addEventListener() {
                let type = arguments[0], callback = arguments[1], thisListener = rsvm.get(this, "listener");
                if (!Object.hasOwn(rsvm.listener, type)){ rsvm.listener[type] = []; }
                let info = {
                    target: this,
                    callback: typeof(callback) === 'function' ? callback : callback.handleEvent,
                    options: arguments[2],
                };
                rsvm.listener[type].push(info);
                if (!Object.hasOwn(thisListener, type)){ thisListener[type] = []; }
                thisListener[type].push(info);
            }), writable: true, enumerable: true, configurable: true,
        },
        dispatchEvent: {
            value: rsvm.RsCreateAction("dispatchEvent", 1, function dispatchEvent() {
                let event = arguments[0], thisListener = rsvm.get(this, "listener");
                if (Object.hasOwn(thisListener, event.type)){
                    for (const info of thisListener[event.type]){
                        info.callback.call(this, event);
                    }
                }
                return false;
            }), writable: true, enumerable: true, configurable: true,
        },
        removeEventListener: {
            value: rsvm.RsCreateAction("removeEventListener", 2, function removeEventListener() {
                let type = arguments[0], callback = arguments[1], thisListener = rsvm.get(this, "listener");
                if (Object.hasOwn(thisListener, type)){
                    let flag = -1;
                    for (let index = 0; index < thisListener[type].length; index++){
                        if (thisListener[type][index].callback === callback && thisListener[type][index].target === this){
                            flag = index;
                        }
                    }
                    thisListener[type].splice(thisListener[type].indexOf(flag), 1);
                }
                if (Object.hasOwn(rsvm.listener, type)){
                    let flag = -1;
                    for (let index = 0; index < rsvm.listener[type].length; index++){
                        if (rsvm.listener[type][index].callback === callback && rsvm.listener[type][index].target === this){
                            flag = index;
                        }
                    }
                    rsvm.listener[type].splice(rsvm.listener[type].indexOf(flag), 1);
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: EventTarget },
        [Symbol.toStringTag]: { value: "EventTarget", writable: false, enumerable: false, configurable: true, },
    });
}();