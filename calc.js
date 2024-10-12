exports.add = function add(a,b){
    return(a+b);

}
const fs = require('node:fs');


fs.readFile('./hello.txt','utf8',(err,data)=>{
   if(err){
    console.error(err)
    return
   } 
   console.log(data);
})
//write to file

fs.writeFile('hello.txt',"adding data",err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Successfully written");
})
//appending data
fs.appendFile('hello.txt',"appending data",err=>{
    console.log("done appending")
})
//module.exports.add = add;
//exports.add = add;