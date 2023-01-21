import React from 'react'
import AdminBottomBar from '../../../components/Admin/AdminBottomBar/AdminBottomBar'
import AdminFooter from '../../../components/Admin/AdminFooter/AdminFooter'
import AdminNavbar from '../../../components/Admin/AdminNavbar/AdminNavbar'
import AdminSideBar from '../../../components/Admin/AdminSideBar/AdminSideBar'

function AdminLayout({children}) {
  return (
    <>
    <div className='bg-[#e9f7fa] h-screen'>
        <div>
            <AdminNavbar />
        </div>
        <div>
            <div className="flex ">
                <div className='hidden md:block fixed top-15'>
                    <AdminSideBar />
                </div>
                {children}
            </div>
        </div>
        <div>
            <AdminFooter />
        </div>
    </div>
    <div className=' z-50  block md:hidden'>
        <AdminBottomBar />
    </div>
</>
  )
}

export default AdminLayout