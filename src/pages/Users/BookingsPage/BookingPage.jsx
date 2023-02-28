import React, { useEffect, useState } from 'react'
import Table from '../../../components/Users/Table'
import Layout from '../Layout/Layout'
import { findNewBookings } from '../../.././api/userApi'

function BookingPage() {
  const [newBookingsData, setNewBookingsData] = useState()
  const bookingApiCall = async () => {
    const { newBookings } = await findNewBookings()
    if (newBookings) {
      setNewBookingsData(newBookings)
    }
  }

  useEffect(() => {
    bookingApiCall()
  }, [])





  const headData = ["bookingId", "Date", "Time","view"]

  return (
    <div className='bg-[#e9f7fa] h-screen'>
      {newBookingsData &&
        <Layout>
          <Table headData={headData} tableData={newBookingsData} />
        </Layout>
      }
    </div>
  )
}

export default BookingPage
