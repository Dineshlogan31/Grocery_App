const {model,Schema}=require("mongoose")
const Product=require("./productModel")

const cartSchema=new Schema({
    _id:Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }


},{
    strict:false
})

module.exports=model("cartItems",cartSchema)