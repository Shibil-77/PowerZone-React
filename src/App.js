import '../src/App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'


//{  ----- ==========user page ========= ------- }


import LoginPage from './pages/Users/Login/LoginPage';

import RegisterPage from './pages/Users/Register/RegisterPage';

import HomePage from './pages/Users/HomePage/HomePage';

import ProfilePage from './pages/Users/ProfilePage/ProfilePage';

import BookingPage from './pages/Users/BookingsPage/BookingPage';

import AddChargingPort from './pages/Users/AddChargingPort/AddChargingPort';

import BookingDetailsPage from './pages/Users/BookingDetailsPage.jsx/BookingDetailsPage';

import BookingDetails from './pages/Admin/BookingDetails/BookingDetails';

import Verify from './components/Users/Verify'

import ForgotPassword from './components/Users/ForgotPassword';

import ResetPassword from './components/Users/ResetPassword';

import MapView from './pages/Users/Map/FindMap';

import MapValue from './pages/Users/Map/AddMap';

import UserDetails from './pages/Admin/UserDetails/UserDetails';

import UserProtectRouter from './ProtectRouter/UserProtectRouter';

import CheckOutPage from './pages/Users/CheckOutPage/CheckOutPage';

import ErrorPage from './components/Users/ErrorPage';

// <---=== admin pages ====--> 

import AdminProtectRouter from './ProtectRouter/AdminProtectRouter';

import AdminLoginPage from './pages/Admin/AdminLoginPage/AdminLoginPage';

import AdminPortDetails from './pages/Admin/PortDetails/PortDetails'

import DashBoardPage from './pages/Admin/Dashboard/DashBoardPage';


function App() {
  return (
    <>
      <div>
        <Routes>

             {/*<------==========user side========---> */}

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/verify/:id" element={<Verify />} />

          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route path="/resetPassword/:id" element={<ResetPassword />} />

          <Route path="/" element={<HomePage />} />

          <Route path="/profile" element={ <UserProtectRouter> <ProfilePage /> </UserProtectRouter>  } />

          <Route path="/userBookings" element={   <UserProtectRouter> <BookingPage />  </UserProtectRouter>  } />

          <Route path="/addBookingDetails" element={ <UserProtectRouter> <BookingDetailsPage /> </UserProtectRouter> } />

          <Route path="/addChargingPort" element={ <UserProtectRouter> <AddChargingPort /> </UserProtectRouter> } />

          <Route path="/map" element={ <UserProtectRouter>  <MapView /> </UserProtectRouter>} />

          <Route path="/mapValue" element={ <UserProtectRouter><MapValue />  </UserProtectRouter>} />

          <Route path="/checkOut" element={ <UserProtectRouter>   <CheckOutPage />  </UserProtectRouter>} />

            {/* <---========= admin side =======----> */}

          <Route path="/admin/login" element={<AdminLoginPage />} />

          <Route path="/admin" element={<AdminProtectRouter><DashBoardPage /></AdminProtectRouter> } />

          <Route path="/admin/BookingDetails" element={ <AdminProtectRouter><BookingDetails /></AdminProtectRouter> } />

          <Route path="/admin/PortDetails" element={ <AdminProtectRouter> <AdminPortDetails /></AdminProtectRouter>  } />

          <Route path="/admin/UsersDetails" element={  <AdminProtectRouter> <UserDetails /></AdminProtectRouter> } />

          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
