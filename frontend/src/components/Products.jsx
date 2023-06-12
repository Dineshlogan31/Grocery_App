import React,{useEffect}from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getAllProducts} from "../store/productSlicer"
import STYLE from "../css/products.module.css"
import {addToCart} from "../store/cartSlicer"
import { toast } from 'react-toastify'


const Products = () => {
    
    const products=useSelector((state)=>state.product)
    const cart=useSelector((state)=>state.cart)
    
    const dispatch=useDispatch()

    let addCart=(e,product)=>{
      e.preventDefault()
     let checkCart=Array.isArray(cart)&&cart.some((car)=>car.product.id === product.id)
     console.log(checkCart);
     if(checkCart)
     {
        return toast.warning("Already added to your cart")
     }
      dispatch(
        addToCart({
            product
        })
        
      )
     
    }

    useEffect(()=>{
        dispatch(
           getAllProducts()
        )
        },[dispatch,products])
  return (
        <div className={STYLE.mainDiv}>
            <ul>
            {Array.isArray(products) ? products.map((product)=>{
                return <div className={STYLE.cardDiv} id={product.id} key={product.id}>
                    <img src={product.image} alt="Product" srcSet="" />
                       <h6>{product.title}</h6>
                       <span>Price:{product.price} Rating:{product.rating.rate}</span>
                       
                       <button className={STYLE.buy}>Buy</button>
                       <button className={STYLE.cart}  onClick={(e)=>{addCart(e,product)}}>Add To cart</button>
                       </div>
            }):null}
            </ul>
        </div>
  )
}

export default Products