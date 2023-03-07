import React from 'react'
import SalesReport from '../../../components/Admin/Table/SalesReport'
import AdminLayout from '../AdminLayout/AdminLayout'

function SalesReportPage() {
    const headData = ["Id", "Date", "BookingCount"]
  return (
    <>
    <AdminLayout>
      <SalesReport headData={headData}/>
    </AdminLayout>
   
    </>
  )
}

export default SalesReportPage