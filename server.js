require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json())
app.use("/users",userRoutes);
// route
// getting the user

// create a user




// link to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db and server running on port ${process.env.PORT}`)
    })
}).catch(err => console.log(err))

