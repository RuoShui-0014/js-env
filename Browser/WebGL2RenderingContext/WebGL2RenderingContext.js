!function () {
    Object.defineProperty(window, "WebGL2RenderingContext", {
        value: rsvm.RsCreateConstructor("WebGL2RenderingContext"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.WebGL2RenderingContext = {
        memory: {
            canvas: null,
            drawingBufferWidth: 300,
            drawingBufferHeight: 150,
            drawingBufferColorSpace: "srgb",
            unpackColorSpace: "srgb",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("WebGL2RenderingContext", target);
        },
        new(canvas) {
            let obj = rsvm.RsCreate(WebGL2RenderingContext.prototype);
            rsvm.set(obj, "canvas", canvas);
            return obj;
        },
    };

    Object.defineProperties(WebGL2RenderingContext, {
        prototype: { value: WebGL2RenderingContext.prototype, writable: false, enumerable: false, configurable: false },
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
        READ_BUFFER: { value: 3074, writable: false, enumerable: true, configurable: false },
        UNPACK_ROW_LENGTH: { value: 3314, writable: false, enumerable: true, configurable: false },
        UNPACK_SKIP_ROWS: { value: 3315, writable: false, enumerable: true, configurable: false },
        UNPACK_SKIP_PIXELS: { value: 3316, writable: false, enumerable: true, configurable: false },
        PACK_ROW_LENGTH: { value: 3330, writable: false, enumerable: true, configurable: false },
        PACK_SKIP_ROWS: { value: 3331, writable: false, enumerable: true, configurable: false },
        PACK_SKIP_PIXELS: { value: 3332, writable: false, enumerable: true, configurable: false },
        COLOR: { value: 6144, writable: false, enumerable: true, configurable: false },
        DEPTH: { value: 6145, writable: false, enumerable: true, configurable: false },
        STENCIL: { value: 6146, writable: false, enumerable: true, configurable: false },
        RED: { value: 6403, writable: false, enumerable: true, configurable: false },
        RGB8: { value: 32849, writable: false, enumerable: true, configurable: false },
        RGBA8: { value: 32856, writable: false, enumerable: true, configurable: false },
        RGB10_A2: { value: 32857, writable: false, enumerable: true, configurable: false },
        TEXTURE_BINDING_3D: { value: 32874, writable: false, enumerable: true, configurable: false },
        UNPACK_SKIP_IMAGES: { value: 32877, writable: false, enumerable: true, configurable: false },
        UNPACK_IMAGE_HEIGHT: { value: 32878, writable: false, enumerable: true, configurable: false },
        TEXTURE_3D: { value: 32879, writable: false, enumerable: true, configurable: false },
        TEXTURE_WRAP_R: { value: 32882, writable: false, enumerable: true, configurable: false },
        MAX_3D_TEXTURE_SIZE: { value: 32883, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_2_10_10_10_REV: { value: 33640, writable: false, enumerable: true, configurable: false },
        MAX_ELEMENTS_VERTICES: { value: 33000, writable: false, enumerable: true, configurable: false },
        MAX_ELEMENTS_INDICES: { value: 33001, writable: false, enumerable: true, configurable: false },
        TEXTURE_MIN_LOD: { value: 33082, writable: false, enumerable: true, configurable: false },
        TEXTURE_MAX_LOD: { value: 33083, writable: false, enumerable: true, configurable: false },
        TEXTURE_BASE_LEVEL: { value: 33084, writable: false, enumerable: true, configurable: false },
        TEXTURE_MAX_LEVEL: { value: 33085, writable: false, enumerable: true, configurable: false },
        MIN: { value: 32775, writable: false, enumerable: true, configurable: false },
        MAX: { value: 32776, writable: false, enumerable: true, configurable: false },
        DEPTH_COMPONENT24: { value: 33190, writable: false, enumerable: true, configurable: false },
        MAX_TEXTURE_LOD_BIAS: { value: 34045, writable: false, enumerable: true, configurable: false },
        TEXTURE_COMPARE_MODE: { value: 34892, writable: false, enumerable: true, configurable: false },
        TEXTURE_COMPARE_FUNC: { value: 34893, writable: false, enumerable: true, configurable: false },
        CURRENT_QUERY: { value: 34917, writable: false, enumerable: true, configurable: false },
        QUERY_RESULT: { value: 34918, writable: false, enumerable: true, configurable: false },
        QUERY_RESULT_AVAILABLE: { value: 34919, writable: false, enumerable: true, configurable: false },
        STREAM_READ: { value: 35041, writable: false, enumerable: true, configurable: false },
        STREAM_COPY: { value: 35042, writable: false, enumerable: true, configurable: false },
        STATIC_READ: { value: 35045, writable: false, enumerable: true, configurable: false },
        STATIC_COPY: { value: 35046, writable: false, enumerable: true, configurable: false },
        DYNAMIC_READ: { value: 35049, writable: false, enumerable: true, configurable: false },
        DYNAMIC_COPY: { value: 35050, writable: false, enumerable: true, configurable: false },
        MAX_DRAW_BUFFERS: { value: 34852, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER0: { value: 34853, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER1: { value: 34854, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER2: { value: 34855, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER3: { value: 34856, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER4: { value: 34857, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER5: { value: 34858, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER6: { value: 34859, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER7: { value: 34860, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER8: { value: 34861, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER9: { value: 34862, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER10: { value: 34863, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER11: { value: 34864, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER12: { value: 34865, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER13: { value: 34866, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER14: { value: 34867, writable: false, enumerable: true, configurable: false },
        DRAW_BUFFER15: { value: 34868, writable: false, enumerable: true, configurable: false },
        MAX_FRAGMENT_UNIFORM_COMPONENTS: { value: 35657, writable: false, enumerable: true, configurable: false },
        MAX_VERTEX_UNIFORM_COMPONENTS: { value: 35658, writable: false, enumerable: true, configurable: false },
        SAMPLER_3D: { value: 35679, writable: false, enumerable: true, configurable: false },
        SAMPLER_2D_SHADOW: { value: 35682, writable: false, enumerable: true, configurable: false },
        FRAGMENT_SHADER_DERIVATIVE_HINT: { value: 35723, writable: false, enumerable: true, configurable: false },
        PIXEL_PACK_BUFFER: { value: 35051, writable: false, enumerable: true, configurable: false },
        PIXEL_UNPACK_BUFFER: { value: 35052, writable: false, enumerable: true, configurable: false },
        PIXEL_PACK_BUFFER_BINDING: { value: 35053, writable: false, enumerable: true, configurable: false },
        PIXEL_UNPACK_BUFFER_BINDING: { value: 35055, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT2x3: { value: 35685, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT2x4: { value: 35686, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT3x2: { value: 35687, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT3x4: { value: 35688, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT4x2: { value: 35689, writable: false, enumerable: true, configurable: false },
        FLOAT_MAT4x3: { value: 35690, writable: false, enumerable: true, configurable: false },
        SRGB: { value: 35904, writable: false, enumerable: true, configurable: false },
        SRGB8: { value: 35905, writable: false, enumerable: true, configurable: false },
        SRGB8_ALPHA8: { value: 35907, writable: false, enumerable: true, configurable: false },
        COMPARE_REF_TO_TEXTURE: { value: 34894, writable: false, enumerable: true, configurable: false },
        RGBA32F: { value: 34836, writable: false, enumerable: true, configurable: false },
        RGB32F: { value: 34837, writable: false, enumerable: true, configurable: false },
        RGBA16F: { value: 34842, writable: false, enumerable: true, configurable: false },
        RGB16F: { value: 34843, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_INTEGER: { value: 35069, writable: false, enumerable: true, configurable: false },
        MAX_ARRAY_TEXTURE_LAYERS: { value: 35071, writable: false, enumerable: true, configurable: false },
        MIN_PROGRAM_TEXEL_OFFSET: { value: 35076, writable: false, enumerable: true, configurable: false },
        MAX_PROGRAM_TEXEL_OFFSET: { value: 35077, writable: false, enumerable: true, configurable: false },
        MAX_VARYING_COMPONENTS: { value: 35659, writable: false, enumerable: true, configurable: false },
        TEXTURE_2D_ARRAY: { value: 35866, writable: false, enumerable: true, configurable: false },
        TEXTURE_BINDING_2D_ARRAY: { value: 35869, writable: false, enumerable: true, configurable: false },
        R11F_G11F_B10F: { value: 35898, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_10F_11F_11F_REV: { value: 35899, writable: false, enumerable: true, configurable: false },
        RGB9_E5: { value: 35901, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_5_9_9_9_REV: { value: 35902, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_BUFFER_MODE: { value: 35967, writable: false, enumerable: true, configurable: false },
        MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: { value: 35968, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_VARYINGS: { value: 35971, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_BUFFER_START: { value: 35972, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_BUFFER_SIZE: { value: 35973, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: { value: 35976, writable: false, enumerable: true, configurable: false },
        RASTERIZER_DISCARD: { value: 35977, writable: false, enumerable: true, configurable: false },
        MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: { value: 35978, writable: false, enumerable: true, configurable: false },
        MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: { value: 35979, writable: false, enumerable: true, configurable: false },
        INTERLEAVED_ATTRIBS: { value: 35980, writable: false, enumerable: true, configurable: false },
        SEPARATE_ATTRIBS: { value: 35981, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_BUFFER: { value: 35982, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_BUFFER_BINDING: { value: 35983, writable: false, enumerable: true, configurable: false },
        RGBA32UI: { value: 36208, writable: false, enumerable: true, configurable: false },
        RGB32UI: { value: 36209, writable: false, enumerable: true, configurable: false },
        RGBA16UI: { value: 36214, writable: false, enumerable: true, configurable: false },
        RGB16UI: { value: 36215, writable: false, enumerable: true, configurable: false },
        RGBA8UI: { value: 36220, writable: false, enumerable: true, configurable: false },
        RGB8UI: { value: 36221, writable: false, enumerable: true, configurable: false },
        RGBA32I: { value: 36226, writable: false, enumerable: true, configurable: false },
        RGB32I: { value: 36227, writable: false, enumerable: true, configurable: false },
        RGBA16I: { value: 36232, writable: false, enumerable: true, configurable: false },
        RGB16I: { value: 36233, writable: false, enumerable: true, configurable: false },
        RGBA8I: { value: 36238, writable: false, enumerable: true, configurable: false },
        RGB8I: { value: 36239, writable: false, enumerable: true, configurable: false },
        RED_INTEGER: { value: 36244, writable: false, enumerable: true, configurable: false },
        RGB_INTEGER: { value: 36248, writable: false, enumerable: true, configurable: false },
        RGBA_INTEGER: { value: 36249, writable: false, enumerable: true, configurable: false },
        SAMPLER_2D_ARRAY: { value: 36289, writable: false, enumerable: true, configurable: false },
        SAMPLER_2D_ARRAY_SHADOW: { value: 36292, writable: false, enumerable: true, configurable: false },
        SAMPLER_CUBE_SHADOW: { value: 36293, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_VEC2: { value: 36294, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_VEC3: { value: 36295, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_VEC4: { value: 36296, writable: false, enumerable: true, configurable: false },
        INT_SAMPLER_2D: { value: 36298, writable: false, enumerable: true, configurable: false },
        INT_SAMPLER_3D: { value: 36299, writable: false, enumerable: true, configurable: false },
        INT_SAMPLER_CUBE: { value: 36300, writable: false, enumerable: true, configurable: false },
        INT_SAMPLER_2D_ARRAY: { value: 36303, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_SAMPLER_2D: { value: 36306, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_SAMPLER_3D: { value: 36307, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_SAMPLER_CUBE: { value: 36308, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_SAMPLER_2D_ARRAY: { value: 36311, writable: false, enumerable: true, configurable: false },
        DEPTH_COMPONENT32F: { value: 36012, writable: false, enumerable: true, configurable: false },
        DEPTH32F_STENCIL8: { value: 36013, writable: false, enumerable: true, configurable: false },
        FLOAT_32_UNSIGNED_INT_24_8_REV: { value: 36269, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: { value: 33296, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: { value: 33297, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_RED_SIZE: { value: 33298, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: { value: 33299, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: { value: 33300, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: { value: 33301, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: { value: 33302, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: { value: 33303, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_DEFAULT: { value: 33304, writable: false, enumerable: true, configurable: false },
        UNSIGNED_INT_24_8: { value: 34042, writable: false, enumerable: true, configurable: false },
        DEPTH24_STENCIL8: { value: 35056, writable: false, enumerable: true, configurable: false },
        UNSIGNED_NORMALIZED: { value: 35863, writable: false, enumerable: true, configurable: false },
        DRAW_FRAMEBUFFER_BINDING: { value: 36006, writable: false, enumerable: true, configurable: false },
        READ_FRAMEBUFFER: { value: 36008, writable: false, enumerable: true, configurable: false },
        DRAW_FRAMEBUFFER: { value: 36009, writable: false, enumerable: true, configurable: false },
        READ_FRAMEBUFFER_BINDING: { value: 36010, writable: false, enumerable: true, configurable: false },
        RENDERBUFFER_SAMPLES: { value: 36011, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: { value: 36052, writable: false, enumerable: true, configurable: false },
        MAX_COLOR_ATTACHMENTS: { value: 36063, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT1: { value: 36065, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT2: { value: 36066, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT3: { value: 36067, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT4: { value: 36068, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT5: { value: 36069, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT6: { value: 36070, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT7: { value: 36071, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT8: { value: 36072, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT9: { value: 36073, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT10: { value: 36074, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT11: { value: 36075, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT12: { value: 36076, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT13: { value: 36077, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT14: { value: 36078, writable: false, enumerable: true, configurable: false },
        COLOR_ATTACHMENT15: { value: 36079, writable: false, enumerable: true, configurable: false },
        FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: { value: 36182, writable: false, enumerable: true, configurable: false },
        MAX_SAMPLES: { value: 36183, writable: false, enumerable: true, configurable: false },
        HALF_FLOAT: { value: 5131, writable: false, enumerable: true, configurable: false },
        RG: { value: 33319, writable: false, enumerable: true, configurable: false },
        RG_INTEGER: { value: 33320, writable: false, enumerable: true, configurable: false },
        R8: { value: 33321, writable: false, enumerable: true, configurable: false },
        RG8: { value: 33323, writable: false, enumerable: true, configurable: false },
        R16F: { value: 33325, writable: false, enumerable: true, configurable: false },
        R32F: { value: 33326, writable: false, enumerable: true, configurable: false },
        RG16F: { value: 33327, writable: false, enumerable: true, configurable: false },
        RG32F: { value: 33328, writable: false, enumerable: true, configurable: false },
        R8I: { value: 33329, writable: false, enumerable: true, configurable: false },
        R8UI: { value: 33330, writable: false, enumerable: true, configurable: false },
        R16I: { value: 33331, writable: false, enumerable: true, configurable: false },
        R16UI: { value: 33332, writable: false, enumerable: true, configurable: false },
        R32I: { value: 33333, writable: false, enumerable: true, configurable: false },
        R32UI: { value: 33334, writable: false, enumerable: true, configurable: false },
        RG8I: { value: 33335, writable: false, enumerable: true, configurable: false },
        RG8UI: { value: 33336, writable: false, enumerable: true, configurable: false },
        RG16I: { value: 33337, writable: false, enumerable: true, configurable: false },
        RG16UI: { value: 33338, writable: false, enumerable: true, configurable: false },
        RG32I: { value: 33339, writable: false, enumerable: true, configurable: false },
        RG32UI: { value: 33340, writable: false, enumerable: true, configurable: false },
        VERTEX_ARRAY_BINDING: { value: 34229, writable: false, enumerable: true, configurable: false },
        R8_SNORM: { value: 36756, writable: false, enumerable: true, configurable: false },
        RG8_SNORM: { value: 36757, writable: false, enumerable: true, configurable: false },
        RGB8_SNORM: { value: 36758, writable: false, enumerable: true, configurable: false },
        RGBA8_SNORM: { value: 36759, writable: false, enumerable: true, configurable: false },
        SIGNED_NORMALIZED: { value: 36764, writable: false, enumerable: true, configurable: false },
        COPY_READ_BUFFER: { value: 36662, writable: false, enumerable: true, configurable: false },
        COPY_WRITE_BUFFER: { value: 36663, writable: false, enumerable: true, configurable: false },
        COPY_READ_BUFFER_BINDING: { value: 36662, writable: false, enumerable: true, configurable: false },
        COPY_WRITE_BUFFER_BINDING: { value: 36663, writable: false, enumerable: true, configurable: false },
        UNIFORM_BUFFER: { value: 35345, writable: false, enumerable: true, configurable: false },
        UNIFORM_BUFFER_BINDING: { value: 35368, writable: false, enumerable: true, configurable: false },
        UNIFORM_BUFFER_START: { value: 35369, writable: false, enumerable: true, configurable: false },
        UNIFORM_BUFFER_SIZE: { value: 35370, writable: false, enumerable: true, configurable: false },
        MAX_VERTEX_UNIFORM_BLOCKS: { value: 35371, writable: false, enumerable: true, configurable: false },
        MAX_FRAGMENT_UNIFORM_BLOCKS: { value: 35373, writable: false, enumerable: true, configurable: false },
        MAX_COMBINED_UNIFORM_BLOCKS: { value: 35374, writable: false, enumerable: true, configurable: false },
        MAX_UNIFORM_BUFFER_BINDINGS: { value: 35375, writable: false, enumerable: true, configurable: false },
        MAX_UNIFORM_BLOCK_SIZE: { value: 35376, writable: false, enumerable: true, configurable: false },
        MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: { value: 35377, writable: false, enumerable: true, configurable: false },
        MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: { value: 35379, writable: false, enumerable: true, configurable: false },
        UNIFORM_BUFFER_OFFSET_ALIGNMENT: { value: 35380, writable: false, enumerable: true, configurable: false },
        ACTIVE_UNIFORM_BLOCKS: { value: 35382, writable: false, enumerable: true, configurable: false },
        UNIFORM_TYPE: { value: 35383, writable: false, enumerable: true, configurable: false },
        UNIFORM_SIZE: { value: 35384, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_INDEX: { value: 35386, writable: false, enumerable: true, configurable: false },
        UNIFORM_OFFSET: { value: 35387, writable: false, enumerable: true, configurable: false },
        UNIFORM_ARRAY_STRIDE: { value: 35388, writable: false, enumerable: true, configurable: false },
        UNIFORM_MATRIX_STRIDE: { value: 35389, writable: false, enumerable: true, configurable: false },
        UNIFORM_IS_ROW_MAJOR: { value: 35390, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_BINDING: { value: 35391, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_DATA_SIZE: { value: 35392, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_ACTIVE_UNIFORMS: { value: 35394, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: { value: 35395, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: { value: 35396, writable: false, enumerable: true, configurable: false },
        UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: { value: 35398, writable: false, enumerable: true, configurable: false },
        INVALID_INDEX: { value: 4294967295, writable: false, enumerable: true, configurable: false },
        MAX_VERTEX_OUTPUT_COMPONENTS: { value: 37154, writable: false, enumerable: true, configurable: false },
        MAX_FRAGMENT_INPUT_COMPONENTS: { value: 37157, writable: false, enumerable: true, configurable: false },
        MAX_SERVER_WAIT_TIMEOUT: { value: 37137, writable: false, enumerable: true, configurable: false },
        OBJECT_TYPE: { value: 37138, writable: false, enumerable: true, configurable: false },
        SYNC_CONDITION: { value: 37139, writable: false, enumerable: true, configurable: false },
        SYNC_STATUS: { value: 37140, writable: false, enumerable: true, configurable: false },
        SYNC_FLAGS: { value: 37141, writable: false, enumerable: true, configurable: false },
        SYNC_FENCE: { value: 37142, writable: false, enumerable: true, configurable: false },
        SYNC_GPU_COMMANDS_COMPLETE: { value: 37143, writable: false, enumerable: true, configurable: false },
        UNSIGNALED: { value: 37144, writable: false, enumerable: true, configurable: false },
        SIGNALED: { value: 37145, writable: false, enumerable: true, configurable: false },
        ALREADY_SIGNALED: { value: 37146, writable: false, enumerable: true, configurable: false },
        TIMEOUT_EXPIRED: { value: 37147, writable: false, enumerable: true, configurable: false },
        CONDITION_SATISFIED: { value: 37148, writable: false, enumerable: true, configurable: false },
        WAIT_FAILED: { value: 37149, writable: false, enumerable: true, configurable: false },
        SYNC_FLUSH_COMMANDS_BIT: { value: 1, writable: false, enumerable: true, configurable: false },
        VERTEX_ATTRIB_ARRAY_DIVISOR: { value: 35070, writable: false, enumerable: true, configurable: false },
        ANY_SAMPLES_PASSED: { value: 35887, writable: false, enumerable: true, configurable: false },
        ANY_SAMPLES_PASSED_CONSERVATIVE: { value: 36202, writable: false, enumerable: true, configurable: false },
        SAMPLER_BINDING: { value: 35097, writable: false, enumerable: true, configurable: false },
        RGB10_A2UI: { value: 36975, writable: false, enumerable: true, configurable: false },
        INT_2_10_10_10_REV: { value: 36255, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK: { value: 36386, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_PAUSED: { value: 36387, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_ACTIVE: { value: 36388, writable: false, enumerable: true, configurable: false },
        TRANSFORM_FEEDBACK_BINDING: { value: 36389, writable: false, enumerable: true, configurable: false },
        TEXTURE_IMMUTABLE_FORMAT: { value: 37167, writable: false, enumerable: true, configurable: false },
        MAX_ELEMENT_INDEX: { value: 36203, writable: false, enumerable: true, configurable: false },
        TEXTURE_IMMUTABLE_LEVELS: { value: 33503, writable: false, enumerable: true, configurable: false },
        TIMEOUT_IGNORED: { value: -1, writable: false, enumerable: true, configurable: false },
        MAX_CLIENT_WAIT_TIMEOUT_WEBGL: { value: 37447, writable: false, enumerable: true, configurable: false },
    });

    Object.defineProperties(WebGL2RenderingContext.prototype, {
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
        READ_BUFFER: { value: 3074, writable: false, enumerable: true, configurable: false, },
        UNPACK_ROW_LENGTH: { value: 3314, writable: false, enumerable: true, configurable: false, },
        UNPACK_SKIP_ROWS: { value: 3315, writable: false, enumerable: true, configurable: false, },
        UNPACK_SKIP_PIXELS: { value: 3316, writable: false, enumerable: true, configurable: false, },
        PACK_ROW_LENGTH: { value: 3330, writable: false, enumerable: true, configurable: false, },
        PACK_SKIP_ROWS: { value: 3331, writable: false, enumerable: true, configurable: false, },
        PACK_SKIP_PIXELS: { value: 3332, writable: false, enumerable: true, configurable: false, },
        COLOR: { value: 6144, writable: false, enumerable: true, configurable: false, },
        DEPTH: { value: 6145, writable: false, enumerable: true, configurable: false, },
        STENCIL: { value: 6146, writable: false, enumerable: true, configurable: false, },
        RED: { value: 6403, writable: false, enumerable: true, configurable: false, },
        RGB8: { value: 32849, writable: false, enumerable: true, configurable: false, },
        RGBA8: { value: 32856, writable: false, enumerable: true, configurable: false, },
        RGB10_A2: { value: 32857, writable: false, enumerable: true, configurable: false, },
        TEXTURE_BINDING_3D: { value: 32874, writable: false, enumerable: true, configurable: false, },
        UNPACK_SKIP_IMAGES: { value: 32877, writable: false, enumerable: true, configurable: false, },
        UNPACK_IMAGE_HEIGHT: { value: 32878, writable: false, enumerable: true, configurable: false, },
        TEXTURE_3D: { value: 32879, writable: false, enumerable: true, configurable: false, },
        TEXTURE_WRAP_R: { value: 32882, writable: false, enumerable: true, configurable: false, },
        MAX_3D_TEXTURE_SIZE: { value: 32883, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_2_10_10_10_REV: { value: 33640, writable: false, enumerable: true, configurable: false, },
        MAX_ELEMENTS_VERTICES: { value: 33000, writable: false, enumerable: true, configurable: false, },
        MAX_ELEMENTS_INDICES: { value: 33001, writable: false, enumerable: true, configurable: false, },
        TEXTURE_MIN_LOD: { value: 33082, writable: false, enumerable: true, configurable: false, },
        TEXTURE_MAX_LOD: { value: 33083, writable: false, enumerable: true, configurable: false, },
        TEXTURE_BASE_LEVEL: { value: 33084, writable: false, enumerable: true, configurable: false, },
        TEXTURE_MAX_LEVEL: { value: 33085, writable: false, enumerable: true, configurable: false, },
        MIN: { value: 32775, writable: false, enumerable: true, configurable: false, },
        MAX: { value: 32776, writable: false, enumerable: true, configurable: false, },
        DEPTH_COMPONENT24: { value: 33190, writable: false, enumerable: true, configurable: false, },
        MAX_TEXTURE_LOD_BIAS: { value: 34045, writable: false, enumerable: true, configurable: false, },
        TEXTURE_COMPARE_MODE: { value: 34892, writable: false, enumerable: true, configurable: false, },
        TEXTURE_COMPARE_FUNC: { value: 34893, writable: false, enumerable: true, configurable: false, },
        CURRENT_QUERY: { value: 34917, writable: false, enumerable: true, configurable: false, },
        QUERY_RESULT: { value: 34918, writable: false, enumerable: true, configurable: false, },
        QUERY_RESULT_AVAILABLE: { value: 34919, writable: false, enumerable: true, configurable: false, },
        STREAM_READ: { value: 35041, writable: false, enumerable: true, configurable: false, },
        STREAM_COPY: { value: 35042, writable: false, enumerable: true, configurable: false, },
        STATIC_READ: { value: 35045, writable: false, enumerable: true, configurable: false, },
        STATIC_COPY: { value: 35046, writable: false, enumerable: true, configurable: false, },
        DYNAMIC_READ: { value: 35049, writable: false, enumerable: true, configurable: false, },
        DYNAMIC_COPY: { value: 35050, writable: false, enumerable: true, configurable: false, },
        MAX_DRAW_BUFFERS: { value: 34852, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER0: { value: 34853, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER1: { value: 34854, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER2: { value: 34855, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER3: { value: 34856, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER4: { value: 34857, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER5: { value: 34858, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER6: { value: 34859, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER7: { value: 34860, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER8: { value: 34861, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER9: { value: 34862, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER10: { value: 34863, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER11: { value: 34864, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER12: { value: 34865, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER13: { value: 34866, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER14: { value: 34867, writable: false, enumerable: true, configurable: false, },
        DRAW_BUFFER15: { value: 34868, writable: false, enumerable: true, configurable: false, },
        MAX_FRAGMENT_UNIFORM_COMPONENTS: { value: 35657, writable: false, enumerable: true, configurable: false, },
        MAX_VERTEX_UNIFORM_COMPONENTS: { value: 35658, writable: false, enumerable: true, configurable: false, },
        SAMPLER_3D: { value: 35679, writable: false, enumerable: true, configurable: false, },
        SAMPLER_2D_SHADOW: { value: 35682, writable: false, enumerable: true, configurable: false, },
        FRAGMENT_SHADER_DERIVATIVE_HINT: { value: 35723, writable: false, enumerable: true, configurable: false, },
        PIXEL_PACK_BUFFER: { value: 35051, writable: false, enumerable: true, configurable: false, },
        PIXEL_UNPACK_BUFFER: { value: 35052, writable: false, enumerable: true, configurable: false, },
        PIXEL_PACK_BUFFER_BINDING: { value: 35053, writable: false, enumerable: true, configurable: false, },
        PIXEL_UNPACK_BUFFER_BINDING: { value: 35055, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT2x3: { value: 35685, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT2x4: { value: 35686, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT3x2: { value: 35687, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT3x4: { value: 35688, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT4x2: { value: 35689, writable: false, enumerable: true, configurable: false, },
        FLOAT_MAT4x3: { value: 35690, writable: false, enumerable: true, configurable: false, },
        SRGB: { value: 35904, writable: false, enumerable: true, configurable: false, },
        SRGB8: { value: 35905, writable: false, enumerable: true, configurable: false, },
        SRGB8_ALPHA8: { value: 35907, writable: false, enumerable: true, configurable: false, },
        COMPARE_REF_TO_TEXTURE: { value: 34894, writable: false, enumerable: true, configurable: false, },
        RGBA32F: { value: 34836, writable: false, enumerable: true, configurable: false, },
        RGB32F: { value: 34837, writable: false, enumerable: true, configurable: false, },
        RGBA16F: { value: 34842, writable: false, enumerable: true, configurable: false, },
        RGB16F: { value: 34843, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_INTEGER: { value: 35069, writable: false, enumerable: true, configurable: false, },
        MAX_ARRAY_TEXTURE_LAYERS: { value: 35071, writable: false, enumerable: true, configurable: false, },
        MIN_PROGRAM_TEXEL_OFFSET: { value: 35076, writable: false, enumerable: true, configurable: false, },
        MAX_PROGRAM_TEXEL_OFFSET: { value: 35077, writable: false, enumerable: true, configurable: false, },
        MAX_VARYING_COMPONENTS: { value: 35659, writable: false, enumerable: true, configurable: false, },
        TEXTURE_2D_ARRAY: { value: 35866, writable: false, enumerable: true, configurable: false, },
        TEXTURE_BINDING_2D_ARRAY: { value: 35869, writable: false, enumerable: true, configurable: false, },
        R11F_G11F_B10F: { value: 35898, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_10F_11F_11F_REV: { value: 35899, writable: false, enumerable: true, configurable: false, },
        RGB9_E5: { value: 35901, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_5_9_9_9_REV: { value: 35902, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_BUFFER_MODE: { value: 35967, writable: false, enumerable: true, configurable: false, },
        MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: { value: 35968, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_VARYINGS: { value: 35971, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_BUFFER_START: { value: 35972, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_BUFFER_SIZE: { value: 35973, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: { value: 35976, writable: false, enumerable: true, configurable: false, },
        RASTERIZER_DISCARD: { value: 35977, writable: false, enumerable: true, configurable: false, },
        MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: { value: 35978, writable: false, enumerable: true, configurable: false, },
        MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: { value: 35979, writable: false, enumerable: true, configurable: false, },
        INTERLEAVED_ATTRIBS: { value: 35980, writable: false, enumerable: true, configurable: false, },
        SEPARATE_ATTRIBS: { value: 35981, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_BUFFER: { value: 35982, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_BUFFER_BINDING: { value: 35983, writable: false, enumerable: true, configurable: false, },
        RGBA32UI: { value: 36208, writable: false, enumerable: true, configurable: false, },
        RGB32UI: { value: 36209, writable: false, enumerable: true, configurable: false, },
        RGBA16UI: { value: 36214, writable: false, enumerable: true, configurable: false, },
        RGB16UI: { value: 36215, writable: false, enumerable: true, configurable: false, },
        RGBA8UI: { value: 36220, writable: false, enumerable: true, configurable: false, },
        RGB8UI: { value: 36221, writable: false, enumerable: true, configurable: false, },
        RGBA32I: { value: 36226, writable: false, enumerable: true, configurable: false, },
        RGB32I: { value: 36227, writable: false, enumerable: true, configurable: false, },
        RGBA16I: { value: 36232, writable: false, enumerable: true, configurable: false, },
        RGB16I: { value: 36233, writable: false, enumerable: true, configurable: false, },
        RGBA8I: { value: 36238, writable: false, enumerable: true, configurable: false, },
        RGB8I: { value: 36239, writable: false, enumerable: true, configurable: false, },
        RED_INTEGER: { value: 36244, writable: false, enumerable: true, configurable: false, },
        RGB_INTEGER: { value: 36248, writable: false, enumerable: true, configurable: false, },
        RGBA_INTEGER: { value: 36249, writable: false, enumerable: true, configurable: false, },
        SAMPLER_2D_ARRAY: { value: 36289, writable: false, enumerable: true, configurable: false, },
        SAMPLER_2D_ARRAY_SHADOW: { value: 36292, writable: false, enumerable: true, configurable: false, },
        SAMPLER_CUBE_SHADOW: { value: 36293, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_VEC2: { value: 36294, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_VEC3: { value: 36295, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_VEC4: { value: 36296, writable: false, enumerable: true, configurable: false, },
        INT_SAMPLER_2D: { value: 36298, writable: false, enumerable: true, configurable: false, },
        INT_SAMPLER_3D: { value: 36299, writable: false, enumerable: true, configurable: false, },
        INT_SAMPLER_CUBE: { value: 36300, writable: false, enumerable: true, configurable: false, },
        INT_SAMPLER_2D_ARRAY: { value: 36303, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_SAMPLER_2D: { value: 36306, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_SAMPLER_3D: { value: 36307, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_SAMPLER_CUBE: { value: 36308, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_SAMPLER_2D_ARRAY: { value: 36311, writable: false, enumerable: true, configurable: false, },
        DEPTH_COMPONENT32F: { value: 36012, writable: false, enumerable: true, configurable: false, },
        DEPTH32F_STENCIL8: { value: 36013, writable: false, enumerable: true, configurable: false, },
        FLOAT_32_UNSIGNED_INT_24_8_REV: { value: 36269, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: { value: 33296, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: { value: 33297, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_RED_SIZE: { value: 33298, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: { value: 33299, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: { value: 33300, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: { value: 33301, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: { value: 33302, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: { value: 33303, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_DEFAULT: { value: 33304, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_INT_24_8: { value: 34042, writable: false, enumerable: true, configurable: false, },
        DEPTH24_STENCIL8: { value: 35056, writable: false, enumerable: true, configurable: false, },
        UNSIGNED_NORMALIZED: { value: 35863, writable: false, enumerable: true, configurable: false, },
        DRAW_FRAMEBUFFER_BINDING: { value: 36006, writable: false, enumerable: true, configurable: false, },
        READ_FRAMEBUFFER: { value: 36008, writable: false, enumerable: true, configurable: false, },
        DRAW_FRAMEBUFFER: { value: 36009, writable: false, enumerable: true, configurable: false, },
        READ_FRAMEBUFFER_BINDING: { value: 36010, writable: false, enumerable: true, configurable: false, },
        RENDERBUFFER_SAMPLES: { value: 36011, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: { value: 36052, writable: false, enumerable: true, configurable: false, },
        MAX_COLOR_ATTACHMENTS: { value: 36063, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT1: { value: 36065, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT2: { value: 36066, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT3: { value: 36067, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT4: { value: 36068, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT5: { value: 36069, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT6: { value: 36070, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT7: { value: 36071, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT8: { value: 36072, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT9: { value: 36073, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT10: { value: 36074, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT11: { value: 36075, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT12: { value: 36076, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT13: { value: 36077, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT14: { value: 36078, writable: false, enumerable: true, configurable: false, },
        COLOR_ATTACHMENT15: { value: 36079, writable: false, enumerable: true, configurable: false, },
        FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: { value: 36182, writable: false, enumerable: true, configurable: false, },
        MAX_SAMPLES: { value: 36183, writable: false, enumerable: true, configurable: false, },
        HALF_FLOAT: { value: 5131, writable: false, enumerable: true, configurable: false, },
        RG: { value: 33319, writable: false, enumerable: true, configurable: false, },
        RG_INTEGER: { value: 33320, writable: false, enumerable: true, configurable: false, },
        R8: { value: 33321, writable: false, enumerable: true, configurable: false, },
        RG8: { value: 33323, writable: false, enumerable: true, configurable: false, },
        R16F: { value: 33325, writable: false, enumerable: true, configurable: false, },
        R32F: { value: 33326, writable: false, enumerable: true, configurable: false, },
        RG16F: { value: 33327, writable: false, enumerable: true, configurable: false, },
        RG32F: { value: 33328, writable: false, enumerable: true, configurable: false, },
        R8I: { value: 33329, writable: false, enumerable: true, configurable: false, },
        R8UI: { value: 33330, writable: false, enumerable: true, configurable: false, },
        R16I: { value: 33331, writable: false, enumerable: true, configurable: false, },
        R16UI: { value: 33332, writable: false, enumerable: true, configurable: false, },
        R32I: { value: 33333, writable: false, enumerable: true, configurable: false, },
        R32UI: { value: 33334, writable: false, enumerable: true, configurable: false, },
        RG8I: { value: 33335, writable: false, enumerable: true, configurable: false, },
        RG8UI: { value: 33336, writable: false, enumerable: true, configurable: false, },
        RG16I: { value: 33337, writable: false, enumerable: true, configurable: false, },
        RG16UI: { value: 33338, writable: false, enumerable: true, configurable: false, },
        RG32I: { value: 33339, writable: false, enumerable: true, configurable: false, },
        RG32UI: { value: 33340, writable: false, enumerable: true, configurable: false, },
        VERTEX_ARRAY_BINDING: { value: 34229, writable: false, enumerable: true, configurable: false, },
        R8_SNORM: { value: 36756, writable: false, enumerable: true, configurable: false, },
        RG8_SNORM: { value: 36757, writable: false, enumerable: true, configurable: false, },
        RGB8_SNORM: { value: 36758, writable: false, enumerable: true, configurable: false, },
        RGBA8_SNORM: { value: 36759, writable: false, enumerable: true, configurable: false, },
        SIGNED_NORMALIZED: { value: 36764, writable: false, enumerable: true, configurable: false, },
        COPY_READ_BUFFER: { value: 36662, writable: false, enumerable: true, configurable: false, },
        COPY_WRITE_BUFFER: { value: 36663, writable: false, enumerable: true, configurable: false, },
        COPY_READ_BUFFER_BINDING: { value: 36662, writable: false, enumerable: true, configurable: false, },
        COPY_WRITE_BUFFER_BINDING: { value: 36663, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BUFFER: { value: 35345, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BUFFER_BINDING: { value: 35368, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BUFFER_START: { value: 35369, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BUFFER_SIZE: { value: 35370, writable: false, enumerable: true, configurable: false, },
        MAX_VERTEX_UNIFORM_BLOCKS: { value: 35371, writable: false, enumerable: true, configurable: false, },
        MAX_FRAGMENT_UNIFORM_BLOCKS: { value: 35373, writable: false, enumerable: true, configurable: false, },
        MAX_COMBINED_UNIFORM_BLOCKS: { value: 35374, writable: false, enumerable: true, configurable: false, },
        MAX_UNIFORM_BUFFER_BINDINGS: { value: 35375, writable: false, enumerable: true, configurable: false, },
        MAX_UNIFORM_BLOCK_SIZE: { value: 35376, writable: false, enumerable: true, configurable: false, },
        MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: { value: 35377, writable: false, enumerable: true, configurable: false, },
        MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: { value: 35379, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BUFFER_OFFSET_ALIGNMENT: { value: 35380, writable: false, enumerable: true, configurable: false, },
        ACTIVE_UNIFORM_BLOCKS: { value: 35382, writable: false, enumerable: true, configurable: false, },
        UNIFORM_TYPE: { value: 35383, writable: false, enumerable: true, configurable: false, },
        UNIFORM_SIZE: { value: 35384, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_INDEX: { value: 35386, writable: false, enumerable: true, configurable: false, },
        UNIFORM_OFFSET: { value: 35387, writable: false, enumerable: true, configurable: false, },
        UNIFORM_ARRAY_STRIDE: { value: 35388, writable: false, enumerable: true, configurable: false, },
        UNIFORM_MATRIX_STRIDE: { value: 35389, writable: false, enumerable: true, configurable: false, },
        UNIFORM_IS_ROW_MAJOR: { value: 35390, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_BINDING: { value: 35391, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_DATA_SIZE: { value: 35392, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_ACTIVE_UNIFORMS: { value: 35394, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: { value: 35395, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: { value: 35396, writable: false, enumerable: true, configurable: false, },
        UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: { value: 35398, writable: false, enumerable: true, configurable: false, },
        INVALID_INDEX: { value: 4294967295, writable: false, enumerable: true, configurable: false, },
        MAX_VERTEX_OUTPUT_COMPONENTS: { value: 37154, writable: false, enumerable: true, configurable: false, },
        MAX_FRAGMENT_INPUT_COMPONENTS: { value: 37157, writable: false, enumerable: true, configurable: false, },
        MAX_SERVER_WAIT_TIMEOUT: { value: 37137, writable: false, enumerable: true, configurable: false, },
        OBJECT_TYPE: { value: 37138, writable: false, enumerable: true, configurable: false, },
        SYNC_CONDITION: { value: 37139, writable: false, enumerable: true, configurable: false, },
        SYNC_STATUS: { value: 37140, writable: false, enumerable: true, configurable: false, },
        SYNC_FLAGS: { value: 37141, writable: false, enumerable: true, configurable: false, },
        SYNC_FENCE: { value: 37142, writable: false, enumerable: true, configurable: false, },
        SYNC_GPU_COMMANDS_COMPLETE: { value: 37143, writable: false, enumerable: true, configurable: false, },
        UNSIGNALED: { value: 37144, writable: false, enumerable: true, configurable: false, },
        SIGNALED: { value: 37145, writable: false, enumerable: true, configurable: false, },
        ALREADY_SIGNALED: { value: 37146, writable: false, enumerable: true, configurable: false, },
        TIMEOUT_EXPIRED: { value: 37147, writable: false, enumerable: true, configurable: false, },
        CONDITION_SATISFIED: { value: 37148, writable: false, enumerable: true, configurable: false, },
        WAIT_FAILED: { value: 37149, writable: false, enumerable: true, configurable: false, },
        SYNC_FLUSH_COMMANDS_BIT: { value: 1, writable: false, enumerable: true, configurable: false, },
        VERTEX_ATTRIB_ARRAY_DIVISOR: { value: 35070, writable: false, enumerable: true, configurable: false, },
        ANY_SAMPLES_PASSED: { value: 35887, writable: false, enumerable: true, configurable: false, },
        ANY_SAMPLES_PASSED_CONSERVATIVE: { value: 36202, writable: false, enumerable: true, configurable: false, },
        SAMPLER_BINDING: { value: 35097, writable: false, enumerable: true, configurable: false, },
        RGB10_A2UI: { value: 36975, writable: false, enumerable: true, configurable: false, },
        INT_2_10_10_10_REV: { value: 36255, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK: { value: 36386, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_PAUSED: { value: 36387, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_ACTIVE: { value: 36388, writable: false, enumerable: true, configurable: false, },
        TRANSFORM_FEEDBACK_BINDING: { value: 36389, writable: false, enumerable: true, configurable: false, },
        TEXTURE_IMMUTABLE_FORMAT: { value: 37167, writable: false, enumerable: true, configurable: false, },
        MAX_ELEMENT_INDEX: { value: 36203, writable: false, enumerable: true, configurable: false, },
        TEXTURE_IMMUTABLE_LEVELS: { value: 33503, writable: false, enumerable: true, configurable: false, },
        TIMEOUT_IGNORED: { value: -1, writable: false, enumerable: true, configurable: false, },
        MAX_CLIENT_WAIT_TIMEOUT_WEBGL: { value: 37447, writable: false, enumerable: true, configurable: false, },
        activeTexture: {
            value: rsvm.RsCreateAction("activeTexture", 1, function activeTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        attachShader: {
            value: rsvm.RsCreateAction("attachShader", 2, function attachShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        beginQuery: {
            value: rsvm.RsCreateAction("beginQuery", 2, function beginQuery() {
            }), writable: true, enumerable: true, configurable: true,
        },
        beginTransformFeedback: {
            value: rsvm.RsCreateAction("beginTransformFeedback", 1, function beginTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindAttribLocation: {
            value: rsvm.RsCreateAction("bindAttribLocation", 3, function bindAttribLocation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindBufferBase: {
            value: rsvm.RsCreateAction("bindBufferBase", 3, function bindBufferBase() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindBufferRange: {
            value: rsvm.RsCreateAction("bindBufferRange", 5, function bindBufferRange() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindRenderbuffer: {
            value: rsvm.RsCreateAction("bindRenderbuffer", 2, function bindRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindSampler: {
            value: rsvm.RsCreateAction("bindSampler", 2, function bindSampler() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindTransformFeedback: {
            value: rsvm.RsCreateAction("bindTransformFeedback", 2, function bindTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        bindVertexArray: {
            value: rsvm.RsCreateAction("bindVertexArray", 1, function bindVertexArray() {
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
        blitFramebuffer: {
            value: rsvm.RsCreateAction("blitFramebuffer", 10, function blitFramebuffer() {
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
        clientWaitSync: {
            value: rsvm.RsCreateAction("clientWaitSync", 3, function clientWaitSync() {
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
        compressedTexImage3D: {
            value: rsvm.RsCreateAction("compressedTexImage3D", 8, function compressedTexImage3D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        compressedTexSubImage2D: {
            value: rsvm.RsCreateAction("compressedTexSubImage2D", 8, function compressedTexSubImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        compressedTexSubImage3D: {
            value: rsvm.RsCreateAction("compressedTexSubImage3D", 10, function compressedTexSubImage3D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        copyBufferSubData: {
            value: rsvm.RsCreateAction("copyBufferSubData", 5, function copyBufferSubData() {
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
        copyTexSubImage3D: {
            value: rsvm.RsCreateAction("copyTexSubImage3D", 9, function copyTexSubImage3D() {
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
        createQuery: {
            value: rsvm.RsCreateAction("createQuery", 0, function createQuery() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createRenderbuffer: {
            value: rsvm.RsCreateAction("createRenderbuffer", 0, function createRenderbuffer() {
                return rsvm.prototype.WebGLRenderbuffer.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createSampler: {
            value: rsvm.RsCreateAction("createSampler", 0, function createSampler() {
                return rsvm.prototype.WebGLRenderbuffer.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createShader: {
            value: rsvm.RsCreateAction("createShader", 1, function createShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createTexture: {
            value: rsvm.RsCreateAction("createTexture", 0, function createTexture() {
                return rsvm.prototype.WebGLTexture.new();
            }), writable: true, enumerable: true, configurable: true,
        },
        createTransformFeedback: {
            value: rsvm.RsCreateAction("createTransformFeedback", 0, function createTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createVertexArray: {
            value: rsvm.RsCreateAction("createVertexArray", 0, function createVertexArray() {
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
        deleteQuery: {
            value: rsvm.RsCreateAction("deleteQuery", 1, function deleteQuery() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteRenderbuffer: {
            value: rsvm.RsCreateAction("deleteRenderbuffer", 1, function deleteRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteSampler: {
            value: rsvm.RsCreateAction("deleteSampler", 1, function deleteSampler() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteShader: {
            value: rsvm.RsCreateAction("deleteShader", 1, function deleteShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteSync: {
            value: rsvm.RsCreateAction("deleteSync", 1, function deleteSync() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteTexture: {
            value: rsvm.RsCreateAction("deleteTexture", 1, function deleteTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteTransformFeedback: {
            value: rsvm.RsCreateAction("deleteTransformFeedback", 1, function deleteTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        deleteVertexArray: {
            value: rsvm.RsCreateAction("deleteVertexArray", 1, function deleteVertexArray() {
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
        drawArraysInstanced: {
            value: rsvm.RsCreateAction("drawArraysInstanced", 4, function drawArraysInstanced() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawElementsInstanced: {
            value: rsvm.RsCreateAction("drawElementsInstanced", 5, function drawElementsInstanced() {
            }), writable: true, enumerable: true, configurable: true,
        },
        drawRangeElements: {
            value: rsvm.RsCreateAction("drawRangeElements", 6, function drawRangeElements() {
            }), writable: true, enumerable: true, configurable: true,
        },
        enable: {
            value: rsvm.RsCreateAction("enable", 1, function enable() {
            }), writable: true, enumerable: true, configurable: true,
        },
        endQuery: {
            value: rsvm.RsCreateAction("endQuery", 1, function endQuery() {
            }), writable: true, enumerable: true, configurable: true,
        },
        endTransformFeedback: {
            value: rsvm.RsCreateAction("endTransformFeedback", 0, function endTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        fenceSync: {
            value: rsvm.RsCreateAction("fenceSync", 2, function fenceSync() {
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
        framebufferTextureLayer: {
            value: rsvm.RsCreateAction("framebufferTextureLayer", 5, function framebufferTextureLayer() {
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
        getActiveUniformBlockName: {
            value: rsvm.RsCreateAction("getActiveUniformBlockName", 2, function getActiveUniformBlockName() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getActiveUniformBlockParameter: {
            value: rsvm.RsCreateAction("getActiveUniformBlockParameter", 3, function getActiveUniformBlockParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getActiveUniforms: {
            value: rsvm.RsCreateAction("getActiveUniforms", 3, function getActiveUniforms() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttachedShaders: {
            value: rsvm.RsCreateAction("getAttachedShaders", 1, function getAttachedShaders() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getAttribLocation: {
            value: rsvm.RsCreateAction("getAttribLocation", 2, function getAttribLocation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getBufferParameter: {
            value: rsvm.RsCreateAction("getBufferParameter", 2, function getBufferParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getBufferSubData: {
            value: rsvm.RsCreateAction("getBufferSubData", 3, function getBufferSubData() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getContextAttributes: {
            value: rsvm.RsCreateAction("getContextAttributes", 0, function getContextAttributes() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getError: {
            value: rsvm.RsCreateAction("getError", 0, function getError() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getExtension: {
            value: rsvm.RsCreateAction("getExtension", 1, function getExtension() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getFragDataLocation: {
            value: rsvm.RsCreateAction("getFragDataLocation", 2, function getFragDataLocation() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getFramebufferAttachmentParameter: {
            value: rsvm.RsCreateAction("getFramebufferAttachmentParameter", 3, function getFramebufferAttachmentParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getIndexedParameter: {
            value: rsvm.RsCreateAction("getIndexedParameter", 2, function getIndexedParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getInternalformatParameter: {
            value: rsvm.RsCreateAction("getInternalformatParameter", 3, function getInternalformatParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getParameter: {
            value: rsvm.RsCreateAction("getParameter", 1, function getParameter() {
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
        getQuery: {
            value: rsvm.RsCreateAction("getQuery", 2, function getQuery() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getQueryParameter: {
            value: rsvm.RsCreateAction("getQueryParameter", 2, function getQueryParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getRenderbufferParameter: {
            value: rsvm.RsCreateAction("getRenderbufferParameter", 2, function getRenderbufferParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSamplerParameter: {
            value: rsvm.RsCreateAction("getSamplerParameter", 2, function getSamplerParameter() {
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
            }), writable: true, enumerable: true, configurable: true,
        },
        getShaderSource: {
            value: rsvm.RsCreateAction("getShaderSource", 1, function getShaderSource() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSupportedExtensions: {
            value: rsvm.RsCreateAction("getSupportedExtensions", 0, function getSupportedExtensions() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSyncParameter: {
            value: rsvm.RsCreateAction("getSyncParameter", 2, function getSyncParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getTexParameter: {
            value: rsvm.RsCreateAction("getTexParameter", 2, function getTexParameter() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getTransformFeedbackVarying: {
            value: rsvm.RsCreateAction("getTransformFeedbackVarying", 2, function getTransformFeedbackVarying() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getUniform: {
            value: rsvm.RsCreateAction("getUniform", 2, function getUniform() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getUniformBlockIndex: {
            value: rsvm.RsCreateAction("getUniformBlockIndex", 2, function getUniformBlockIndex() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getUniformIndices: {
            value: rsvm.RsCreateAction("getUniformIndices", 2, function getUniformIndices() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getUniformLocation: {
            value: rsvm.RsCreateAction("getUniformLocation", 2, function getUniformLocation() {
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
        invalidateFramebuffer: {
            value: rsvm.RsCreateAction("invalidateFramebuffer", 2, function invalidateFramebuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        invalidateSubFramebuffer: {
            value: rsvm.RsCreateAction("invalidateSubFramebuffer", 6, function invalidateSubFramebuffer() {
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
        isQuery: {
            value: rsvm.RsCreateAction("isQuery", 1, function isQuery() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isRenderbuffer: {
            value: rsvm.RsCreateAction("isRenderbuffer", 1, function isRenderbuffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isSampler: {
            value: rsvm.RsCreateAction("isSampler", 1, function isSampler() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isShader: {
            value: rsvm.RsCreateAction("isShader", 1, function isShader() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isSync: {
            value: rsvm.RsCreateAction("isSync", 1, function isSync() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isTexture: {
            value: rsvm.RsCreateAction("isTexture", 1, function isTexture() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isTransformFeedback: {
            value: rsvm.RsCreateAction("isTransformFeedback", 1, function isTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        isVertexArray: {
            value: rsvm.RsCreateAction("isVertexArray", 1, function isVertexArray() {
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
        pauseTransformFeedback: {
            value: rsvm.RsCreateAction("pauseTransformFeedback", 0, function pauseTransformFeedback() {
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
        readBuffer: {
            value: rsvm.RsCreateAction("readBuffer", 1, function readBuffer() {
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
        renderbufferStorageMultisample: {
            value: rsvm.RsCreateAction("renderbufferStorageMultisample", 5, function renderbufferStorageMultisample() {
            }), writable: true, enumerable: true, configurable: true,
        },
        resumeTransformFeedback: {
            value: rsvm.RsCreateAction("resumeTransformFeedback", 0, function resumeTransformFeedback() {
            }), writable: true, enumerable: true, configurable: true,
        },
        sampleCoverage: {
            value: rsvm.RsCreateAction("sampleCoverage", 2, function sampleCoverage() {
            }), writable: true, enumerable: true, configurable: true,
        },
        samplerParameterf: {
            value: rsvm.RsCreateAction("samplerParameterf", 3, function samplerParameterf() {
            }), writable: true, enumerable: true, configurable: true,
        },
        samplerParameteri: {
            value: rsvm.RsCreateAction("samplerParameteri", 3, function samplerParameteri() {
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
        texImage3D: {
            value: rsvm.RsCreateAction("texImage3D", 10, function texImage3D() {
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
        texStorage2D: {
            value: rsvm.RsCreateAction("texStorage2D", 5, function texStorage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texStorage3D: {
            value: rsvm.RsCreateAction("texStorage3D", 6, function texStorage3D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texSubImage2D: {
            value: rsvm.RsCreateAction("texSubImage2D", 7, function texSubImage2D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        texSubImage3D: {
            value: rsvm.RsCreateAction("texSubImage3D", 11, function texSubImage3D() {
            }), writable: true, enumerable: true, configurable: true,
        },
        transformFeedbackVaryings: {
            value: rsvm.RsCreateAction("transformFeedbackVaryings", 3, function transformFeedbackVaryings() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform1ui: {
            value: rsvm.RsCreateAction("uniform1ui", 2, function uniform1ui() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform2ui: {
            value: rsvm.RsCreateAction("uniform2ui", 3, function uniform2ui() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform3ui: {
            value: rsvm.RsCreateAction("uniform3ui", 4, function uniform3ui() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniform4ui: {
            value: rsvm.RsCreateAction("uniform4ui", 5, function uniform4ui() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformBlockBinding: {
            value: rsvm.RsCreateAction("uniformBlockBinding", 3, function uniformBlockBinding() {
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
        vertexAttribDivisor: {
            value: rsvm.RsCreateAction("vertexAttribDivisor", 2, function vertexAttribDivisor() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttribI4i: {
            value: rsvm.RsCreateAction("vertexAttribI4i", 5, function vertexAttribI4i() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttribI4ui: {
            value: rsvm.RsCreateAction("vertexAttribI4ui", 5, function vertexAttribI4ui() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttribIPointer: {
            value: rsvm.RsCreateAction("vertexAttribIPointer", 5, function vertexAttribIPointer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        waitSync: {
            value: rsvm.RsCreateAction("waitSync", 3, function waitSync() {
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
        clearBufferfi: {
            value: rsvm.RsCreateAction("clearBufferfi", 4, function clearBufferfi() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearBufferfv: {
            value: rsvm.RsCreateAction("clearBufferfv", 3, function clearBufferfv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearBufferiv: {
            value: rsvm.RsCreateAction("clearBufferiv", 3, function clearBufferiv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        clearBufferuiv: {
            value: rsvm.RsCreateAction("clearBufferuiv", 3, function clearBufferuiv() {
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
        drawBuffers: {
            value: rsvm.RsCreateAction("drawBuffers", 1, function drawBuffers() {
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
        uniform1uiv: {
            value: rsvm.RsCreateAction("uniform1uiv", 2, function uniform1uiv() {
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
        uniform2uiv: {
            value: rsvm.RsCreateAction("uniform2uiv", 2, function uniform2uiv() {
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
        uniform3uiv: {
            value: rsvm.RsCreateAction("uniform3uiv", 2, function uniform3uiv() {
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
        uniform4uiv: {
            value: rsvm.RsCreateAction("uniform4uiv", 2, function uniform4uiv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix2fv: {
            value: rsvm.RsCreateAction("uniformMatrix2fv", 3, function uniformMatrix2fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix2x3fv: {
            value: rsvm.RsCreateAction("uniformMatrix2x3fv", 3, function uniformMatrix2x3fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix2x4fv: {
            value: rsvm.RsCreateAction("uniformMatrix2x4fv", 3, function uniformMatrix2x4fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix3fv: {
            value: rsvm.RsCreateAction("uniformMatrix3fv", 3, function uniformMatrix3fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix3x2fv: {
            value: rsvm.RsCreateAction("uniformMatrix3x2fv", 3, function uniformMatrix3x2fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix3x4fv: {
            value: rsvm.RsCreateAction("uniformMatrix3x4fv", 3, function uniformMatrix3x4fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix4fv: {
            value: rsvm.RsCreateAction("uniformMatrix4fv", 3, function uniformMatrix4fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix4x2fv: {
            value: rsvm.RsCreateAction("uniformMatrix4x2fv", 3, function uniformMatrix4x2fv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        uniformMatrix4x3fv: {
            value: rsvm.RsCreateAction("uniformMatrix4x3fv", 3, function uniformMatrix4x3fv() {
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
        vertexAttribI4iv: {
            value: rsvm.RsCreateAction("vertexAttribI4iv", 2, function vertexAttribI4iv() {
            }), writable: true, enumerable: true, configurable: true,
        },
        vertexAttribI4uiv: {
            value: rsvm.RsCreateAction("vertexAttribI4uiv", 2, function vertexAttribI4uiv() {
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
        constructor: { writable: true, enumerable: false, configurable: true, value: WebGL2RenderingContext },
        makeXRCompatible: {
            value: rsvm.RsCreateAction("makeXRCompatible", 0, function makeXRCompatible() {
            }), writable: true, enumerable: true, configurable: true,
        },
        [Symbol.toStringTag]: { value: "WebGL2RenderingContext", writable: false, enumerable: false, configurable: true, },
    });
}();