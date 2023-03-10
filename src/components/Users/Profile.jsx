import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import Icons from '../../assets/Icons/user.png'
import { findProfileData } from '../.././api/userApi'
import { Link, useNavigate } from 'react-router-dom'

function Profile() {

  const navigate =   useNavigate()
  const [profileData, setProfileData] = useState({})
  const [booking, setBooking] = useState(0)
  const [chargingPort, setChargingPort] = useState(0)

  const ApiCall = async () => {
    const { newBookings, portData, userData } = await findProfileData()
    console.log(newBookings, portData, userData,"newBookings, portData, userData");
    if (userData) {
      setProfileData(userData)
      setChargingPort(portData)
      setBooking(newBookings)
    } else {
      navigate('/*')
    }
  }

  useEffect(() => {
    ApiCall()
  }, [])


  return (
    <>
      <div className='flex justify-center w-10/12'>
       
        <section className="pt-10 bg-blueGray-50">
        <h1 className='text-center font-extrabold text-black mb-10 '>PROFILE PAGE</h1>
          <div className="w-full lg:w-10/12 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6 w-full">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                      <img alt="👨🏻‍🦱" src={Icons} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px" />
                      <h1 className='font-extrabold text-black mt-5'>{profileData.fullName} </h1>
                    </div>
                  </div>
                  <div className="w-full px-4 text-center mt-10">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8  ">
                      <Link to='/UserBookings'>
                        <div className="mr-4 p-3 text-center bg-gray-100 rounded-xl shadow-2xl ">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {booking}
                          </span>
                          <span className="text-sm text-blueGray-400">Your Bookings</span>
                        </div>
                      </Link>
                      <Link to='/userChargingPortDetails'>
                        <div className="mr-4 p-3 text-center bg-gray-100 rounded-xl shadow-2xl">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {chargingPort}
                          </span>
                          <span className="text-sm text-blueGray-400">Charging Ports</span>
                        </div>
                      </Link>
                      <Link to='/userChargingPortBookings'>
                        <div className="lg:mr-4 p-3 text-center bg-gray-100 rounded-xl shadow-2xl">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                           0
                          </span>
                          <span className="text-sm text-blueGray-400">Charging Port Bookings</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3 bg-gray-100 rounded-xl shadow-2xl">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    {profileData.fullName}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {profileData.email}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {profileData.phone}
                  </div>
                  {/* <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div> */}
                </div>
                {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken
                      by Melbourne-raised, Brooklyn-based Nick Murphy
                      writes, performs and records all of his own music,
                      giving it a warm, intimate feel with a solid groove
                      structure. An artist of considerable range.
                    </p>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile
