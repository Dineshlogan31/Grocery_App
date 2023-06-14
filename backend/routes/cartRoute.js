const express=require("express")
const { addTocart, getCartItems, removeFromcart } = require("../controller/cartController")


const cartRoute=express.Router()

cartRoute.post("/addToCart",addTocart)

cartRoute.get("/getAllCartItems",getCartItems)

cartRoute.delete("/removeFromCart/:_id",removeFromcart)

module.exports=cartRoute