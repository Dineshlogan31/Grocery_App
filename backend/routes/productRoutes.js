const express=require("express")

const { getAllProducts, addProduct } = require("../controller/productController")

const router=express.Router()

router.get("/getAllProducts",getAllProducts)

router.post("/addProduct",addProduct)

module.exports=router