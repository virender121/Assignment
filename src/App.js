
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/LoginPage/Login';


function App() {
  return (
    
    <div className="App">
  
      <Routes>
      
    <Route exact path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
     
   </Routes>
   
    </div>
  );
}

export default App;
