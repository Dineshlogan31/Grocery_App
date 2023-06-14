import React, { useState } from 'react'
import  ReactDOM  from 'react-dom';
import style from "../css/portal.module.css"
const Portal = ({show,closePortal,cart}) => {
    const [count,setCount]=useState(1)
    const [hide,setHide]=useState(false)
    if(count===0)
    {
        setHide(true)
    }
    if(!show) return null;
    console.log(cart);
  return ReactDOM.createPortal(
    <div className={style.container}>
        <div className={style.content}>
            <img src={cart.image} alt="Cart"></img>
        </div>
        <div className={style.product}>
          <h5>{cart.title}</h5>
          <span className={style.desc}>Description:{cart.description}</span><br/><br/>
          <span>Category:{cart.category}</span><br/><br/>
          <span>Price:{cart.price*count}</span><br/>
           <button onClick={()=>setCount(count+1)}>+</button>
           <span className={style.count}>{count}</span>
           <button onClick={()=>setCount(count-1)} disabled={hide}>-</button>
           <div className={style.btn}>
           <button onClick={closePortal}>Place The Order</button>
        <button onClick={closePortal}>Close</button>
           </div>
        </div>
        
    </div>,
    document.getElementById("Portal-root")
  )
  
}

export default Portal