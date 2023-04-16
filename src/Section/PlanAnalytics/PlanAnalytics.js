import React from 'react'
import { ImAirplane } from 'react-icons/im';
import './PlanAnalytics.css'
import { IoStar } from 'react-icons/io5';
const PlanAnalytics = () => {
  return (
    <div className='plan'>
      <ImAirplane style={{marginLeft:"1rem",marginTop:"1.5rem"}}/>
      <div className='conten'>
     
      <div className='about'><h3>Analytics Dashboard</h3>
      <p>This is an example dashboard created using built-in elements and components</p></div></div>
      <div className='button'>
      <IoStar/>
      <button className='btn5'>+ Create New</button></div>
    </div>
  )
}

export default PlanAnalytics
