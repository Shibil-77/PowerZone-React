import React, { Children } from 'react'
import Footer from '../../../components/Users/Footer/Footer'
import Navbar from '../../../components/Users/Navbar/Navbar'
import SideBar from '../../../components/Users/SideBar/SideBar'

function Layout({ children }) {
    return (
        <>
            <div className='bg-[#e9f7fa] h-screen'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <SideBar>
                        {children}
                    </SideBar>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
