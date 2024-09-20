const fs = require('fs');
const Tool = require(`${__dirname}/Tools/ToolCode.js`);

const WebSocket = require('ws');

const VMCode = Tool.GetVMCode(0);
const ivm = require(`${__dirname}/Tools/isolated_rsvm.node`).ivm;

let code = VMCode + fs.readFileSync(`${__dirname}/Sites/rs_药监局.js`);

let isolate = new ivm.Isolate({ inspector: true, memoryLimit: 1024 });
(async function () {
    let context = await isolate.createContext({ inspector: true, rsvm: true, intercept: true });

    let inspector = isolate.createInspectorSession(); 
    inspector.dispatchProtocolMessage('{"id":1,"method":"Debugger.enable"}');

    let script = await isolate.compileScriptSync(code, { filename: 'example.js' });
    let result = await script.run(context);
    console.log(result);

    inspector.dispose();
}()).catch(console.error);

const PORT = 9229;
let wss = new WebSocket.Server({ port: PORT });
wss.on('connection', function (ws) {
    // Dispose inspector session on websocket disconnect
    let channel = isolate.createInspectorSession();

    function dispose() {
        try {
            channel.dispose();
        } catch (err) { }
    }
    ws.on('error', dispose);
    ws.on('close', dispose);

    // Relay messages from frontend to backend
    ws.on('message', function (message) {
        try {
            channel.dispatchProtocolMessage(String(message));
        } catch (err) {
            // This happens if inspector session was closed unexpectedly
            ws.close();
        }
    });

    // Relay messages from backend to frontend
    function send(message) {
        try {
            ws.send(message);
        } catch (err) {
            dispose();
        }
    }
    channel.onResponse = (callId, message) => send(message);
    channel.onNotification = send;
});
console.log('devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:' + PORT);