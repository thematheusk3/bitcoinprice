const fs = require('fs');
function writeLog(message) {
    let text = message + "\r\n";
    fs.appendFile("log.log", message, function (err) {
        if (err) {
            return trueLog(err);
        }
    });
}
module.exports = writeLog;