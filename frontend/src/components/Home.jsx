import React from 'react'
// import img from '../images/background imagen home.jpg'
import Nav from './Nav'
import STYLE from '../css/home.module.css'
import Products from './Products'

const Home = () => {
  return (
    <div className={STYLE.home}>
<Nav/>
<Products/>
    </div>
  )
}

export default Home