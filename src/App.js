
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/LoginPage/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Analytics from './Components/Analytics/Analytics';



function App() {
  return (
    
    <div className="App">
  
      <Routes>
      
    <Route exact path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
     
   </Routes>
   
    </div>
  );
}

export default App;
