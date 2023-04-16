import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = ({ currentRoute }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

    const handleHomepageClick = () => {
        navigate('/dashboard')
    }

    return (
        <div className='footer'>
            <h5 className='footer-text'>Copyright 2019 - DashboardPack.com</h5>
            {currentRoute === 'dashboard' && (
                <button className='footer-button' onClick={handleLogout}>Logout</button>
            )}
            {currentRoute === 'analytics' && (
                <button className='footer-button' onClick={handleHomepageClick}>Homepage</button>
            )}
        </div>
    )
}

export default Footer
