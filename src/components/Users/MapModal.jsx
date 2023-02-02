import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icons from '../../assets/Icons/user.png'
import Location from '../../assets/Icons/locationModal.png'
import charging from '../../assets/Icons/charging.png'
import pay from '../../assets/Icons/pay-day.png'

function MapModal(props) {
   const mapData = props.mapValue
   const navigate = useNavigate()
   const onSubmit =()=>{
     navigate('/addBookingDetails')
   }
  
  return (
    <div className='w-[300px] h-[600px] bg-white overflow-y-scroll '>
        <h1 className='text-[50px] text-center'>Details</h1>
        <img src="https://electricvehicles.bchydro.com/sites/default/files/content-row/charging-an-ev-right-align%402x.png" className='w-screen h-1/6' alt="" />
        <hr />
        <div className='flex'>
            <div>
                 <img src={Icons} alt="" className=' w-10 h-10 mt-6' />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-[20px]  mt-8 mx-3'>PortId:<span className='text-xs'>{mapData._id}</span></h1>
            </div>
        </div>
        <hr className='mt-6' />


        <div className='flex'>
            <div>
                 <img src={Location} alt="" className=' w-10 h-10 mt-5' />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-[20px] text-end mt-8 mx-3'>Location:<span>{mapData.address}</span></h1>
            </div>
        </div>
        <hr className='mt-6' />


        <div className='grid-flow-row'>
            <div className='grid grid-flow-col'>
                 <img src={charging} alt="" className=' w-10 h-10 mt-5' />
                 <h1 className='text-[20px] mt-8 mx-1'>Connection type and power</h1>
            </div>
            <div className='flex justify-center'>
               <div className='grid grid-cols-1 gap-10 mt-3'>
                 {/* <div className='bg-gray-100'><span className='text-xl font-medium w-[100px] rounded-2xl '></span></div> */}
                 <div className='bg-gray-100'><span className='text-xl font-medium w-[100px] rounded-2xl '>kW:{mapData.kW}</span></div>
                 {/* <div className='bg-gray-100'><span className='text-xl font-medium w-[100px] rounded-2xl '></span></div> */}

               </div>
            </div>
        </div>

        <hr className='mt-6' />

        
        <div className='grid-flow-row'>
            <div className='grid grid-flow-col'>
                 <img src={pay} alt="" className=' w-10 h-10 mt-5' />
                 <h1 className='text-[20px] mt-8 mx-1 font'>Cost and Day details</h1>
            </div>
            <div className='flex justify-center'>
               <div className=' mt-3'>
               <div className=''><h1 className='text-[18px] font-semibold '>When :<span className='text-sm'>{mapData.dayStart} to {mapData.dayEnd}</span></h1></div>
                 <div className=''><h1 className='text-[18px] font-semibold'>Cost :<span className='text-sm'>${mapData.rate}</span></h1></div>
                 <div className=''><h1 className='text-[18px] font-semibold'>Time :<span className='text-sm'>${mapData.timeStart} to {mapData.timeEnd}</span></h1></div>
               </div>
            </div>
        </div>

        <hr className='mt-6' />
     <div className='mt-6 '>
          <button className=' bg-green-600 h-[50px] w-full text-2xl text-white font-bold mb-5 rounded-xl ' onClick={onSubmit}>Booking Now</button>
     </div>
    </div>
  )
}

export default MapModal
