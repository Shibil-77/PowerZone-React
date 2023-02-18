import React,{useState,useEffect} from 'react'
import Table from '../../../components/Users/Table'
import Layout from '../Layout/Layout'
import {findChargingPort} from '../../.././api/userApi'
import UserChargingTable from '../../../components/Users/UserChargingTable'

function PortDetails() {

  const [newPortData, setNewPortData] = useState()
  const bookingApiCall = async () => {
    const { chargingData } = await findChargingPort()
    if (chargingData) {
      setNewPortData(chargingData)
    }
  }

  useEffect(() => {
    bookingApiCall()
  }, [])


  const headData = ["PortId", "Rate", "Time" , "Location"]

  
  return (
    <div className='bg-[#e9f7fa] h-screen'>
    {newPortData &&
      <Layout>
        <UserChargingTable headData={headData} tableData={newPortData} />
      </Layout>
    }
  </div>
  )
}

export default PortDetails