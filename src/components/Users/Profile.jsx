import React, { useEffect ,useState} from 'react'
// import { NavLink } from 'react-router-dom'
import Icons from '../../assets/Icons/user.png'
import  {findProfileData} from '../.././api/userApi'
import { Link } from 'react-router-dom'

function Profile() {

  const [profileData,setProfileData] = useState({})
  const [booking,setBooking] = useState(0)
  const [chargingPort,setChargingPort] = useState(0)

   const ApiCall = async()=>{
   const {newBookings, portData, userData }= await findProfileData()
   if(userData){
    setProfileData(userData)
    setChargingPort(portData)
    setBooking(newBookings)
   }else{
    console.log("================================");
   }
   } 

  useEffect(() => {
    ApiCall()
  },[])


  return (
    <>
    <div className='flex justify-center w-full'>
      
 
      <section class="pt-10 bg-blueGray-50">
        <div class="w-full lg:w-7/12 px-4 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                  <div class="relative">
                    <img alt="👨🏻‍🦱" src={Icons} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                    <h1 className='text-xl text-white '>{profileData.fullName} </h1>
                  </div>
                </div>
                <div class="w-full px-4 text-center mt-10">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <Link to='/'>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {booking}
                      </span>
                      <span class="text-sm text-blueGray-400">Bookings</span>
                    </div>
                    </Link>
                    <Link to='/'>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {chargingPort}
                      </span>
                      <span class="text-sm text-blueGray-400">Charging Ports</span>
                    </div>
                    </Link>
                    <Link to='/'>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span class="text-sm text-blueGray-400">Your Bookings</span>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {profileData.fullName}
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {profileData.email}
                </div>
                <div class="mb-2 text-blueGray-600 mt-2">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {profileData.phone}
                </div>
                {/* <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div> */}
              </div>
              {/* <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
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
