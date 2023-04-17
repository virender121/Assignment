

import React,{useState} from 'react'
import "./Dashboard.css"
import LeftSection from '../../Section/LeftSection/LeftSection'              
import RightSection from '../../Section/RightSection/RightSection'
import Header from '../../Section/Header/Header'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Footer from '../../Section/Footer/Footer'

const Dashboard = () => {

  console.log("world")
  const user = useSelector(state => state)
console.log(user,"====")
  if (!user) {
    return <Navigate to="/" replace />;
  }


  
  return (
    <div className="main">
     
      
      <div className='leftsection'><LeftSection/></div>

      <div className='rightsection'> <Header />
        <RightSection/>
      </div>
    </div>
  )
}
export default Dashboard;

