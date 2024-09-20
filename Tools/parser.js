(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        rsvm.DomParser = require('parse5')
    }, { "parse5": 13 }], 2: [function (require, module, exports) {
        "use strict";
        var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = { enumerable: true, get: function () { return m[k]; } };
            }
            Object.defineProperty(o, k2, desc);
        }) : (function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        }));
        var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
            Object.defineProperty(o, "default", { enumerable: true, value: v });
        }) : function (o, v) {
            o["default"] = v;
        });
        var __importStar = (this && this.__importStar) || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
            __setModuleDefault(result, mod);
            return result;
        };
        var __importDefault = (this && this.__importDefault) || function (mod) {
            return (mod && mod.__esModule) ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML = exports.determineBranch = exports.EntityDecoder = exports.DecodingMode = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
        var decode_data_html_js_1 = __importDefault(require("./generated/decode-data-html.js"));
        exports.htmlDecodeTree = decode_data_html_js_1.default;
        var decode_data_xml_js_1 = __importDefault(require("./generated/decode-data-xml.js"));
        exports.xmlDecodeTree = decode_data_xml_js_1.default;
        var decode_codepoint_js_1 = __importStar(require("./decode_codepoint.js"));
        exports.decodeCodePoint = decode_codepoint_js_1.default;
        var decode_codepoint_js_2 = require("./decode_codepoint.js");
        Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.replaceCodePoint; } });
        Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.fromCodePoint; } });
        var CharCodes;
        (function (CharCodes) {
            CharCodes[CharCodes["NUM"] = 35] = "NUM";
            CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
            CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
            CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
            CharCodes[CharCodes["NINE"] = 57] = "NINE";
            CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
            CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
            CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
            CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
            CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
            CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
            CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
        })(CharCodes || (CharCodes = {}));
        /** Bit that needs to be set to convert an upper case ASCII character to lower case */
        var TO_LOWER_BIT = 32;
        var BinTrieFlags;
        (function (BinTrieFlags) {
            BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
            BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
            BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
        })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
        function isNumber(code) {
            return code >= CharCodes.ZERO && code <= CharCodes.NINE;
        }
        function isHexadecimalCharacter(code) {
            return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F) ||
                (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F));
        }
        function isAsciiAlphaNumeric(code) {
            return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z) ||
                (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z) ||
                isNumber(code));
        }
        /**
         * Checks if the given character is a valid end character for an entity in an attribute.
         *
         * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
         * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
         */
        function isEntityInAttributeInvalidEnd(code) {
            return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
        }
        var EntityDecoderState;
        (function (EntityDecoderState) {
            EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
            EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
            EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
            EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
            EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
        })(EntityDecoderState || (EntityDecoderState = {}));
        var DecodingMode;
        (function (DecodingMode) {
            /** Entities in text nodes that can end with any character. */
            DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
            /** Only allow entities terminated with a semicolon. */
            DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
            /** Entities in attributes have limitations on ending characters. */
            DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
        })(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
        /**
         * Token decoder with support of writing partial entities.
         */
        var EntityDecoder = /** @class */ (function () {
            function EntityDecoder(
                /** The tree used to decode entities. */
                decodeTree,
                /**
                 * The function that is called when a codepoint is decoded.
                 *
                 * For multi-byte named entities, this will be called multiple times,
                 * with the second codepoint, and the same `consumed` value.
                 *
                 * @param codepoint The decoded codepoint.
                 * @param consumed The number of bytes consumed by the decoder.
                 */
                emitCodePoint,
                /** An object that is used to produce errors. */
                errors) {
                this.decodeTree = decodeTree;
                this.emitCodePoint = emitCodePoint;
                this.errors = errors;
                /** The current state of the decoder. */
                this.state = EntityDecoderState.EntityStart;
                /** Characters that were consumed while parsing an entity. */
                this.consumed = 1;
                /**
                 * The result of the entity.
                 *
                 * Either the result index of a numeric entity, or the codepoint of a
                 * numeric entity.
                 */
                this.result = 0;
                /** The current index in the decode tree. */
                this.treeIndex = 0;
                /** The number of characters that were consumed in excess. */
                this.excess = 1;
                /** The mode in which the decoder is operating. */
                this.decodeMode = DecodingMode.Strict;
            }
            /** Resets the instance to make it reusable. */
            EntityDecoder.prototype.startEntity = function (decodeMode) {
                this.decodeMode = decodeMode;
                this.state = EntityDecoderState.EntityStart;
                this.result = 0;
                this.treeIndex = 0;
                this.excess = 1;
                this.consumed = 1;
            };
            /**
             * Write an entity to the decoder. This can be called multiple times with partial entities.
             * If the entity is incomplete, the decoder will return -1.
             *
             * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
             * entity is incomplete, and resume when the next string is written.
             *
             * @param string The string containing the entity (or a continuation of the entity).
             * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
             * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
             */
            EntityDecoder.prototype.write = function (str, offset) {
                switch (this.state) {
                    case EntityDecoderState.EntityStart: {
                        if (str.charCodeAt(offset) === CharCodes.NUM) {
                            this.state = EntityDecoderState.NumericStart;
                            this.consumed += 1;
                            return this.stateNumericStart(str, offset + 1);
                        }
                        this.state = EntityDecoderState.NamedEntity;
                        return this.stateNamedEntity(str, offset);
                    }
                    case EntityDecoderState.NumericStart: {
                        return this.stateNumericStart(str, offset);
                    }
                    case EntityDecoderState.NumericDecimal: {
                        return this.stateNumericDecimal(str, offset);
                    }
                    case EntityDecoderState.NumericHex: {
                        return this.stateNumericHex(str, offset);
                    }
                    case EntityDecoderState.NamedEntity: {
                        return this.stateNamedEntity(str, offset);
                    }
                }
            };
            /**
             * Switches between the numeric decimal and hexadecimal states.
             *
             * Equivalent to the `Numeric character reference state` in the HTML spec.
             *
             * @param str The string containing the entity (or a continuation of the entity).
             * @param offset The current offset.
             * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
             */
            EntityDecoder.prototype.stateNumericStart = function (str, offset) {
                if (offset >= str.length) {
                    return -1;
                }
                if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
                    this.state = EntityDecoderState.NumericHex;
                    this.consumed += 1;
                    return this.stateNumericHex(str, offset + 1);
                }
                this.state = EntityDecoderState.NumericDecimal;
                return this.stateNumericDecimal(str, offset);
            };
            EntityDecoder.prototype.addToNumericResult = function (str, start, end, base) {
                if (start !== end) {
                    var digitCount = end - start;
                    this.result =
                        this.result * Math.pow(base, digitCount) +
                        parseInt(str.substr(start, digitCount), base);
                    this.consumed += digitCount;
                }
            };
            /**
             * Parses a hexadecimal numeric entity.
             *
             * Equivalent to the `Hexademical character reference state` in the HTML spec.
             *
             * @param str The string containing the entity (or a continuation of the entity).
             * @param offset The current offset.
             * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
             */
            EntityDecoder.prototype.stateNumericHex = function (str, offset) {
                var startIdx = offset;
                while (offset < str.length) {
                    var char = str.charCodeAt(offset);
                    if (isNumber(char) || isHexadecimalCharacter(char)) {
                        offset += 1;
                    }
                    else {
                        this.addToNumericResult(str, startIdx, offset, 16);
                        return this.emitNumericEntity(char, 3);
                    }
                }
                this.addToNumericResult(str, startIdx, offset, 16);
                return -1;
            };
            /**
             * Parses a decimal numeric entity.
             *
             * Equivalent to the `Decimal character reference state` in the HTML spec.
             *
             * @param str The string containing the entity (or a continuation of the entity).
             * @param offset The current offset.
             * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
             */
            EntityDecoder.prototype.stateNumericDecimal = function (str, offset) {
                var startIdx = offset;
                while (offset < str.length) {
                    var char = str.charCodeAt(offset);
                    if (isNumber(char)) {
                        offset += 1;
                    }
                    else {
                        this.addToNumericResult(str, startIdx, offset, 10);
                        return this.emitNumericEntity(char, 2);
                    }
                }
                this.addToNumericResult(str, startIdx, offset, 10);
                return -1;
            };
            /**
             * Validate and emit a numeric entity.
             *
             * Implements the logic from the `Hexademical character reference start
             * state` and `Numeric character reference end state` in the HTML spec.
             *
             * @param lastCp The last code point of the entity. Used to see if the
             *               entity was terminated with a semicolon.
             * @param expectedLength The minimum number of characters that should be
             *                       consumed. Used to validate that at least one digit
             *                       was consumed.
             * @returns The number of characters that were consumed.
             */
            EntityDecoder.prototype.emitNumericEntity = function (lastCp, expectedLength) {
                var _a;
                // Ensure we consumed at least one digit.
                if (this.consumed <= expectedLength) {
                    (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                    return 0;
                }
                // Figure out if this is a legit end of the entity
                if (lastCp === CharCodes.SEMI) {
                    this.consumed += 1;
                }
                else if (this.decodeMode === DecodingMode.Strict) {
                    return 0;
                }
                this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
                if (this.errors) {
                    if (lastCp !== CharCodes.SEMI) {
                        this.errors.missingSemicolonAfterCharacterReference();
                    }
                    this.errors.validateNumericCharacterReference(this.result);
                }
                return this.consumed;
            };
            /**
             * Parses a named entity.
             *
             * Equivalent to the `Named character reference state` in the HTML spec.
             *
             * @param str The string containing the entity (or a continuation of the entity).
             * @param offset The current offset.
             * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
             */
            EntityDecoder.prototype.stateNamedEntity = function (str, offset) {
                var decodeTree = this.decodeTree;
                var current = decodeTree[this.treeIndex];
                // The mask is the number of bytes of the value, including the current byte.
                var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
                for (; offset < str.length; offset++, this.excess++) {
                    var char = str.charCodeAt(offset);
                    this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
                    if (this.treeIndex < 0) {
                        return this.result === 0 ||
                            // If we are parsing an attribute
                            (this.decodeMode === DecodingMode.Attribute &&
                                // We shouldn't have consumed any characters after the entity,
                                (valueLength === 0 ||
                                    // And there should be no invalid characters.
                                    isEntityInAttributeInvalidEnd(char)))
                            ? 0
                            : this.emitNotTerminatedNamedEntity();
                    }
                    current = decodeTree[this.treeIndex];
                    valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
                    // If the branch is a value, store it and continue
                    if (valueLength !== 0) {
                        // If the entity is terminated by a semicolon, we are done.
                        if (char === CharCodes.SEMI) {
                            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                        }
                        // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                        if (this.decodeMode !== DecodingMode.Strict) {
                            this.result = this.treeIndex;
                            this.consumed += this.excess;
                            this.excess = 0;
                        }
                    }
                }
                return -1;
            };
            /**
             * Emit a named entity that was not terminated with a semicolon.
             *
             * @returns The number of characters consumed.
             */
            EntityDecoder.prototype.emitNotTerminatedNamedEntity = function () {
                var _a;
                var _b = this, result = _b.result, decodeTree = _b.decodeTree;
                var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
                this.emitNamedEntityData(result, valueLength, this.consumed);
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
                return this.consumed;
            };
            /**
             * Emit a named entity.
             *
             * @param result The index of the entity in the decode tree.
             * @param valueLength The number of bytes in the entity.
             * @param consumed The number of characters consumed.
             *
             * @returns The number of characters consumed.
             */
            EntityDecoder.prototype.emitNamedEntityData = function (result, valueLength, consumed) {
                var decodeTree = this.decodeTree;
                this.emitCodePoint(valueLength === 1
                    ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
                    : decodeTree[result + 1], consumed);
                if (valueLength === 3) {
                    // For multi-byte values, we need to emit the second byte.
                    this.emitCodePoint(decodeTree[result + 2], consumed);
                }
                return consumed;
            };
            /**
             * Signal to the parser that the end of the input was reached.
             *
             * Remaining data will be emitted and relevant errors will be produced.
             *
             * @returns The number of characters consumed.
             */
            EntityDecoder.prototype.end = function () {
                var _a;
                switch (this.state) {
                    case EntityDecoderState.NamedEntity: {
                        // Emit a named entity if we have one.
                        return this.result !== 0 &&
                            (this.decodeMode !== DecodingMode.Attribute ||
                                this.result === this.treeIndex)
                            ? this.emitNotTerminatedNamedEntity()
                            : 0;
                    }
                    // Otherwise, emit a numeric entity if we have one.
                    case EntityDecoderState.NumericDecimal: {
                        return this.emitNumericEntity(0, 2);
                    }
                    case EntityDecoderState.NumericHex: {
                        return this.emitNumericEntity(0, 3);
                    }
                    case EntityDecoderState.NumericStart: {
                        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                        return 0;
                    }
                    case EntityDecoderState.EntityStart: {
                        // Return 0 if we have no entity.
                        return 0;
                    }
                }
            };
            return EntityDecoder;
        }());
        exports.EntityDecoder = EntityDecoder;
        /**
         * Creates a function that decodes entities in a string.
         *
         * @param decodeTree The decode tree.
         * @returns A function that decodes entities in a string.
         */
        function getDecoder(decodeTree) {
            var ret = "";
            var decoder = new EntityDecoder(decodeTree, function (str) { return (ret += (0, decode_codepoint_js_1.fromCodePoint)(str)); });
            return function decodeWithTrie(str, decodeMode) {
                var lastIndex = 0;
                var offset = 0;
                while ((offset = str.indexOf("&", offset)) >= 0) {
                    ret += str.slice(lastIndex, offset);
                    decoder.startEntity(decodeMode);
                    var len = decoder.write(str,
                        // Skip the "&"
                        offset + 1);
                    if (len < 0) {
                        lastIndex = offset + decoder.end();
                        break;
                    }
                    lastIndex = offset + len;
                    // If `len` is 0, skip the current `&` and continue.
                    offset = len === 0 ? lastIndex + 1 : lastIndex;
                }
                var result = ret + str.slice(lastIndex);
                // Make sure we don't keep a reference to the final string.
                ret = "";
                return result;
            };
        }
        /**
         * Determines the branch of the current node that is taken given the current
         * character. This function is used to traverse the trie.
         *
         * @param decodeTree The trie.
         * @param current The current node.
         * @param nodeIdx The index right after the current node and its value.
         * @param char The current character.
         * @returns The index of the next node, or -1 if no branch is taken.
         */
        function determineBranch(decodeTree, current, nodeIdx, char) {
            var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
            var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
            // Case 1: Single branch encoded in jump offset
            if (branchCount === 0) {
                return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
            }
            // Case 2: Multiple branches encoded in jump table
            if (jumpOffset) {
                var value = char - jumpOffset;
                return value < 0 || value >= branchCount
                    ? -1
                    : decodeTree[nodeIdx + value] - 1;
            }
            // Case 3: Multiple branches encoded in dictionary
            // Binary search for the character.
            var lo = nodeIdx;
            var hi = lo + branchCount - 1;
            while (lo <= hi) {
                var mid = (lo + hi) >>> 1;
                var midVal = decodeTree[mid];
                if (midVal < char) {
                    lo = mid + 1;
                }
                else if (midVal > char) {
                    hi = mid - 1;
                }
                else {
                    return decodeTree[mid + branchCount];
                }
            }
            return -1;
        }
        exports.determineBranch = determineBranch;
        var htmlDecoder = getDecoder(decode_data_html_js_1.default);
        var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
        /**
         * Decodes an HTML string.
         *
         * @param str The string to decode.
         * @param mode The decoding mode.
         * @returns The decoded string.
         */
        function decodeHTML(str, mode) {
            if (mode === void 0) { mode = DecodingMode.Legacy; }
            return htmlDecoder(str, mode);
        }
        exports.decodeHTML = decodeHTML;
        /**
         * Decodes an HTML string in an attribute.
         *
         * @param str The string to decode.
         * @returns The decoded string.
         */
        function decodeHTMLAttribute(str) {
            return htmlDecoder(str, DecodingMode.Attribute);
        }
        exports.decodeHTMLAttribute = decodeHTMLAttribute;
        /**
         * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
         *
         * @param str The string to decode.
         * @returns The decoded string.
         */
        function decodeHTMLStrict(str) {
            return htmlDecoder(str, DecodingMode.Strict);
        }
        exports.decodeHTMLStrict = decodeHTMLStrict;
        /**
         * Decodes an XML string, requiring all entities to be terminated by a semicolon.
         *
         * @param str The string to decode.
         * @returns The decoded string.
         */
        function decodeXML(str) {
            return xmlDecoder(str, DecodingMode.Strict);
        }
        exports.decodeXML = decodeXML;

    }, { "./decode_codepoint.js": 3, "./generated/decode-data-html.js": 5, "./generated/decode-data-xml.js": 6 }], 3: [function (require, module, exports) {
        "use strict";
        // Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
        var _a;
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.replaceCodePoint = exports.fromCodePoint = void 0;
        var decodeMap = new Map([
            [0, 65533],
            // C1 Unicode control character reference replacements
            [128, 8364],
            [130, 8218],
            [131, 402],
            [132, 8222],
            [133, 8230],
            [134, 8224],
            [135, 8225],
            [136, 710],
            [137, 8240],
            [138, 352],
            [139, 8249],
            [140, 338],
            [142, 381],
            [145, 8216],
            [146, 8217],
            [147, 8220],
            [148, 8221],
            [149, 8226],
            [150, 8211],
            [151, 8212],
            [152, 732],
            [153, 8482],
            [154, 353],
            [155, 8250],
            [156, 339],
            [158, 382],
            [159, 376],
        ]);
        /**
         * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
         */
        exports.fromCodePoint =
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
            (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
                var output = "";
                if (codePoint > 0xffff) {
                    codePoint -= 0x10000;
                    output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
                    codePoint = 0xdc00 | (codePoint & 0x3ff);
                }
                output += String.fromCharCode(codePoint);
                return output;
            };
        /**
         * Replace the given code point with a replacement character if it is a
         * surrogate or is outside the valid range. Otherwise return the code
         * point unchanged.
         */
        function replaceCodePoint(codePoint) {
            var _a;
            if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
                return 0xfffd;
            }
            return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
        }
        exports.replaceCodePoint = replaceCodePoint;
        /**
         * Replace the code point if relevant, then convert it to a string.
         *
         * @deprecated Use `fromCodePoint(replaceCodePoint(codePoint))` instead.
         * @param codePoint The code point to decode.
         * @returns The decoded code point.
         */
        function decodeCodePoint(codePoint) {
            return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
        }
        exports.default = decodeCodePoint;

    }, {}], 4: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
        exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
        var xmlCodeMap = new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [39, "&apos;"],
            [60, "&lt;"],
            [62, "&gt;"],
        ]);
        // For compatibility with node < 4, we wrap `codePointAt`
        exports.getCodePoint =
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            String.prototype.codePointAt != null
                ? function (str, index) { return str.codePointAt(index); }
                : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                function (c, index) {
                    return (c.charCodeAt(index) & 0xfc00) === 0xd800
                        ? (c.charCodeAt(index) - 0xd800) * 0x400 +
                        c.charCodeAt(index + 1) -
                        0xdc00 +
                        0x10000
                        : c.charCodeAt(index);
                };
        /**
         * Encodes all non-ASCII characters, as well as characters not valid in XML
         * documents using XML entities.
         *
         * If a character has no equivalent entity, a
         * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
         */
        function encodeXML(str) {
            var ret = "";
            var lastIdx = 0;
            var match;
            while ((match = exports.xmlReplacer.exec(str)) !== null) {
                var i = match.index;
                var char = str.charCodeAt(i);
                var next = xmlCodeMap.get(char);
                if (next !== undefined) {
                    ret += str.substring(lastIdx, i) + next;
                    lastIdx = i + 1;
                }
                else {
                    ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
                    // Increase by 1 if we have a surrogate pair
                    lastIdx = exports.xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
                }
            }
            return ret + str.substr(lastIdx);
        }
        exports.encodeXML = encodeXML;
        /**
         * Encodes all non-ASCII characters, as well as characters not valid in XML
         * documents using numeric hexadecimal reference (eg. `&#xfc;`).
         *
         * Have a look at `escapeUTF8` if you want a more concise output at the expense
         * of reduced transportability.
         *
         * @param data String to escape.
         */
        exports.escape = encodeXML;
        /**
         * Creates a function that escapes all characters matched by the given regular
         * expression using the given map of characters to escape to their entities.
         *
         * @param regex Regular expression to match characters to escape.
         * @param map Map of characters to escape to their entities.
         *
         * @returns Function that escapes all characters matched by the given regular
         * expression using the given map of characters to escape to their entities.
         */
        function getEscaper(regex, map) {
            return function escape(data) {
                var match;
                var lastIdx = 0;
                var result = "";
                while ((match = regex.exec(data))) {
                    if (lastIdx !== match.index) {
                        result += data.substring(lastIdx, match.index);
                    }
                    // We know that this character will be in the map.
                    result += map.get(match[0].charCodeAt(0));
                    // Every match will be of length 1
                    lastIdx = match.index + 1;
                }
                return result + data.substring(lastIdx);
            };
        }
        /**
         * Encodes all characters not valid in XML documents using XML entities.
         *
         * Note that the output will be character-set dependent.
         *
         * @param data String to escape.
         */
        exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
        /**
         * Encodes all characters that have to be escaped in HTML attributes,
         * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
         *
         * @param data String to escape.
         */
        exports.escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
        ]));
        /**
         * Encodes all characters that have to be escaped in HTML text,
         * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
         *
         * @param data String to escape.
         */
        exports.escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
            [38, "&amp;"],
            [60, "&lt;"],
            [62, "&gt;"],
            [160, "&nbsp;"],
        ]));

    }, {}], 5: [function (require, module, exports) {
        "use strict";
        // Generated using scripts/write-decode-map.ts
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = new Uint16Array(
            // prettier-ignore
            "\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
                .split("")
                .map(function (c) { return c.charCodeAt(0); }));

    }, {}], 6: [function (require, module, exports) {
        "use strict";
        // Generated using scripts/write-decode-map.ts
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = new Uint16Array(
            // prettier-ignore
            "\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
                .split("")
                .map(function (c) { return c.charCodeAt(0); }));

    }, {}], 7: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getDocumentMode = exports.isConforming = void 0;
        const html_js_1 = require("./html.js");
        //Const
        const VALID_DOCTYPE_NAME = 'html';
        const VALID_SYSTEM_ID = 'about:legacy-compat';
        const QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
        const QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
            '+//silmaril//dtd html pro v0r11 19970101//',
            '-//as//dtd html 3.0 aswedit + extensions//',
            '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
            '-//ietf//dtd html 2.0 level 1//',
            '-//ietf//dtd html 2.0 level 2//',
            '-//ietf//dtd html 2.0 strict level 1//',
            '-//ietf//dtd html 2.0 strict level 2//',
            '-//ietf//dtd html 2.0 strict//',
            '-//ietf//dtd html 2.0//',
            '-//ietf//dtd html 2.1e//',
            '-//ietf//dtd html 3.0//',
            '-//ietf//dtd html 3.2 final//',
            '-//ietf//dtd html 3.2//',
            '-//ietf//dtd html 3//',
            '-//ietf//dtd html level 0//',
            '-//ietf//dtd html level 1//',
            '-//ietf//dtd html level 2//',
            '-//ietf//dtd html level 3//',
            '-//ietf//dtd html strict level 0//',
            '-//ietf//dtd html strict level 1//',
            '-//ietf//dtd html strict level 2//',
            '-//ietf//dtd html strict level 3//',
            '-//ietf//dtd html strict//',
            '-//ietf//dtd html//',
            '-//metrius//dtd metrius presentational//',
            '-//microsoft//dtd internet explorer 2.0 html strict//',
            '-//microsoft//dtd internet explorer 2.0 html//',
            '-//microsoft//dtd internet explorer 2.0 tables//',
            '-//microsoft//dtd internet explorer 3.0 html strict//',
            '-//microsoft//dtd internet explorer 3.0 html//',
            '-//microsoft//dtd internet explorer 3.0 tables//',
            '-//netscape comm. corp.//dtd html//',
            '-//netscape comm. corp.//dtd strict html//',
            "-//o'reilly and associates//dtd html 2.0//",
            "-//o'reilly and associates//dtd html extended 1.0//",
            "-//o'reilly and associates//dtd html extended relaxed 1.0//",
            '-//sq//dtd html 2.0 hotmetal + extensions//',
            '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
            '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
            '-//spyglass//dtd html 2.0 extended//',
            '-//sun microsystems corp.//dtd hotjava html//',
            '-//sun microsystems corp.//dtd hotjava strict html//',
            '-//w3c//dtd html 3 1995-03-24//',
            '-//w3c//dtd html 3.2 draft//',
            '-//w3c//dtd html 3.2 final//',
            '-//w3c//dtd html 3.2//',
            '-//w3c//dtd html 3.2s draft//',
            '-//w3c//dtd html 4.0 frameset//',
            '-//w3c//dtd html 4.0 transitional//',
            '-//w3c//dtd html experimental 19960712//',
            '-//w3c//dtd html experimental 970421//',
            '-//w3c//dtd w3 html//',
            '-//w3o//dtd w3 html 3.0//',
            '-//webtechs//dtd mozilla html 2.0//',
            '-//webtechs//dtd mozilla html//',
        ];
        const QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
            ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
            '-//w3c//dtd html 4.01 frameset//',
            '-//w3c//dtd html 4.01 transitional//',
        ];
        const QUIRKS_MODE_PUBLIC_IDS = new Set([
            '-//w3o//dtd w3 html strict 3.0//en//',
            '-/w3c/dtd html 4.0 transitional/en',
            'html',
        ]);
        const LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'];
        const LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
            ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
            '-//w3c//dtd html 4.01 frameset//',
            '-//w3c//dtd html 4.01 transitional//',
        ];
        //Utils
        function hasPrefix(publicId, prefixes) {
            return prefixes.some((prefix) => publicId.startsWith(prefix));
        }
        //API
        function isConforming(token) {
            return (token.name === VALID_DOCTYPE_NAME &&
                token.publicId === null &&
                (token.systemId === null || token.systemId === VALID_SYSTEM_ID));
        }
        exports.isConforming = isConforming;
        function getDocumentMode(token) {
            if (token.name !== VALID_DOCTYPE_NAME) {
                return html_js_1.DOCUMENT_MODE.QUIRKS;
            }
            const { systemId } = token;
            if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
                return html_js_1.DOCUMENT_MODE.QUIRKS;
            }
            let { publicId } = token;
            if (publicId !== null) {
                publicId = publicId.toLowerCase();
                if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
                    return html_js_1.DOCUMENT_MODE.QUIRKS;
                }
                let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
                if (hasPrefix(publicId, prefixes)) {
                    return html_js_1.DOCUMENT_MODE.QUIRKS;
                }
                prefixes =
                    systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
                if (hasPrefix(publicId, prefixes)) {
                    return html_js_1.DOCUMENT_MODE.LIMITED_QUIRKS;
                }
            }
            return html_js_1.DOCUMENT_MODE.NO_QUIRKS;
        }
        exports.getDocumentMode = getDocumentMode;

    }, { "./html.js": 10 }], 8: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ERR = void 0;
        var ERR;
        (function (ERR) {
            ERR["controlCharacterInInputStream"] = "control-character-in-input-stream";
            ERR["noncharacterInInputStream"] = "noncharacter-in-input-stream";
            ERR["surrogateInInputStream"] = "surrogate-in-input-stream";
            ERR["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
            ERR["endTagWithAttributes"] = "end-tag-with-attributes";
            ERR["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
            ERR["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
            ERR["unexpectedNullCharacter"] = "unexpected-null-character";
            ERR["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
            ERR["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
            ERR["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
            ERR["missingEndTagName"] = "missing-end-tag-name";
            ERR["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
            ERR["unknownNamedCharacterReference"] = "unknown-named-character-reference";
            ERR["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
            ERR["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
            ERR["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
            ERR["eofBeforeTagName"] = "eof-before-tag-name";
            ERR["eofInTag"] = "eof-in-tag";
            ERR["missingAttributeValue"] = "missing-attribute-value";
            ERR["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
            ERR["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
            ERR["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
            ERR["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
            ERR["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
            ERR["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
            ERR["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
            ERR["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
            ERR["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
            ERR["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
            ERR["cdataInHtmlContent"] = "cdata-in-html-content";
            ERR["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
            ERR["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
            ERR["eofInDoctype"] = "eof-in-doctype";
            ERR["nestedComment"] = "nested-comment";
            ERR["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
            ERR["eofInComment"] = "eof-in-comment";
            ERR["incorrectlyClosedComment"] = "incorrectly-closed-comment";
            ERR["eofInCdata"] = "eof-in-cdata";
            ERR["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
            ERR["nullCharacterReference"] = "null-character-reference";
            ERR["surrogateCharacterReference"] = "surrogate-character-reference";
            ERR["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
            ERR["controlCharacterReference"] = "control-character-reference";
            ERR["noncharacterCharacterReference"] = "noncharacter-character-reference";
            ERR["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
            ERR["missingDoctypeName"] = "missing-doctype-name";
            ERR["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
            ERR["duplicateAttribute"] = "duplicate-attribute";
            ERR["nonConformingDoctype"] = "non-conforming-doctype";
            ERR["missingDoctype"] = "missing-doctype";
            ERR["misplacedDoctype"] = "misplaced-doctype";
            ERR["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
            ERR["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
            ERR["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
            ERR["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
            ERR["abandonedHeadElementChild"] = "abandoned-head-element-child";
            ERR["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
            ERR["nestedNoscriptInHead"] = "nested-noscript-in-head";
            ERR["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
        })(ERR = exports.ERR || (exports.ERR = {}));

    }, {}], 9: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isIntegrationPoint = exports.adjustTokenSVGTagName = exports.adjustTokenXMLAttrs = exports.adjustTokenSVGAttrs = exports.adjustTokenMathMLAttrs = exports.causesExit = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
        const html_js_1 = require("./html.js");
        //MIME types
        const MIME_TYPES = {
            TEXT_HTML: 'text/html',
            APPLICATION_XML: 'application/xhtml+xml',
        };
        //Attributes
        const DEFINITION_URL_ATTR = 'definitionurl';
        const ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL';
        const SVG_ATTRS_ADJUSTMENT_MAP = new Map([
            'attributeName',
            'attributeType',
            'baseFrequency',
            'baseProfile',
            'calcMode',
            'clipPathUnits',
            'diffuseConstant',
            'edgeMode',
            'filterUnits',
            'glyphRef',
            'gradientTransform',
            'gradientUnits',
            'kernelMatrix',
            'kernelUnitLength',
            'keyPoints',
            'keySplines',
            'keyTimes',
            'lengthAdjust',
            'limitingConeAngle',
            'markerHeight',
            'markerUnits',
            'markerWidth',
            'maskContentUnits',
            'maskUnits',
            'numOctaves',
            'pathLength',
            'patternContentUnits',
            'patternTransform',
            'patternUnits',
            'pointsAtX',
            'pointsAtY',
            'pointsAtZ',
            'preserveAlpha',
            'preserveAspectRatio',
            'primitiveUnits',
            'refX',
            'refY',
            'repeatCount',
            'repeatDur',
            'requiredExtensions',
            'requiredFeatures',
            'specularConstant',
            'specularExponent',
            'spreadMethod',
            'startOffset',
            'stdDeviation',
            'stitchTiles',
            'surfaceScale',
            'systemLanguage',
            'tableValues',
            'targetX',
            'targetY',
            'textLength',
            'viewBox',
            'viewTarget',
            'xChannelSelector',
            'yChannelSelector',
            'zoomAndPan',
        ].map((attr) => [attr.toLowerCase(), attr]));
        const XML_ATTRS_ADJUSTMENT_MAP = new Map([
            ['xlink:actuate', { prefix: 'xlink', name: 'actuate', namespace: html_js_1.NS.XLINK }],
            ['xlink:arcrole', { prefix: 'xlink', name: 'arcrole', namespace: html_js_1.NS.XLINK }],
            ['xlink:href', { prefix: 'xlink', name: 'href', namespace: html_js_1.NS.XLINK }],
            ['xlink:role', { prefix: 'xlink', name: 'role', namespace: html_js_1.NS.XLINK }],
            ['xlink:show', { prefix: 'xlink', name: 'show', namespace: html_js_1.NS.XLINK }],
            ['xlink:title', { prefix: 'xlink', name: 'title', namespace: html_js_1.NS.XLINK }],
            ['xlink:type', { prefix: 'xlink', name: 'type', namespace: html_js_1.NS.XLINK }],
            ['xml:base', { prefix: 'xml', name: 'base', namespace: html_js_1.NS.XML }],
            ['xml:lang', { prefix: 'xml', name: 'lang', namespace: html_js_1.NS.XML }],
            ['xml:space', { prefix: 'xml', name: 'space', namespace: html_js_1.NS.XML }],
            ['xmlns', { prefix: '', name: 'xmlns', namespace: html_js_1.NS.XMLNS }],
            ['xmlns:xlink', { prefix: 'xmlns', name: 'xlink', namespace: html_js_1.NS.XMLNS }],
        ]);
        //SVG tag names adjustment map
        exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
            'altGlyph',
            'altGlyphDef',
            'altGlyphItem',
            'animateColor',
            'animateMotion',
            'animateTransform',
            'clipPath',
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
            'foreignObject',
            'glyphRef',
            'linearGradient',
            'radialGradient',
            'textPath',
        ].map((tn) => [tn.toLowerCase(), tn]));
        //Tags that causes exit from foreign content
        const EXITS_FOREIGN_CONTENT = new Set([
            html_js_1.TAG_ID.B,
            html_js_1.TAG_ID.BIG,
            html_js_1.TAG_ID.BLOCKQUOTE,
            html_js_1.TAG_ID.BODY,
            html_js_1.TAG_ID.BR,
            html_js_1.TAG_ID.CENTER,
            html_js_1.TAG_ID.CODE,
            html_js_1.TAG_ID.DD,
            html_js_1.TAG_ID.DIV,
            html_js_1.TAG_ID.DL,
            html_js_1.TAG_ID.DT,
            html_js_1.TAG_ID.EM,
            html_js_1.TAG_ID.EMBED,
            html_js_1.TAG_ID.H1,
            html_js_1.TAG_ID.H2,
            html_js_1.TAG_ID.H3,
            html_js_1.TAG_ID.H4,
            html_js_1.TAG_ID.H5,
            html_js_1.TAG_ID.H6,
            html_js_1.TAG_ID.HEAD,
            html_js_1.TAG_ID.HR,
            html_js_1.TAG_ID.I,
            html_js_1.TAG_ID.IMG,
            html_js_1.TAG_ID.LI,
            html_js_1.TAG_ID.LISTING,
            html_js_1.TAG_ID.MENU,
            html_js_1.TAG_ID.META,
            html_js_1.TAG_ID.NOBR,
            html_js_1.TAG_ID.OL,
            html_js_1.TAG_ID.P,
            html_js_1.TAG_ID.PRE,
            html_js_1.TAG_ID.RUBY,
            html_js_1.TAG_ID.S,
            html_js_1.TAG_ID.SMALL,
            html_js_1.TAG_ID.SPAN,
            html_js_1.TAG_ID.STRONG,
            html_js_1.TAG_ID.STRIKE,
            html_js_1.TAG_ID.SUB,
            html_js_1.TAG_ID.SUP,
            html_js_1.TAG_ID.TABLE,
            html_js_1.TAG_ID.TT,
            html_js_1.TAG_ID.U,
            html_js_1.TAG_ID.UL,
            html_js_1.TAG_ID.VAR,
        ]);
        //Check exit from foreign content
        function causesExit(startTagToken) {
            const tn = startTagToken.tagID;
            const isFontWithAttrs = tn === html_js_1.TAG_ID.FONT &&
                startTagToken.attrs.some(({ name }) => name === html_js_1.ATTRS.COLOR || name === html_js_1.ATTRS.SIZE || name === html_js_1.ATTRS.FACE);
            return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
        }
        exports.causesExit = causesExit;
        //Token adjustments
        function adjustTokenMathMLAttrs(token) {
            for (let i = 0; i < token.attrs.length; i++) {
                if (token.attrs[i].name === DEFINITION_URL_ATTR) {
                    token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
                    break;
                }
            }
        }
        exports.adjustTokenMathMLAttrs = adjustTokenMathMLAttrs;
        function adjustTokenSVGAttrs(token) {
            for (let i = 0; i < token.attrs.length; i++) {
                const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
                if (adjustedAttrName != null) {
                    token.attrs[i].name = adjustedAttrName;
                }
            }
        }
        exports.adjustTokenSVGAttrs = adjustTokenSVGAttrs;
        function adjustTokenXMLAttrs(token) {
            for (let i = 0; i < token.attrs.length; i++) {
                const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
                if (adjustedAttrEntry) {
                    token.attrs[i].prefix = adjustedAttrEntry.prefix;
                    token.attrs[i].name = adjustedAttrEntry.name;
                    token.attrs[i].namespace = adjustedAttrEntry.namespace;
                }
            }
        }
        exports.adjustTokenXMLAttrs = adjustTokenXMLAttrs;
        function adjustTokenSVGTagName(token) {
            const adjustedTagName = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
            if (adjustedTagName != null) {
                token.tagName = adjustedTagName;
                token.tagID = (0, html_js_1.getTagID)(token.tagName);
            }
        }
        exports.adjustTokenSVGTagName = adjustTokenSVGTagName;
        //Integration points
        function isMathMLTextIntegrationPoint(tn, ns) {
            return ns === html_js_1.NS.MATHML && (tn === html_js_1.TAG_ID.MI || tn === html_js_1.TAG_ID.MO || tn === html_js_1.TAG_ID.MN || tn === html_js_1.TAG_ID.MS || tn === html_js_1.TAG_ID.MTEXT);
        }
        function isHtmlIntegrationPoint(tn, ns, attrs) {
            if (ns === html_js_1.NS.MATHML && tn === html_js_1.TAG_ID.ANNOTATION_XML) {
                for (let i = 0; i < attrs.length; i++) {
                    if (attrs[i].name === html_js_1.ATTRS.ENCODING) {
                        const value = attrs[i].value.toLowerCase();
                        return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
                    }
                }
            }
            return ns === html_js_1.NS.SVG && (tn === html_js_1.TAG_ID.FOREIGN_OBJECT || tn === html_js_1.TAG_ID.DESC || tn === html_js_1.TAG_ID.TITLE);
        }
        function isIntegrationPoint(tn, ns, attrs, foreignNS) {
            return (((!foreignNS || foreignNS === html_js_1.NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) ||
                ((!foreignNS || foreignNS === html_js_1.NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)));
        }
        exports.isIntegrationPoint = isIntegrationPoint;

    }, { "./html.js": 10 }], 10: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.hasUnescapedText = exports.isNumberedHeader = exports.SPECIAL_ELEMENTS = exports.getTagID = exports.TAG_ID = exports.TAG_NAMES = exports.DOCUMENT_MODE = exports.ATTRS = exports.NS = void 0;
        /** All valid namespaces in HTML. */
        var NS;
        (function (NS) {
            NS["HTML"] = "http://www.w3.org/1999/xhtml";
            NS["MATHML"] = "http://www.w3.org/1998/Math/MathML";
            NS["SVG"] = "http://www.w3.org/2000/svg";
            NS["XLINK"] = "http://www.w3.org/1999/xlink";
            NS["XML"] = "http://www.w3.org/XML/1998/namespace";
            NS["XMLNS"] = "http://www.w3.org/2000/xmlns/";
        })(NS = exports.NS || (exports.NS = {}));
        var ATTRS;
        (function (ATTRS) {
            ATTRS["TYPE"] = "type";
            ATTRS["ACTION"] = "action";
            ATTRS["ENCODING"] = "encoding";
            ATTRS["PROMPT"] = "prompt";
            ATTRS["NAME"] = "name";
            ATTRS["COLOR"] = "color";
            ATTRS["FACE"] = "face";
            ATTRS["SIZE"] = "size";
        })(ATTRS = exports.ATTRS || (exports.ATTRS = {}));
        /**
         * The mode of the document.
         *
         * @see {@link https://dom.spec.whatwg.org/#concept-document-limited-quirks}
         */
        var DOCUMENT_MODE;
        (function (DOCUMENT_MODE) {
            DOCUMENT_MODE["NO_QUIRKS"] = "no-quirks";
            DOCUMENT_MODE["QUIRKS"] = "quirks";
            DOCUMENT_MODE["LIMITED_QUIRKS"] = "limited-quirks";
        })(DOCUMENT_MODE = exports.DOCUMENT_MODE || (exports.DOCUMENT_MODE = {}));
        var TAG_NAMES;
        (function (TAG_NAMES) {
            TAG_NAMES["A"] = "a";
            TAG_NAMES["ADDRESS"] = "address";
            TAG_NAMES["ANNOTATION_XML"] = "annotation-xml";
            TAG_NAMES["APPLET"] = "applet";
            TAG_NAMES["AREA"] = "area";
            TAG_NAMES["ARTICLE"] = "article";
            TAG_NAMES["ASIDE"] = "aside";
            TAG_NAMES["B"] = "b";
            TAG_NAMES["BASE"] = "base";
            TAG_NAMES["BASEFONT"] = "basefont";
            TAG_NAMES["BGSOUND"] = "bgsound";
            TAG_NAMES["BIG"] = "big";
            TAG_NAMES["BLOCKQUOTE"] = "blockquote";
            TAG_NAMES["BODY"] = "body";
            TAG_NAMES["BR"] = "br";
            TAG_NAMES["BUTTON"] = "button";
            TAG_NAMES["CAPTION"] = "caption";
            TAG_NAMES["CENTER"] = "center";
            TAG_NAMES["CODE"] = "code";
            TAG_NAMES["COL"] = "col";
            TAG_NAMES["COLGROUP"] = "colgroup";
            TAG_NAMES["DD"] = "dd";
            TAG_NAMES["DESC"] = "desc";
            TAG_NAMES["DETAILS"] = "details";
            TAG_NAMES["DIALOG"] = "dialog";
            TAG_NAMES["DIR"] = "dir";
            TAG_NAMES["DIV"] = "div";
            TAG_NAMES["DL"] = "dl";
            TAG_NAMES["DT"] = "dt";
            TAG_NAMES["EM"] = "em";
            TAG_NAMES["EMBED"] = "embed";
            TAG_NAMES["FIELDSET"] = "fieldset";
            TAG_NAMES["FIGCAPTION"] = "figcaption";
            TAG_NAMES["FIGURE"] = "figure";
            TAG_NAMES["FONT"] = "font";
            TAG_NAMES["FOOTER"] = "footer";
            TAG_NAMES["FOREIGN_OBJECT"] = "foreignObject";
            TAG_NAMES["FORM"] = "form";
            TAG_NAMES["FRAME"] = "frame";
            TAG_NAMES["FRAMESET"] = "frameset";
            TAG_NAMES["H1"] = "h1";
            TAG_NAMES["H2"] = "h2";
            TAG_NAMES["H3"] = "h3";
            TAG_NAMES["H4"] = "h4";
            TAG_NAMES["H5"] = "h5";
            TAG_NAMES["H6"] = "h6";
            TAG_NAMES["HEAD"] = "head";
            TAG_NAMES["HEADER"] = "header";
            TAG_NAMES["HGROUP"] = "hgroup";
            TAG_NAMES["HR"] = "hr";
            TAG_NAMES["HTML"] = "html";
            TAG_NAMES["I"] = "i";
            TAG_NAMES["IMG"] = "img";
            TAG_NAMES["IMAGE"] = "image";
            TAG_NAMES["INPUT"] = "input";
            TAG_NAMES["IFRAME"] = "iframe";
            TAG_NAMES["KEYGEN"] = "keygen";
            TAG_NAMES["LABEL"] = "label";
            TAG_NAMES["LI"] = "li";
            TAG_NAMES["LINK"] = "link";
            TAG_NAMES["LISTING"] = "listing";
            TAG_NAMES["MAIN"] = "main";
            TAG_NAMES["MALIGNMARK"] = "malignmark";
            TAG_NAMES["MARQUEE"] = "marquee";
            TAG_NAMES["MATH"] = "math";
            TAG_NAMES["MENU"] = "menu";
            TAG_NAMES["META"] = "meta";
            TAG_NAMES["MGLYPH"] = "mglyph";
            TAG_NAMES["MI"] = "mi";
            TAG_NAMES["MO"] = "mo";
            TAG_NAMES["MN"] = "mn";
            TAG_NAMES["MS"] = "ms";
            TAG_NAMES["MTEXT"] = "mtext";
            TAG_NAMES["NAV"] = "nav";
            TAG_NAMES["NOBR"] = "nobr";
            TAG_NAMES["NOFRAMES"] = "noframes";
            TAG_NAMES["NOEMBED"] = "noembed";
            TAG_NAMES["NOSCRIPT"] = "noscript";
            TAG_NAMES["OBJECT"] = "object";
            TAG_NAMES["OL"] = "ol";
            TAG_NAMES["OPTGROUP"] = "optgroup";
            TAG_NAMES["OPTION"] = "option";
            TAG_NAMES["P"] = "p";
            TAG_NAMES["PARAM"] = "param";
            TAG_NAMES["PLAINTEXT"] = "plaintext";
            TAG_NAMES["PRE"] = "pre";
            TAG_NAMES["RB"] = "rb";
            TAG_NAMES["RP"] = "rp";
            TAG_NAMES["RT"] = "rt";
            TAG_NAMES["RTC"] = "rtc";
            TAG_NAMES["RUBY"] = "ruby";
            TAG_NAMES["S"] = "s";
            TAG_NAMES["SCRIPT"] = "script";
            TAG_NAMES["SECTION"] = "section";
            TAG_NAMES["SELECT"] = "select";
            TAG_NAMES["SOURCE"] = "source";
            TAG_NAMES["SMALL"] = "small";
            TAG_NAMES["SPAN"] = "span";
            TAG_NAMES["STRIKE"] = "strike";
            TAG_NAMES["STRONG"] = "strong";
            TAG_NAMES["STYLE"] = "style";
            TAG_NAMES["SUB"] = "sub";
            TAG_NAMES["SUMMARY"] = "summary";
            TAG_NAMES["SUP"] = "sup";
            TAG_NAMES["TABLE"] = "table";
            TAG_NAMES["TBODY"] = "tbody";
            TAG_NAMES["TEMPLATE"] = "template";
            TAG_NAMES["TEXTAREA"] = "textarea";
            TAG_NAMES["TFOOT"] = "tfoot";
            TAG_NAMES["TD"] = "td";
            TAG_NAMES["TH"] = "th";
            TAG_NAMES["THEAD"] = "thead";
            TAG_NAMES["TITLE"] = "title";
            TAG_NAMES["TR"] = "tr";
            TAG_NAMES["TRACK"] = "track";
            TAG_NAMES["TT"] = "tt";
            TAG_NAMES["U"] = "u";
            TAG_NAMES["UL"] = "ul";
            TAG_NAMES["SVG"] = "svg";
            TAG_NAMES["VAR"] = "var";
            TAG_NAMES["WBR"] = "wbr";
            TAG_NAMES["XMP"] = "xmp";
        })(TAG_NAMES = exports.TAG_NAMES || (exports.TAG_NAMES = {}));
        /**
         * Tag IDs are numeric IDs for known tag names.
         *
         * We use tag IDs to improve the performance of tag name comparisons.
         */
        var TAG_ID;
        (function (TAG_ID) {
            TAG_ID[TAG_ID["UNKNOWN"] = 0] = "UNKNOWN";
            TAG_ID[TAG_ID["A"] = 1] = "A";
            TAG_ID[TAG_ID["ADDRESS"] = 2] = "ADDRESS";
            TAG_ID[TAG_ID["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
            TAG_ID[TAG_ID["APPLET"] = 4] = "APPLET";
            TAG_ID[TAG_ID["AREA"] = 5] = "AREA";
            TAG_ID[TAG_ID["ARTICLE"] = 6] = "ARTICLE";
            TAG_ID[TAG_ID["ASIDE"] = 7] = "ASIDE";
            TAG_ID[TAG_ID["B"] = 8] = "B";
            TAG_ID[TAG_ID["BASE"] = 9] = "BASE";
            TAG_ID[TAG_ID["BASEFONT"] = 10] = "BASEFONT";
            TAG_ID[TAG_ID["BGSOUND"] = 11] = "BGSOUND";
            TAG_ID[TAG_ID["BIG"] = 12] = "BIG";
            TAG_ID[TAG_ID["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
            TAG_ID[TAG_ID["BODY"] = 14] = "BODY";
            TAG_ID[TAG_ID["BR"] = 15] = "BR";
            TAG_ID[TAG_ID["BUTTON"] = 16] = "BUTTON";
            TAG_ID[TAG_ID["CAPTION"] = 17] = "CAPTION";
            TAG_ID[TAG_ID["CENTER"] = 18] = "CENTER";
            TAG_ID[TAG_ID["CODE"] = 19] = "CODE";
            TAG_ID[TAG_ID["COL"] = 20] = "COL";
            TAG_ID[TAG_ID["COLGROUP"] = 21] = "COLGROUP";
            TAG_ID[TAG_ID["DD"] = 22] = "DD";
            TAG_ID[TAG_ID["DESC"] = 23] = "DESC";
            TAG_ID[TAG_ID["DETAILS"] = 24] = "DETAILS";
            TAG_ID[TAG_ID["DIALOG"] = 25] = "DIALOG";
            TAG_ID[TAG_ID["DIR"] = 26] = "DIR";
            TAG_ID[TAG_ID["DIV"] = 27] = "DIV";
            TAG_ID[TAG_ID["DL"] = 28] = "DL";
            TAG_ID[TAG_ID["DT"] = 29] = "DT";
            TAG_ID[TAG_ID["EM"] = 30] = "EM";
            TAG_ID[TAG_ID["EMBED"] = 31] = "EMBED";
            TAG_ID[TAG_ID["FIELDSET"] = 32] = "FIELDSET";
            TAG_ID[TAG_ID["FIGCAPTION"] = 33] = "FIGCAPTION";
            TAG_ID[TAG_ID["FIGURE"] = 34] = "FIGURE";
            TAG_ID[TAG_ID["FONT"] = 35] = "FONT";
            TAG_ID[TAG_ID["FOOTER"] = 36] = "FOOTER";
            TAG_ID[TAG_ID["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
            TAG_ID[TAG_ID["FORM"] = 38] = "FORM";
            TAG_ID[TAG_ID["FRAME"] = 39] = "FRAME";
            TAG_ID[TAG_ID["FRAMESET"] = 40] = "FRAMESET";
            TAG_ID[TAG_ID["H1"] = 41] = "H1";
            TAG_ID[TAG_ID["H2"] = 42] = "H2";
            TAG_ID[TAG_ID["H3"] = 43] = "H3";
            TAG_ID[TAG_ID["H4"] = 44] = "H4";
            TAG_ID[TAG_ID["H5"] = 45] = "H5";
            TAG_ID[TAG_ID["H6"] = 46] = "H6";
            TAG_ID[TAG_ID["HEAD"] = 47] = "HEAD";
            TAG_ID[TAG_ID["HEADER"] = 48] = "HEADER";
            TAG_ID[TAG_ID["HGROUP"] = 49] = "HGROUP";
            TAG_ID[TAG_ID["HR"] = 50] = "HR";
            TAG_ID[TAG_ID["HTML"] = 51] = "HTML";
            TAG_ID[TAG_ID["I"] = 52] = "I";
            TAG_ID[TAG_ID["IMG"] = 53] = "IMG";
            TAG_ID[TAG_ID["IMAGE"] = 54] = "IMAGE";
            TAG_ID[TAG_ID["INPUT"] = 55] = "INPUT";
            TAG_ID[TAG_ID["IFRAME"] = 56] = "IFRAME";
            TAG_ID[TAG_ID["KEYGEN"] = 57] = "KEYGEN";
            TAG_ID[TAG_ID["LABEL"] = 58] = "LABEL";
            TAG_ID[TAG_ID["LI"] = 59] = "LI";
            TAG_ID[TAG_ID["LINK"] = 60] = "LINK";
            TAG_ID[TAG_ID["LISTING"] = 61] = "LISTING";
            TAG_ID[TAG_ID["MAIN"] = 62] = "MAIN";
            TAG_ID[TAG_ID["MALIGNMARK"] = 63] = "MALIGNMARK";
            TAG_ID[TAG_ID["MARQUEE"] = 64] = "MARQUEE";
            TAG_ID[TAG_ID["MATH"] = 65] = "MATH";
            TAG_ID[TAG_ID["MENU"] = 66] = "MENU";
            TAG_ID[TAG_ID["META"] = 67] = "META";
            TAG_ID[TAG_ID["MGLYPH"] = 68] = "MGLYPH";
            TAG_ID[TAG_ID["MI"] = 69] = "MI";
            TAG_ID[TAG_ID["MO"] = 70] = "MO";
            TAG_ID[TAG_ID["MN"] = 71] = "MN";
            TAG_ID[TAG_ID["MS"] = 72] = "MS";
            TAG_ID[TAG_ID["MTEXT"] = 73] = "MTEXT";
            TAG_ID[TAG_ID["NAV"] = 74] = "NAV";
            TAG_ID[TAG_ID["NOBR"] = 75] = "NOBR";
            TAG_ID[TAG_ID["NOFRAMES"] = 76] = "NOFRAMES";
            TAG_ID[TAG_ID["NOEMBED"] = 77] = "NOEMBED";
            TAG_ID[TAG_ID["NOSCRIPT"] = 78] = "NOSCRIPT";
            TAG_ID[TAG_ID["OBJECT"] = 79] = "OBJECT";
            TAG_ID[TAG_ID["OL"] = 80] = "OL";
            TAG_ID[TAG_ID["OPTGROUP"] = 81] = "OPTGROUP";
            TAG_ID[TAG_ID["OPTION"] = 82] = "OPTION";
            TAG_ID[TAG_ID["P"] = 83] = "P";
            TAG_ID[TAG_ID["PARAM"] = 84] = "PARAM";
            TAG_ID[TAG_ID["PLAINTEXT"] = 85] = "PLAINTEXT";
            TAG_ID[TAG_ID["PRE"] = 86] = "PRE";
            TAG_ID[TAG_ID["RB"] = 87] = "RB";
            TAG_ID[TAG_ID["RP"] = 88] = "RP";
            TAG_ID[TAG_ID["RT"] = 89] = "RT";
            TAG_ID[TAG_ID["RTC"] = 90] = "RTC";
            TAG_ID[TAG_ID["RUBY"] = 91] = "RUBY";
            TAG_ID[TAG_ID["S"] = 92] = "S";
            TAG_ID[TAG_ID["SCRIPT"] = 93] = "SCRIPT";
            TAG_ID[TAG_ID["SECTION"] = 94] = "SECTION";
            TAG_ID[TAG_ID["SELECT"] = 95] = "SELECT";
            TAG_ID[TAG_ID["SOURCE"] = 96] = "SOURCE";
            TAG_ID[TAG_ID["SMALL"] = 97] = "SMALL";
            TAG_ID[TAG_ID["SPAN"] = 98] = "SPAN";
            TAG_ID[TAG_ID["STRIKE"] = 99] = "STRIKE";
            TAG_ID[TAG_ID["STRONG"] = 100] = "STRONG";
            TAG_ID[TAG_ID["STYLE"] = 101] = "STYLE";
            TAG_ID[TAG_ID["SUB"] = 102] = "SUB";
            TAG_ID[TAG_ID["SUMMARY"] = 103] = "SUMMARY";
            TAG_ID[TAG_ID["SUP"] = 104] = "SUP";
            TAG_ID[TAG_ID["TABLE"] = 105] = "TABLE";
            TAG_ID[TAG_ID["TBODY"] = 106] = "TBODY";
            TAG_ID[TAG_ID["TEMPLATE"] = 107] = "TEMPLATE";
            TAG_ID[TAG_ID["TEXTAREA"] = 108] = "TEXTAREA";
            TAG_ID[TAG_ID["TFOOT"] = 109] = "TFOOT";
            TAG_ID[TAG_ID["TD"] = 110] = "TD";
            TAG_ID[TAG_ID["TH"] = 111] = "TH";
            TAG_ID[TAG_ID["THEAD"] = 112] = "THEAD";
            TAG_ID[TAG_ID["TITLE"] = 113] = "TITLE";
            TAG_ID[TAG_ID["TR"] = 114] = "TR";
            TAG_ID[TAG_ID["TRACK"] = 115] = "TRACK";
            TAG_ID[TAG_ID["TT"] = 116] = "TT";
            TAG_ID[TAG_ID["U"] = 117] = "U";
            TAG_ID[TAG_ID["UL"] = 118] = "UL";
            TAG_ID[TAG_ID["SVG"] = 119] = "SVG";
            TAG_ID[TAG_ID["VAR"] = 120] = "VAR";
            TAG_ID[TAG_ID["WBR"] = 121] = "WBR";
            TAG_ID[TAG_ID["XMP"] = 122] = "XMP";
        })(TAG_ID = exports.TAG_ID || (exports.TAG_ID = {}));
        const TAG_NAME_TO_ID = new Map([
            [TAG_NAMES.A, TAG_ID.A],
            [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
            [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
            [TAG_NAMES.APPLET, TAG_ID.APPLET],
            [TAG_NAMES.AREA, TAG_ID.AREA],
            [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
            [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
            [TAG_NAMES.B, TAG_ID.B],
            [TAG_NAMES.BASE, TAG_ID.BASE],
            [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
            [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
            [TAG_NAMES.BIG, TAG_ID.BIG],
            [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
            [TAG_NAMES.BODY, TAG_ID.BODY],
            [TAG_NAMES.BR, TAG_ID.BR],
            [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
            [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
            [TAG_NAMES.CENTER, TAG_ID.CENTER],
            [TAG_NAMES.CODE, TAG_ID.CODE],
            [TAG_NAMES.COL, TAG_ID.COL],
            [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
            [TAG_NAMES.DD, TAG_ID.DD],
            [TAG_NAMES.DESC, TAG_ID.DESC],
            [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
            [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
            [TAG_NAMES.DIR, TAG_ID.DIR],
            [TAG_NAMES.DIV, TAG_ID.DIV],
            [TAG_NAMES.DL, TAG_ID.DL],
            [TAG_NAMES.DT, TAG_ID.DT],
            [TAG_NAMES.EM, TAG_ID.EM],
            [TAG_NAMES.EMBED, TAG_ID.EMBED],
            [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
            [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
            [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
            [TAG_NAMES.FONT, TAG_ID.FONT],
            [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
            [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
            [TAG_NAMES.FORM, TAG_ID.FORM],
            [TAG_NAMES.FRAME, TAG_ID.FRAME],
            [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
            [TAG_NAMES.H1, TAG_ID.H1],
            [TAG_NAMES.H2, TAG_ID.H2],
            [TAG_NAMES.H3, TAG_ID.H3],
            [TAG_NAMES.H4, TAG_ID.H4],
            [TAG_NAMES.H5, TAG_ID.H5],
            [TAG_NAMES.H6, TAG_ID.H6],
            [TAG_NAMES.HEAD, TAG_ID.HEAD],
            [TAG_NAMES.HEADER, TAG_ID.HEADER],
            [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
            [TAG_NAMES.HR, TAG_ID.HR],
            [TAG_NAMES.HTML, TAG_ID.HTML],
            [TAG_NAMES.I, TAG_ID.I],
            [TAG_NAMES.IMG, TAG_ID.IMG],
            [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
            [TAG_NAMES.INPUT, TAG_ID.INPUT],
            [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
            [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
            [TAG_NAMES.LABEL, TAG_ID.LABEL],
            [TAG_NAMES.LI, TAG_ID.LI],
            [TAG_NAMES.LINK, TAG_ID.LINK],
            [TAG_NAMES.LISTING, TAG_ID.LISTING],
            [TAG_NAMES.MAIN, TAG_ID.MAIN],
            [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
            [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
            [TAG_NAMES.MATH, TAG_ID.MATH],
            [TAG_NAMES.MENU, TAG_ID.MENU],
            [TAG_NAMES.META, TAG_ID.META],
            [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
            [TAG_NAMES.MI, TAG_ID.MI],
            [TAG_NAMES.MO, TAG_ID.MO],
            [TAG_NAMES.MN, TAG_ID.MN],
            [TAG_NAMES.MS, TAG_ID.MS],
            [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
            [TAG_NAMES.NAV, TAG_ID.NAV],
            [TAG_NAMES.NOBR, TAG_ID.NOBR],
            [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
            [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
            [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
            [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
            [TAG_NAMES.OL, TAG_ID.OL],
            [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
            [TAG_NAMES.OPTION, TAG_ID.OPTION],
            [TAG_NAMES.P, TAG_ID.P],
            [TAG_NAMES.PARAM, TAG_ID.PARAM],
            [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
            [TAG_NAMES.PRE, TAG_ID.PRE],
            [TAG_NAMES.RB, TAG_ID.RB],
            [TAG_NAMES.RP, TAG_ID.RP],
            [TAG_NAMES.RT, TAG_ID.RT],
            [TAG_NAMES.RTC, TAG_ID.RTC],
            [TAG_NAMES.RUBY, TAG_ID.RUBY],
            [TAG_NAMES.S, TAG_ID.S],
            [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
            [TAG_NAMES.SECTION, TAG_ID.SECTION],
            [TAG_NAMES.SELECT, TAG_ID.SELECT],
            [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
            [TAG_NAMES.SMALL, TAG_ID.SMALL],
            [TAG_NAMES.SPAN, TAG_ID.SPAN],
            [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
            [TAG_NAMES.STRONG, TAG_ID.STRONG],
            [TAG_NAMES.STYLE, TAG_ID.STYLE],
            [TAG_NAMES.SUB, TAG_ID.SUB],
            [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
            [TAG_NAMES.SUP, TAG_ID.SUP],
            [TAG_NAMES.TABLE, TAG_ID.TABLE],
            [TAG_NAMES.TBODY, TAG_ID.TBODY],
            [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
            [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
            [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
            [TAG_NAMES.TD, TAG_ID.TD],
            [TAG_NAMES.TH, TAG_ID.TH],
            [TAG_NAMES.THEAD, TAG_ID.THEAD],
            [TAG_NAMES.TITLE, TAG_ID.TITLE],
            [TAG_NAMES.TR, TAG_ID.TR],
            [TAG_NAMES.TRACK, TAG_ID.TRACK],
            [TAG_NAMES.TT, TAG_ID.TT],
            [TAG_NAMES.U, TAG_ID.U],
            [TAG_NAMES.UL, TAG_ID.UL],
            [TAG_NAMES.SVG, TAG_ID.SVG],
            [TAG_NAMES.VAR, TAG_ID.VAR],
            [TAG_NAMES.WBR, TAG_ID.WBR],
            [TAG_NAMES.XMP, TAG_ID.XMP],
        ]);
        function getTagID(tagName) {
            var _a;
            return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
        }
        exports.getTagID = getTagID;
        const $ = TAG_ID;
        exports.SPECIAL_ELEMENTS = {
            [NS.HTML]: new Set([
                $.ADDRESS,
                $.APPLET,
                $.AREA,
                $.ARTICLE,
                $.ASIDE,
                $.BASE,
                $.BASEFONT,
                $.BGSOUND,
                $.BLOCKQUOTE,
                $.BODY,
                $.BR,
                $.BUTTON,
                $.CAPTION,
                $.CENTER,
                $.COL,
                $.COLGROUP,
                $.DD,
                $.DETAILS,
                $.DIR,
                $.DIV,
                $.DL,
                $.DT,
                $.EMBED,
                $.FIELDSET,
                $.FIGCAPTION,
                $.FIGURE,
                $.FOOTER,
                $.FORM,
                $.FRAME,
                $.FRAMESET,
                $.H1,
                $.H2,
                $.H3,
                $.H4,
                $.H5,
                $.H6,
                $.HEAD,
                $.HEADER,
                $.HGROUP,
                $.HR,
                $.HTML,
                $.IFRAME,
                $.IMG,
                $.INPUT,
                $.LI,
                $.LINK,
                $.LISTING,
                $.MAIN,
                $.MARQUEE,
                $.MENU,
                $.META,
                $.NAV,
                $.NOEMBED,
                $.NOFRAMES,
                $.NOSCRIPT,
                $.OBJECT,
                $.OL,
                $.P,
                $.PARAM,
                $.PLAINTEXT,
                $.PRE,
                $.SCRIPT,
                $.SECTION,
                $.SELECT,
                $.SOURCE,
                $.STYLE,
                $.SUMMARY,
                $.TABLE,
                $.TBODY,
                $.TD,
                $.TEMPLATE,
                $.TEXTAREA,
                $.TFOOT,
                $.TH,
                $.THEAD,
                $.TITLE,
                $.TR,
                $.TRACK,
                $.UL,
                $.WBR,
                $.XMP,
            ]),
            [NS.MATHML]: new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
            [NS.SVG]: new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
            [NS.XLINK]: new Set(),
            [NS.XML]: new Set(),
            [NS.XMLNS]: new Set(),
        };
        function isNumberedHeader(tn) {
            return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
        }
        exports.isNumberedHeader = isNumberedHeader;
        const UNESCAPED_TEXT = new Set([
            TAG_NAMES.STYLE,
            TAG_NAMES.SCRIPT,
            TAG_NAMES.XMP,
            TAG_NAMES.IFRAME,
            TAG_NAMES.NOEMBED,
            TAG_NAMES.NOFRAMES,
            TAG_NAMES.PLAINTEXT,
        ]);
        function hasUnescapedText(tn, scriptingEnabled) {
            return UNESCAPED_TEXT.has(tn) || (scriptingEnabled && tn === TAG_NAMES.NOSCRIPT);
        }
        exports.hasUnescapedText = hasUnescapedText;

    }, {}], 11: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getTokenAttr = exports.TokenType = void 0;
        var TokenType;
        (function (TokenType) {
            TokenType[TokenType["CHARACTER"] = 0] = "CHARACTER";
            TokenType[TokenType["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
            TokenType[TokenType["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
            TokenType[TokenType["START_TAG"] = 3] = "START_TAG";
            TokenType[TokenType["END_TAG"] = 4] = "END_TAG";
            TokenType[TokenType["COMMENT"] = 5] = "COMMENT";
            TokenType[TokenType["DOCTYPE"] = 6] = "DOCTYPE";
            TokenType[TokenType["EOF"] = 7] = "EOF";
            TokenType[TokenType["HIBERNATION"] = 8] = "HIBERNATION";
        })(TokenType = exports.TokenType || (exports.TokenType = {}));
        function getTokenAttr(token, attrName) {
            for (let i = token.attrs.length - 1; i >= 0; i--) {
                if (token.attrs[i].name === attrName) {
                    return token.attrs[i].value;
                }
            }
            return null;
        }
        exports.getTokenAttr = getTokenAttr;

    }, {}], 12: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isUndefinedCodePoint = exports.isControlCodePoint = exports.getSurrogatePairCodePoint = exports.isSurrogatePair = exports.isSurrogate = exports.SEQUENCES = exports.CODE_POINTS = exports.REPLACEMENT_CHARACTER = void 0;
        const UNDEFINED_CODE_POINTS = new Set([
            65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214,
            393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894,
            720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574,
            1048575, 1114110, 1114111,
        ]);
        exports.REPLACEMENT_CHARACTER = '\uFFFD';
        var CODE_POINTS;
        (function (CODE_POINTS) {
            CODE_POINTS[CODE_POINTS["EOF"] = -1] = "EOF";
            CODE_POINTS[CODE_POINTS["NULL"] = 0] = "NULL";
            CODE_POINTS[CODE_POINTS["TABULATION"] = 9] = "TABULATION";
            CODE_POINTS[CODE_POINTS["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
            CODE_POINTS[CODE_POINTS["LINE_FEED"] = 10] = "LINE_FEED";
            CODE_POINTS[CODE_POINTS["FORM_FEED"] = 12] = "FORM_FEED";
            CODE_POINTS[CODE_POINTS["SPACE"] = 32] = "SPACE";
            CODE_POINTS[CODE_POINTS["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
            CODE_POINTS[CODE_POINTS["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
            CODE_POINTS[CODE_POINTS["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
            CODE_POINTS[CODE_POINTS["AMPERSAND"] = 38] = "AMPERSAND";
            CODE_POINTS[CODE_POINTS["APOSTROPHE"] = 39] = "APOSTROPHE";
            CODE_POINTS[CODE_POINTS["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
            CODE_POINTS[CODE_POINTS["SOLIDUS"] = 47] = "SOLIDUS";
            CODE_POINTS[CODE_POINTS["DIGIT_0"] = 48] = "DIGIT_0";
            CODE_POINTS[CODE_POINTS["DIGIT_9"] = 57] = "DIGIT_9";
            CODE_POINTS[CODE_POINTS["SEMICOLON"] = 59] = "SEMICOLON";
            CODE_POINTS[CODE_POINTS["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
            CODE_POINTS[CODE_POINTS["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
            CODE_POINTS[CODE_POINTS["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
            CODE_POINTS[CODE_POINTS["QUESTION_MARK"] = 63] = "QUESTION_MARK";
            CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
            CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
            CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
            CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
            CODE_POINTS[CODE_POINTS["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
            CODE_POINTS[CODE_POINTS["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
            CODE_POINTS[CODE_POINTS["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
            CODE_POINTS[CODE_POINTS["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
            CODE_POINTS[CODE_POINTS["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
            CODE_POINTS[CODE_POINTS["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
            CODE_POINTS[CODE_POINTS["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
        })(CODE_POINTS = exports.CODE_POINTS || (exports.CODE_POINTS = {}));
        exports.SEQUENCES = {
            DASH_DASH: '--',
            CDATA_START: '[CDATA[',
            DOCTYPE: 'doctype',
            SCRIPT: 'script',
            PUBLIC: 'public',
            SYSTEM: 'system',
        };
        //Surrogates
        function isSurrogate(cp) {
            return cp >= 55296 && cp <= 57343;
        }
        exports.isSurrogate = isSurrogate;
        function isSurrogatePair(cp) {
            return cp >= 56320 && cp <= 57343;
        }
        exports.isSurrogatePair = isSurrogatePair;
        function getSurrogatePairCodePoint(cp1, cp2) {
            return (cp1 - 55296) * 1024 + 9216 + cp2;
        }
        exports.getSurrogatePairCodePoint = getSurrogatePairCodePoint;
        //NOTE: excluding NULL and ASCII whitespace
        function isControlCodePoint(cp) {
            return ((cp !== 0x20 && cp !== 0x0a && cp !== 0x0d && cp !== 0x09 && cp !== 0x0c && cp >= 0x01 && cp <= 0x1f) ||
                (cp >= 0x7f && cp <= 0x9f));
        }
        exports.isControlCodePoint = isControlCodePoint;
        function isUndefinedCodePoint(cp) {
            return (cp >= 64976 && cp <= 65007) || UNDEFINED_CODE_POINTS.has(cp);
        }
        exports.isUndefinedCodePoint = isUndefinedCodePoint;

    }, {}], 13: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.parseFragment = exports.parse = exports.TokenizerMode = exports.Tokenizer = exports.Token = exports.html = exports.foreignContent = exports.ErrorCodes = exports.serializeOuter = exports.serialize = exports.Parser = exports.defaultTreeAdapter = void 0;
        const index_js_1 = require("./parser/index.js");
        var default_js_1 = require("./tree-adapters/default.js");
        Object.defineProperty(exports, "defaultTreeAdapter", { enumerable: true, get: function () { return default_js_1.defaultTreeAdapter; } });
        var index_js_2 = require("./parser/index.js");
        Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return index_js_2.Parser; } });
        var index_js_3 = require("./serializer/index.js");
        Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return index_js_3.serialize; } });
        Object.defineProperty(exports, "serializeOuter", { enumerable: true, get: function () { return index_js_3.serializeOuter; } });
        var error_codes_js_1 = require("./common/error-codes.js");
        Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function () { return error_codes_js_1.ERR; } });
        /** @internal */
        exports.foreignContent = require("./common/foreign-content.js");
        /** @internal */
        exports.html = require("./common/html.js");
        /** @internal */
        exports.Token = require("./common/token.js");
        /** @internal */
        var index_js_4 = require("./tokenizer/index.js");
        Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return index_js_4.Tokenizer; } });
        Object.defineProperty(exports, "TokenizerMode", { enumerable: true, get: function () { return index_js_4.TokenizerMode; } });
        // Shorthands
        /**
         * Parses an HTML string.
         *
         * @param html Input HTML string.
         * @param options Parsing options.
         * @returns Document
         *
         * @example
         *
         * ```js
         * const parse5 = require('parse5');
         *
         * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
         *
         * console.log(document.childNodes[1].tagName); //> 'html'
         *```
         */
        function parse(html, options) {
            return index_js_1.Parser.parse(html, options);
        }
        exports.parse = parse;
        function parseFragment(fragmentContext, html, options) {
            if (typeof fragmentContext === 'string') {
                options = html;
                html = fragmentContext;
                fragmentContext = null;
            }
            const parser = index_js_1.Parser.getFragmentParser(fragmentContext, options);
            parser.tokenizer.write(html, true);
            return parser.getFragment();
        }
        exports.parseFragment = parseFragment;

    }, { "./common/error-codes.js": 8, "./common/foreign-content.js": 9, "./common/html.js": 10, "./common/token.js": 11, "./parser/index.js": 15, "./serializer/index.js": 17, "./tokenizer/index.js": 18, "./tree-adapters/default.js": 20 }], 14: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.FormattingElementList = exports.EntryType = void 0;
        //Const
        const NOAH_ARK_CAPACITY = 3;
        var EntryType;
        (function (EntryType) {
            EntryType[EntryType["Marker"] = 0] = "Marker";
            EntryType[EntryType["Element"] = 1] = "Element";
        })(EntryType = exports.EntryType || (exports.EntryType = {}));
        const MARKER = { type: EntryType.Marker };
        //List of formatting elements
        class FormattingElementList {
            constructor(treeAdapter) {
                this.treeAdapter = treeAdapter;
                this.entries = [];
                this.bookmark = null;
            }
            //Noah Ark's condition
            //OPTIMIZATION: at first we try to find possible candidates for exclusion using
            //lightweight heuristics without thorough attributes check.
            _getNoahArkConditionCandidates(newElement, neAttrs) {
                const candidates = [];
                const neAttrsLength = neAttrs.length;
                const neTagName = this.treeAdapter.getTagName(newElement);
                const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
                for (let i = 0; i < this.entries.length; i++) {
                    const entry = this.entries[i];
                    if (entry.type === EntryType.Marker) {
                        break;
                    }
                    const { element } = entry;
                    if (this.treeAdapter.getTagName(element) === neTagName &&
                        this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
                        const elementAttrs = this.treeAdapter.getAttrList(element);
                        if (elementAttrs.length === neAttrsLength) {
                            candidates.push({ idx: i, attrs: elementAttrs });
                        }
                    }
                }
                return candidates;
            }
            _ensureNoahArkCondition(newElement) {
                if (this.entries.length < NOAH_ARK_CAPACITY)
                    return;
                const neAttrs = this.treeAdapter.getAttrList(newElement);
                const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
                if (candidates.length < NOAH_ARK_CAPACITY)
                    return;
                //NOTE: build attrs map for the new element, so we can perform fast lookups
                const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
                let validCandidates = 0;
                //NOTE: remove bottommost candidates, until Noah's Ark condition will not be met
                for (let i = 0; i < candidates.length; i++) {
                    const candidate = candidates[i];
                    // We know that `candidate.attrs.length === neAttrs.length`
                    if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
                        validCandidates += 1;
                        if (validCandidates >= NOAH_ARK_CAPACITY) {
                            this.entries.splice(candidate.idx, 1);
                        }
                    }
                }
            }
            //Mutations
            insertMarker() {
                this.entries.unshift(MARKER);
            }
            pushElement(element, token) {
                this._ensureNoahArkCondition(element);
                this.entries.unshift({
                    type: EntryType.Element,
                    element,
                    token,
                });
            }
            insertElementAfterBookmark(element, token) {
                const bookmarkIdx = this.entries.indexOf(this.bookmark);
                this.entries.splice(bookmarkIdx, 0, {
                    type: EntryType.Element,
                    element,
                    token,
                });
            }
            removeEntry(entry) {
                const entryIndex = this.entries.indexOf(entry);
                if (entryIndex >= 0) {
                    this.entries.splice(entryIndex, 1);
                }
            }
            /**
             * Clears the list of formatting elements up to the last marker.
             *
             * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
             */
            clearToLastMarker() {
                const markerIdx = this.entries.indexOf(MARKER);
                if (markerIdx >= 0) {
                    this.entries.splice(0, markerIdx + 1);
                }
                else {
                    this.entries.length = 0;
                }
            }
            //Search
            getElementEntryInScopeWithTagName(tagName) {
                const entry = this.entries.find((entry) => entry.type === EntryType.Marker || this.treeAdapter.getTagName(entry.element) === tagName);
                return entry && entry.type === EntryType.Element ? entry : null;
            }
            getElementEntry(element) {
                return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
            }
        }
        exports.FormattingElementList = FormattingElementList;

    }, {}], 15: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Parser = void 0;
        const index_js_1 = require("../tokenizer/index.js");
        const open_element_stack_js_1 = require("./open-element-stack.js");
        const formatting_element_list_js_1 = require("./formatting-element-list.js");
        const default_js_1 = require("../tree-adapters/default.js");
        const doctype = require("../common/doctype.js");
        const foreignContent = require("../common/foreign-content.js");
        const error_codes_js_1 = require("../common/error-codes.js");
        const unicode = require("../common/unicode.js");
        const html_js_1 = require("../common/html.js");
        const token_js_1 = require("../common/token.js");
        //Misc constants
        const HIDDEN_INPUT_TYPE = 'hidden';
        //Adoption agency loops iteration count
        const AA_OUTER_LOOP_ITER = 8;
        const AA_INNER_LOOP_ITER = 3;
        //Insertion modes
        var InsertionMode;
        (function (InsertionMode) {
            InsertionMode[InsertionMode["INITIAL"] = 0] = "INITIAL";
            InsertionMode[InsertionMode["BEFORE_HTML"] = 1] = "BEFORE_HTML";
            InsertionMode[InsertionMode["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
            InsertionMode[InsertionMode["IN_HEAD"] = 3] = "IN_HEAD";
            InsertionMode[InsertionMode["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
            InsertionMode[InsertionMode["AFTER_HEAD"] = 5] = "AFTER_HEAD";
            InsertionMode[InsertionMode["IN_BODY"] = 6] = "IN_BODY";
            InsertionMode[InsertionMode["TEXT"] = 7] = "TEXT";
            InsertionMode[InsertionMode["IN_TABLE"] = 8] = "IN_TABLE";
            InsertionMode[InsertionMode["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
            InsertionMode[InsertionMode["IN_CAPTION"] = 10] = "IN_CAPTION";
            InsertionMode[InsertionMode["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
            InsertionMode[InsertionMode["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
            InsertionMode[InsertionMode["IN_ROW"] = 13] = "IN_ROW";
            InsertionMode[InsertionMode["IN_CELL"] = 14] = "IN_CELL";
            InsertionMode[InsertionMode["IN_SELECT"] = 15] = "IN_SELECT";
            InsertionMode[InsertionMode["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
            InsertionMode[InsertionMode["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
            InsertionMode[InsertionMode["AFTER_BODY"] = 18] = "AFTER_BODY";
            InsertionMode[InsertionMode["IN_FRAMESET"] = 19] = "IN_FRAMESET";
            InsertionMode[InsertionMode["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
            InsertionMode[InsertionMode["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
            InsertionMode[InsertionMode["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
        })(InsertionMode || (InsertionMode = {}));
        const BASE_LOC = {
            startLine: -1,
            startCol: -1,
            startOffset: -1,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
        };
        const TABLE_STRUCTURE_TAGS = new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
        const defaultParserOptions = {
            scriptingEnabled: true,
            sourceCodeLocationInfo: false,
            treeAdapter: default_js_1.defaultTreeAdapter,
            onParseError: null,
        };
        //Parser
        class Parser {
            constructor(options, document, fragmentContext = null, scriptHandler = null) {
                this.fragmentContext = fragmentContext;
                this.scriptHandler = scriptHandler;
                this.currentToken = null;
                this.stopped = false;
                this.insertionMode = InsertionMode.INITIAL;
                this.originalInsertionMode = InsertionMode.INITIAL;
                this.headElement = null;
                this.formElement = null;
                /** Indicates that the current node is not an element in the HTML namespace */
                this.currentNotInHTML = false;
                /**
                 * The template insertion mode stack is maintained from the left.
                 * Ie. the topmost element will always have index 0.
                 */
                this.tmplInsertionModeStack = [];
                this.pendingCharacterTokens = [];
                this.hasNonWhitespacePendingCharacterToken = false;
                this.framesetOk = true;
                this.skipNextNewLine = false;
                this.fosterParentingEnabled = false;
                this.options = Object.assign(Object.assign({}, defaultParserOptions), options);
                this.treeAdapter = this.options.treeAdapter;
                this.onParseError = this.options.onParseError;
                // Always enable location info if we report parse errors.
                if (this.onParseError) {
                    this.options.sourceCodeLocationInfo = true;
                }
                this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
                this.tokenizer = new index_js_1.Tokenizer(this.options, this);
                this.activeFormattingElements = new formatting_element_list_js_1.FormattingElementList(this.treeAdapter);
                this.fragmentContextID = fragmentContext ? (0, html_js_1.getTagID)(this.treeAdapter.getTagName(fragmentContext)) : html_js_1.TAG_ID.UNKNOWN;
                this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
                this.openElements = new open_element_stack_js_1.OpenElementStack(this.document, this.treeAdapter, this);
            }
            // API
            static parse(html, options) {
                const parser = new this(options);
                parser.tokenizer.write(html, true);
                return parser.document;
            }
            static getFragmentParser(fragmentContext, options) {
                const opts = Object.assign(Object.assign({}, defaultParserOptions), options);
                //NOTE: use a <template> element as the fragment context if no context element was provided,
                //so we will parse in a "forgiving" manner
                fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : (fragmentContext = opts.treeAdapter.createElement(html_js_1.TAG_NAMES.TEMPLATE, html_js_1.NS.HTML, []));
                //NOTE: create a fake element which will be used as the `document` for fragment parsing.
                //This is important for jsdom, where a new `document` cannot be created. This led to
                //fragment parsing messing with the main `document`.
                const documentMock = opts.treeAdapter.createElement('documentmock', html_js_1.NS.HTML, []);
                const parser = new this(opts, documentMock, fragmentContext);
                if (parser.fragmentContextID === html_js_1.TAG_ID.TEMPLATE) {
                    parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
                }
                parser._initTokenizerForFragmentParsing();
                parser._insertFakeRootElement();
                parser._resetInsertionMode();
                parser._findFormInFragmentContext();
                return parser;
            }
            getFragment() {
                const rootElement = this.treeAdapter.getFirstChild(this.document);
                const fragment = this.treeAdapter.createDocumentFragment();
                this._adoptNodes(rootElement, fragment);
                return fragment;
            }
            //Errors
            _err(token, code, beforeToken) {
                var _a;
                if (!this.onParseError)
                    return;
                const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
                const err = {
                    code,
                    startLine: loc.startLine,
                    startCol: loc.startCol,
                    startOffset: loc.startOffset,
                    endLine: beforeToken ? loc.startLine : loc.endLine,
                    endCol: beforeToken ? loc.startCol : loc.endCol,
                    endOffset: beforeToken ? loc.startOffset : loc.endOffset,
                };
                this.onParseError(err);
            }
            //Stack events
            onItemPush(node, tid, isTop) {
                var _a, _b;
                (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
                if (isTop && this.openElements.stackTop > 0)
                    this._setContextModes(node, tid);
            }
            onItemPop(node, isTop) {
                var _a, _b;
                if (this.options.sourceCodeLocationInfo) {
                    this._setEndLocation(node, this.currentToken);
                }
                (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
                if (isTop) {
                    let current;
                    let currentTagId;
                    if (this.openElements.stackTop === 0 && this.fragmentContext) {
                        current = this.fragmentContext;
                        currentTagId = this.fragmentContextID;
                    }
                    else {
                        ({ current, currentTagId } = this.openElements);
                    }
                    this._setContextModes(current, currentTagId);
                }
            }
            _setContextModes(current, tid) {
                const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.HTML;
                this.currentNotInHTML = !isHTML;
                this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
            }
            _switchToTextParsing(currentToken, nextTokenizerState) {
                this._insertElement(currentToken, html_js_1.NS.HTML);
                this.tokenizer.state = nextTokenizerState;
                this.originalInsertionMode = this.insertionMode;
                this.insertionMode = InsertionMode.TEXT;
            }
            switchToPlaintextParsing() {
                this.insertionMode = InsertionMode.TEXT;
                this.originalInsertionMode = InsertionMode.IN_BODY;
                this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
            }
            //Fragment parsing
            _getAdjustedCurrentElement() {
                return this.openElements.stackTop === 0 && this.fragmentContext
                    ? this.fragmentContext
                    : this.openElements.current;
            }
            _findFormInFragmentContext() {
                let node = this.fragmentContext;
                while (node) {
                    if (this.treeAdapter.getTagName(node) === html_js_1.TAG_NAMES.FORM) {
                        this.formElement = node;
                        break;
                    }
                    node = this.treeAdapter.getParentNode(node);
                }
            }
            _initTokenizerForFragmentParsing() {
                if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== html_js_1.NS.HTML) {
                    return;
                }
                switch (this.fragmentContextID) {
                    case html_js_1.TAG_ID.TITLE:
                    case html_js_1.TAG_ID.TEXTAREA: {
                        this.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
                        break;
                    }
                    case html_js_1.TAG_ID.STYLE:
                    case html_js_1.TAG_ID.XMP:
                    case html_js_1.TAG_ID.IFRAME:
                    case html_js_1.TAG_ID.NOEMBED:
                    case html_js_1.TAG_ID.NOFRAMES:
                    case html_js_1.TAG_ID.NOSCRIPT: {
                        this.tokenizer.state = index_js_1.TokenizerMode.RAWTEXT;
                        break;
                    }
                    case html_js_1.TAG_ID.SCRIPT: {
                        this.tokenizer.state = index_js_1.TokenizerMode.SCRIPT_DATA;
                        break;
                    }
                    case html_js_1.TAG_ID.PLAINTEXT: {
                        this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            //Tree mutation
            _setDocumentType(token) {
                const name = token.name || '';
                const publicId = token.publicId || '';
                const systemId = token.systemId || '';
                this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
                if (token.location) {
                    const documentChildren = this.treeAdapter.getChildNodes(this.document);
                    const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
                    if (docTypeNode) {
                        this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
                    }
                }
            }
            _attachElementToTree(element, location) {
                if (this.options.sourceCodeLocationInfo) {
                    const loc = location && Object.assign(Object.assign({}, location), { startTag: location });
                    this.treeAdapter.setNodeSourceCodeLocation(element, loc);
                }
                if (this._shouldFosterParentOnInsertion()) {
                    this._fosterParentElement(element);
                }
                else {
                    const parent = this.openElements.currentTmplContentOrNode;
                    this.treeAdapter.appendChild(parent, element);
                }
            }
            _appendElement(token, namespaceURI) {
                const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
                this._attachElementToTree(element, token.location);
            }
            _insertElement(token, namespaceURI) {
                const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
                this._attachElementToTree(element, token.location);
                this.openElements.push(element, token.tagID);
            }
            _insertFakeElement(tagName, tagID) {
                const element = this.treeAdapter.createElement(tagName, html_js_1.NS.HTML, []);
                this._attachElementToTree(element, null);
                this.openElements.push(element, tagID);
            }
            _insertTemplate(token) {
                const tmpl = this.treeAdapter.createElement(token.tagName, html_js_1.NS.HTML, token.attrs);
                const content = this.treeAdapter.createDocumentFragment();
                this.treeAdapter.setTemplateContent(tmpl, content);
                this._attachElementToTree(tmpl, token.location);
                this.openElements.push(tmpl, token.tagID);
                if (this.options.sourceCodeLocationInfo)
                    this.treeAdapter.setNodeSourceCodeLocation(content, null);
            }
            _insertFakeRootElement() {
                const element = this.treeAdapter.createElement(html_js_1.TAG_NAMES.HTML, html_js_1.NS.HTML, []);
                if (this.options.sourceCodeLocationInfo)
                    this.treeAdapter.setNodeSourceCodeLocation(element, null);
                this.treeAdapter.appendChild(this.openElements.current, element);
                this.openElements.push(element, html_js_1.TAG_ID.HTML);
            }
            _appendCommentNode(token, parent) {
                const commentNode = this.treeAdapter.createCommentNode(token.data);
                this.treeAdapter.appendChild(parent, commentNode);
                if (this.options.sourceCodeLocationInfo) {
                    this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
                }
            }
            _insertCharacters(token) {
                let parent;
                let beforeElement;
                if (this._shouldFosterParentOnInsertion()) {
                    ({ parent, beforeElement } = this._findFosterParentingLocation());
                    if (beforeElement) {
                        this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
                    }
                    else {
                        this.treeAdapter.insertText(parent, token.chars);
                    }
                }
                else {
                    parent = this.openElements.currentTmplContentOrNode;
                    this.treeAdapter.insertText(parent, token.chars);
                }
                if (!token.location)
                    return;
                const siblings = this.treeAdapter.getChildNodes(parent);
                const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
                const textNode = siblings[textNodeIdx - 1];
                //NOTE: if we have a location assigned by another token, then just update the end position
                const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
                if (tnLoc) {
                    const { endLine, endCol, endOffset } = token.location;
                    this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
                }
                else if (this.options.sourceCodeLocationInfo) {
                    this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
                }
            }
            _adoptNodes(donor, recipient) {
                for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
                    this.treeAdapter.detachNode(child);
                    this.treeAdapter.appendChild(recipient, child);
                }
            }
            _setEndLocation(element, closingToken) {
                if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
                    const ctLoc = closingToken.location;
                    const tn = this.treeAdapter.getTagName(element);
                    const endLoc =
                        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
                        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
                        closingToken.type === token_js_1.TokenType.END_TAG && tn === closingToken.tagName
                            ? {
                                endTag: Object.assign({}, ctLoc),
                                endLine: ctLoc.endLine,
                                endCol: ctLoc.endCol,
                                endOffset: ctLoc.endOffset,
                            }
                            : {
                                endLine: ctLoc.startLine,
                                endCol: ctLoc.startCol,
                                endOffset: ctLoc.startOffset,
                            };
                    this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
                }
            }
            //Token processing
            shouldProcessStartTagTokenInForeignContent(token) {
                // Check that neither current === document, or ns === NS.HTML
                if (!this.currentNotInHTML)
                    return false;
                let current;
                let currentTagId;
                if (this.openElements.stackTop === 0 && this.fragmentContext) {
                    current = this.fragmentContext;
                    currentTagId = this.fragmentContextID;
                }
                else {
                    ({ current, currentTagId } = this.openElements);
                }
                if (token.tagID === html_js_1.TAG_ID.SVG &&
                    this.treeAdapter.getTagName(current) === html_js_1.TAG_NAMES.ANNOTATION_XML &&
                    this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.MATHML) {
                    return false;
                }
                return (
                    // Check that `current` is not an integration point for HTML or MathML elements.
                    this.tokenizer.inForeignNode ||
                    // If it _is_ an integration point, then we might have to check that it is not an HTML
                    // integration point.
                    ((token.tagID === html_js_1.TAG_ID.MGLYPH || token.tagID === html_js_1.TAG_ID.MALIGNMARK) &&
                        !this._isIntegrationPoint(currentTagId, current, html_js_1.NS.HTML)));
            }
            _processToken(token) {
                switch (token.type) {
                    case token_js_1.TokenType.CHARACTER: {
                        this.onCharacter(token);
                        break;
                    }
                    case token_js_1.TokenType.NULL_CHARACTER: {
                        this.onNullCharacter(token);
                        break;
                    }
                    case token_js_1.TokenType.COMMENT: {
                        this.onComment(token);
                        break;
                    }
                    case token_js_1.TokenType.DOCTYPE: {
                        this.onDoctype(token);
                        break;
                    }
                    case token_js_1.TokenType.START_TAG: {
                        this._processStartTag(token);
                        break;
                    }
                    case token_js_1.TokenType.END_TAG: {
                        this.onEndTag(token);
                        break;
                    }
                    case token_js_1.TokenType.EOF: {
                        this.onEof(token);
                        break;
                    }
                    case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                        this.onWhitespaceCharacter(token);
                        break;
                    }
                }
            }
            //Integration points
            _isIntegrationPoint(tid, element, foreignNS) {
                const ns = this.treeAdapter.getNamespaceURI(element);
                const attrs = this.treeAdapter.getAttrList(element);
                return foreignContent.isIntegrationPoint(tid, ns, attrs, foreignNS);
            }
            //Active formatting elements reconstruction
            _reconstructActiveFormattingElements() {
                const listLength = this.activeFormattingElements.entries.length;
                if (listLength) {
                    const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === formatting_element_list_js_1.EntryType.Marker || this.openElements.contains(entry.element));
                    const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
                    for (let i = unopenIdx; i >= 0; i--) {
                        const entry = this.activeFormattingElements.entries[i];
                        this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
                        entry.element = this.openElements.current;
                    }
                }
            }
            //Close elements
            _closeTableCell() {
                this.openElements.generateImpliedEndTags();
                this.openElements.popUntilTableCellPopped();
                this.activeFormattingElements.clearToLastMarker();
                this.insertionMode = InsertionMode.IN_ROW;
            }
            _closePElement() {
                this.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.P);
                this.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.P);
            }
            //Insertion modes
            _resetInsertionMode() {
                for (let i = this.openElements.stackTop; i >= 0; i--) {
                    //Insertion mode reset map
                    switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
                        case html_js_1.TAG_ID.TR: {
                            this.insertionMode = InsertionMode.IN_ROW;
                            return;
                        }
                        case html_js_1.TAG_ID.TBODY:
                        case html_js_1.TAG_ID.THEAD:
                        case html_js_1.TAG_ID.TFOOT: {
                            this.insertionMode = InsertionMode.IN_TABLE_BODY;
                            return;
                        }
                        case html_js_1.TAG_ID.CAPTION: {
                            this.insertionMode = InsertionMode.IN_CAPTION;
                            return;
                        }
                        case html_js_1.TAG_ID.COLGROUP: {
                            this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
                            return;
                        }
                        case html_js_1.TAG_ID.TABLE: {
                            this.insertionMode = InsertionMode.IN_TABLE;
                            return;
                        }
                        case html_js_1.TAG_ID.BODY: {
                            this.insertionMode = InsertionMode.IN_BODY;
                            return;
                        }
                        case html_js_1.TAG_ID.FRAMESET: {
                            this.insertionMode = InsertionMode.IN_FRAMESET;
                            return;
                        }
                        case html_js_1.TAG_ID.SELECT: {
                            this._resetInsertionModeForSelect(i);
                            return;
                        }
                        case html_js_1.TAG_ID.TEMPLATE: {
                            this.insertionMode = this.tmplInsertionModeStack[0];
                            return;
                        }
                        case html_js_1.TAG_ID.HTML: {
                            this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
                            return;
                        }
                        case html_js_1.TAG_ID.TD:
                        case html_js_1.TAG_ID.TH: {
                            if (i > 0) {
                                this.insertionMode = InsertionMode.IN_CELL;
                                return;
                            }
                            break;
                        }
                        case html_js_1.TAG_ID.HEAD: {
                            if (i > 0) {
                                this.insertionMode = InsertionMode.IN_HEAD;
                                return;
                            }
                            break;
                        }
                    }
                }
                this.insertionMode = InsertionMode.IN_BODY;
            }
            _resetInsertionModeForSelect(selectIdx) {
                if (selectIdx > 0) {
                    for (let i = selectIdx - 1; i > 0; i--) {
                        const tn = this.openElements.tagIDs[i];
                        if (tn === html_js_1.TAG_ID.TEMPLATE) {
                            break;
                        }
                        else if (tn === html_js_1.TAG_ID.TABLE) {
                            this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
                            return;
                        }
                    }
                }
                this.insertionMode = InsertionMode.IN_SELECT;
            }
            //Foster parenting
            _isElementCausesFosterParenting(tn) {
                return TABLE_STRUCTURE_TAGS.has(tn);
            }
            _shouldFosterParentOnInsertion() {
                return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
            }
            _findFosterParentingLocation() {
                for (let i = this.openElements.stackTop; i >= 0; i--) {
                    const openElement = this.openElements.items[i];
                    switch (this.openElements.tagIDs[i]) {
                        case html_js_1.TAG_ID.TEMPLATE: {
                            if (this.treeAdapter.getNamespaceURI(openElement) === html_js_1.NS.HTML) {
                                return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
                            }
                            break;
                        }
                        case html_js_1.TAG_ID.TABLE: {
                            const parent = this.treeAdapter.getParentNode(openElement);
                            if (parent) {
                                return { parent, beforeElement: openElement };
                            }
                            return { parent: this.openElements.items[i - 1], beforeElement: null };
                        }
                        default:
                        // Do nothing
                    }
                }
                return { parent: this.openElements.items[0], beforeElement: null };
            }
            _fosterParentElement(element) {
                const location = this._findFosterParentingLocation();
                if (location.beforeElement) {
                    this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
                }
                else {
                    this.treeAdapter.appendChild(location.parent, element);
                }
            }
            //Special elements
            _isSpecialElement(element, id) {
                const ns = this.treeAdapter.getNamespaceURI(element);
                return html_js_1.SPECIAL_ELEMENTS[ns].has(id);
            }
            onCharacter(token) {
                this.skipNextNewLine = false;
                if (this.tokenizer.inForeignNode) {
                    characterInForeignContent(this, token);
                    return;
                }
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL: {
                        tokenInInitialMode(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HTML: {
                        tokenBeforeHtml(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HEAD: {
                        tokenBeforeHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD: {
                        tokenInHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD_NO_SCRIPT: {
                        tokenInHeadNoScript(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_HEAD: {
                        tokenAfterHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_BODY:
                    case InsertionMode.IN_CAPTION:
                    case InsertionMode.IN_CELL:
                    case InsertionMode.IN_TEMPLATE: {
                        characterInBody(this, token);
                        break;
                    }
                    case InsertionMode.TEXT:
                    case InsertionMode.IN_SELECT:
                    case InsertionMode.IN_SELECT_IN_TABLE: {
                        this._insertCharacters(token);
                        break;
                    }
                    case InsertionMode.IN_TABLE:
                    case InsertionMode.IN_TABLE_BODY:
                    case InsertionMode.IN_ROW: {
                        characterInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        characterInTableText(this, token);
                        break;
                    }
                    case InsertionMode.IN_COLUMN_GROUP: {
                        tokenInColumnGroup(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_BODY: {
                        tokenAfterBody(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_AFTER_BODY: {
                        tokenAfterAfterBody(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onNullCharacter(token) {
                this.skipNextNewLine = false;
                if (this.tokenizer.inForeignNode) {
                    nullCharacterInForeignContent(this, token);
                    return;
                }
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL: {
                        tokenInInitialMode(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HTML: {
                        tokenBeforeHtml(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HEAD: {
                        tokenBeforeHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD: {
                        tokenInHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD_NO_SCRIPT: {
                        tokenInHeadNoScript(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_HEAD: {
                        tokenAfterHead(this, token);
                        break;
                    }
                    case InsertionMode.TEXT: {
                        this._insertCharacters(token);
                        break;
                    }
                    case InsertionMode.IN_TABLE:
                    case InsertionMode.IN_TABLE_BODY:
                    case InsertionMode.IN_ROW: {
                        characterInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_COLUMN_GROUP: {
                        tokenInColumnGroup(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_BODY: {
                        tokenAfterBody(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_AFTER_BODY: {
                        tokenAfterAfterBody(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onComment(token) {
                this.skipNextNewLine = false;
                if (this.currentNotInHTML) {
                    appendComment(this, token);
                    return;
                }
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL:
                    case InsertionMode.BEFORE_HTML:
                    case InsertionMode.BEFORE_HEAD:
                    case InsertionMode.IN_HEAD:
                    case InsertionMode.IN_HEAD_NO_SCRIPT:
                    case InsertionMode.AFTER_HEAD:
                    case InsertionMode.IN_BODY:
                    case InsertionMode.IN_TABLE:
                    case InsertionMode.IN_CAPTION:
                    case InsertionMode.IN_COLUMN_GROUP:
                    case InsertionMode.IN_TABLE_BODY:
                    case InsertionMode.IN_ROW:
                    case InsertionMode.IN_CELL:
                    case InsertionMode.IN_SELECT:
                    case InsertionMode.IN_SELECT_IN_TABLE:
                    case InsertionMode.IN_TEMPLATE:
                    case InsertionMode.IN_FRAMESET:
                    case InsertionMode.AFTER_FRAMESET: {
                        appendComment(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        tokenInTableText(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_BODY: {
                        appendCommentToRootHtmlElement(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_AFTER_BODY:
                    case InsertionMode.AFTER_AFTER_FRAMESET: {
                        appendCommentToDocument(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onDoctype(token) {
                this.skipNextNewLine = false;
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL: {
                        doctypeInInitialMode(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HEAD:
                    case InsertionMode.IN_HEAD:
                    case InsertionMode.IN_HEAD_NO_SCRIPT:
                    case InsertionMode.AFTER_HEAD: {
                        this._err(token, error_codes_js_1.ERR.misplacedDoctype);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        tokenInTableText(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onStartTag(token) {
                this.skipNextNewLine = false;
                this.currentToken = token;
                this._processStartTag(token);
                if (token.selfClosing && !token.ackSelfClosing) {
                    this._err(token, error_codes_js_1.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
                }
            }
            /**
             * Processes a given start tag.
             *
             * `onStartTag` checks if a self-closing tag was recognized. When a token
             * is moved inbetween multiple insertion modes, this check for self-closing
             * could lead to false positives. To avoid this, `_processStartTag` is used
             * for nested calls.
             *
             * @param token The token to process.
             */
            _processStartTag(token) {
                if (this.shouldProcessStartTagTokenInForeignContent(token)) {
                    startTagInForeignContent(this, token);
                }
                else {
                    this._startTagOutsideForeignContent(token);
                }
            }
            _startTagOutsideForeignContent(token) {
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL: {
                        tokenInInitialMode(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HTML: {
                        startTagBeforeHtml(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HEAD: {
                        startTagBeforeHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD: {
                        startTagInHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD_NO_SCRIPT: {
                        startTagInHeadNoScript(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_HEAD: {
                        startTagAfterHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_BODY: {
                        startTagInBody(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE: {
                        startTagInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        tokenInTableText(this, token);
                        break;
                    }
                    case InsertionMode.IN_CAPTION: {
                        startTagInCaption(this, token);
                        break;
                    }
                    case InsertionMode.IN_COLUMN_GROUP: {
                        startTagInColumnGroup(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_BODY: {
                        startTagInTableBody(this, token);
                        break;
                    }
                    case InsertionMode.IN_ROW: {
                        startTagInRow(this, token);
                        break;
                    }
                    case InsertionMode.IN_CELL: {
                        startTagInCell(this, token);
                        break;
                    }
                    case InsertionMode.IN_SELECT: {
                        startTagInSelect(this, token);
                        break;
                    }
                    case InsertionMode.IN_SELECT_IN_TABLE: {
                        startTagInSelectInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_TEMPLATE: {
                        startTagInTemplate(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_BODY: {
                        startTagAfterBody(this, token);
                        break;
                    }
                    case InsertionMode.IN_FRAMESET: {
                        startTagInFrameset(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_FRAMESET: {
                        startTagAfterFrameset(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_AFTER_BODY: {
                        startTagAfterAfterBody(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_AFTER_FRAMESET: {
                        startTagAfterAfterFrameset(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onEndTag(token) {
                this.skipNextNewLine = false;
                this.currentToken = token;
                if (this.currentNotInHTML) {
                    endTagInForeignContent(this, token);
                }
                else {
                    this._endTagOutsideForeignContent(token);
                }
            }
            _endTagOutsideForeignContent(token) {
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL: {
                        tokenInInitialMode(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HTML: {
                        endTagBeforeHtml(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HEAD: {
                        endTagBeforeHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD: {
                        endTagInHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD_NO_SCRIPT: {
                        endTagInHeadNoScript(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_HEAD: {
                        endTagAfterHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_BODY: {
                        endTagInBody(this, token);
                        break;
                    }
                    case InsertionMode.TEXT: {
                        endTagInText(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE: {
                        endTagInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        tokenInTableText(this, token);
                        break;
                    }
                    case InsertionMode.IN_CAPTION: {
                        endTagInCaption(this, token);
                        break;
                    }
                    case InsertionMode.IN_COLUMN_GROUP: {
                        endTagInColumnGroup(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_BODY: {
                        endTagInTableBody(this, token);
                        break;
                    }
                    case InsertionMode.IN_ROW: {
                        endTagInRow(this, token);
                        break;
                    }
                    case InsertionMode.IN_CELL: {
                        endTagInCell(this, token);
                        break;
                    }
                    case InsertionMode.IN_SELECT: {
                        endTagInSelect(this, token);
                        break;
                    }
                    case InsertionMode.IN_SELECT_IN_TABLE: {
                        endTagInSelectInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_TEMPLATE: {
                        endTagInTemplate(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_BODY: {
                        endTagAfterBody(this, token);
                        break;
                    }
                    case InsertionMode.IN_FRAMESET: {
                        endTagInFrameset(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_FRAMESET: {
                        endTagAfterFrameset(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_AFTER_BODY: {
                        tokenAfterAfterBody(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onEof(token) {
                switch (this.insertionMode) {
                    case InsertionMode.INITIAL: {
                        tokenInInitialMode(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HTML: {
                        tokenBeforeHtml(this, token);
                        break;
                    }
                    case InsertionMode.BEFORE_HEAD: {
                        tokenBeforeHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD: {
                        tokenInHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_HEAD_NO_SCRIPT: {
                        tokenInHeadNoScript(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_HEAD: {
                        tokenAfterHead(this, token);
                        break;
                    }
                    case InsertionMode.IN_BODY:
                    case InsertionMode.IN_TABLE:
                    case InsertionMode.IN_CAPTION:
                    case InsertionMode.IN_COLUMN_GROUP:
                    case InsertionMode.IN_TABLE_BODY:
                    case InsertionMode.IN_ROW:
                    case InsertionMode.IN_CELL:
                    case InsertionMode.IN_SELECT:
                    case InsertionMode.IN_SELECT_IN_TABLE: {
                        eofInBody(this, token);
                        break;
                    }
                    case InsertionMode.TEXT: {
                        eofInText(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        tokenInTableText(this, token);
                        break;
                    }
                    case InsertionMode.IN_TEMPLATE: {
                        eofInTemplate(this, token);
                        break;
                    }
                    case InsertionMode.AFTER_BODY:
                    case InsertionMode.IN_FRAMESET:
                    case InsertionMode.AFTER_FRAMESET:
                    case InsertionMode.AFTER_AFTER_BODY:
                    case InsertionMode.AFTER_AFTER_FRAMESET: {
                        stopParsing(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            onWhitespaceCharacter(token) {
                if (this.skipNextNewLine) {
                    this.skipNextNewLine = false;
                    if (token.chars.charCodeAt(0) === unicode.CODE_POINTS.LINE_FEED) {
                        if (token.chars.length === 1) {
                            return;
                        }
                        token.chars = token.chars.substr(1);
                    }
                }
                if (this.tokenizer.inForeignNode) {
                    this._insertCharacters(token);
                    return;
                }
                switch (this.insertionMode) {
                    case InsertionMode.IN_HEAD:
                    case InsertionMode.IN_HEAD_NO_SCRIPT:
                    case InsertionMode.AFTER_HEAD:
                    case InsertionMode.TEXT:
                    case InsertionMode.IN_COLUMN_GROUP:
                    case InsertionMode.IN_SELECT:
                    case InsertionMode.IN_SELECT_IN_TABLE:
                    case InsertionMode.IN_FRAMESET:
                    case InsertionMode.AFTER_FRAMESET: {
                        this._insertCharacters(token);
                        break;
                    }
                    case InsertionMode.IN_BODY:
                    case InsertionMode.IN_CAPTION:
                    case InsertionMode.IN_CELL:
                    case InsertionMode.IN_TEMPLATE:
                    case InsertionMode.AFTER_BODY:
                    case InsertionMode.AFTER_AFTER_BODY:
                    case InsertionMode.AFTER_AFTER_FRAMESET: {
                        whitespaceCharacterInBody(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE:
                    case InsertionMode.IN_TABLE_BODY:
                    case InsertionMode.IN_ROW: {
                        characterInTable(this, token);
                        break;
                    }
                    case InsertionMode.IN_TABLE_TEXT: {
                        whitespaceCharacterInTableText(this, token);
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
        }
        exports.Parser = Parser;
        //Adoption agency algorithm
        //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
        //------------------------------------------------------------------
        //Steps 5-8 of the algorithm
        function aaObtainFormattingElementEntry(p, token) {
            let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
            if (formattingElementEntry) {
                if (!p.openElements.contains(formattingElementEntry.element)) {
                    p.activeFormattingElements.removeEntry(formattingElementEntry);
                    formattingElementEntry = null;
                }
                else if (!p.openElements.hasInScope(token.tagID)) {
                    formattingElementEntry = null;
                }
            }
            else {
                genericEndTagInBody(p, token);
            }
            return formattingElementEntry;
        }
        //Steps 9 and 10 of the algorithm
        function aaObtainFurthestBlock(p, formattingElementEntry) {
            let furthestBlock = null;
            let idx = p.openElements.stackTop;
            for (; idx >= 0; idx--) {
                const element = p.openElements.items[idx];
                if (element === formattingElementEntry.element) {
                    break;
                }
                if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
                    furthestBlock = element;
                }
            }
            if (!furthestBlock) {
                p.openElements.shortenToLength(idx < 0 ? 0 : idx);
                p.activeFormattingElements.removeEntry(formattingElementEntry);
            }
            return furthestBlock;
        }
        //Step 13 of the algorithm
        function aaInnerLoop(p, furthestBlock, formattingElement) {
            let lastElement = furthestBlock;
            let nextElement = p.openElements.getCommonAncestor(furthestBlock);
            for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
                //NOTE: store the next element for the next loop iteration (it may be deleted from the stack by step 9.5)
                nextElement = p.openElements.getCommonAncestor(element);
                const elementEntry = p.activeFormattingElements.getElementEntry(element);
                const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
                const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
                if (shouldRemoveFromOpenElements) {
                    if (counterOverflow) {
                        p.activeFormattingElements.removeEntry(elementEntry);
                    }
                    p.openElements.remove(element);
                }
                else {
                    element = aaRecreateElementFromEntry(p, elementEntry);
                    if (lastElement === furthestBlock) {
                        p.activeFormattingElements.bookmark = elementEntry;
                    }
                    p.treeAdapter.detachNode(lastElement);
                    p.treeAdapter.appendChild(element, lastElement);
                    lastElement = element;
                }
            }
            return lastElement;
        }
        //Step 13.7 of the algorithm
        function aaRecreateElementFromEntry(p, elementEntry) {
            const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
            const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
            p.openElements.replace(elementEntry.element, newElement);
            elementEntry.element = newElement;
            return newElement;
        }
        //Step 14 of the algorithm
        function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
            const tn = p.treeAdapter.getTagName(commonAncestor);
            const tid = (0, html_js_1.getTagID)(tn);
            if (p._isElementCausesFosterParenting(tid)) {
                p._fosterParentElement(lastElement);
            }
            else {
                const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
                if (tid === html_js_1.TAG_ID.TEMPLATE && ns === html_js_1.NS.HTML) {
                    commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
                }
                p.treeAdapter.appendChild(commonAncestor, lastElement);
            }
        }
        //Steps 15-19 of the algorithm
        function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
            const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
            const { token } = formattingElementEntry;
            const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
            p._adoptNodes(furthestBlock, newElement);
            p.treeAdapter.appendChild(furthestBlock, newElement);
            p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            p.openElements.remove(formattingElementEntry.element);
            p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
        }
        //Algorithm entry point
        function callAdoptionAgency(p, token) {
            for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
                const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
                if (!formattingElementEntry) {
                    break;
                }
                const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
                if (!furthestBlock) {
                    break;
                }
                p.activeFormattingElements.bookmark = formattingElementEntry;
                const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
                const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
                p.treeAdapter.detachNode(lastElement);
                if (commonAncestor)
                    aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
                aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
            }
        }
        //Generic token handlers
        //------------------------------------------------------------------
        function appendComment(p, token) {
            p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
        }
        function appendCommentToRootHtmlElement(p, token) {
            p._appendCommentNode(token, p.openElements.items[0]);
        }
        function appendCommentToDocument(p, token) {
            p._appendCommentNode(token, p.document);
        }
        function stopParsing(p, token) {
            p.stopped = true;
            // NOTE: Set end locations for elements that remain on the open element stack.
            if (token.location) {
                // NOTE: If we are not in a fragment, `html` and `body` will stay on the stack.
                // This is a problem, as we might overwrite their end position here.
                const target = p.fragmentContext ? 0 : 2;
                for (let i = p.openElements.stackTop; i >= target; i--) {
                    p._setEndLocation(p.openElements.items[i], token);
                }
                // Handle `html` and `body`
                if (!p.fragmentContext && p.openElements.stackTop >= 0) {
                    const htmlElement = p.openElements.items[0];
                    const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
                    if (htmlLocation && !htmlLocation.endTag) {
                        p._setEndLocation(htmlElement, token);
                        if (p.openElements.stackTop >= 1) {
                            const bodyElement = p.openElements.items[1];
                            const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
                            if (bodyLocation && !bodyLocation.endTag) {
                                p._setEndLocation(bodyElement, token);
                            }
                        }
                    }
                }
            }
        }
        // The "initial" insertion mode
        //------------------------------------------------------------------
        function doctypeInInitialMode(p, token) {
            p._setDocumentType(token);
            const mode = token.forceQuirks ? html_js_1.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
            if (!doctype.isConforming(token)) {
                p._err(token, error_codes_js_1.ERR.nonConformingDoctype);
            }
            p.treeAdapter.setDocumentMode(p.document, mode);
            p.insertionMode = InsertionMode.BEFORE_HTML;
        }
        function tokenInInitialMode(p, token) {
            p._err(token, error_codes_js_1.ERR.missingDoctype, true);
            p.treeAdapter.setDocumentMode(p.document, html_js_1.DOCUMENT_MODE.QUIRKS);
            p.insertionMode = InsertionMode.BEFORE_HTML;
            p._processToken(token);
        }
        // The "before html" insertion mode
        //------------------------------------------------------------------
        function startTagBeforeHtml(p, token) {
            if (token.tagID === html_js_1.TAG_ID.HTML) {
                p._insertElement(token, html_js_1.NS.HTML);
                p.insertionMode = InsertionMode.BEFORE_HEAD;
            }
            else {
                tokenBeforeHtml(p, token);
            }
        }
        function endTagBeforeHtml(p, token) {
            const tn = token.tagID;
            if (tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.BR) {
                tokenBeforeHtml(p, token);
            }
        }
        function tokenBeforeHtml(p, token) {
            p._insertFakeRootElement();
            p.insertionMode = InsertionMode.BEFORE_HEAD;
            p._processToken(token);
        }
        // The "before head" insertion mode
        //------------------------------------------------------------------
        function startTagBeforeHead(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.HEAD: {
                    p._insertElement(token, html_js_1.NS.HTML);
                    p.headElement = p.openElements.current;
                    p.insertionMode = InsertionMode.IN_HEAD;
                    break;
                }
                default: {
                    tokenBeforeHead(p, token);
                }
            }
        }
        function endTagBeforeHead(p, token) {
            const tn = token.tagID;
            if (tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.BR) {
                tokenBeforeHead(p, token);
            }
            else {
                p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
            }
        }
        function tokenBeforeHead(p, token) {
            p._insertFakeElement(html_js_1.TAG_NAMES.HEAD, html_js_1.TAG_ID.HEAD);
            p.headElement = p.openElements.current;
            p.insertionMode = InsertionMode.IN_HEAD;
            p._processToken(token);
        }
        // The "in head" insertion mode
        //------------------------------------------------------------------
        function startTagInHead(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BASE:
                case html_js_1.TAG_ID.BASEFONT:
                case html_js_1.TAG_ID.BGSOUND:
                case html_js_1.TAG_ID.LINK:
                case html_js_1.TAG_ID.META: {
                    p._appendElement(token, html_js_1.NS.HTML);
                    token.ackSelfClosing = true;
                    break;
                }
                case html_js_1.TAG_ID.TITLE: {
                    p._switchToTextParsing(token, index_js_1.TokenizerMode.RCDATA);
                    break;
                }
                case html_js_1.TAG_ID.NOSCRIPT: {
                    if (p.options.scriptingEnabled) {
                        p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
                    }
                    else {
                        p._insertElement(token, html_js_1.NS.HTML);
                        p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
                    }
                    break;
                }
                case html_js_1.TAG_ID.NOFRAMES:
                case html_js_1.TAG_ID.STYLE: {
                    p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
                    break;
                }
                case html_js_1.TAG_ID.SCRIPT: {
                    p._switchToTextParsing(token, index_js_1.TokenizerMode.SCRIPT_DATA);
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    p._insertTemplate(token);
                    p.activeFormattingElements.insertMarker();
                    p.framesetOk = false;
                    p.insertionMode = InsertionMode.IN_TEMPLATE;
                    p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
                    break;
                }
                case html_js_1.TAG_ID.HEAD: {
                    p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
                    break;
                }
                default: {
                    tokenInHead(p, token);
                }
            }
        }
        function endTagInHead(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HEAD: {
                    p.openElements.pop();
                    p.insertionMode = InsertionMode.AFTER_HEAD;
                    break;
                }
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.BR:
                case html_js_1.TAG_ID.HTML: {
                    tokenInHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    templateEndTagInHead(p, token);
                    break;
                }
                default: {
                    p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
                }
            }
        }
        function templateEndTagInHead(p, token) {
            if (p.openElements.tmplCount > 0) {
                p.openElements.generateImpliedEndTagsThoroughly();
                if (p.openElements.currentTagId !== html_js_1.TAG_ID.TEMPLATE) {
                    p._err(token, error_codes_js_1.ERR.closingOfElementWithOpenChildElements);
                }
                p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
                p.activeFormattingElements.clearToLastMarker();
                p.tmplInsertionModeStack.shift();
                p._resetInsertionMode();
            }
            else {
                p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
            }
        }
        function tokenInHead(p, token) {
            p.openElements.pop();
            p.insertionMode = InsertionMode.AFTER_HEAD;
            p._processToken(token);
        }
        // The "in head no script" insertion mode
        //------------------------------------------------------------------
        function startTagInHeadNoScript(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BASEFONT:
                case html_js_1.TAG_ID.BGSOUND:
                case html_js_1.TAG_ID.HEAD:
                case html_js_1.TAG_ID.LINK:
                case html_js_1.TAG_ID.META:
                case html_js_1.TAG_ID.NOFRAMES:
                case html_js_1.TAG_ID.STYLE: {
                    startTagInHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.NOSCRIPT: {
                    p._err(token, error_codes_js_1.ERR.nestedNoscriptInHead);
                    break;
                }
                default: {
                    tokenInHeadNoScript(p, token);
                }
            }
        }
        function endTagInHeadNoScript(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.NOSCRIPT: {
                    p.openElements.pop();
                    p.insertionMode = InsertionMode.IN_HEAD;
                    break;
                }
                case html_js_1.TAG_ID.BR: {
                    tokenInHeadNoScript(p, token);
                    break;
                }
                default: {
                    p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
                }
            }
        }
        function tokenInHeadNoScript(p, token) {
            const errCode = token.type === token_js_1.TokenType.EOF ? error_codes_js_1.ERR.openElementsLeftAfterEof : error_codes_js_1.ERR.disallowedContentInNoscriptInHead;
            p._err(token, errCode);
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_HEAD;
            p._processToken(token);
        }
        // The "after head" insertion mode
        //------------------------------------------------------------------
        function startTagAfterHead(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BODY: {
                    p._insertElement(token, html_js_1.NS.HTML);
                    p.framesetOk = false;
                    p.insertionMode = InsertionMode.IN_BODY;
                    break;
                }
                case html_js_1.TAG_ID.FRAMESET: {
                    p._insertElement(token, html_js_1.NS.HTML);
                    p.insertionMode = InsertionMode.IN_FRAMESET;
                    break;
                }
                case html_js_1.TAG_ID.BASE:
                case html_js_1.TAG_ID.BASEFONT:
                case html_js_1.TAG_ID.BGSOUND:
                case html_js_1.TAG_ID.LINK:
                case html_js_1.TAG_ID.META:
                case html_js_1.TAG_ID.NOFRAMES:
                case html_js_1.TAG_ID.SCRIPT:
                case html_js_1.TAG_ID.STYLE:
                case html_js_1.TAG_ID.TEMPLATE:
                case html_js_1.TAG_ID.TITLE: {
                    p._err(token, error_codes_js_1.ERR.abandonedHeadElementChild);
                    p.openElements.push(p.headElement, html_js_1.TAG_ID.HEAD);
                    startTagInHead(p, token);
                    p.openElements.remove(p.headElement);
                    break;
                }
                case html_js_1.TAG_ID.HEAD: {
                    p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
                    break;
                }
                default: {
                    tokenAfterHead(p, token);
                }
            }
        }
        function endTagAfterHead(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.HTML:
                case html_js_1.TAG_ID.BR: {
                    tokenAfterHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    templateEndTagInHead(p, token);
                    break;
                }
                default: {
                    p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
                }
            }
        }
        function tokenAfterHead(p, token) {
            p._insertFakeElement(html_js_1.TAG_NAMES.BODY, html_js_1.TAG_ID.BODY);
            p.insertionMode = InsertionMode.IN_BODY;
            modeInBody(p, token);
        }
        // The "in body" insertion mode
        //------------------------------------------------------------------
        function modeInBody(p, token) {
            switch (token.type) {
                case token_js_1.TokenType.CHARACTER: {
                    characterInBody(p, token);
                    break;
                }
                case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                    whitespaceCharacterInBody(p, token);
                    break;
                }
                case token_js_1.TokenType.COMMENT: {
                    appendComment(p, token);
                    break;
                }
                case token_js_1.TokenType.START_TAG: {
                    startTagInBody(p, token);
                    break;
                }
                case token_js_1.TokenType.END_TAG: {
                    endTagInBody(p, token);
                    break;
                }
                case token_js_1.TokenType.EOF: {
                    eofInBody(p, token);
                    break;
                }
                default:
                // Do nothing
            }
        }
        function whitespaceCharacterInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._insertCharacters(token);
        }
        function characterInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._insertCharacters(token);
            p.framesetOk = false;
        }
        function htmlStartTagInBody(p, token) {
            if (p.openElements.tmplCount === 0) {
                p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
            }
        }
        function bodyStartTagInBody(p, token) {
            const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
            if (bodyElement && p.openElements.tmplCount === 0) {
                p.framesetOk = false;
                p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
            }
        }
        function framesetStartTagInBody(p, token) {
            const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
            if (p.framesetOk && bodyElement) {
                p.treeAdapter.detachNode(bodyElement);
                p.openElements.popAllUpToHtmlElement();
                p._insertElement(token, html_js_1.NS.HTML);
                p.insertionMode = InsertionMode.IN_FRAMESET;
            }
        }
        function addressStartTagInBody(p, token) {
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function numberedHeaderStartTagInBody(p, token) {
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            if ((0, html_js_1.isNumberedHeader)(p.openElements.currentTagId)) {
                p.openElements.pop();
            }
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function preStartTagInBody(p, token) {
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._insertElement(token, html_js_1.NS.HTML);
            //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
            //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
            p.skipNextNewLine = true;
            p.framesetOk = false;
        }
        function formStartTagInBody(p, token) {
            const inTemplate = p.openElements.tmplCount > 0;
            if (!p.formElement || inTemplate) {
                if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                    p._closePElement();
                }
                p._insertElement(token, html_js_1.NS.HTML);
                if (!inTemplate) {
                    p.formElement = p.openElements.current;
                }
            }
        }
        function listItemStartTagInBody(p, token) {
            p.framesetOk = false;
            const tn = token.tagID;
            for (let i = p.openElements.stackTop; i >= 0; i--) {
                const elementId = p.openElements.tagIDs[i];
                if ((tn === html_js_1.TAG_ID.LI && elementId === html_js_1.TAG_ID.LI) ||
                    ((tn === html_js_1.TAG_ID.DD || tn === html_js_1.TAG_ID.DT) && (elementId === html_js_1.TAG_ID.DD || elementId === html_js_1.TAG_ID.DT))) {
                    p.openElements.generateImpliedEndTagsWithExclusion(elementId);
                    p.openElements.popUntilTagNamePopped(elementId);
                    break;
                }
                if (elementId !== html_js_1.TAG_ID.ADDRESS &&
                    elementId !== html_js_1.TAG_ID.DIV &&
                    elementId !== html_js_1.TAG_ID.P &&
                    p._isSpecialElement(p.openElements.items[i], elementId)) {
                    break;
                }
            }
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function plaintextStartTagInBody(p, token) {
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._insertElement(token, html_js_1.NS.HTML);
            p.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
        }
        function buttonStartTagInBody(p, token) {
            if (p.openElements.hasInScope(html_js_1.TAG_ID.BUTTON)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.BUTTON);
            }
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
            p.framesetOk = false;
        }
        function aStartTagInBody(p, token) {
            const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(html_js_1.TAG_NAMES.A);
            if (activeElementEntry) {
                callAdoptionAgency(p, token);
                p.openElements.remove(activeElementEntry.element);
                p.activeFormattingElements.removeEntry(activeElementEntry);
            }
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
            p.activeFormattingElements.pushElement(p.openElements.current, token);
        }
        function bStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
            p.activeFormattingElements.pushElement(p.openElements.current, token);
        }
        function nobrStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            if (p.openElements.hasInScope(html_js_1.TAG_ID.NOBR)) {
                callAdoptionAgency(p, token);
                p._reconstructActiveFormattingElements();
            }
            p._insertElement(token, html_js_1.NS.HTML);
            p.activeFormattingElements.pushElement(p.openElements.current, token);
        }
        function appletStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
            p.activeFormattingElements.insertMarker();
            p.framesetOk = false;
        }
        function tableStartTagInBody(p, token) {
            if (p.treeAdapter.getDocumentMode(p.document) !== html_js_1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._insertElement(token, html_js_1.NS.HTML);
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_TABLE;
        }
        function areaStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._appendElement(token, html_js_1.NS.HTML);
            p.framesetOk = false;
            token.ackSelfClosing = true;
        }
        function isHiddenInput(token) {
            const inputType = (0, token_js_1.getTokenAttr)(token, html_js_1.ATTRS.TYPE);
            return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
        }
        function inputStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._appendElement(token, html_js_1.NS.HTML);
            if (!isHiddenInput(token)) {
                p.framesetOk = false;
            }
            token.ackSelfClosing = true;
        }
        function paramStartTagInBody(p, token) {
            p._appendElement(token, html_js_1.NS.HTML);
            token.ackSelfClosing = true;
        }
        function hrStartTagInBody(p, token) {
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._appendElement(token, html_js_1.NS.HTML);
            p.framesetOk = false;
            token.ackSelfClosing = true;
        }
        function imageStartTagInBody(p, token) {
            token.tagName = html_js_1.TAG_NAMES.IMG;
            token.tagID = html_js_1.TAG_ID.IMG;
            areaStartTagInBody(p, token);
        }
        function textareaStartTagInBody(p, token) {
            p._insertElement(token, html_js_1.NS.HTML);
            //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
            //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
            p.skipNextNewLine = true;
            p.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
            p.originalInsertionMode = p.insertionMode;
            p.framesetOk = false;
            p.insertionMode = InsertionMode.TEXT;
        }
        function xmpStartTagInBody(p, token) {
            if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._closePElement();
            }
            p._reconstructActiveFormattingElements();
            p.framesetOk = false;
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
        }
        function iframeStartTagInBody(p, token) {
            p.framesetOk = false;
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
        }
        //NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
        //<noembed> as rawtext.
        function noembedStartTagInBody(p, token) {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
        }
        function selectStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
            p.framesetOk = false;
            p.insertionMode =
                p.insertionMode === InsertionMode.IN_TABLE ||
                    p.insertionMode === InsertionMode.IN_CAPTION ||
                    p.insertionMode === InsertionMode.IN_TABLE_BODY ||
                    p.insertionMode === InsertionMode.IN_ROW ||
                    p.insertionMode === InsertionMode.IN_CELL
                    ? InsertionMode.IN_SELECT_IN_TABLE
                    : InsertionMode.IN_SELECT;
        }
        function optgroupStartTagInBody(p, token) {
            if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
                p.openElements.pop();
            }
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function rbStartTagInBody(p, token) {
            if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
                p.openElements.generateImpliedEndTags();
            }
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function rtStartTagInBody(p, token) {
            if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
                p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.RTC);
            }
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function mathStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            foreignContent.adjustTokenMathMLAttrs(token);
            foreignContent.adjustTokenXMLAttrs(token);
            if (token.selfClosing) {
                p._appendElement(token, html_js_1.NS.MATHML);
            }
            else {
                p._insertElement(token, html_js_1.NS.MATHML);
            }
            token.ackSelfClosing = true;
        }
        function svgStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            foreignContent.adjustTokenSVGAttrs(token);
            foreignContent.adjustTokenXMLAttrs(token);
            if (token.selfClosing) {
                p._appendElement(token, html_js_1.NS.SVG);
            }
            else {
                p._insertElement(token, html_js_1.NS.SVG);
            }
            token.ackSelfClosing = true;
        }
        function genericStartTagInBody(p, token) {
            p._reconstructActiveFormattingElements();
            p._insertElement(token, html_js_1.NS.HTML);
        }
        function startTagInBody(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.I:
                case html_js_1.TAG_ID.S:
                case html_js_1.TAG_ID.B:
                case html_js_1.TAG_ID.U:
                case html_js_1.TAG_ID.EM:
                case html_js_1.TAG_ID.TT:
                case html_js_1.TAG_ID.BIG:
                case html_js_1.TAG_ID.CODE:
                case html_js_1.TAG_ID.FONT:
                case html_js_1.TAG_ID.SMALL:
                case html_js_1.TAG_ID.STRIKE:
                case html_js_1.TAG_ID.STRONG: {
                    bStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.A: {
                    aStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.H1:
                case html_js_1.TAG_ID.H2:
                case html_js_1.TAG_ID.H3:
                case html_js_1.TAG_ID.H4:
                case html_js_1.TAG_ID.H5:
                case html_js_1.TAG_ID.H6: {
                    numberedHeaderStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.P:
                case html_js_1.TAG_ID.DL:
                case html_js_1.TAG_ID.OL:
                case html_js_1.TAG_ID.UL:
                case html_js_1.TAG_ID.DIV:
                case html_js_1.TAG_ID.DIR:
                case html_js_1.TAG_ID.NAV:
                case html_js_1.TAG_ID.MAIN:
                case html_js_1.TAG_ID.MENU:
                case html_js_1.TAG_ID.ASIDE:
                case html_js_1.TAG_ID.CENTER:
                case html_js_1.TAG_ID.FIGURE:
                case html_js_1.TAG_ID.FOOTER:
                case html_js_1.TAG_ID.HEADER:
                case html_js_1.TAG_ID.HGROUP:
                case html_js_1.TAG_ID.DIALOG:
                case html_js_1.TAG_ID.DETAILS:
                case html_js_1.TAG_ID.ADDRESS:
                case html_js_1.TAG_ID.ARTICLE:
                case html_js_1.TAG_ID.SECTION:
                case html_js_1.TAG_ID.SUMMARY:
                case html_js_1.TAG_ID.FIELDSET:
                case html_js_1.TAG_ID.BLOCKQUOTE:
                case html_js_1.TAG_ID.FIGCAPTION: {
                    addressStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.LI:
                case html_js_1.TAG_ID.DD:
                case html_js_1.TAG_ID.DT: {
                    listItemStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BR:
                case html_js_1.TAG_ID.IMG:
                case html_js_1.TAG_ID.WBR:
                case html_js_1.TAG_ID.AREA:
                case html_js_1.TAG_ID.EMBED:
                case html_js_1.TAG_ID.KEYGEN: {
                    areaStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.HR: {
                    hrStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.RB:
                case html_js_1.TAG_ID.RTC: {
                    rbStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.RT:
                case html_js_1.TAG_ID.RP: {
                    rtStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.PRE:
                case html_js_1.TAG_ID.LISTING: {
                    preStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.XMP: {
                    xmpStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.SVG: {
                    svgStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.HTML: {
                    htmlStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BASE:
                case html_js_1.TAG_ID.LINK:
                case html_js_1.TAG_ID.META:
                case html_js_1.TAG_ID.STYLE:
                case html_js_1.TAG_ID.TITLE:
                case html_js_1.TAG_ID.SCRIPT:
                case html_js_1.TAG_ID.BGSOUND:
                case html_js_1.TAG_ID.BASEFONT:
                case html_js_1.TAG_ID.TEMPLATE: {
                    startTagInHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BODY: {
                    bodyStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.FORM: {
                    formStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.NOBR: {
                    nobrStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.MATH: {
                    mathStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TABLE: {
                    tableStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.INPUT: {
                    inputStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.PARAM:
                case html_js_1.TAG_ID.TRACK:
                case html_js_1.TAG_ID.SOURCE: {
                    paramStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.IMAGE: {
                    imageStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BUTTON: {
                    buttonStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.APPLET:
                case html_js_1.TAG_ID.OBJECT:
                case html_js_1.TAG_ID.MARQUEE: {
                    appletStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.IFRAME: {
                    iframeStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.SELECT: {
                    selectStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.OPTION:
                case html_js_1.TAG_ID.OPTGROUP: {
                    optgroupStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.NOEMBED: {
                    noembedStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.FRAMESET: {
                    framesetStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TEXTAREA: {
                    textareaStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.NOSCRIPT: {
                    if (p.options.scriptingEnabled) {
                        noembedStartTagInBody(p, token);
                    }
                    else {
                        genericStartTagInBody(p, token);
                    }
                    break;
                }
                case html_js_1.TAG_ID.PLAINTEXT: {
                    plaintextStartTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TR:
                case html_js_1.TAG_ID.HEAD:
                case html_js_1.TAG_ID.FRAME:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD:
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COLGROUP: {
                    // Ignore token
                    break;
                }
                default: {
                    genericStartTagInBody(p, token);
                }
            }
        }
        function bodyEndTagInBody(p, token) {
            if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
                p.insertionMode = InsertionMode.AFTER_BODY;
                //NOTE: <body> is never popped from the stack, so we need to updated
                //the end location explicitly.
                if (p.options.sourceCodeLocationInfo) {
                    const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
                    if (bodyElement) {
                        p._setEndLocation(bodyElement, token);
                    }
                }
            }
        }
        function htmlEndTagInBody(p, token) {
            if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
                p.insertionMode = InsertionMode.AFTER_BODY;
                endTagAfterBody(p, token);
            }
        }
        function addressEndTagInBody(p, token) {
            const tn = token.tagID;
            if (p.openElements.hasInScope(tn)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(tn);
            }
        }
        function formEndTagInBody(p) {
            const inTemplate = p.openElements.tmplCount > 0;
            const { formElement } = p;
            if (!inTemplate) {
                p.formElement = null;
            }
            if ((formElement || inTemplate) && p.openElements.hasInScope(html_js_1.TAG_ID.FORM)) {
                p.openElements.generateImpliedEndTags();
                if (inTemplate) {
                    p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.FORM);
                }
                else if (formElement) {
                    p.openElements.remove(formElement);
                }
            }
        }
        function pEndTagInBody(p) {
            if (!p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
                p._insertFakeElement(html_js_1.TAG_NAMES.P, html_js_1.TAG_ID.P);
            }
            p._closePElement();
        }
        function liEndTagInBody(p) {
            if (p.openElements.hasInListItemScope(html_js_1.TAG_ID.LI)) {
                p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.LI);
                p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.LI);
            }
        }
        function ddEndTagInBody(p, token) {
            const tn = token.tagID;
            if (p.openElements.hasInScope(tn)) {
                p.openElements.generateImpliedEndTagsWithExclusion(tn);
                p.openElements.popUntilTagNamePopped(tn);
            }
        }
        function numberedHeaderEndTagInBody(p) {
            if (p.openElements.hasNumberedHeaderInScope()) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilNumberedHeaderPopped();
            }
        }
        function appletEndTagInBody(p, token) {
            const tn = token.tagID;
            if (p.openElements.hasInScope(tn)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(tn);
                p.activeFormattingElements.clearToLastMarker();
            }
        }
        function brEndTagInBody(p) {
            p._reconstructActiveFormattingElements();
            p._insertFakeElement(html_js_1.TAG_NAMES.BR, html_js_1.TAG_ID.BR);
            p.openElements.pop();
            p.framesetOk = false;
        }
        function genericEndTagInBody(p, token) {
            const tn = token.tagName;
            const tid = token.tagID;
            for (let i = p.openElements.stackTop; i > 0; i--) {
                const element = p.openElements.items[i];
                const elementId = p.openElements.tagIDs[i];
                // Compare the tag name here, as the tag might not be a known tag with an ID.
                if (tid === elementId && (tid !== html_js_1.TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
                    p.openElements.generateImpliedEndTagsWithExclusion(tid);
                    if (p.openElements.stackTop >= i)
                        p.openElements.shortenToLength(i);
                    break;
                }
                if (p._isSpecialElement(element, elementId)) {
                    break;
                }
            }
        }
        function endTagInBody(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.A:
                case html_js_1.TAG_ID.B:
                case html_js_1.TAG_ID.I:
                case html_js_1.TAG_ID.S:
                case html_js_1.TAG_ID.U:
                case html_js_1.TAG_ID.EM:
                case html_js_1.TAG_ID.TT:
                case html_js_1.TAG_ID.BIG:
                case html_js_1.TAG_ID.CODE:
                case html_js_1.TAG_ID.FONT:
                case html_js_1.TAG_ID.NOBR:
                case html_js_1.TAG_ID.SMALL:
                case html_js_1.TAG_ID.STRIKE:
                case html_js_1.TAG_ID.STRONG: {
                    callAdoptionAgency(p, token);
                    break;
                }
                case html_js_1.TAG_ID.P: {
                    pEndTagInBody(p);
                    break;
                }
                case html_js_1.TAG_ID.DL:
                case html_js_1.TAG_ID.UL:
                case html_js_1.TAG_ID.OL:
                case html_js_1.TAG_ID.DIR:
                case html_js_1.TAG_ID.DIV:
                case html_js_1.TAG_ID.NAV:
                case html_js_1.TAG_ID.PRE:
                case html_js_1.TAG_ID.MAIN:
                case html_js_1.TAG_ID.MENU:
                case html_js_1.TAG_ID.ASIDE:
                case html_js_1.TAG_ID.BUTTON:
                case html_js_1.TAG_ID.CENTER:
                case html_js_1.TAG_ID.FIGURE:
                case html_js_1.TAG_ID.FOOTER:
                case html_js_1.TAG_ID.HEADER:
                case html_js_1.TAG_ID.HGROUP:
                case html_js_1.TAG_ID.DIALOG:
                case html_js_1.TAG_ID.ADDRESS:
                case html_js_1.TAG_ID.ARTICLE:
                case html_js_1.TAG_ID.DETAILS:
                case html_js_1.TAG_ID.SECTION:
                case html_js_1.TAG_ID.SUMMARY:
                case html_js_1.TAG_ID.LISTING:
                case html_js_1.TAG_ID.FIELDSET:
                case html_js_1.TAG_ID.BLOCKQUOTE:
                case html_js_1.TAG_ID.FIGCAPTION: {
                    addressEndTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.LI: {
                    liEndTagInBody(p);
                    break;
                }
                case html_js_1.TAG_ID.DD:
                case html_js_1.TAG_ID.DT: {
                    ddEndTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.H1:
                case html_js_1.TAG_ID.H2:
                case html_js_1.TAG_ID.H3:
                case html_js_1.TAG_ID.H4:
                case html_js_1.TAG_ID.H5:
                case html_js_1.TAG_ID.H6: {
                    numberedHeaderEndTagInBody(p);
                    break;
                }
                case html_js_1.TAG_ID.BR: {
                    brEndTagInBody(p);
                    break;
                }
                case html_js_1.TAG_ID.BODY: {
                    bodyEndTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.HTML: {
                    htmlEndTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.FORM: {
                    formEndTagInBody(p);
                    break;
                }
                case html_js_1.TAG_ID.APPLET:
                case html_js_1.TAG_ID.OBJECT:
                case html_js_1.TAG_ID.MARQUEE: {
                    appletEndTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    templateEndTagInHead(p, token);
                    break;
                }
                default: {
                    genericEndTagInBody(p, token);
                }
            }
        }
        function eofInBody(p, token) {
            if (p.tmplInsertionModeStack.length > 0) {
                eofInTemplate(p, token);
            }
            else {
                stopParsing(p, token);
            }
        }
        // The "text" insertion mode
        //------------------------------------------------------------------
        function endTagInText(p, token) {
            var _a;
            if (token.tagID === html_js_1.TAG_ID.SCRIPT) {
                (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
            }
            p.openElements.pop();
            p.insertionMode = p.originalInsertionMode;
        }
        function eofInText(p, token) {
            p._err(token, error_codes_js_1.ERR.eofInElementThatCanContainOnlyText);
            p.openElements.pop();
            p.insertionMode = p.originalInsertionMode;
            p.onEof(token);
        }
        // The "in table" insertion mode
        //------------------------------------------------------------------
        function characterInTable(p, token) {
            if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
                p.pendingCharacterTokens.length = 0;
                p.hasNonWhitespacePendingCharacterToken = false;
                p.originalInsertionMode = p.insertionMode;
                p.insertionMode = InsertionMode.IN_TABLE_TEXT;
                switch (token.type) {
                    case token_js_1.TokenType.CHARACTER: {
                        characterInTableText(p, token);
                        break;
                    }
                    case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                        whitespaceCharacterInTableText(p, token);
                        break;
                    }
                    // Ignore null
                }
            }
            else {
                tokenInTable(p, token);
            }
        }
        function captionStartTagInTable(p, token) {
            p.openElements.clearBackToTableContext();
            p.activeFormattingElements.insertMarker();
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_CAPTION;
        }
        function colgroupStartTagInTable(p, token) {
            p.openElements.clearBackToTableContext();
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
        }
        function colStartTagInTable(p, token) {
            p.openElements.clearBackToTableContext();
            p._insertFakeElement(html_js_1.TAG_NAMES.COLGROUP, html_js_1.TAG_ID.COLGROUP);
            p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
            startTagInColumnGroup(p, token);
        }
        function tbodyStartTagInTable(p, token) {
            p.openElements.clearBackToTableContext();
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
        }
        function tdStartTagInTable(p, token) {
            p.openElements.clearBackToTableContext();
            p._insertFakeElement(html_js_1.TAG_NAMES.TBODY, html_js_1.TAG_ID.TBODY);
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
        }
        function tableStartTagInTable(p, token) {
            if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
                p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
                p._resetInsertionMode();
                p._processStartTag(token);
            }
        }
        function inputStartTagInTable(p, token) {
            if (isHiddenInput(token)) {
                p._appendElement(token, html_js_1.NS.HTML);
            }
            else {
                tokenInTable(p, token);
            }
            token.ackSelfClosing = true;
        }
        function formStartTagInTable(p, token) {
            if (!p.formElement && p.openElements.tmplCount === 0) {
                p._insertElement(token, html_js_1.NS.HTML);
                p.formElement = p.openElements.current;
                p.openElements.pop();
            }
        }
        function startTagInTable(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.TR: {
                    tdStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.STYLE:
                case html_js_1.TAG_ID.SCRIPT:
                case html_js_1.TAG_ID.TEMPLATE: {
                    startTagInHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.COL: {
                    colStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.FORM: {
                    formStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TABLE: {
                    tableStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD: {
                    tbodyStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.INPUT: {
                    inputStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.CAPTION: {
                    captionStartTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.COLGROUP: {
                    colgroupStartTagInTable(p, token);
                    break;
                }
                default: {
                    tokenInTable(p, token);
                }
            }
        }
        function endTagInTable(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.TABLE: {
                    if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
                        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
                        p._resetInsertionMode();
                    }
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    templateEndTagInHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.HTML:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.THEAD:
                case html_js_1.TAG_ID.TR: {
                    // Ignore token
                    break;
                }
                default: {
                    tokenInTable(p, token);
                }
            }
        }
        function tokenInTable(p, token) {
            const savedFosterParentingState = p.fosterParentingEnabled;
            p.fosterParentingEnabled = true;
            // Process token in `In Body` mode
            modeInBody(p, token);
            p.fosterParentingEnabled = savedFosterParentingState;
        }
        // The "in table text" insertion mode
        //------------------------------------------------------------------
        function whitespaceCharacterInTableText(p, token) {
            p.pendingCharacterTokens.push(token);
        }
        function characterInTableText(p, token) {
            p.pendingCharacterTokens.push(token);
            p.hasNonWhitespacePendingCharacterToken = true;
        }
        function tokenInTableText(p, token) {
            let i = 0;
            if (p.hasNonWhitespacePendingCharacterToken) {
                for (; i < p.pendingCharacterTokens.length; i++) {
                    tokenInTable(p, p.pendingCharacterTokens[i]);
                }
            }
            else {
                for (; i < p.pendingCharacterTokens.length; i++) {
                    p._insertCharacters(p.pendingCharacterTokens[i]);
                }
            }
            p.insertionMode = p.originalInsertionMode;
            p._processToken(token);
        }
        // The "in caption" insertion mode
        //------------------------------------------------------------------
        const TABLE_VOID_ELEMENTS = new Set([html_js_1.TAG_ID.CAPTION, html_js_1.TAG_ID.COL, html_js_1.TAG_ID.COLGROUP, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.TH, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
        function startTagInCaption(p, token) {
            const tn = token.tagID;
            if (TABLE_VOID_ELEMENTS.has(tn)) {
                if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
                    p.openElements.generateImpliedEndTags();
                    p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
                    p.activeFormattingElements.clearToLastMarker();
                    p.insertionMode = InsertionMode.IN_TABLE;
                    startTagInTable(p, token);
                }
            }
            else {
                startTagInBody(p, token);
            }
        }
        function endTagInCaption(p, token) {
            const tn = token.tagID;
            switch (tn) {
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.TABLE: {
                    if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
                        p.openElements.generateImpliedEndTags();
                        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
                        p.activeFormattingElements.clearToLastMarker();
                        p.insertionMode = InsertionMode.IN_TABLE;
                        if (tn === html_js_1.TAG_ID.TABLE) {
                            endTagInTable(p, token);
                        }
                    }
                    break;
                }
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.HTML:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.THEAD:
                case html_js_1.TAG_ID.TR: {
                    // Ignore token
                    break;
                }
                default: {
                    endTagInBody(p, token);
                }
            }
        }
        // The "in column group" insertion mode
        //------------------------------------------------------------------
        function startTagInColumnGroup(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.COL: {
                    p._appendElement(token, html_js_1.NS.HTML);
                    token.ackSelfClosing = true;
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    startTagInHead(p, token);
                    break;
                }
                default: {
                    tokenInColumnGroup(p, token);
                }
            }
        }
        function endTagInColumnGroup(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.COLGROUP: {
                    if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE;
                    }
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    templateEndTagInHead(p, token);
                    break;
                }
                case html_js_1.TAG_ID.COL: {
                    // Ignore token
                    break;
                }
                default: {
                    tokenInColumnGroup(p, token);
                }
            }
        }
        function tokenInColumnGroup(p, token) {
            if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
                p._processToken(token);
            }
        }
        // The "in table body" insertion mode
        //------------------------------------------------------------------
        function startTagInTableBody(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.TR: {
                    p.openElements.clearBackToTableBodyContext();
                    p._insertElement(token, html_js_1.NS.HTML);
                    p.insertionMode = InsertionMode.IN_ROW;
                    break;
                }
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.TD: {
                    p.openElements.clearBackToTableBodyContext();
                    p._insertFakeElement(html_js_1.TAG_NAMES.TR, html_js_1.TAG_ID.TR);
                    p.insertionMode = InsertionMode.IN_ROW;
                    startTagInRow(p, token);
                    break;
                }
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD: {
                    if (p.openElements.hasTableBodyContextInTableScope()) {
                        p.openElements.clearBackToTableBodyContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE;
                        startTagInTable(p, token);
                    }
                    break;
                }
                default: {
                    startTagInTable(p, token);
                }
            }
        }
        function endTagInTableBody(p, token) {
            const tn = token.tagID;
            switch (token.tagID) {
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD: {
                    if (p.openElements.hasInTableScope(tn)) {
                        p.openElements.clearBackToTableBodyContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE;
                    }
                    break;
                }
                case html_js_1.TAG_ID.TABLE: {
                    if (p.openElements.hasTableBodyContextInTableScope()) {
                        p.openElements.clearBackToTableBodyContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE;
                        endTagInTable(p, token);
                    }
                    break;
                }
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.HTML:
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.TR: {
                    // Ignore token
                    break;
                }
                default: {
                    endTagInTable(p, token);
                }
            }
        }
        // The "in row" insertion mode
        //------------------------------------------------------------------
        function startTagInRow(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.TH:
                case html_js_1.TAG_ID.TD: {
                    p.openElements.clearBackToTableRowContext();
                    p._insertElement(token, html_js_1.NS.HTML);
                    p.insertionMode = InsertionMode.IN_CELL;
                    p.activeFormattingElements.insertMarker();
                    break;
                }
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD:
                case html_js_1.TAG_ID.TR: {
                    if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
                        p.openElements.clearBackToTableRowContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE_BODY;
                        startTagInTableBody(p, token);
                    }
                    break;
                }
                default: {
                    startTagInTable(p, token);
                }
            }
        }
        function endTagInRow(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.TR: {
                    if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
                        p.openElements.clearBackToTableRowContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE_BODY;
                    }
                    break;
                }
                case html_js_1.TAG_ID.TABLE: {
                    if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
                        p.openElements.clearBackToTableRowContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE_BODY;
                        endTagInTableBody(p, token);
                    }
                    break;
                }
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD: {
                    if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
                        p.openElements.clearBackToTableRowContext();
                        p.openElements.pop();
                        p.insertionMode = InsertionMode.IN_TABLE_BODY;
                        endTagInTableBody(p, token);
                    }
                    break;
                }
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.HTML:
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TH: {
                    // Ignore end tag
                    break;
                }
                default: {
                    endTagInTable(p, token);
                }
            }
        }
        // The "in cell" insertion mode
        //------------------------------------------------------------------
        function startTagInCell(p, token) {
            const tn = token.tagID;
            if (TABLE_VOID_ELEMENTS.has(tn)) {
                if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TD) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TH)) {
                    p._closeTableCell();
                    startTagInRow(p, token);
                }
            }
            else {
                startTagInBody(p, token);
            }
        }
        function endTagInCell(p, token) {
            const tn = token.tagID;
            switch (tn) {
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TH: {
                    if (p.openElements.hasInTableScope(tn)) {
                        p.openElements.generateImpliedEndTags();
                        p.openElements.popUntilTagNamePopped(tn);
                        p.activeFormattingElements.clearToLastMarker();
                        p.insertionMode = InsertionMode.IN_ROW;
                    }
                    break;
                }
                case html_js_1.TAG_ID.TABLE:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD:
                case html_js_1.TAG_ID.TR: {
                    if (p.openElements.hasInTableScope(tn)) {
                        p._closeTableCell();
                        endTagInRow(p, token);
                    }
                    break;
                }
                case html_js_1.TAG_ID.BODY:
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COL:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.HTML: {
                    // Ignore token
                    break;
                }
                default: {
                    endTagInBody(p, token);
                }
            }
        }
        // The "in select" insertion mode
        //------------------------------------------------------------------
        function startTagInSelect(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.OPTION: {
                    if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
                        p.openElements.pop();
                    }
                    p._insertElement(token, html_js_1.NS.HTML);
                    break;
                }
                case html_js_1.TAG_ID.OPTGROUP: {
                    if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
                        p.openElements.pop();
                    }
                    if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
                        p.openElements.pop();
                    }
                    p._insertElement(token, html_js_1.NS.HTML);
                    break;
                }
                case html_js_1.TAG_ID.INPUT:
                case html_js_1.TAG_ID.KEYGEN:
                case html_js_1.TAG_ID.TEXTAREA:
                case html_js_1.TAG_ID.SELECT: {
                    if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
                        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
                        p._resetInsertionMode();
                        if (token.tagID !== html_js_1.TAG_ID.SELECT) {
                            p._processStartTag(token);
                        }
                    }
                    break;
                }
                case html_js_1.TAG_ID.SCRIPT:
                case html_js_1.TAG_ID.TEMPLATE: {
                    startTagInHead(p, token);
                    break;
                }
                default:
                // Do nothing
            }
        }
        function endTagInSelect(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.OPTGROUP: {
                    if (p.openElements.stackTop > 0 &&
                        p.openElements.currentTagId === html_js_1.TAG_ID.OPTION &&
                        p.openElements.tagIDs[p.openElements.stackTop - 1] === html_js_1.TAG_ID.OPTGROUP) {
                        p.openElements.pop();
                    }
                    if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
                        p.openElements.pop();
                    }
                    break;
                }
                case html_js_1.TAG_ID.OPTION: {
                    if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
                        p.openElements.pop();
                    }
                    break;
                }
                case html_js_1.TAG_ID.SELECT: {
                    if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
                        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
                        p._resetInsertionMode();
                    }
                    break;
                }
                case html_js_1.TAG_ID.TEMPLATE: {
                    templateEndTagInHead(p, token);
                    break;
                }
                default:
                // Do nothing
            }
        }
        // The "in select in table" insertion mode
        //------------------------------------------------------------------
        function startTagInSelectInTable(p, token) {
            const tn = token.tagID;
            if (tn === html_js_1.TAG_ID.CAPTION ||
                tn === html_js_1.TAG_ID.TABLE ||
                tn === html_js_1.TAG_ID.TBODY ||
                tn === html_js_1.TAG_ID.TFOOT ||
                tn === html_js_1.TAG_ID.THEAD ||
                tn === html_js_1.TAG_ID.TR ||
                tn === html_js_1.TAG_ID.TD ||
                tn === html_js_1.TAG_ID.TH) {
                p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
                p._resetInsertionMode();
                p._processStartTag(token);
            }
            else {
                startTagInSelect(p, token);
            }
        }
        function endTagInSelectInTable(p, token) {
            const tn = token.tagID;
            if (tn === html_js_1.TAG_ID.CAPTION ||
                tn === html_js_1.TAG_ID.TABLE ||
                tn === html_js_1.TAG_ID.TBODY ||
                tn === html_js_1.TAG_ID.TFOOT ||
                tn === html_js_1.TAG_ID.THEAD ||
                tn === html_js_1.TAG_ID.TR ||
                tn === html_js_1.TAG_ID.TD ||
                tn === html_js_1.TAG_ID.TH) {
                if (p.openElements.hasInTableScope(tn)) {
                    p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
                    p._resetInsertionMode();
                    p.onEndTag(token);
                }
            }
            else {
                endTagInSelect(p, token);
            }
        }
        // The "in template" insertion mode
        //------------------------------------------------------------------
        function startTagInTemplate(p, token) {
            switch (token.tagID) {
                // First, handle tags that can start without a mode change
                case html_js_1.TAG_ID.BASE:
                case html_js_1.TAG_ID.BASEFONT:
                case html_js_1.TAG_ID.BGSOUND:
                case html_js_1.TAG_ID.LINK:
                case html_js_1.TAG_ID.META:
                case html_js_1.TAG_ID.NOFRAMES:
                case html_js_1.TAG_ID.SCRIPT:
                case html_js_1.TAG_ID.STYLE:
                case html_js_1.TAG_ID.TEMPLATE:
                case html_js_1.TAG_ID.TITLE: {
                    startTagInHead(p, token);
                    break;
                }
                // Re-process the token in the appropriate mode
                case html_js_1.TAG_ID.CAPTION:
                case html_js_1.TAG_ID.COLGROUP:
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.TFOOT:
                case html_js_1.TAG_ID.THEAD: {
                    p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
                    p.insertionMode = InsertionMode.IN_TABLE;
                    startTagInTable(p, token);
                    break;
                }
                case html_js_1.TAG_ID.COL: {
                    p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
                    p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
                    startTagInColumnGroup(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TR: {
                    p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
                    p.insertionMode = InsertionMode.IN_TABLE_BODY;
                    startTagInTableBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.TD:
                case html_js_1.TAG_ID.TH: {
                    p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
                    p.insertionMode = InsertionMode.IN_ROW;
                    startTagInRow(p, token);
                    break;
                }
                default: {
                    p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
                    p.insertionMode = InsertionMode.IN_BODY;
                    startTagInBody(p, token);
                }
            }
        }
        function endTagInTemplate(p, token) {
            if (token.tagID === html_js_1.TAG_ID.TEMPLATE) {
                templateEndTagInHead(p, token);
            }
        }
        function eofInTemplate(p, token) {
            if (p.openElements.tmplCount > 0) {
                p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
                p.activeFormattingElements.clearToLastMarker();
                p.tmplInsertionModeStack.shift();
                p._resetInsertionMode();
                p.onEof(token);
            }
            else {
                stopParsing(p, token);
            }
        }
        // The "after body" insertion mode
        //------------------------------------------------------------------
        function startTagAfterBody(p, token) {
            if (token.tagID === html_js_1.TAG_ID.HTML) {
                startTagInBody(p, token);
            }
            else {
                tokenAfterBody(p, token);
            }
        }
        function endTagAfterBody(p, token) {
            var _a;
            if (token.tagID === html_js_1.TAG_ID.HTML) {
                if (!p.fragmentContext) {
                    p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
                }
                //NOTE: <html> is never popped from the stack, so we need to updated
                //the end location explicitly.
                if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === html_js_1.TAG_ID.HTML) {
                    p._setEndLocation(p.openElements.items[0], token);
                    // Update the body element, if it doesn't have an end tag
                    const bodyElement = p.openElements.items[1];
                    if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
                        p._setEndLocation(bodyElement, token);
                    }
                }
            }
            else {
                tokenAfterBody(p, token);
            }
        }
        function tokenAfterBody(p, token) {
            p.insertionMode = InsertionMode.IN_BODY;
            modeInBody(p, token);
        }
        // The "in frameset" insertion mode
        //------------------------------------------------------------------
        function startTagInFrameset(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.FRAMESET: {
                    p._insertElement(token, html_js_1.NS.HTML);
                    break;
                }
                case html_js_1.TAG_ID.FRAME: {
                    p._appendElement(token, html_js_1.NS.HTML);
                    token.ackSelfClosing = true;
                    break;
                }
                case html_js_1.TAG_ID.NOFRAMES: {
                    startTagInHead(p, token);
                    break;
                }
                default:
                // Do nothing
            }
        }
        function endTagInFrameset(p, token) {
            if (token.tagID === html_js_1.TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
                p.openElements.pop();
                if (!p.fragmentContext && p.openElements.currentTagId !== html_js_1.TAG_ID.FRAMESET) {
                    p.insertionMode = InsertionMode.AFTER_FRAMESET;
                }
            }
        }
        // The "after frameset" insertion mode
        //------------------------------------------------------------------
        function startTagAfterFrameset(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.NOFRAMES: {
                    startTagInHead(p, token);
                    break;
                }
                default:
                // Do nothing
            }
        }
        function endTagAfterFrameset(p, token) {
            if (token.tagID === html_js_1.TAG_ID.HTML) {
                p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
            }
        }
        // The "after after body" insertion mode
        //------------------------------------------------------------------
        function startTagAfterAfterBody(p, token) {
            if (token.tagID === html_js_1.TAG_ID.HTML) {
                startTagInBody(p, token);
            }
            else {
                tokenAfterAfterBody(p, token);
            }
        }
        function tokenAfterAfterBody(p, token) {
            p.insertionMode = InsertionMode.IN_BODY;
            modeInBody(p, token);
        }
        // The "after after frameset" insertion mode
        //------------------------------------------------------------------
        function startTagAfterAfterFrameset(p, token) {
            switch (token.tagID) {
                case html_js_1.TAG_ID.HTML: {
                    startTagInBody(p, token);
                    break;
                }
                case html_js_1.TAG_ID.NOFRAMES: {
                    startTagInHead(p, token);
                    break;
                }
                default:
                // Do nothing
            }
        }
        // The rules for parsing tokens in foreign content
        //------------------------------------------------------------------
        function nullCharacterInForeignContent(p, token) {
            token.chars = unicode.REPLACEMENT_CHARACTER;
            p._insertCharacters(token);
        }
        function characterInForeignContent(p, token) {
            p._insertCharacters(token);
            p.framesetOk = false;
        }
        function popUntilHtmlOrIntegrationPoint(p) {
            while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== html_js_1.NS.HTML &&
                !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
                p.openElements.pop();
            }
        }
        function startTagInForeignContent(p, token) {
            if (foreignContent.causesExit(token)) {
                popUntilHtmlOrIntegrationPoint(p);
                p._startTagOutsideForeignContent(token);
            }
            else {
                const current = p._getAdjustedCurrentElement();
                const currentNs = p.treeAdapter.getNamespaceURI(current);
                if (currentNs === html_js_1.NS.MATHML) {
                    foreignContent.adjustTokenMathMLAttrs(token);
                }
                else if (currentNs === html_js_1.NS.SVG) {
                    foreignContent.adjustTokenSVGTagName(token);
                    foreignContent.adjustTokenSVGAttrs(token);
                }
                foreignContent.adjustTokenXMLAttrs(token);
                if (token.selfClosing) {
                    p._appendElement(token, currentNs);
                }
                else {
                    p._insertElement(token, currentNs);
                }
                token.ackSelfClosing = true;
            }
        }
        function endTagInForeignContent(p, token) {
            if (token.tagID === html_js_1.TAG_ID.P || token.tagID === html_js_1.TAG_ID.BR) {
                popUntilHtmlOrIntegrationPoint(p);
                p._endTagOutsideForeignContent(token);
                return;
            }
            for (let i = p.openElements.stackTop; i > 0; i--) {
                const element = p.openElements.items[i];
                if (p.treeAdapter.getNamespaceURI(element) === html_js_1.NS.HTML) {
                    p._endTagOutsideForeignContent(token);
                    break;
                }
                const tagName = p.treeAdapter.getTagName(element);
                if (tagName.toLowerCase() === token.tagName) {
                    //NOTE: update the token tag name for `_setEndLocation`.
                    token.tagName = tagName;
                    p.openElements.shortenToLength(i);
                    break;
                }
            }
        }

    }, { "../common/doctype.js": 7, "../common/error-codes.js": 8, "../common/foreign-content.js": 9, "../common/html.js": 10, "../common/token.js": 11, "../common/unicode.js": 12, "../tokenizer/index.js": 18, "../tree-adapters/default.js": 20, "./formatting-element-list.js": 14, "./open-element-stack.js": 16 }], 16: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.OpenElementStack = void 0;
        const html_js_1 = require("../common/html.js");
        //Element utils
        const IMPLICIT_END_TAG_REQUIRED = new Set([html_js_1.TAG_ID.DD, html_js_1.TAG_ID.DT, html_js_1.TAG_ID.LI, html_js_1.TAG_ID.OPTGROUP, html_js_1.TAG_ID.OPTION, html_js_1.TAG_ID.P, html_js_1.TAG_ID.RB, html_js_1.TAG_ID.RP, html_js_1.TAG_ID.RT, html_js_1.TAG_ID.RTC]);
        const IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
            ...IMPLICIT_END_TAG_REQUIRED,
            html_js_1.TAG_ID.CAPTION,
            html_js_1.TAG_ID.COLGROUP,
            html_js_1.TAG_ID.TBODY,
            html_js_1.TAG_ID.TD,
            html_js_1.TAG_ID.TFOOT,
            html_js_1.TAG_ID.TH,
            html_js_1.TAG_ID.THEAD,
            html_js_1.TAG_ID.TR,
        ]);
        const SCOPING_ELEMENT_NS = new Map([
            [html_js_1.TAG_ID.APPLET, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.CAPTION, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.HTML, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.MARQUEE, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.OBJECT, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.TABLE, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.TD, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.TEMPLATE, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.TH, html_js_1.NS.HTML],
            [html_js_1.TAG_ID.ANNOTATION_XML, html_js_1.NS.MATHML],
            [html_js_1.TAG_ID.MI, html_js_1.NS.MATHML],
            [html_js_1.TAG_ID.MN, html_js_1.NS.MATHML],
            [html_js_1.TAG_ID.MO, html_js_1.NS.MATHML],
            [html_js_1.TAG_ID.MS, html_js_1.NS.MATHML],
            [html_js_1.TAG_ID.MTEXT, html_js_1.NS.MATHML],
            [html_js_1.TAG_ID.DESC, html_js_1.NS.SVG],
            [html_js_1.TAG_ID.FOREIGN_OBJECT, html_js_1.NS.SVG],
            [html_js_1.TAG_ID.TITLE, html_js_1.NS.SVG],
        ]);
        const NAMED_HEADERS = [html_js_1.TAG_ID.H1, html_js_1.TAG_ID.H2, html_js_1.TAG_ID.H3, html_js_1.TAG_ID.H4, html_js_1.TAG_ID.H5, html_js_1.TAG_ID.H6];
        const TABLE_ROW_CONTEXT = [html_js_1.TAG_ID.TR, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
        const TABLE_BODY_CONTEXT = [html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
        const TABLE_CONTEXT = [html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
        const TABLE_CELLS = [html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TH];
        //Stack of open elements
        class OpenElementStack {
            get currentTmplContentOrNode() {
                return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
            }
            constructor(document, treeAdapter, handler) {
                this.treeAdapter = treeAdapter;
                this.handler = handler;
                this.items = [];
                this.tagIDs = [];
                this.stackTop = -1;
                this.tmplCount = 0;
                this.currentTagId = html_js_1.TAG_ID.UNKNOWN;
                this.current = document;
            }
            //Index of element
            _indexOf(element) {
                return this.items.lastIndexOf(element, this.stackTop);
            }
            //Update current element
            _isInTemplate() {
                return this.currentTagId === html_js_1.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1.NS.HTML;
            }
            _updateCurrentElement() {
                this.current = this.items[this.stackTop];
                this.currentTagId = this.tagIDs[this.stackTop];
            }
            //Mutations
            push(element, tagID) {
                this.stackTop++;
                this.items[this.stackTop] = element;
                this.current = element;
                this.tagIDs[this.stackTop] = tagID;
                this.currentTagId = tagID;
                if (this._isInTemplate()) {
                    this.tmplCount++;
                }
                this.handler.onItemPush(element, tagID, true);
            }
            pop() {
                const popped = this.current;
                if (this.tmplCount > 0 && this._isInTemplate()) {
                    this.tmplCount--;
                }
                this.stackTop--;
                this._updateCurrentElement();
                this.handler.onItemPop(popped, true);
            }
            replace(oldElement, newElement) {
                const idx = this._indexOf(oldElement);
                this.items[idx] = newElement;
                if (idx === this.stackTop) {
                    this.current = newElement;
                }
            }
            insertAfter(referenceElement, newElement, newElementID) {
                const insertionIdx = this._indexOf(referenceElement) + 1;
                this.items.splice(insertionIdx, 0, newElement);
                this.tagIDs.splice(insertionIdx, 0, newElementID);
                this.stackTop++;
                if (insertionIdx === this.stackTop) {
                    this._updateCurrentElement();
                }
                this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
            }
            popUntilTagNamePopped(tagName) {
                let targetIdx = this.stackTop + 1;
                do {
                    targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
                } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1.NS.HTML);
                this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
            }
            shortenToLength(idx) {
                while (this.stackTop >= idx) {
                    const popped = this.current;
                    if (this.tmplCount > 0 && this._isInTemplate()) {
                        this.tmplCount -= 1;
                    }
                    this.stackTop--;
                    this._updateCurrentElement();
                    this.handler.onItemPop(popped, this.stackTop < idx);
                }
            }
            popUntilElementPopped(element) {
                const idx = this._indexOf(element);
                this.shortenToLength(idx < 0 ? 0 : idx);
            }
            popUntilPopped(tagNames, targetNS) {
                const idx = this._indexOfTagNames(tagNames, targetNS);
                this.shortenToLength(idx < 0 ? 0 : idx);
            }
            popUntilNumberedHeaderPopped() {
                this.popUntilPopped(NAMED_HEADERS, html_js_1.NS.HTML);
            }
            popUntilTableCellPopped() {
                this.popUntilPopped(TABLE_CELLS, html_js_1.NS.HTML);
            }
            popAllUpToHtmlElement() {
                //NOTE: here we assume that the root <html> element is always first in the open element stack, so
                //we perform this fast stack clean up.
                this.tmplCount = 0;
                this.shortenToLength(1);
            }
            _indexOfTagNames(tagNames, namespace) {
                for (let i = this.stackTop; i >= 0; i--) {
                    if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
                        return i;
                    }
                }
                return -1;
            }
            clearBackTo(tagNames, targetNS) {
                const idx = this._indexOfTagNames(tagNames, targetNS);
                this.shortenToLength(idx + 1);
            }
            clearBackToTableContext() {
                this.clearBackTo(TABLE_CONTEXT, html_js_1.NS.HTML);
            }
            clearBackToTableBodyContext() {
                this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1.NS.HTML);
            }
            clearBackToTableRowContext() {
                this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1.NS.HTML);
            }
            remove(element) {
                const idx = this._indexOf(element);
                if (idx >= 0) {
                    if (idx === this.stackTop) {
                        this.pop();
                    }
                    else {
                        this.items.splice(idx, 1);
                        this.tagIDs.splice(idx, 1);
                        this.stackTop--;
                        this._updateCurrentElement();
                        this.handler.onItemPop(element, false);
                    }
                }
            }
            //Search
            tryPeekProperlyNestedBodyElement() {
                //Properly nested <body> element (should be second element in stack).
                return this.stackTop >= 1 && this.tagIDs[1] === html_js_1.TAG_ID.BODY ? this.items[1] : null;
            }
            contains(element) {
                return this._indexOf(element) > -1;
            }
            getCommonAncestor(element) {
                const elementIdx = this._indexOf(element) - 1;
                return elementIdx >= 0 ? this.items[elementIdx] : null;
            }
            isRootHtmlElementCurrent() {
                return this.stackTop === 0 && this.tagIDs[0] === html_js_1.TAG_ID.HTML;
            }
            //Element in scope
            hasInScope(tagName) {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if (tn === tagName && ns === html_js_1.NS.HTML) {
                        return true;
                    }
                    if (SCOPING_ELEMENT_NS.get(tn) === ns) {
                        return false;
                    }
                }
                return true;
            }
            hasNumberedHeaderInScope() {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if ((0, html_js_1.isNumberedHeader)(tn) && ns === html_js_1.NS.HTML) {
                        return true;
                    }
                    if (SCOPING_ELEMENT_NS.get(tn) === ns) {
                        return false;
                    }
                }
                return true;
            }
            hasInListItemScope(tagName) {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if (tn === tagName && ns === html_js_1.NS.HTML) {
                        return true;
                    }
                    if (((tn === html_js_1.TAG_ID.UL || tn === html_js_1.TAG_ID.OL) && ns === html_js_1.NS.HTML) || SCOPING_ELEMENT_NS.get(tn) === ns) {
                        return false;
                    }
                }
                return true;
            }
            hasInButtonScope(tagName) {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if (tn === tagName && ns === html_js_1.NS.HTML) {
                        return true;
                    }
                    if ((tn === html_js_1.TAG_ID.BUTTON && ns === html_js_1.NS.HTML) || SCOPING_ELEMENT_NS.get(tn) === ns) {
                        return false;
                    }
                }
                return true;
            }
            hasInTableScope(tagName) {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if (ns !== html_js_1.NS.HTML) {
                        continue;
                    }
                    if (tn === tagName) {
                        return true;
                    }
                    if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TEMPLATE || tn === html_js_1.TAG_ID.HTML) {
                        return false;
                    }
                }
                return true;
            }
            hasTableBodyContextInTableScope() {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if (ns !== html_js_1.NS.HTML) {
                        continue;
                    }
                    if (tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TFOOT) {
                        return true;
                    }
                    if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.HTML) {
                        return false;
                    }
                }
                return true;
            }
            hasInSelectScope(tagName) {
                for (let i = this.stackTop; i >= 0; i--) {
                    const tn = this.tagIDs[i];
                    const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
                    if (ns !== html_js_1.NS.HTML) {
                        continue;
                    }
                    if (tn === tagName) {
                        return true;
                    }
                    if (tn !== html_js_1.TAG_ID.OPTION && tn !== html_js_1.TAG_ID.OPTGROUP) {
                        return false;
                    }
                }
                return true;
            }
            //Implied end tags
            generateImpliedEndTags() {
                while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
                    this.pop();
                }
            }
            generateImpliedEndTagsThoroughly() {
                while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
                    this.pop();
                }
            }
            generateImpliedEndTagsWithExclusion(exclusionId) {
                while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
                    this.pop();
                }
            }
        }
        exports.OpenElementStack = OpenElementStack;

    }, { "../common/html.js": 10 }], 17: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.serializeOuter = exports.serialize = void 0;
        const html_js_1 = require("../common/html.js");
        const escape_js_1 = require("entities/lib/escape.js");
        const default_js_1 = require("../tree-adapters/default.js");
        // Sets
        const VOID_ELEMENTS = new Set([
            html_js_1.TAG_NAMES.AREA,
            html_js_1.TAG_NAMES.BASE,
            html_js_1.TAG_NAMES.BASEFONT,
            html_js_1.TAG_NAMES.BGSOUND,
            html_js_1.TAG_NAMES.BR,
            html_js_1.TAG_NAMES.COL,
            html_js_1.TAG_NAMES.EMBED,
            html_js_1.TAG_NAMES.FRAME,
            html_js_1.TAG_NAMES.HR,
            html_js_1.TAG_NAMES.IMG,
            html_js_1.TAG_NAMES.INPUT,
            html_js_1.TAG_NAMES.KEYGEN,
            html_js_1.TAG_NAMES.LINK,
            html_js_1.TAG_NAMES.META,
            html_js_1.TAG_NAMES.PARAM,
            html_js_1.TAG_NAMES.SOURCE,
            html_js_1.TAG_NAMES.TRACK,
            html_js_1.TAG_NAMES.WBR,
        ]);
        function isVoidElement(node, options) {
            return (options.treeAdapter.isElementNode(node) &&
                options.treeAdapter.getNamespaceURI(node) === html_js_1.NS.HTML &&
                VOID_ELEMENTS.has(options.treeAdapter.getTagName(node)));
        }
        const defaultOpts = { treeAdapter: default_js_1.defaultTreeAdapter, scriptingEnabled: true };
        /**
         * Serializes an AST node to an HTML string.
         *
         * @example
         *
         * ```js
         * const parse5 = require('parse5');
         *
         * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
         *
         * // Serializes a document.
         * const html = parse5.serialize(document);
         *
         * // Serializes the <html> element content.
         * const str = parse5.serialize(document.childNodes[1]);
         *
         * console.log(str); //> '<head></head><body>Hi there!</body>'
         * ```
         *
         * @param node Node to serialize.
         * @param options Serialization options.
         */
        function serialize(node, options) {
            const opts = Object.assign(Object.assign({}, defaultOpts), options);
            if (isVoidElement(node, opts)) {
                return '';
            }
            return serializeChildNodes(node, opts);
        }
        exports.serialize = serialize;
        /**
         * Serializes an AST element node to an HTML string, including the element node.
         *
         * @example
         *
         * ```js
         * const parse5 = require('parse5');
         *
         * const document = parse5.parseFragment('<div>Hello, <b>world</b>!</div>');
         *
         * // Serializes the <div> element.
         * const html = parse5.serializeOuter(document.childNodes[0]);
         *
         * console.log(str); //> '<div>Hello, <b>world</b>!</div>'
         * ```
         *
         * @param node Node to serialize.
         * @param options Serialization options.
         */
        function serializeOuter(node, options) {
            const opts = Object.assign(Object.assign({}, defaultOpts), options);
            return serializeNode(node, opts);
        }
        exports.serializeOuter = serializeOuter;
        function serializeChildNodes(parentNode, options) {
            let html = '';
            // Get container of the child nodes
            const container = options.treeAdapter.isElementNode(parentNode) &&
                options.treeAdapter.getTagName(parentNode) === html_js_1.TAG_NAMES.TEMPLATE &&
                options.treeAdapter.getNamespaceURI(parentNode) === html_js_1.NS.HTML
                ? options.treeAdapter.getTemplateContent(parentNode)
                : parentNode;
            const childNodes = options.treeAdapter.getChildNodes(container);
            if (childNodes) {
                for (const currentNode of childNodes) {
                    html += serializeNode(currentNode, options);
                }
            }
            return html;
        }
        function serializeNode(node, options) {
            if (options.treeAdapter.isElementNode(node)) {
                return serializeElement(node, options);
            }
            if (options.treeAdapter.isTextNode(node)) {
                return serializeTextNode(node, options);
            }
            if (options.treeAdapter.isCommentNode(node)) {
                return serializeCommentNode(node, options);
            }
            if (options.treeAdapter.isDocumentTypeNode(node)) {
                return serializeDocumentTypeNode(node, options);
            }
            // Return an empty string for unknown nodes
            return '';
        }
        function serializeElement(node, options) {
            const tn = options.treeAdapter.getTagName(node);
            return `<${tn}${serializeAttributes(node, options)}>${isVoidElement(node, options) ? '' : `${serializeChildNodes(node, options)}</${tn}>`}`;
        }
        function serializeAttributes(node, { treeAdapter }) {
            let html = '';
            for (const attr of treeAdapter.getAttrList(node)) {
                html += ' ';
                if (!attr.namespace) {
                    html += attr.name;
                }
                else
                    switch (attr.namespace) {
                        case html_js_1.NS.XML: {
                            html += `xml:${attr.name}`;
                            break;
                        }
                        case html_js_1.NS.XMLNS: {
                            if (attr.name !== 'xmlns') {
                                html += 'xmlns:';
                            }
                            html += attr.name;
                            break;
                        }
                        case html_js_1.NS.XLINK: {
                            html += `xlink:${attr.name}`;
                            break;
                        }
                        default: {
                            html += `${attr.prefix}:${attr.name}`;
                        }
                    }
                html += `="${(0, escape_js_1.escapeAttribute)(attr.value)}"`;
            }
            return html;
        }
        function serializeTextNode(node, options) {
            const { treeAdapter } = options;
            const content = treeAdapter.getTextNodeContent(node);
            const parent = treeAdapter.getParentNode(node);
            const parentTn = parent && treeAdapter.isElementNode(parent) && treeAdapter.getTagName(parent);
            return parentTn &&
                treeAdapter.getNamespaceURI(parent) === html_js_1.NS.HTML &&
                (0, html_js_1.hasUnescapedText)(parentTn, options.scriptingEnabled)
                ? content
                : (0, escape_js_1.escapeText)(content);
        }
        function serializeCommentNode(node, { treeAdapter }) {
            return `<!--${treeAdapter.getCommentNodeContent(node)}-->`;
        }
        function serializeDocumentTypeNode(node, { treeAdapter }) {
            return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(node)}>`;
        }

    }, { "../common/html.js": 10, "../tree-adapters/default.js": 20, "entities/lib/escape.js": 4 }], 18: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Tokenizer = exports.TokenizerMode = void 0;
        const preprocessor_js_1 = require("./preprocessor.js");
        const unicode_js_1 = require("../common/unicode.js");
        const token_js_1 = require("../common/token.js");
        const decode_js_1 = require("entities/lib/decode.js");
        const error_codes_js_1 = require("../common/error-codes.js");
        const html_js_1 = require("../common/html.js");
        //C1 Unicode control character reference replacements
        const C1_CONTROLS_REFERENCE_REPLACEMENTS = new Map([
            [0x80, 8364],
            [0x82, 8218],
            [0x83, 402],
            [0x84, 8222],
            [0x85, 8230],
            [0x86, 8224],
            [0x87, 8225],
            [0x88, 710],
            [0x89, 8240],
            [0x8a, 352],
            [0x8b, 8249],
            [0x8c, 338],
            [0x8e, 381],
            [0x91, 8216],
            [0x92, 8217],
            [0x93, 8220],
            [0x94, 8221],
            [0x95, 8226],
            [0x96, 8211],
            [0x97, 8212],
            [0x98, 732],
            [0x99, 8482],
            [0x9a, 353],
            [0x9b, 8250],
            [0x9c, 339],
            [0x9e, 382],
            [0x9f, 376],
        ]);
        //States
        var State;
        (function (State) {
            State[State["DATA"] = 0] = "DATA";
            State[State["RCDATA"] = 1] = "RCDATA";
            State[State["RAWTEXT"] = 2] = "RAWTEXT";
            State[State["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
            State[State["PLAINTEXT"] = 4] = "PLAINTEXT";
            State[State["TAG_OPEN"] = 5] = "TAG_OPEN";
            State[State["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
            State[State["TAG_NAME"] = 7] = "TAG_NAME";
            State[State["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
            State[State["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
            State[State["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
            State[State["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
            State[State["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
            State[State["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
            State[State["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
            State[State["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
            State[State["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
            State[State["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
            State[State["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
            State[State["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
            State[State["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
            State[State["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
            State[State["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
            State[State["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
            State[State["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
            State[State["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
            State[State["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
            State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
            State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
            State[State["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
            State[State["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
            State[State["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
            State[State["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
            State[State["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
            State[State["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
            State[State["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
            State[State["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
            State[State["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
            State[State["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
            State[State["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
            State[State["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
            State[State["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
            State[State["COMMENT_START"] = 42] = "COMMENT_START";
            State[State["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
            State[State["COMMENT"] = 44] = "COMMENT";
            State[State["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
            State[State["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
            State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
            State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
            State[State["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
            State[State["COMMENT_END"] = 50] = "COMMENT_END";
            State[State["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
            State[State["DOCTYPE"] = 52] = "DOCTYPE";
            State[State["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
            State[State["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
            State[State["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
            State[State["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
            State[State["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
            State[State["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
            State[State["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
            State[State["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
            State[State["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
            State[State["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
            State[State["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
            State[State["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
            State[State["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
            State[State["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
            State[State["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
            State[State["CDATA_SECTION"] = 68] = "CDATA_SECTION";
            State[State["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
            State[State["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
            State[State["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
            State[State["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
            State[State["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
            State[State["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
            State[State["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
            State[State["HEXADEMICAL_CHARACTER_REFERENCE"] = 76] = "HEXADEMICAL_CHARACTER_REFERENCE";
            State[State["DECIMAL_CHARACTER_REFERENCE"] = 77] = "DECIMAL_CHARACTER_REFERENCE";
            State[State["NUMERIC_CHARACTER_REFERENCE_END"] = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
        })(State || (State = {}));
        //Tokenizer initial states for different modes
        exports.TokenizerMode = {
            DATA: State.DATA,
            RCDATA: State.RCDATA,
            RAWTEXT: State.RAWTEXT,
            SCRIPT_DATA: State.SCRIPT_DATA,
            PLAINTEXT: State.PLAINTEXT,
            CDATA_SECTION: State.CDATA_SECTION,
        };
        //Utils
        //OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
        //this functions if they will be situated in another module due to context switch.
        //Always perform inlining check before modifying this functions ('node --trace-inlining').
        function isAsciiDigit(cp) {
            return cp >= unicode_js_1.CODE_POINTS.DIGIT_0 && cp <= unicode_js_1.CODE_POINTS.DIGIT_9;
        }
        function isAsciiUpper(cp) {
            return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_Z;
        }
        function isAsciiLower(cp) {
            return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_Z;
        }
        function isAsciiLetter(cp) {
            return isAsciiLower(cp) || isAsciiUpper(cp);
        }
        function isAsciiAlphaNumeric(cp) {
            return isAsciiLetter(cp) || isAsciiDigit(cp);
        }
        function isAsciiUpperHexDigit(cp) {
            return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_F;
        }
        function isAsciiLowerHexDigit(cp) {
            return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_F;
        }
        function isAsciiHexDigit(cp) {
            return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
        }
        function toAsciiLower(cp) {
            return cp + 32;
        }
        function isWhitespace(cp) {
            return cp === unicode_js_1.CODE_POINTS.SPACE || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.TABULATION || cp === unicode_js_1.CODE_POINTS.FORM_FEED;
        }
        function isEntityInAttributeInvalidEnd(nextCp) {
            return nextCp === unicode_js_1.CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
        }
        function isScriptDataDoubleEscapeSequenceEnd(cp) {
            return isWhitespace(cp) || cp === unicode_js_1.CODE_POINTS.SOLIDUS || cp === unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN;
        }
        //Tokenizer
        class Tokenizer {
            constructor(options, handler) {
                this.options = options;
                this.handler = handler;
                this.paused = false;
                /** Ensures that the parsing loop isn't run multiple times at once. */
                this.inLoop = false;
                /**
                 * Indicates that the current adjusted node exists, is not an element in the HTML namespace,
                 * and that it is not an integration point for either MathML or HTML.
                 *
                 * @see {@link https://html.spec.whatwg.org/multipage/parsing.html#tree-construction}
                 */
                this.inForeignNode = false;
                this.lastStartTagName = '';
                this.active = false;
                this.state = State.DATA;
                this.returnState = State.DATA;
                this.charRefCode = -1;
                this.consumedAfterSnapshot = -1;
                this.currentCharacterToken = null;
                this.currentToken = null;
                this.currentAttr = { name: '', value: '' };
                this.preprocessor = new preprocessor_js_1.Preprocessor(handler);
                this.currentLocation = this.getCurrentLocation(-1);
            }
            //Errors
            _err(code) {
                var _a, _b;
                (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code));
            }
            // NOTE: `offset` may never run across line boundaries.
            getCurrentLocation(offset) {
                if (!this.options.sourceCodeLocationInfo) {
                    return null;
                }
                return {
                    startLine: this.preprocessor.line,
                    startCol: this.preprocessor.col - offset,
                    startOffset: this.preprocessor.offset - offset,
                    endLine: -1,
                    endCol: -1,
                    endOffset: -1,
                };
            }
            _runParsingLoop() {
                if (this.inLoop)
                    return;
                this.inLoop = true;
                while (this.active && !this.paused) {
                    this.consumedAfterSnapshot = 0;
                    const cp = this._consume();
                    if (!this._ensureHibernation()) {
                        this._callState(cp);
                    }
                }
                this.inLoop = false;
            }
            //API
            pause() {
                this.paused = true;
            }
            resume(writeCallback) {
                if (!this.paused) {
                    throw new Error('Parser was already resumed');
                }
                this.paused = false;
                // Necessary for synchronous resume.
                if (this.inLoop)
                    return;
                this._runParsingLoop();
                if (!this.paused) {
                    writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
                }
            }
            write(chunk, isLastChunk, writeCallback) {
                this.active = true;
                this.preprocessor.write(chunk, isLastChunk);
                this._runParsingLoop();
                if (!this.paused) {
                    writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
                }
            }
            insertHtmlAtCurrentPos(chunk) {
                this.active = true;
                this.preprocessor.insertHtmlAtCurrentPos(chunk);
                this._runParsingLoop();
            }
            //Hibernation
            _ensureHibernation() {
                if (this.preprocessor.endOfChunkHit) {
                    this._unconsume(this.consumedAfterSnapshot);
                    this.active = false;
                    return true;
                }
                return false;
            }
            //Consumption
            _consume() {
                this.consumedAfterSnapshot++;
                return this.preprocessor.advance();
            }
            _unconsume(count) {
                this.consumedAfterSnapshot -= count;
                this.preprocessor.retreat(count);
            }
            _reconsumeInState(state, cp) {
                this.state = state;
                this._callState(cp);
            }
            _advanceBy(count) {
                this.consumedAfterSnapshot += count;
                for (let i = 0; i < count; i++) {
                    this.preprocessor.advance();
                }
            }
            _consumeSequenceIfMatch(pattern, caseSensitive) {
                if (this.preprocessor.startsWith(pattern, caseSensitive)) {
                    // We will already have consumed one character before calling this method.
                    this._advanceBy(pattern.length - 1);
                    return true;
                }
                return false;
            }
            //Token creation
            _createStartTagToken() {
                this.currentToken = {
                    type: token_js_1.TokenType.START_TAG,
                    tagName: '',
                    tagID: html_js_1.TAG_ID.UNKNOWN,
                    selfClosing: false,
                    ackSelfClosing: false,
                    attrs: [],
                    location: this.getCurrentLocation(1),
                };
            }
            _createEndTagToken() {
                this.currentToken = {
                    type: token_js_1.TokenType.END_TAG,
                    tagName: '',
                    tagID: html_js_1.TAG_ID.UNKNOWN,
                    selfClosing: false,
                    ackSelfClosing: false,
                    attrs: [],
                    location: this.getCurrentLocation(2),
                };
            }
            _createCommentToken(offset) {
                this.currentToken = {
                    type: token_js_1.TokenType.COMMENT,
                    data: '',
                    location: this.getCurrentLocation(offset),
                };
            }
            _createDoctypeToken(initialName) {
                this.currentToken = {
                    type: token_js_1.TokenType.DOCTYPE,
                    name: initialName,
                    forceQuirks: false,
                    publicId: null,
                    systemId: null,
                    location: this.currentLocation,
                };
            }
            _createCharacterToken(type, chars) {
                this.currentCharacterToken = {
                    type,
                    chars,
                    location: this.currentLocation,
                };
            }
            //Tag attributes
            _createAttr(attrNameFirstCh) {
                this.currentAttr = {
                    name: attrNameFirstCh,
                    value: '',
                };
                this.currentLocation = this.getCurrentLocation(0);
            }
            _leaveAttrName() {
                var _a;
                var _b;
                const token = this.currentToken;
                if ((0, token_js_1.getTokenAttr)(token, this.currentAttr.name) === null) {
                    token.attrs.push(this.currentAttr);
                    if (token.location && this.currentLocation) {
                        const attrLocations = ((_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : (_b.attrs = Object.create(null)));
                        attrLocations[this.currentAttr.name] = this.currentLocation;
                        // Set end location
                        this._leaveAttrValue();
                    }
                }
                else {
                    this._err(error_codes_js_1.ERR.duplicateAttribute);
                }
            }
            _leaveAttrValue() {
                if (this.currentLocation) {
                    this.currentLocation.endLine = this.preprocessor.line;
                    this.currentLocation.endCol = this.preprocessor.col;
                    this.currentLocation.endOffset = this.preprocessor.offset;
                }
            }
            //Token emission
            prepareToken(ct) {
                this._emitCurrentCharacterToken(ct.location);
                this.currentToken = null;
                if (ct.location) {
                    ct.location.endLine = this.preprocessor.line;
                    ct.location.endCol = this.preprocessor.col + 1;
                    ct.location.endOffset = this.preprocessor.offset + 1;
                }
                this.currentLocation = this.getCurrentLocation(-1);
            }
            emitCurrentTagToken() {
                const ct = this.currentToken;
                this.prepareToken(ct);
                ct.tagID = (0, html_js_1.getTagID)(ct.tagName);
                if (ct.type === token_js_1.TokenType.START_TAG) {
                    this.lastStartTagName = ct.tagName;
                    this.handler.onStartTag(ct);
                }
                else {
                    if (ct.attrs.length > 0) {
                        this._err(error_codes_js_1.ERR.endTagWithAttributes);
                    }
                    if (ct.selfClosing) {
                        this._err(error_codes_js_1.ERR.endTagWithTrailingSolidus);
                    }
                    this.handler.onEndTag(ct);
                }
                this.preprocessor.dropParsedChunk();
            }
            emitCurrentComment(ct) {
                this.prepareToken(ct);
                this.handler.onComment(ct);
                this.preprocessor.dropParsedChunk();
            }
            emitCurrentDoctype(ct) {
                this.prepareToken(ct);
                this.handler.onDoctype(ct);
                this.preprocessor.dropParsedChunk();
            }
            _emitCurrentCharacterToken(nextLocation) {
                if (this.currentCharacterToken) {
                    //NOTE: if we have a pending character token, make it's end location equal to the
                    //current token's start location.
                    if (nextLocation && this.currentCharacterToken.location) {
                        this.currentCharacterToken.location.endLine = nextLocation.startLine;
                        this.currentCharacterToken.location.endCol = nextLocation.startCol;
                        this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
                    }
                    switch (this.currentCharacterToken.type) {
                        case token_js_1.TokenType.CHARACTER: {
                            this.handler.onCharacter(this.currentCharacterToken);
                            break;
                        }
                        case token_js_1.TokenType.NULL_CHARACTER: {
                            this.handler.onNullCharacter(this.currentCharacterToken);
                            break;
                        }
                        case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                            this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                            break;
                        }
                    }
                    this.currentCharacterToken = null;
                }
            }
            _emitEOFToken() {
                const location = this.getCurrentLocation(0);
                if (location) {
                    location.endLine = location.startLine;
                    location.endCol = location.startCol;
                    location.endOffset = location.startOffset;
                }
                this._emitCurrentCharacterToken(location);
                this.handler.onEof({ type: token_js_1.TokenType.EOF, location });
                this.active = false;
            }
            //Characters emission
            //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
            //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
            //If we have a sequence of characters that belong to the same group, the parser can process it
            //as a single solid character token.
            //So, there are 3 types of character tokens in parse5:
            //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
            //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
            //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
            _appendCharToCurrentCharacterToken(type, ch) {
                if (this.currentCharacterToken) {
                    if (this.currentCharacterToken.type !== type) {
                        this.currentLocation = this.getCurrentLocation(0);
                        this._emitCurrentCharacterToken(this.currentLocation);
                        this.preprocessor.dropParsedChunk();
                    }
                    else {
                        this.currentCharacterToken.chars += ch;
                        return;
                    }
                }
                this._createCharacterToken(type, ch);
            }
            _emitCodePoint(cp) {
                const type = isWhitespace(cp)
                    ? token_js_1.TokenType.WHITESPACE_CHARACTER
                    : cp === unicode_js_1.CODE_POINTS.NULL
                        ? token_js_1.TokenType.NULL_CHARACTER
                        : token_js_1.TokenType.CHARACTER;
                this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
            }
            //NOTE: used when we emit characters explicitly.
            //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
            _emitChars(ch) {
                this._appendCharToCurrentCharacterToken(token_js_1.TokenType.CHARACTER, ch);
            }
            // Character reference helpers
            _matchNamedCharacterReference(cp) {
                let result = null;
                let excess = 0;
                let withoutSemicolon = false;
                for (let i = 0, current = decode_js_1.htmlDecodeTree[0]; i >= 0; cp = this._consume()) {
                    i = (0, decode_js_1.determineBranch)(decode_js_1.htmlDecodeTree, current, i + 1, cp);
                    if (i < 0)
                        break;
                    excess += 1;
                    current = decode_js_1.htmlDecodeTree[i];
                    const masked = current & decode_js_1.BinTrieFlags.VALUE_LENGTH;
                    // If the branch is a value, store it and continue
                    if (masked) {
                        // The mask is the number of bytes of the value, including the current byte.
                        const valueLength = (masked >> 14) - 1;
                        // Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
                        // See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
                        if (cp !== unicode_js_1.CODE_POINTS.SEMICOLON &&
                            this._isCharacterReferenceInAttribute() &&
                            isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
                            //NOTE: we don't flush all consumed code points here, and instead switch back to the original state after
                            //emitting an ampersand. This is fine, as alphanumeric characters won't be parsed differently in attributes.
                            result = [unicode_js_1.CODE_POINTS.AMPERSAND];
                            // Skip over the value.
                            i += valueLength;
                        }
                        else {
                            // If this is a surrogate pair, consume the next two bytes.
                            result =
                                valueLength === 0
                                    ? [decode_js_1.htmlDecodeTree[i] & ~decode_js_1.BinTrieFlags.VALUE_LENGTH]
                                    : valueLength === 1
                                        ? [decode_js_1.htmlDecodeTree[++i]]
                                        : [decode_js_1.htmlDecodeTree[++i], decode_js_1.htmlDecodeTree[++i]];
                            excess = 0;
                            withoutSemicolon = cp !== unicode_js_1.CODE_POINTS.SEMICOLON;
                        }
                        if (valueLength === 0) {
                            // If the value is zero-length, we're done.
                            this._consume();
                            break;
                        }
                    }
                }
                this._unconsume(excess);
                if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
                    this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
                }
                // We want to emit the error above on the code point after the entity.
                // We always consume one code point too many in the loop, and we wait to
                // unconsume it until after the error is emitted.
                this._unconsume(1);
                return result;
            }
            _isCharacterReferenceInAttribute() {
                return (this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
                    this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
                    this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED);
            }
            _flushCodePointConsumedAsCharacterReference(cp) {
                if (this._isCharacterReferenceInAttribute()) {
                    this.currentAttr.value += String.fromCodePoint(cp);
                }
                else {
                    this._emitCodePoint(cp);
                }
            }
            // Calling states this way turns out to be much faster than any other approach.
            _callState(cp) {
                switch (this.state) {
                    case State.DATA: {
                        this._stateData(cp);
                        break;
                    }
                    case State.RCDATA: {
                        this._stateRcdata(cp);
                        break;
                    }
                    case State.RAWTEXT: {
                        this._stateRawtext(cp);
                        break;
                    }
                    case State.SCRIPT_DATA: {
                        this._stateScriptData(cp);
                        break;
                    }
                    case State.PLAINTEXT: {
                        this._statePlaintext(cp);
                        break;
                    }
                    case State.TAG_OPEN: {
                        this._stateTagOpen(cp);
                        break;
                    }
                    case State.END_TAG_OPEN: {
                        this._stateEndTagOpen(cp);
                        break;
                    }
                    case State.TAG_NAME: {
                        this._stateTagName(cp);
                        break;
                    }
                    case State.RCDATA_LESS_THAN_SIGN: {
                        this._stateRcdataLessThanSign(cp);
                        break;
                    }
                    case State.RCDATA_END_TAG_OPEN: {
                        this._stateRcdataEndTagOpen(cp);
                        break;
                    }
                    case State.RCDATA_END_TAG_NAME: {
                        this._stateRcdataEndTagName(cp);
                        break;
                    }
                    case State.RAWTEXT_LESS_THAN_SIGN: {
                        this._stateRawtextLessThanSign(cp);
                        break;
                    }
                    case State.RAWTEXT_END_TAG_OPEN: {
                        this._stateRawtextEndTagOpen(cp);
                        break;
                    }
                    case State.RAWTEXT_END_TAG_NAME: {
                        this._stateRawtextEndTagName(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_LESS_THAN_SIGN: {
                        this._stateScriptDataLessThanSign(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_END_TAG_OPEN: {
                        this._stateScriptDataEndTagOpen(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_END_TAG_NAME: {
                        this._stateScriptDataEndTagName(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPE_START: {
                        this._stateScriptDataEscapeStart(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPE_START_DASH: {
                        this._stateScriptDataEscapeStartDash(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPED: {
                        this._stateScriptDataEscaped(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPED_DASH: {
                        this._stateScriptDataEscapedDash(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
                        this._stateScriptDataEscapedDashDash(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
                        this._stateScriptDataEscapedLessThanSign(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
                        this._stateScriptDataEscapedEndTagOpen(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
                        this._stateScriptDataEscapedEndTagName(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
                        this._stateScriptDataDoubleEscapeStart(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
                        this._stateScriptDataDoubleEscaped(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
                        this._stateScriptDataDoubleEscapedDash(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
                        this._stateScriptDataDoubleEscapedDashDash(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
                        this._stateScriptDataDoubleEscapedLessThanSign(cp);
                        break;
                    }
                    case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
                        this._stateScriptDataDoubleEscapeEnd(cp);
                        break;
                    }
                    case State.BEFORE_ATTRIBUTE_NAME: {
                        this._stateBeforeAttributeName(cp);
                        break;
                    }
                    case State.ATTRIBUTE_NAME: {
                        this._stateAttributeName(cp);
                        break;
                    }
                    case State.AFTER_ATTRIBUTE_NAME: {
                        this._stateAfterAttributeName(cp);
                        break;
                    }
                    case State.BEFORE_ATTRIBUTE_VALUE: {
                        this._stateBeforeAttributeValue(cp);
                        break;
                    }
                    case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
                        this._stateAttributeValueDoubleQuoted(cp);
                        break;
                    }
                    case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
                        this._stateAttributeValueSingleQuoted(cp);
                        break;
                    }
                    case State.ATTRIBUTE_VALUE_UNQUOTED: {
                        this._stateAttributeValueUnquoted(cp);
                        break;
                    }
                    case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
                        this._stateAfterAttributeValueQuoted(cp);
                        break;
                    }
                    case State.SELF_CLOSING_START_TAG: {
                        this._stateSelfClosingStartTag(cp);
                        break;
                    }
                    case State.BOGUS_COMMENT: {
                        this._stateBogusComment(cp);
                        break;
                    }
                    case State.MARKUP_DECLARATION_OPEN: {
                        this._stateMarkupDeclarationOpen(cp);
                        break;
                    }
                    case State.COMMENT_START: {
                        this._stateCommentStart(cp);
                        break;
                    }
                    case State.COMMENT_START_DASH: {
                        this._stateCommentStartDash(cp);
                        break;
                    }
                    case State.COMMENT: {
                        this._stateComment(cp);
                        break;
                    }
                    case State.COMMENT_LESS_THAN_SIGN: {
                        this._stateCommentLessThanSign(cp);
                        break;
                    }
                    case State.COMMENT_LESS_THAN_SIGN_BANG: {
                        this._stateCommentLessThanSignBang(cp);
                        break;
                    }
                    case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
                        this._stateCommentLessThanSignBangDash(cp);
                        break;
                    }
                    case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
                        this._stateCommentLessThanSignBangDashDash(cp);
                        break;
                    }
                    case State.COMMENT_END_DASH: {
                        this._stateCommentEndDash(cp);
                        break;
                    }
                    case State.COMMENT_END: {
                        this._stateCommentEnd(cp);
                        break;
                    }
                    case State.COMMENT_END_BANG: {
                        this._stateCommentEndBang(cp);
                        break;
                    }
                    case State.DOCTYPE: {
                        this._stateDoctype(cp);
                        break;
                    }
                    case State.BEFORE_DOCTYPE_NAME: {
                        this._stateBeforeDoctypeName(cp);
                        break;
                    }
                    case State.DOCTYPE_NAME: {
                        this._stateDoctypeName(cp);
                        break;
                    }
                    case State.AFTER_DOCTYPE_NAME: {
                        this._stateAfterDoctypeName(cp);
                        break;
                    }
                    case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
                        this._stateAfterDoctypePublicKeyword(cp);
                        break;
                    }
                    case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
                        this._stateBeforeDoctypePublicIdentifier(cp);
                        break;
                    }
                    case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
                        this._stateDoctypePublicIdentifierDoubleQuoted(cp);
                        break;
                    }
                    case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
                        this._stateDoctypePublicIdentifierSingleQuoted(cp);
                        break;
                    }
                    case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
                        this._stateAfterDoctypePublicIdentifier(cp);
                        break;
                    }
                    case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
                        this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
                        break;
                    }
                    case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
                        this._stateAfterDoctypeSystemKeyword(cp);
                        break;
                    }
                    case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
                        this._stateBeforeDoctypeSystemIdentifier(cp);
                        break;
                    }
                    case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
                        this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
                        break;
                    }
                    case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
                        this._stateDoctypeSystemIdentifierSingleQuoted(cp);
                        break;
                    }
                    case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
                        this._stateAfterDoctypeSystemIdentifier(cp);
                        break;
                    }
                    case State.BOGUS_DOCTYPE: {
                        this._stateBogusDoctype(cp);
                        break;
                    }
                    case State.CDATA_SECTION: {
                        this._stateCdataSection(cp);
                        break;
                    }
                    case State.CDATA_SECTION_BRACKET: {
                        this._stateCdataSectionBracket(cp);
                        break;
                    }
                    case State.CDATA_SECTION_END: {
                        this._stateCdataSectionEnd(cp);
                        break;
                    }
                    case State.CHARACTER_REFERENCE: {
                        this._stateCharacterReference(cp);
                        break;
                    }
                    case State.NAMED_CHARACTER_REFERENCE: {
                        this._stateNamedCharacterReference(cp);
                        break;
                    }
                    case State.AMBIGUOUS_AMPERSAND: {
                        this._stateAmbiguousAmpersand(cp);
                        break;
                    }
                    case State.NUMERIC_CHARACTER_REFERENCE: {
                        this._stateNumericCharacterReference(cp);
                        break;
                    }
                    case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
                        this._stateHexademicalCharacterReferenceStart(cp);
                        break;
                    }
                    case State.HEXADEMICAL_CHARACTER_REFERENCE: {
                        this._stateHexademicalCharacterReference(cp);
                        break;
                    }
                    case State.DECIMAL_CHARACTER_REFERENCE: {
                        this._stateDecimalCharacterReference(cp);
                        break;
                    }
                    case State.NUMERIC_CHARACTER_REFERENCE_END: {
                        this._stateNumericCharacterReferenceEnd(cp);
                        break;
                    }
                    default: {
                        throw new Error('Unknown state');
                    }
                }
            }
            // State machine
            // Data state
            //------------------------------------------------------------------
            _stateData(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.TAG_OPEN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.AMPERSAND: {
                        this.returnState = State.DATA;
                        this.state = State.CHARACTER_REFERENCE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitCodePoint(cp);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            //  RCDATA state
            //------------------------------------------------------------------
            _stateRcdata(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.AMPERSAND: {
                        this.returnState = State.RCDATA;
                        this.state = State.CHARACTER_REFERENCE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.RCDATA_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // RAWTEXT state
            //------------------------------------------------------------------
            _stateRawtext(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.RAWTEXT_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data state
            //------------------------------------------------------------------
            _stateScriptData(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // PLAINTEXT state
            //------------------------------------------------------------------
            _statePlaintext(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Tag open state
            //------------------------------------------------------------------
            _stateTagOpen(cp) {
                if (isAsciiLetter(cp)) {
                    this._createStartTagToken();
                    this.state = State.TAG_NAME;
                    this._stateTagName(cp);
                }
                else
                    switch (cp) {
                        case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                            this.state = State.MARKUP_DECLARATION_OPEN;
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.SOLIDUS: {
                            this.state = State.END_TAG_OPEN;
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.QUESTION_MARK: {
                            this._err(error_codes_js_1.ERR.unexpectedQuestionMarkInsteadOfTagName);
                            this._createCommentToken(1);
                            this.state = State.BOGUS_COMMENT;
                            this._stateBogusComment(cp);
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.EOF: {
                            this._err(error_codes_js_1.ERR.eofBeforeTagName);
                            this._emitChars('<');
                            this._emitEOFToken();
                            break;
                        }
                        default: {
                            this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
                            this._emitChars('<');
                            this.state = State.DATA;
                            this._stateData(cp);
                        }
                    }
            }
            // End tag open state
            //------------------------------------------------------------------
            _stateEndTagOpen(cp) {
                if (isAsciiLetter(cp)) {
                    this._createEndTagToken();
                    this.state = State.TAG_NAME;
                    this._stateTagName(cp);
                }
                else
                    switch (cp) {
                        case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                            this._err(error_codes_js_1.ERR.missingEndTagName);
                            this.state = State.DATA;
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.EOF: {
                            this._err(error_codes_js_1.ERR.eofBeforeTagName);
                            this._emitChars('</');
                            this._emitEOFToken();
                            break;
                        }
                        default: {
                            this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
                            this._createCommentToken(2);
                            this.state = State.BOGUS_COMMENT;
                            this._stateBogusComment(cp);
                        }
                    }
            }
            // Tag name state
            //------------------------------------------------------------------
            _stateTagName(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this.state = State.BEFORE_ATTRIBUTE_NAME;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.SOLIDUS: {
                        this.state = State.SELF_CLOSING_START_TAG;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentTagToken();
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.tagName += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
                    }
                }
            }
            // RCDATA less-than sign state
            //------------------------------------------------------------------
            _stateRcdataLessThanSign(cp) {
                if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
                    this.state = State.RCDATA_END_TAG_OPEN;
                }
                else {
                    this._emitChars('<');
                    this.state = State.RCDATA;
                    this._stateRcdata(cp);
                }
            }
            // RCDATA end tag open state
            //------------------------------------------------------------------
            _stateRcdataEndTagOpen(cp) {
                if (isAsciiLetter(cp)) {
                    this.state = State.RCDATA_END_TAG_NAME;
                    this._stateRcdataEndTagName(cp);
                }
                else {
                    this._emitChars('</');
                    this.state = State.RCDATA;
                    this._stateRcdata(cp);
                }
            }
            handleSpecialEndTag(_cp) {
                if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
                    return !this._ensureHibernation();
                }
                this._createEndTagToken();
                const token = this.currentToken;
                token.tagName = this.lastStartTagName;
                const cp = this.preprocessor.peek(this.lastStartTagName.length);
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this._advanceBy(this.lastStartTagName.length);
                        this.state = State.BEFORE_ATTRIBUTE_NAME;
                        return false;
                    }
                    case unicode_js_1.CODE_POINTS.SOLIDUS: {
                        this._advanceBy(this.lastStartTagName.length);
                        this.state = State.SELF_CLOSING_START_TAG;
                        return false;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._advanceBy(this.lastStartTagName.length);
                        this.emitCurrentTagToken();
                        this.state = State.DATA;
                        return false;
                    }
                    default: {
                        return !this._ensureHibernation();
                    }
                }
            }
            // RCDATA end tag name state
            //------------------------------------------------------------------
            _stateRcdataEndTagName(cp) {
                if (this.handleSpecialEndTag(cp)) {
                    this._emitChars('</');
                    this.state = State.RCDATA;
                    this._stateRcdata(cp);
                }
            }
            // RAWTEXT less-than sign state
            //------------------------------------------------------------------
            _stateRawtextLessThanSign(cp) {
                if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
                    this.state = State.RAWTEXT_END_TAG_OPEN;
                }
                else {
                    this._emitChars('<');
                    this.state = State.RAWTEXT;
                    this._stateRawtext(cp);
                }
            }
            // RAWTEXT end tag open state
            //------------------------------------------------------------------
            _stateRawtextEndTagOpen(cp) {
                if (isAsciiLetter(cp)) {
                    this.state = State.RAWTEXT_END_TAG_NAME;
                    this._stateRawtextEndTagName(cp);
                }
                else {
                    this._emitChars('</');
                    this.state = State.RAWTEXT;
                    this._stateRawtext(cp);
                }
            }
            // RAWTEXT end tag name state
            //------------------------------------------------------------------
            _stateRawtextEndTagName(cp) {
                if (this.handleSpecialEndTag(cp)) {
                    this._emitChars('</');
                    this.state = State.RAWTEXT;
                    this._stateRawtext(cp);
                }
            }
            // Script data less-than sign state
            //------------------------------------------------------------------
            _stateScriptDataLessThanSign(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SOLIDUS: {
                        this.state = State.SCRIPT_DATA_END_TAG_OPEN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                        this.state = State.SCRIPT_DATA_ESCAPE_START;
                        this._emitChars('<!');
                        break;
                    }
                    default: {
                        this._emitChars('<');
                        this.state = State.SCRIPT_DATA;
                        this._stateScriptData(cp);
                    }
                }
            }
            // Script data end tag open state
            //------------------------------------------------------------------
            _stateScriptDataEndTagOpen(cp) {
                if (isAsciiLetter(cp)) {
                    this.state = State.SCRIPT_DATA_END_TAG_NAME;
                    this._stateScriptDataEndTagName(cp);
                }
                else {
                    this._emitChars('</');
                    this.state = State.SCRIPT_DATA;
                    this._stateScriptData(cp);
                }
            }
            // Script data end tag name state
            //------------------------------------------------------------------
            _stateScriptDataEndTagName(cp) {
                if (this.handleSpecialEndTag(cp)) {
                    this._emitChars('</');
                    this.state = State.SCRIPT_DATA;
                    this._stateScriptData(cp);
                }
            }
            // Script data escape start state
            //------------------------------------------------------------------
            _stateScriptDataEscapeStart(cp) {
                if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
                    this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
                    this._emitChars('-');
                }
                else {
                    this.state = State.SCRIPT_DATA;
                    this._stateScriptData(cp);
                }
            }
            // Script data escape start dash state
            //------------------------------------------------------------------
            _stateScriptDataEscapeStartDash(cp) {
                if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
                    this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
                    this._emitChars('-');
                }
                else {
                    this.state = State.SCRIPT_DATA;
                    this._stateScriptData(cp);
                }
            }
            // Script data escaped state
            //------------------------------------------------------------------
            _stateScriptDataEscaped(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.SCRIPT_DATA_ESCAPED_DASH;
                        this._emitChars('-');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data escaped dash state
            //------------------------------------------------------------------
            _stateScriptDataEscapedDash(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
                        this._emitChars('-');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.state = State.SCRIPT_DATA_ESCAPED;
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.state = State.SCRIPT_DATA_ESCAPED;
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data escaped dash dash state
            //------------------------------------------------------------------
            _stateScriptDataEscapedDashDash(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this._emitChars('-');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA;
                        this._emitChars('>');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.state = State.SCRIPT_DATA_ESCAPED;
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.state = State.SCRIPT_DATA_ESCAPED;
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data escaped less-than sign state
            //------------------------------------------------------------------
            _stateScriptDataEscapedLessThanSign(cp) {
                if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
                    this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
                }
                else if (isAsciiLetter(cp)) {
                    this._emitChars('<');
                    this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
                    this._stateScriptDataDoubleEscapeStart(cp);
                }
                else {
                    this._emitChars('<');
                    this.state = State.SCRIPT_DATA_ESCAPED;
                    this._stateScriptDataEscaped(cp);
                }
            }
            // Script data escaped end tag open state
            //------------------------------------------------------------------
            _stateScriptDataEscapedEndTagOpen(cp) {
                if (isAsciiLetter(cp)) {
                    this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
                    this._stateScriptDataEscapedEndTagName(cp);
                }
                else {
                    this._emitChars('</');
                    this.state = State.SCRIPT_DATA_ESCAPED;
                    this._stateScriptDataEscaped(cp);
                }
            }
            // Script data escaped end tag name state
            //------------------------------------------------------------------
            _stateScriptDataEscapedEndTagName(cp) {
                if (this.handleSpecialEndTag(cp)) {
                    this._emitChars('</');
                    this.state = State.SCRIPT_DATA_ESCAPED;
                    this._stateScriptDataEscaped(cp);
                }
            }
            // Script data double escape start state
            //------------------------------------------------------------------
            _stateScriptDataDoubleEscapeStart(cp) {
                if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) &&
                    isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
                    this._emitCodePoint(cp);
                    for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
                        this._emitCodePoint(this._consume());
                    }
                    this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                }
                else if (!this._ensureHibernation()) {
                    this.state = State.SCRIPT_DATA_ESCAPED;
                    this._stateScriptDataEscaped(cp);
                }
            }
            // Script data double escaped state
            //------------------------------------------------------------------
            _stateScriptDataDoubleEscaped(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
                        this._emitChars('-');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                        this._emitChars('<');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data double escaped dash state
            //------------------------------------------------------------------
            _stateScriptDataDoubleEscapedDash(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
                        this._emitChars('-');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                        this._emitChars('<');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data double escaped dash dash state
            //------------------------------------------------------------------
            _stateScriptDataDoubleEscapedDashDash(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this._emitChars('-');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                        this._emitChars('<');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.SCRIPT_DATA;
                        this._emitChars('>');
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                        this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                        this._emitCodePoint(cp);
                    }
                }
            }
            // Script data double escaped less-than sign state
            //------------------------------------------------------------------
            _stateScriptDataDoubleEscapedLessThanSign(cp) {
                if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
                    this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
                    this._emitChars('/');
                }
                else {
                    this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                    this._stateScriptDataDoubleEscaped(cp);
                }
            }
            // Script data double escape end state
            //------------------------------------------------------------------
            _stateScriptDataDoubleEscapeEnd(cp) {
                if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) &&
                    isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
                    this._emitCodePoint(cp);
                    for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
                        this._emitCodePoint(this._consume());
                    }
                    this.state = State.SCRIPT_DATA_ESCAPED;
                }
                else if (!this._ensureHibernation()) {
                    this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                    this._stateScriptDataDoubleEscaped(cp);
                }
            }
            // Before attribute name state
            //------------------------------------------------------------------
            _stateBeforeAttributeName(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.SOLIDUS:
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this.state = State.AFTER_ATTRIBUTE_NAME;
                        this._stateAfterAttributeName(cp);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
                        this._err(error_codes_js_1.ERR.unexpectedEqualsSignBeforeAttributeName);
                        this._createAttr('=');
                        this.state = State.ATTRIBUTE_NAME;
                        break;
                    }
                    default: {
                        this._createAttr('');
                        this.state = State.ATTRIBUTE_NAME;
                        this._stateAttributeName(cp);
                    }
                }
            }
            // Attribute name state
            //------------------------------------------------------------------
            _stateAttributeName(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED:
                    case unicode_js_1.CODE_POINTS.SOLIDUS:
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._leaveAttrName();
                        this.state = State.AFTER_ATTRIBUTE_NAME;
                        this._stateAfterAttributeName(cp);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
                        this._leaveAttrName();
                        this.state = State.BEFORE_ATTRIBUTE_VALUE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
                    case unicode_js_1.CODE_POINTS.APOSTROPHE:
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.unexpectedCharacterInAttributeName);
                        this.currentAttr.name += String.fromCodePoint(cp);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.currentAttr.name += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    default: {
                        this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
                    }
                }
            }
            // After attribute name state
            //------------------------------------------------------------------
            _stateAfterAttributeName(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.SOLIDUS: {
                        this.state = State.SELF_CLOSING_START_TAG;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
                        this.state = State.BEFORE_ATTRIBUTE_VALUE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentTagToken();
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._createAttr('');
                        this.state = State.ATTRIBUTE_NAME;
                        this._stateAttributeName(cp);
                    }
                }
            }
            // Before attribute value state
            //------------------------------------------------------------------
            _stateBeforeAttributeValue(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.missingAttributeValue);
                        this.state = State.DATA;
                        this.emitCurrentTagToken();
                        break;
                    }
                    default: {
                        this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
                        this._stateAttributeValueUnquoted(cp);
                    }
                }
            }
            // Attribute value (double-quoted) state
            //------------------------------------------------------------------
            _stateAttributeValueDoubleQuoted(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.AMPERSAND: {
                        this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                        this.state = State.CHARACTER_REFERENCE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.currentAttr.value += String.fromCodePoint(cp);
                    }
                }
            }
            // Attribute value (single-quoted) state
            //------------------------------------------------------------------
            _stateAttributeValueSingleQuoted(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.AMPERSAND: {
                        this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                        this.state = State.CHARACTER_REFERENCE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.currentAttr.value += String.fromCodePoint(cp);
                    }
                }
            }
            // Attribute value (unquoted) state
            //------------------------------------------------------------------
            _stateAttributeValueUnquoted(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this._leaveAttrValue();
                        this.state = State.BEFORE_ATTRIBUTE_NAME;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.AMPERSAND: {
                        this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
                        this.state = State.CHARACTER_REFERENCE;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._leaveAttrValue();
                        this.state = State.DATA;
                        this.emitCurrentTagToken();
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
                    case unicode_js_1.CODE_POINTS.APOSTROPHE:
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN:
                    case unicode_js_1.CODE_POINTS.EQUALS_SIGN:
                    case unicode_js_1.CODE_POINTS.GRAVE_ACCENT: {
                        this._err(error_codes_js_1.ERR.unexpectedCharacterInUnquotedAttributeValue);
                        this.currentAttr.value += String.fromCodePoint(cp);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this.currentAttr.value += String.fromCodePoint(cp);
                    }
                }
            }
            // After attribute value (quoted) state
            //------------------------------------------------------------------
            _stateAfterAttributeValueQuoted(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this._leaveAttrValue();
                        this.state = State.BEFORE_ATTRIBUTE_NAME;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.SOLIDUS: {
                        this._leaveAttrValue();
                        this.state = State.SELF_CLOSING_START_TAG;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._leaveAttrValue();
                        this.state = State.DATA;
                        this.emitCurrentTagToken();
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceBetweenAttributes);
                        this.state = State.BEFORE_ATTRIBUTE_NAME;
                        this._stateBeforeAttributeName(cp);
                    }
                }
            }
            // Self-closing start tag state
            //------------------------------------------------------------------
            _stateSelfClosingStartTag(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        const token = this.currentToken;
                        token.selfClosing = true;
                        this.state = State.DATA;
                        this.emitCurrentTagToken();
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInTag);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.unexpectedSolidusInTag);
                        this.state = State.BEFORE_ATTRIBUTE_NAME;
                        this._stateBeforeAttributeName(cp);
                    }
                }
            }
            // Bogus comment state
            //------------------------------------------------------------------
            _stateBogusComment(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentComment(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this.emitCurrentComment(token);
                        this._emitEOFToken();
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.data += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    default: {
                        token.data += String.fromCodePoint(cp);
                    }
                }
            }
            // Markup declaration open state
            //------------------------------------------------------------------
            _stateMarkupDeclarationOpen(cp) {
                if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DASH_DASH, true)) {
                    this._createCommentToken(unicode_js_1.SEQUENCES.DASH_DASH.length + 1);
                    this.state = State.COMMENT_START;
                }
                else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DOCTYPE, false)) {
                    // NOTE: Doctypes tokens are created without fixed offsets. We keep track of the moment a doctype *might* start here.
                    this.currentLocation = this.getCurrentLocation(unicode_js_1.SEQUENCES.DOCTYPE.length + 1);
                    this.state = State.DOCTYPE;
                }
                else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.CDATA_START, true)) {
                    if (this.inForeignNode) {
                        this.state = State.CDATA_SECTION;
                    }
                    else {
                        this._err(error_codes_js_1.ERR.cdataInHtmlContent);
                        this._createCommentToken(unicode_js_1.SEQUENCES.CDATA_START.length + 1);
                        this.currentToken.data = '[CDATA[';
                        this.state = State.BOGUS_COMMENT;
                    }
                }
                //NOTE: Sequence lookups can be abrupted by hibernation. In that case, lookup
                //results are no longer valid and we will need to start over.
                else if (!this._ensureHibernation()) {
                    this._err(error_codes_js_1.ERR.incorrectlyOpenedComment);
                    this._createCommentToken(2);
                    this.state = State.BOGUS_COMMENT;
                    this._stateBogusComment(cp);
                }
            }
            // Comment start state
            //------------------------------------------------------------------
            _stateCommentStart(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.COMMENT_START_DASH;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
                        this.state = State.DATA;
                        const token = this.currentToken;
                        this.emitCurrentComment(token);
                        break;
                    }
                    default: {
                        this.state = State.COMMENT;
                        this._stateComment(cp);
                    }
                }
            }
            // Comment start dash state
            //------------------------------------------------------------------
            _stateCommentStartDash(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.COMMENT_END;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
                        this.state = State.DATA;
                        this.emitCurrentComment(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInComment);
                        this.emitCurrentComment(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.data += '-';
                        this.state = State.COMMENT;
                        this._stateComment(cp);
                    }
                }
            }
            // Comment state
            //------------------------------------------------------------------
            _stateComment(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.COMMENT_END_DASH;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        token.data += '<';
                        this.state = State.COMMENT_LESS_THAN_SIGN;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.data += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInComment);
                        this.emitCurrentComment(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.data += String.fromCodePoint(cp);
                    }
                }
            }
            // Comment less-than sign state
            //------------------------------------------------------------------
            _stateCommentLessThanSign(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                        token.data += '!';
                        this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                        token.data += '<';
                        break;
                    }
                    default: {
                        this.state = State.COMMENT;
                        this._stateComment(cp);
                    }
                }
            }
            // Comment less-than sign bang state
            //------------------------------------------------------------------
            _stateCommentLessThanSignBang(cp) {
                if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
                    this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
                }
                else {
                    this.state = State.COMMENT;
                    this._stateComment(cp);
                }
            }
            // Comment less-than sign bang dash state
            //------------------------------------------------------------------
            _stateCommentLessThanSignBangDash(cp) {
                if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
                    this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
                }
                else {
                    this.state = State.COMMENT_END_DASH;
                    this._stateCommentEndDash(cp);
                }
            }
            // Comment less-than sign bang dash dash state
            //------------------------------------------------------------------
            _stateCommentLessThanSignBangDashDash(cp) {
                if (cp !== unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN && cp !== unicode_js_1.CODE_POINTS.EOF) {
                    this._err(error_codes_js_1.ERR.nestedComment);
                }
                this.state = State.COMMENT_END;
                this._stateCommentEnd(cp);
            }
            // Comment end dash state
            //------------------------------------------------------------------
            _stateCommentEndDash(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        this.state = State.COMMENT_END;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInComment);
                        this.emitCurrentComment(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.data += '-';
                        this.state = State.COMMENT;
                        this._stateComment(cp);
                    }
                }
            }
            // Comment end state
            //------------------------------------------------------------------
            _stateCommentEnd(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentComment(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                        this.state = State.COMMENT_END_BANG;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        token.data += '-';
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInComment);
                        this.emitCurrentComment(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.data += '--';
                        this.state = State.COMMENT;
                        this._stateComment(cp);
                    }
                }
            }
            // Comment end bang state
            //------------------------------------------------------------------
            _stateCommentEndBang(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                        token.data += '--!';
                        this.state = State.COMMENT_END_DASH;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.incorrectlyClosedComment);
                        this.state = State.DATA;
                        this.emitCurrentComment(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInComment);
                        this.emitCurrentComment(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.data += '--!';
                        this.state = State.COMMENT;
                        this._stateComment(cp);
                    }
                }
            }
            // DOCTYPE state
            //------------------------------------------------------------------
            _stateDoctype(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this.state = State.BEFORE_DOCTYPE_NAME;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.BEFORE_DOCTYPE_NAME;
                        this._stateBeforeDoctypeName(cp);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        this._createDoctypeToken(null);
                        const token = this.currentToken;
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceBeforeDoctypeName);
                        this.state = State.BEFORE_DOCTYPE_NAME;
                        this._stateBeforeDoctypeName(cp);
                    }
                }
            }
            // Before DOCTYPE name state
            //------------------------------------------------------------------
            _stateBeforeDoctypeName(cp) {
                if (isAsciiUpper(cp)) {
                    this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
                    this.state = State.DOCTYPE_NAME;
                }
                else
                    switch (cp) {
                        case unicode_js_1.CODE_POINTS.SPACE:
                        case unicode_js_1.CODE_POINTS.LINE_FEED:
                        case unicode_js_1.CODE_POINTS.TABULATION:
                        case unicode_js_1.CODE_POINTS.FORM_FEED: {
                            // Ignore whitespace
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.NULL: {
                            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                            this._createDoctypeToken(unicode_js_1.REPLACEMENT_CHARACTER);
                            this.state = State.DOCTYPE_NAME;
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                            this._err(error_codes_js_1.ERR.missingDoctypeName);
                            this._createDoctypeToken(null);
                            const token = this.currentToken;
                            token.forceQuirks = true;
                            this.emitCurrentDoctype(token);
                            this.state = State.DATA;
                            break;
                        }
                        case unicode_js_1.CODE_POINTS.EOF: {
                            this._err(error_codes_js_1.ERR.eofInDoctype);
                            this._createDoctypeToken(null);
                            const token = this.currentToken;
                            token.forceQuirks = true;
                            this.emitCurrentDoctype(token);
                            this._emitEOFToken();
                            break;
                        }
                        default: {
                            this._createDoctypeToken(String.fromCodePoint(cp));
                            this.state = State.DOCTYPE_NAME;
                        }
                    }
            }
            // DOCTYPE name state
            //------------------------------------------------------------------
            _stateDoctypeName(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this.state = State.AFTER_DOCTYPE_NAME;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.name += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
                    }
                }
            }
            // After DOCTYPE name state
            //------------------------------------------------------------------
            _stateAfterDoctypeName(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.PUBLIC, false)) {
                            this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
                        }
                        else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.SYSTEM, false)) {
                            this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
                        }
                        //NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
                        //results are no longer valid and we will need to start over.
                        else if (!this._ensureHibernation()) {
                            this._err(error_codes_js_1.ERR.invalidCharacterSequenceAfterDoctypeName);
                            token.forceQuirks = true;
                            this.state = State.BOGUS_DOCTYPE;
                            this._stateBogusDoctype(cp);
                        }
                    }
                }
            }
            // After DOCTYPE public keyword state
            //------------------------------------------------------------------
            _stateAfterDoctypePublicKeyword(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
                        token.publicId = '';
                        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
                        token.publicId = '';
                        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
                        token.forceQuirks = true;
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
                        token.forceQuirks = true;
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // Before DOCTYPE public identifier state
            //------------------------------------------------------------------
            _stateBeforeDoctypePublicIdentifier(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        token.publicId = '';
                        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        token.publicId = '';
                        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
                        token.forceQuirks = true;
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
                        token.forceQuirks = true;
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // DOCTYPE public identifier (double-quoted) state
            //------------------------------------------------------------------
            _stateDoctypePublicIdentifierDoubleQuoted(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.publicId += String.fromCodePoint(cp);
                    }
                }
            }
            // DOCTYPE public identifier (single-quoted) state
            //------------------------------------------------------------------
            _stateDoctypePublicIdentifierSingleQuoted(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.publicId += String.fromCodePoint(cp);
                    }
                }
            }
            // After DOCTYPE public identifier state
            //------------------------------------------------------------------
            _stateAfterDoctypePublicIdentifier(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // Between DOCTYPE public and system identifiers state
            //------------------------------------------------------------------
            _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // After DOCTYPE system keyword state
            //------------------------------------------------------------------
            _stateAfterDoctypeSystemKeyword(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // Before DOCTYPE system identifier state
            //------------------------------------------------------------------
            _stateBeforeDoctypeSystemIdentifier(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        token.systemId = '';
                        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.state = State.DATA;
                        this.emitCurrentDoctype(token);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // DOCTYPE system identifier (double-quoted) state
            //------------------------------------------------------------------
            _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                        this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.systemId += String.fromCodePoint(cp);
                    }
                }
            }
            // DOCTYPE system identifier (single-quoted) state
            //------------------------------------------------------------------
            _stateDoctypeSystemIdentifierSingleQuoted(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                        this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        token.systemId += String.fromCodePoint(cp);
                    }
                }
            }
            // After DOCTYPE system identifier state
            //------------------------------------------------------------------
            _stateAfterDoctypeSystemIdentifier(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.SPACE:
                    case unicode_js_1.CODE_POINTS.LINE_FEED:
                    case unicode_js_1.CODE_POINTS.TABULATION:
                    case unicode_js_1.CODE_POINTS.FORM_FEED: {
                        // Ignore whitespace
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInDoctype);
                        token.forceQuirks = true;
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._err(error_codes_js_1.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
                        this.state = State.BOGUS_DOCTYPE;
                        this._stateBogusDoctype(cp);
                    }
                }
            }
            // Bogus DOCTYPE state
            //------------------------------------------------------------------
            _stateBogusDoctype(cp) {
                const token = this.currentToken;
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.emitCurrentDoctype(token);
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.NULL: {
                        this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this.emitCurrentDoctype(token);
                        this._emitEOFToken();
                        break;
                    }
                    default:
                    // Do nothing
                }
            }
            // CDATA section state
            //------------------------------------------------------------------
            _stateCdataSection(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
                        this.state = State.CDATA_SECTION_BRACKET;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.EOF: {
                        this._err(error_codes_js_1.ERR.eofInCdata);
                        this._emitEOFToken();
                        break;
                    }
                    default: {
                        this._emitCodePoint(cp);
                    }
                }
            }
            // CDATA section bracket state
            //------------------------------------------------------------------
            _stateCdataSectionBracket(cp) {
                if (cp === unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET) {
                    this.state = State.CDATA_SECTION_END;
                }
                else {
                    this._emitChars(']');
                    this.state = State.CDATA_SECTION;
                    this._stateCdataSection(cp);
                }
            }
            // CDATA section end state
            //------------------------------------------------------------------
            _stateCdataSectionEnd(cp) {
                switch (cp) {
                    case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                        this.state = State.DATA;
                        break;
                    }
                    case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
                        this._emitChars(']');
                        break;
                    }
                    default: {
                        this._emitChars(']]');
                        this.state = State.CDATA_SECTION;
                        this._stateCdataSection(cp);
                    }
                }
            }
            // Character reference state
            //------------------------------------------------------------------
            _stateCharacterReference(cp) {
                if (cp === unicode_js_1.CODE_POINTS.NUMBER_SIGN) {
                    this.state = State.NUMERIC_CHARACTER_REFERENCE;
                }
                else if (isAsciiAlphaNumeric(cp)) {
                    this.state = State.NAMED_CHARACTER_REFERENCE;
                    this._stateNamedCharacterReference(cp);
                }
                else {
                    this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
                    this._reconsumeInState(this.returnState, cp);
                }
            }
            // Named character reference state
            //------------------------------------------------------------------
            _stateNamedCharacterReference(cp) {
                const matchResult = this._matchNamedCharacterReference(cp);
                //NOTE: Matching can be abrupted by hibernation. In that case, match
                //results are no longer valid and we will need to start over.
                if (this._ensureHibernation()) {
                    // Stay in the state, try again.
                }
                else if (matchResult) {
                    for (let i = 0; i < matchResult.length; i++) {
                        this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
                    }
                    this.state = this.returnState;
                }
                else {
                    this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
                    this.state = State.AMBIGUOUS_AMPERSAND;
                }
            }
            // Ambiguos ampersand state
            //------------------------------------------------------------------
            _stateAmbiguousAmpersand(cp) {
                if (isAsciiAlphaNumeric(cp)) {
                    this._flushCodePointConsumedAsCharacterReference(cp);
                }
                else {
                    if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
                        this._err(error_codes_js_1.ERR.unknownNamedCharacterReference);
                    }
                    this._reconsumeInState(this.returnState, cp);
                }
            }
            // Numeric character reference state
            //------------------------------------------------------------------
            _stateNumericCharacterReference(cp) {
                this.charRefCode = 0;
                if (cp === unicode_js_1.CODE_POINTS.LATIN_SMALL_X || cp === unicode_js_1.CODE_POINTS.LATIN_CAPITAL_X) {
                    this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
                }
                // Inlined decimal character reference start state
                else if (isAsciiDigit(cp)) {
                    this.state = State.DECIMAL_CHARACTER_REFERENCE;
                    this._stateDecimalCharacterReference(cp);
                }
                else {
                    this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
                    this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
                    this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
                    this._reconsumeInState(this.returnState, cp);
                }
            }
            // Hexademical character reference start state
            //------------------------------------------------------------------
            _stateHexademicalCharacterReferenceStart(cp) {
                if (isAsciiHexDigit(cp)) {
                    this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
                    this._stateHexademicalCharacterReference(cp);
                }
                else {
                    this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
                    this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
                    this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
                    this._unconsume(2);
                    this.state = this.returnState;
                }
            }
            // Hexademical character reference state
            //------------------------------------------------------------------
            _stateHexademicalCharacterReference(cp) {
                if (isAsciiUpperHexDigit(cp)) {
                    this.charRefCode = this.charRefCode * 16 + cp - 0x37;
                }
                else if (isAsciiLowerHexDigit(cp)) {
                    this.charRefCode = this.charRefCode * 16 + cp - 0x57;
                }
                else if (isAsciiDigit(cp)) {
                    this.charRefCode = this.charRefCode * 16 + cp - 0x30;
                }
                else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
                    this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
                }
                else {
                    this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
                    this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
                    this._stateNumericCharacterReferenceEnd(cp);
                }
            }
            // Decimal character reference state
            //------------------------------------------------------------------
            _stateDecimalCharacterReference(cp) {
                if (isAsciiDigit(cp)) {
                    this.charRefCode = this.charRefCode * 10 + cp - 0x30;
                }
                else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
                    this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
                }
                else {
                    this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
                    this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
                    this._stateNumericCharacterReferenceEnd(cp);
                }
            }
            // Numeric character reference end state
            //------------------------------------------------------------------
            _stateNumericCharacterReferenceEnd(cp) {
                if (this.charRefCode === unicode_js_1.CODE_POINTS.NULL) {
                    this._err(error_codes_js_1.ERR.nullCharacterReference);
                    this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
                }
                else if (this.charRefCode > 1114111) {
                    this._err(error_codes_js_1.ERR.characterReferenceOutsideUnicodeRange);
                    this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
                }
                else if ((0, unicode_js_1.isSurrogate)(this.charRefCode)) {
                    this._err(error_codes_js_1.ERR.surrogateCharacterReference);
                    this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
                }
                else if ((0, unicode_js_1.isUndefinedCodePoint)(this.charRefCode)) {
                    this._err(error_codes_js_1.ERR.noncharacterCharacterReference);
                }
                else if ((0, unicode_js_1.isControlCodePoint)(this.charRefCode) || this.charRefCode === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
                    this._err(error_codes_js_1.ERR.controlCharacterReference);
                    const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
                    if (replacement !== undefined) {
                        this.charRefCode = replacement;
                    }
                }
                this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
                this._reconsumeInState(this.returnState, cp);
            }
        }
        exports.Tokenizer = Tokenizer;

    }, { "../common/error-codes.js": 8, "../common/html.js": 10, "../common/token.js": 11, "../common/unicode.js": 12, "./preprocessor.js": 19, "entities/lib/decode.js": 2 }], 19: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Preprocessor = void 0;
        const unicode_js_1 = require("../common/unicode.js");
        const error_codes_js_1 = require("../common/error-codes.js");
        //Const
        const DEFAULT_BUFFER_WATERLINE = 1 << 16;
        //Preprocessor
        //NOTE: HTML input preprocessing
        //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
        class Preprocessor {
            constructor(handler) {
                this.handler = handler;
                this.html = '';
                this.pos = -1;
                // NOTE: Initial `lastGapPos` is -2, to ensure `col` on initialisation is 0
                this.lastGapPos = -2;
                this.gapStack = [];
                this.skipNextNewLine = false;
                this.lastChunkWritten = false;
                this.endOfChunkHit = false;
                this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
                this.isEol = false;
                this.lineStartPos = 0;
                this.droppedBufferSize = 0;
                this.line = 1;
                //NOTE: avoid reporting errors twice on advance/retreat
                this.lastErrOffset = -1;
            }
            /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
            get col() {
                return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
            }
            get offset() {
                return this.droppedBufferSize + this.pos;
            }
            getError(code) {
                const { line, col, offset } = this;
                return {
                    code,
                    startLine: line,
                    endLine: line,
                    startCol: col,
                    endCol: col,
                    startOffset: offset,
                    endOffset: offset,
                };
            }
            _err(code) {
                if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
                    this.lastErrOffset = this.offset;
                    this.handler.onParseError(this.getError(code));
                }
            }
            _addGap() {
                this.gapStack.push(this.lastGapPos);
                this.lastGapPos = this.pos;
            }
            _processSurrogate(cp) {
                //NOTE: try to peek a surrogate pair
                if (this.pos !== this.html.length - 1) {
                    const nextCp = this.html.charCodeAt(this.pos + 1);
                    if ((0, unicode_js_1.isSurrogatePair)(nextCp)) {
                        //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
                        this.pos++;
                        //NOTE: add a gap that should be avoided during retreat
                        this._addGap();
                        return (0, unicode_js_1.getSurrogatePairCodePoint)(cp, nextCp);
                    }
                }
                //NOTE: we are at the end of a chunk, therefore we can't infer the surrogate pair yet.
                else if (!this.lastChunkWritten) {
                    this.endOfChunkHit = true;
                    return unicode_js_1.CODE_POINTS.EOF;
                }
                //NOTE: isolated surrogate
                this._err(error_codes_js_1.ERR.surrogateInInputStream);
                return cp;
            }
            willDropParsedChunk() {
                return this.pos > this.bufferWaterline;
            }
            dropParsedChunk() {
                if (this.willDropParsedChunk()) {
                    this.html = this.html.substring(this.pos);
                    this.lineStartPos -= this.pos;
                    this.droppedBufferSize += this.pos;
                    this.pos = 0;
                    this.lastGapPos = -2;
                    this.gapStack.length = 0;
                }
            }
            write(chunk, isLastChunk) {
                if (this.html.length > 0) {
                    this.html += chunk;
                }
                else {
                    this.html = chunk;
                }
                this.endOfChunkHit = false;
                this.lastChunkWritten = isLastChunk;
            }
            insertHtmlAtCurrentPos(chunk) {
                this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
                this.endOfChunkHit = false;
            }
            startsWith(pattern, caseSensitive) {
                // Check if our buffer has enough characters
                if (this.pos + pattern.length > this.html.length) {
                    this.endOfChunkHit = !this.lastChunkWritten;
                    return false;
                }
                if (caseSensitive) {
                    return this.html.startsWith(pattern, this.pos);
                }
                for (let i = 0; i < pattern.length; i++) {
                    const cp = this.html.charCodeAt(this.pos + i) | 0x20;
                    if (cp !== pattern.charCodeAt(i)) {
                        return false;
                    }
                }
                return true;
            }
            peek(offset) {
                const pos = this.pos + offset;
                if (pos >= this.html.length) {
                    this.endOfChunkHit = !this.lastChunkWritten;
                    return unicode_js_1.CODE_POINTS.EOF;
                }
                const code = this.html.charCodeAt(pos);
                return code === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ? unicode_js_1.CODE_POINTS.LINE_FEED : code;
            }
            advance() {
                this.pos++;
                //NOTE: LF should be in the last column of the line
                if (this.isEol) {
                    this.isEol = false;
                    this.line++;
                    this.lineStartPos = this.pos;
                }
                if (this.pos >= this.html.length) {
                    this.endOfChunkHit = !this.lastChunkWritten;
                    return unicode_js_1.CODE_POINTS.EOF;
                }
                let cp = this.html.charCodeAt(this.pos);
                //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
                if (cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
                    this.isEol = true;
                    this.skipNextNewLine = true;
                    return unicode_js_1.CODE_POINTS.LINE_FEED;
                }
                //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
                //must be ignored.
                if (cp === unicode_js_1.CODE_POINTS.LINE_FEED) {
                    this.isEol = true;
                    if (this.skipNextNewLine) {
                        // `line` will be bumped again in the recursive call.
                        this.line--;
                        this.skipNextNewLine = false;
                        this._addGap();
                        return this.advance();
                    }
                }
                this.skipNextNewLine = false;
                if ((0, unicode_js_1.isSurrogate)(cp)) {
                    cp = this._processSurrogate(cp);
                }
                //OPTIMIZATION: first check if code point is in the common allowed
                //range (ASCII alphanumeric, whitespaces, big chunk of BMP)
                //before going into detailed performance cost validation.
                const isCommonValidRange = this.handler.onParseError === null ||
                    (cp > 0x1f && cp < 0x7f) ||
                    cp === unicode_js_1.CODE_POINTS.LINE_FEED ||
                    cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ||
                    (cp > 0x9f && cp < 64976);
                if (!isCommonValidRange) {
                    this._checkForProblematicCharacters(cp);
                }
                return cp;
            }
            _checkForProblematicCharacters(cp) {
                if ((0, unicode_js_1.isControlCodePoint)(cp)) {
                    this._err(error_codes_js_1.ERR.controlCharacterInInputStream);
                }
                else if ((0, unicode_js_1.isUndefinedCodePoint)(cp)) {
                    this._err(error_codes_js_1.ERR.noncharacterInInputStream);
                }
            }
            retreat(count) {
                this.pos -= count;
                while (this.pos < this.lastGapPos) {
                    this.lastGapPos = this.gapStack.pop();
                    this.pos--;
                }
                this.isEol = false;
            }
        }
        exports.Preprocessor = Preprocessor;

    }, { "../common/error-codes.js": 8, "../common/unicode.js": 12 }], 20: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultTreeAdapter = void 0;
        const html_js_1 = require("../common/html.js");
        function createTextNode(value) {
            return {
                nodeName: '#text',
                value,
                parentNode: null,
            };
        }
        exports.defaultTreeAdapter = {
            //Node construction
            createDocument() {
                return {
                    nodeName: '#document',
                    mode: html_js_1.DOCUMENT_MODE.NO_QUIRKS,
                    childNodes: [],
                };
            },
            createDocumentFragment() {
                return {
                    nodeName: '#document-fragment',
                    childNodes: [],
                };
            },
            createElement(tagName, namespaceURI, attrs) {
                return {
                    nodeName: tagName,
                    tagName,
                    attrs,
                    namespaceURI,
                    childNodes: [],
                    parentNode: null,
                };
            },
            createCommentNode(data) {
                return {
                    nodeName: '#comment',
                    data,
                    parentNode: null,
                };
            },
            //Tree mutation
            appendChild(parentNode, newNode) {
                parentNode.childNodes.push(newNode);
                newNode.parentNode = parentNode;
            },
            insertBefore(parentNode, newNode, referenceNode) {
                const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
                parentNode.childNodes.splice(insertionIdx, 0, newNode);
                newNode.parentNode = parentNode;
            },
            setTemplateContent(templateElement, contentElement) {
                templateElement.content = contentElement;
            },
            getTemplateContent(templateElement) {
                return templateElement.content;
            },
            setDocumentType(document, name, publicId, systemId) {
                const doctypeNode = document.childNodes.find((node) => node.nodeName === '#documentType');
                if (doctypeNode) {
                    doctypeNode.name = name;
                    doctypeNode.publicId = publicId;
                    doctypeNode.systemId = systemId;
                }
                else {
                    const node = {
                        nodeName: '#documentType',
                        name,
                        publicId,
                        systemId,
                        parentNode: null,
                    };
                    exports.defaultTreeAdapter.appendChild(document, node);
                }
            },
            setDocumentMode(document, mode) {
                document.mode = mode;
            },
            getDocumentMode(document) {
                return document.mode;
            },
            detachNode(node) {
                if (node.parentNode) {
                    const idx = node.parentNode.childNodes.indexOf(node);
                    node.parentNode.childNodes.splice(idx, 1);
                    node.parentNode = null;
                }
            },
            insertText(parentNode, text) {
                if (parentNode.childNodes.length > 0) {
                    const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
                    if (exports.defaultTreeAdapter.isTextNode(prevNode)) {
                        prevNode.value += text;
                        return;
                    }
                }
                exports.defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
            },
            insertTextBefore(parentNode, text, referenceNode) {
                const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
                if (prevNode && exports.defaultTreeAdapter.isTextNode(prevNode)) {
                    prevNode.value += text;
                }
                else {
                    exports.defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
                }
            },
            adoptAttributes(recipient, attrs) {
                const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
                for (let j = 0; j < attrs.length; j++) {
                    if (!recipientAttrsMap.has(attrs[j].name)) {
                        recipient.attrs.push(attrs[j]);
                    }
                }
            },
            //Tree traversing
            getFirstChild(node) {
                return node.childNodes[0];
            },
            getChildNodes(node) {
                return node.childNodes;
            },
            getParentNode(node) {
                return node.parentNode;
            },
            getAttrList(element) {
                return element.attrs;
            },
            //Node data
            getTagName(element) {
                return element.tagName;
            },
            getNamespaceURI(element) {
                return element.namespaceURI;
            },
            getTextNodeContent(textNode) {
                return textNode.value;
            },
            getCommentNodeContent(commentNode) {
                return commentNode.data;
            },
            getDocumentTypeNodeName(doctypeNode) {
                return doctypeNode.name;
            },
            getDocumentTypeNodePublicId(doctypeNode) {
                return doctypeNode.publicId;
            },
            getDocumentTypeNodeSystemId(doctypeNode) {
                return doctypeNode.systemId;
            },
            //Node types
            isTextNode(node) {
                return node.nodeName === '#text';
            },
            isCommentNode(node) {
                return node.nodeName === '#comment';
            },
            isDocumentTypeNode(node) {
                return node.nodeName === '#documentType';
            },
            isElementNode(node) {
                return Object.prototype.hasOwnProperty.call(node, 'tagName');
            },
            // Source code location
            setNodeSourceCodeLocation(node, location) {
                node.sourceCodeLocation = location;
            },
            getNodeSourceCodeLocation(node) {
                return node.sourceCodeLocation;
            },
            updateNodeSourceCodeLocation(node, endLocation) {
                node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
            },
        };

    }, { "../common/html.js": 10 }]
}, {}, [1]);

(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        rsvm.selectorParser = require('css-selector-parser').createParser();
    }, { "css-selector-parser": 3 }], 2: [function (require, module, exports) {
        "use strict";
        var __assign = (this && this.__assign) || function () {
            __assign = Object.assign || function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ast = void 0;
        function astMethods(type) {
            return function (generatorName, checkerName) {
                var _a;
                return (_a = {},
                    _a[generatorName] = function (props) { return (__assign({ type: type }, props)); },
                    _a[checkerName] = function (entity) {
                        return typeof entity === 'object' && entity !== null && entity.type === type;
                    },
                    _a);
            };
        }
        /**
         * AST structure generators and matchers.
         * For instance, `ast.selector({rules: [...]})` creates AstSelector and `ast.isSelector(...)` checks if
         * AstSelector was specified.
         *
         * @example
         *
         * // Represents CSS selector: ns|div#user-34.user.user-active[role="button"]:lang(en)::before > *
         * const selector = ast.selector({
         *     rules: [
         *         ast.rule({
         *             items: [
         *                 ast.tagName({name: 'div', namespace: ast.namespaceName({name: 'ns'})}),
         *                 ast.id({name: 'user-34'}),
         *                 ast.className({name: 'user'}),
         *                 ast.className({name: 'user-active'}),
         *                 ast.attribute({
         *                     name: 'role',
         *                     operator: '=',
         *                     value: ast.string({value: 'button'})
         *                 }),
         *                 ast.pseudoClass({
         *                     name: 'lang',
         *                     argument: ast.string({value: 'en'})
         *                 }),
         *                 ast.pseudoElement({name: 'before'})
         *             ],
         *             nestedRule: ast.rule({combinator: '>', items: [ast.wildcardTag()]})
         *         })
         *     ]
         * });
         * console.log(ast.isSelector(selector)); // prints true
         * console.log(ast.isRule(selector)); // prints false
         */
        exports.ast = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, astMethods('Selector')('selector', 'isSelector')), astMethods('Rule')('rule', 'isRule')), astMethods('TagName')('tagName', 'isTagName')), astMethods('Id')('id', 'isId')), astMethods('ClassName')('className', 'isClassName')), astMethods('WildcardTag')('wildcardTag', 'isWildcardTag')), astMethods('NamespaceName')('namespaceName', 'isNamespaceName')), astMethods('WildcardNamespace')('wildcardNamespace', 'isWildcardNamespace')), astMethods('NoNamespace')('noNamespace', 'isNoNamespace')), astMethods('Attribute')('attribute', 'isAttribute')), astMethods('PseudoClass')('pseudoClass', 'isPseudoClass')), astMethods('PseudoElement')('pseudoElement', 'isPseudoElement')), astMethods('String')('string', 'isString')), astMethods('Formula')('formula', 'isFormula')), astMethods('FormulaOfSelector')('formulaOfSelector', 'isFormulaOfSelector')), astMethods('Substitution')('substitution', 'isSubstitution'));

    }, {}], 3: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ast = exports.render = exports.createParser = void 0;
        var parser_js_1 = require("./parser.js");
        Object.defineProperty(exports, "createParser", { enumerable: true, get: function () { return parser_js_1.createParser; } });
        var render_js_1 = require("./render.js");
        Object.defineProperty(exports, "render", { enumerable: true, get: function () { return render_js_1.render; } });
        var ast_js_1 = require("./ast.js");
        Object.defineProperty(exports, "ast", { enumerable: true, get: function () { return ast_js_1.ast; } });

    }, { "./ast.js": 2, "./parser.js": 5, "./render.js": 7 }], 4: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.createRegularIndex = exports.createMulticharIndex = exports.emptyRegularIndex = exports.emptyMulticharIndex = void 0;
        exports.emptyMulticharIndex = {};
        exports.emptyRegularIndex = {};
        function extendIndex(item, index) {
            var currentIndex = index;
            for (var pos = 0; pos < item.length; pos++) {
                var isLast = pos === item.length - 1;
                var char = item.charAt(pos);
                var charIndex = currentIndex[char] || (currentIndex[char] = { chars: {} });
                if (isLast) {
                    charIndex.self = item;
                }
                currentIndex = charIndex.chars;
            }
        }
        function createMulticharIndex(items) {
            if (items.length === 0) {
                return exports.emptyMulticharIndex;
            }
            var index = {};
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                extendIndex(item, index);
            }
            return index;
        }
        exports.createMulticharIndex = createMulticharIndex;
        function createRegularIndex(items) {
            if (items.length === 0) {
                return exports.emptyRegularIndex;
            }
            var result = {};
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var item = items_2[_i];
                result[item] = true;
            }
            return result;
        }
        exports.createRegularIndex = createRegularIndex;

    }, {}], 5: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.createParser = void 0;
        var indexes_js_1 = require("./indexes.js");
        var pseudo_signatures_js_1 = require("./pseudo-signatures.js");
        var syntax_definitions_js_1 = require("./syntax-definitions.js");
        var utils_js_1 = require("./utils.js");
        var errorPrefix = "css-selector-parser parse error: ";
        /**
         * Creates a parse function to be used later to parse CSS selectors.
         */
        function createParser(options) {
            if (options === void 0) { options = {}; }
            var _a = options.syntax, syntax = _a === void 0 ? 'latest' : _a, substitutes = options.substitutes, _b = options.strict, strict = _b === void 0 ? true : _b;
            var syntaxDefinition = typeof syntax === 'object' ? syntax : syntax_definitions_js_1.cssSyntaxDefinitions[syntax];
            if (syntaxDefinition.baseSyntax) {
                syntaxDefinition = (0, syntax_definitions_js_1.extendSyntaxDefinition)(syntax_definitions_js_1.cssSyntaxDefinitions[syntaxDefinition.baseSyntax], syntaxDefinition);
            }
            var _c = syntaxDefinition.tag
                ? [true, Boolean((0, syntax_definitions_js_1.getXmlOptions)(syntaxDefinition.tag).wildcard)]
                : [false, false], tagNameEnabled = _c[0], tagNameWildcardEnabled = _c[1];
            var idEnabled = Boolean(syntaxDefinition.ids);
            var classNamesEnabled = Boolean(syntaxDefinition.classNames);
            var namespaceEnabled = Boolean(syntaxDefinition.namespace);
            var namespaceWildcardEnabled = syntaxDefinition.namespace &&
                (syntaxDefinition.namespace === true || syntaxDefinition.namespace.wildcard === true);
            if (namespaceEnabled && !tagNameEnabled) {
                throw new Error("".concat(errorPrefix, "Namespaces cannot be enabled while tags are disabled."));
            }
            var substitutesEnabled = Boolean(substitutes);
            var combinatorsIndex = syntaxDefinition.combinators
                ? (0, indexes_js_1.createMulticharIndex)(syntaxDefinition.combinators)
                : indexes_js_1.emptyMulticharIndex;
            var _d = syntaxDefinition.attributes
                ? [
                    true,
                    syntaxDefinition.attributes.operators
                        ? (0, indexes_js_1.createMulticharIndex)(syntaxDefinition.attributes.operators)
                        : indexes_js_1.emptyMulticharIndex,
                    syntaxDefinition.attributes.caseSensitivityModifiers
                        ? (0, indexes_js_1.createRegularIndex)(syntaxDefinition.attributes.caseSensitivityModifiers)
                        : indexes_js_1.emptyRegularIndex,
                    syntaxDefinition.attributes.unknownCaseSensitivityModifiers === 'accept'
                ]
                : [false, indexes_js_1.emptyMulticharIndex, indexes_js_1.emptyRegularIndex, false], attributesEnabled = _d[0], attributesOperatorsIndex = _d[1], attributesCaseSensitivityModifiers = _d[2], attributesAcceptUnknownCaseSensitivityModifiers = _d[3];
            var attributesCaseSensitivityModifiersEnabled = attributesAcceptUnknownCaseSensitivityModifiers || Object.keys(attributesCaseSensitivityModifiers).length > 0;
            var _e = syntaxDefinition.pseudoClasses
                ? [
                    true,
                    syntaxDefinition.pseudoClasses.definitions
                        ? (0, pseudo_signatures_js_1.calculatePseudoSignatures)(syntaxDefinition.pseudoClasses.definitions)
                        : pseudo_signatures_js_1.emptyPseudoSignatures,
                    syntaxDefinition.pseudoClasses.unknown === 'accept'
                ]
                : [false, pseudo_signatures_js_1.emptyPseudoSignatures, false], pseudoClassesEnabled = _e[0], pseudoClassesDefinitions = _e[1], pseudoClassesAcceptUnknown = _e[2];
            var _f = syntaxDefinition.pseudoElements
                ? [
                    true,
                    syntaxDefinition.pseudoElements.notation === 'singleColon' ||
                    syntaxDefinition.pseudoElements.notation === 'both',
                    !syntaxDefinition.pseudoElements.notation ||
                    syntaxDefinition.pseudoElements.notation === 'doubleColon' ||
                    syntaxDefinition.pseudoElements.notation === 'both',
                    syntaxDefinition.pseudoElements.definitions
                        ? (0, pseudo_signatures_js_1.calculatePseudoSignatures)(Array.isArray(syntaxDefinition.pseudoElements.definitions)
                            ? { NoArgument: syntaxDefinition.pseudoElements.definitions }
                            : syntaxDefinition.pseudoElements.definitions)
                        : pseudo_signatures_js_1.emptyPseudoSignatures,
                    syntaxDefinition.pseudoElements.unknown === 'accept'
                ]
                : [false, false, false, pseudo_signatures_js_1.emptyPseudoSignatures, false], pseudoElementsEnabled = _f[0], pseudoElementsSingleColonNotationEnabled = _f[1], pseudoElementsDoubleColonNotationEnabled = _f[2], pseudoElementsDefinitions = _f[3], pseudoElementsAcceptUnknown = _f[4];
            var str = '';
            var l = str.length;
            var pos = 0;
            var chr = '';
            var is = function (comparison) { return chr === comparison; };
            var isTagStart = function () { return is('*') || (0, utils_js_1.isIdentStart)(chr); };
            var rewind = function (newPos) {
                pos = newPos;
                chr = str.charAt(pos);
            };
            var next = function () {
                pos++;
                chr = str.charAt(pos);
            };
            var readAndNext = function () {
                var current = chr;
                pos++;
                chr = str.charAt(pos);
                return current;
            };
            /** @throws ParserError */
            function fail(errorMessage) {
                var position = Math.min(l - 1, pos);
                var error = new Error("".concat(errorPrefix).concat(errorMessage, " Pos: ").concat(position, "."));
                error.position = position;
                error.name = 'ParserError';
                throw error;
            }
            function assert(condition, errorMessage) {
                if (!condition) {
                    return fail(errorMessage);
                }
            }
            var assertNonEof = function () {
                assert(pos < l, 'Unexpected end of input.');
            };
            var isEof = function () { return pos >= l; };
            var pass = function (character) {
                assert(pos < l, "Expected \"".concat(character, "\" but end of input reached."));
                assert(chr === character, "Expected \"".concat(character, "\" but \"").concat(chr, "\" found."));
                pos++;
                chr = str.charAt(pos);
            };
            function matchMulticharIndex(index) {
                var match = matchMulticharIndexPos(index, pos);
                if (match) {
                    pos += match.length;
                    chr = str.charAt(pos);
                    return match;
                }
            }
            function matchMulticharIndexPos(index, subPos) {
                var char = str.charAt(subPos);
                var charIndex = index[char];
                if (charIndex) {
                    var subMatch = matchMulticharIndexPos(charIndex.chars, subPos + 1);
                    if (subMatch) {
                        return subMatch;
                    }
                    if (charIndex.self) {
                        return charIndex.self;
                    }
                }
            }
            /**
             * @see https://www.w3.org/TR/css-syntax/#hex-digit-diagram
             */
            function parseHex() {
                var hex = readAndNext();
                var count = 1;
                while ((0, utils_js_1.isHex)(chr) && count < utils_js_1.maxHexLength) {
                    hex += readAndNext();
                    count++;
                }
                skipSingleWhitespace();
                return String.fromCharCode(parseInt(hex, 16));
            }
            /**
             * @see https://www.w3.org/TR/css-syntax/#string-token-diagram
             */
            function parseString(quote) {
                var result = '';
                pass(quote);
                while (pos < l) {
                    if (is(quote)) {
                        next();
                        return result;
                    }
                    else if (is('\\')) {
                        next();
                        if (is(quote)) {
                            result += quote;
                            next();
                        }
                        else if (chr === '\n' || chr === '\f') {
                            next();
                        }
                        else if (chr === '\r') {
                            next();
                            if (is('\n')) {
                                next();
                            }
                        }
                        else if ((0, utils_js_1.isHex)(chr)) {
                            result += parseHex();
                        }
                        else {
                            result += chr;
                            next();
                        }
                    }
                    else {
                        result += chr;
                        next();
                    }
                }
                return result;
            }
            /**
             * @see https://www.w3.org/TR/css-syntax/#ident-token-diagram
             */
            function parseIdentifier() {
                if (!(0, utils_js_1.isIdentStart)(chr)) {
                    return null;
                }
                var result = '';
                while (is('-')) {
                    result += chr;
                    next();
                }
                if (strict && result.length >= 2) {
                    // Checking this only for strict mode since browsers work fine with these identifiers.
                    fail('Identifiers cannot start with two hyphens with strict mode on.');
                }
                if (utils_js_1.digitsChars[chr]) {
                    fail('Identifiers cannot start with hyphens followed by digits.');
                }
                while (pos < l) {
                    if ((0, utils_js_1.isIdent)(chr)) {
                        result += readAndNext();
                    }
                    else if (is('\\')) {
                        next();
                        assertNonEof();
                        if ((0, utils_js_1.isHex)(chr)) {
                            result += parseHex();
                        }
                        else {
                            result += readAndNext();
                        }
                    }
                    else {
                        break;
                    }
                }
                return result;
            }
            function parsePseudoClassString() {
                var result = '';
                while (pos < l) {
                    if (is(')')) {
                        break;
                    }
                    else if (is('\\')) {
                        next();
                        if (isEof() && !strict) {
                            return (result + '\\').trim();
                        }
                        assertNonEof();
                        if ((0, utils_js_1.isHex)(chr)) {
                            result += parseHex();
                        }
                        else {
                            result += readAndNext();
                        }
                    }
                    else {
                        result += readAndNext();
                    }
                }
                return result.trim();
            }
            function skipSingleWhitespace() {
                if (chr === ' ' || chr === '\t' || chr === '\f' || chr === '\n') {
                    next();
                    return;
                }
                if (chr === '\r') {
                    next();
                }
                if (chr === '\n') {
                    next();
                }
            }
            function skipWhitespace() {
                while (utils_js_1.whitespaceChars[chr]) {
                    next();
                }
            }
            function parseSelector(relative) {
                if (relative === void 0) { relative = false; }
                skipWhitespace();
                var rules = [parseRule(relative)];
                while (is(',')) {
                    next();
                    skipWhitespace();
                    rules.push(parseRule(relative));
                }
                return {
                    type: 'Selector',
                    rules: rules
                };
            }
            function parseAttribute() {
                pass('[');
                skipWhitespace();
                var attr;
                if (is('|')) {
                    assert(namespaceEnabled, 'Namespaces are not enabled.');
                    next();
                    var name_1 = parseIdentifier();
                    assert(name_1, 'Expected attribute name.');
                    attr = {
                        type: 'Attribute',
                        name: name_1,
                        namespace: { type: 'NoNamespace' }
                    };
                }
                else if (is('*')) {
                    assert(namespaceEnabled, 'Namespaces are not enabled.');
                    assert(namespaceWildcardEnabled, 'Wildcard namespace is not enabled.');
                    next();
                    pass('|');
                    var name_2 = parseIdentifier();
                    assert(name_2, 'Expected attribute name.');
                    attr = {
                        type: 'Attribute',
                        name: name_2,
                        namespace: { type: 'WildcardNamespace' }
                    };
                }
                else {
                    var identifier = parseIdentifier();
                    assert(identifier, 'Expected attribute name.');
                    attr = {
                        type: 'Attribute',
                        name: identifier
                    };
                    if (is('|')) {
                        var savedPos = pos;
                        next();
                        if ((0, utils_js_1.isIdentStart)(chr)) {
                            assert(namespaceEnabled, 'Namespaces are not enabled.');
                            var name_3 = parseIdentifier();
                            assert(name_3, 'Expected attribute name.');
                            attr = {
                                type: 'Attribute',
                                name: name_3,
                                namespace: { type: 'NamespaceName', name: identifier }
                            };
                        }
                        else {
                            rewind(savedPos);
                        }
                    }
                }
                assert(attr.name, 'Expected attribute name.');
                skipWhitespace();
                if (isEof() && !strict) {
                    return attr;
                }
                if (is(']')) {
                    next();
                }
                else {
                    attr.operator = matchMulticharIndex(attributesOperatorsIndex);
                    assert(attr.operator, 'Expected a valid attribute selector operator.');
                    skipWhitespace();
                    assertNonEof();
                    if (utils_js_1.quoteChars[chr]) {
                        attr.value = {
                            type: 'String',
                            value: parseString(chr)
                        };
                    }
                    else if (substitutesEnabled && is('$')) {
                        next();
                        var name_4 = parseIdentifier();
                        assert(name_4, 'Expected substitute name.');
                        attr.value = {
                            type: 'Substitution',
                            name: name_4
                        };
                    }
                    else {
                        var value = parseIdentifier();
                        assert(value, 'Expected attribute value.');
                        attr.value = {
                            type: 'String',
                            value: value
                        };
                    }
                    skipWhitespace();
                    if (isEof() && !strict) {
                        return attr;
                    }
                    if (!is(']')) {
                        var caseSensitivityModifier = parseIdentifier();
                        assert(caseSensitivityModifier, 'Expected end of attribute selector.');
                        attr.caseSensitivityModifier = caseSensitivityModifier;
                        assert(attributesCaseSensitivityModifiersEnabled, 'Attribute case sensitivity modifiers are not enabled.');
                        assert(attributesAcceptUnknownCaseSensitivityModifiers ||
                            attributesCaseSensitivityModifiers[attr.caseSensitivityModifier], 'Unknown attribute case sensitivity modifier.');
                        skipWhitespace();
                        if (isEof() && !strict) {
                            return attr;
                        }
                    }
                    pass(']');
                }
                return attr;
            }
            function parseNumber() {
                var result = '';
                while (utils_js_1.digitsChars[chr]) {
                    result += readAndNext();
                }
                assert(result !== '', 'Formula parse error.');
                return parseInt(result);
            }
            var isNumberStart = function () { return is('-') || is('+') || utils_js_1.digitsChars[chr]; };
            function parseFormula() {
                if (is('e') || is('o')) {
                    var ident = parseIdentifier();
                    if (ident === 'even') {
                        skipWhitespace();
                        return [2, 0];
                    }
                    if (ident === 'odd') {
                        skipWhitespace();
                        return [2, 1];
                    }
                }
                var firstNumber = null;
                var firstNumberMultiplier = 1;
                if (is('-')) {
                    next();
                    firstNumberMultiplier = -1;
                }
                if (isNumberStart()) {
                    if (is('+')) {
                        next();
                    }
                    firstNumber = parseNumber();
                    if (!is('\\') && !is('n')) {
                        return [0, firstNumber * firstNumberMultiplier];
                    }
                }
                if (firstNumber === null) {
                    firstNumber = 1;
                }
                firstNumber *= firstNumberMultiplier;
                var identifier;
                if (is('\\')) {
                    next();
                    if ((0, utils_js_1.isHex)(chr)) {
                        identifier = parseHex();
                    }
                    else {
                        identifier = readAndNext();
                    }
                }
                else {
                    identifier = readAndNext();
                }
                assert(identifier === 'n', 'Formula parse error: expected "n".');
                skipWhitespace();
                if (is('+') || is('-')) {
                    var sign = is('+') ? 1 : -1;
                    next();
                    skipWhitespace();
                    return [firstNumber, sign * parseNumber()];
                }
                else {
                    return [firstNumber, 0];
                }
            }
            function parsePseudoArgument(pseudoName, type, signature) {
                var argument;
                if (is('(')) {
                    next();
                    skipWhitespace();
                    if (substitutesEnabled && is('$')) {
                        next();
                        var name_5 = parseIdentifier();
                        assert(name_5, 'Expected substitute name.');
                        argument = {
                            type: 'Substitution',
                            name: name_5
                        };
                    }
                    else if (signature.type === 'String') {
                        argument = {
                            type: 'String',
                            value: parsePseudoClassString()
                        };
                        assert(argument.value, "Expected ".concat(type, " argument value."));
                    }
                    else if (signature.type === 'Selector') {
                        argument = parseSelector(true);
                    }
                    else if (signature.type === 'Formula') {
                        var _a = parseFormula(), a = _a[0], b = _a[1];
                        argument = {
                            type: 'Formula',
                            a: a,
                            b: b
                        };
                        if (signature.ofSelector) {
                            skipWhitespace();
                            if (is('o') || is('\\')) {
                                var ident = parseIdentifier();
                                assert(ident === 'of', 'Formula of selector parse error.');
                                skipWhitespace();
                                argument = {
                                    type: 'FormulaOfSelector',
                                    a: a,
                                    b: b,
                                    selector: parseRule()
                                };
                            }
                        }
                    }
                    else {
                        return fail("Invalid ".concat(type, " signature."));
                    }
                    skipWhitespace();
                    if (isEof() && !strict) {
                        return argument;
                    }
                    pass(')');
                }
                else {
                    assert(signature.optional, "Argument is required for ".concat(type, " \"").concat(pseudoName, "\"."));
                }
                return argument;
            }
            function parseTagName() {
                if (is('*')) {
                    assert(tagNameWildcardEnabled, 'Wildcard tag name is not enabled.');
                    next();
                    return { type: 'WildcardTag' };
                }
                else if ((0, utils_js_1.isIdentStart)(chr)) {
                    assert(tagNameEnabled, 'Tag names are not enabled.');
                    var name_6 = parseIdentifier();
                    assert(name_6, 'Expected tag name.');
                    return {
                        type: 'TagName',
                        name: name_6
                    };
                }
                else {
                    return fail('Expected tag name.');
                }
            }
            function parseTagNameWithNamespace() {
                if (is('*')) {
                    var savedPos = pos;
                    next();
                    if (!is('|')) {
                        rewind(savedPos);
                        return parseTagName();
                    }
                    next();
                    if (!isTagStart()) {
                        rewind(savedPos);
                        return parseTagName();
                    }
                    assert(namespaceEnabled, 'Namespaces are not enabled.');
                    assert(namespaceWildcardEnabled, 'Wildcard namespace is not enabled.');
                    var tagName = parseTagName();
                    tagName.namespace = { type: 'WildcardNamespace' };
                    return tagName;
                }
                else if (is('|')) {
                    assert(namespaceEnabled, 'Namespaces are not enabled.');
                    next();
                    var tagName = parseTagName();
                    tagName.namespace = { type: 'NoNamespace' };
                    return tagName;
                }
                else if ((0, utils_js_1.isIdentStart)(chr)) {
                    var identifier = parseIdentifier();
                    assert(identifier, 'Expected tag name.');
                    if (!is('|')) {
                        assert(tagNameEnabled, 'Tag names are not enabled.');
                        return {
                            type: 'TagName',
                            name: identifier
                        };
                    }
                    var savedPos = pos;
                    next();
                    if (!isTagStart()) {
                        rewind(savedPos);
                        return {
                            type: 'TagName',
                            name: identifier
                        };
                    }
                    assert(namespaceEnabled, 'Namespaces are not enabled.');
                    var tagName = parseTagName();
                    tagName.namespace = { type: 'NamespaceName', name: identifier };
                    return tagName;
                }
                else {
                    return fail('Expected tag name.');
                }
            }
            function parseRule(relative) {
                var _a, _b;
                if (relative === void 0) { relative = false; }
                var rule = { type: 'Rule', items: [] };
                if (relative) {
                    var combinator = matchMulticharIndex(combinatorsIndex);
                    if (combinator) {
                        rule.combinator = combinator;
                        skipWhitespace();
                    }
                }
                while (pos < l) {
                    if (isTagStart()) {
                        assert(rule.items.length === 0, 'Unexpected tag/namespace start.');
                        rule.items.push(parseTagNameWithNamespace());
                    }
                    else if (is('|')) {
                        var savedPos = pos;
                        next();
                        if (isTagStart()) {
                            assert(rule.items.length === 0, 'Unexpected tag/namespace start.');
                            rewind(savedPos);
                            rule.items.push(parseTagNameWithNamespace());
                        }
                        else {
                            rewind(savedPos);
                            break;
                        }
                    }
                    else if (is('.')) {
                        assert(classNamesEnabled, 'Class names are not enabled.');
                        next();
                        var className = parseIdentifier();
                        assert(className, 'Expected class name.');
                        rule.items.push({ type: 'ClassName', name: className });
                    }
                    else if (is('#')) {
                        assert(idEnabled, 'IDs are not enabled.');
                        next();
                        var idName = parseIdentifier();
                        assert(idName, 'Expected ID name.');
                        rule.items.push({ type: 'Id', name: idName });
                    }
                    else if (is('[')) {
                        assert(attributesEnabled, 'Attributes are not enabled.');
                        rule.items.push(parseAttribute());
                    }
                    else if (is(':')) {
                        var isDoubleColon = false;
                        var isPseudoElement = false;
                        next();
                        if (is(':')) {
                            assert(pseudoElementsEnabled, 'Pseudo elements are not enabled.');
                            assert(pseudoElementsDoubleColonNotationEnabled, 'Pseudo elements double colon notation is not enabled.');
                            isDoubleColon = true;
                            next();
                        }
                        var pseudoName = parseIdentifier();
                        assert(isDoubleColon || pseudoName, 'Expected pseudo-class name.');
                        assert(!isDoubleColon || pseudoName, 'Expected pseudo-element name.');
                        assert(pseudoName, 'Expected pseudo-class name.');
                        assert(!isDoubleColon ||
                            pseudoElementsAcceptUnknown ||
                            Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName), "Unknown pseudo-element \"".concat(pseudoName, "\"."));
                        isPseudoElement =
                            pseudoElementsEnabled &&
                            (isDoubleColon ||
                                (!isDoubleColon &&
                                    pseudoElementsSingleColonNotationEnabled &&
                                    Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName)));
                        if (isPseudoElement) {
                            var signature = (_a = pseudoElementsDefinitions[pseudoName]) !== null && _a !== void 0 ? _a : (pseudoElementsAcceptUnknown && pseudo_signatures_js_1.defaultPseudoSignature);
                            var pseudoElement = {
                                type: 'PseudoElement',
                                name: pseudoName
                            };
                            var argument = parsePseudoArgument(pseudoName, 'pseudo-element', signature);
                            if (argument) {
                                assert(argument.type !== 'Formula' && argument.type !== 'FormulaOfSelector', 'Pseudo-elements cannot have formula argument.');
                                pseudoElement.argument = argument;
                            }
                            rule.items.push(pseudoElement);
                        }
                        else {
                            assert(pseudoClassesEnabled, 'Pseudo-classes are not enabled.');
                            var signature = (_b = pseudoClassesDefinitions[pseudoName]) !== null && _b !== void 0 ? _b : (pseudoClassesAcceptUnknown && pseudo_signatures_js_1.defaultPseudoSignature);
                            assert(signature, "Unknown pseudo-class: \"".concat(pseudoName, "\"."));
                            var argument = parsePseudoArgument(pseudoName, 'pseudo-class', signature);
                            var pseudoClass = {
                                type: 'PseudoClass',
                                name: pseudoName
                            };
                            if (argument) {
                                pseudoClass.argument = argument;
                            }
                            rule.items.push(pseudoClass);
                        }
                    }
                    else {
                        break;
                    }
                }
                if (rule.items.length === 0) {
                    if (isEof()) {
                        return fail('Expected rule but end of input reached.');
                    }
                    else {
                        return fail("Expected rule but \"".concat(chr, "\" found."));
                    }
                }
                skipWhitespace();
                if (!isEof() && !is(',') && !is(')')) {
                    var combinator = matchMulticharIndex(combinatorsIndex);
                    skipWhitespace();
                    rule.nestedRule = parseRule();
                    rule.nestedRule.combinator = combinator;
                }
                return rule;
            }
            return function (input) {
                // noinspection SuspiciousTypeOfGuard
                if (typeof input !== 'string') {
                    throw new Error("".concat(errorPrefix, "Expected string input."));
                }
                str = input;
                l = str.length;
                pos = 0;
                chr = str.charAt(0);
                return parseSelector();
            };
        }
        exports.createParser = createParser;

    }, { "./indexes.js": 4, "./pseudo-signatures.js": 6, "./syntax-definitions.js": 8, "./utils.js": 9 }], 6: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.calculatePseudoSignatures = exports.inverseCategories = exports.defaultPseudoSignature = exports.emptyPseudoSignatures = void 0;
        exports.emptyPseudoSignatures = {};
        exports.defaultPseudoSignature = {
            type: 'String',
            optional: true
        };
        function calculatePseudoSignature(types) {
            var result = {
                type: 'NoArgument',
                optional: false
            };
            function setResultType(type) {
                if (result.type && result.type !== type && result.type !== 'NoArgument') {
                    throw new Error("Conflicting pseudo-class argument type: \"".concat(result.type, "\" vs \"").concat(type, "\"."));
                }
                result.type = type;
            }
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                if (type === 'NoArgument') {
                    result.optional = true;
                }
                if (type === 'Formula') {
                    setResultType('Formula');
                }
                if (type === 'FormulaOfSelector') {
                    setResultType('Formula');
                    result.ofSelector = true;
                }
                if (type === 'String') {
                    setResultType('String');
                }
                if (type === 'Selector') {
                    setResultType('Selector');
                }
            }
            return result;
        }
        function inverseCategories(obj) {
            var result = {};
            for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                var category = _a[_i];
                var items = obj[category];
                if (items) {
                    for (var _b = 0, _c = items; _b < _c.length; _b++) {
                        var item = _c[_b];
                        (result[item] || (result[item] = [])).push(category);
                    }
                }
            }
            return result;
        }
        exports.inverseCategories = inverseCategories;
        function calculatePseudoSignatures(definitions) {
            var pseudoClassesToArgumentTypes = inverseCategories(definitions);
            var result = {};
            for (var _i = 0, _a = Object.keys(pseudoClassesToArgumentTypes); _i < _a.length; _i++) {
                var pseudoClass = _a[_i];
                var argumentTypes = pseudoClassesToArgumentTypes[pseudoClass];
                if (argumentTypes) {
                    result[pseudoClass] = calculatePseudoSignature(argumentTypes);
                }
            }
            return result;
        }
        exports.calculatePseudoSignatures = calculatePseudoSignatures;

    }, {}], 7: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.render = void 0;
        var utils_js_1 = require("./utils.js");
        var errorPrefix = "css-selector-parser render error: ";
        function renderNamespace(namespace) {
            if (namespace.type === 'WildcardNamespace') {
                return '*|';
            }
            else if (namespace.type === 'NamespaceName') {
                return "".concat((0, utils_js_1.escapeIdentifier)(namespace.name), "|");
            }
            else if (namespace.type === 'NoNamespace') {
                return '|';
            }
            throw new Error("".concat(errorPrefix, "Unknown namespace type: ").concat(namespace.type, "."));
        }
        function renderSubstitution(sub) {
            return "$".concat((0, utils_js_1.escapeIdentifier)(sub.name));
        }
        function renderFormula(a, b) {
            if (a) {
                var result = "".concat(a === 1 ? '' : a === -1 ? '-' : a, "n");
                if (b) {
                    result += "".concat(b > 0 ? '+' : '').concat(b);
                }
                return result;
            }
            else {
                return String(b);
            }
        }
        /**
         * Renders CSS Selector AST back to a string.
         *
         * @example
         *
         * import {ast, render} from 'css-selector-parser';
         *
         * const selector = ast.selector({
         *     rules: [
         *         ast.rule({
         *             items: [
         *                 ast.tagName({name: 'a'}),
         *                 ast.id({name: 'user-23'}),
         *                 ast.className({name: 'user'}),
         *                 ast.pseudoClass({name: 'visited'}),
         *                 ast.pseudoElement({name: 'before'})
         *             ]
         *         })
         *     ]
         * });
         *
         * console.log(render(selector)); // a#user-23.user:visited::before
         */
        function render(entity) {
            if (entity.type === 'Selector') {
                return entity.rules.map(render).join(', ');
            }
            if (entity.type === 'Rule') {
                var result = '';
                var items = entity.items, combinator = entity.combinator, nestedRule = entity.nestedRule;
                if (combinator) {
                    result += "".concat(combinator, " ");
                }
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    result += render(item);
                }
                if (nestedRule) {
                    result += " ".concat(render(nestedRule));
                }
                return result;
            }
            else if (entity.type === 'TagName' || entity.type === 'WildcardTag') {
                var result = '';
                var namespace = entity.namespace;
                if (namespace) {
                    result += renderNamespace(namespace);
                }
                if (entity.type === 'TagName') {
                    result += (0, utils_js_1.escapeIdentifier)(entity.name);
                }
                else if (entity.type === 'WildcardTag') {
                    result += '*';
                }
                return result;
            }
            else if (entity.type === 'Id') {
                return "#".concat((0, utils_js_1.escapeIdentifier)(entity.name));
            }
            else if (entity.type === 'ClassName') {
                return ".".concat((0, utils_js_1.escapeIdentifier)(entity.name));
            }
            else if (entity.type === 'Attribute') {
                var name_1 = entity.name, namespace = entity.namespace, operator = entity.operator, value = entity.value, caseSensitivityModifier = entity.caseSensitivityModifier;
                var result = '[';
                if (namespace) {
                    result += renderNamespace(namespace);
                }
                result += (0, utils_js_1.escapeIdentifier)(name_1);
                if (operator && value) {
                    result += operator;
                    if (value.type === 'String') {
                        result += (0, utils_js_1.escapeString)(value.value);
                    }
                    else if (value.type === 'Substitution') {
                        result += renderSubstitution(value);
                    }
                    else {
                        throw new Error("Unknown attribute value type: ".concat(value.type, "."));
                    }
                    if (caseSensitivityModifier) {
                        result += " ".concat((0, utils_js_1.escapeIdentifier)(caseSensitivityModifier));
                    }
                }
                result += ']';
                return result;
            }
            else if (entity.type === 'PseudoClass') {
                var name_2 = entity.name, argument = entity.argument;
                var result = ":".concat((0, utils_js_1.escapeIdentifier)(name_2));
                if (argument) {
                    result += "(".concat(argument.type === 'String' ? (0, utils_js_1.escapeIdentifier)(argument.value) : render(argument), ")");
                }
                return result;
            }
            else if (entity.type === 'PseudoElement') {
                var name_3 = entity.name, argument = entity.argument;
                var result = "::".concat((0, utils_js_1.escapeIdentifier)(name_3));
                if (argument) {
                    result += "(".concat(argument.type === 'String' ? (0, utils_js_1.escapeIdentifier)(argument.value) : render(argument), ")");
                }
                return result;
            }
            else if (entity.type === 'String') {
                throw new Error("".concat(errorPrefix, "String cannot be rendered outside of context."));
            }
            else if (entity.type === 'Formula') {
                return renderFormula(entity.a, entity.b);
            }
            else if (entity.type === 'FormulaOfSelector') {
                return renderFormula(entity.a, entity.b) + ' of ' + render(entity.selector);
            }
            else if (entity.type === 'Substitution') {
                return "$".concat((0, utils_js_1.escapeIdentifier)(entity.name));
            }
            throw new Error("Unknown type specified to render method: ".concat(entity.type, "."));
        }
        exports.render = render;

    }, { "./utils.js": 9 }], 8: [function (require, module, exports) {
        "use strict";
        var __assign = (this && this.__assign) || function () {
            __assign = Object.assign || function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.cssSyntaxDefinitions = exports.extendSyntaxDefinition = exports.getXmlOptions = void 0;
        var emptyXmlOptions = {};
        var defaultXmlOptions = { wildcard: true };
        function getXmlOptions(param) {
            if (param) {
                if (typeof param === 'boolean') {
                    return defaultXmlOptions;
                }
                else {
                    return param;
                }
            }
            else {
                return emptyXmlOptions;
            }
        }
        exports.getXmlOptions = getXmlOptions;
        function withMigration(migration, merge) {
            return function (base, extension) { return merge(migration(base), migration(extension)); };
        }
        function withNoNegative(merge) {
            return function (base, extension) {
                var result = merge(base, extension);
                if (!result) {
                    throw new Error("Syntax definition cannot be null or undefined.");
                }
                return result;
            };
        }
        function withPositive(positive, merge) {
            return function (base, extension) {
                if (extension === true) {
                    return positive;
                }
                return merge(base === true ? positive : base, extension);
            };
        }
        function mergeSection(values) {
            return function (base, extension) {
                if (!extension || !base) {
                    return extension;
                }
                if (typeof extension !== 'object' || extension === null) {
                    throw new Error("Unexpected syntax definition extension type: ".concat(extension, "."));
                }
                var result = __assign({}, base);
                for (var _i = 0, _a = Object.entries(extension); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    var mergeSchema = values[key];
                    result[key] = mergeSchema(base[key], value);
                }
                return result;
            };
        }
        function replaceValueIfSpecified(base, extension) {
            if (extension !== undefined) {
                return extension;
            }
            return base;
        }
        function concatArray(base, extension) {
            if (!extension) {
                return base;
            }
            if (!base) {
                return extension;
            }
            return base.concat(extension);
        }
        function mergeDefinitions(base, extension) {
            if (!extension) {
                return base;
            }
            if (!base) {
                return extension;
            }
            var result = __assign({}, base);
            for (var _i = 0, _a = Object.entries(extension); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (!value) {
                    delete result[key];
                    continue;
                }
                var baseValue = base[key];
                if (!baseValue) {
                    result[key] = value;
                    continue;
                }
                result[key] = baseValue.concat(value);
            }
            return result;
        }
        exports.extendSyntaxDefinition = withNoNegative(mergeSection({
            baseSyntax: replaceValueIfSpecified,
            tag: withPositive(defaultXmlOptions, mergeSection({
                wildcard: replaceValueIfSpecified
            })),
            ids: replaceValueIfSpecified,
            classNames: replaceValueIfSpecified,
            namespace: withPositive(defaultXmlOptions, mergeSection({
                wildcard: replaceValueIfSpecified
            })),
            combinators: concatArray,
            attributes: mergeSection({
                operators: concatArray,
                caseSensitivityModifiers: concatArray,
                unknownCaseSensitivityModifiers: replaceValueIfSpecified
            }),
            pseudoClasses: mergeSection({
                unknown: replaceValueIfSpecified,
                definitions: mergeDefinitions
            }),
            pseudoElements: mergeSection({
                unknown: replaceValueIfSpecified,
                notation: replaceValueIfSpecified,
                definitions: withMigration(function (definitions) { return (Array.isArray(definitions) ? { NoArgument: definitions } : definitions); }, mergeDefinitions)
            })
        }));
        var css1SyntaxDefinition = {
            tag: {},
            ids: true,
            classNames: true,
            combinators: [],
            pseudoElements: {
                unknown: 'reject',
                notation: 'singleColon',
                definitions: ['first-letter', 'first-line']
            },
            pseudoClasses: {
                unknown: 'reject',
                definitions: {
                    NoArgument: ['link', 'visited', 'active']
                }
            }
        };
        var css2SyntaxDefinition = (0, exports.extendSyntaxDefinition)(css1SyntaxDefinition, {
            tag: { wildcard: true },
            combinators: ['>', '+'],
            attributes: {
                unknownCaseSensitivityModifiers: 'reject',
                operators: ['=', '~=', '|=']
            },
            pseudoElements: {
                definitions: ['before', 'after']
            },
            pseudoClasses: {
                unknown: 'reject',
                definitions: {
                    NoArgument: ['hover', 'focus', 'first-child'],
                    String: ['lang']
                }
            }
        });
        var selectors3SyntaxDefinition = (0, exports.extendSyntaxDefinition)(css2SyntaxDefinition, {
            namespace: {
                wildcard: true
            },
            combinators: ['~'],
            attributes: {
                operators: ['^=', '$=', '*=']
            },
            pseudoElements: {
                notation: 'both'
            },
            pseudoClasses: {
                definitions: {
                    NoArgument: [
                        'root',
                        'last-child',
                        'first-of-type',
                        'last-of-type',
                        'only-child',
                        'only-of-type',
                        'empty',
                        'target',
                        'enabled',
                        'disabled',
                        'checked',
                        'indeterminate'
                    ],
                    Formula: ['nth-child', 'nth-last-child', 'nth-of-type', 'nth-last-of-type'],
                    Selector: ['not']
                }
            }
        });
        var selectors4SyntaxDefinition = (0, exports.extendSyntaxDefinition)(selectors3SyntaxDefinition, {
            combinators: ['||'],
            attributes: {
                caseSensitivityModifiers: ['i', 'I', 's', 'S']
            },
            pseudoClasses: {
                definitions: {
                    NoArgument: [
                        'any-link',
                        'local-link',
                        'target-within',
                        'scope',
                        'current',
                        'past',
                        'future',
                        'focus-within',
                        'focus-visible',
                        'read-write',
                        'read-only',
                        'placeholder-shown',
                        'default',
                        'valid',
                        'invalid',
                        'in-range',
                        'out-of-range',
                        'required',
                        'optional',
                        'blank',
                        'user-invalid'
                    ],
                    Formula: ['nth-col', 'nth-last-col'],
                    String: ['dir'],
                    FormulaOfSelector: ['nth-child', 'nth-last-child'],
                    Selector: ['current', 'is', 'where', 'has']
                }
            }
        });
        var progressiveSyntaxDefinition = (0, exports.extendSyntaxDefinition)(selectors4SyntaxDefinition, {
            pseudoElements: {
                unknown: 'accept'
            },
            pseudoClasses: {
                unknown: 'accept'
            },
            attributes: {
                unknownCaseSensitivityModifiers: 'accept'
            }
        });
        exports.cssSyntaxDefinitions = {
            css1: css1SyntaxDefinition,
            css2: css2SyntaxDefinition,
            css3: selectors3SyntaxDefinition,
            'selectors-3': selectors3SyntaxDefinition,
            'selectors-4': selectors4SyntaxDefinition,
            latest: selectors4SyntaxDefinition,
            progressive: progressiveSyntaxDefinition
        };

    }, {}], 9: [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeString = exports.escapeIdentifier = exports.maxHexLength = exports.digitsChars = exports.quoteChars = exports.whitespaceChars = exports.stringRenderEscapeChars = exports.identEscapeChars = exports.isHex = exports.isIdent = exports.isIdentStart = void 0;
        function isIdentStart(c) {
            return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c === '-' || c === '_' || c === '\\' || c >= '\u00a0';
        }
        exports.isIdentStart = isIdentStart;
        function isIdent(c) {
            return ((c >= 'a' && c <= 'z') ||
                (c >= 'A' && c <= 'Z') ||
                (c >= '0' && c <= '9') ||
                c === '-' ||
                c === '_' ||
                c >= '\u00a0');
        }
        exports.isIdent = isIdent;
        function isHex(c) {
            return (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F') || (c >= '0' && c <= '9');
        }
        exports.isHex = isHex;
        exports.identEscapeChars = {
            '!': true,
            '"': true,
            '#': true,
            $: true,
            '%': true,
            '&': true,
            "'": true,
            '(': true,
            ')': true,
            '*': true,
            '+': true,
            ',': true,
            '.': true,
            '/': true,
            ';': true,
            '<': true,
            '=': true,
            '>': true,
            '?': true,
            '@': true,
            '[': true,
            '\\': true,
            ']': true,
            '^': true,
            '`': true,
            '{': true,
            '|': true,
            '}': true,
            '~': true
        };
        exports.stringRenderEscapeChars = {
            '\n': true,
            '\r': true,
            '\t': true,
            '\f': true,
            '\v': true
        };
        exports.whitespaceChars = {
            ' ': true,
            '\t': true,
            '\n': true,
            '\r': true,
            '\f': true
        };
        exports.quoteChars = {
            '"': true,
            "'": true
        };
        exports.digitsChars = {
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true
        };
        exports.maxHexLength = 6;
        function escapeIdentifier(s) {
            var len = s.length;
            var result = '';
            var i = 0;
            while (i < len) {
                var chr = s.charAt(i);
                if (exports.identEscapeChars[chr] || (chr === '-' && i === 1 && s.charAt(0) === '-')) {
                    result += '\\' + chr;
                }
                else {
                    if (chr === '-' ||
                        chr === '_' ||
                        (chr >= 'A' && chr <= 'Z') ||
                        (chr >= 'a' && chr <= 'z') ||
                        (chr >= '0' && chr <= '9' && i !== 0 && !(i === 1 && s.charAt(0) === '-'))) {
                        result += chr;
                    }
                    else {
                        var charCode = chr.charCodeAt(0);
                        if ((charCode & 0xf800) === 0xd800) {
                            var extraCharCode = s.charCodeAt(i++);
                            if ((charCode & 0xfc00) !== 0xd800 || (extraCharCode & 0xfc00) !== 0xdc00) {
                                throw Error('UCS-2(decode): illegal sequence');
                            }
                            charCode = ((charCode & 0x3ff) << 10) + (extraCharCode & 0x3ff) + 0x10000;
                        }
                        result += '\\' + charCode.toString(16) + ' ';
                    }
                }
                i++;
            }
            return result.trim();
        }
        exports.escapeIdentifier = escapeIdentifier;
        function escapeString(s) {
            var len = s.length;
            var result = '';
            var i = 0;
            while (i < len) {
                var chr = s.charAt(i);
                if (chr === '"') {
                    chr = '\\"';
                }
                else if (chr === '\\') {
                    chr = '\\\\';
                }
                else if (exports.stringRenderEscapeChars[chr]) {
                    chr = '\\' + chr.charCodeAt(0).toString(16) + (i === len - 1 ? '' : ' ');
                }
                result += chr;
                i++;
            }
            return "\"".concat(result, "\"");
        }
        exports.escapeString = escapeString;

    }, {}]
}, {}, [1]);


!function () {
    const INTERFACE_TAG_MAPPING = {
        // https://html.spec.whatwg.org/multipage/dom.html#elements-in-the-dom%3Aelement-interface
        // https://html.spec.whatwg.org/multipage/indices.html#elements-3
        ["HTML_NS"]: {
            HTMLElement: [
                "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "dd", "dfn", "dt", "em", "figcaption",
                "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rp", "rt", "ruby", "s",
                "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"
            ],
            HTMLAnchorElement: ["a"],
            HTMLAreaElement: ["area"],
            HTMLAudioElement: ["audio"],
            HTMLBaseElement: ["base"],
            HTMLBodyElement: ["body"],
            HTMLBRElement: ["br"],
            HTMLButtonElement: ["button"],
            HTMLCanvasElement: ["canvas"],
            HTMLDataElement: ["data"],
            HTMLDataListElement: ["datalist"],
            HTMLDetailsElement: ["details"],
            HTMLDialogElement: ["dialog"],
            HTMLDirectoryElement: ["dir"],
            HTMLDivElement: ["div"],
            HTMLDListElement: ["dl"],
            HTMLEmbedElement: ["embed"],
            HTMLFieldSetElement: ["fieldset"],
            HTMLFontElement: ["font"],
            HTMLFormElement: ["form"],
            HTMLFrameElement: ["frame"],
            HTMLFrameSetElement: ["frameset"],
            HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
            HTMLHeadElement: ["head"],
            HTMLHRElement: ["hr"],
            HTMLHtmlElement: ["html"],
            HTMLIFrameElement: ["iframe"],
            HTMLImageElement: ["img"],
            HTMLInputElement: ["input"],
            HTMLLabelElement: ["label"],
            HTMLLegendElement: ["legend"],
            HTMLLIElement: ["li"],
            HTMLLinkElement: ["link"],
            HTMLMapElement: ["map"],
            HTMLMarqueeElement: ["marquee"],
            HTMLMediaElement: [],
            HTMLMenuElement: ["menu"],
            HTMLMetaElement: ["meta"],
            HTMLMeterElement: ["meter"],
            HTMLModElement: ["del", "ins"],
            HTMLObjectElement: ["object"],
            HTMLOListElement: ["ol"],
            HTMLOptGroupElement: ["optgroup"],
            HTMLOptionElement: ["option"],
            HTMLOutputElement: ["output"],
            HTMLParagraphElement: ["p"],
            HTMLParamElement: ["param"],
            HTMLPictureElement: ["picture"],
            HTMLPreElement: ["listing", "pre", "xmp"],
            HTMLProgressElement: ["progress"],
            HTMLQuoteElement: ["blockquote", "q"],
            HTMLScriptElement: ["script"],
            HTMLSelectElement: ["select"],
            HTMLSlotElement: ["slot"],
            HTMLSourceElement: ["source"],
            HTMLSpanElement: ["span"],
            HTMLStyleElement: ["style"],
            HTMLTableCaptionElement: ["caption"],
            HTMLTableCellElement: ["th", "td"],
            HTMLTableColElement: ["col", "colgroup"],
            HTMLTableElement: ["table"],
            HTMLTimeElement: ["time"],
            HTMLTitleElement: ["title"],
            HTMLTableRowElement: ["tr"],
            HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
            HTMLTemplateElement: ["template"],
            HTMLTextAreaElement: ["textarea"],
            HTMLTrackElement: ["track"],
            HTMLUListElement: ["ul"],
            HTMLUnknownElement: [],
            HTMLVideoElement: ["video"]
        },
        ["SVG_NS"]: {
            SVGElement: [],
            SVGGraphicsElement: [],
            SVGSVGElement: ["svg"],
            SVGTitleElement: ["title"]
        }
    };

    // 创建标签
    rsvm.createElement = function (tagName, document) {
        for (const key of Object.keys(INTERFACE_TAG_MAPPING["HTML_NS"])) {
            if (INTERFACE_TAG_MAPPING["HTML_NS"][key].includes(tagName)) {
                if (rsvm.prototype[key]) { return rsvm.prototype[key].new(document, tagName); }
            }
        }
        return rsvm.prototype.HTMLUnknownElement.new(document, tagName);
    }

    // 解析完整html到document对象上构建dom树
    rsvm.buildDom = function (html, curWindow) {
        //                     正在实现的元素的父节点
        function travel(rootNode, parentElem, document) {
            for (const curNode of rootNode['childNodes']) {
                if ("#document" === curNode['nodeName']) {
                    travel(curNode, document, document);
                }
                else if ("#documentType" === curNode['nodeName']) {
                    let doctypeNode = rsvm.prototype.DocumentType.new(curNode['name'], curNode['publicId'], curNode['systemId'], document);
                    // ... ...
                    rsvm.set(document, "doctype", doctypeNode);    // 设置document.doctype
                    rsvm.set(doctypeNode, "parentNode", parentElem);
                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(doctypeNode);
                }
                else if ("#text" === curNode['nodeName']) {
                    let textNode = rsvm.prototype.Text.new(curNode['value']);  // 文本节点
                    // ... ...
                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(textNode);
                    rsvm.set(textNode, "ownerDocument", document);
                    rsvm.set(textNode, "parentNode", parentElem);
                    if (parentElem.localName === "title") {         // 如果是title标签，则往textNode的父节点text赋值
                        rsvm.set(parentElem, "text", curNode['value']);
                    } else if (parentElem.localName === "script") {         // 如果是title标签，则往textNode的父节点text赋值
                    }
                }
                else if ("#comment" === curNode['nodeName']) {
                    let commentNode = rsvm.prototype.Comment.new(curNode['data'], document);  // 注释节点
                    rsvm.set(commentNode, "parentNode", parentElem);
                    // ... ...
                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(commentNode);
                }
                else {
                    let elemNode = rsvm.createElement(curNode["tagName"], document);
                    curNode.target = elemNode;

                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(elemNode);

                    rsvm.set(elemNode, "parentElement", parentElem);
                    rsvm.set(elemNode, "parentNode", parentElem);

                    if (curNode["tagName"] === "head") {
                        rsvm.set(document, "head", elemNode);
                    } else if (curNode["tagName"] === "body") {
                        rsvm.set(document, "body", elemNode);
                    } else if (curNode["tagName"] === "html") {
                        rsvm.set(document, "documentElement", elemNode);
                    }

                    // 处理元素节点的属性
                    for (const attr of curNode['attrs']) {
                        var attrNode = rsvm.prototype.Attr.new(attr.name, attr.value);
                        Object.defineProperty(elemNode.attributes, elemNode.attributes.length, { value: attrNode, writable: false, enumerable: true, configurable: true });
                        Object.defineProperty(elemNode.attributes, attr.name, { value: attrNode, writable: false, enumerable: false, configurable: true });
                        rsvm.set(attrNode, "ownerElement", elemNode);
                        rsvm.set(attrNode, "ownerDocument", document);

                        switch (attr.name) {
                            case "id":
                                rsvm.set(elemNode, attr.name, attr.value);
                                continue;
                            case "class":
                                rsvm.set(elemNode, "className", attr.value);
                                continue;
                            case "style":
                                let value = attr.value.trim();
                                value = (value[value.length - 1] === ';') ? value.slice(0, value.length - 1) : value;
                                let properAry = value.split(';');
                                for (let item of properAry) {
                                    if (item) {
                                        let itemAry = item.trim().split(':');
                                        let valueAry = itemAry[1].trim().split(',');
                                        let newAry = valueAry.map(str => {
                                            const regex = new RegExp(`^"*|"*$`, 'g');
                                            let v = str.trim().replace(regex, '');
                                            if (/\s/.test(v)) {
                                                v = `"${v}"`
                                            }
                                            return v;
                                        })
                                        let pAry = itemAry[0].trim().split('-');
                                        for (let i = 0; i < pAry.length; i++) {
                                            if (i >= 1) {
                                                pAry[i] = pAry[i].charAt(0).toUpperCase() + pAry[i].slice(1);
                                            }
                                        }
                                        elemNode.style[pAry.join("")] = newAry.join(', ');
                                    }
                                }
                                continue;
                            case "content":
                                if (["meta"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "href":
                                if (["a", "link"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "src":
                                if (["img", "script", "input"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "type":
                                if (["script", "input", "link", "style"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                } else if (curNode["tagName"] === "button") {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "action":
                                if (["form"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "method":
                                if (["button", "form"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "name":
                                if (["button", "form", "img", "input", "meta"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "value":
                                if (["button", "input"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "charset":
                                if (["link", "meta", "script"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                        }
                    }
                    // 处理特殊节点
                    if (curNode["tagName"] === "title" || curNode["tagName"] === "script") {
                        rsvm.set(elemNode, "text", curNode["childNodes"].length != 0 ? curNode["childNodes"][0]['value'] : "");
                    }
                    if (curNode['childNodes']) {
                        travel(curNode, elemNode, document);
                    } else {

                    }
                }
            }
        }
        rsvm.prevent();
        rsvm.domRoot = rsvm.DomParser.parse(html);
        travel(rsvm.domRoot, curWindow.document, curWindow.document);
        rsvm.recover();
    }

    // 解析片段html
    rsvm.buildFragment = function (html, window, startNode) {
        //                     正在实现的元素的父节点
        function travel(rootNode, parentElem, document) {
            for (const curNode of rootNode['childNodes']) {
                if ("#document" === curNode['nodeName']) {
                    travel(curNode, document, document);
                }
                else if ("#documentType" === curNode['nodeName']) {
                    let doctypeNode = rsvm.prototype.DocumentType.new(curNode['name'], curNode['publicId'], curNode['systemId'], document);
                    // ... ...
                    rsvm.set(document, "doctype", doctypeNode);    // 设置document.doctype
                    rsvm.RsGetPrivateProperty(document, "nodeArray").push(doctypeNode);
                }
                else if ("#text" === curNode['nodeName']) {
                    let textNode = rsvm.prototype.Text.new(curNode['value']);  // 文本节点
                    // ... ...
                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(textNode);
                    rsvm.set(textNode, "ownerDocument", document);
                    if (parentElem.tagName === "title") {         // 如果是title标签，则往textNode的父节点text赋值
                        rsvm.set(parentElem, "text", curNode['value']);
                    }
                }
                else if ("#comment" === curNode['nodeName']) {
                    let commentNode = rsvm.prototype.Comment.new(curNode['data'], document);  // 注释节点
                    // ... ...
                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(commentNode);
                }
                else {
                    let elemNode = rsvm.createElement(curNode["tagName"], document);

                    rsvm.RsGetPrivateProperty(parentElem, "nodeArray").push(elemNode);

                    rsvm.set(elemNode, "parentElement", parentElem);
                    rsvm.set(elemNode, "parentNode", parentElem);

                    // 处理元素节点的属性
                    for (const attr of curNode['attrs']) {
                        var attrNode = rsvm.prototype.Attr.new(attr.name, attr.value);
                        Object.defineProperty(elemNode.attributes, elemNode.attributes.length, { value: attrNode, writable: false, enumerable: true, configurable: true });
                        Object.defineProperty(elemNode.attributes, attr.name, { value: attrNode, writable: false, enumerable: false, configurable: true });
                        rsvm.set(attrNode, "ownerElement", elemNode);
                        rsvm.set(attrNode, "ownerDocument", document);

                        switch (attr.name) {
                            case "id":
                                rsvm.set(elemNode, attr.name, attr.value);
                                continue;
                            case "class":
                                rsvm.set(elemNode, "className", attr.value);
                                continue;
                            case "style":
                                let value = attr.value.trim();
                                value = (value[value.length - 1] === ';') ? value.slice(0, value.length - 1) : value;
                                let properAry = value.split(';');
                                for (let item of properAry) {
                                    if (item) {
                                        let itemAry = item.trim().split(':');
                                        let valueAry = itemAry[1].trim().split(',');
                                        let newAry = valueAry.map(str => {
                                            const regex = new RegExp(`^"*|"*$`, 'g');
                                            let v = str.trim().replace(regex, '');
                                            if (/\s/.test(v)) {
                                                v = `"${v}"`
                                            }
                                            return v;
                                        })
                                        let pAry = itemAry[0].trim().split('-');
                                        for (let i = 0; i < pAry.length; i++) {
                                            if (i >= 1) {
                                                pAry[i] = pAry[i].charAt(0).toUpperCase() + pAry[i].slice(1);
                                            }
                                        }
                                        elemNode.style[pAry.join("")] = newAry.join(', ');
                                    }
                                }
                                continue;
                            case "content":
                                if (["meta"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "href":
                                if (["a", "link"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "src":
                                if (["img", "script", "input"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "type":
                                if (["script", "input", "link", "style"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                } else if (curNode["tagName"] === "button") {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "action":
                                if (["form"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "method":
                                if (["button", "form"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "name":
                                if (["button", "form", "img", "input", "meta"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "value":
                                if (["button", "input"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "charset":
                                if (["link", "meta", "script"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                        }
                    }
                    // 处理特殊节点
                    if (curNode["tagName"] === "title" || curNode["tagName"] === "script") {
                        rsvm.set(elemNode, "text", curNode["childNodes"].length != 0 ? curNode["childNodes"][0]['value'] : "");
                    }
                    travel(curNode, elemNode, document);
                }
            }
        }
        rsvm.prevent();
        let root = rsvm.DomParser.parseFragment(html);
        travel(root, startNode, window.document);
        rsvm.recover();
    }

    rsvm.curWindow = window;
    // 构建dom
    !function () {
        let _html = '';
        Object.defineProperty(rsvm.siteInfo, "html", {
            get() {
                return _html;
            },
            set(html) {
                _html = html;
                rsvm.domRoot = rsvm.DomParser.parse(html);
                rsvm.domRoot.target = rsvm.curWindow.document;
                rsvm.curIndex = 0;
                rsvm.domList = [];
                function travel(rootNode) {
                    for (const curNode of rootNode['childNodes']) {
                        rsvm.domList.push(curNode);
                        if (curNode['childNodes'] && curNode['childNodes'].length > 0) {
                            travel(curNode);
                        }
                    }
                }
                travel(rsvm.domRoot);
            },
            configurable: false, enumerable: true,
        });
    }();

    // 按需构建dom树
    rsvm.build = function (flag) {
        // 正在实现的元素的父节点
        function travel(document) {
            for (rsvm.curIndex; rsvm.curIndex < rsvm.domList.length;) {
                let curNode = rsvm.domList[rsvm.curIndex];
                if ("#documentType" === curNode['nodeName']) {
                    let doctypeNode = rsvm.prototype.DocumentType.new(curNode['name'], curNode['publicId'], curNode['systemId'], document);
                    curNode.target = doctypeNode;
                    // ... ...
                    rsvm.set(document, "doctype", doctypeNode);    // 设置document.doctype
                    rsvm.set(doctypeNode, "parentNode", curNode.parentNode.target);
                    rsvm.RsGetPrivateProperty(curNode.parentNode.target, "nodeArray").push(doctypeNode);
                }
                else if ("#text" === curNode['nodeName']) {
                    let textNode = rsvm.prototype.Text.new(curNode['value']);  // 文本节点
                    curNode.target = textNode;
                    // ... ...
                    rsvm.RsGetPrivateProperty(curNode.parentNode.target, "nodeArray").push(textNode);
                    rsvm.set(textNode, "ownerDocument", document);
                    rsvm.set(textNode, "parentNode", curNode.parentNode.target);
                    if (curNode.parentNode.target.localName === "title") {         // 如果是title标签，则往textNode的父节点text赋值
                        rsvm.set(curNode.parentNode.target, "text", curNode['value']);
                    }
                }
                else if ("#comment" === curNode['nodeName']) {
                    let commentNode = rsvm.prototype.Comment.new(curNode['data'], document);  // 注释节点
                    curNode.target = commentNode;
                    rsvm.set(commentNode, "parentNode", curNode.parentNode.target);
                    // ... ...
                    rsvm.RsGetPrivateProperty(curNode.parentNode.target, "nodeArray").push(commentNode);
                }
                else {
                    let elemNode = rsvm.createElement(curNode["tagName"], document);
                    curNode.target = elemNode;

                    rsvm.RsGetPrivateProperty(curNode.parentNode.target, "nodeArray").push(elemNode);

                    rsvm.set(elemNode, "parentElement", curNode.parentNode.target);
                    rsvm.set(elemNode, "parentNode", curNode.parentNode.target);

                    if (curNode["tagName"] === "head") {
                        rsvm.set(document, "head", elemNode);
                    } else if (curNode["tagName"] === "body") {
                        rsvm.set(document, "body", elemNode);
                    } else if (curNode["tagName"] === "html") {
                        rsvm.set(document, "documentElement", elemNode);
                    }

                    // 处理元素节点的属性
                    for (const attr of curNode['attrs']) {
                        let attrNode = rsvm.prototype.Attr.new(attr.name, attr.value);
                        Object.defineProperty(elemNode.attributes, elemNode.attributes.length, { value: attrNode, writable: false, enumerable: true, configurable: true });
                        Object.defineProperty(elemNode.attributes, attr.name, { value: attrNode, writable: false, enumerable: false, configurable: true });
                        rsvm.set(attrNode, "ownerElement", elemNode);
                        rsvm.set(attrNode, "ownerDocument", document);

                        switch (attr.name) {
                            case "id":
                                rsvm.set(elemNode, attr.name, attr.value);
                                continue;
                            case "class":
                                rsvm.set(elemNode, "className", attr.value);
                                continue;
                            case "style":
                                let value = attr.value.trim();
                                value = (value[value.length - 1] === ';') ? value.slice(0, value.length - 1) : value;
                                let properAry = value.split(';');
                                for (let item of properAry) {
                                    if (item) {
                                        let itemAry = item.trim().split(':');
                                        let valueAry = itemAry[1].trim().split(',');
                                        let newAry = valueAry.map(str => {
                                            const regex = new RegExp(`^"*|"*$`, 'g');
                                            let v = str.trim().replace(regex, '');
                                            if (/\s/.test(v)) {
                                                v = `"${v}"`
                                            }
                                            return v;
                                        })
                                        let pAry = itemAry[0].trim().split('-');
                                        for (let i = 0; i < pAry.length; i++) {
                                            if (i >= 1) {
                                                pAry[i] = pAry[i].charAt(0).toUpperCase() + pAry[i].slice(1);
                                            }
                                        }
                                        elemNode.style[pAry.join("")] = newAry.join(', ');
                                    }
                                }
                                continue;
                            case "content":
                                if (["meta"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "href":
                                if (["a", "link"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "src":
                                if (["img", "script", "input"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "type":
                                if (["script", "input", "link", "style"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                } else if (curNode["tagName"] === "button") {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "action":
                                if (["form"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "method":
                                if (["button", "form"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "name":
                                if (["button", "form", "img", "input", "meta"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "value":
                                if (["button", "input"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                            case "charset":
                                if (["link", "meta", "script"].includes(curNode["tagName"])) {
                                    rsvm.set(elemNode, attr.name, attr.value);
                                }
                                continue;
                        }
                    }

                    // 处理特殊节点
                    if (curNode["tagName"] === "title" || curNode["tagName"] === "script") {
                        rsvm.set(elemNode, "text", curNode["childNodes"].length != 0 ? curNode["childNodes"][0]['value'] : "");
                    }

                    if (curNode["tagName"] === "script") {
                        if (curNode['childNodes'].length !== 0) {
                            rsvm.curScript = curNode['childNodes'][0]['value'];
                            let textNode = rsvm.prototype.Text.new(curNode['childNodes'][0]['value']);  // 文本节点
                            curNode['childNodes'][0].target = textNode;
                            rsvm.RsGetPrivateProperty(curNode['childNodes'][0].parentNode.target, "nodeArray").push(textNode);
                            rsvm.set(textNode, "ownerDocument", document);
                            rsvm.set(textNode, "parentNode", curNode['childNodes'][0].parentNode.target);
                            // rsvm.curIndex++;
                        }
                        if (flag) {
                            rsvm.curIndex++;
                            break;
                        }
                    }
                }
                rsvm.curIndex++;
            }
        }
        rsvm.prevent();
        travel(rsvm.curWindow.document);
        rsvm.recover();
    }
}();
