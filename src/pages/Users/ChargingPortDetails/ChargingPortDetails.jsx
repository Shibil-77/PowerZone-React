import React from 'react'
import UserChargingPort from '../../../components/Users/Tables/UserChargingPort'
import Layout from '../Layout/Layout'

function ChargingPortDetails() {
    const headData = ["ID", "RATE", "KW","TYPE","LOCATION","Action"]
  return (
    <>
    <Layout>
    <UserChargingPort headData={headData} />
    </Layout>
    </>
  )
}

export default ChargingPortDetails