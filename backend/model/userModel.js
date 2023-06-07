const {Schema,model}=require('mongoose')
const bcrypt=require("bcrypt")
const validator=require("validator")

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
},
verified:{
    type:Boolean,
    required:true,
    default:false
},
    password:{
        type:String,
        required:true
    }
})


userSchema.statics.signin=async function(email,password)
{
    if(!email)
    {
        throw Error("Please enter your email")
    }
    if(!validator.isEmail(email))
    {
        throw Error("Please enter valid email address")
    }
    if(!password)
    {
        throw Error("Please enter password")
    }
    
    if(!validator.isStrongPassword(password))
    {
        throw Error("Password is weak.Atleast Should contain 8 characters,one uppercase,one number and special character")
    }
    const exist=await this.findOne({email})
   if(exist)
   {
    throw Error("Email Already exist")
   }
  //hasing the password for data security
   const salt=await bcrypt.genSalt(10)
   const hash=await bcrypt.hash(password,salt)
   const user=await this.create({email,password:hash})
   return user
}

userSchema.statics.login=async function(email,password)
{
    if(!email)
    {
        throw Error("Please enter your email")
    }
    if(!password)
    {
        throw Error("Please enter password")
    }
    
    const exist=await this.findOne({email})
    if(!exist)
    {
        throw Error("User is not exist")
    }

    const user=await bcrypt.compare(password,exist.password)
    if(!user)
    {
        throw Error("Incorrect Password")
    }
return exist
}

module.exports=model("user",userSchema)