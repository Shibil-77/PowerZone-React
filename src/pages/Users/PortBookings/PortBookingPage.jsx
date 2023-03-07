import React from 'react'
import Layout from '../Layout/Layout'
import PortBookings from '../../../components/Users/Tables/PortBookings'

function PortBookingPage() {
    const headData = ["BookingID", "Port ID", "DATE","Time"]
    return (
        <>
            <Layout>
                <PortBookings headData={headData} />
            </Layout>
        </>
    )
}

export default PortBookingPage