var request = require('request')
, JSONStream = require('JSONStream')
, es = require('event-stream')
, fs = require('fs');



var parser = JSONStream.parse(['meta']) //emit parts that match this path (any element of the rows array) ---- Try added true after value
, req = request({url: 'http://jpmcgarrity.com/311.json'})
, logger = es.mapSync(function (data) {  //create a stream that logs to stderr,
 console.error(data)
  return data  
 })

req.pipe(parser)
parser.pipe(logger)
