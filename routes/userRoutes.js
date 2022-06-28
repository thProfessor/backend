const express = require('express');
const { getAllUsers,getSingleUser,createNewUser,userUpdate,deleteUser } = require('../controllers/userControllers');
const router = express.Router();


router.get("/",getAllUsers)

router.post("/",createNewUser)

router.get("/:id",getSingleUser)

router.patch("/:id",userUpdate)

router.delete("/:id",deleteUser)

module.exports = router;