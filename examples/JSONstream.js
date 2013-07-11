var JSONStream = require('JSONStream')
, fs = require('fs');

var parser = JSONStream.parse(['meta', true, 'columns',true, 'cachedContents','largest'])

parser.on('data', function(parsedData) {
	console.dir(parsedData);
});

fs.createReadStream('./assets/311.json').pipe(parser);
