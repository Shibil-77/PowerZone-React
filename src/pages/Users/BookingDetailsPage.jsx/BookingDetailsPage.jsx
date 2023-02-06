import React from 'react'
import BookingDetails from '../../../components/Users/AddBookingDetails'
import Layout from '../Layout/Layout'
import CalendarPage from '../../../components/Users/CalendarPage'

function BookingDetailsPage() {
  return (
    <Layout>
      <div className='w-full'>
       <CalendarPage/>
       </div>
    </Layout>
  )
}

export default BookingDetailsPage