import '../src/App.css'
import React  from 'react';
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/Users/Login/LoginPage';
import RegisterPage from './pages/Users/Register/RegisterPage';
// import Navbar from './components/Users/Navbar/Navbar';
import HomePage from './pages/Users/HomePage/HomePage';
import ProfilePage from './pages/Users/ProfilePage/ProfilePage';
import BookingPage from './pages/Users/BookingsPage/BookingPage';
import AddChargingPort from './pages/Users/AddChargingPort/AddChargingPort';
import BookingDetailsPage from './pages/Users/BookingDetailsPage.jsx/BookingDetailsPage';
import NewBooking from './pages/Users/NewBookingPage/NewBooking';
import PortDetails from './pages/Users/PortDetails/PortDetails';
import PortBookings from './pages/Users/PortBookings/PortBookings';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/login" element={ <LoginPage/> } />
      <Route path="/register" element={ <RegisterPage/> } />   
      <Route path="/" element={ <HomePage/> } />   
      <Route path="/Profile" element={ <ProfilePage/> } />  
      <Route path="/OldBookingsDetails" element={<BookingPage/>  } />  
      <Route path="/AddBookingDetails" element={<BookingDetailsPage/>} /> 
      <Route path="/NewBookings" element={<NewBooking/>  } />  
      <Route path="/AddChargingPort" element={<AddChargingPort/>} /> 
      <Route path="/PortDetails" element={<PortDetails/>} /> 
      <Route path="/PortBookings" element={<PortBookings/>} /> 
      
{/* 
      <Route path="/PortRequests" element={<FormPage/>} /> 
      <Route path="/AddChargingPortStep2" element={<FormPage/>} /> 
      <Route path="/AddChargingPortStep3" element={<FormPage/>} /> 
      <Route path="/AddBookingDetails" element={<FormPage/>} />  */}
     
    </Routes>
   </div>
  );
}

export default App;
