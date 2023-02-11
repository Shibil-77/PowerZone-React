import React, { useState, useEffect } from 'react'
import { addChargingPortValidation } from './userUtils/utilsPort'
import { addChargingPortApi } from '../../api/portApi'
import { useNavigate } from 'react-router-dom'

function AddChargingPort({ children }) {

  const navigate = useNavigate()
 
  // State

  const [chargingPortData, setChargingPortData] = useState('')
  const [dayDetails, setDayDetails] = useState('')
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayAndTime,setDayAndTime] = useState([])
  const [stateUpdate, setStateUpdated] = useState(false)
  // functions

  const handleEdit = async (e) => {
    const { name, value } = e.target;
    setChargingPortData({ ...chargingPortData, [name]: value });
  };

  function handleSelectChange(event) {
    setSelectedDay(event.target.value);
  }

  const dayHandle = async (e) => {
    const { name, value } = e.target;
    setDayDetails({...dayDetails, [name]:value,selectedDay });
  };

  

  const dayAdding  = (e)=>{
    e.preventDefault();
    setDayAndTime([...dayAndTime,dayDetails])
    console.log(dayAndTime,"dayAndTime")
    setStateUpdated(true)
    

  }

  useEffect(()=>{
    if(stateUpdate){
      setChargingPortData({ ...chargingPortData,dayDetail:dayAndTime});
      setSelectedDay(null)
      setStateUpdated(false)
    }
  },[stateUpdate])


  const deleteDay =(day)=>{
      const filterData = dayAndTime.filter((data)=>data.selectedDay !== day)
      setDayAndTime(filterData)
  }

  // main function

  const onSubmit = async (e) => {
    e.preventDefault();
  
    console.log(chargingPortData,"chargingPortData")
    const chargingData = await addChargingPortApi(chargingPortData)

    if (chargingData.status === 200) {

      navigate({
        pathname: '/mapValue',
        hash: chargingData.data.message,
      })

    } else {
      alert(chargingData.data.message)
    }
  }

  return (
    <section className=" py-1 bg-blueGray-50 w-full flex justify-center">
      <div className=" md:w-6/12 px-4 mx-auto mt-6 w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                ADD CHARGING PORT
              </h6>

            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>


              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Charging Port Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      $ Rate
                    </label>
                    <input type="number" name='rate' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      kW
                    </label>
                    <input type="number" name='kW' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Types
                    </label>
                    <input type="text" name='type' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
                {/* <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Time
                    </label>
                    <input type="time" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div> */}
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />



              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Details
              </h6>

              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                     Select Days 
                    </label>
                    <select name='days' value={selectedDay} onChange={handleSelectChange} className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                      <option>Choose a Day</option>
                      <option value="sunday" name='sunday'>Sunday</option>
                      <option value="monday" name='monday'>Monday</option>
                      <option  value="tuesday" name='tuesday'>Tuesday</option>
                      <option  value="wednesday" name='wednesday'>Wednesday</option>
                      <option  value="thursday" name='thursday'>Thursday</option>
                      <option  value="friday" name='friday'>Friday</option>
                      <option  value="saturday" name='saturday'>Saturday</option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    {dayAndTime.length>0 && <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Days available
                    </label>}
                    <div className='grid-cols-4'>
                    {dayAndTime.map((data)=>{
                      return(
                           <div
                            // key={index}
                            className="bg-gray-400 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden"
                          >
                            <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">
                              {data.selectedDay}
                            </span>
                            <button
                              type="button"
                              className="w-6 h-8 inline-block align-middle text-gray-500 bg-gray-800 focus:outline-none"
                              onClick={() => deleteDay(data.selectedDay)}
                            >
                              <svg
                                className="w-6 h-6 fill-current mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                                />
                              </svg>
                            </button>
                          </div>

                      )       
                    }) }
                    </div>
                
                  </div>
                </div>


                {selectedDay &&
                  <>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Time Start
                        </label>
                        <input type="time" name='timeStart' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={dayHandle} />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Time End
                        </label>
                        <input name='timeEnd' type="time" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={dayHandle} />
                      </div>
                    </div>
                    <button onClick={dayAdding} className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 h-12" type="button">
                      Submit
                    </button>
                  </>
                }
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Location
                    </label>
                    <input type="text" name='location' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      City
                    </label>
                    <input type="email" name='city' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Country
                    </label>
                    <input name='country' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Postal Code
                    </label>
                    <input name='postalCode' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handleEdit} />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          About Me
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                About me
              </label>
              <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
            </div>
          </div>
        </div> */}

              <div className='flex justify-center mt-5'>
                <button onClick={onSubmit} className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                  Submit
                </button>
              </div>


            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AddChargingPort