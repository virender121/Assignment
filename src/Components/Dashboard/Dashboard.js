

import React from 'react'
import "./Dashboard.css"
import LeftSection from '../../Section/LeftSection/LeftSection'              
import RightSection from '../../Section/RightSection/RightSection'
import Header from '../../Section/Header/Header'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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

      <div className='rightsection'>
        <div className='right-header'><Header/></div> 
        <RightSection/>
      </div>
    </div>
  )
}

export default Dashboard

