import '../src/App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
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
import CalendarPage from './components/Users/CalendarPage';
import UserProtectRouter from './UserProtectRouter/UserProtectRouter';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/Profile" element={
            <UserProtectRouter>
              <ProfilePage />
            </UserProtectRouter>
          } />
          <Route path="/OldBookingsDetails" element={
            <UserProtectRouter>
              <BookingPage />
            </UserProtectRouter>
          } />
          <Route path="/AddBookingDetails" element={
            <UserProtectRouter>
              <BookingDetailsPage />
            </UserProtectRouter>
          } />

          <Route path="/NewBookings" element={
            <UserProtectRouter>
              <NewBooking />
            </UserProtectRouter>
          } />
          <Route path="/AddChargingPort" element={
            <UserProtectRouter>
              <AddChargingPort />
            </UserProtectRouter>
          } />
          <Route path="/PortDetails" element={
            <UserProtectRouter>
              <PortDetails />
            </UserProtectRouter>
          } />
          <Route path="/PortBookings" element={
            <UserProtectRouter><PortBookings />
            </UserProtectRouter>
          } />
          <Route path="/Popup" element={
            <UserProtectRouter>
              <PopupPage />
            </UserProtectRouter>
          } />
          <Route path="/verify/:id" element={
            <Verify />
          } />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:id" element={<ResetPassword />} />
          <Route path="/map" element={
            <UserProtectRouter>
              <MapView />
            </UserProtectRouter>} />
          <Route path="/mapValue" element={
            <UserProtectRouter><MapValue />
            </UserProtectRouter>} />
          <Route path="/CalendarPage" element={
            <UserProtectRouter>
              <CalendarPage />
            </UserProtectRouter>} />

        </Routes>
      </div>

      <div>
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/BookingDetails" element={<BookingDetails />} />
          <Route path="/admin/PortDetails" element={<PortDetails />} />
          <Route path="/admin/AddBanner" element={<AddBanner />} />
          <Route path="/admin/BannerDetails" element={<BannerDetails />} />
          <Route path="/admin/UsersDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
