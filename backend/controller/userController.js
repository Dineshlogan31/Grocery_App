const User=require("../model/userModel")
const express=require('express')
const jwt=require('jsonwebtoken')
const nodemailer=require("nodemailer")


//creating the token
function createToken(_id)
{
    return jwt.sign({_id},"bmsdnbcjbdcjsb",{expiresIn:"1d"})
}

const getUser=async (req,res)=>
{
    const user=await User.find({})
    res.json(user)
}

//Signup the user
const signUp=async (req,res)=>{
    const {email,password}=req.body

try {
    const user=await User.signin(email,password)
const token=createToken(user._id)

//create transport object for nodemailer
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"dineshlogan31@gmail.com",
        pass:"mqvlrspjmhetrolh"
    }
})

//set the email content send to thr receiver
const mailContent={
    from:"dineshlogan31@gmail.com",
    to:"daxadep857@rockdian.com",

    subject: 'Email Verification',
      
    
    text: `Hi! There, You have recently visited 
           our website and entered your email.
           Please follow the given link to verify your email
           http://localhost:3000/verify/${token} 
           Thanks`
}

transporter.sendMail(mailContent,(error,info)=>{
if(error) throw  Error(error)
console.log("Email sent successfully");
console.log(info);
})

res.status(200).json({Message:"Email sent Successfully"})
} catch (error) {
    res.status(404).json({error:error.message})
}

}

//Login user
const login=async (req,res)=>{
    const {email,password}=req.body
    

    try {
        const user=await User.login(email,password)
        const token=createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(404).json({err:error.message})
    }
}


module.exports={login,signUp,getUser}