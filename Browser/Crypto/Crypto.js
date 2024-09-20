!function () {
    Object.defineProperty(window, "Crypto", {
        value: rsvm.RsCreateConstructor("Crypto"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Crypto = {
        memory: {
            subtle: rsvm.prototype.SubtleCrypto.new(),
        },
        malloc(target) {
            rsvm.mallocBaseMemory("Crypto", target);
        },
        new() {
            let obj = rsvm.RsCreate(Crypto.prototype);
            return obj;
        },
    };

    Object.defineProperties(Crypto, {
        prototype: { value: Crypto.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(Crypto.prototype, {
        getRandomValues: {
            value: rsvm.RsCreateAction("getRandomValues", 1, function getRandomValues() {
                let array = arguments[0];
                for (let i = 0; i < array.length; i++) {
                    array[i] = Math.floor(Math.random() * 256); // 生成一个0-255之间的整数
                }
                return array;
                // return rsvm.getRandomValues(arguments[0]);
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Crypto },
        subtle: {
            get: rsvm.RsCreateGetter("subtle", function subtle() {
                return rsvm.get(this, "subtle");
            }), set: undefined, enumerable: true, configurable: true,
        },
        randomUUID: {
            value: rsvm.RsCreateAction("randomUUID", 0, function randomUUID() {
                // const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
                // const length = 36;
                // let randomUUID = '';
                // for (let i = 0; i < length; i++) {
                //     // 从字符集中随机选择一个字符
                //     const randomIndex = Math.floor(Math.random() * characters.length);
                //     randomUUID += characters[randomIndex];
                // }
                // // 设置 UUID 的特定位
                // randomUUID = randomUUID.substr(0, 8) + '-' + randomUUID.substr(8, 4) + '-' + randomUUID.substr(12, 4) + '-' + randomUUID.substr(16, 4) + '-' + randomUUID.substr(20);
                // return randomUUID;
                return rsvm.crypto.randomUUID();
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Crypto", writable: false, enumerable: false, configurable: true, },
    });
}();