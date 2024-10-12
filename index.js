var http = require('http');
var calc = require('./calc.js');



fs.readFile('calc.js','utf8',function(err,data){
    console.log(data);
})
var sum  = calc.add(2,3)
console.log("the result is " +sum)

//reading file


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome");
}).listen(8000)

