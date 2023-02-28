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
import PortDetails from './pages/Users/PortDetails/PortDetails';
import PortBookings from './pages/Users/PortBookings/PortBookings';
import AdminLoginPage from './pages/Admin/AdminLoginPage/AdminLoginPage';
import BookingDetails from './pages/Admin/BookingDetails/BookingDetails';
import AddBanner from './pages/Admin/AddBanner/AddBanner';
import BannerDetails from './pages/Admin/BannerDetails/BannerDetails'
import UserDetails from './pages/Admin/UserDetails/UserDetails';
import Verify from './components/Users/Verify'
import ForgotPassword from './components/Users/ForgotPassword';
import ResetPassword from './components/Users/ResetPassword';
import MapView from './pages/Users/Map/FindMap';
import MapValue from './pages/Users/Map/AddMap';
// import CalendarPage from './components/Users/CalendarPage';
import UserProtectRouter from './ProtectRouter/UserProtectRouter';
import AdminProtectRouter from './ProtectRouter/AdminProtectRouter';
import AdminPortDetails from './pages/Admin/PortDetails/PortDetails'
import CheckOutPage from './pages/Users/CheckOutPage/CheckOutPage';


function App() {
  return (
    <>
      <div>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/profile" element={
            <UserProtectRouter>
              <ProfilePage />
            </UserProtectRouter>
          } />
          <Route path="/userBookings" element={
            <UserProtectRouter>
              <BookingPage />
            </UserProtectRouter>
          } />
          <Route path="/addBookingDetails" element={
            <UserProtectRouter>
              <BookingDetailsPage />
            </UserProtectRouter>
          } />

          <Route path="/addChargingPort" element={
            <UserProtectRouter>
              <AddChargingPort />
            </UserProtectRouter>
          } />

          {/* <Route path="/portDetails" element={
            <UserProtectRouter>
              <PortDetails />
            </UserProtectRouter>
          } />

          <Route path="/portBookings" element={
            <UserProtectRouter>
              <PortBookings />
            </UserProtectRouter>
          } /> */}


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

          <Route path="/checkOut" element={
            <UserProtectRouter>
              <CheckOutPage />
            </UserProtectRouter>} />

        </Routes>
      </div>

      <div>
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={
            <AdminProtectRouter><div>
              <h1>Admin</h1>
            </div></AdminProtectRouter>
          } />
          <Route path="/admin/BookingDetails" element={
            <AdminProtectRouter><BookingDetails /></AdminProtectRouter>
          } />
          <Route path="/admin/PortDetails" element={
            <AdminProtectRouter> <AdminPortDetails /></AdminProtectRouter>
          } />
          <Route path="/admin/AddBanner" element={
            <AdminProtectRouter><AddBanner /></AdminProtectRouter>
          } />
          <Route path="/admin/BannerDetails" element={
            <AdminProtectRouter><BannerDetails /></AdminProtectRouter>
          } />
          <Route path="/admin/UsersDetails" element={
            <AdminProtectRouter> <UserDetails /></AdminProtectRouter>
          } />

        </Routes>
      </div>
    </>
  );
}

export default App;
