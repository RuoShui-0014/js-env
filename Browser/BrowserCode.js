const fs = require("fs")

function GetBrowserCode(type) {
    let code = "";
    // ----------------------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/others/others.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/TextDecoder/TextDecoder.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLCollection/HTMLCollection.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLCollection/HTMLOptionsCollection/HTMLOptionsCollection.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLCollection/HTMLFormControlsCollection/HTMLFormControlsCollection.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLAllCollection/HTMLAllCollection.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMRectList/DOMRectList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/NamedNodeMap/NamedNodeMap.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMTokenList/DOMTokenList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/StyleSheetList/StyleSheetList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/TouchList/TouchList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/FeaturePolicy/FeaturePolicy.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/FragmentDirective/FragmentDirective.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMStringMap/DOMStringMap.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CSSStyleDeclaration/CSSStyleDeclaration.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/PerformanceTiming/PerformanceTiming.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/PerformanceNavigation/PerformanceNavigation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MemoryInfo/MemoryInfo.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventCounts/EventCounts.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CacheStorage/CacheStorage.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/webGLExtensions/webGLExtensions.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CanvasRenderingContext2D/CanvasRenderingContext2D.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLRenderingContext/WebGLRenderingContext.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGL2RenderingContext/WebGL2RenderingContext.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/XPathExpression/XPathExpression.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLBuffer/WebGLBuffer.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLProgram/WebGLProgram.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLShader/WebGLShader.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLFramebuffer/WebGLFramebuffer.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLRenderbuffer/WebGLRenderbuffer.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLTexture/WebGLTexture.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLUniformLocation/WebGLUniformLocation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WebGLShaderPrecisionFormat/WebGLShaderPrecisionFormat.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/FontFace/FontFace.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/SpeechSynthesisVoice/SpeechSynthesisVoice.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/TimeRanges/TimeRanges.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MutationObserver/MutationObserver.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/XPathResult/XPathResult.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Touch/Touch.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CSSRuleList/CSSRuleList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CSSRuleList/CSSRuleList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/PerformanceServerTiming/PerformanceServerTiming.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/ReadableStreamDefaultController/ReadableStreamDefaultController.js`) + '\r\n';
    
    code += fs.readFileSync(`${__dirname}/PerformanceEntry/PerformanceEntry.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/PerformanceEntry/PerformanceResourceTiming/PerformanceResourceTiming.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/DeviceMotionEventAcceleration/DeviceMotionEventAcceleration.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DeviceMotionEventRotationRate/DeviceMotionEventRotationRate.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/CustomElementRegistry/CustomElementRegistry.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/BarProp/BarProp.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/External/External.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/StyleMedia/StyleMedia.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/TrustedHTML/TrustedHTML.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/TrustedScript/TrustedScript.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Scheduler/Scheduler.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/LaunchQueue/LaunchQueue.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Entry/Entry.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Entry/DirectoryEntry/DirectoryEntry.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMFileSystem/DOMFileSystem.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/SharedStorageWorklet/SharedStorageWorklet.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/SharedStorage/SharedStorage.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/AnimationTimeline/AnimationTimeline.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/AnimationTimeline/DocumentTimeline/DocumentTimeline.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/FileSystemHandle/FileSystemHandle.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/FileSystemHandle/FileSystemDirectoryHandle/FileSystemDirectoryHandle.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/MediaDeviceInfo/MediaDeviceInfo.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MediaDeviceInfo/InputDeviceInfo/InputDeviceInfo.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/StylePropertyMapReadOnly/StylePropertyMapReadOnly.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/StylePropertyMapReadOnly/StylePropertyMap/StylePropertyMap.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/DOMException/DOMException.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Permissions/Permissions.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Scheduling/Scheduling.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/UserActivation/UserActivation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Geolocation/Geolocation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMStringList/DOMStringList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/NodeList/NodeList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/NodeList/RadioNodeList/RadioNodeList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMImplementation/DOMImplementation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/ValidityState/ValidityState.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/MimeType/MimeType.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MimeTypeArray/MimeTypeArray.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Plugin/Plugin.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/PluginArray/PluginArray.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/SubtleCrypto/SubtleCrypto.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Crypto/Crypto.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/History/History.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/DeprecatedStorageQuota/DeprecatedStorageQuota.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CredentialsContainer/CredentialsContainer.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Keyboard/Keyboard.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WakeLock/WakeLock.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Ink/Ink.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/LockManager/LockManager.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MediaCapabilities/MediaCapabilities.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MediaSession/MediaSession.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Presentation/Presentation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/WGSLLanguageFeatures/WGSLLanguageFeatures.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/GPU/GPU.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/NavigatorUAData/NavigatorUAData.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/DOMParser/DOMParser.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMRectReadOnly/DOMRectReadOnly.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/DOMRectReadOnly/DOMRect/DOMRect.js`) + '\r\n';

    // 各个原型文件代码的读取
    // --------------------------------------------------EventTarget--------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/EventTarget.js`) + '\r\n';

    if (type == 0){
        code += fs.readFileSync(`${__dirname}/Window/Window_isolate.js`) + '\r\n';
    }else if (type == 1){
        code += fs.readFileSync(`${__dirname}/Window/Window_vm2.js`) + '\r\n';
    }

    code += fs.readFileSync(`${__dirname}/EventTarget/BaseAudioContext/BaseAudioContext.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/BaseAudioContext/OfflineAudioContext/OfflineAudioContext.js`) + '\r\n';
    
    code += fs.readFileSync(`${__dirname}/EventTarget/MessagePort/MessagePort.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/SourceBufferList/SourceBufferList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/WebSocket/WebSocket.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/OffscreenCanvas/OffscreenCanvas.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/ServiceWorker/ServiceWorker.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/ServiceWorkerRegistration/ServiceWorkerRegistration.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/AbortSignal/AbortSignal.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Headers/Headers.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Request/Request.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Response/Response.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/FileReader/FileReader.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/PermissionStatus/PermissionStatus.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/BatteryManager/BatteryManager.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/FontFaceSet/FontFaceSet.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/SpeechSynthesis/SpeechSynthesis.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/VisualViewport/VisualViewport.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/CookieStore/CookieStore.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/TextTrackList/TextTrackList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/RemotePlayback/RemotePlayback.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/MediaQueryList/MediaQueryList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/RTCPeerConnection/RTCPeerConnection.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/IDBDatabase/IDBDatabase.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/IDBRequest/IDBRequest.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/IDBRequest/IDBOpenDBRequest/IDBOpenDBRequest.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/IDBFactory/IDBFactory.js`) + '\r\n';


    // -----------------------------------------------------Performance------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Performance/Performance.js`) + '\r\n';

    // -----------------------------------------------------TrustedTypePolicyFactory------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/TrustedTypePolicyFactory/TrustedTypePolicyFactory.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/DocumentPictureInPicture/DocumentPictureInPicture.js`) + '\r\n';

    // -----------------------------------------------------Node------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Node.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/Node/DocumentFragment/DocumentFragment.js`) + '\r\n';

    // ----------------------------------------------DocumentType------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/DocumentType/DocumentType.js`) + '\r\n';

    // -----------------------------------------------------Attr------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Attr/Attr.js`) + '\r\n';

    // ----------------------------------------------------Text-------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/CharacterData/CharacterData.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/CharacterData/Comment/Comment.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/CharacterData/Text/Text.js`) + '\r\n';

    // --------------------------------------------------Element------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/Element.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Document/Document.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Document/HTMLDocument/HTMLDocument.js`) + '\r\n';

    // --------------------------------------------------XMLHttpRequest------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/XMLHttpRequestEventTarget/XMLHttpRequestEventTarget.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/XMLHttpRequestEventTarget/XMLHttpRequestUpload/XMLHttpRequestUpload.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/XMLHttpRequestEventTarget/XMLHttpRequest/XMLHttpRequest.js`) + '\r\n';

    // ---------------------------------------------------Navigator---------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/NetworkInformation/NetworkInformation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Bluetooth/Bluetooth.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Clipboard/Clipboard.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/NavigatorManagedData/NavigatorManagedData.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/MediaDevices/MediaDevices.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/StorageManager/StorageManager.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/ServiceWorkerContainer/ServiceWorkerContainer.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/VirtualKeyboard/VirtualKeyboard.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/HID/HID.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Serial/Serial.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/USB/USB.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/WindowControlsOverlay/WindowControlsOverlay.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/XRSystem/XRSystem.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/Navigator.js`) + '\r\n';

    // ---------------------------------------------------Navigation--------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/NavigationHistoryEntry/NavigationHistoryEntry.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Navigation/Navigation.js`) + '\r\n';

    // ---------------------------------------------------Storage--------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/Storage/Storage.js`) + '\r\n';

    // ---------------------------------------------------Location--------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/Location/Location.js`) + '\r\n';

    // ----------------------------------------------------Screen-----------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/ScreenOrientation/ScreenOrientation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Screen/Screen.js`) + '\r\n';

    // --------------------------------------------------HTMLElement--------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLAnchorElement/HTMLAnchorElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLBodyElement/HTMLBodyElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLButtonElement/HTMLButtonElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLCanvasElement/HTMLCanvasElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLDivElement/HTMLDivElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLFormElement/HTMLFormElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLHeadElement/HTMLHeadElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLHtmlElement/HTMLHtmlElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLIFrameElement/HTMLIFrameElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLImageElement/HTMLImageElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLInputElement/HTMLInputElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLLinkElement/HTMLLinkElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLMetaElement/HTMLMetaElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLParagraphElement/HTMLParagraphElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLScriptElement/HTMLScriptElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLSpanElement/HTMLSpanElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLStyleElement/HTMLStyleElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLTitleElement/HTMLTitleElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLSelectElement/HTMLSelectElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLMediaElement/HTMLMediaElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLMediaElement/HTMLAudioElement/HTMLAudioElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLMediaElement/HTMLVideoElement/HTMLVideoElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/EventTarget/Node/Element/HTMLElement/HTMLUnknownElement/HTMLUnknownElement.js`) + '\r\n';

    // ----------------------------------------------------Event------------------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/Event/Event.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/PromiseRejectionEvent/PromiseRejectionEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/AnimationEvent/AnimationEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/TransitionEvent/TransitionEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/FormDataEvent/FormDataEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/BeforeUnloadEvent/BeforeUnloadEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/DeviceMotionEvent/DeviceMotionEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/DeviceOrientationEvent/DeviceOrientationEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/MessageEvent/MessageEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/UIEvent/UIEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/UIEvent/TouchEvent/TouchEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/UIEvent/MouseEvent/MouseEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/UIEvent/TextEvent/TextEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Event/UIEvent/MouseEvent/PointerEvent/PointerEvent.js`) + '\r\n';

    // 
    code += fs.readFileSync(`${__dirname}/Promise/Promise.js`) + '\r\n';

    // ----------------------------------------------实例化浏览器中的对象-----------------------------------------------------------------
    code += fs.readFileSync(`${__dirname}/CreateEnv.js`) + '\r\n';

    return code;
}


module.exports = {
    GetBrowserCode
}