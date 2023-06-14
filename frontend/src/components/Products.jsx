import React,{useEffect}from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getAllProducts} from "../store/productSlicer"
import STYLE from "../css/card.module.css"
// import {addToCart} from "../store/cartSlicer"
import { toast } from 'react-toastify'
import {addToCartAsync, getAllCartItems} from "../store/cartSlicer"


const Products = () => {
    
    const products=useSelector((state)=>state.product)
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()

    let addCart=(e,product)=>{
      e.preventDefault()
     let checkCart=Array.isArray(cart)&&cart.some((car)=>car._id === product._id)
     if(checkCart)
     {
        return toast.warning("Already added to your cart")
     }
      dispatch(
        addToCartAsync({
            product
        })
        
      )
     
    }

    useEffect(()=>{
        dispatch(
           getAllProducts(),
           getAllCartItems()
        )
        },[dispatch,products,cart])
  return (

    <div className={STYLE.container}>
            {Array.isArray(products) ? products.map((product)=>{
                return  <div className={STYLE.card} key={product._id}>
                <div className={STYLE.image}>
                    <img src={product.image} alt="product"  />
                </div>
                <div className={STYLE.content}>
                    <span>Product:{product.title}</span> <br />
                    <span>Price:${product.price}</span><br />
                    <span>Rating:{product.rating.rate}</span>
                </div>
                <div className={STYLE.button}>
                  <button className={STYLE.buy}>Buy</button>
                  <button className={STYLE.cart} onClick={(e)=>addCart(e,product)}>Add to cart</button>
                </div>
        
            </div>
      
            }):null}
        </div>
  )
          }

export default Products