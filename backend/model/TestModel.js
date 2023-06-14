const {model,Schema}=require("mongoose")

const kittySchema=new Schema({
    name:String
})

const Kitten=model("Kitten",kittySchema)

module.exports=Kitten

