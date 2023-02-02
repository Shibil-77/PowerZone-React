import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { loginValidation } from '../Users/userUtils/utilRegister'
import { apiLogin } from '../../api/authApi'
import { useNavigate,Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';


function Login() {
  const [errorMessage,setErrorMessage] = useState()
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState('')
  const handleEdit = async (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const login = loginValidation(loginData)
    if (login === 'success') {
      const login =await apiLogin(loginData)
      if (login.status === 200) {
        setErrorMessage(null)
        localStorage.setItem('token', login.data.token)
        localStorage.setItem('user', login.data.user)
        navigate('/')
      }else{
        setErrorMessage(login.data.message)
      }
      }else {
        setErrorMessage(login.data.message)
    }
  }


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
              <h1 className='text-center text-3xl text-myColor-600  mt-4 font-white'>Login Page</h1>
              <form action="" >
                <div>
                  <div className='grid  place-items-center mt-5 '>
                    <TextField size='small' id="outlined-basic" className='w-full' name='email' onChange={handleEdit} label="E Mail" variant="outlined" />
                  </div>
                  <div className='grid  place-items-center mt-5 '>
                    <TextField size='small' id="outlined-basic" className='w-full' name='password' onChange={handleEdit} label="PassWord" variant="outlined" />
                  </div>
                  {/* <Link>HELLO WORLD</Link> */}
                  <div className="flex justify-center py-2">
                    {/* <Link to={'/register'}> */}
                    <p className=" text-sm text-heavy-metal-900">SignUp?<Link to='/register'><span className="text-blue-600 cursor-pointer hover:underline">Click Me</span></Link></p><br/>
                    <p className=" text-sm text-heavy-metal-900">   forgotPassword<Link to='/forgotPassword'><span className="text-blue-600 cursor-pointer hover:underline">Click Me</span></Link></p>
                    {/* </Link> */}
                  </div>
                  <div className="flex justify-center">
                    <h4>------OR------</h4>
                  </div>
                  <div className="flex gap-2 justify-center border-2 bg-white border-heavy-metal-800 shadow-md rounded-md hover:bg-heavy-metal-100 shadow-heavy-metal-700 py-2 mt-5">
                    <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                    <h3 className="mt-1 text-black">Google</h3>
                  </div>
                </div>
                <button onClick={handleLogin} className="w-full my-5 py-3 border-white border-2 bg-white shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" >Log In</button>
                {errorMessage && <div className="mx-10" ><h1 className='text-red-600'>{errorMessage}hello</h1></div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
