import React,{useState,useEffect} from 'react'
import Table from '../../../components/Users/Table'
import Layout from '../Layout/Layout'
import {findChargingPort} from '../../.././api/userApi'

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
        <Table headData={headData} tableData={newPortData} />
      </Layout>
    }
  </div>
  )
}

export default PortDetails