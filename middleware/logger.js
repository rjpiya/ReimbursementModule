
var fs = require('fs');



module.exports.log = function (message) {

    var date = new Date().toISOString().split('T')[0];
    var name = 'Errorlog' + date;
    
   
    var file =__dirname+'../Logs/' + name + '.txt';
    var stream = fs.createWriteStream(file, {
        flags: 'a'
    });
    stream.write("\n" + message + "\t" + new Date().toTimeString());
}

