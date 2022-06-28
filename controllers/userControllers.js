const User = require('../models/userModel');


const getAllUsers = async(req,res)=>{
    const users = await User.find({}).sort({createdAt:-1});
    res.json(users);
}

const getSingleUser = async(req,res)=>{
    const {id} =  req.params
    const user = await User.findById(id);
    if(!user){
        res.json({error:"user not found"})
    }else{
        res.json(user);
    }
}

const createNewUser = async(req,res)=>{
   const {name,age} = req.body;
   const user = await User.create({
    name,
    age
   })
   res.json({
    msg:"user created"
   })
}

const userUpdate = async(req,res)=>{
   const {id} = req.params;

  const user =  await User.findByIdAndUpdate(id,{
    ...req.body
   })
   if(!user){
    res.json({error:"no such user"})
   }else{

   res.json({msg:"user is updated"});
   }
}

const deleteUser = async(req,res)=>{
   const {id} = req.params;
   const user = await User.findByIdAndDelete(id);
   res.json({msg:"user deleted"})
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser,
    userUpdate,
    deleteUser
}