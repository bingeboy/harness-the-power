var fs = require('fs');


var rs = fs.createReadStream('./assets/311.json');

rs.pipe(process.stdout, { end : false });
