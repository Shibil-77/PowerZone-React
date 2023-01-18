import React from 'react'
import TextField from '@mui/material/TextField';

function Register() {
  return (
    <>
    <div className='flex w-full h-full justify-items-center bg-[#e9f7fa]'>
      <div className='h-screen w-8/12  flex-col hidden lg:block'>
        <img className='mt-[250px]'
          src="https://electricvehicles.bchydro.com/sites/default/files/content-row/charging-an-ev-right-align%402x.png" alt="" />
      </div>
      <div className='w-full h-full pt-20 flex justify-center'>
        <div className='bg-[#c4dbec] py-10 rounded-lg shadow-xl shadow-gray-300  flex justify-center w-full mx-3  md:w-5/12  xs:w-full'>
          <div>
            <h1 className='text-center text-3xl text-myColor-600  mt-4 font-white'>Sign Up</h1>
            <form action="" >
              <div>
                <div className='grid  place-items-center mt-5 '>
                  <TextField size='small' id="outlined-basic" className='w-full' label="Full Name" variant="outlined" />
                </div>
                <div className='grid  place-items-center mt-5 '>
                  <TextField size='small' id="outlined-basic" className='w-full' label="E Mail" variant="outlined" />
                </div>
                <div className='grid  place-items-center mt-5 '>
                  <TextField size='small' id="outlined-basic" className='w-full' label="Phone" variant="outlined" />
                </div>
                <div className='grid  place-items-center mt-5 '>
                  <TextField size='small' id="outlined-basic" className='w-full' label="PassWord" variant="outlined" />
                </div>
                <div className='grid  place-items-center mt-5 '>
                  <TextField size='small' id="outlined-basic" className='w-full' label="Confirm Password" variant="outlined" />
                </div>
                {/* <Link>HELLO WORLD</Link> */}
                <div className="flex justify-center py-2">
                  {/* <Link to={'/register'}> */}
                    <p className=" text-sm text-heavy-metal-900">Register?<span className="text-blue-600 cursor-pointer hover:underline">Click Me</span></p>
                  {/* </Link> */}
                </div>
                <div className="flex justify-center">
                  <h4>------OR------</h4>
                </div>
                <div className="flex gap-2 justify-center border-2 bg-myColor-500 border-heavy-metal-800 shadow-md rounded-md hover:bg-heavy-metal-100 shadow-heavy-metal-700 py-2 mt-5">
                  <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                  <h3 className="mt-1 text-white">Google</h3>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register
