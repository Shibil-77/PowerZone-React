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
import AdminLoginPage from './pages/Admin/AdminLoginPage/AdminLoginPage';
import BookingDetails from './pages/Admin/BookingDetails/BookingDetails';
import AddBanner from './pages/Admin/AddBanner/AddBanner';
import BannerDetails from './pages/Admin/BannerDetails/BannerDetails'
import UserDetails from './pages/Admin/UserDetails/UserDetails';
import PopupPage from './pages/Users/PopupPage/PopupPage';
import Verify from './components/Users/Verify'
import ForgotPassword from './components/Users/ForgotPassword';
import ResetPassword from './components/Users/ResetPassword';
import MapView from './pages/Users/Map/FindMap';
import MapValue from './pages/Users/Map/AddMap';
import  CalendarPage from './components/Users/CalendarPage';


function App() {
  return (
    <>
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
      <Route path="/Popup" element={<PopupPage/>} /> 
      <Route path="/verify/:id" element={<Verify/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>} />
       <Route path="/resetPassword/:id" element={<ResetPassword/>} />      
       <Route path="/map" element={<MapView/>} />  
       <Route path="/mapValue" element={<MapValue/>} />   
       <Route path="/Calendar" element={<CalendarPage/>} /> 
    </Routes>
   </div>

   <div>
    <Routes>
         <Route path="/admin/login" element={<AdminLoginPage/>} /> 
         <Route path="/admin/BookingDetails" element={<BookingDetails/>} /> 
         <Route path="/admin/PortDetails" element={<PortDetails/>} /> 
         <Route path="/admin/AddBanner" element={<AddBanner/>} /> 
         <Route path="/admin/BannerDetails" element={<BannerDetails/>} /> 
         <Route path="/admin/UsersDetails" element={<UserDetails/>} /> 
    </Routes>
   </div>
  </>
  );
}

export default App;
