!function () {
    Object.defineProperty(window, "SubtleCrypto", {
        value: rsvm.RsCreateConstructor("SubtleCrypto"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.SubtleCrypto = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("SubtleCrypto", target);
        },
        new() {
            let obj = rsvm.RsCreate(SubtleCrypto.prototype);
            return obj;
        },
    };

    Object.defineProperties(SubtleCrypto, {
        prototype: { value: SubtleCrypto.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(SubtleCrypto.prototype, {
        decrypt: {
            value: rsvm.RsCreateAction("decrypt", 3, function decrypt() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deriveBits: {
            value: rsvm.RsCreateAction("deriveBits", 3, function deriveBits() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deriveKey: {
            value: rsvm.RsCreateAction("deriveKey", 5, function deriveKey() {
            }), writable: true, enumerable: true, configurable: true,
        },
        digest: {
            value: rsvm.RsCreateAction("digest", 2, function digest() {
            }), writable: true, enumerable: true, configurable: true,
        },
        encrypt: {
            value: rsvm.RsCreateAction("encrypt", 3, function encrypt() {
            }), writable: true, enumerable: true, configurable: true,
        },
        exportKey: {
            value: rsvm.RsCreateAction("exportKey", 2, function exportKey() {
            }), writable: true, enumerable: true, configurable: true,
        },
        generateKey: {
            value: rsvm.RsCreateAction("generateKey", 3, function generateKey() {
            }), writable: true, enumerable: true, configurable: true,
        },
        importKey: {
            value: rsvm.RsCreateAction("importKey", 5, function importKey() {
            }), writable: true, enumerable: true, configurable: true,
        },
        sign: {
            value: rsvm.RsCreateAction("sign", 3, function sign() {
            }), writable: true, enumerable: true, configurable: true,
        },
        unwrapKey: {
            value: rsvm.RsCreateAction("unwrapKey", 7, function unwrapKey() {
            }), writable: true, enumerable: true, configurable: true,
        },
        verify: {
            value: rsvm.RsCreateAction("verify", 4, function verify() {
            }), writable: true, enumerable: true, configurable: true,
        },
        wrapKey: {
            value: rsvm.RsCreateAction("wrapKey", 4, function wrapKey() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: SubtleCrypto },
        [Symbol.toStringTag]: { value: "SubtleCrypto", writable: false, enumerable: false, configurable: true, },
    });
}();