import React from 'react'


function BookingDetails({ children }) {
  return (
    <>
      <div className='bg-white w-full md:bg-none gap-5 mx-10 rounded-3xl flex py-2  justify-center border'>
        <div>
          <div className='w-full '>
            {children}
          </div>
          <div className=' w-auto bg-[#c2c2c228]  shadow-xl rounded-3xl '>
            <form action='/' >

              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96 ">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Date</label>
                  <input
                    type="date"
                    className=" form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    id="exampleText0"
                    placeholder="Date"
                  />
                </div>
              </div>





              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Time</label>
                  <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">8-9</option>
                    <option value="2">9-10</option>
                    <option value="3">10-11</option>
                  </select>
                </div>
              </div>


              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96 ">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Vehicle Reg</label>
                  <input
                    type="text"
                    className=" form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    id="exampleText0"
                    placeholder="Vehicle Reg"
                  />
                </div>
              </div>


              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96 ">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Phone Number</label>
                  <input
                    type="number"
                    className=" form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    id="exampleText0"
                    placeholder="Phone Number"
                  />
                </div>
              </div>


              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Port Type</label>
                  <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Type 1</option>
                    <option value="2">Type 2</option>
                    <option value="3">Tesla</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >kW</label>
                  <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">7 kW</option>
                    <option value="2">12 KW</option>
                  </select>
                </div>
              </div>


              <div className='flex justify-center'>
                <button className=" flex  w-2/6 my-5 jus py-3 px-12 border-white border-2 bg-white shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" >Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}



export default BookingDetails