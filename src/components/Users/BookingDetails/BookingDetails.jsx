import React, { useEffect, useState } from 'react'
import Icons from '../../../assets/Icons/user.png'
import Location from '../../../assets/Icons/locationModal.png'
import charging from '../../../assets/Icons/charging.png'
import pay from '../../../assets/Icons/pay-day.png'
import { useLocation } from 'react-router-dom'
import { findPortData } from '../../../api/portApi'
import CalendarPage from './CalendarPage'




function BookingDetails({ children }) {
  const location = useLocation()
  const [chargingPortData,setChargingPortData] = useState()
  console.log(chargingPortData,"country");

  async function test() {
    const {portData} = await findPortData(location.hash)
    setChargingPortData(portData)
  }
  useEffect(()=>{
   test()
  },[])

  return (
    <>{chargingPortData&&
      <section className="relative pt-16 bg-blueGray-50 bg-white rounded-2xl flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-500">
              <img alt="..." src="https://electricvehicles.bchydro.com/sites/default/files/content-row/charging-an-ev-right-align%402x.png" className="w-full align-middle rounded-t-lg"/>
              <blockquote className="relative p-8 mb-4">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                  <polygon points="-30,95 583,95 583,65" className="text-green-500 fill-current"></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Charging Port Details
                </h4>
                <div>
                  <h1 className='text-black text-lg font-bold'>Rate:<span className='text-black text-md'>{chargingPortData.rate}</span></h1>
                  <h1 className='text-black text-lg font-bold'>kW:<span className='text-black text-md'>{chargingPortData.kW}</span></h1>
                  <h1 className='text-black text-lg font-bold'>Type:<span className='text-black text-md'>{chargingPortData.type}</span></h1>
                  <h1 className='text-black text-lg font-bold'>Rate:<span className='text-black text-sm'>{chargingPortData.location}<br/>,{chargingPortData.city}<br/>,{chargingPortData.country}</span></h1>
      
                </div>
                 
              </blockquote>
            </div>
          </div>
      
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
      
              <div className="w-full md:w-12/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto ">
                   
                  <CalendarPage/>
                  </div>
                </div>
                
              </div>
              {/* <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                    <p className="mb-4 text-blueGray-500">
                      This extension also comes with 3 sample pages. They are
                      fully coded so you can start working instantly.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                    <p className="mb-4 text-blueGray-500">
                      Built by developers for developers. You will love how easy
                      is to to work with Notus JS.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
   
          </div>
        </div>
      </div>
      </div>
      </section>
    }
    
    </>
  )
}



export default BookingDetails