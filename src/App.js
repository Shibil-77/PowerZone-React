import '../src/App.css'
import React  from 'react';
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/Users/Login/LoginPage';
import RegisterPage from './pages/Users/Register/RegisterPage';
// import Navbar from './components/Users/Navbar/Navbar';
import Home from './pages/Users/Home/Home';


function App() {
  return (
    <div>
      
      <Routes>
      <Route path="/login" element={ <LoginPage/> } />
      <Route path="/register" element={ <RegisterPage/> } />   
      <Route path="/" element={ <Home/> } />   
       </Routes>
   </div>
  );
}

export default App;
