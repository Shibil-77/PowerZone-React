import React from 'react'
import Navbar from '../../../components/Users/Navbar/Navbar'
import Profile from '../../../components/Users/Profile/Profile'
import SideBar from '../../../components/Users/SideBar/SideBar'
import Footer from '../../../components/Users/Footer/Footer'

function ProfilePage() {
  return (
    <div className='bg-[#e9f7fa] h-screen'>
        <Navbar/>
        <SideBar>
            <Profile/>
        </SideBar>
        <Footer/>
    </div>
  )
}

export default ProfilePage

