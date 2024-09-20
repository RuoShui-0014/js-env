const fs = require("fs")
const Browser = require(`${__dirname}/../Browser/BrowserCode.js`);

function GetVMCode(type) {
    let code = "";
    if (type == 0){
        code += fs.readFileSync(`${__dirname}/rsvm-isolate-vm.js`) + '\r\n';
    } else if (type == 1){
        code += fs.readFileSync(`${__dirname}/rsvm-vm2.js`) + '\r\n';
    }
    code += fs.readFileSync(`${__dirname}/parser.js`) + '\r\n';
    code += Browser.GetBrowserCode(type); 
    code += fs.readFileSync(`${__dirname}/fingerprint.js`) + '\r\n';
    return code;
}

module.exports = {
    GetVMCode,
}