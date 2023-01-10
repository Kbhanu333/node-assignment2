

const express = require('express');

const app = express();

app.get("/api/main",function(req, res){

    res.send("<h1> Express </h1> <br/> <p>Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in. Express JS is a Node.</p>  ")

}) 

app.listen(4000,()=>{

    console.log("app is running in 4000 Port ")
})

