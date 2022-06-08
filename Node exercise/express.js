// const express = require('express'); 
// const app = express(); 
// app.listen(3000, () => { console.log('Your Server is running on 3000'); })

// const { appendFile } = require("fs");



// // const express = require('express')
// // const app = express();
// // app.listen(3000, () => { console.log('Your Server is runnung on 300'); })


// // app.get("/", function(req, res, next){


// // res.send("welcome to Add");

// // })



// const express = require('express');
// const app = express();
// app.listen(3000, () => {
// console.log('Your Server is running on 3000');
// res.send("welcome to Add");


// })

// appendFile.listen(80, () => {

//     console.log('Your server is running on 300');


const express = require('express');
const app = express();


app.use("/admin",function(req,res,next){
    console.log('In the middleware 1');
    next();
   })

   app.use("/admin",function(req,res,next){
    console.log('In the middleware 2');
    next();
   })



app.listen(85, () =>{

    console.log("Your server is running on port 80");

})

app.get("/", function(req,res,next){
    res.send("Welcome");
})
   

app.get("/admin", function(req,res,next){
    console.log('Admin Landing');
    res.send('Admin Page');
})





// app.get("/admin",function(req,res,next){
//     console.log('Admin Landing');
//   res.send('<form action = "/postData" method = "post">Name<input>')
// res.sendFile()
   
//    })

 // app.get("/add", function(req, res, next){
//      res.send("Welcome to add")
// }) 
//    app.post("/product",function(req,res,next){
//     console.log('In the post!');
//    })

   


