
import React from 'react'
import "./LeftSection.css"
import {TiPlaneOutline} from 'react-icons/ti'
import {RiPagesLine} from 'react-icons/ri'
import {IoDiamondOutline} from 'react-icons/io5'
import {AiOutlineCar} from 'react-icons/ai'
import {GiShipWheel} from 'react-icons/gi'
import {TfiTablet} from 'react-icons/tfi'
import {BsGraphUpArrow} from 'react-icons/bs'
const LeftSection = () => {
    const menu = [
        {id:1, icon:<TiPlaneOutline/>, name:"Dashboards"},
        {id:2, icon:<RiPagesLine/>, name:"Pages"},
        {id:3, icon:<IoDiamondOutline/>, name:"Elements"},
        {id:4, icon:<AiOutlineCar/>,name:"Components"},
        {id:5, icon: <GiShipWheel/>, name:"Form Elements"},
        {id:6, icon: <TfiTablet/>,name :"Tables"},
        {id:7, icon :<BsGraphUpArrow/>,name :"Chart Boxes"},
        {id:8, icon :<BsGraphUpArrow/>,name :"ChartJS"},

    ]
  return (
    <div className='container'>
     <div className='inner-container'>
      <div className='logo'>
     {menu.map((menu,index) => {
              return (
                <div className='sidebar' key={index}>
                  <div className="sidebarOption" >
                    <h2>{menu.icon}</h2>
                    <span>{menu.name}</span>
                  </div>
                </div>
              );
            })}
            </div>
     </div>
      
    </div>
  )
}

export default LeftSection
