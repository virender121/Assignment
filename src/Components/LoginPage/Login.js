import React from 'react'
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import { useSelector } from 'react-redux';
const Login = () => {
  // const registrationData = useSelector((state)=>state.registration)
    const handleLogin=(e)=>{
      e.preventDefault()
      // const email = e.target.email.value;
      // const password = e.target.password.value;
      // const userExists = registrationData.some(
      //   (user) => user.email=== email && user.password === password
      // );
      // if(userExists){
      //   window.location.href= '/'
      // } else {
      //   window.alert("user not exist")
      // }

    }
  return (
    <div className='register'>
      <div style={{marginTop: '2rem'}}>
       <h1 style={{color:"rgb(86, 151, 20)", textTransform: "uppercase", marginRight: '13rem'}}>Smile</h1>
      <h2 style={{marginRight:"2rem", marginBottom: '2rem'}} >Welcome Back to Smile.</h2>
      </div>
    <form onSubmit={handleLogin} className='form'>
      
        <label style={{marginRight:"15.8rem"}}>Email</label>
        <input type="email" className='input' />
        <label style={{marginRight:"13.5rem"}}>Password</label>
        <input type="password" className='input' />
        
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
  )
}

export default Login
