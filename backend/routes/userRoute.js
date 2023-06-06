const express=require('express')
const router=express.Router()
const {login,signUp,getUser}=require("../controller/userController")

router.post("/login",login)

router.post("/signup",signUp)

router.get("/",getUser)

module.exports=router