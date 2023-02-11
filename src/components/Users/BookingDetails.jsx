import React, { useEffect, useState } from 'react'
import Icons from '../../assets/Icons/user.png'
import Location from '../../assets/Icons/locationModal.png'
import charging from '../../assets/Icons/charging.png'
import pay from '../../assets/Icons/pay-day.png'
import { useLocation } from 'react-router-dom'
import { findPortData } from '../../api/portApi'

function BookingDetails({ children }) {
  const location = useLocation()
  const [chargingPortData,setChargingPortData] = useState()

  async function test() {
    const findData = await findPortData(location.hash)
    setChargingPortData(findData)
  }
  // useEffect(()=>{
  //  test()
  // },[])

  return (
    <>
        <div className='w-8/12 mb-10   '>
        <h1 className='text-[50px] text-center'>Details</h1>
        <img src="https://electricvehicles.bchydro.com/sites/default/files/content-row/charging-an-ev-right-align%402x.png" className='w-screen h-1/6' alt="" />
        <hr />
        <div className='flex'>
            <div>
                 <img src={Icons} alt="" className='mx-5 w-10 h-10 mt-3' />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-[20px]  mt-2 mx-3'>Name:
                {/* <span className='text-xs'>{mapData._id}</span> */}
                </h1>
            </div>
        </div>
        <hr className='mt-2' />


        <div className='flex'>
            <div>
                 <img src={Location} alt="" className='mx-5  w-10 h-10 mt-2' />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-[20px] text-end mt-5 mx-3'>Location:
                {/* <span>{mapData.location}</span> */}
                </h1>
            </div>
        </div>
        <hr className='mt-2' />


        <div className='grid-flow-row'>
            <div className='grid grid-flow-col'>
                 <img src={charging} alt="" className='mx-5  w-10 h-10 mt-3' />
                 <h1 className='text-[20px]'>Connection type and power</h1>
            </div>
            <div className='flex justify-center'>
               <div className='grid grid-cols-1 gap-10 mt-0'>
                 {/* <div className='bg-gray-100'><span className='text-xl font-medium w-[100px] rounded-2xl '></span></div> */}
                 <div className='bg-gray-100'><span className='text-xl font-medium w-[100px] rounded-2xl '>kW:</span></div>
                 {/* <div className='bg-gray-100'><span className='text-xl font-medium w-[100px] rounded-2xl '></span></div> */}

               </div>
            </div>
        </div>

        <hr className='mt-2' />

        
        <div className='grid-flow-row'>
            <div className='grid grid-flow-col'>
                 <img src={pay} alt="" className='mx-5  w-10 h-10 mt-3' />
                 <h1 className='text-[20px] mt-5 mx-1 font'>Cost and Day details</h1>
            </div>
            <div className='flex justify-center'>
               <div className=' mt-1'>
               <div className=''><h1 className='text-[18px] font-semibold '>When :
               {/* <span className='text-sm'>{mapData.dayStart} to {mapData.dayEnd}</span> */}
               </h1></div>
                 <div className=''><h1 className='text-[18px] font-semibold'>Cost :
                 {/* <span className='text-sm'>${mapData.rate}</span> */}
                 </h1></div>
                 <div className=''><h1 className='text-[18px] font-semibold'>Time :
                 {/* <span className='text-sm'>${mapData.timeStart} to {mapData.timeEnd}</span> */}
                 </h1></div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}



export default BookingDetails