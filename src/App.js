import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/LoginPage/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Analytics from './Components/Analytics/Analytics';
import PrivateRoutes from './utils/PrivateRoute';
import Footer from './Section/Footer/Footer';



function App() {
  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1];
  const showFooter = location.pathname !== '/' && location.pathname !=='/register';
  return (

    <div className="App">

      <Routes>

        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path='/dashboard' />
          <Route path='/analytics' element={<Analytics />} />
        </Route>
      </Routes>
      {/* <Footer  currentRoute={currentRoute} /> */}
      {showFooter && <Footer currentRoute={currentRoute}/>}
    </div>
  );
}

export default App;

// import React from 'react'
// import './Footer.css'
// import { useNavigate, useLocation } from 'react-router-dom'

// const Footer = ({ currentRoute }) => {
//     const navigate = useNavigate()
//     const location = useLocation()

//     const handleLogout = () => {
//         // Perform logout action, then navigate to login page
//         navigate('/login')
//     }

//     const handleHomepageClick = () => {
//         if (currentRoute === 'analytics') {
//             navigate('/dashboard')
//         }
//     }

//     return (
//         <div className='footer'>
//             <h5>Copyright 2019 - DashboardPack.com</h5>
//             {currentRoute === 'dashboard' && (
//                 <button onClick={handleLogout}>Logout</button>
//             )}
//             {currentRoute === 'analytics' && (
//                 <button onClick={handleHomepageClick}>Homepage</button>
//             )}
//         </div>
//     )
// }

// export default Footer

