import React from 'react'
import STYLE from "../css/card.module.css"
import camera from "../images/camera.jpg"

const Card = () => {
  return (
    <div className={STYLE.container}>
        <div className={STYLE.card}>
            <div className={STYLE.image}>
                <img src={camera} alt="product"  />
            </div>
            <div className={STYLE.content}>
                <span></span> <br />
                <span className={STYLE.price}>Price</span><br />
                <span>Rating</span>
            </div>
            <div className={STYLE.button}>
              <button className={STYLE.buy}>Buy</button>
              <button className={STYLE.cart}>Add to cart</button>
            </div>

        </div>
    </div>
  )
}

export default Card