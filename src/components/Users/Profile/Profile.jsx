import React from 'react'
import { NavLink } from 'react-router-dom'

function Profile() {
  return (

    <div className='flex justify-center py-6 md:mx-20 mx-4 rounded-3xl bg-white w-full md:w-8/12 '>
      <div>

        <h1 className=' text-center font-bold text-3xl text-gray-700'>Muhammed Shibil</h1>


        <div className='px-6 bg-[#c2c2c228] shadow-xl w-10/12 mt-12 rounded-3xl'>
          <div className='grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
            <h1 className='font-bold '>Full Name: <span >Muhammed Shibil</span></h1>
            <h1 className='font-bold '>Email : <span>shibil@gamil.com</span></h1>
            <h1 className='font-bold'>Phone Number : <span>984 631 4476</span></h1>
          </div>
        </div>

        <div className='w-10/12 lg:gap-10 md:gap-10 mt-20 md:mt-10    grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:grid-cols-4  rounded-3xl'>
          <NavLink>
            <div className='bg-[#c2c2c228] shadow-xl rounded-3xl'>
              <h1 className='text-center font-bold mt-5'>Bookings</h1>
              <h1 className='font-extrabold text-[70px] text-center'>3</h1>
            </div>
          </NavLink>
          <NavLink>
            <div className='bg-[#c2c2c228] shadow-xl  max-w-sm rounded-3xl'>
              <h1 className='text-center font-bold mt-5'>Booking Requests</h1>
              <h1 className='font-extrabold text-[70px] text-center'>3</h1>
            </div>
          </NavLink>
          <NavLink>
            <div className='bg-[#c2c2c228] shadow-xl rounded-3xl'>
              <h1 className='text-center font-bold mt-5 text-ellipsis'>Port Bookings</h1>
              <h1 className='font-extrabold text-[70px] text-center'>0</h1>
            </div>
          </NavLink>
          <NavLink to='/'>
            <div className='bg-[#c2c2c228] shadow-xl rounded-3xl'>
              <h1 className='text-center font-bold mt-5'>Port Requests</h1>
              <h1 className='font-extrabold text-[70px] text-center'>0</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    // <div className='bg-white w-8/12 flex flex-col rounded-3xl  justify-center mx-28'>
    //   <div className='bg-white '>
    //   <h1 className=' text-center font-bold text-3xl text-gray-700 mb-44'>Muhammed Shibil</h1>
    //   </div>

    //     <div className='bg-red-500 h-48 w-4/12 self-center mt-0'>

    //     </div>


    // </div>
  )
}

export default Profile
