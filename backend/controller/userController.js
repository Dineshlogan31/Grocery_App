const User=require("../model/userModel")
const express=require('express')
const jwt=require('jsonwebtoken')
const nodemailer=require("nodemailer")


//creating the token
function createToken(_id)
{
    return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn:"1d"})
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
    to:"hilosi4817@rockdian.com",

    subject: 'Email Verification',
      
    
    html:`<a href="http://localhost:5000/verify/${token}">click here to confirm your email</a>`
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
        if(!user.verified)
        {
            return res.json({VerifyMessage:"Verify your Email"})
        }

        res.status(200).json({Message:"LoggedIn Successfully"})
    } catch (error) {
        res.status(404).json({err:error.message})
    }
}

const verifyUser=async (req,res)=>{
const {token}=req.params

if(!token)
{
    res.json({"Msg":"Invalid User"})
}
const load=await jwt.verify(token,process.env.SECRET_KEY)

const user=await User.findOne({_id:load._id}).exec()
if(!user)
{
    res.json({"Msg":"User doesn't exist"})
}
user.verified=true;
await user.save()
res.json({"Msg":"Account verified"})
}


module.exports={login,signUp,getUser,verifyUser}