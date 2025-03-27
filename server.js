// import express from "express";
// import users from "./MOCK_DATA.json" assert{type:"json"} 
// // import mangoose from "mongoose"
// // import connectdb from "./connect.js"

// //const express = require("express");
// //const users = require("./MOCK_DATA.json");

// const app = express();
// const Port = 8000;

// app.listen(Port,() => console.log('server started'));




// app.get('/api/users',(req, res,) =>{ 
//     return res.json(users);
// });

// app.get('/users',(req, res)=>{
//     const html = `
//     <ul>
//      ${users.map(user => `<li>${user.name}</li>`).join('\n')}
//     </ul>
//     `
//      res.send(html);
// });

// app .route("/api/users/:id")
//     .get((req, res)=>{
//     const id =Number( req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
//     })
//     .patch((req,res)=>{
//     return
//     })
//     .delete((req,res)=>{
//     return
//     })






// const cors = require("cros");
// const mangoose = require("mongoose");
// const router =require("")
// const connectdb = require('./src/connect.js')


// app.use(cros());
// app.use(express.json());

// mangoose.connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useunifiedTopology:true,
// }).then(()=>{
//     console.log('db connected');
// });


// connectdb()

