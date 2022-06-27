require("dotenv").config();
const express = require("express");

const app = express();


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get("/users",(req,res)=>{

    res.status(200).send("get all users")
})

app.post("/user",(req,res)=>{
    res.send("create single user")
})

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})