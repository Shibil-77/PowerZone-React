import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icons from '../../../assets/Icons/user.png'
import Location from '../../../assets/Icons/locationModal.png'
import charging from '../../../assets/Icons/charging.png'
import pay from '../../../assets/Icons/pay-day.png'

function MapModal(props) {
  const mapData = props.mapValue
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate({
      pathname: '/AddBookingDetails',
      hash: mapData._id,
    })
  }

  return (
    <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src="https://electricvehicles.bchydro.com/sites/default/files/content-row/charging-an-ev-right-align%402x.png"
        className="h-30 w-full rounded-md "
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Rate</dt>

            <dd className="text-sm text-gray-500">${mapData.rate}</dd>
          </div>

          <div>
            <dt className="sr-only">Location</dt>

            <dd className="font-medium">{mapData.location}, {mapData.city}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-3 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <img src={charging} alt="" className=' w-5 h-5 mt-5' />

            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="text-gray-500">kW</p>

              <p className="font-medium">{mapData.kW}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <img src={charging} alt="" className=' w-5 h-5 mt-5' />

            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="text-gray-500">Type</p>

              <p className="font-medium">{mapData.type}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <img src={pay} alt="" className=' w-5 h-5 mt-5' />

            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="text-gray-500">Days</p>

              <p className="font-medium">{mapData.dayDetail[0].selectedDay}<br />
                ----to----
                <br />
                {mapData.dayDetail[mapData.dayDetail.length - 1].selectedDay}</p>
            </div>

          </div>

        </div>
        <div className='flex justify-center'>
          <button className='bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150' onClick={onSubmit}>Booking</button>
        </div>

      </div>
    </a>
  )
}

export default MapModal
