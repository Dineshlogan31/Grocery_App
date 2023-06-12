const Product=require("../model/productModel")

const getAllProducts=(req,res)=>{

res.json({msg:"Get"})
}
const addProduct=async(req,res)=>{
    const {title,price,description,category,image,rating}=req.body
    const product=await Product.create({title,price,description,category,image,rating})

    res.status(200).json(product)
}

module.exports={getAllProducts,addProduct}