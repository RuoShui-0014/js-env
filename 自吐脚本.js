
// 第一个参数：需要自吐的原型对象
// 第二个参数：原型链中存在该原型的实例对象
!function (prototype, target) {
    function create(obj) {
        let con = "";
        if (obj.__proto__ == undefined || obj.__proto__ == Object.prototype) {
            con += "{"
            for (const key in obj) {
                con += `${key}: ${valueType(obj[key])}, `
            }
            con += '}';
        } else if (obj.__proto__ == [].__proto__) {
            con += "["
            for (const value of obj) {
                con += `${valueType(value)}, `
            }
            con += ']';
        }
        return con;
    }
    function valueType(value) {
        let valueCode = "";
        if (null === value || undefined === value || "number" === typeof value || "boolean" === typeof value) {
            valueCode += value;
        } else if ('string' === typeof value) {
            valueCode += `\"${value}\"`;
        } else if ('function' === typeof value) {
            valueCode += `rsvm.RsCreateAction("${value.name}", ${value.length}, function ${value.name}() {
            })`;
        } else {
            if (value.__proto__ !== undefined && Object.hasOwn(value.__proto__, Symbol.toStringTag)) {
                valueCode += `rsvm.prototype.${value[Symbol.toStringTag]}.new()`;
            } else {
                valueCode += create(value);
            }

        }
        return valueCode;
    }

    let code = "!function () {\r\n", controll = "",
        memory = "", getter = "", setter = "", action = "",
        constructorCode = "", des, hasConstructor = false,
        flagName = "", setPrototype = "", enbleNew = true;

    // 判断是否存在构造函数，并根据情况响应处理
    if (Object.hasOwn(prototype, "constructor")) {
        hasConstructor = true;
        des = Object.getOwnPropertyDescriptor(window, prototype[Symbol.toStringTag]);
        try {
            new prototype['constructor']("");
        } catch {
            enbleNew = false;
        }
        code += `Object.defineProperty(window, "${prototype[Symbol.toStringTag]}", {value: rsvm.RsCreateConstructor("${prototype[Symbol.toStringTag]}"${enbleNew ? `, ${prototype['constructor'].length}, function ${prototype[Symbol.toStringTag]}(){
            return rsvm.prototype.${prototype[Symbol.toStringTag]}.new.apply(null, arguments);
        })` : ")"}, writable: ${des["writable"]}, enumerable: ${des["enumerable"]}, configurable: ${des["configurable"]}
        });`;

        des = Object.getOwnPropertyDescriptors(prototype["constructor"]);
        constructorCode = `\r\n\r\nObject.defineProperties(${prototype[Symbol.toStringTag]}, {\r\n`;
        for (const key in des) {
            if (['arguments', 'caller', 'name', 'length'].includes(key)) { continue; }
            if ('prototype' === key) {
                constructorCode += `prototype: { value: ${prototype[Symbol.toStringTag]}.prototype, writable: ${des[key]["writable"]}, enumerable: ${des[key]["enumerable"]}, configurable: ${des[key]["configurable"]} },\r\n`
            } else {
                constructorCode += `${key}: { value: ${valueType(des[key]["value"])}, writable: ${des[key]["writable"]}, enumerable: ${des[key]["enumerable"]}, configurable: ${des[key]["configurable"]} },\r\n`
            }
        }
        constructorCode += '});';
        flagName = hasConstructor ? prototype[Symbol.toStringTag] + ".prototype" : prototype[Symbol.toStringTag];

        // 处理构造函数的原型
        if (!(prototype["constructor"].__proto__ === Object.__proto__)) {
            var a = prototype["constructor"].__proto__;
            setPrototype += `\r\nObject.setPrototypeOf(${prototype["constructor"].name}, ${a.name});`
        }
    } else {
        code += `let ${prototype[Symbol.toStringTag]} = {};`
        flagName = prototype[Symbol.toStringTag];
    }

    // 处理原型对象的原型
    if (!(prototype.__proto__ === Object.prototype)) {
        var a = prototype.__proto__;
        var flagName2 = Object.hasOwn(a, "constructor") ? a[Symbol.toStringTag] + ".prototype" : a[Symbol.toStringTag];
        setPrototype += `\r\nObject.setPrototypeOf(${flagName}, ${flagName2});`
    }

    // 处理原型对象的相关属性
    des = Object.getOwnPropertyDescriptors(prototype);
    controll += `\r\n\r\nObject.defineProperties(${flagName}, {\r\n`;
    for (const key in des) {
        // if (ke) { continue; }
        controll += `${key}: {`;
        if ('constructor' === key) {
            controll += `writable: ${des[key]["writable"]}, enumerable: ${des[key]["enumerable"]}, configurable: ${des[key]["configurable"]}, value: ${prototype[Symbol.toStringTag]}`
        } else {
            for (const property in des[key]) {
                if ('value' === property) {
                    controll += `value: ${valueType(target[key])},`
                } else if ('get' === property) {
                    memory += `\r\n${key}: ${valueType(target[key])},`
                    getter += `\r\n${key}: rsvm.RsCreateGetter("${key}", function ${key}() {
                        return rsvm.get(this, "${key}");
                    }),`;
                    controll += `${property}: rsvm.RsCreateGetter("${key}", function ${key}() {
                        return rsvm.get(this, "${key}");
                    }), `;
                } else if ('set' === property) {
                    if (des[key][property] === undefined) {
                        controll += `${property}: undefined, `;
                    } else {
                        setter += `\r\n${key}: rsvm.RsCreateSetter("${key}", function ${key}() {
                            rsvm.set(this, "${key}", arguments[0]);
                        }),`
                        controll += `${property}: rsvm.RsCreateSetter("${key}", function ${key}() {
                            rsvm.set(this, "${key}", arguments[0]);
                        }), `;
                    }
                } else {
                    controll += `${property}: ${des[key][property]},`;
                }
            }
        }
        controll += `},\r\n`
    }
    var ary = Object.getOwnPropertySymbols(prototype);
    for (const key of ary) {
        controll += `[${key.toString().replaceAll(/Symbol\(|\)/g, "")}]: {`;
        des = Object.getOwnPropertyDescriptor(prototype, key)
        for (const property in des) {
            if ('value' === property) {
                controll += `value: ${valueType(des[property])},`
            } else {
                controll += `${property}: ${des[property]},`;
            }
        }
        controll += "},\r\n"
    }
    controll += "});"

    if (memory) { memory += '\r\n'; }
    if (getter) { getter += '\r\n'; }
    if (setter) { setter += '\r\n'; }
    if (action) { action += '\r\n'; }

    code += `\r\n\r\nrsvm.prototype.${prototype[Symbol.toStringTag]} = {
        memory: {${memory}},
        malloc(target) {
            rsvm.mallocBaseMemory("${prototype[Symbol.toStringTag]}", target);
        },
        new() {
            let obj = rsvm.RsCreate(${flagName});
            return obj;
        },
    };` + constructorCode + controll;

    code += (setPrototype ? setPrototype : "") + "\r\n}();";
    console.log(code);
}(Event.prototype, new Event(""));
