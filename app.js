const express = require('express');
const app =express();
app.get('/',function(req,res){
        res.send("hello World");

    })
    app.get('/home',function(req,res){
         res.send("Welcome home");
    })
    app.get('/index/:id',function(req,res){
        var id = req.params.id;
        res.send("You are in " +id)
    })
app.listen(9000,function(req,res){
    console.log("running");
})
