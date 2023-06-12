import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home';
import Cart from './components/Cart';
import "./App.css"

const App = () => {
  return (
   
    <>
     <ToastContainer/>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login'  element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </Router>
    </>
    
  )
}

export default App