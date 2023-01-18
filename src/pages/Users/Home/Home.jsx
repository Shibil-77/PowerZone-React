import React from 'react'
import Navbar from '../../../components/Users/Navbar/Navbar'
import SideBar from '../../../components/Users/SideBar/SideBar'


function Home() {
  return (
    <div>
        <Navbar/>
        <SideBar>   
        <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
        </SideBar>  
    </div>
  )
}

export default Home