import React from 'react'
import BookingDetails from '../../../components/Users/BookingDetails/BookingDetails'
import Layout from '../Layout/Layout'
import CalendarPage from '../../../components/Users/BookingDetails/CalendarPage'

function BookingDetailsPage() {
  return (
    <Layout>
      <div className='flex justify-center'>
      <div className=' md:w-8/12  w-full  rounded-3xl  '>
      <h1 className='text-black font-bold text-3xl text-center mt-10'>Booking Now</h1>
        <div className='flex justify-start mt-14 grid-flow-row'>
        <div className='flex justify-center '><BookingDetails/></div>
        <div className='flex justify-center'><CalendarPage/></div>
        </div>
       </div>
       </div>
    </Layout>
  )
}

export default BookingDetailsPage