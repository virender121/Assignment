import React from 'react';
import "./Register.css"
import {useDispatch} from 'react-redux'
import {addUser} from '../../store/registrationSlice'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'

 const Register = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate()
 const handleRegister=(e) =>{
   e.preventDefault()
   const registrationData ={
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value
   }
  //  validate name
   if (!/^[a-zA-Z ]*$/.test(registrationData.name)) {
    alert('Invalid name');
    return;
  }
  
  // validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationData.email)) {
    alert('Invalid email');
    return;
  }
  
  // validate password
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(registrationData.password)) {
    alert('Invalid password');
    return;
  }
  
   dispatch(addUser(registrationData))
   navigate('/')

  }
  
    
      

  return (
    <div className='first'>
      <div className='sub-main'>
      
      <form onSubmit={handleRegister} className='form'>
      <h1 style={{color:"rgb(86, 151, 20)", textTransform: "uppercase", marginRight: '13rem',fontFamily:"cursive"}}>Smile</h1>
      <h2 style={{marginRight:"2rem", marginBottom: '2rem',fontFamily:"cursive"}} >Welcome Back to Smile.</h2>
        <label style={{marginRight:"13.5rem"}}>Username</label>
          <input type="text" name='name' className='input' />
          <label style={{marginRight:"15.8rem"}}>Email</label>
          <input type="email"  name='email' className='input' />
          <label style={{marginRight:"13.5rem"}}>Password</label>
          <input type="password"  name='password' className='input' />
          
        <button type="submit" className='btn'>Register</button>
        <p>
              Already a Existing user ?
              
              <Link to ='/' style={{color:"rgb(86, 151, 20)"}}>Login</Link>
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
  );
};
export default Register 