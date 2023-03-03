import React from 'react'
import AdminTable from '../../../components/Admin/Table/AdminTable'
import AdminLayout from '../AdminLayout/AdminLayout'
import BookingDetails from '../../../components/Admin/Table/BookingsDetails'

function BookingDetailsPage() {

    const headData = ["bookingId", "Date", "Time"]

    return (
        <div>
            <AdminLayout>
                <BookingDetails headData ={headData}/>
            </AdminLayout>
        </div>
    )
}

export default BookingDetailsPage