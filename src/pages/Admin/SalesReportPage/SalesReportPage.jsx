import React from 'react'
import SalesReport from '../../../components/Admin/Table/SalesReport'

function SalesReportPage() {
    const headData = ["bookingId", "Date", "Time","Action"]
  return (
    <>
    <SalesReport headData={headData}/>
    </>
  )
}

export default SalesReportPage