import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import "./App.css"

const App = () => {
  return (
    <React.Fragment>
        <Router>
            <Routes>
                <Route path='/' element={<NavBar/>} />
                <Route path='/login'  element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </Router>
    </React.Fragment>
  )
}

export default App