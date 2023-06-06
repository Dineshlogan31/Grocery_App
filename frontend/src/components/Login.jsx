import React,{useState} from 'react'
import axios from "axios"
import {MDBInput,MDBRow,MDBCol,MDBCheckbox,MDBBtn} from 'mdb-react-ui-kit'

import {useNavigate} from 'react-router-dom'

import STYLE from '../css/login.module.css'

const Login = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [error,setError]=useState(null)

    const navigate=useNavigate()

    const handleSubmit= (e)=>{
      e.preventDefault()
          //Signup using axios
     axios.post("http://localhost:5000/login",{
      email:email,
      password:password
    }).then((response)=>{
      console.log(response);
      navigate("/")})
      .catch((err)=>{
         if(err)
         {
          setError(err.response.data.err)
         }
    })
    }


    let handleNavigate=()=>{
        navigate("/signup")
    }
    
  return (
    <div className={STYLE.LoginForm}>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' onChange={(e)=>{setEmail(e.target.value)}} />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' onChange={(e)=>{setPassword(e.target.value)}} />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me'  />
        </MDBCol>
        <MDBCol>
          <a href='/'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' block>
        Log in
      </MDBBtn>
      <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
          <span  onClick={handleNavigate}>I'm new here,create new Account?</span>
        </MDBCol>
      </MDBRow>
      {error && <div className={STYLE.error} style={{color:"red"}}>{error}</div>}
    </form>
    </div>
  )
}

export default Login