var http = require('http');
var calc = require('./calc.js');

var sum  = calc.add(2,3)
console.log("the result is " +sum)


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome");
}).listen(8000)

