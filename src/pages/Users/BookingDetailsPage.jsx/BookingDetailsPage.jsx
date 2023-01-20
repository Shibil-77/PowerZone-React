import React from 'react'
import BookingDetails from '../../../components/Users/AddBookingDetails/AddBookingDetails'
import Layout from '../Layout/Layout'

function BookingDetailsPage() {
  return (
    <Layout>
        <BookingDetails>
        <h1 className='text-center mx-[90px] font-bold mt-8 text-3xl'>Booking Details</h1>
        </BookingDetails>
    </Layout>
  )
}

export default BookingDetailsPage