const os = require("os");

// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())


const {totalmem, freemem} = require("os");

// console.log(totalmem())
// console.log(freemem())

// console.log(__dirname)
// console.log(__filename)

const path = require("path");

const extensionName = path.extname(__filename);
// console.log(extensionName);

const joinName = path.join(__dirname, "/../views.js");
console.log(joinName);