import React, { useState, useEffect } from 'react';
import './Header.css';
import { ImSearch } from 'react-icons/im';
import Avatar from '@mui/material/Avatar';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div className={`header ${color ? 'header--colored' : ''}`}>
      <ImSearch className="header__search-icon" />
      <Avatar
        src="https://cdn.batesvilletechnology.com/fh_live/13000/13002/images/obituaries/6827690.jpg"
        alt="Cindy Baker"
      />
      <div className="header__hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
      <div className={`header__left-section ${click ? 'header__left-section--open' : ''}`}>
        <ul className="header__menu">
          <li className="header__menu-item">Menu Item 1</li>
          <li className="header__menu-item">Menu Item 2</li>
          <li className="header__menu-item">Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
