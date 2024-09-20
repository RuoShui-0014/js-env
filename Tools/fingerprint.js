!function () {
	rsvm.fingerprint = {};

	// userAgent
	rsvm.fingerprint.userAgents = [
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.86',
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
		'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
		// 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36'
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
		// 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER',
		// 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)',
		// 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)',
		// 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)',
		// 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)',
		// 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0',
		// 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; QQDownload 732; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)',
		// 'Maxthon/4.4.3.4000 Chrome/30.0.1599.101 Safari/537.36',
		// 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36',

	];

	rsvm.fingerprint.languages = [
		"zh-CN", "en", "en-US", "fr", "fr-FR", "es-ES",
	];

	// 屏幕分辨率
	rsvm.fingerprint.screen_resolution = [
		{ width: 640, height: 480 }, { width: 800, height: 600 }, { width: 1024, height: 768 }, { width: 1280, height: 720 },
		{ width: 1920, height: 1080 }, { width: 2560, height: 1440 }, { width: 3840, height: 2160 }, { width: 7680, height: 4320 },
	];

	// 默认canvas toDataURL指纹
	rsvm.fingerprint.default_canvas_toDataURL = [
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==',
	];

	// 设备指纹
	rsvm.fingerprint.devices = [
		{ deviceId: "default", kind: "audioinput", label: "默认 - 麦克风 (PD100U) (0c76:1717)", groupId: "93db48847503632737c064af48eca9c54002a7cf5c7c623af6c3f167515a9bc8", },
		{ deviceId: "communications", kind: "audioinput", label: "通讯 - 麦克风 (PD100U) (0c76:1717)", groupId: "93db48847503632737c064af48eca9c54002a7cf5c7c623af6c3f167515a9bc8", },
		{ deviceId: "93505cb54ba5229ec0628efb8fa1086108f94c7a71f86ba00c4e77466b39efd8", kind: "audioinput", label: "麦克风 (PD100U) (0c76:1717)", groupId: "93db48847503632737c064af48eca9c54002a7cf5c7c623af6c3f167515a9bc8", },
		{ deviceId: "65e2edf7e1f3171e814aed433abc8a757e88def97f3fa55fd907d3f6c9ae5aaf", kind: "audioinput", label: "麦克风 (3- USB Audio Device) (1b3f:2008)", groupId: "1d048485c1ac032af2c83450de91c5a6071201d5b37657ceaef4555ac792993e", },
		{ deviceId: "6e503e1d8fc71440830ef554b3a0a3cb4df3a0f6488803c78863592db5c9e434", kind: "audioinput", label: "立体声混音 (7- Realtek High Definition Audio)", groupId: "66ab1c39db1c561d5c80428301c909526d3ac5cdbd8edafdb64cedd276ad1246", },
		{ deviceId: "7c45a73414dfe2b8e6a782a8d0b43a4409b71a0b4b910b5bbcafa9d066760bcd", kind: "videoinput", label: "OBS Virtual Camera", groupId: "77d2497013c2902ffb7f9bc58eb0ddaea9c7bab37a5d6407ed91e331848b4be8", },
		{ deviceId: "default", kind: "audiooutput", label: "默认 - 扬声器 (3- USB Audio Device) (1b3f:2008)", groupId: "1d048485c1ac032af2c83450de91c5a6071201d5b37657ceaef4555ac792993e", },
		{ deviceId: "communications", kind: "audiooutput", label: "通讯 - 扬声器 (3- USB Audio Device) (1b3f:2008)", groupId: "1d048485c1ac032af2c83450de91c5a6071201d5b37657ceaef4555ac792993e", },
		{ deviceId: "3d9ebb36575e7f8c88289a493409870a859ef71c534e53bb6d86f4b92e70c9ac", kind: "audiooutput", label: "扬声器 (7- Realtek High Definition Audio)", groupId: "66ab1c39db1c561d5c80428301c909526d3ac5cdbd8edafdb64cedd276ad1246", },
		{ deviceId: "0d26dbb39f5d894321fe3e0f460201501ff360a4ee8fe5a3093110a88385363e", kind: "audiooutput", label: "扬声器 (3- USB Audio Device) (1b3f:2008)", groupId: "1d048485c1ac032af2c83450de91c5a6071201d5b37657ceaef4555ac792993e", },
		{ deviceId: "c3ccef216017c1e15167d5600674c8faba154b2128735ef0aa415f66714a7a25", kind: "audiooutput", label: "T24S90 (NVIDIA High Definition Audio)", groupId: "5c43472c3bb117b5e982a67b7a1e8c48c746e68bcfa738068691cac5aefde3e2", },

	];

	// 字体列表
	rsvm.fingerprint.fonts = [
		'iconfont', 'ali-55', 'ali-65', 'ali-75', 'mind-bold', 'mind-demi-bold', 'mind-medium', 'mind-regular', 'vant-icon', 'swiper-icons', 'KaTeX_AMS', 'KaTeX_Caligraphic',
		'KaTeX_Caligraphic', 'KaTeX_Fraktur', 'KaTeX_Fraktur', 'KaTeX_Main', 'KaTeX_Main', 'KaTeX_Main', 'KaTeX_Main', 'KaTeX_Math', 'KaTeX_Math', 'KaTeX_SansSerif', 'KaTeX_SansSerif',
		'KaTeX_SansSerif', 'KaTeX_Script', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3', 'KaTeX_Size4', 'KaTeX_Typewriter', 'v-md-iconfont',
	];

	// 
	rsvm.fingerprint.voices = [
		{ default: true, lang: "true", localService: true, name: "true", voiceURI: "true" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
		{ default: false, lang: "false", localService: false, name: "false", voiceURI: "false" },
	];
}();


// 生成浏览器随机指纹
rsvm.randomFingerprint = function () {
	rsvm.siteInfo.languages = ['zh-CN', 'en', 'en-GB', 'en-US'];
	rsvm.siteInfo.default_canvas_toDataURL = '';
	rsvm.siteInfo.enumerateDevices = [];
	rsvm.siteInfo.fonts = [];
	rsvm.siteInfo.voices = [];
	rsvm.siteInfo.deviceMemory = 8;
	rsvm.siteInfo.hardwareConcurrency = 20;

	// 随机userAgent
	rsvm.siteInfo.userAgent = rsvm.fingerprint.userAgents[Math.floor(Math.random() * rsvm.fingerprint.userAgents.length)]

	// 随机屏幕分辨率
	rsvm.siteInfo.screen_size = rsvm.fingerprint.screen_resolution[Math.floor(Math.random() * rsvm.fingerprint.screen_resolution.length)]

	// 随机设备信息
	let deviceNum = Math.floor(Math.random() * rsvm.fingerprint.devices.length) + 1, devicesIndex = [];
	while (devicesIndex.length < deviceNum) {
		let index = Math.floor(Math.random() * rsvm.fingerprint.devices.length) + 0;
		if (!devicesIndex.includes(index)) {
			devicesIndex.push(index);
		}
	}
	for (const index of devicesIndex) {
		var o, device = rsvm.fingerprint.devices[index];
		if (device['kind'].includes("input")) {
			o = rsvm.prototype.InputDeviceInfo.new();
		} else if (device['kind'].includes("output")) {
			o = rsvm.prototype.MediaDeviceInfo.new();
		}

		rsvm.set(o, "deviceId", device['deviceId']);
		rsvm.set(o, "kind", device['kind']);
		rsvm.set(o, "label", device['label']);
		rsvm.set(o, "groupId", device['groupId']);

		rsvm.siteInfo.enumerateDevices.push(o);
	}

	// 随机初始化默认canvas指纹   
	rsvm.siteInfo.default_canvas_toDataURL = rsvm.fingerprint.default_canvas_toDataURL[Math.floor(Math.random() * rsvm.fingerprint.default_canvas_toDataURL.length)];

	// 字体列表初始化
	let fontNum = Math.floor(Math.random() * rsvm.fingerprint.fonts.length) + 1, fontsIndex = [];
	while (fontsIndex.length < fontNum) {
		let index = Math.floor(Math.random() * rsvm.fingerprint.fonts.length);
		if (!fontsIndex.includes(index)) {
			fontsIndex.push(index);
		}
	}
	for (const font of fontsIndex) {
		rsvm.siteInfo.fonts.push(new FontFace(font, ""));
	}

	// 
	for (const info of rsvm.fingerprint.voices) {
		let voice = rsvm.prototype.SpeechSynthesisVoice.new();
		rsvm.set(voice, "voiceURI", info['voiceURI']);
		rsvm.set(voice, "name", info['name']);
		rsvm.set(voice, "lang", info['lang']);
		rsvm.set(voice, "localService", info['localService']);
		rsvm.set(voice, "default", info['default']);
		rsvm.siteInfo.voices.push(voice);
	}
};
rsvm.randomFingerprint();
