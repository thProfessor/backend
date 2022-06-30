const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = (req,res,next) => {

    const {authorization} = req.headers;
    if(!authorization){
        return res.json({err:"you must be logged in to see this"})
    }

    const token = authorization.replace("Bearer ","");

    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            return res.json({err})
        }

        const {id} = payload;

        User.findById(id)
        .then((user)=>{
            req.user = {
                name:user.name,
                email:user.email,
            }
            next();
        })

    })

  
}