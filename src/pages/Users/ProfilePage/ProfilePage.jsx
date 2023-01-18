import React from 'react'
import Navbar from '../../../components/Users/Navbar/Navbar'
import Profile from '../../../components/Users/Profile/Profile'
import SideBar from '../../../components/Users/SideBar/SideBar'

function ProfilePage() {
  return (
    <div>
        <Navbar/>
        <SideBar>
            <Profile/>
        </SideBar>
    </div>
  )
}

export default ProfilePage

