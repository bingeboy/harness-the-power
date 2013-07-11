/*  __  __     ____         _   __          __   
   / / / /__  / / /___     / | / /___  ____/ /__ 
  / /_/ / _ \/ / / __ \   /  |/ / __ \/ __  / _ \
 / __  /  __/ / / /_/ /  / /|  / /_/ / /_/ /  __/
/_/ /_/\___/_/_/\____/  /_/ |_/\____/\__,_/\___/*/


var http = require('http')
   , message = "Hello Node!"
   , host = "localhost"
   , port = "9000"
   , server = http.createServer();
   
server.on("request", function (req, res) {
	  res.writeHead(200, {"Content-Type": "text/plain"});
	  res.end(message);
}).listen(port, host);

console.log("Server running at: "+host+":"+port);
