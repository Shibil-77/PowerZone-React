import React from 'react'
import AddChargingPort from '../../../components/Users/AddChargingPort/AddChargingPort'
import Layout from '../Layout/Layout'

function FormPage() {
  return ( 
        <Layout>
           <AddChargingPort>
            <h1 className='text-center mx-[90px] font-bold mt-8 text-3xl'>Add Charging Port</h1>
           </AddChargingPort>
        </Layout>   
  )
}

export default FormPage