import React from 'react'
import "./Header.css"
import {ImSearch} from 'react-icons/im';
import Avatar from '@mui/material/Avatar';
const Header = () => {
  return (
    <div className= 'header'>
        <div><ImSearch/></div> 
      <div>
      <Avatar src="https://cdn.batesvilletechnology.com/fh_live/13000/13002/images/obituaries/6827690.jpg" 
      alt="Cindy Baker"/>
      </div>
    </div>
  )
}

export default Header
