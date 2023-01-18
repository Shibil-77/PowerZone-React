import React from 'react'
import Navbar from '../../../components/Users/Navbar/Navbar'
import Sidebar from '../../../components/Users/SideBar/SideBar'
import Home from '../../../components/Users/Home/Home'
import Footer from '../../../components/Users/Footer/Footer'

function HomePage() {

  return (
    <div className='bg-[#e9f7fa] h-screen'>
        <Navbar/>
         <Sidebar>   
          <Home />
        </Sidebar> 
        <Footer/> 
    </div>
  )
}

export default HomePage