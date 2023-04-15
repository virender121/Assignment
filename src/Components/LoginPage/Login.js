import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import "./Login.css"
const Login = () => {
  const registrationData = useSelector((state)=>state.registration)
  const navigate = useNavigate()
    const handleLogin=(e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      const userExists = registrationData.some(
        (user) => user.email=== email && user.password === password
      );
      if(userExists){
        navigate('/dashboard')
      } else {
        window.alert("user not exist")
      }

    }
  return (
    <div className='first'>
      <div className='sub-main'>
  
    <form onSubmit={handleLogin} className='form'>
    <h1 style={{color:"rgb(86, 151, 20)", textTransform: "uppercase", marginRight: '13rem',fontFamily:"cursive"}}>Smile</h1>
      <h2 style={{marginRight:"2rem", marginBottom: '2rem',fontFamily:"cursive"}} >Welcome Back to Smile.</h2>
      
        <label style={{marginRight:"15.8rem"}}>Email</label>
        <input type="email" className='input' name='email'/>
        <label style={{marginRight:"13.5rem"}}>Password</label>
        <input type="password" className='input' name='password' />
        
      <button type="submit" className='btn'>Sign In</button>
      <p>
            New here?
            
            <Link to ='/register' style={{color:"rgb(86, 151, 20)"}}>Create a new account</Link>
          </p>
          <span style={{ display: "flex" }}>
                <hr style={{ width: "4.4rem", height: "0px" }} />
                &nbsp;&nbsp;Or sign in with&nbsp;&nbsp;
                <hr style={{ width: "4.4rem", height: "0px" }} />
              </span>
          <button className='btngoogle'><FcGoogle/>Google</button>
          <div className='btn2'><button className='btngit'><BsGithub/>GitHub</button>
          <button className='btnfacebook'><BsFacebook/>Facebook</button></div>
          </form>
   </div>
  </div>
  )
}

export default Login
