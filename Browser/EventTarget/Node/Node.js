!function () {
    Object.defineProperty(window, "Node", {
        value: rsvm.RsCreateConstructor("Node"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Node = {
        memory: {
            nodeType: 9,
            nodeName: "#document",
            baseURI: "chrome://newtab/",
            isConnected: false,
            ownerDocument: null,
            parentNode: null,
            parentElement: null,
            childNodes: null,
            firstChild: null,
            lastChild: null,
            previousSibling: null,
            nextSibling: null,
            nodeValue: null,
            textContent: null,
        },
        malloc(target) {
            rsvm.RsSetPrivateProperty(target, "nodeArray", []);
            rsvm.mallocBaseMemory("Node", target);
            let memory = rsvm.RsGetPrivateProperty(target, "__memory__");
            memory['childNodes'] = rsvm.prototype.NodeList.childNodes(target);
        },
        new() {
            let obj = rsvm.RsCreate(Node.prototype);
            return obj;
        },
    };

    Object.defineProperties(Node, {
        prototype: { value: Node.prototype, writable: false, enumerable: false, configurable: false },
        ELEMENT_NODE: { value: 1, writable: false, enumerable: true, configurable: false },
        ATTRIBUTE_NODE: { value: 2, writable: false, enumerable: true, configurable: false },
        TEXT_NODE: { value: 3, writable: false, enumerable: true, configurable: false },
        CDATA_SECTION_NODE: { value: 4, writable: false, enumerable: true, configurable: false },
        ENTITY_REFERENCE_NODE: { value: 5, writable: false, enumerable: true, configurable: false },
        ENTITY_NODE: { value: 6, writable: false, enumerable: true, configurable: false },
        PROCESSING_INSTRUCTION_NODE: { value: 7, writable: false, enumerable: true, configurable: false },
        COMMENT_NODE: { value: 8, writable: false, enumerable: true, configurable: false },
        DOCUMENT_NODE: { value: 9, writable: false, enumerable: true, configurable: false },
        DOCUMENT_TYPE_NODE: { value: 10, writable: false, enumerable: true, configurable: false },
        DOCUMENT_FRAGMENT_NODE: { value: 11, writable: false, enumerable: true, configurable: false },
        NOTATION_NODE: { value: 12, writable: false, enumerable: true, configurable: false },
        DOCUMENT_POSITION_DISCONNECTED: { value: 1, writable: false, enumerable: true, configurable: false },
        DOCUMENT_POSITION_PRECEDING: { value: 2, writable: false, enumerable: true, configurable: false },
        DOCUMENT_POSITION_FOLLOWING: { value: 4, writable: false, enumerable: true, configurable: false },
        DOCUMENT_POSITION_CONTAINS: { value: 8, writable: false, enumerable: true, configurable: false },
        DOCUMENT_POSITION_CONTAINED_BY: { value: 16, writable: false, enumerable: true, configurable: false },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: 32, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(Node.prototype, {
        nodeType: {
            get: rsvm.RsCreateGetter("nodeType", function nodeType() {
                return rsvm.get(this, "nodeType");
            }), set: undefined, enumerable: true, configurable: true,
        },
        nodeName: {
            get: rsvm.RsCreateGetter("nodeName", function nodeName() {
                return rsvm.get(this, "nodeName");
            }), set: undefined, enumerable: true, configurable: true,
        },
        baseURI: {
            get: rsvm.RsCreateGetter("baseURI", function baseURI() {
                return rsvm.siteInfo.url;
            }), set: undefined, enumerable: true, configurable: true,
        },
        isConnected: {
            get: rsvm.RsCreateGetter("isConnected", function isConnected() {
                let start = this;
                while (start.parentNode != null) {
                    start = start.parentNode;
                }
                if (start === window.document) {
                    return true;
                } else {
                    return false;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        ownerDocument: {
            get: rsvm.RsCreateGetter("ownerDocument", function ownerDocument() {
                return rsvm.get(this, "ownerDocument");
            }), set: undefined, enumerable: true, configurable: true,
        },
        parentNode: {
            get: rsvm.RsCreateGetter("parentNode", function parentNode() {
                return rsvm.get(this, "parentNode");
            }), set: undefined, enumerable: true, configurable: true,
        },
        parentElement: {
            get: rsvm.RsCreateGetter("parentElement", function parentElement() {
                return rsvm.get(this, "parentElement");
            }), set: undefined, enumerable: true, configurable: true,
        },
        childNodes: {
            get: rsvm.RsCreateGetter("childNodes", function childNodes() {
                return rsvm.get(this, "childNodes");
            }), set: undefined, enumerable: true, configurable: true,
        },
        firstChild: {
            get: rsvm.RsCreateGetter("firstChild", function firstChild() {
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                if (nodeArray.length > 0) {
                    return nodeArray[0];
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        lastChild: {
            get: rsvm.RsCreateGetter("lastChild", function lastChild() {
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                if (nodeArray.length > 0) {
                    return nodeArray[nodeArray.length - 1];
                } else {
                    return null;
                }
            }), set: undefined, enumerable: true, configurable: true,
        },
        previousSibling: {
            get: rsvm.RsCreateGetter("previousSibling", function previousSibling() {
                let value = null;
                if (this.parentNode !== null) {
                    let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                    let index = nodeArray.indexOf(this);
                    if (index != -1 && nodeArray[index - 1]) {
                        value = nodeArray[index - 1];
                    }
                }
                return value;
            }), set: undefined, enumerable: true, configurable: true,
        },
        nextSibling: {
            get: rsvm.RsCreateGetter("nextSibling", function nextSibling() {
                let value = null;
                if (this.parentNode !== null) {
                    let nodeArray = rsvm.RsGetPrivateProperty(this.parentNode, "nodeArray");
                    let index = nodeArray.indexOf(this);
                    if (index != -1 && nodeArray[index + 1]) {
                        value = nodeArray[index + 1];
                    }
                }
                return value;
            }), set: undefined, enumerable: true, configurable: true,
        },
        nodeValue: {
            get: rsvm.RsCreateGetter("nodeValue", function nodeValue() {
                return rsvm.get(this, "nodeValue");
            }), set: rsvm.RsCreateSetter("nodeValue", function nodeValue() {
                rsvm.set(this, "nodeValue", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        textContent: {
            get: rsvm.RsCreateGetter("textContent", function textContent() {
                if (rsvm.get(this, "nodeType") === 9 || rsvm.get(this, "nodeType") === 10) {
                    return null;
                }
                let text = "";
                for (const node of this.childNodes) {
                    if (node.nodeType === 3) {
                        text += node.data;
                    } else if (node.nodeType === 1) {
                        text += node.textContent;
                    }
                }
                return text;
            }), set: rsvm.RsCreateSetter("textContent", function textContent() {
                let isConnected = this.isConnected;
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                for (const node of nodeArray) {
                    rsvm.set(node, "parentNode", null);
                    if (node.nodeType === 1) {
                        rsvm.set(node, "parentElement", null);
                    }
                }
                nodeArray.splice(0);
                nodeArray.push(rsvm.prototype.Text.new(arguments[0]));
            }), enumerable: true, configurable: true,
        },
        ELEMENT_NODE: { value: 1, writable: false, enumerable: true, configurable: false, },
        ATTRIBUTE_NODE: { value: 2, writable: false, enumerable: true, configurable: false, },
        TEXT_NODE: { value: 3, writable: false, enumerable: true, configurable: false, },
        CDATA_SECTION_NODE: { value: 4, writable: false, enumerable: true, configurable: false, },
        ENTITY_REFERENCE_NODE: { value: 5, writable: false, enumerable: true, configurable: false, },
        ENTITY_NODE: { value: 6, writable: false, enumerable: true, configurable: false, },
        PROCESSING_INSTRUCTION_NODE: { value: 7, writable: false, enumerable: true, configurable: false, },
        COMMENT_NODE: { value: 8, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_NODE: { value: 9, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_TYPE_NODE: { value: 10, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_FRAGMENT_NODE: { value: 11, writable: false, enumerable: true, configurable: false, },
        NOTATION_NODE: { value: 12, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_POSITION_DISCONNECTED: { value: 1, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_POSITION_PRECEDING: { value: 2, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_POSITION_FOLLOWING: { value: 4, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_POSITION_CONTAINS: { value: 8, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_POSITION_CONTAINED_BY: { value: 16, writable: false, enumerable: true, configurable: false, },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: 32, writable: false, enumerable: true, configurable: false, },
        appendChild: {
            value: rsvm.RsCreateAction("appendChild", 1, function appendChild() {
                let addNode = arguments[0];
                if (!(addNode instanceof Node)) {
                    throw new DOMException("Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.", "TypeError");
                }
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                let index = nodeArray.indexOf(addNode);
                if (index != -1) {
                    nodeArray.splice(index, 1)
                }
                nodeArray.push(addNode);
                rsvm.set(addNode, "parentNode", this);
                // 处理children
                if (addNode.nodeType === 1) {
                    rsvm.set(addNode, "parentElement", this);
                }
                return arguments[0];
            }), writable: true, enumerable: true, configurable: true,
        },
        cloneNode: {
            value: rsvm.RsCreateAction("cloneNode", 0, function cloneNode() {
                return this;
            }), writable: true, enumerable: true, configurable: true,
        },
        compareDocumentPosition: {
            value: rsvm.RsCreateAction("compareDocumentPosition", 1, function compareDocumentPosition() {
            }), writable: true, enumerable: true, configurable: true,
        },
        contains: {
            value: rsvm.RsCreateAction("contains", 1, function contains() {
                let otherNode = arguments[0];
                if (otherNode == null) { return false; }
                let nodeAry = [];
                function travel(nodeArray) {
                    for (const node of nodeArray) {
                        nodeAry.push(node);
                        travel(rsvm.RsGetPrivateProperty(node, "nodeArray"));
                    }
                }
                travel(rsvm.RsGetPrivateProperty(this, "nodeArray"));
                return nodeAry.includes(otherNode);
            }), writable: true, enumerable: true, configurable: true,
        },
        getRootNode: {
            value: rsvm.RsCreateAction("getRootNode", 0, function getRootNode() {
                if (this.parentNode === null) {
                    return this;
                } else {
                    return this.parentNode;
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        hasChildNodes: {
            value: rsvm.RsCreateAction("hasChildNodes", 0, function hasChildNodes() {
                return this.childNodes.length !== 0;
            }), writable: true, enumerable: true, configurable: true,
        },
        insertBefore: {
            value: rsvm.RsCreateAction("insertBefore", 2, function insertBefore() {
                let newNode = arguments[0], referenceNode = arguments[1];
                if (!(newNode instanceof Node)) {
                    throw new DOMException("Failed to execute 'insertBefore' on 'Node': parameter 1 is not of type 'Node'.");
                }
                if (referenceNode != null && !(referenceNode instanceof Node)) {
                    throw new DOMException("Failed to execute 'insertBefore' on 'Node': parameter 2 is not of type 'Node'.");
                }
                if (newNode.parentNode != null) {
                    newNode.parentNode.removeChild(newNode);
                }
                let nodeArray = rsvm.RsGetPrivateProperty(this, "nodeArray");
                if (referenceNode == null) {        // 参考节点为null，则添加到末尾
                    nodeArray.push(newNode);
                    rsvm.set(newNode, "parentNode", this);
                    if (newNode.nodeType === 1) {
                        rsvm.set(newNode, "parentElement", this);
                    }
                    return newNode;
                } else {
                    let index = nodeArray.indexOf(referenceNode);
                    if (index != -1) {
                        nodeArray.splice(index, 0, newNode);
                        rsvm.set(newNode, "parentNode", this);
                        if (newNode.nodeType === 1) {
                            rsvm.set(newNode, "parentElement", this);
                        }
                        return newNode;
                    }
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        isDefaultNamespace: {
            value: rsvm.RsCreateAction("isDefaultNamespace", 1, function isDefaultNamespace() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isEqualNode: {
            value: rsvm.RsCreateAction("isEqualNode", 1, function isEqualNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isSameNode: {
            value: rsvm.RsCreateAction("isSameNode", 1, function isSameNode() {
            }), writable: true, enumerable: true, configurable: true,
        },
        lookupNamespaceURI: {
            value: rsvm.RsCreateAction("lookupNamespaceURI", 1, function lookupNamespaceURI() {
            }), writable: true, enumerable: true, configurable: true,
        },
        lookupPrefix: {
            value: rsvm.RsCreateAction("lookupPrefix", 1, function lookupPrefix() {
            }), writable: true, enumerable: true, configurable: true,
        },
        normalize: {
            value: rsvm.RsCreateAction("normalize", 0, function normalize() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeChild: {
            value: rsvm.RsCreateAction("removeChild", 1, function removeChild() {
                let removeNode = arguments[0];
                if (!(removeNode instanceof Node)) {
                    throw new DOMException("Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.");
                }

                let index = rsvm.RsGetPrivateProperty(this, "nodeArray").indexOf(removeNode);
                if (index != -1) {
                    rsvm.RsGetPrivateProperty(this, "nodeArray").splice(index, 1)
                    rsvm.set(removeNode, "parentNode", null);
                    // 处理children
                    if (removeNode.nodeType === 1) {
                        rsvm.set(removeNode, "parentElement", null);
                    }
                    return removeNode;
                } else {
                    throw new DOMException("Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.");
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        replaceChild: {
            value: rsvm.RsCreateAction("replaceChild", 2, function replaceChild() {
                let newNode = arguments[0], oldNode = arguments[1];
                if (!(newNode instanceof Node) || !(oldNode instanceof Node)) {
                    throw new DOMException("Failed to execute 'replaceChild' on 'Node': The node to be replaced is not a child of this node.");
                }
                let index = rsvm.RsGetPrivateProperty(this, "nodeArray").indexOf(oldNode);
                if (index != -1) {
                    rsvm.RsGetPrivateProperty(this, "nodeArray")[index] = newNode;
                    rsvm.set(newNode, "parentNode", this);
                    if (newNode.nodeType === 1) {
                        rsvm.set(newNode, "parentElement", this);
                    }
                    rsvm.set(oldNode, "parentNode", null);
                    if (oldNode.nodeType === 1) {
                        rsvm.set(oldNode, "parentElement", null);
                    }
                    return oldNode;
                } else {
                    throw new DOMException("Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.");
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: Node },
        [Symbol.toStringTag]: { value: "Node", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(Node, EventTarget);
    Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
}();