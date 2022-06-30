require("dotenv").config();
<<<<<<< Updated upstream
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
=======

const express = require('express');
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middlewares
app.use(express.json());
// routes
 app.use("/foods",foodRoutes); 
 app.use("/users",authRoutes); 
 
// get all users

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server running on ${process.env.PORT} and connected to db`)
    })
})
.catch(err=>console.log(err))
// port
>>>>>>> Stashed changes
