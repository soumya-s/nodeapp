var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome");
}).listen(8000)

function add(a,b){
    return(a+b);

}
console.log("the result is " +add(2,3))
