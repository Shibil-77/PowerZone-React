import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

      <div className='md:flex w-full h-full justify-items-center '>
        <div className='h-screen w-12/12 justify-center flex-col '>
          <img className='md:mt-[150px]'
            src="https://fleely.com/wp-content/uploads/2021/08/ev-fleely-charging.png" alt="" />
          <div className=' md:hidden w-full h-full md:pt-40 pt-4 flex justify-center'>
            <div>
              <h1 className=' text-3xl text-myColor-600 font-extrabold  md:mt-10 font-white '>The India’s <br /> bookable destination <br /> EV charging network</h1>
            </div>
          </div>
        </div>
        <div className='hidden md:block w-full h-full md:pt-40 pt-4 flex justify-center'>
          <div>
            <h1 className=' text-3xl text-myColor-600 font-extrabold  md:mt-10 font-white '>The India’s <br /> bookable destination <br /> EV charging network</h1>
          </div>
          <Link to='/AddBookingDetails'>
          <button className="w-2/6 my-5 py-3 border-white border-2 bg-white shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" >Find a chargingpoint</button>
          </Link>
          <Link to='/AddChargingPort'>
          <button className="w-2/6 my-5 mx-4 py-3 border-white border-2 bg-white shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" >Add a charging point</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home