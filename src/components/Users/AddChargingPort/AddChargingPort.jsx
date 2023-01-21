import React from 'react'

function Form({ children }) {
  return (
    <>
      <div className='bg-white w-full md:bg-none gap-5 md:mx-10 mx-10 rounded-3xl flex py-2 justify-center border'>
        <div>
          <div className='w-full '>
            {children}
          </div>
          <div className='w-auto bg-[#c2c2c228]  shadow-xl rounded-3xl '>
            <form action='/' className=''>

              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96 ">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Rate</label>
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
                    placeholder="Text input"
                  />
                </div>
              </div>


              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Available Days</label>
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
                    placeholder="Text input"
                  />
                </div>
              </div>


              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Start Time</label>
                  <input
                    type="time"
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
                    placeholder="Start Time"
                  />
                </div>
              </div>


              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >End Time</label>
                  <input
                    type="time"
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
                    placeholder="End Time"
                  />
                </div>
              </div>

              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
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


              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Address 1</label>
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
                    placeholder="Address 1"
                  />
                </div>
              </div>



              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Address 2</label>
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
                    placeholder="Address 2"
                  />
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

export default Form