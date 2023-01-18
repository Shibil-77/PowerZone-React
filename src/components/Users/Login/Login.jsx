import React from 'react';
import TextField from '@mui/material/TextField';
// import {Link} from 'react-router-dom'


function Login() {
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
                <TextField size='small' id="outlined-basic"  className='w-full' label="Full Name" variant="outlined" />
              </div>
              <div className='grid  place-items-center mt-5 '>
                <TextField size='small' id="outlined-basic" className='w-full' label="Full Name" variant="outlined" />
              </div>
              <div className='grid  place-items-center mt-5 '>
                <TextField size='small' id="outlined-basic" className='w-full' label="Full Name" variant="outlined" />
              </div>
              <div className='grid  place-items-center mt-5 '>
                <TextField size='small' id="outlined-basic" className='w-full' label="Full Name" variant="outlined" />
              </div>
              <div className='grid  place-items-center mt-5 '>
                <TextField size='small' id="outlined-basic" className='w-full' label="Full Name" variant="outlined" />
              </div>
            {/* <Link>HELLO WORLD</Link> */}
             {/* <button className='items-center'>Sig Up</button> */}

            </div>
          </form>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login
