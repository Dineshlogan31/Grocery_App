import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import STYLE from "../css/card.module.css"
import {getAllCartItems,removeFromCart} from "../store/cartSlicer"
import Portal from './Portal';


const Cart = () => {

  const [show,setShow]=useState(false)
  const [cart,setCart]=useState([])

    const dispatch=useDispatch()
    
    const carts=useSelector((state)=>state.cart)
   const price=carts && carts.reduce((acc,value)=>{
    return acc+value.price
   },0)

   const originalPrice=Math.ceil(price)
   
   
    const removecart=(e,cart)=>{
        e.preventDefault()
        dispatch(removeFromCart(cart))
      }

      const handleBuy=(cart)=>{
        setShow(true)
        setCart(cart)
      }

    useEffect(()=>{
      dispatch(getAllCartItems())
    },[dispatch,carts])

    if(carts.length===0)
     return (<h1>No items in Cart</h1>)

  return (
    <>
    <h1>Your Cart Items:{carts && carts.length}</h1>
    <h3>Your Cart Price:{originalPrice}</h3>
    <div className={STYLE.container}>
            {Array.isArray(carts) ? carts.map((cart)=>{
                return  <div className={STYLE.card} key={cart._id}>
                <div className={STYLE.image}>
                    <img src={cart.image} alt="product"  />
                </div>
                <div className={STYLE.content}>
                    <span>Product:{cart.title}</span> <br />
                    <span>Price:${cart.price}</span><br />
                    <span>Rating:{cart.rating.rate}</span>
                </div>
                <div className={STYLE.button}>
                  <button className={STYLE.buy} onClick={()=>{handleBuy(cart)}}>Buy</button>
                  <button className={STYLE.cart} onClick={(e)=>removecart(e,cart)}>Remove cart</button>
                </div>
        
            </div>
      
            }):null}
        </div>
        <Portal show={show} closePortal={()=>setShow(false)} cart={cart}/>
    </>
    
  )
}

export default Cart