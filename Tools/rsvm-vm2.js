// 所有的工具对象
rsvm = {
    // 调试设置
    ifProxy: true, log: false,
    logFunction: {
        constructor(target, value) {
            let msg = { '构造函数': target.name, '返回值': value };
            rsvm.$log.call(console, msg);
        },
        action(target, property, args, value) {
            let ary = [];
            for (var elem of args) {
                if (null !== elem && "object" === typeof (elem)) {
                    try { ary.push(JSON.stringify(elem)); } catch (e) { }
                } else {
                    if (typeof (elem) === 'string') { ary.push(`"${elem}"`); } else { ary.push("" + elem); }
                }
            }
            let msg = { "调用者": target[Symbol.toStringTag], "操作": "Action", "属性": property, "参数": "(" + ary.join(', ') + ")", "参数值": args, "返回值": value, "值类型": typeof (target) };
            rsvm.$log.call(console, msg);
        },
        windowGetter(target, property, value) {
            let msg = { "原型": 'window', "操作": "Getter", "属性": property, "获取值": value, "值类型": typeof (value) };
            rsvm.$log.call(console, msg);
        },
        windowSetter(target, property, value, original) {
            let msg = { "原型": 'window', "操作": "Setter", "属性": property, "设置值": value, "原值": original, "值类型": typeof (value) };
            rsvm.$log.call(console, msg);
        },
        windowAction(target, property, args, value) {
            let ary = [];
            for (var elem of args) {
                if (null !== elem && "object" === typeof (elem)) {
                    try { ary.push(JSON.stringify(elem)); } catch (e) { }
                } else {
                    if (typeof (elem) === 'string') { ary.push(`"${elem}"`); } else { ary.push("" + elem); }
                }
            }
            let msg = { "原型": 'window', "操作": "Action", "属性": property, "参数": "(" + ary.join(', ') + ")", "参数值": args, "返回值": value, "值类型": typeof (value) };
            rsvm.$log.call(console, msg);
        },
    },
    result: [],         // 最终数据保存的数组
    scriptAry: [],      // html中需要执行的脚本
    siteInfo: {
        version: "",    // 脚本标识
        get url() {
            return location.href;
        },
        set url(url) {
            location.href = url;
        },
        referrer: "",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.86",
    },
    data: {},
    collections: new WeakMap(),     // 动态HTMLCollection
    startTimeStamp: Date.now(), // 框架加载的起始时间
    // 浏览器原型对象
    prototype: {},
    // 对象内存
    timerIndex: 1,
    timerID: {},        // 定时器id池
    listener: {},       // 事件监听池
    requests: [],
    dd: [],
    proxyHandler: {
        get(target, property, receiver) {
            let value = Reflect.get(target, property, receiver);
            if (rsvm.log && "function" !== typeof (value)) {
                rsvm.prevent();
                let msg = { "原型": target[Symbol.toStringTag], "操作": "Getter", "属性": property, "获取值": value, "值类型": typeof (value) };
                rsvm.recover();
                rsvm.$log.call(console, msg);
            }
            return value;
        },
        set(target, property, value, receiver) {
            // 设置之前的原值
            let original = Reflect.get(target, property, receiver);
            if (property == "fontFamily") {
                rsvm.dd.push(value);
            }
            let result = Reflect.set(target, property, value, receiver);
            if (rsvm.log && result) {
                rsvm.prevent();
                let msg = { "原型": target[Symbol.toStringTag], "操作": "Setter", "属性": property, "设置值": value, "原值": original, "值类型": typeof (value) };
                rsvm.recover();
                rsvm.$log.call(console, msg);
            }
            return true;
        }
    },
    // RsCreate(prototype) {
    //     let target = Object.create(prototype);
    //     let __memory__ = rsvm.deepMalloc(target);
    //     let nodeArray = rsvm.RsGetPrivateProperty(target, "nodeArray");
    //     if (rsvm.ifProxy) {
    //         let proxyTarget = new Proxy(target, rsvm.proxyHandler);
    //         if (nodeArray) {
    //             rsvm.RsSetPrivateProperty(proxyTarget, "nodeArray", nodeArray);
    //         }
    //         rsvm.RsSetPrivateProperty(proxyTarget, "__memory__", __memory__);
    //         return proxyTarget;
    //     } else {
    //         return target;
    //     }
    // },
    interceptHandler: {
        getter(target, property) {
            if (rsvm.log) {
                rsvm.prevent();
                let value = target[property];
                let msg = { "原型": target[Symbol.toStringTag], "操作": "Getter", "属性": property, "获取值": value, "值类型": typeof (value) };
                rsvm.$log.call(console, msg);
                rsvm.recover();
            }
            return { intercept: false };
        },
        setter(target, property, value) {
            if (rsvm.log) {
                rsvm.prevent();
                let original = target[property];
                let msg = { "原型": target[Symbol.toStringTag], "操作": "Setter", "属性": property, "设置值": value, "原值": original, "值类型": typeof (value) };
                rsvm.$log.call(console, msg);
                rsvm.recover();
            }
            return { intercept: false };
        },
    },
    RsCreate(prototype) {
        if (rsvm.ifProxy) {
            let target = rsvm.RsCreateInterceptor(rsvm.interceptHandler);
            Object.setPrototypeOf(target, prototype);
            rsvm.deepMalloc(target);
            return target;
        } else {
            let target = Object.create(prototype);
            rsvm.deepMalloc(target);
            return target;
        }
    },
    // 根据浏览器对象获取属性，此方法不会触发代理
    get(target, property) {
        let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
        if (memory) {
            return memory[property];
        }
    },
    // 设置浏览器对象中属性的值
    set(target, property, value) {
        let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
        if (memory) {
            memory[property] = value;
        }
    },
    mallocBaseMemory(type, target) {
        let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
        for (const key of Object.keys(rsvm.prototype[type].memory)) {
            let value = rsvm.prototype[type].memory[key];
            if (typeof value !== 'object' || value === null) {
                memory[key] = value;
            } else if (value.__proto__ === Object.prototype || Array.isArray(value)) {
                memory[key] = rsvm.deepClone(value);
            } else {
                memory[key] = rsvm.prototype[value[Symbol.toStringTag]].new();
            }
        }
    },
    deepClone(obj) {
        // 判断是否是基本类型或者 null
        if (typeof obj !== 'object' || obj === null) { return obj; }
        let clone;
        // 根据 obj 的类型创建空对象或数组
        if (Array.isArray(obj)) { clone = []; } else { clone = {}; }
        // 遍历 obj，并递归进行深拷贝
        for (let key in obj) {
            let value = obj[key][Symbol.toStringTag];
            if (value !== undefined) {
                clone[key] = rsvm.prototype[value].new();
            } else {
                clone[key] = rsvm.deepClone(obj[key]);
            }
        }
        return clone;
    },
    // 深度分配内存，一般供可 new 对象使用
    deepMalloc(target) {
        let ary = [], pointer = Object.getPrototypeOf(target);
        // 获取对象的原型链，分配内存的顺序从最顶层的原型开始
        while (Object.hasOwn(pointer, Symbol.toStringTag)) {
            ary.push(pointer[Symbol.toStringTag]);
            pointer = Object.getPrototypeOf(pointer);
        }
        ary.reverse();
        let memory = {};
        rsvm.RsSetPrivateProperty(target, "__memory__", memory);
        for (const type of ary) {
            rsvm.prototype[type].malloc(target);
        }
        return memory;
    },
    // 异常错误
    error: {
        checkEvent(type, args) {
            if (args.length === 0) {
                throw new TypeError(`Failed to construct '${type}': 1 argument required, but only 0 present.`);
            } else if (args.length > 1 && typeof (args[1]) !== "object") {
                throw new TypeError(`Failed to construct '${type}': The provided value is not of type '${type}'.`);
            }
        }
    }, logStack: [],
    // 阻止额外的日志输出
    prevent() {
        rsvm.logStack.push(rsvm.log);
        rsvm.log = false;       // 暂时关闭日志输出
    },
    // 恢复调试和日志输出状态
    recover() {
        rsvm.log = rsvm.logStack.pop();
    },
    dispatchEvent(target, ev) {
        rsvm.prevent();
        rsvm.set(ev, 'target', target);     // 分发的目标对象
        let elemAry = [], point = target;
        while (point && point !== window) {
            elemAry.push(point);
            point = point.parentNode;
        }
        elemAry.push(window);
        rsvm.recover();

        // 事件捕获过程
        elemAry.toReversed().forEach((node) => {
            if (!rsvm.get(ev, 'flagStop')) {
                rsvm.prevent();
                let listener = rsvm.get(node, 'listener');
                let has = Object.hasOwn(listener, ev.type);
                rsvm.recover();
                if (has) {
                    for (const info of listener[ev.type].toReversed()) {
                        if (info.options === true) {
                            rsvm.set(ev, 'currentTarget', node);
                            info.callback.call(node, ev);
                        }
                    }
                }
            }
        });

        // 事件冒泡过程
        elemAry.forEach((node) => {
            if (!rsvm.get(ev, 'flagStop')) {
                rsvm.prevent();
                let event = node['on' + ev.type];
                // DOM级的事件，默认为冒泡过程触发
                if (event) {
                    rsvm.recover();
                    event.call(node, ev);
                    rsvm.prevent();
                }
                let listener = rsvm.get(node, 'listener');
                let has = Object.hasOwn(listener, ev.type);
                rsvm.recover();
                if (has) {
                    for (const info of listener[ev.type].toReversed()) {
                        if (info.options === false || info.options === undefined) {
                            rsvm.set(ev, 'currentTarget', node);
                            info.callback.call(node, ev);
                        }
                    }
                }
            }
        });
    },
    // 增加事件用于执行setTimeout回调
    $now: Date.now, addTime: 0,
    exeTimeout(time) {
        if (time === undefined) {
            time = 0;
        }
        rsvm.addTime += time;
        let flag = true;
        while (flag) {
            flag = false;
            let keys = Object.keys(rsvm.timerID);
            for (const id of keys) {
                let nowTime = Date.now();
                if (rsvm.timerID[id].type === "setTimeout") {           // 代码执行完后删除定时器
                    if (nowTime - rsvm.timerID[id].start >= rsvm.timerID[id].delay) {
                        if ("string" === typeof rsvm.timerID[id].callback) {
                            eval(rsvm.timerID[id].callback);
                        } else if ("function" === typeof rsvm.timerID[id].callback) {
                            rsvm.timerID[id].callback();
                        }
                        delete rsvm.timerID[id];
                        flag = true;
                    }
                }
                else if (rsvm.timerID[id].type === "setInterval") {   // 代码执行完后删除定时器
                    if (nowTime - rsvm.timerID[id].againStart >= rsvm.timerID[id].delay) {
                        rsvm.timerID[id].againStart = nowTime;
                        rsvm.timerID[id].execNumber += 1;
                        if ("string" === typeof rsvm.timerID[id].callback) {
                            eval(rsvm.timerID[id].callback);
                        } else if ("function" === typeof rsvm.timerID[id].callback) {
                            rsvm.timerID[id].callback();
                        }
                        flag = true;
                    }
                }
            }
        }
    },
    updataCookie(cookie) {
        for (const item of cookie.split('; ')) {
            document.cookie = item;
        }
    },
};

!function () {
    delete Buffer;

    for (const key of Object.keys(window.RsFunctions)) {
        rsvm[key] = window.RsFunctions[key];
    }
    delete window.RsFunctions;
    
    rsvm.atob = window.atob; delete window.atob;
    rsvm.btoa = window.btoa; delete window.btoa;
    rsvm.fetch = window.fetch; delete window.fetch;
    rsvm.crypto = window.crypto; delete window.crypto;

    rsvm.$log = console.log;
    console.log = function log() { }
    rsvm.print = function log() {
        return rsvm.$log.apply(console, arguments);
    }
    Date.now = function now() {
        return rsvm.$now.apply(this, arguments) + rsvm.addTime;
    }
    rsvm.$getTime = Date.prototype.getTime;
    Date.prototype.getTime = function getTime() {
        return rsvm.$getTime.apply(this, arguments) + rsvm.addTime;
    }

    Array.prototype.toReversed = rsvm.RsCreateFunction("toReversed", 0, false, function () {
        let ary = [];
        for (const elem of this) {
            ary.push(elem);
        }
        ary.reverse();
        return ary;
    });
}();
