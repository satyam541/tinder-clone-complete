const express   =   require('express');
const PORT      =   8080;
const app       =   express();
const mongodb   =   require('mongoose');

app.listen(PORT,(req,res)=>{
    return console.log("Server listening on port "+PORT);
})

app.get("/",(req,res)=>{
    res.json("local backend host");
});

app.get("/signup",(req,res)=>{
    res.json("local backend host");
});