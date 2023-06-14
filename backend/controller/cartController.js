const CartItems=require("../model/cartModel")



const getCartItems=async (req,res)=>{
   const cartItems=await CartItems.find()
   res.status(200).json(cartItems)
    
}

const addTocart=async (req,res)=>{
      const {_id,title,price,description,category,image,rating}=req.body
    const cart=await CartItems.create({_id,title,price,description,category,image,rating})
    res.status(200).json(cart)
}

const removeFromcart=async(req,res)=>{
      const {_id}=req.params
      const removeItem=await CartItems.findByIdAndDelete({_id})
      res.status(200).json(removeItem)
}
module.exports={addTocart,getCartItems,removeFromcart}