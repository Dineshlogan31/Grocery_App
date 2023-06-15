import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../css/demo.module.css"
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
    },[dispatch])

    // if(carts.length===0)
    //  return (<h1>No items in Cart</h1>)

  return (
    <>
    <h1>Your Cart Items:{carts && carts.length}</h1>
    <h3>Your Cart Price:{originalPrice}</h3>
    <div className={style.container}>
            {Array.isArray(carts) ? carts.map((cart)=>{
                return  <div className={style.card} key={cart._id}>
                <div className={style.card_header}>
                <h3>{cart.title}</h3>
                 <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-regular fa-star-half-stroke"></i></p>
                 <span>new</span>
                </div>
                <div className={style.card_img}>
              <img src={cart.image} alt="" />
              <i class="fa-solid fa-heart"></i>
                </div>
                <div className={style.card_details}>
                  <div className={style.price}>
                      <span>Price:</span>
                      <strong>${cart.price}</strong>
                  </div>
                </div>
                <div className={style.card_footer}>
                    <button onClick={handleBuy}>Buy</button>
                    <button onClick={(e)=>{removecart(e,cart)}}>remove</button>
                </div>
              </div>
      
            }):null}
        </div>
        <Portal show={show} closePortal={()=>setShow(false)} cart={cart}/>
    </>
    
  )
}

export default Cart