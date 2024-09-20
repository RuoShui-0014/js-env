!function () {
    Object.defineProperty(window, "WebGLRenderingContext", {
        value: rsvm.RsCreateConstructor("WebGLRenderingContext"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGLRenderingContext = {
        memory: {
            canvas: null,
            drawingBufferWidth: 300,
            drawingBufferHeight: 150,
            drawingBufferColorSpace: "srgb",
            unpackColorSpace: "srgb",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("WebGLRenderingContext", target);
        },
        new(canvas) {
            let obj = rsvm.RsCreate(WebGLRenderingContext.prototype);
            rsvm.set(obj, "canvas", canvas);
            return obj;
        },
    };

    Object.defineProperties(WebGLRenderingContext, {
        prototype: { value: WebGLRenderingContext.prototype, writable: false, enumerable: false, configurable: false },
        DEPTH_BUFFER_BIT: { value: 256, writable: false, enumerable: true, configurable: false },
        STENCIL_BUFFER_BIT: { value: 1024, writable: false, enumerable: true, configurable: false },
        COLOR_BUFFER_BIT: { value: 16384, writable: false, enumerable: true, configurable: false },
        POINTS: { value: 0, writable: false, enumerable: true, configurable: false },
        LINES: { value: 1, writable: false, enumerable: true, configurable: false },
        LINE_LOOP: { value: 2, writable: false, enumerable: true, configurable: false },
        LINE_STRIP: { value: 3, writable: false, enumerable: true, configurable: false },
        TRIANGLES: { value: 4, writable: false, enumerable: true, configurable: false },
        TRIANGLE_STRIP: { value: 5, writable: false, enumerable: true, configurable: false },
        TRIANGLE_FAN: { value: 6, writable: false, enumerable: true, configurable: false },
        ZERO: { value: 0, writable: false, enumerable: true, configurable: false },
        ONE: { value: 1, writable: false, enumerable: true, configurable: false },
        SRC_COLOR: { value: 768, writable: false, enumerable: true, configurable: false },
        ONE_MINUS_SRC_COLOR: { value: 769, writable: false, enumerable: true, configurable: false },
        SRC_ALPHA: { value: 770, writable: false, enumerable: true, configurable: false },
        ONE_MINUS_SRC_ALPHA: { value: 771, writable: false, enumerable: true, configurable: false },
        DST_ALPHA: { value: 772, writable: false, enumerable: true, configurable: false },
        ONE_MINUS_DST_ALPHA: { value: 773, writable: false, enumerable: true, configurable: false },
        DST_COLOR: { value: 774, writable: false, enumerable: true, configurable: false },
        ONE_MINUS_DST_COLOR: { value: 775, writable: false, enumerable: true, configurable: false },
        SRC_ALPHA_SATURATE: { value: 776, writable: false, enumerable: true, configurable: false },
        FUNC_ADD: { value: 32774, writable: false, enumerable: true, configurable: false },
        BLEND_EQUATION: { value: 32777, writable: false, enumerable: true, configurable: false },
        BLEND_EQUATION_RGB: { value: 32777, writable: false, enumerable: true, configurable: false },
        BLEND_EQUATION_ALPHA: { value: 34877, writable: false, enumerable: true, configurable: false },
        FUNC_SUBTRACT: { value: 32778, writable: false, enumerable: true, configurable: false },
        FUNC_REVERSE_SUBTRACT: { value: 32779, writable: false, enumerable: true, configurable: false },
        BLEND_DST_RGB: { value: 32968, writable: false, enumerable: true, configurable: false },
        BLEND_SRC_RGB: { value: 32969, writable: false, enumerable: true, configurable: false },
        BLEND_DST_ALPHA: { value: 32970, writable: false, enumerable: true, configurable: false },
        BLEND_SRC_ALPHA: { value: 32971, writable: false, enumerable: true, configurable: false },
        CONSTANT_COLOR: { value: 32769, writable: false, enumerable: true, configurable: false },
        ONE_MINUS_CONSTANT_COLOR: { value: 32770, writable: false, enumerable: true, configurable: false },
        CONSTANT_ALPHA: { value: 32771, writable: false, enumerable: true, configurable: false },
        ONE_MINUS_CONSTANT_ALPHA: { value: 32772, writable: false, enumerable: true, configurable: false },
        BLEND_COLOR: { value: 32773, writable: false, enumerable: true, configurable: false },
        ARRAY_BUFFER: { value: 34962, writable: false, enumerable: true, configurable: false },
        ELEMENT_ARRAY_BUFFER: { value: 34963, writable: false, enumerable: true, configurable: false },
        ARRAY_BUFFER_BINDING: { value: 34964, writable: false, enumerable: true, configurable: false },
        ELEMENT_ARRAY_BUFFER_BINDING: { value: 34965, writable: false, enumerable: true, configurable: false },
        STREAM_DRAW: { value: 35040, writable: false, enumerable: true, configurable: false },
        STATIC_DRAW: { value: 35044, writable: false, enumerable: true, configurable: false },
        DYNAMIC_DRAW: { value: 35048, writable: false, enumerable: true, configurable: false },
        BUFFER_SIZE: { value: 34660, writable: false, enumerable: true, configurable: false },
        BUFFER_USAGE: { value: 34661, writable: false, enumerable: true, configurable: false },
        CURRENT_VERTEX_ATTRIB: { value: 34342, writable: false, enumerable: true, configurable: false },
        FRONT: { value: 1028, writable: false, enumerable: true, configurable: false },
        BACK: { value: 1029, writable: false, enumerable: true, configurable: false },
        FRONT_AND_BACK: { value: 1032, writable: false, enumerable: true, configurable: false },
        TEXTURE_2D: { value: 3553, writable: false, enumerable: true, configurable: false },
        CULL_FACE: { value: 2884, writable: false, enumerable: true, configurable: false },
        BLEND: { value: 3042, writable: false, enumerable: true, configurable: false },
        DITHER: { value: 3024, writable: false, enumerable: true, configurable: false },
        STENCIL_TEST: { value: 2960, writable: false, enumerable: true, configurable: false },
        DEPTH_TEST: { value: 2929, writable: false, enumerable: true, configurable: false },
        SCISSOR_TEST: { value: 3089, writable: false, enumerable: true, configurable: false },
        POLYGON_OFFSET_FILL: { value: 32823, writable: false, enumerable: true, configurable: false },
        SAMPLE_ALPHA_TO_COVERAGE: { value: 32926, writable: false, enumerable: true, configurable: false },
        SAMPLE_COVERAGE: { value: 32928, writable: false, enumerable: true, configurable: false },
        NO_ERROR: { value: 0, writable: false, enumerable: true, configurable: false },
        INVALID_ENUM: { value: 1280, writable: false, enumerable: true, configurable: false },
        INVALID_VALUE: { value: 1281, writable: false, enumerable: true, configurable: false },
        INVALID_OPERATION: { value: 1282, writable: false, enumerable: true, configurable: false },
        OUT_OF_MEMORY: { value: 1285, writable: false, enumerable: true, configurable: false },
        CW: { value: 2304, writable: false, enumerable: true, configurable: false },
        CCW: { value: 2305, writable: false, enumerable: true, configurable: false },
        LINE_WIDTH: { value: 2849, writable: false, enumerable: true, configurable: false },
        ALIASED_POINT_SIZE_RANGE: { value: 33901, writable: false, enumerable: true, configurable: false },
        ALIASED_LINE_WIDTH_RANGE: { value: 33902, writable: false, enumerable: true, configurable: false },
        CULL_FACE_MODE: { value: 2885, writable: false, enumerable: true, configurable: false },
        FRONT_FACE: { value: 2886, writable: false, enumerable: true, configurable: false },
        DEPTH_RANGE: { value: 2928, writable: false, enumerable: true, configurable: false },
        DEPTH_WRITEMASK: { value: 2930, writable: false, enumerable: true, configurable: false },
        DEPTH_CLEAR_VALUE: { value: 2931, writable: false, enumerable: true, configurable: false },
        DEPTH_FUNC: { value: 2932, writable: false, enumerable: true, configurable: false },
        STENCIL_CLEAR_VALUE: { value: 2961, writable: false, enumerable: true, configurable: false },
        STENCIL_FUNC: { value: 2962, writable: false, enumerable: true, configurable: false },
        STENCIL_FAIL: { value: 2964, writable: false, enumerable: true, configurable: false },
        STENCIL_PASS_DEPTH_FAIL: { value: 2965, writable: false, enumerable: true, configurable: false },
        STENCIL_PASS_DEPTH_PASS: { value: 2966, writable: false, enumerable: true, configurable: false },
        STENCIL_REF: { value: 2967, writable: false, enumerable: true, configurable: false },
        STENCIL_VALUE_MASK: { value: 2963, writable: false, enumerable: true, configurable: false },
        STENCIL_WRITEMASK: { value: 2968, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_FUNC: { value: 34816, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_FAIL: { value: 34817, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_PASS_DEPTH_FAIL: { value: 34818, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_PASS_DEPTH_PASS: { value: 34819, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_REF: { value: 36003, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_VALUE_MASK: { value: 36004, writable: false, enumerable: true, configurable: false },
        STENCIL_BACK_WRITEMASK: { value: 36005, writable: false, enumerable: true, configurable: false },
        VIEWPORT: { value: 2978, writable: false, enumerable: true, configurable: false },
        SCISSOR_BOX: { value: 3088, writable: false, enumerable: true, configurable: false },
        COLOR_CLEAR_VALUE: { value: 3106, writable: false, enumerable: true, configurable: false },
        COLOR_WRITEMASK: { value: 3107, writable: false, enumerable: true, configurable: false },
        UNPACK_ALIGNMENT: { value: 3317, writable: false, enumerable: true, configurable: false },
        PACK_ALIGNMENT: { value: 3333, writable: false, enumerable: true, configurable: false },
        MAX_TEXTURE_SIZE: { value: 3379, writable: false, enumerable: true, configurable: false },
        MAX_VIEWPORT_DIMS: { value: 3386, writable: false, enumerable: true, configurable: false },
        SUBPIXEL_BITS: { value: 3408, writable: false, enumerable: true, configurable: false },
        RED_BITS: { value: 3410, writable: false, enumerable: true, configurable: false },
        GREEN_BITS: { value: 3411, writable: false, enumerable: true, configurable: false },
        BLUE_BITS: { value: 3412, writable: false, enumerable: true, configurable: false },
        ALPHA_BITS: { value: 3413, writable: false, enumerable: true, configurable: false },
        DEPTH_BITS: { value: 3414, writable: false, enumerable: true, configurable: false },
        STENCIL_BITS: { value: 3415, writable: false, enumerable: true, configurable: false },
        POLYGON_OFFSET_UNITS: { value: 10752, writable: false, enumerable: true, configurable: false },
        POLYGON_OFFSET_FACTOR: { value: 32824, writable: false, enumerable: true, configurable: false },
        TEXTURE_BINDING_2D: { value: 32873, writable: false, enumerable: true, configurable: false },
        SAMPLE_BUFFERS: { value: 32936, writable: false, enumerable: true, configurable: false },
        SAMPLES: { value: 32937, writable: false, enumerable: true, configurable: false },
        SAMPLE_COVERAGE_VALUE: { value: 32938, writable: false, enumerable: true, configurable: false },
        SAMPLE_COVERAGE_INVERT: { value: 32939, writable: false, enumerable: true, configurable: false },
        COMPRESSED_TEXTURE_FORMATS: { value: 34467, writable: false, enumerable: true, configurable: false },
        DONT_CARE: { value: 4352, writable: false, enumerable: true, configurable: false },
        FASTEST: { value: 4353, writable: false, enumerable: true, configurable: false },
        NICEST: { value: 4354, writable: false, enumerable: true, configurable: false },
        GENERATE_MIPMAP_HINT: { value: 33170, writable: false, enumerable: true, configurable: false },
        BYTE: { value: 5120, writable: false, enumerable: true, configurable: false },
        UNSIGNED_BYTE: { value: 5121, writable: false, enumerable: true, configurable: false },
        SHORT: { value: 5122, writable: false, enumerable: true, configurable: false },
        UNSIGNED_SHORT: { value: 5123, writable: false, enumerable: true, configurable: false },
        INT: { value: 5124, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT: { value: 5125, writable: false, enumerable: true, configurable: false },
        FLOAT: { value: 5126, writable: false, enumerable: true, configurable: false },
        DEPTH_COMPONENT: { value: 6402, writable: false, enumerable: true, configurable: false },
        ALPHA: { value: 6406, writable: false, enumerable: true, configurable: false },
        RGB: { value: 6407, writable: false, enumerable: true, configurable: false },
        RGBA: { value: 6408, writable: false, enumerable: true, configurable: false },
        LUMINANCE: { value: 6409, writable: false, enumerable: true, configurable: false },
        LUMINANCE_ALPHA: { value: 6410, writable: false, enumerable: true, configurable: false },
        UNSIGNED_SHORT_4_4_4_4: { value: 32819, writable: false, enumerable: true, configurable: false },
        UNSIGNED_SHORT_5_5_5_1: { value: 32820, writable: false, enumerable: true, configurable: false },
        UNSIGNED_SHORT_5_6_5: { value: 33635, writable: false, enumerable: true, configurable: false },
        FRAGMENT_SHADER: { value: 35632, writable: false, enumerable: true, configurable: false },
        VERTEX_SHADER: { value: 35633, writable: false, enumerable: true, configurable: false },
        MAX_VERTEX_ATTRIBS: { value: 34921, writable: false, enumerable: true, configurable: false },
        MAX_VERTEX_UNIFORM_VECTORS: { value: 36347, writable: false, enumerable: true, configurable: false },
        MAX_VARYING_VECTORS: { value: 36348, writable: false, enumerable: true, configurable: false },
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: { value: 35661, writable: false, enumerable: true, configurable: false },
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: { value: 35660, writable: false, enumerable: true, configurable: false },
        MAX_TEXTURE_IMAGE_UNITS: { value: 34930, writable: false, enumerable: true, configurable: false },
        MAX_FRAGMENT_UNIFORM_VECTORS: { value: 36349, writable: false, enumerable: true, configurable: false },
        SHADER_TYPE: { value: 35663, writable: false, enumerable: true, configurable: false },
        DELETE_STATUS: { value: 35712, writable: false, enumerable: true, configurable: false },
        LINK_STATUS: { value: 35714, writable: false, enumerable: true, configurable: false },
        VALIDATE_STATUS: { value: 35715, writable: false, enumerable: true, configurable: false },
        ATTACHED_SHADERS: { value: 35717, writable: false, enumerable: true, configurable: false },
        ACTIVE_UNIFORMS: { value: 35718, writable: false, enumerable: true, configurable: false },
        ACTIVE_ATTRIBUTES: { value: 35721, writable: false, enumerable: true, configurable: false },
        SHADING_LANGUAGE_VERSION: { value: 35724, writable: false, enumerable: true, configurable: false },
        CURRENT_PROGRAM: { value: 35725, writable: false, enumerable: true, configurable: false },
        NEVER: { value: 512, writable: false, enumerable: true, configurable: false },
        LESS: { value: 513, writable: false, enumerable: true, configurable: false },
        EQUAL: { value: 514, writable: false, enumerable: true, configurable: false },
        LEQUAL: { value: 515, writable: false, enumerable: true, configurable: false },
        GREATER: { value: 516, writable: false, enumerable: true, configurable: false },
        NOTEQUAL: { value: 517, writable: false, enumerable: true, configurable: false },
        GEQUAL: { value: 518, writable: false, enumerable: true, configurable: false },
        ALWAYS: { value: 519, writable: false, enumerable: true, configurable: false },
        KEEP: { value: 7680, writable: false, enumerable: true, configurable: false },
        REPLACE: { value: 7681, writable: false, enumerable: true, configurable: false },
        INCR: { value: 7682, writable: false, enumerable: true, configurable: false },
        DECR: { value: 7683, writable: false, enumerable: true, configurable: false },
        INVERT: { value: 5386, writable: false, enumerable: true, configurable: false },
        INCR_WRAP: { value: 34055, writable: false, enumerable: true, configurable: false },
        DECR_WRAP: { value: 34056, writable: false, enumerable: true, configurable: false },
        VENDOR: { value: 7936, writable: false, enumerable: true, configurable: false },
        RENDERER: { value: 7937, writable: false, enumerable: true, configurable: false },
        VERSION: { value: 7938, writable: false, enumerable: true, configurable: false },
        NEAREST: { value: 9728, writable: false, enumerable: true, configurable: false },
        LINEAR: { value: 9729, writable: false, enumerable: true, configurable: false },
        NEAREST_MIPMAP_NEAREST: { value: 9984, writable: false, enumerable: true, configurable: false },
        LINEAR_MIPMAP_NEAREST: { value: 9985, writable: false, enumerable: true, configurable: false },
        NEAREST_MIPMAP_LINEAR: { value: 9986, writable: false, enumerable: true, configurable: false },
        LINEAR_MIPMAP_LINEAR: { value: 9987, writable: false, enumerable: true, configurable: false },
        TEXTURE_MAG_FILTER: { value: 10240, writable: false, enumerable: true, configurable: false },
        TEXTURE_MIN_FILTER: { value: 10241, writable: false, enumerable: true, configurable: false },
        TEXTURE_WRAP_S: { value: 10242, writable: false, enumerable: true, configurable: false },
        TEXTURE_WRAP_T: { value: 10243, writable: false, enumerable: true, configurable: false },
        TEXTURE: { value: 5890, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP: { value: 34067, writable: false, enumerable: true, configurable: false },
        TEXTURE_BINDING_CUBE_MAP: { value: 34068, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP_POSITIVE_X: { value: 34069, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP_NEGATIVE_X: { value: 34070, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP_POSITIVE_Y: { value: 34071, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP_NEGATIVE_Y: { value: 34072, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP_POSITIVE_Z: { value: 34073, writable: false, enumerable: true, configurable: false },
        TEXTURE_CUBE_MAP_NEGATIVE_Z: { value: 34074, writable: false, enumerable: true, configurable: false },
        MAX_CUBE_MAP_TEXTURE_SIZE: { value: 34076, writable: false, enumerable: true, configurable: false },
        TEXTURE0: { value: 33984, writable: false, enumerable: true, configurable: false },
        TEXTURE1: { value: 33985, writable: false, enumerable: true, configurable: false },
        TEXTURE2: { value: 33986, writable: false, enumerable: true, configurable: false },
        TEXTURE3: { value: 33987, writable: false, enumerable: true, configurable: false },
        TEXTURE4: { value: 33988, writable: false, enumerable: true, configurable: false },
        TEXTURE5: { value: 33989, writable: false, enumerable: true, configurable: false },
        TEXTURE6: { value: 33990, writable: false, enumerable: true, configurable: false },
        TEXTURE7: { value: 33991, writable: false, enumerable: true, configurable: false },
        TEXTURE8: { value: 33992, writable: false, enumerable: true, configurable: false },
        TEXTURE9: { value: 33993, writable: false, enumerable: true, configurable: false },
        TEXTURE10: { value: 33994, writable: false, enumerable: true, configurable: false },
        TEXTURE11: { value: 33995, writable: false, enumerable: true, configurable: false },
        TEXTURE12: { value: 33996, writable: false, enumerable: true, configurable: false },
        TEXTURE13: { value: 33997, writable: false, enumerable: true, configurable: false },
        TEXTURE14: { value: 33998, writable: false, enumerable: true, configurable: false },
        TEXTURE15: { value: 33999, writable: false, enumerable: true, configurable: false },
        TEXTURE16: { value: 34000, writable: false, enumerable: true, configurable: false },
        TEXTURE17: { value: 34001, writable: false, enumerable: true, configurable: false },
        TEXTURE18: { value: 34002, writable: false, enumerable: true, configurable: false },
        TEXTURE19: { value: 34003, writable: false, enumerable: true, configurable: false },
        TEXTURE20: { value: 34004, writable: false, enumerable: true, configurable: false },
        TEXTURE21: { value: 34005, writable: false, enumerable: true, configurable: false },
        TEXTURE22: { value: 34006, writable: false, enumerable: true, configurable: false },
        TEXTURE23: { value: 34007, writable: false, enumerable: true, configurable: false },
        TEXTURE24: { value: 34008, writable: false, enumerable: true, configurable: false },
        TEXTURE25: { value: 34009, writable: false, enumerable: true, configurable: false },
        TEXTURE26: { value: 34010, writable: false, enumerable: true, configurable: false },
        TEXTURE27: { value: 34011, writable: false, enumerable: true, configurable: false },
        TEXTURE28: { value: 34012, writable: false, enumerable: true, configurable: false },
        TEXTURE29: { value: 34013, writable: false, enumerable: true, configurable: false },
        TEXTURE30: { value: 34014, writable: false, enumerable: true, configurable: false },
        TEXTURE31: { value: 34015, writable: false, enumerable: true, configurable: false },
        ACTIVE_TEXTURE: { value: 34016, writable: false, enumerable: true, configurable: false },
        REPEAT: { value: 10497, writable: false, enumerable: true, configurable: false },
        CLAMP_TO_EDGE: { value: 33071, writable: false, enumerable: true, configurable: false },
        MIRRORED_REPEAT: { value: 33648, writable: false, enumerable: true, configurable: false },
        FLOAT_VEC2: { value: 35664, writable: false, enumerable: true, configurable: false },
        FLOAT_VEC3: { value: 35665, writable: false, enumerable: true, configurable: false },
        FLOAT_VEC4: { value: 35666, writable: false, enumerable: true, configurable: false },
        INT_VEC2: { value: 35667, writable: false, enumerable: true, configurable: false },
        INT_VEC3: { value: 35668, writable: false, enumerable: true, configurable: false },
        INT_VEC4: { value: 35669, writable: false, enumerable: true, configurable: false },
        BOOL: { value: 35670, writable: false, enumerable: true, configurable: false },
        BOOL_VEC2: { value: 35671, writable: false, enumerable: true, configurable: false },
        BOOL_VEC3: { value: 35672, writable: false, enumerable: true, configurable: false },
        BOOL_VEC4: { value: 35673, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT2: { value: 35674, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT3: { value: 35675, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT4: { value: 35676, writable: false, enumerable: true, configurable: false },
        SAMPLER_2D: { value: 35678, writable: false, enumerable: true, configurable: false },
        SAMPLER_CUBE: { value: 35680, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_ENABLED: { value: 34338, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_SIZE: { value: 34339, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_STRIDE: { value: 34340, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_TYPE: { value: 34341, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_NORMALIZED: { value: 34922, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_POINTER: { value: 34373, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: { value: 34975, writable: false, enumerable: true, configurable: false },
        IMPLEMENTATION_COLOR_READ_TYPE: { value: 35738, writable: false, enumerable: true, configurable: false },
        IMPLEMENTATION_COLOR_READ_FORMAT: { value: 35739, writable: false, enumerable: true, configurable: false },
        COMPILE_STATUS: { value: 35713, writable: false, enumerable: true, configurable: false },
        LOW_FLOAT: { value: 36336, writable: false, enumerable: true, configurable: false },
        MEDIUM_FLOAT: { value: 36337, writable: false, enumerable: true, configurable: false },
        HIGH_FLOAT: { value: 36338, writable: false, enumerable: true, configurable: false },
        LOW_INT: { value: 36339, writable: false, enumerable: true, configurable: false },
        MEDIUM_INT: { value: 36340, writable: false, enumerable: true, configurable: false },
        HIGH_INT: { value: 36341, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER: { value: 36160, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER: { value: 36161, writable: false, enumerable: true, configurable: false },
        RGBA4: { value: 32854, writable: false, enumerable: true, configurable: false },
        RGB5_A1: { value: 32855, writable: false, enumerable: true, configurable: false },
        RGB565: { value: 36194, writable: false, enumerable: true, configurable: false },
        DEPTH_COMPONENT16: { value: 33189, writable: false, enumerable: true, configurable: false },
        STENCIL_INDEX8: { value: 36168, writable: false, enumerable: true, configurable: false },
        DEPTH_STENCIL: { value: 34041, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_WIDTH: { value: 36162, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_HEIGHT: { value: 36163, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_INTERNAL_FORMAT: { value: 36164, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_RED_SIZE: { value: 36176, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_GREEN_SIZE: { value: 36177, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_BLUE_SIZE: { value: 36178, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_ALPHA_SIZE: { value: 36179, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_DEPTH_SIZE: { value: 36180, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_STENCIL_SIZE: { value: 36181, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: { value: 36048, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: { value: 36049, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: { value: 36050, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: { value: 36051, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT0: { value: 36064, writable: false, enumerable: true, configurable: false },
        DEPTH_ATTACHMENT: { value: 36096, writable: false, enumerable: true, configurable: false },
        STENCIL_ATTACHMENT: { value: 36128, writable: false, enumerable: true, configurable: false },
        DEPTH_STENCIL_ATTACHMENT: { value: 33306, writable: false, enumerable: true, configurable: false },
        NONE: { value: 0, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_COMPLETE: { value: 36053, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: { value: 36054, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: { value: 36055, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: { value: 36057, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_UNSUPPORTED: { value: 36061, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_BINDING: { value: 36006, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_BINDING: { value: 36007, writable: false, enumerable: true, configurable: false },
        MAX_RENDERBUFFER_SIZE: { value: 34024, writable: false, enumerable: true, configurable: false },
        INVALID_FRAMEBUFFER_OPERATION: { value: 1286, writable: false, enumerable: true, configurable: false },
        UNPACK_FLIP_Y_WEBGL: { value: 37440, writable: false, enumerable: true, configurable: false },
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: { value: 37441, writable: false, enumerable: true, configurable: false },
        CONTEXT_LOST_WEBGL: { value: 37442, writable: false, enumerable: true, configurable: false },
        UNPACK_COLORSPACE_CONVERSION_WEBGL: { value: 37443, writable: false, enumerable: true, configurable: false },
        BROWSER_DEFAULT_WEBGL: { value: 37444, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(WebGLRenderingContext.prototype, {
        canvas: {
            get: rsvm.RsCreateGetter("canvas", function canvas() {
                return rsvm.get(this, "canvas");
            }), set: undefined, enumerable: true, configurable: true,
        },
        drawingBufferWidth: {
            get: rsvm.RsCreateGetter("drawingBufferWidth", function drawingBufferWidth() {
                return rsvm.get(this, "drawingBufferWidth");
            }), set: undefined, enumerable: true, configurable: true,
        },
        drawingBufferHeight: {
            get: rsvm.RsCreateGetter("drawingBufferHeight", function drawingBufferHeight() {
                return rsvm.get(this, "drawingBufferHeight");
            }), set: undefined, enumerable: true, configurable: true,
        },
        drawingBufferColorSpace: {
            get: rsvm.RsCreateGetter("drawingBufferColorSpace", function drawingBufferColorSpace() {
                return rsvm.get(this, "drawingBufferColorSpace");
            }), set: rsvm.RsCreateSetter("drawingBufferColorSpace", function drawingBufferColorSpace() {
                rsvm.set(this, "drawingBufferColorSpace", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        unpackColorSpace: {
            get: rsvm.RsCreateGetter("unpackColorSpace", function unpackColorSpace() {
                return rsvm.get(this, "unpackColorSpace");
            }), set: rsvm.RsCreateSetter("unpackColorSpace", function unpackColorSpace() {
                rsvm.set(this, "unpackColorSpace", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        DEPTH_BUFFER_BIT: { value: 256, writable: false, enumerable: true, configurable: false, },
        STENCIL_BUFFER_BIT: { value: 1024, writable: false, enumerable: true, configurable: false, },
        COLOR_BUFFER_BIT: { value: 16384, writable: false, enumerable: true, configurable: false, },
        POINTS: { value: 0, writable: false, enumerable: true, configurable: false, },
        LINES: { value: 1, writable: false, enumerable: true, configurable: false, },
        LINE_LOOP: { value: 2, writable: false, enumerable: true, configurable: false, },
        LINE_STRIP: { value: 3, writable: false, enumerable: true, configurable: false, },
        TRIANGLES: { value: 4, writable: false, enumerable: true, configurable: false, },
        TRIANGLE_STRIP: { value: 5, writable: false, enumerable: true, configurable: false, },
        TRIANGLE_FAN: { value: 6, writable: false, enumerable: true, configurable: false, },
        ZERO: { value: 0, writable: false, enumerable: true, configurable: false, },
        ONE: { value: 1, writable: false, enumerable: true, configurable: false, },
        SRC_COLOR: { value: 768, writable: false, enumerable: true, configurable: false, },
        ONE_MINUS_SRC_COLOR: { value: 769, writable: false, enumerable: true, configurable: false, },
        SRC_ALPHA: { value: 770, writable: false, enumerable: true, configurable: false, },
        ONE_MINUS_SRC_ALPHA: { value: 771, writable: false, enumerable: true, configurable: false, },
        DST_ALPHA: { value: 772, writable: false, enumerable: true, configurable: false, },
        ONE_MINUS_DST_ALPHA: { value: 773, writable: false, enumerable: true, configurable: false, },
        DST_COLOR: { value: 774, writable: false, enumerable: true, configurable: false, },
        ONE_MINUS_DST_COLOR: { value: 775, writable: false, enumerable: true, configurable: false, },
        SRC_ALPHA_SATURATE: { value: 776, writable: false, enumerable: true, configurable: false, },
        FUNC_ADD: { value: 32774, writable: false, enumerable: true, configurable: false, },
        BLEND_EQUATION: { value: 32777, writable: false, enumerable: true, configurable: false, },
        BLEND_EQUATION_RGB: { value: 32777, writable: false, enumerable: true, configurable: false, },
        BLEND_EQUATION_ALPHA: { value: 34877, writable: false, enumerable: true, configurable: false, },
        FUNC_SUBTRACT: { value: 32778, writable: false, enumerable: true, configurable: false, },
        FUNC_REVERSE_SUBTRACT: { value: 32779, writable: false, enumerable: true, configurable: false, },
        BLEND_DST_RGB: { value: 32968, writable: false, enumerable: true, configurable: false, },
        BLEND_SRC_RGB: { value: 32969, writable: false, enumerable: true, configurable: false, },
        BLEND_DST_ALPHA: { value: 32970, writable: false, enumerable: true, configurable: false, },
        BLEND_SRC_ALPHA: { value: 32971, writable: false, enumerable: true, configurable: false, },
        CONSTANT_COLOR: { value: 32769, writable: false, enumerable: true, configurable: false, },
        ONE_MINUS_CONSTANT_COLOR: { value: 32770, writable: false, enumerable: true, configurable: false, },
        CONSTANT_ALPHA: { value: 32771, writable: false, enumerable: true, configurable: false, },
        ONE_MINUS_CONSTANT_ALPHA: { value: 32772, writable: false, enumerable: true, configurable: false, },
        BLEND_COLOR: { value: 32773, writable: false, enumerable: true, configurable: false, },
        ARRAY_BUFFER: { value: 34962, writable: false, enumerable: true, configurable: false, },
        ELEMENT_ARRAY_BUFFER: { value: 34963, writable: false, enumerable: true, configurable: false, },
        ARRAY_BUFFER_BINDING: { value: 34964, writable: false, enumerable: true, configurable: false, },
        ELEMENT_ARRAY_BUFFER_BINDING: { value: 34965, writable: false, enumerable: true, configurable: false, },
        STREAM_DRAW: { value: 35040, writable: false, enumerable: true, configurable: false, },
        STATIC_DRAW: { value: 35044, writable: false, enumerable: true, configurable: false, },
        DYNAMIC_DRAW: { value: 35048, writable: false, enumerable: true, configurable: false, },
        BUFFER_SIZE: { value: 34660, writable: false, enumerable: true, configurable: false, },
        BUFFER_USAGE: { value: 34661, writable: false, enumerable: true, configurable: false, },
        CURRENT_VERTEX_ATTRIB: { value: 34342, writable: false, enumerable: true, configurable: false, },
        FRONT: { value: 1028, writable: false, enumerable: true, configurable: false, },
        BACK: { value: 1029, writable: false, enumerable: true, configurable: false, },
        FRONT_AND_BACK: { value: 1032, writable: false, enumerable: true, configurable: false, },
        TEXTURE_2D: { value: 3553, writable: false, enumerable: true, configurable: false, },
        CULL_FACE: { value: 2884, writable: false, enumerable: true, configurable: false, },
        BLEND: { value: 3042, writable: false, enumerable: true, configurable: false, },
        DITHER: { value: 3024, writable: false, enumerable: true, configurable: false, },
        STENCIL_TEST: { value: 2960, writable: false, enumerable: true, configurable: false, },
        DEPTH_TEST: { value: 2929, writable: false, enumerable: true, configurable: false, },
        SCISSOR_TEST: { value: 3089, writable: false, enumerable: true, configurable: false, },
        POLYGON_OFFSET_FILL: { value: 32823, writable: false, enumerable: true, configurable: false, },
        SAMPLE_ALPHA_TO_COVERAGE: { value: 32926, writable: false, enumerable: true, configurable: false, },
        SAMPLE_COVERAGE: { value: 32928, writable: false, enumerable: true, configurable: false, },
        NO_ERROR: { value: 0, writable: false, enumerable: true, configurable: false, },
        INVALID_ENUM: { value: 1280, writable: false, enumerable: true, configurable: false, },
        INVALID_VALUE: { value: 1281, writable: false, enumerable: true, configurable: false, },
        INVALID_OPERATION: { value: 1282, writable: false, enumerable: true, configurable: false, },
        OUT_OF_MEMORY: { value: 1285, writable: false, enumerable: true, configurable: false, },
        CW: { value: 2304, writable: false, enumerable: true, configurable: false, },
        CCW: { value: 2305, writable: false, enumerable: true, configurable: false, },
        LINE_WIDTH: { value: 2849, writable: false, enumerable: true, configurable: false, },
        ALIASED_POINT_SIZE_RANGE: { value: 33901, writable: false, enumerable: true, configurable: false, },
        ALIASED_LINE_WIDTH_RANGE: { value: 33902, writable: false, enumerable: true, configurable: false, },
        CULL_FACE_MODE: { value: 2885, writable: false, enumerable: true, configurable: false, },
        FRONT_FACE: { value: 2886, writable: false, enumerable: true, configurable: false, },
        DEPTH_RANGE: { value: 2928, writable: false, enumerable: true, configurable: false, },
        DEPTH_WRITEMASK: { value: 2930, writable: false, enumerable: true, configurable: false, },
        DEPTH_CLEAR_VALUE: { value: 2931, writable: false, enumerable: true, configurable: false, },
        DEPTH_FUNC: { value: 2932, writable: false, enumerable: true, configurable: false, },
        STENCIL_CLEAR_VALUE: { value: 2961, writable: false, enumerable: true, configurable: false, },
        STENCIL_FUNC: { value: 2962, writable: false, enumerable: true, configurable: false, },
        STENCIL_FAIL: { value: 2964, writable: false, enumerable: true, configurable: false, },
        STENCIL_PASS_DEPTH_FAIL: { value: 2965, writable: false, enumerable: true, configurable: false, },
        STENCIL_PASS_DEPTH_PASS: { value: 2966, writable: false, enumerable: true, configurable: false, },
        STENCIL_REF: { value: 2967, writable: false, enumerable: true, configurable: false, },
        STENCIL_VALUE_MASK: { value: 2963, writable: false, enumerable: true, configurable: false, },
        STENCIL_WRITEMASK: { value: 2968, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_FUNC: { value: 34816, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_FAIL: { value: 34817, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_PASS_DEPTH_FAIL: { value: 34818, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_PASS_DEPTH_PASS: { value: 34819, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_REF: { value: 36003, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_VALUE_MASK: { value: 36004, writable: false, enumerable: true, configurable: false, },
        STENCIL_BACK_WRITEMASK: { value: 36005, writable: false, enumerable: true, configurable: false, },
        VIEWPORT: { value: 2978, writable: false, enumerable: true, configurable: false, },
        SCISSOR_BOX: { value: 3088, writable: false, enumerable: true, configurable: false, },
        COLOR_CLEAR_VALUE: { value: 3106, writable: false, enumerable: true, configurable: false, },
        COLOR_WRITEMASK: { value: 3107, writable: false, enumerable: true, configurable: false, },
        UNPACK_ALIGNMENT: { value: 3317, writable: false, enumerable: true, configurable: false, },
        PACK_ALIGNMENT: { value: 3333, writable: false, enumerable: true, configurable: false, },
        MAX_TEXTURE_SIZE: { value: 3379, writable: false, enumerable: true, configurable: false, },
        MAX_VIEWPORT_DIMS: { value: 3386, writable: false, enumerable: true, configurable: false, },
        SUBPIXEL_BITS: { value: 3408, writable: false, enumerable: true, configurable: false, },
        RED_BITS: { value: 3410, writable: false, enumerable: true, configurable: false, },
        GREEN_BITS: { value: 3411, writable: false, enumerable: true, configurable: false, },
        BLUE_BITS: { value: 3412, writable: false, enumerable: true, configurable: false, },
        ALPHA_BITS: { value: 3413, writable: false, enumerable: true, configurable: false, },
        DEPTH_BITS: { value: 3414, writable: false, enumerable: true, configurable: false, },
        STENCIL_BITS: { value: 3415, writable: false, enumerable: true, configurable: false, },
        POLYGON_OFFSET_UNITS: { value: 10752, writable: false, enumerable: true, configurable: false, },
        POLYGON_OFFSET_FACTOR: { value: 32824, writable: false, enumerable: true, configurable: false, },
        TEXTURE_BINDING_2D: { value: 32873, writable: false, enumerable: true, configurable: false, },
        SAMPLE_BUFFERS: { value: 32936, writable: false, enumerable: true, configurable: false, },
        SAMPLES: { value: 32937, writable: false, enumerable: true, configurable: false, },
        SAMPLE_COVERAGE_VALUE: { value: 32938, writable: false, enumerable: true, configurable: false, },
        SAMPLE_COVERAGE_INVERT: { value: 32939, writable: false, enumerable: true, configurable: false, },
        COMPRESSED_TEXTURE_FORMATS: { value: 34467, writable: false, enumerable: true, configurable: false, },
        DONT_CARE: { value: 4352, writable: false, enumerable: true, configurable: false, },
        FASTEST: { value: 4353, writable: false, enumerable: true, configurable: false, },
        NICEST: { value: 4354, writable: false, enumerable: true, configurable: false, },
        GENERATE_MIPMAP_HINT: { value: 33170, writable: false, enumerable: true, configurable: false, },
        BYTE: { value: 5120, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_BYTE: { value: 5121, writable: false, enumerable: true, configurable: false, },
        SHORT: { value: 5122, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_SHORT: { value: 5123, writable: false, enumerable: true, configurable: false, },
        INT: { value: 5124, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT: { value: 5125, writable: false, enumerable: true, configurable: false, },
        FLOAT: { value: 5126, writable: false, enumerable: true, configurable: false, },
        DEPTH_COMPONENT: { value: 6402, writable: false, enumerable: true, configurable: false, },
        ALPHA: { value: 6406, writable: false, enumerable: true, configurable: false, },
        RGB: { value: 6407, writable: false, enumerable: true, configurable: false, },
        RGBA: { value: 6408, writable: false, enumerable: true, configurable: false, },
        LUMINANCE: { value: 6409, writable: false, enumerable: true, configurable: false, },
        LUMINANCE_ALPHA: { value: 6410, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_SHORT_4_4_4_4: { value: 32819, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_SHORT_5_5_5_1: { value: 32820, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_SHORT_5_6_5: { value: 33635, writable: false, enumerable: true, configurable: false, },
        FRAGMENT_SHADER: { value: 35632, writable: false, enumerable: true, configurable: false, },
        VERTEX_SHADER: { value: 35633, writable: false, enumerable: true, configurable: false, },
        MAX_VERTEX_ATTRIBS: { value: 34921, writable: false, enumerable: true, configurable: false, },
        MAX_VERTEX_UNIFORM_VECTORS: { value: 36347, writable: false, enumerable: true, configurable: false, },
        MAX_VARYING_VECTORS: { value: 36348, writable: false, enumerable: true, configurable: false, },
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: { value: 35661, writable: false, enumerable: true, configurable: false, },
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: { value: 35660, writable: false, enumerable: true, configurable: false, },
        MAX_TEXTURE_IMAGE_UNITS: { value: 34930, writable: false, enumerable: true, configurable: false, },
        MAX_FRAGMENT_UNIFORM_VECTORS: { value: 36349, writable: false, enumerable: true, configurable: false, },
        SHADER_TYPE: { value: 35663, writable: false, enumerable: true, configurable: false, },
        DELETE_STATUS: { value: 35712, writable: false, enumerable: true, configurable: false, },
        LINK_STATUS: { value: 35714, writable: false, enumerable: true, configurable: false, },
        VALIDATE_STATUS: { value: 35715, writable: false, enumerable: true, configurable: false, },
        ATTACHED_SHADERS: { value: 35717, writable: false, enumerable: true, configurable: false, },
        ACTIVE_UNIFORMS: { value: 35718, writable: false, enumerable: true, configurable: false, },
        ACTIVE_ATTRIBUTES: { value: 35721, writable: false, enumerable: true, configurable: false, },
        SHADING_LANGUAGE_VERSION: { value: 35724, writable: false, enumerable: true, configurable: false, },
        CURRENT_PROGRAM: { value: 35725, writable: false, enumerable: true, configurable: false, },
        NEVER: { value: 512, writable: false, enumerable: true, configurable: false, },
        LESS: { value: 513, writable: false, enumerable: true, configurable: false, },
        EQUAL: { value: 514, writable: false, enumerable: true, configurable: false, },
        LEQUAL: { value: 515, writable: false, enumerable: true, configurable: false, },
        GREATER: { value: 516, writable: false, enumerable: true, configurable: false, },
        NOTEQUAL: { value: 517, writable: false, enumerable: true, configurable: false, },
        GEQUAL: { value: 518, writable: false, enumerable: true, configurable: false, },
        ALWAYS: { value: 519, writable: false, enumerable: true, configurable: false, },
        KEEP: { value: 7680, writable: false, enumerable: true, configurable: false, },
        REPLACE: { value: 7681, writable: false, enumerable: true, configurable: false, },
        INCR: { value: 7682, writable: false, enumerable: true, configurable: false, },
        DECR: { value: 7683, writable: false, enumerable: true, configurable: false, },
        INVERT: { value: 5386, writable: false, enumerable: true, configurable: false, },
        INCR_WRAP: { value: 34055, writable: false, enumerable: true, configurable: false, },
        DECR_WRAP: { value: 34056, writable: false, enumerable: true, configurable: false, },
        VENDOR: { value: 7936, writable: false, enumerable: true, configurable: false, },
        RENDERER: { value: 7937, writable: false, enumerable: true, configurable: false, },
        VERSION: { value: 7938, writable: false, enumerable: true, configurable: false, },
        NEAREST: { value: 9728, writable: false, enumerable: true, configurable: false, },
        LINEAR: { value: 9729, writable: false, enumerable: true, configurable: false, },
        NEAREST_MIPMAP_NEAREST: { value: 9984, writable: false, enumerable: true, configurable: false, },
        LINEAR_MIPMAP_NEAREST: { value: 9985, writable: false, enumerable: true, configurable: false, },
        NEAREST_MIPMAP_LINEAR: { value: 9986, writable: false, enumerable: true, configurable: false, },
        LINEAR_MIPMAP_LINEAR: { value: 9987, writable: false, enumerable: true, configurable: false, },
        TEXTURE_MAG_FILTER: { value: 10240, writable: false, enumerable: true, configurable: false, },
        TEXTURE_MIN_FILTER: { value: 10241, writable: false, enumerable: true, configurable: false, },
        TEXTURE_WRAP_S: { value: 10242, writable: false, enumerable: true, configurable: false, },
        TEXTURE_WRAP_T: { value: 10243, writable: false, enumerable: true, configurable: false, },
        TEXTURE: { value: 5890, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP: { value: 34067, writable: false, enumerable: true, configurable: false, },
        TEXTURE_BINDING_CUBE_MAP: { value: 34068, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP_POSITIVE_X: { value: 34069, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP_NEGATIVE_X: { value: 34070, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP_POSITIVE_Y: { value: 34071, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP_NEGATIVE_Y: { value: 34072, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP_POSITIVE_Z: { value: 34073, writable: false, enumerable: true, configurable: false, },
        TEXTURE_CUBE_MAP_NEGATIVE_Z: { value: 34074, writable: false, enumerable: true, configurable: false, },
        MAX_CUBE_MAP_TEXTURE_SIZE: { value: 34076, writable: false, enumerable: true, configurable: false, },
        TEXTURE0: { value: 33984, writable: false, enumerable: true, configurable: false, },
        TEXTURE1: { value: 33985, writable: false, enumerable: true, configurable: false, },
        TEXTURE2: { value: 33986, writable: false, enumerable: true, configurable: false, },
        TEXTURE3: { value: 33987, writable: false, enumerable: true, configurable: false, },
        TEXTURE4: { value: 33988, writable: false, enumerable: true, configurable: false, },
        TEXTURE5: { value: 33989, writable: false, enumerable: true, configurable: false, },
        TEXTURE6: { value: 33990, writable: false, enumerable: true, configurable: false, },
        TEXTURE7: { value: 33991, writable: false, enumerable: true, configurable: false, },
        TEXTURE8: { value: 33992, writable: false, enumerable: true, configurable: false, },
        TEXTURE9: { value: 33993, writable: false, enumerable: true, configurable: false, },
        TEXTURE10: { value: 33994, writable: false, enumerable: true, configurable: false, },
        TEXTURE11: { value: 33995, writable: false, enumerable: true, configurable: false, },
        TEXTURE12: { value: 33996, writable: false, enumerable: true, configurable: false, },
        TEXTURE13: { value: 33997, writable: false, enumerable: true, configurable: false, },
        TEXTURE14: { value: 33998, writable: false, enumerable: true, configurable: false, },
        TEXTURE15: { value: 33999, writable: false, enumerable: true, configurable: false, },
        TEXTURE16: { value: 34000, writable: false, enumerable: true, configurable: false, },
        TEXTURE17: { value: 34001, writable: false, enumerable: true, configurable: false, },
        TEXTURE18: { value: 34002, writable: false, enumerable: true, configurable: false, },
        TEXTURE19: { value: 34003, writable: false, enumerable: true, configurable: false, },
        TEXTURE20: { value: 34004, writable: false, enumerable: true, configurable: false, },
        TEXTURE21: { value: 34005, writable: false, enumerable: true, configurable: false, },
        TEXTURE22: { value: 34006, writable: false, enumerable: true, configurable: false, },
        TEXTURE23: { value: 34007, writable: false, enumerable: true, configurable: false, },
        TEXTURE24: { value: 34008, writable: false, enumerable: true, configurable: false, },
        TEXTURE25: { value: 34009, writable: false, enumerable: true, configurable: false, },
        TEXTURE26: { value: 34010, writable: false, enumerable: true, configurable: false, },
        TEXTURE27: { value: 34011, writable: false, enumerable: true, configurable: false, },
        TEXTURE28: { value: 34012, writable: false, enumerable: true, configurable: false, },
        TEXTURE29: { value: 34013, writable: false, enumerable: true, configurable: false, },
        TEXTURE30: { value: 34014, writable: false, enumerable: true, configurable: false, },
        TEXTURE31: { value: 34015, writable: false, enumerable: true, configurable: false, },
        ACTIVE_TEXTURE: { value: 34016, writable: false, enumerable: true, configurable: false, },
        REPEAT: { value: 10497, writable: false, enumerable: true, configurable: false, },
        CLAMP_TO_EDGE: { value: 33071, writable: false, enumerable: true, configurable: false, },
        MIRRORED_REPEAT: { value: 33648, writable: false, enumerable: true, configurable: false, },
        FLOAT_VEC2: { value: 35664, writable: false, enumerable: true, configurable: false, },
        FLOAT_VEC3: { value: 35665, writable: false, enumerable: true, configurable: false, },
        FLOAT_VEC4: { value: 35666, writable: false, enumerable: true, configurable: false, },
        INT_VEC2: { value: 35667, writable: false, enumerable: true, configurable: false, },
        INT_VEC3: { value: 35668, writable: false, enumerable: true, configurable: false, },
        INT_VEC4: { value: 35669, writable: false, enumerable: true, configurable: false, },
        BOOL: { value: 35670, writable: false, enumerable: true, configurable: false, },
        BOOL_VEC2: { value: 35671, writable: false, enumerable: true, configurable: false, },
        BOOL_VEC3: { value: 35672, writable: false, enumerable: true, configurable: false, },
        BOOL_VEC4: { value: 35673, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT2: { value: 35674, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT3: { value: 35675, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT4: { value: 35676, writable: false, enumerable: true, configurable: false, },
        SAMPLER_2D: { value: 35678, writable: false, enumerable: true, configurable: false, },
        SAMPLER_CUBE: { value: 35680, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_ENABLED: { value: 34338, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_SIZE: { value: 34339, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_STRIDE: { value: 34340, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_TYPE: { value: 34341, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_NORMALIZED: { value: 34922, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_POINTER: { value: 34373, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: { value: 34975, writable: false, enumerable: true, configurable: false, },
        IMPLEMENTATION_COLOR_READ_TYPE: { value: 35738, writable: false, enumerable: true, configurable: false, },
        IMPLEMENTATION_COLOR_READ_FORMAT: { value: 35739, writable: false, enumerable: true, configurable: false, },
        COMPILE_STATUS: { value: 35713, writable: false, enumerable: true, configurable: false, },
        LOW_FLOAT: { value: 36336, writable: false, enumerable: true, configurable: false, },
        MEDIUM_FLOAT: { value: 36337, writable: false, enumerable: true, configurable: false, },
        HIGH_FLOAT: { value: 36338, writable: false, enumerable: true, configurable: false, },
        LOW_INT: { value: 36339, writable: false, enumerable: true, configurable: false, },
        MEDIUM_INT: { value: 36340, writable: false, enumerable: true, configurable: false, },
        HIGH_INT: { value: 36341, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER: { value: 36160, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER: { value: 36161, writable: false, enumerable: true, configurable: false, },
        RGBA4: { value: 32854, writable: false, enumerable: true, configurable: false, },
        RGB5_A1: { value: 32855, writable: false, enumerable: true, configurable: false, },
        RGB565: { value: 36194, writable: false, enumerable: true, configurable: false, },
        DEPTH_COMPONENT16: { value: 33189, writable: false, enumerable: true, configurable: false, },
        STENCIL_INDEX8: { value: 36168, writable: false, enumerable: true, configurable: false, },
        DEPTH_STENCIL: { value: 34041, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_WIDTH: { value: 36162, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_HEIGHT: { value: 36163, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_INTERNAL_FORMAT: { value: 36164, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_RED_SIZE: { value: 36176, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_GREEN_SIZE: { value: 36177, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_BLUE_SIZE: { value: 36178, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_ALPHA_SIZE: { value: 36179, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_DEPTH_SIZE: { value: 36180, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_STENCIL_SIZE: { value: 36181, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: { value: 36048, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: { value: 36049, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: { value: 36050, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: { value: 36051, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT0: { value: 36064, writable: false, enumerable: true, configurable: false, },
        DEPTH_ATTACHMENT: { value: 36096, writable: false, enumerable: true, configurable: false, },
        STENCIL_ATTACHMENT: { value: 36128, writable: false, enumerable: true, configurable: false, },
        DEPTH_STENCIL_ATTACHMENT: { value: 33306, writable: false, enumerable: true, configurable: false, },
        NONE: { value: 0, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_COMPLETE: { value: 36053, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: { value: 36054, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: { value: 36055, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: { value: 36057, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_UNSUPPORTED: { value: 36061, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_BINDING: { value: 36006, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_BINDING: { value: 36007, writable: false, enumerable: true, configurable: false, },
        MAX_RENDERBUFFER_SIZE: { value: 34024, writable: false, enumerable: true, configurable: false, },
        INVALID_FRAMEBUFFER_OPERATION: { value: 1286, writable: false, enumerable: true, configurable: false, },
        UNPACK_FLIP_Y_WEBGL: { value: 37440, writable: false, enumerable: true, configurable: false, },
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: { value: 37441, writable: false, enumerable: true, configurable: false, },
        CONTEXT_LOST_WEBGL: { value: 37442, writable: false, enumerable: true, configurable: false, },
        UNPACK_COLORSPACE_CONVERSION_WEBGL: { value: 37443, writable: false, enumerable: true, configurable: false, },
        BROWSER_DEFAULT_WEBGL: { value: 37444, writable: false, enumerable: true, configurable: false, },
        activeTexture: {
            value: rsvm.RsCreateAction("activeTexture", 1, function activeTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        attachShader: {
            value: rsvm.RsCreateAction("attachShader", 2, function attachShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindAttribLocation: {
            value: rsvm.RsCreateAction("bindAttribLocation", 3, function bindAttribLocation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindRenderbuffer: {
            value: rsvm.RsCreateAction("bindRenderbuffer", 2, function bindRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blendColor: {
            value: rsvm.RsCreateAction("blendColor", 4, function blendColor() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blendEquation: {
            value: rsvm.RsCreateAction("blendEquation", 1, function blendEquation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blendEquationSeparate: {
            value: rsvm.RsCreateAction("blendEquationSeparate", 2, function blendEquationSeparate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blendFunc: {
            value: rsvm.RsCreateAction("blendFunc", 2, function blendFunc() {
            }), writable: true, enumerable: true, configurable: true,
        },
        blendFuncSeparate: {
            value: rsvm.RsCreateAction("blendFuncSeparate", 4, function blendFuncSeparate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bufferData: {
            value: rsvm.RsCreateAction("bufferData", 3, function bufferData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bufferSubData: {
            value: rsvm.RsCreateAction("bufferSubData", 3, function bufferSubData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        checkFramebufferStatus: {
            value: rsvm.RsCreateAction("checkFramebufferStatus", 1, function checkFramebufferStatus() {
            }), writable: true, enumerable: true, configurable: true,
        },
        compileShader: {
            value: rsvm.RsCreateAction("compileShader", 1, function compileShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        compressedTexImage2D: {
            value: rsvm.RsCreateAction("compressedTexImage2D", 7, function compressedTexImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        compressedTexSubImage2D: {
            value: rsvm.RsCreateAction("compressedTexSubImage2D", 8, function compressedTexSubImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        copyTexImage2D: {
            value: rsvm.RsCreateAction("copyTexImage2D", 8, function copyTexImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        copyTexSubImage2D: {
            value: rsvm.RsCreateAction("copyTexSubImage2D", 8, function copyTexSubImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createBuffer: {
            value: rsvm.RsCreateAction("createBuffer", 0, function createBuffer() {
                return rsvm.prototype.WebGLBuffer.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createFramebuffer: {
            value: rsvm.RsCreateAction("createFramebuffer", 0, function createFramebuffer() {
                return rsvm.prototype.WebGLFramebuffer.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createProgram: {
            value: rsvm.RsCreateAction("createProgram", 0, function createProgram() {
                return rsvm.prototype.WebGLProgram.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createRenderbuffer: {
            value: rsvm.RsCreateAction("createRenderbuffer", 0, function createRenderbuffer() {
                return rsvm.prototype.WebGLRenderbuffer.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createShader: {
            value: rsvm.RsCreateAction("createShader", 1, function createShader() {
                if (WebGLRenderingContext.prototype.VERTEX_SHADER === arguments[0] ||
                    WebGLRenderingContext.prototype.FRAGMENT_SHADER === arguments[0]) {
                    return rsvm.prototype.WebGLShader.new();
                }
                return null;
            }), writable: true, enumerable: true, configurable: true,
        },
        createTexture: {
            value: rsvm.RsCreateAction("createTexture", 0, function createTexture() {
                return rsvm.prototype.WebGLTexture.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        cullFace: {
            value: rsvm.RsCreateAction("cullFace", 1, function cullFace() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteBuffer: {
            value: rsvm.RsCreateAction("deleteBuffer", 1, function deleteBuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteFramebuffer: {
            value: rsvm.RsCreateAction("deleteFramebuffer", 1, function deleteFramebuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteProgram: {
            value: rsvm.RsCreateAction("deleteProgram", 1, function deleteProgram() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteRenderbuffer: {
            value: rsvm.RsCreateAction("deleteRenderbuffer", 1, function deleteRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteShader: {
            value: rsvm.RsCreateAction("deleteShader", 1, function deleteShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteTexture: {
            value: rsvm.RsCreateAction("deleteTexture", 1, function deleteTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        depthFunc: {
            value: rsvm.RsCreateAction("depthFunc", 1, function depthFunc() {
            }), writable: true, enumerable: true, configurable: true,
        },
        depthMask: {
            value: rsvm.RsCreateAction("depthMask", 1, function depthMask() {
            }), writable: true, enumerable: true, configurable: true,
        },
        depthRange: {
            value: rsvm.RsCreateAction("depthRange", 2, function depthRange() {
            }), writable: true, enumerable: true, configurable: true,
        },
        detachShader: {
            value: rsvm.RsCreateAction("detachShader", 2, function detachShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        disable: {
            value: rsvm.RsCreateAction("disable", 1, function disable() {
            }), writable: true, enumerable: true, configurable: true,
        },
        enable: {
            value: rsvm.RsCreateAction("enable", 1, function enable() {
            }), writable: true, enumerable: true, configurable: true,
        },
        finish: {
            value: rsvm.RsCreateAction("finish", 0, function finish() {
            }), writable: true, enumerable: true, configurable: true,
        },
        flush: {
            value: rsvm.RsCreateAction("flush", 0, function flush() {
            }), writable: true, enumerable: true, configurable: true,
        },
        framebufferRenderbuffer: {
            value: rsvm.RsCreateAction("framebufferRenderbuffer", 4, function framebufferRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        framebufferTexture2D: {
            value: rsvm.RsCreateAction("framebufferTexture2D", 5, function framebufferTexture2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        frontFace: {
            value: rsvm.RsCreateAction("frontFace", 1, function frontFace() {
            }), writable: true, enumerable: true, configurable: true,
        },
        generateMipmap: {
            value: rsvm.RsCreateAction("generateMipmap", 1, function generateMipmap() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getActiveAttrib: {
            value: rsvm.RsCreateAction("getActiveAttrib", 2, function getActiveAttrib() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getActiveUniform: {
            value: rsvm.RsCreateAction("getActiveUniform", 2, function getActiveUniform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttachedShaders: {
            value: rsvm.RsCreateAction("getAttachedShaders", 1, function getAttachedShaders() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttribLocation: {
            value: rsvm.RsCreateAction("getAttribLocation", 2, function getAttribLocation() {
                return 0;
            }), writable: true, enumerable: true, configurable: true,
        },
        getBufferParameter: {
            value: rsvm.RsCreateAction("getBufferParameter", 2, function getBufferParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getContextAttributes: {
            value: rsvm.RsCreateAction("getContextAttributes", 0, function getContextAttributes() {
                return {
                    alpha: true,
                    antialias: true,
                    depth: true,
                    desynchronized: false,
                    failIfMajorPerformanceCaveat: false,
                    powerPreference: "default",
                    premultipliedAlpha: true,
                    preserveDrawingBuffer: false,
                    stencil: false,
                    xrCompatible: false,
                };
            }), writable: true, enumerable: true, configurable: true,
        },
        getError: {
            value: rsvm.RsCreateAction("getError", 0, function getError() {
                return 0;
            }), writable: true, enumerable: true, configurable: true,
        },
        getExtension: {
            value: rsvm.RsCreateAction("getExtension", 1, function getExtension() {
                switch (arguments[0]) {
                    case "ANGLE_instanced_arrays":
                        return rsvm.prototype.ANGLEInstancedArrays.new();
                    case "EXT_blend_minmax":
                        return rsvm.prototype.EXTBlendMinMax.new();
                    case "EXT_color_buffer_half_float":
                        return rsvm.prototype.EXTColorBufferHalfFloat.new();
                    case "EXT_disjoint_timer_query":
                        return rsvm.prototype.EXTDisjointTimerQuery.new();
                    case "EXT_float_blend":
                        return rsvm.prototype.EXTFloatBlend.new();
                    case "EXT_frag_depth":
                        return rsvm.prototype.EXTFragDepth.new();
                    case "EXT_shader_texture_lod":
                        return rsvm.prototype.EXTShaderTextureLOD.new();
                    case "EXT_texture_compression_bptc":
                        return rsvm.prototype.EXTTextureCompressionBPTC.new();
                    case "EXT_texture_compression_rgtc":
                        return rsvm.prototype.EXTTextureCompressionRGTC.new();
                    case "EXT_texture_filter_anisotropic":
                        return rsvm.prototype.EXTTextureFilterAnisotropic.new();
                    case "EXT_sRGB":
                        return rsvm.prototype.EXTsRGB.new();
                    case "KHR_parallel_shader_compile":
                        return rsvm.prototype.KHRParallelShaderCompile.new();
                    case "OES_element_index_uint":
                        return rsvm.prototype.OESElementIndexUint.new();
                    case "OES_fbo_render_mipmap":
                        return rsvm.prototype.OESFboRenderMipmap.new();
                    case "OES_standard_derivatives":
                        return rsvm.prototype.OESStandardDerivatives.new();
                    case "OES_texture_float":
                        return rsvm.prototype.OESTextureFloat.new();
                    case "OES_texture_float_linear":
                        return rsvm.prototype.OESTextureFloatLinear.new();
                    case "OES_texture_half_float":
                        return rsvm.prototype.OESTextureHalfFloat.new();
                    case "OES_texture_half_float_linear":
                        return rsvm.prototype.OESTextureHalfFloatLinear.new();
                    case "OES_vertex_array_object":
                        return rsvm.prototype.OESVertexArrayObject.new();
                    case "WEBGL_color_buffer_float":
                        return rsvm.prototype.WebGLColorBufferFloat.new();
                    case "WEBGL_compressed_texture_s3tc":
                        return rsvm.prototype.WebGLCompressedTextureS3TC.new();
                    case "WEBGL_compressed_texture_s3tc_srgb":
                        return rsvm.prototype.WebGLCompressedTextureS3TCsRGB.new();
                    case "WEBGL_debug_renderer_info":
                        return rsvm.prototype.WebGLDebugRendererInfo.new();
                    case "WEBGL_debug_shaders":
                        return rsvm.prototype.WebGLDebugShaders.new();
                    case "WEBGL_depth_texture":
                        return rsvm.prototype.WebGLDepthTexture.new();
                    case "WEBGL_draw_buffers":
                        return rsvm.prototype.WebGLDrawBuffers.new();
                    case "WEBGL_lose_context":
                        return rsvm.prototype.WebGLLoseContext.new();
                    case "WEBGL_multi_draw":
                        return rsvm.prototype.WebGLMultiDraw.new();
                };
            }), writable: true, enumerable: true, configurable: true,
        },
        getFramebufferAttachmentParameter: {
            value: rsvm.RsCreateAction("getFramebufferAttachmentParameter", 3, function getFramebufferAttachmentParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getParameter: {
            value: rsvm.RsCreateAction("getParameter", 1, function getParameter() {
                switch (arguments[0]) {
                    case 34047:
                        return 16;
                    case 37446:
                        return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Ti (0x000024C9) Direct3D11 vs_5_0 ps_5_0, D3D11)';
                    case 37445:
                        return 'Google Inc. (NVIDIA)';
                    case 32777:
                        return 32774;
                    case 32777:
                        return 32774;
                    case 34877:
                        return 32774;
                    case 32968:
                        return 0;
                    case 32969:
                        return 1;
                    case 32970:
                        return 0;
                    case 32971:
                        return 1;
                    case 32773:
                        var ary = new Float32Array(4);
                        ary[0] = 0;
                        ary[1] = 0;
                        ary[2] = 0;
                        ary[3] = 0;
                        return ary;
                    case 2849:
                        return 1;
                    case 33901:
                        var ary = new Float32Array(2);
                        ary[0] = 1;
                        ary[1] = 1024;
                        return ary;
                    case 33902:
                        var ary = new Float32Array(2);
                        ary[0] = 1;
                        ary[1] = 1;
                        return ary;
                    case 2885:
                        return 1029;
                    case 2886:
                        return 2305;
                    case 2928:
                        var ary = new Float32Array(2);
                        ary[0] = 0;
                        ary[1] = 1;
                        return ary;
                    case 2931:
                        return 1;
                    case 2932:
                        return 513;
                    case 2961:
                        return 0;
                    case 2962:
                        return 519;
                    case 2964:
                        return 7680;
                    case 2965:
                        return 7680;
                    case 2966:
                        return 7680;
                    case 2967:
                        return 0;
                    case 2963:
                        return 2147483647;
                    case 2968:
                        return 2147483647;
                    case 34816:
                        return 519;
                    case 34817:
                        return 7680;
                    case 34818:
                        return 7680;
                    case 34819:
                        return 7680;
                    case 36003:
                        return 0;
                    case 36004:
                        return 2147483647;
                    case 36005:
                        return 2147483647;
                    case 2978:
                        var ary = new Int32Array(4);
                        ary[0] = 0;
                        ary[1] = 0;
                        ary[2] = 300;
                        ary[3] = 150;
                        return ary;
                    case 3088:
                        var ary = new Int32Array(4);
                        ary[0] = 0;
                        ary[1] = 0;
                        ary[2] = 300;
                        ary[3] = 150;
                        return ary;
                    case 3106:
                        var ary = new Float32Array(4);
                        ary[0] = 0;
                        ary[1] = 0;
                        ary[2] = 0;
                        ary[3] = 0;
                        return ary;
                    case 3107:
                        var ary = new Array(4);
                        ary[0] = true;
                        ary[1] = true;
                        ary[2] = true;
                        ary[3] = true;
                        return ary;
                    case 3317:
                        return 4;
                    case 3333:
                        return 4;
                    case 3379:
                        return 16384;
                    case 3386:
                        var ary = new Int32Array(2);
                        ary[0] = 32767;
                        ary[1] = 32767;
                        return ary;
                    case 3408:
                        return 4;
                    case 3410:
                        return 8;
                    case 3411:
                        return 8;
                    case 3412:
                        return 8;
                    case 3413:
                        return 8;
                    case 3414:
                        return 24;
                    case 3415:
                        return 0;
                    case 10752:
                        return 0;
                    case 32824:
                        return 0;
                    case 32936:
                        return 1;
                    case 32937:
                        return 4;
                    case 32938:
                        return 1;
                    case 34467:
                        var ary = new Uint32Array(0);
                        return ary;
                    case 33170:
                        return 4352;
                    case 34921:
                        return 16;
                    case 36347:
                        return 4095;
                    case 36348:
                        return 30;
                    case 35661:
                        return 32;
                    case 35660:
                        return 16;
                    case 34930:
                        return 16;
                    case 36349:
                        return 1024;
                    case 35724:
                        return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)";
                    case 7936:
                        return "WebKit";
                    case 7937:
                        return "WebKit WebGL";
                    case 7938:
                        return "WebGL 1.0 (OpenGL ES 2.0 Chromium)";
                    case 34076:
                        return 16384;
                    case 34016:
                        return 33984;
                    case 35738:
                        return 5121;
                    case 35739:
                        return 6408;
                    case 34024:
                        return 16384;
                    case 37443:
                        return 37444;
                    default:
                        return null;
                }
            }), writable: true, enumerable: true, configurable: true,
        },
        getProgramInfoLog: {
            value: rsvm.RsCreateAction("getProgramInfoLog", 1, function getProgramInfoLog() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getProgramParameter: {
            value: rsvm.RsCreateAction("getProgramParameter", 2, function getProgramParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getRenderbufferParameter: {
            value: rsvm.RsCreateAction("getRenderbufferParameter", 2, function getRenderbufferParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getShaderInfoLog: {
            value: rsvm.RsCreateAction("getShaderInfoLog", 1, function getShaderInfoLog() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getShaderParameter: {
            value: rsvm.RsCreateAction("getShaderParameter", 2, function getShaderParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getShaderPrecisionFormat: {
            value: rsvm.RsCreateAction("getShaderPrecisionFormat", 2, function getShaderPrecisionFormat() {
                let target = rsvm.prototype.WebGLShaderPrecisionFormat.new();
                if (arguments[0] == 35633 && arguments[1] == 36338) {
                    rsvm.set(target, "precision", 23);
                    rsvm.set(target, "rangeMax", 127);
                    rsvm.set(target, "rangeMin", 127);
                    return target;
                } else if (arguments[0] == 35633 && arguments[1] == 36337) {
                    rsvm.set(target, "precision", 23);
                    rsvm.set(target, "rangeMax", 127);
                    rsvm.set(target, "rangeMin", 127);
                    return target;
                } else if (arguments[0] == 35633 && arguments[1] == 36336) {
                    rsvm.set(target, "precision", 23);
                    rsvm.set(target, "rangeMax", 127);
                    rsvm.set(target, "rangeMin", 127);
                    return target;
                } else if (arguments[0] == 35632 && arguments[1] == 36338) {
                    rsvm.set(target, "precision", 23);
                    rsvm.set(target, "rangeMax", 127);
                    rsvm.set(target, "rangeMin", 127);
                    return target;
                } else if (arguments[0] == 35632 && arguments[1] == 36337) {
                    rsvm.set(target, "precision", 23);
                    rsvm.set(target, "rangeMax", 127);
                    rsvm.set(target, "rangeMin", 127);
                    return target;
                } else if (arguments[0] == 35632 && arguments[1] == 36336) {
                    rsvm.set(target, "precision", 23);
                    rsvm.set(target, "rangeMax", 127);
                    rsvm.set(target, "rangeMin", 127);
                    return target;
                } else if (arguments[0] == 35633 && arguments[1] == 36341) {
                    rsvm.set(target, "precision", 0);
                    rsvm.set(target, "rangeMax", 30);
                    rsvm.set(target, "rangeMin", 31);
                    return target;
                } else if (arguments[0] == 35633 && arguments[1] == 36340) {
                    rsvm.set(target, "precision", 0);
                    rsvm.set(target, "rangeMax", 30);
                    rsvm.set(target, "rangeMin", 31);
                    return target;
                } else if (arguments[0] == 35633 && arguments[1] == 36339) {
                    rsvm.set(target, "precision", 0);
                    rsvm.set(target, "rangeMax", 30);
                    rsvm.set(target, "rangeMin", 31);
                    return target;
                } else if (arguments[0] == 35632 && arguments[1] == 36341) {
                    rsvm.set(target, "precision", 0);
                    rsvm.set(target, "rangeMax", 30);
                    rsvm.set(target, "rangeMin", 31);
                    return target;
                } else if (arguments[0] == 35632 && arguments[1] == 36340) {
                    rsvm.set(target, "precision", 0);
                    rsvm.set(target, "rangeMax", 30);
                    rsvm.set(target, "rangeMin", 31);
                    return target;
                } else if (arguments[0] == 35632 && arguments[1] == 36339) {
                    rsvm.set(target, "precision", 0);
                    rsvm.set(target, "rangeMax", 30);
                    rsvm.set(target, "rangeMin", 31);
                    return target;
                }
                return target;
            }), writable: true, enumerable: true, configurable: true,
        },
        getShaderSource: {
            value: rsvm.RsCreateAction("getShaderSource", 1, function getShaderSource() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSupportedExtensions: {
            value: rsvm.RsCreateAction("getSupportedExtensions", 0, function getSupportedExtensions() {
                return ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth", "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "EXT_sRGB", "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBGL_multi_draw"];
            }), writable: true, enumerable: true, configurable: true,
        },
        getTexParameter: {
            value: rsvm.RsCreateAction("getTexParameter", 2, function getTexParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getUniform: {
            value: rsvm.RsCreateAction("getUniform", 2, function getUniform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getUniformLocation: {
            value: rsvm.RsCreateAction("getUniformLocation", 2, function getUniformLocation() {
                return rsvm.prototype.WebGLUniformLocation.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        getVertexAttrib: {
            value: rsvm.RsCreateAction("getVertexAttrib", 2, function getVertexAttrib() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getVertexAttribOffset: {
            value: rsvm.RsCreateAction("getVertexAttribOffset", 2, function getVertexAttribOffset() {
            }), writable: true, enumerable: true, configurable: true,
        },
        hint: {
            value: rsvm.RsCreateAction("hint", 2, function hint() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isBuffer: {
            value: rsvm.RsCreateAction("isBuffer", 1, function isBuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isContextLost: {
            value: rsvm.RsCreateAction("isContextLost", 0, function isContextLost() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isEnabled: {
            value: rsvm.RsCreateAction("isEnabled", 1, function isEnabled() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isFramebuffer: {
            value: rsvm.RsCreateAction("isFramebuffer", 1, function isFramebuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isProgram: {
            value: rsvm.RsCreateAction("isProgram", 1, function isProgram() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isRenderbuffer: {
            value: rsvm.RsCreateAction("isRenderbuffer", 1, function isRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isShader: {
            value: rsvm.RsCreateAction("isShader", 1, function isShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isTexture: {
            value: rsvm.RsCreateAction("isTexture", 1, function isTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        lineWidth: {
            value: rsvm.RsCreateAction("lineWidth", 1, function lineWidth() {
            }), writable: true, enumerable: true, configurable: true,
        },
        linkProgram: {
            value: rsvm.RsCreateAction("linkProgram", 1, function linkProgram() {
            }), writable: true, enumerable: true, configurable: true,
        },
        pixelStorei: {
            value: rsvm.RsCreateAction("pixelStorei", 2, function pixelStorei() {
            }), writable: true, enumerable: true, configurable: true,
        },
        polygonOffset: {
            value: rsvm.RsCreateAction("polygonOffset", 2, function polygonOffset() {
            }), writable: true, enumerable: true, configurable: true,
        },
        readPixels: {
            value: rsvm.RsCreateAction("readPixels", 7, function readPixels() {
            }), writable: true, enumerable: true, configurable: true,
        },
        renderbufferStorage: {
            value: rsvm.RsCreateAction("renderbufferStorage", 4, function renderbufferStorage() {
            }), writable: true, enumerable: true, configurable: true,
        },
        sampleCoverage: {
            value: rsvm.RsCreateAction("sampleCoverage", 2, function sampleCoverage() {
            }), writable: true, enumerable: true, configurable: true,
        },
        shaderSource: {
            value: rsvm.RsCreateAction("shaderSource", 2, function shaderSource() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stencilFunc: {
            value: rsvm.RsCreateAction("stencilFunc", 3, function stencilFunc() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stencilFuncSeparate: {
            value: rsvm.RsCreateAction("stencilFuncSeparate", 4, function stencilFuncSeparate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stencilMask: {
            value: rsvm.RsCreateAction("stencilMask", 1, function stencilMask() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stencilMaskSeparate: {
            value: rsvm.RsCreateAction("stencilMaskSeparate", 2, function stencilMaskSeparate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stencilOp: {
            value: rsvm.RsCreateAction("stencilOp", 3, function stencilOp() {
            }), writable: true, enumerable: true, configurable: true,
        },
        stencilOpSeparate: {
            value: rsvm.RsCreateAction("stencilOpSeparate", 4, function stencilOpSeparate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texImage2D: {
            value: rsvm.RsCreateAction("texImage2D", 6, function texImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texParameterf: {
            value: rsvm.RsCreateAction("texParameterf", 3, function texParameterf() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texParameteri: {
            value: rsvm.RsCreateAction("texParameteri", 3, function texParameteri() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texSubImage2D: {
            value: rsvm.RsCreateAction("texSubImage2D", 7, function texSubImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        useProgram: {
            value: rsvm.RsCreateAction("useProgram", 1, function useProgram() {
            }), writable: true, enumerable: true, configurable: true,
        },
        validateProgram: {
            value: rsvm.RsCreateAction("validateProgram", 1, function validateProgram() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindBuffer: {
            value: rsvm.RsCreateAction("bindBuffer", 2, function bindBuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindFramebuffer: {
            value: rsvm.RsCreateAction("bindFramebuffer", 2, function bindFramebuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindTexture: {
            value: rsvm.RsCreateAction("bindTexture", 2, function bindTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clear: {
            value: rsvm.RsCreateAction("clear", 1, function clear() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearColor: {
            value: rsvm.RsCreateAction("clearColor", 4, function clearColor() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearDepth: {
            value: rsvm.RsCreateAction("clearDepth", 1, function clearDepth() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearStencil: {
            value: rsvm.RsCreateAction("clearStencil", 1, function clearStencil() {
            }), writable: true, enumerable: true, configurable: true,
        },
        colorMask: {
            value: rsvm.RsCreateAction("colorMask", 4, function colorMask() {
            }), writable: true, enumerable: true, configurable: true,
        },
        disableVertexAttribArray: {
            value: rsvm.RsCreateAction("disableVertexAttribArray", 1, function disableVertexAttribArray() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawArrays: {
            value: rsvm.RsCreateAction("drawArrays", 3, function drawArrays() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawElements: {
            value: rsvm.RsCreateAction("drawElements", 4, function drawElements() {
            }), writable: true, enumerable: true, configurable: true,
        },
        enableVertexAttribArray: {
            value: rsvm.RsCreateAction("enableVertexAttribArray", 1, function enableVertexAttribArray() {
            }), writable: true, enumerable: true, configurable: true,
        },
        scissor: {
            value: rsvm.RsCreateAction("scissor", 4, function scissor() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform1f: {
            value: rsvm.RsCreateAction("uniform1f", 2, function uniform1f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform1fv: {
            value: rsvm.RsCreateAction("uniform1fv", 2, function uniform1fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform1i: {
            value: rsvm.RsCreateAction("uniform1i", 2, function uniform1i() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform1iv: {
            value: rsvm.RsCreateAction("uniform1iv", 2, function uniform1iv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform2f: {
            value: rsvm.RsCreateAction("uniform2f", 3, function uniform2f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform2fv: {
            value: rsvm.RsCreateAction("uniform2fv", 2, function uniform2fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform2i: {
            value: rsvm.RsCreateAction("uniform2i", 3, function uniform2i() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform2iv: {
            value: rsvm.RsCreateAction("uniform2iv", 2, function uniform2iv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform3f: {
            value: rsvm.RsCreateAction("uniform3f", 4, function uniform3f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform3fv: {
            value: rsvm.RsCreateAction("uniform3fv", 2, function uniform3fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform3i: {
            value: rsvm.RsCreateAction("uniform3i", 4, function uniform3i() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform3iv: {
            value: rsvm.RsCreateAction("uniform3iv", 2, function uniform3iv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform4f: {
            value: rsvm.RsCreateAction("uniform4f", 5, function uniform4f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform4fv: {
            value: rsvm.RsCreateAction("uniform4fv", 2, function uniform4fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform4i: {
            value: rsvm.RsCreateAction("uniform4i", 5, function uniform4i() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform4iv: {
            value: rsvm.RsCreateAction("uniform4iv", 2, function uniform4iv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix2fv: {
            value: rsvm.RsCreateAction("uniformMatrix2fv", 3, function uniformMatrix2fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix3fv: {
            value: rsvm.RsCreateAction("uniformMatrix3fv", 3, function uniformMatrix3fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix4fv: {
            value: rsvm.RsCreateAction("uniformMatrix4fv", 3, function uniformMatrix4fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib1f: {
            value: rsvm.RsCreateAction("vertexAttrib1f", 2, function vertexAttrib1f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib1fv: {
            value: rsvm.RsCreateAction("vertexAttrib1fv", 2, function vertexAttrib1fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib2f: {
            value: rsvm.RsCreateAction("vertexAttrib2f", 3, function vertexAttrib2f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib2fv: {
            value: rsvm.RsCreateAction("vertexAttrib2fv", 2, function vertexAttrib2fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib3f: {
            value: rsvm.RsCreateAction("vertexAttrib3f", 4, function vertexAttrib3f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib3fv: {
            value: rsvm.RsCreateAction("vertexAttrib3fv", 2, function vertexAttrib3fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib4f: {
            value: rsvm.RsCreateAction("vertexAttrib4f", 5, function vertexAttrib4f() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttrib4fv: {
            value: rsvm.RsCreateAction("vertexAttrib4fv", 2, function vertexAttrib4fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttribPointer: {
            value: rsvm.RsCreateAction("vertexAttribPointer", 6, function vertexAttribPointer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        viewport: {
            value: rsvm.RsCreateAction("viewport", 4, function viewport() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGLRenderingContext },
        makeXRCompatible: {
            value: rsvm.RsCreateAction("makeXRCompatible", 0, function makeXRCompatible() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "WebGLRenderingContext", writable: false, enumerable: false, configurable: true, },
    });
}();