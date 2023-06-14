const express=require('express')
const mongoose=require("mongoose")
const router=require('./routes/userRoute')
const Productrouter=require("./routes/productRoutes")
const cartRouter=require("./routes/cartRoute")
const cors=require('cors')
require('dotenv').config()


const app=express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/',router)
app.use("/",Productrouter)
app.use("/",cartRouter)



mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,(err)=>{
        if(err) throw err
        console.log("database is connected & Listening port 5000");
    })
}).catch((err)=>{
    console.log(err);
})

