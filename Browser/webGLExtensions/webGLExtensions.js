!function () {
    let ANGLEInstancedArrays = {};

    rsvm.prototype.ANGLEInstancedArrays = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("ANGLEInstancedArrays", target);
        },
        new() {
            let obj = rsvm.RsCreate(ANGLEInstancedArrays);
            return obj;
        },
    };

    Object.defineProperties(ANGLEInstancedArrays, {
        VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: { value: 35070, writable: false, enumerable: true, configurable: false, },
        drawArraysInstancedANGLE: {
            value: rsvm.RsCreateAction("drawArraysInstancedANGLE", 4, function drawArraysInstancedANGLE() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawElementsInstancedANGLE: {
            value: rsvm.RsCreateAction("drawElementsInstancedANGLE", 5, function drawElementsInstancedANGLE() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttribDivisorANGLE: {
            value: rsvm.RsCreateAction("vertexAttribDivisorANGLE", 2, function vertexAttribDivisorANGLE() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "ANGLEInstancedArrays", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTBlendMinMax = {};

    rsvm.prototype.EXTBlendMinMax = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTBlendMinMax", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTBlendMinMax);
            return obj;
        },
    };

    Object.defineProperties(EXTBlendMinMax, {
        MIN_EXT: { value: 32775, writable: false, enumerable: true, configurable: false, },
        MAX_EXT: { value: 32776, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "EXTBlendMinMax", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTColorBufferHalfFloat = {};

    rsvm.prototype.EXTColorBufferHalfFloat = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTColorBufferHalfFloat", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTColorBufferHalfFloat);
            return obj;
        },
    };

    Object.defineProperties(EXTColorBufferHalfFloat, {
        RGBA16F_EXT: { value: 34842, writable: false, enumerable: true, configurable: false, },
        RGB16F_EXT: { value: 34843, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: { value: 33297, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_NORMALIZED_EXT: { value: 35863, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "EXTColorBufferHalfFloat", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTDisjointTimerQuery = {};

    rsvm.prototype.EXTDisjointTimerQuery = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTDisjointTimerQuery", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTDisjointTimerQuery);
            return obj;
        },
    };

    Object.defineProperties(EXTDisjointTimerQuery, {
        QUERY_COUNTER_BITS_EXT: { value: 34916, writable: false, enumerable: true, configurable: false, },
        CURRENT_QUERY_EXT: { value: 34917, writable: false, enumerable: true, configurable: false, },
        QUERY_RESULT_EXT: { value: 34918, writable: false, enumerable: true, configurable: false, },
        QUERY_RESULT_AVAILABLE_EXT: { value: 34919, writable: false, enumerable: true, configurable: false, },
        TIME_ELAPSED_EXT: { value: 35007, writable: false, enumerable: true, configurable: false, },
        TIMESTAMP_EXT: { value: 36392, writable: false, enumerable: true, configurable: false, },
        GPU_DISJOINT_EXT: { value: 36795, writable: false, enumerable: true, configurable: false, },
        beginQueryEXT: {
            value: rsvm.RsCreateAction("beginQueryEXT", 2, function beginQueryEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createQueryEXT: {
            value: rsvm.RsCreateAction("createQueryEXT", 0, function createQueryEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteQueryEXT: {
            value: rsvm.RsCreateAction("deleteQueryEXT", 1, function deleteQueryEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        endQueryEXT: {
            value: rsvm.RsCreateAction("endQueryEXT", 1, function endQueryEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getQueryEXT: {
            value: rsvm.RsCreateAction("getQueryEXT", 2, function getQueryEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getQueryObjectEXT: {
            value: rsvm.RsCreateAction("getQueryObjectEXT", 2, function getQueryObjectEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isQueryEXT: {
            value: rsvm.RsCreateAction("isQueryEXT", 1, function isQueryEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        queryCounterEXT: {
            value: rsvm.RsCreateAction("queryCounterEXT", 2, function queryCounterEXT() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "EXTDisjointTimerQuery", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTFloatBlend = {};

    rsvm.prototype.EXTFloatBlend = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTFloatBlend", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTFloatBlend);
            return obj;
        },
    };

    Object.defineProperties(EXTFloatBlend, {
        [Symbol.toStringTag]: { value: "EXTFloatBlend", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTFragDepth = {};

    rsvm.prototype.EXTFragDepth = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTFragDepth", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTFragDepth);
            return obj;
        },
    };

    Object.defineProperties(EXTFragDepth, {
        [Symbol.toStringTag]: { value: "EXTFragDepth", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTShaderTextureLOD = {};

    rsvm.prototype.EXTShaderTextureLOD = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTShaderTextureLOD", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTShaderTextureLOD);
            return obj;
        },
    };

    Object.defineProperties(EXTShaderTextureLOD, {
        [Symbol.toStringTag]: { value: "EXTShaderTextureLOD", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTTextureCompressionBPTC = {};

    rsvm.prototype.EXTTextureCompressionBPTC = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTTextureCompressionBPTC", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTTextureCompressionBPTC);
            return obj;
        },
    };

    Object.defineProperties(EXTTextureCompressionBPTC, {
        COMPRESSED_RGBA_BPTC_UNORM_EXT: { value: 36492, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: { value: 36493, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: { value: 36494, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: { value: 36495, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "EXTTextureCompressionBPTC", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTTextureCompressionRGTC = {};

    rsvm.prototype.EXTTextureCompressionRGTC = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTTextureCompressionRGTC", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTTextureCompressionRGTC);
            return obj;
        },
    };

    Object.defineProperties(EXTTextureCompressionRGTC, {
        COMPRESSED_RED_RGTC1_EXT: { value: 36283, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_SIGNED_RED_RGTC1_EXT: { value: 36284, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_RED_GREEN_RGTC2_EXT: { value: 36285, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: { value: 36286, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "EXTTextureCompressionRGTC", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTTextureFilterAnisotropic = {};

    rsvm.prototype.EXTTextureFilterAnisotropic = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTTextureFilterAnisotropic", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTTextureFilterAnisotropic);
            return obj;
        },
    };

    Object.defineProperties(EXTTextureFilterAnisotropic, {
        TEXTURE_MAX_ANISOTROPY_EXT: { value: 34046, writable: false, enumerable: true, configurable: false, },
        MAX_TEXTURE_MAX_ANISOTROPY_EXT: { value: 34047, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "EXTTextureFilterAnisotropic", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let EXTsRGB = {};

    rsvm.prototype.EXTsRGB = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("EXTsRGB", target);
        },
        new() {
            let obj = rsvm.RsCreate(EXTsRGB);
            return obj;
        },
    };

    Object.defineProperties(EXTsRGB, {
        SRGB_EXT: { value: 35904, writable: false, enumerable: true, configurable: false, },
        SRGB_ALPHA_EXT: { value: 35906, writable: false, enumerable: true, configurable: false, },
        SRGB8_ALPHA8_EXT: { value: 35907, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: { value: 33296, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "EXTsRGB", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let KHRParallelShaderCompile = {};

    rsvm.prototype.KHRParallelShaderCompile = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("KHRParallelShaderCompile", target);
        },
        new() {
            let obj = rsvm.RsCreate(KHRParallelShaderCompile);
            return obj;
        },
    };

    Object.defineProperties(KHRParallelShaderCompile, {
        COMPLETION_STATUS_KHR: { value: 37297, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "KHRParallelShaderCompile", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESElementIndexUint = {};

    rsvm.prototype.OESElementIndexUint = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESElementIndexUint", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESElementIndexUint);
            return obj;
        },
    };

    Object.defineProperties(OESElementIndexUint, {
        [Symbol.toStringTag]: { value: "OESElementIndexUint", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESFboRenderMipmap = {};

    rsvm.prototype.OESFboRenderMipmap = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESFboRenderMipmap", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESFboRenderMipmap);
            return obj;
        },
    };

    Object.defineProperties(OESFboRenderMipmap, {
        [Symbol.toStringTag]: { value: "OESFboRenderMipmap", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESStandardDerivatives = {};

    rsvm.prototype.OESStandardDerivatives = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESStandardDerivatives", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESStandardDerivatives);
            return obj;
        },
    };

    Object.defineProperties(OESStandardDerivatives, {
        FRAGMENT_SHADER_DERIVATIVE_HINT_OES: { value: 35723, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "OESStandardDerivatives", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESTextureFloat = {};

    rsvm.prototype.OESTextureFloat = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESTextureFloat", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESTextureFloat);
            return obj;
        },
    };

    Object.defineProperties(OESTextureFloat, {
        [Symbol.toStringTag]: { value: "OESTextureFloat", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESTextureFloatLinear = {};

    rsvm.prototype.OESTextureFloatLinear = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESTextureFloatLinear", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESTextureFloatLinear);
            return obj;
        },
    };

    Object.defineProperties(OESTextureFloatLinear, {
        [Symbol.toStringTag]: { value: "OESTextureFloatLinear", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESTextureHalfFloat = {};

    rsvm.prototype.OESTextureHalfFloat = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESTextureHalfFloat", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESTextureHalfFloat);
            return obj;
        },
    };

    Object.defineProperties(OESTextureHalfFloat, {
        HALF_FLOAT_OES: { value: 36193, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "OESTextureHalfFloat", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESTextureHalfFloatLinear = {};

    rsvm.prototype.OESTextureHalfFloatLinear = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESTextureHalfFloatLinear", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESTextureHalfFloatLinear);
            return obj;
        },
    };

    Object.defineProperties(OESTextureHalfFloatLinear, {
        [Symbol.toStringTag]: { value: "OESTextureHalfFloatLinear", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let OESVertexArrayObject = {};

    rsvm.prototype.OESVertexArrayObject = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("OESVertexArrayObject", target);
        },
        new() {
            let obj = rsvm.RsCreate(OESVertexArrayObject);
            return obj;
        },
    };

    Object.defineProperties(OESVertexArrayObject, {
        VERTEX_ARRAY_BINDING_OES: { value: 34229, writable: false, enumerable: true, configurable: false, },
        bindVertexArrayOES: {
            value: rsvm.RsCreateAction("bindVertexArrayOES", 0, function bindVertexArrayOES() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createVertexArrayOES: {
            value: rsvm.RsCreateAction("createVertexArrayOES", 0, function createVertexArrayOES() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteVertexArrayOES: {
            value: rsvm.RsCreateAction("deleteVertexArrayOES", 0, function deleteVertexArrayOES() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isVertexArrayOES: {
            value: rsvm.RsCreateAction("isVertexArrayOES", 0, function isVertexArrayOES() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "OESVertexArrayObject", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLColorBufferFloat = {};

    rsvm.prototype.WebGLColorBufferFloat = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLColorBufferFloat", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLColorBufferFloat);
            return obj;
        },
    };

    Object.defineProperties(WebGLColorBufferFloat, {
        RGBA32F_EXT: { value: 34836, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: { value: 33297, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_NORMALIZED_EXT: { value: 35863, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "WebGLColorBufferFloat", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLCompressedTextureS3TC = {};

    rsvm.prototype.WebGLCompressedTextureS3TC = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLCompressedTextureS3TC", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLCompressedTextureS3TC);
            return obj;
        },
    };

    Object.defineProperties(WebGLCompressedTextureS3TC, {
        COMPRESSED_RGB_S3TC_DXT1_EXT: { value: 33776, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_RGBA_S3TC_DXT1_EXT: { value: 33777, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_RGBA_S3TC_DXT3_EXT: { value: 33778, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_RGBA_S3TC_DXT5_EXT: { value: 33779, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "WebGLCompressedTextureS3TC", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLCompressedTextureS3TCsRGB = {};

    rsvm.prototype.WebGLCompressedTextureS3TCsRGB = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLCompressedTextureS3TCsRGB", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLCompressedTextureS3TCsRGB);
            return obj;
        },
    };

    Object.defineProperties(WebGLCompressedTextureS3TCsRGB, {
        COMPRESSED_SRGB_S3TC_DXT1_EXT: { value: 35916, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: { value: 35917, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: { value: 35918, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: { value: 35919, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "WebGLCompressedTextureS3TCsRGB", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLDebugRendererInfo = {};

    rsvm.prototype.WebGLDebugRendererInfo = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLDebugRendererInfo", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLDebugRendererInfo);
            return obj;
        },
    };

    Object.defineProperties(WebGLDebugRendererInfo, {
        UNMASKED_VENDOR_WEBGL: { value: 37445, writable: false, enumerable: true, configurable: false, },
        UNMASKED_RENDERER_WEBGL: { value: 37446, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "WebGLDebugRendererInfo", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLDebugShaders = {};

    rsvm.prototype.WebGLDebugShaders = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLDebugShaders", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLDebugShaders);
            return obj;
        },
    };

    Object.defineProperties(WebGLDebugShaders, {
        getTranslatedShaderSource: {
            value: rsvm.RsCreateAction("getTranslatedShaderSource", 1, function getTranslatedShaderSource() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "WebGLDebugShaders", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLDepthTexture = {};

    rsvm.prototype.WebGLDepthTexture = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLDepthTexture", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLDepthTexture);
            return obj;
        },
    };

    Object.defineProperties(WebGLDepthTexture, {
        UNSIGNED_INT_24_8_WEBGL: { value: 34042, writable: false, enumerable: true, configurable: false, },
        [Symbol.toStringTag]: { value: "WebGLDepthTexture", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLDrawBuffers = {};

    rsvm.prototype.WebGLDrawBuffers = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLDrawBuffers", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLDrawBuffers);
            return obj;
        },
    };

    Object.defineProperties(WebGLDrawBuffers, {
        COLOR_ATTACHMENT0_WEBGL: { value: 36064, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT1_WEBGL: { value: 36065, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT2_WEBGL: { value: 36066, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT3_WEBGL: { value: 36067, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT4_WEBGL: { value: 36068, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT5_WEBGL: { value: 36069, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT6_WEBGL: { value: 36070, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT7_WEBGL: { value: 36071, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT8_WEBGL: { value: 36072, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT9_WEBGL: { value: 36073, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT10_WEBGL: { value: 36074, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT11_WEBGL: { value: 36075, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT12_WEBGL: { value: 36076, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT13_WEBGL: { value: 36077, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT14_WEBGL: { value: 36078, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT15_WEBGL: { value: 36079, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER0_WEBGL: { value: 34853, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER1_WEBGL: { value: 34854, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER2_WEBGL: { value: 34855, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER3_WEBGL: { value: 34856, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER4_WEBGL: { value: 34857, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER5_WEBGL: { value: 34858, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER6_WEBGL: { value: 34859, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER7_WEBGL: { value: 34860, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER8_WEBGL: { value: 34861, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER9_WEBGL: { value: 34862, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER10_WEBGL: { value: 34863, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER11_WEBGL: { value: 34864, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER12_WEBGL: { value: 34865, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER13_WEBGL: { value: 34866, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER14_WEBGL: { value: 34867, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER15_WEBGL: { value: 34868, writable: false, enumerable: true, configurable: false, },
        MAX_COLOR_ATTACHMENTS_WEBGL: { value: 36063, writable: false, enumerable: true, configurable: false, },
        MAX_DRAW_BUFFERS_WEBGL: { value: 34852, writable: false, enumerable: true, configurable: false, },
        drawBuffersWEBGL: {
            value: rsvm.RsCreateAction("drawBuffersWEBGL", 1, function drawBuffersWEBGL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "WebGLDrawBuffers", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLLoseContext = {};

    rsvm.prototype.WebGLLoseContext = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLLoseContext", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLLoseContext);
            return obj;
        },
    };

    Object.defineProperties(WebGLLoseContext, {
        loseContext: {
            value: rsvm.RsCreateAction("loseContext", 0, function loseContext() {
            }), writable: true, enumerable: true, configurable: true,
        },
        restoreContext: {
            value: rsvm.RsCreateAction("restoreContext", 0, function restoreContext() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "WebGLLoseContext", writable: false, enumerable: false, configurable: true, },
    });
}();


!function () {
    let WebGLMultiDraw = {};

    rsvm.prototype.WebGLMultiDraw = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLMultiDraw", target);
        },
        new() {
            let obj = rsvm.RsCreate(WebGLMultiDraw);
            return obj;
        },
    };

    Object.defineProperties(WebGLMultiDraw, {
        multiDrawArraysInstancedWEBGL: {
            value: rsvm.RsCreateAction("multiDrawArraysInstancedWEBGL", 8, function multiDrawArraysInstancedWEBGL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        multiDrawArraysWEBGL: {
            value: rsvm.RsCreateAction("multiDrawArraysWEBGL", 6, function multiDrawArraysWEBGL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        multiDrawElementsInstancedWEBGL: {
            value: rsvm.RsCreateAction("multiDrawElementsInstancedWEBGL", 9, function multiDrawElementsInstancedWEBGL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        multiDrawElementsWEBGL: {
            value: rsvm.RsCreateAction("multiDrawElementsWEBGL", 7, function multiDrawElementsWEBGL() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "WebGLMultiDraw", writable: false, enumerable: false, configurable: true, },
    });
}();


