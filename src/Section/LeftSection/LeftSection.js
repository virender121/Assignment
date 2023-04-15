import React,{useState} from 'react'
import "./LeftSection.css"
import {TiPlaneOutline} from 'react-icons/ti'
import {RiPagesLine} from 'react-icons/ri'
import {IoDiamondOutline} from 'react-icons/io5'
import {AiOutlineCar} from 'react-icons/ai'
import {GiShipWheel} from 'react-icons/gi'
import {TfiTablet} from 'react-icons/tfi'
import {BsGraphUpArrow} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const LeftSection = () => {

  const navigate = useNavigate()
  const [showAnalytic, setShowAnalytic] = useState(false)

  const menu = [
    {id:1, icon:<TiPlaneOutline/>, name:"Dashboards", submenu: [
      {
        id: 1,
        name: 'Analytic',
        onClick: () => {
          setShowAnalytic(false)
          navigate('/analytics')
        }
      }
    ]},
    {id:2, icon:<RiPagesLine/>, name:"Pages"},
    {id:3, icon:<IoDiamondOutline/>, name:"Elements"},
    {id:4, icon:<AiOutlineCar/>,name:"Components"},
    {id:5, icon: <GiShipWheel/>, name:"Form Elements"},
    {id:6, icon: <TfiTablet/>,name :"Tables"},
    {id:7, icon :<BsGraphUpArrow/>,name :"Chart Boxes"},
    {id:8, icon :<BsGraphUpArrow/>,name :"ChartJS"},
  ]

  const toggleAnalytic = () => {
    setShowAnalytic(!showAnalytic)
  }

  return (
    <div className='container'>
      <div className='inner-container'>
        <div className='logo'>
          {menu.map((menuItem, index) => {
            const { id, icon, name, submenu } = menuItem
            return (
              <div className='sidebar' key={id}>
                <div className='sidebarOption'>
                  <h2>{icon}</h2>
                  <span onClick={submenu ? toggleAnalytic : undefined}>{name}</span>
                  {submenu && showAnalytic && (
                    <div className='submenu'>
                      {submenu.map((subMenuItem, subIndex) => {
                        const { id, name, onClick } = subMenuItem
                        return (
                          <div className='sidebar' key={id}>
                            <div className='sidebarOption'>
                              <h2></h2>
                              <span onClick={onClick}>{name}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LeftSection;
