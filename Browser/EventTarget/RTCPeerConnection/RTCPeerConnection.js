!function () {
    Object.defineProperty(window, "RTCPeerConnection", {
        value: rsvm.RsCreateConstructor("RTCPeerConnection", 0, function RTCPeerConnection() {
            return rsvm.prototype.RTCPeerConnection.new.apply(null, arguments);
        }), writable: true, enumerable: false, configurable: true
    });

    Object.defineProperty(window, "webkitRTCPeerConnection", {
        value: RTCPeerConnection, writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.RTCPeerConnection = {
        memory: {
            localDescription: null,
            currentLocalDescription: null,
            pendingLocalDescription: null,
            remoteDescription: null,
            currentRemoteDescription: null,
            pendingRemoteDescription: null,
            signalingState: "stable",
            iceGatheringState: "new",
            iceConnectionState: "new",
            connectionState: "new",
            canTrickleIceCandidates: null,
            onnegotiationneeded: null,
            onicecandidate: null,
            onsignalingstatechange: null,
            oniceconnectionstatechange: null,
            onconnectionstatechange: null,
            onicegatheringstatechange: null,
            onicecandidateerror: null,
            ontrack: null,
            sctp: null,
            ondatachannel: null,
            onaddstream: null,
            onremovestream: null,
        },
        malloc(target) {
            rsvm.mallocBaseMemory("RTCPeerConnection", target);
        },
        new() {
            let obj = rsvm.RsCreate(RTCPeerConnection.prototype);
            return obj;
        },
    };

    Object.defineProperties(RTCPeerConnection, {
        prototype: { value: RTCPeerConnection.prototype, writable: false, enumerable: false, configurable: false },
        generateCertificate: {
            value: rsvm.RsCreateAction("generateCertificate", 1, function generateCertificate() {
            }), writable: true, enumerable: true, configurable: true
        },
    });

    Object.defineProperties(RTCPeerConnection.prototype, {
        localDescription: {
            get: rsvm.RsCreateGetter("localDescription", function localDescription() {
                return rsvm.get(this, "localDescription");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentLocalDescription: {
            get: rsvm.RsCreateGetter("currentLocalDescription", function currentLocalDescription() {
                return rsvm.get(this, "currentLocalDescription");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pendingLocalDescription: {
            get: rsvm.RsCreateGetter("pendingLocalDescription", function pendingLocalDescription() {
                return rsvm.get(this, "pendingLocalDescription");
            }), set: undefined, enumerable: true, configurable: true,
        },
        remoteDescription: {
            get: rsvm.RsCreateGetter("remoteDescription", function remoteDescription() {
                return rsvm.get(this, "remoteDescription");
            }), set: undefined, enumerable: true, configurable: true,
        },
        currentRemoteDescription: {
            get: rsvm.RsCreateGetter("currentRemoteDescription", function currentRemoteDescription() {
                return rsvm.get(this, "currentRemoteDescription");
            }), set: undefined, enumerable: true, configurable: true,
        },
        pendingRemoteDescription: {
            get: rsvm.RsCreateGetter("pendingRemoteDescription", function pendingRemoteDescription() {
                return rsvm.get(this, "pendingRemoteDescription");
            }), set: undefined, enumerable: true, configurable: true,
        },
        signalingState: {
            get: rsvm.RsCreateGetter("signalingState", function signalingState() {
                return rsvm.get(this, "signalingState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        iceGatheringState: {
            get: rsvm.RsCreateGetter("iceGatheringState", function iceGatheringState() {
                return rsvm.get(this, "iceGatheringState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        iceConnectionState: {
            get: rsvm.RsCreateGetter("iceConnectionState", function iceConnectionState() {
                return rsvm.get(this, "iceConnectionState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        connectionState: {
            get: rsvm.RsCreateGetter("connectionState", function connectionState() {
                return rsvm.get(this, "connectionState");
            }), set: undefined, enumerable: true, configurable: true,
        },
        canTrickleIceCandidates: {
            get: rsvm.RsCreateGetter("canTrickleIceCandidates", function canTrickleIceCandidates() {
                return rsvm.get(this, "canTrickleIceCandidates");
            }), set: undefined, enumerable: true, configurable: true,
        },
        onnegotiationneeded: {
            get: rsvm.RsCreateGetter("onnegotiationneeded", function onnegotiationneeded() {
                return rsvm.get(this, "onnegotiationneeded");
            }), set: rsvm.RsCreateSetter("onnegotiationneeded", function onnegotiationneeded() {
                rsvm.set(this, "onnegotiationneeded", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onicecandidate: {
            get: rsvm.RsCreateGetter("onicecandidate", function onicecandidate() {
                return rsvm.get(this, "onicecandidate");
            }), set: rsvm.RsCreateSetter("onicecandidate", function onicecandidate() {
                rsvm.set(this, "onicecandidate", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onsignalingstatechange: {
            get: rsvm.RsCreateGetter("onsignalingstatechange", function onsignalingstatechange() {
                return rsvm.get(this, "onsignalingstatechange");
            }), set: rsvm.RsCreateSetter("onsignalingstatechange", function onsignalingstatechange() {
                rsvm.set(this, "onsignalingstatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        oniceconnectionstatechange: {
            get: rsvm.RsCreateGetter("oniceconnectionstatechange", function oniceconnectionstatechange() {
                return rsvm.get(this, "oniceconnectionstatechange");
            }), set: rsvm.RsCreateSetter("oniceconnectionstatechange", function oniceconnectionstatechange() {
                rsvm.set(this, "oniceconnectionstatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onconnectionstatechange: {
            get: rsvm.RsCreateGetter("onconnectionstatechange", function onconnectionstatechange() {
                return rsvm.get(this, "onconnectionstatechange");
            }), set: rsvm.RsCreateSetter("onconnectionstatechange", function onconnectionstatechange() {
                rsvm.set(this, "onconnectionstatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onicegatheringstatechange: {
            get: rsvm.RsCreateGetter("onicegatheringstatechange", function onicegatheringstatechange() {
                return rsvm.get(this, "onicegatheringstatechange");
            }), set: rsvm.RsCreateSetter("onicegatheringstatechange", function onicegatheringstatechange() {
                rsvm.set(this, "onicegatheringstatechange", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onicecandidateerror: {
            get: rsvm.RsCreateGetter("onicecandidateerror", function onicecandidateerror() {
                return rsvm.get(this, "onicecandidateerror");
            }), set: rsvm.RsCreateSetter("onicecandidateerror", function onicecandidateerror() {
                rsvm.set(this, "onicecandidateerror", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        ontrack: {
            get: rsvm.RsCreateGetter("ontrack", function ontrack() {
                return rsvm.get(this, "ontrack");
            }), set: rsvm.RsCreateSetter("ontrack", function ontrack() {
                rsvm.set(this, "ontrack", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        sctp: {
            get: rsvm.RsCreateGetter("sctp", function sctp() {
                return rsvm.get(this, "sctp");
            }), set: undefined, enumerable: true, configurable: true,
        },
        ondatachannel: {
            get: rsvm.RsCreateGetter("ondatachannel", function ondatachannel() {
                return rsvm.get(this, "ondatachannel");
            }), set: rsvm.RsCreateSetter("ondatachannel", function ondatachannel() {
                rsvm.set(this, "ondatachannel", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onaddstream: {
            get: rsvm.RsCreateGetter("onaddstream", function onaddstream() {
                return rsvm.get(this, "onaddstream");
            }), set: rsvm.RsCreateSetter("onaddstream", function onaddstream() {
                rsvm.set(this, "onaddstream", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        onremovestream: {
            get: rsvm.RsCreateGetter("onremovestream", function onremovestream() {
                return rsvm.get(this, "onremovestream");
            }), set: rsvm.RsCreateSetter("onremovestream", function onremovestream() {
                rsvm.set(this, "onremovestream", arguments[0]);
            }), enumerable: true, configurable: true,
        },
        addIceCandidate: {
            value: rsvm.RsCreateAction("addIceCandidate", 0, function addIceCandidate() {
            }), writable: true, enumerable: true, configurable: true,
        },
        addStream: {
            value: rsvm.RsCreateAction("addStream", 1, function addStream() {
            }), writable: true, enumerable: true, configurable: true,
        },
        addTrack: {
            value: rsvm.RsCreateAction("addTrack", 1, function addTrack() {
            }), writable: true, enumerable: true, configurable: true,
        },
        addTransceiver: {
            value: rsvm.RsCreateAction("addTransceiver", 1, function addTransceiver() {
            }), writable: true, enumerable: true, configurable: true,
        },
        close: {
            value: rsvm.RsCreateAction("close", 0, function close() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createAnswer: {
            value: rsvm.RsCreateAction("createAnswer", 0, function createAnswer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createDTMFSender: {
            value: rsvm.RsCreateAction("createDTMFSender", 1, function createDTMFSender() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createDataChannel: {
            value: rsvm.RsCreateAction("createDataChannel", 1, function createDataChannel() {
            }), writable: true, enumerable: true, configurable: true,
        },
        createOffer: {
            value: rsvm.RsCreateAction("createOffer", 0, function createOffer() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getConfiguration: {
            value: rsvm.RsCreateAction("getConfiguration", 0, function getConfiguration() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getLocalStreams: {
            value: rsvm.RsCreateAction("getLocalStreams", 0, function getLocalStreams() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getReceivers: {
            value: rsvm.RsCreateAction("getReceivers", 0, function getReceivers() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getRemoteStreams: {
            value: rsvm.RsCreateAction("getRemoteStreams", 0, function getRemoteStreams() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getSenders: {
            value: rsvm.RsCreateAction("getSenders", 0, function getSenders() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getStats: {
            value: rsvm.RsCreateAction("getStats", 0, function getStats() {
            }), writable: true, enumerable: true, configurable: true,
        },
        getTransceivers: {
            value: rsvm.RsCreateAction("getTransceivers", 0, function getTransceivers() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeStream: {
            value: rsvm.RsCreateAction("removeStream", 1, function removeStream() {
            }), writable: true, enumerable: true, configurable: true,
        },
        removeTrack: {
            value: rsvm.RsCreateAction("removeTrack", 1, function removeTrack() {
            }), writable: true, enumerable: true, configurable: true,
        },
        restartIce: {
            value: rsvm.RsCreateAction("restartIce", 0, function restartIce() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setConfiguration: {
            value: rsvm.RsCreateAction("setConfiguration", 0, function setConfiguration() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setLocalDescription: {
            value: rsvm.RsCreateAction("setLocalDescription", 0, function setLocalDescription() {
            }), writable: true, enumerable: true, configurable: true,
        },
        setRemoteDescription: {
            value: rsvm.RsCreateAction("setRemoteDescription", 1, function setRemoteDescription() {
            }), writable: true, enumerable: true, configurable: true,
        },
        constructor: { writable: true, enumerable: false, configurable: true, value: RTCPeerConnection },
        [Symbol.toStringTag]: { value: "RTCPeerConnection", writable: false, enumerable: false, configurable: true, },
    });
    Object.setPrototypeOf(RTCPeerConnection, EventTarget);
    Object.setPrototypeOf(RTCPeerConnection.prototype, EventTarget.prototype);
}();