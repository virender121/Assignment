import React from 'react';
import "./Register.css"
// import {useDispatch} from 'react-redux'
// import {addUser} from '../../store/registrationSlice'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


import {Link} from 'react-router-dom'
 const Register = () => {
//  const dispatch = useDispatch();

  const handleRegister=(e) =>{
   e.preventDefault()
  //  const registrationData ={
  //   name: e.target.name.value,
  //   email: e.target.email.value,
  //   password: e.target.password.value
  //  }
  //  dispatch(addUser(registrationData))
  // }
  }
    
      

  return (
    <div className='register'>
      <div style={{marginTop: '2rem'}}>
       <h1 style={{color:"rgb(86, 151, 20)", textTransform: "uppercase", marginRight: '13rem'}}>Smile</h1>
      <h2 style={{marginRight:"2rem", marginBottom: '2rem'}} >Welcome Back to Smile.</h2>
      </div>
      
      <form onSubmit={handleRegister} className='form'>
        <label style={{marginRight:"13.5rem"}}>Username</label>
          <input type="text"  className='input' />
          <label style={{marginRight:"15.8rem"}}>Email</label>
          <input type="email" className='input' />
          <label style={{marginRight:"13.5rem"}}>Password</label>
          <input type="password"  className='input' />
          
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
  );
};
export default Register