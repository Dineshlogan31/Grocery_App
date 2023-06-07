const express=require('express')
const router=express.Router()
const {login,signUp,getUser,verifyUser}=require("../controller/userController")

router.post("/login",login)

router.post("/signup",signUp)

router.get("/",getUser)

router.get("/verify/:token",verifyUser)

module.exports=router