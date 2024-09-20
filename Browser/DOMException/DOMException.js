!function () {
    Object.defineProperty(window, "DOMException", {
        value: rsvm.RsCreateConstructor("DOMException", 0, function DOMException() {
            if (rsvm.debugger) { debugger }
            return rsvm.prototype.DOMException.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.DOMException = {
        memory: {
            code: 0,
            name: "",
            message: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("DOMException", target);
        },
        new(message, name) {
            let obj = rsvm.RsCreate(DOMException.prototype);
            if (message !== undefined){
                rsvm.set(obj, 'message', message);
                if (name !== undefined){
                    rsvm.set(obj, 'name', name);
                }
            }
            return obj;
        },
    };

    Object.defineProperties(DOMException, {
        prototype: { value: DOMException.prototype, writable: false, enumerable: false, configurable: false },
        INDEX_SIZE_ERR: { value: 1, writable: false, enumerable: true, configurable: false },
        DOMSTRING_SIZE_ERR: { value: 2, writable: false, enumerable: true, configurable: false },
        HIERARCHY_REQUEST_ERR: { value: 3, writable: false, enumerable: true, configurable: false },
        WRONG_DOCUMENT_ERR: { value: 4, writable: false, enumerable: true, configurable: false },
        INVALID_CHARACTER_ERR: { value: 5, writable: false, enumerable: true, configurable: false },
        NO_DATA_ALLOWED_ERR: { value: 6, writable: false, enumerable: true, configurable: false },
        NO_MODIFICATION_ALLOWED_ERR: { value: 7, writable: false, enumerable: true, configurable: false },
        NOT_FOUND_ERR: { value: 8, writable: false, enumerable: true, configurable: false },
        NOT_SUPPORTED_ERR: { value: 9, writable: false, enumerable: true, configurable: false },
        INUSE_ATTRIBUTE_ERR: { value: 10, writable: false, enumerable: true, configurable: false },
        INVALID_STATE_ERR: { value: 11, writable: false, enumerable: true, configurable: false },
        SYNTAX_ERR: { value: 12, writable: false, enumerable: true, configurable: false },
        INVALID_MODIFICATION_ERR: { value: 13, writable: false, enumerable: true, configurable: false },
        NAMESPACE_ERR: { value: 14, writable: false, enumerable: true, configurable: false },
        INVALID_ACCESS_ERR: { value: 15, writable: false, enumerable: true, configurable: false },
        VALIDATION_ERR: { value: 16, writable: false, enumerable: true, configurable: false },
        TYPE_MISMATCH_ERR: { value: 17, writable: false, enumerable: true, configurable: false },
        SECURITY_ERR: { value: 18, writable: false, enumerable: true, configurable: false },
        NETWORK_ERR: { value: 19, writable: false, enumerable: true, configurable: false },
        ABORT_ERR: { value: 20, writable: false, enumerable: true, configurable: false },
        URL_MISMATCH_ERR: { value: 21, writable: false, enumerable: true, configurable: false },
        QUOTA_EXCEEDED_ERR: { value: 22, writable: false, enumerable: true, configurable: false },
        TIMEOUT_ERR: { value: 23, writable: false, enumerable: true, configurable: false },
        INVALID_NODE_TYPE_ERR: { value: 24, writable: false, enumerable: true, configurable: false },
        DATA_CLONE_ERR: { value: 25, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(DOMException.prototype, {
        code: {
            get: rsvm.RsCreateGetter("code", function code() {
                return rsvm.get(this, "code");
            }), set: undefined, enumerable: true, configurable: true,
        },
        name: {
            get: rsvm.RsCreateGetter("name", function name() {
                return rsvm.get(this, "name");
            }), set: undefined, enumerable: true, configurable: true,
        },
        message: {
            get: rsvm.RsCreateGetter("message", function message() {
                return rsvm.get(this, "message");
            }), set: undefined, enumerable: true, configurable: true,
        },
        INDEX_SIZE_ERR: { value: 1, writable: false, enumerable: true, configurable: false, },
        DOMSTRING_SIZE_ERR: { value: 2, writable: false, enumerable: true, configurable: false, },
        HIERARCHY_REQUEST_ERR: { value: 3, writable: false, enumerable: true, configurable: false, },
        WRONG_DOCUMENT_ERR: { value: 4, writable: false, enumerable: true, configurable: false, },
        INVALID_CHARACTER_ERR: { value: 5, writable: false, enumerable: true, configurable: false, },
        NO_DATA_ALLOWED_ERR: { value: 6, writable: false, enumerable: true, configurable: false, },
        NO_MODIFICATION_ALLOWED_ERR: { value: 7, writable: false, enumerable: true, configurable: false, },
        NOT_FOUND_ERR: { value: 8, writable: false, enumerable: true, configurable: false, },
        NOT_SUPPORTED_ERR: { value: 9, writable: false, enumerable: true, configurable: false, },
        INUSE_ATTRIBUTE_ERR: { value: 10, writable: false, enumerable: true, configurable: false, },
        INVALID_STATE_ERR: { value: 11, writable: false, enumerable: true, configurable: false, },
        SYNTAX_ERR: { value: 12, writable: false, enumerable: true, configurable: false, },
        INVALID_MODIFICATION_ERR: { value: 13, writable: false, enumerable: true, configurable: false, },
        NAMESPACE_ERR: { value: 14, writable: false, enumerable: true, configurable: false, },
        INVALID_ACCESS_ERR: { value: 15, writable: false, enumerable: true, configurable: false, },
        VALIDATION_ERR: { value: 16, writable: false, enumerable: true, configurable: false, },
        TYPE_MISMATCH_ERR: { value: 17, writable: false, enumerable: true, configurable: false, },
        SECURITY_ERR: { value: 18, writable: false, enumerable: true, configurable: false, },
        NETWORK_ERR: { value: 19, writable: false, enumerable: true, configurable: false, },
        ABORT_ERR: { value: 20, writable: false, enumerable: true, configurable: false, },
        URL_MISMATCH_ERR: { value: 21, writable: false, enumerable: true, configurable: false, },
        QUOTA_EXCEEDED_ERR: { value: 22, writable: false, enumerable: true, configurable: false, },
        TIMEOUT_ERR: { value: 23, writable: false, enumerable: true, configurable: false, },
        INVALID_NODE_TYPE_ERR: { value: 24, writable: false, enumerable: true, configurable: false, },
        DATA_CLONE_ERR: { value: 25, writable: false, enumerable: true, configurable: false, },
        constructor: { writable: true, enumerable: false, configurable: true, value: DOMException },
        [Symbol.toStringTag]: { value: "DOMException", writable: false, enumerable: false, configurable: true, },
    });
    
    Object.setPrototypeOf(DOMException.prototype, Error.prototype);
}();