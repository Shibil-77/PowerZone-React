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

import BookingDetails from './pages/Admin/BookingDetails/BookingDetailsPage';

import Verify from './components/Users/Verify'

import ForgotPassword from './components/Users/ForgotPassword';

import ResetPassword from './components/Users/ResetPassword';

import MapView from './pages/Users/Map/FindMap';

import MapValue from './pages/Users/Map/AddMap';

import UserDetails from './pages/Admin/UserDetails/UserDetails';

import UserProtectRouter from './ProtectRouter/UserProtectRouter';

import CheckOutPage from './pages/Users/CheckOutPage/CheckOutPage';

import ChargingPortDetails from './pages/Users/ChargingPortDetails/ChargingPortDetails';


import ErrorPage from './components/Users/ErrorPage';



// <---=== admin pages ====--> 

import AdminProtectRouter from './ProtectRouter/AdminProtectRouter';

import AdminLoginPage from './pages/Admin/AdminLoginPage/AdminLoginPage';

import AdminPortDetails from './pages/Admin/PortDetails/PortDetails'

import DashBoardPage from './pages/Admin/Dashboard/DashBoardPage';

import AdminBookingDetailsPage from './pages/Admin/BookingDetails/BookingDetailsPage'

import UserPublicRoute from './PublicRoute/UserPublicRoute';

import AdminPublicRoute from './PublicRoute/AdminPublicRoute';
import PortBookingPage from './pages/Users/PortBookings/PortBookingPage';
import SalesReportPage from './pages/Admin/SalesReportPage/SalesReportPage';



function App() {
  return (
    <>
      <div>
        <Routes>

             {/*<------==========user side========---> */}

          <Route path="/login" element={
         <UserPublicRoute><LoginPage /></UserPublicRoute>} />

          <Route path="/register" element={ <UserPublicRoute><RegisterPage /></UserPublicRoute> } />

          <Route path="/verify/:id" element={<Verify />} />

          <Route path="/forgotPassword" element={<UserPublicRoute> <ForgotPassword /></UserPublicRoute>} />

          <Route path="/resetPassword/:id" element={<UserPublicRoute><ResetPassword /></UserPublicRoute>} />

          <Route path="/" element={<HomePage />} />

          <Route path="/profile" element={ <UserProtectRouter> <ProfilePage /> </UserProtectRouter>  } />

          <Route path="/addBookingDetails" element={ <UserProtectRouter> <BookingDetailsPage /> </UserProtectRouter> } />

          <Route path="/addChargingPort" element={ <UserProtectRouter> <AddChargingPort /> </UserProtectRouter> } />

          <Route path="/map" element={ <UserProtectRouter>  <MapView /> </UserProtectRouter>} />

          <Route path="/mapValue" element={ <UserProtectRouter><MapValue />  </UserProtectRouter>} />

          <Route path="/checkOut" element={ <UserProtectRouter>   <CheckOutPage />  </UserProtectRouter>} />

          <Route path="/userBookings" element={   <UserProtectRouter> <BookingPage />  </UserProtectRouter>  } />

          <Route path="/userChargingPortDetails" element={ <UserProtectRouter> <ChargingPortDetails/></UserProtectRouter>  } />

          <Route path="/userChargingPortBookings" element={ <UserProtectRouter> <PortBookingPage/></UserProtectRouter>  } />


            {/* <---========= admin side =======----> */}

          <Route path="/admin/login" element={<AdminPublicRoute><AdminLoginPage /></AdminPublicRoute>} />

          <Route path="/admin" element={<AdminProtectRouter><DashBoardPage/></AdminProtectRouter> } />

          <Route path="/admin/BookingDetails" element={ <AdminProtectRouter><AdminBookingDetailsPage /></AdminProtectRouter> } />

          <Route path="/admin/PortDetails" element={ <AdminProtectRouter> <AdminPortDetails /></AdminProtectRouter>  } />

          <Route path="/admin/UsersDetails" element={  <AdminProtectRouter> <UserDetails /></AdminProtectRouter> } />

          
          <Route path="/admin/salesReport" element={  <AdminProtectRouter> <SalesReportPage/> </AdminProtectRouter> } />

          

          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
