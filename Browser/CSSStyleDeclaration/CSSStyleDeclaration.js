!function () {
    Object.defineProperty(window, "CSSStyleDeclaration", {
        value: rsvm.RsCreateConstructor("CSSStyleDeclaration"), writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.CSSStyleDeclaration = {
        memory: {
            cssText: "",
            length: 0,
            parentRule: null,
            cssFloat: "",
        },
        malloc(target) {
            rsvm.mallocBaseMemory("CSSStyleDeclaration", target);
        },
        new() {
            let obj = rsvm.RsCreate(CSSStyleDeclaration.prototype);
            Object.assign(obj, {"accentColor":"","additiveSymbols":"","alignContent":"","alignItems":"","alignSelf":"","alignmentBaseline":"","all":"","animation":"","animationComposition":"","animationDelay":"","animationDirection":"","animationDuration":"","animationFillMode":"","animationIterationCount":"","animationName":"","animationPlayState":"","animationTimingFunction":"","appRegion":"","appearance":"","ascentOverride":"","aspectRatio":"","backdropFilter":"","backfaceVisibility":"","background":"","backgroundAttachment":"","backgroundBlendMode":"","backgroundClip":"","backgroundColor":"","backgroundImage":"","backgroundOrigin":"","backgroundPosition":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","backgroundRepeatX":"","backgroundRepeatY":"","backgroundSize":"","basePalette":"","baselineShift":"","baselineSource":"","blockSize":"","border":"","borderBlock":"","borderBlockColor":"","borderBlockEnd":"","borderBlockEndColor":"","borderBlockEndStyle":"","borderBlockEndWidth":"","borderBlockStart":"","borderBlockStartColor":"","borderBlockStartStyle":"","borderBlockStartWidth":"","borderBlockStyle":"","borderBlockWidth":"","borderBottom":"","borderBottomColor":"","borderBottomLeftRadius":"","borderBottomRightRadius":"","borderBottomStyle":"","borderBottomWidth":"","borderCollapse":"","borderColor":"","borderEndEndRadius":"","borderEndStartRadius":"","borderImage":"","borderImageOutset":"","borderImageRepeat":"","borderImageSlice":"","borderImageSource":"","borderImageWidth":"","borderInline":"","borderInlineColor":"","borderInlineEnd":"","borderInlineEndColor":"","borderInlineEndStyle":"","borderInlineEndWidth":"","borderInlineStart":"","borderInlineStartColor":"","borderInlineStartStyle":"","borderInlineStartWidth":"","borderInlineStyle":"","borderInlineWidth":"","borderLeft":"","borderLeftColor":"","borderLeftStyle":"","borderLeftWidth":"","borderRadius":"","borderRight":"","borderRightColor":"","borderRightStyle":"","borderRightWidth":"","borderSpacing":"","borderStartEndRadius":"","borderStartStartRadius":"","borderStyle":"","borderTop":"","borderTopColor":"","borderTopLeftRadius":"","borderTopRightRadius":"","borderTopStyle":"","borderTopWidth":"","borderWidth":"","bottom":"","boxShadow":"","boxSizing":"","breakAfter":"","breakBefore":"","breakInside":"","bufferedRendering":"","captionSide":"","caretColor":"","clear":"","clip":"","clipPath":"","clipRule":"","color":"","colorInterpolation":"","colorInterpolationFilters":"","colorRendering":"","colorScheme":"","columnCount":"","columnFill":"","columnGap":"","columnRule":"","columnRuleColor":"","columnRuleStyle":"","columnRuleWidth":"","columnSpan":"","columnWidth":"","columns":"","contain":"","containIntrinsicBlockSize":"","containIntrinsicHeight":"","containIntrinsicInlineSize":"","containIntrinsicSize":"","containIntrinsicWidth":"","container":"","containerName":"","containerType":"","content":"","contentVisibility":"","counterIncrement":"","counterReset":"","counterSet":"","cursor":"","cx":"","cy":"","d":"","descentOverride":"","direction":"","display":"","dominantBaseline":"","emptyCells":"","fallback":"","fill":"","fillOpacity":"","fillRule":"","filter":"","flex":"","flexBasis":"","flexDirection":"","flexFlow":"","flexGrow":"","flexShrink":"","flexWrap":"","float":"","floodColor":"","floodOpacity":"","font":"","fontDisplay":"","fontFamily":"","fontFeatureSettings":"","fontKerning":"","fontOpticalSizing":"","fontPalette":"","fontSize":"","fontStretch":"","fontStyle":"","fontSynthesis":"","fontSynthesisSmallCaps":"","fontSynthesisStyle":"","fontSynthesisWeight":"","fontVariant":"","fontVariantAlternates":"","fontVariantCaps":"","fontVariantEastAsian":"","fontVariantLigatures":"","fontVariantNumeric":"","fontVariationSettings":"","fontWeight":"","forcedColorAdjust":"","gap":"","grid":"","gridArea":"","gridAutoColumns":"","gridAutoFlow":"","gridAutoRows":"","gridColumn":"","gridColumnEnd":"","gridColumnGap":"","gridColumnStart":"","gridGap":"","gridRow":"","gridRowEnd":"","gridRowGap":"","gridRowStart":"","gridTemplate":"","gridTemplateAreas":"","gridTemplateColumns":"","gridTemplateRows":"","height":"","hyphenateCharacter":"","hyphenateLimitChars":"","hyphens":"","imageOrientation":"","imageRendering":"","inherits":"","initialLetter":"","initialValue":"","inlineSize":"","inset":"","insetBlock":"","insetBlockEnd":"","insetBlockStart":"","insetInline":"","insetInlineEnd":"","insetInlineStart":"","isolation":"","justifyContent":"","justifyItems":"","justifySelf":"","left":"","letterSpacing":"","lightingColor":"","lineBreak":"","lineGapOverride":"","lineHeight":"","listStyle":"","listStyleImage":"","listStylePosition":"","listStyleType":"","margin":"","marginBlock":"","marginBlockEnd":"","marginBlockStart":"","marginBottom":"","marginInline":"","marginInlineEnd":"","marginInlineStart":"","marginLeft":"","marginRight":"","marginTop":"","marker":"","markerEnd":"","markerMid":"","markerStart":"","mask":"","maskType":"","mathDepth":"","mathShift":"","mathStyle":"","maxBlockSize":"","maxHeight":"","maxInlineSize":"","maxWidth":"","minBlockSize":"","minHeight":"","minInlineSize":"","minWidth":"","mixBlendMode":"","negative":"","objectFit":"","objectPosition":"","objectViewBox":"","offset":"","offsetDistance":"","offsetPath":"","offsetRotate":"","opacity":"","order":"","orphans":"","outline":"","outlineColor":"","outlineOffset":"","outlineStyle":"","outlineWidth":"","overflow":"","overflowAnchor":"","overflowClipMargin":"","overflowWrap":"","overflowX":"","overflowY":"","overrideColors":"","overscrollBehavior":"","overscrollBehaviorBlock":"","overscrollBehaviorInline":"","overscrollBehaviorX":"","overscrollBehaviorY":"","pad":"","padding":"","paddingBlock":"","paddingBlockEnd":"","paddingBlockStart":"","paddingBottom":"","paddingInline":"","paddingInlineEnd":"","paddingInlineStart":"","paddingLeft":"","paddingRight":"","paddingTop":"","page":"","pageBreakAfter":"","pageBreakBefore":"","pageBreakInside":"","pageOrientation":"","paintOrder":"","perspective":"","perspectiveOrigin":"","placeContent":"","placeItems":"","placeSelf":"","pointerEvents":"","position":"","prefix":"","quotes":"","r":"","range":"","resize":"","right":"","rotate":"","rowGap":"","rubyPosition":"","rx":"","ry":"","scale":"","scrollBehavior":"","scrollMargin":"","scrollMarginBlock":"","scrollMarginBlockEnd":"","scrollMarginBlockStart":"","scrollMarginBottom":"","scrollMarginInline":"","scrollMarginInlineEnd":"","scrollMarginInlineStart":"","scrollMarginLeft":"","scrollMarginRight":"","scrollMarginTop":"","scrollPadding":"","scrollPaddingBlock":"","scrollPaddingBlockEnd":"","scrollPaddingBlockStart":"","scrollPaddingBottom":"","scrollPaddingInline":"","scrollPaddingInlineEnd":"","scrollPaddingInlineStart":"","scrollPaddingLeft":"","scrollPaddingRight":"","scrollPaddingTop":"","scrollSnapAlign":"","scrollSnapStop":"","scrollSnapType":"","scrollbarGutter":"","shapeImageThreshold":"","shapeMargin":"","shapeOutside":"","shapeRendering":"","size":"","sizeAdjust":"","speak":"","speakAs":"","src":"","stopColor":"","stopOpacity":"","stroke":"","strokeDasharray":"","strokeDashoffset":"","strokeLinecap":"","strokeLinejoin":"","strokeMiterlimit":"","strokeOpacity":"","strokeWidth":"","suffix":"","symbols":"","syntax":"","system":"","tabSize":"","tableLayout":"","textAlign":"","textAlignLast":"","textAnchor":"","textCombineUpright":"","textDecoration":"","textDecorationColor":"","textDecorationLine":"","textDecorationSkipInk":"","textDecorationStyle":"","textDecorationThickness":"","textEmphasis":"","textEmphasisColor":"","textEmphasisPosition":"","textEmphasisStyle":"","textIndent":"","textOrientation":"","textOverflow":"","textRendering":"","textShadow":"","textSizeAdjust":"","textTransform":"","textUnderlineOffset":"","textUnderlinePosition":"","textWrap":"","top":"","touchAction":"","transform":"","transformBox":"","transformOrigin":"","transformStyle":"","transition":"","transitionDelay":"","transitionDuration":"","transitionProperty":"","transitionTimingFunction":"","translate":"","unicodeBidi":"","unicodeRange":"","userSelect":"","vectorEffect":"","verticalAlign":"","viewTransitionName":"","visibility":"","webkitAlignContent":"","webkitAlignItems":"","webkitAlignSelf":"","webkitAnimation":"","webkitAnimationDelay":"","webkitAnimationDirection":"","webkitAnimationDuration":"","webkitAnimationFillMode":"","webkitAnimationIterationCount":"","webkitAnimationName":"","webkitAnimationPlayState":"","webkitAnimationTimingFunction":"","webkitAppRegion":"","webkitAppearance":"","webkitBackfaceVisibility":"","webkitBackgroundClip":"","webkitBackgroundOrigin":"","webkitBackgroundSize":"","webkitBorderAfter":"","webkitBorderAfterColor":"","webkitBorderAfterStyle":"","webkitBorderAfterWidth":"","webkitBorderBefore":"","webkitBorderBeforeColor":"","webkitBorderBeforeStyle":"","webkitBorderBeforeWidth":"","webkitBorderBottomLeftRadius":"","webkitBorderBottomRightRadius":"","webkitBorderEnd":"","webkitBorderEndColor":"","webkitBorderEndStyle":"","webkitBorderEndWidth":"","webkitBorderHorizontalSpacing":"","webkitBorderImage":"","webkitBorderRadius":"","webkitBorderStart":"","webkitBorderStartColor":"","webkitBorderStartStyle":"","webkitBorderStartWidth":"","webkitBorderTopLeftRadius":"","webkitBorderTopRightRadius":"","webkitBorderVerticalSpacing":"","webkitBoxAlign":"","webkitBoxDecorationBreak":"","webkitBoxDirection":"","webkitBoxFlex":"","webkitBoxOrdinalGroup":"","webkitBoxOrient":"","webkitBoxPack":"","webkitBoxReflect":"","webkitBoxShadow":"","webkitBoxSizing":"","webkitClipPath":"","webkitColumnBreakAfter":"","webkitColumnBreakBefore":"","webkitColumnBreakInside":"","webkitColumnCount":"","webkitColumnGap":"","webkitColumnRule":"","webkitColumnRuleColor":"","webkitColumnRuleStyle":"","webkitColumnRuleWidth":"","webkitColumnSpan":"","webkitColumnWidth":"","webkitColumns":"","webkitFilter":"","webkitFlex":"","webkitFlexBasis":"","webkitFlexDirection":"","webkitFlexFlow":"","webkitFlexGrow":"","webkitFlexShrink":"","webkitFlexWrap":"","webkitFontFeatureSettings":"","webkitFontSmoothing":"","webkitHighlight":"","webkitHyphenateCharacter":"","webkitJustifyContent":"","webkitLineBreak":"","webkitLineClamp":"","webkitLocale":"","webkitLogicalHeight":"","webkitLogicalWidth":"","webkitMarginAfter":"","webkitMarginBefore":"","webkitMarginEnd":"","webkitMarginStart":"","webkitMask":"","webkitMaskBoxImage":"","webkitMaskBoxImageOutset":"","webkitMaskBoxImageRepeat":"","webkitMaskBoxImageSlice":"","webkitMaskBoxImageSource":"","webkitMaskBoxImageWidth":"","webkitMaskClip":"","webkitMaskComposite":"","webkitMaskImage":"","webkitMaskOrigin":"","webkitMaskPosition":"","webkitMaskPositionX":"","webkitMaskPositionY":"","webkitMaskRepeat":"","webkitMaskRepeatX":"","webkitMaskRepeatY":"","webkitMaskSize":"","webkitMaxLogicalHeight":"","webkitMaxLogicalWidth":"","webkitMinLogicalHeight":"","webkitMinLogicalWidth":"","webkitOpacity":"","webkitOrder":"","webkitPaddingAfter":"","webkitPaddingBefore":"","webkitPaddingEnd":"","webkitPaddingStart":"","webkitPerspective":"","webkitPerspectiveOrigin":"","webkitPerspectiveOriginX":"","webkitPerspectiveOriginY":"","webkitPrintColorAdjust":"","webkitRtlOrdering":"","webkitRubyPosition":"","webkitShapeImageThreshold":"","webkitShapeMargin":"","webkitShapeOutside":"","webkitTapHighlightColor":"","webkitTextCombine":"","webkitTextDecorationsInEffect":"","webkitTextEmphasis":"","webkitTextEmphasisColor":"","webkitTextEmphasisPosition":"","webkitTextEmphasisStyle":"","webkitTextFillColor":"","webkitTextOrientation":"","webkitTextSecurity":"","webkitTextSizeAdjust":"","webkitTextStroke":"","webkitTextStrokeColor":"","webkitTextStrokeWidth":"","webkitTransform":"","webkitTransformOrigin":"","webkitTransformOriginX":"","webkitTransformOriginY":"","webkitTransformOriginZ":"","webkitTransformStyle":"","webkitTransition":"","webkitTransitionDelay":"","webkitTransitionDuration":"","webkitTransitionProperty":"","webkitTransitionTimingFunction":"","webkitUserDrag":"","webkitUserModify":"","webkitUserSelect":"","webkitWritingMode":"","whiteSpace":"","whiteSpaceCollapse":"","widows":"","width":"","willChange":"","wordBreak":"","wordSpacing":"","wordWrap":"","writingMode":"","x":"","y":"","zIndex":"","zoom":""});
            return obj;
        },
    };

    Object.defineProperties(CSSStyleDeclaration, {
        prototype: { value: CSSStyleDeclaration.prototype, writable: false, enumerable: false, configurable: false },
    });

    Object.defineProperties(CSSStyleDeclaration.prototype, {
        cssText: {
            get: rsvm.RsCreateGetter("cssText", function cssText() {
                let items = [];
                for (const key of Object.keys(this)) {
                    items.push(`${key}: ${this[key]}`);
                }
                return items.join('; ') + ';';
            }), set: rsvm.RsCreateSetter("cssText", function cssText() {
                for (const key of Object.keys(this)) {
                    delete this[key];
                }
                let value = arguments[0].trim();
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
                        this[itemAry[0].trim()] = newAry.join(', ');
                    }
                }
            }), enumerable: true, configurable: true,
        },
        length: {
            get: rsvm.RsCreateGetter("length", function length() {
                return 352;
            }), set: undefined, enumerable: true, configurable: true,
        },
        parentRule: {
            get: rsvm.RsCreateGetter("parentRule", function parentRule() {
                return rsvm.get(this, "parentRule");
            }), set: undefined, enumerable: true, configurable: true,
        },
        cssFloat: {
            get: rsvm.RsCreateGetter("cssFloat", function cssFloat() {
                return rsvm.get(this, "cssFloat");
            }), set: rsvm.RsCreateSetter("cssFloat", function cssFloat() {
                rsvm.set(this, "cssFloat", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        getPropertyPriority: {
            value: rsvm.RsCreateAction("getPropertyPriority", 1, function getPropertyPriority() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getPropertyValue: {
            value: rsvm.RsCreateAction("getPropertyValue", 1, function getPropertyValue() {
            }), writable: true, enumerable: true, configurable: true,
        },
        item: {
            value: rsvm.RsCreateAction("item", 1, function item() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeProperty: {
            value: rsvm.RsCreateAction("removeProperty", 1, function removeProperty() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setProperty: {
            value: rsvm.RsCreateAction("setProperty", 2, function setProperty() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: CSSStyleDeclaration },
        [Symbol.toStringTag]: { value: "CSSStyleDeclaration", writable: false, enumerable: false, configurable: true, },
        [Symbol.iterator]: {
            value: rsvm.RsCreateAction("values", 0, function values() {
            }), writable: true, enumerable: false, configurable: true,
        },
    });
}();