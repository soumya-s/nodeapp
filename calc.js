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

//module.exports.add = add;
//exports.add = add;