import React from 'react'


function AddBanner({ children }) {
  return (
    <>
      <div className='bg-white w-screen  md:bg-none gap-5 md:mx-10 mx-10 rounded-3xl flex  justify-center mb-10'>
        <div>
          <div className='w-full '>
            {children}
          </div>
          <div className='mt-10 w-auto bg-[#c2c2c228]  shadow-xl rounded-3xl py-20 mb-10'>
            <form action='/' >
              <div class="flex justify-center ">
                <div class="mb-3 xl:w-96 ">
                  <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                  >Heading</label>
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
                  >Title</label>
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
                  >Image</label>
                  <input
                    type="file"
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
            </form>
          </div>
        </div>
      </div>
    </>
  )
}



export default AddBanner