import React, { Children } from 'react'
import BottomBar from '../../../components/Users/BottomBar'
import Footer from '../../../components/Users/Footer'
import Navbar from '../../../components/Users/Navbar'
import SideBar from '../../../components/Users/SideBar'

function Layout({ children }) {
    return (
        <>
            <div className='bg-[#e9f7fa] h-full'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <div className="flex ">
                        <div className='hidden md:block fixed top-15'>
                            <SideBar />
                        </div>
                        {children}

                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
            <div className=' z-50  block md:hidden'>
                <BottomBar />
            </div>
        </>
    )
}

export default Layout
