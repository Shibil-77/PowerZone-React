import React from 'react'
import AdminFooter from '../../../components/Admin/AdminFooter/AdminFooter'
import AdminNavbar from '../../../components/Admin/AdminNavbar/AdminNavbar'
import AdminSideBar from '../../../components/Admin/AdminSideBar/AdminSideBar'

function AdminLayout({children}) {
  return (
    <div className='bg-[#e9f7fa] h-screen'>
    <div>
        <AdminNavbar />
    </div>
    <div>
        <div className="flex">
            <div className='hidden md:block'>
                <AdminSideBar />
            </div>
            {children}
        </div>
    </div>
    <div>
        <AdminFooter />
    </div>
</div>
  )
}

export default AdminLayout