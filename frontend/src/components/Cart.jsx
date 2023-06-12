import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import STYLE from "../css/cart.module.css"
import {removecart} from "../store/cartSlicer"

const Cart = () => {
    const dispatch=useDispatch()
    const carts=useSelector((state)=>state.cart)
    let price=carts.reduce((acc,cv)=>{
        return acc+cv.product.price
    },0)
    let a=Math.ceil(price)
    let remove=(e,cart)=>{
        e.preventDefault()
        dispatch(
            removecart(
                cart
            )
        )
    }
  return (
    <>
    <h1>Your Cart Items:{carts.length}</h1>
    <h2>your Cart Price:{a}</h2>
    <div className={STYLE.mainDiv}>
         <ul>
            {Array.isArray(carts) ? carts.map((cart)=>{
                return <div className={STYLE.cardDiv} id={cart.product.id} key={cart.product.id}>
                    <img src={cart.product.image} alt="Product" srcSet="" />
                       <h6>{cart.product.title}</h6>
                       <span>Price:{cart.product.price} Rating:{cart.product.rating.rate}</span>
                       
                       <button className={STYLE.buy}>Buy</button>
                       <button className={STYLE.cart} onClick={(e)=>{remove(e,cart)}}>Remove from cart</button>
                       </div>
            }):null}
            </ul>
    </div>
    </>
  )
}

export default Cart