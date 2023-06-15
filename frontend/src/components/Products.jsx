import React,{useEffect}from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getAllProducts} from "../store/productSlicer"
import style from "../css/demo.module.css"
// import {addToCart} from "../store/cartSlicer"
import { toast } from 'react-toastify'
import {addToCartAsync, getAllCartItems} from "../store/cartSlicer"


const Products = () => {
    
    const products=useSelector((state)=>state.product)
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()

    let addCart=(e,product)=>{
      console.log("hiii");
      e.preventDefault()
     let checkCart=Array.isArray(cart)&&cart.some((car)=>car._id === product._id)
     if(checkCart)
     {
        return toast.warning("Already added to your cart")
     }
      dispatch(
        addToCartAsync({
            product
        }) )
    }

    useEffect(()=>{
        dispatch(
           getAllProducts(),
           getAllCartItems()
        )
        },[dispatch,cart])
  return (
    // <div className={STYLE.container}>
    //         {Array.isArray(products) ? products.map((product)=>{
    //             return  <div className={STYLE.card} key={product._id}>
    //             <div className={STYLE.image}>
    //                 <img src={product.image} alt="product"  />
    //             </div>
    //             <div className={STYLE.content}>
    //                 <span>Product:{product.title}</span> <br />
    //                 <span>Price:${product.price}</span><br />
    //                 <span>Rating:{product.rating.rate}</span>
    //             </div>
    //             <div className={STYLE.button}>
    //               <button className={STYLE.buy}>Buy</button>
    //               <button className={STYLE.cart} onClick={(e)=>addCart(e,product)}>Add to cart</button>
    //             </div>
        
    //         </div>
      
    //         }):null}
    //     </div>

    <div className={style.container}>
      {Array.isArray(products) ? products.map((product)=>{
        return  <div className={style.card} key={product._id}>
        <div className={style.card_header}>
        <h3>{product.title}</h3>
         <p><i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-regular fa-star-half-stroke"></i></p>
         <span>new</span>
        </div>
        <div className={style.card_img}>
      <img src={product.image} alt="" />
      <i className="fa-solid fa-heart"></i>
        </div>
        <div className={style.card_details}>
          <div className={style.price}>
              <span>Price:</span>
              <strong>${product.price}</strong>
          </div>
        </div>
        <div className={style.card_footer}>
            <button>Buy</button>
            <button onClick={(e)=>addCart(e,product)}>Add to cart</button>
        </div>
      </div>
      }):null
    }
   
 </div>
  )
          }

export default Products