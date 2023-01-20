import React from 'react'
import Footer from '../../../components/Users/Footer/Footer'
import Navbar from '../../../components/Users/Navbar/Navbar'
import SideBar from '../../../components/Users/SideBar/SideBar'
import Table from '../../../components/Users/Table/Table'

function BookingPage() {
  return (
    <div className='bg-[#e9f7fa] h-screen'>
        <Navbar/>
        <SideBar>
        <Table/>
        </SideBar>
        <Footer/>
    </div>
  )
}

export default BookingPage
