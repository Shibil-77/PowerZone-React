import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {apiAdminLogin} from "../../api/adminApi"
import {loginValidation} from '../Users/userUtils/utilRegister'


function AdminLogin() {
 const navigate = useNavigate();
const [adminLoginData,setAdminLoginData] = useState()
  const handleEdit = async (e) => {
    const { name, value } = e.target;
    setAdminLoginData({ ...adminLoginData, [name]: value });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const login = loginValidation(adminLoginData)
     console.log(login);
    if (login === 'success') {
      const loginData =await apiAdminLogin(adminLoginData)
      console.log("success login",loginData)
      if (loginData.status === 200) {
        // setErrorMessage(null)
        localStorage.setItem('adminToken',loginData.data.adminToken)
        navigate('/admin')
      }else{
        // setErrorMessage(login.data.message)
      }
      }else {
        // setErrorMessage(login.data.message)
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
              <h1 className='text-center text-3xl text-myColor-600  mt-4 font-white'>Admin Login Page</h1>
              <form action="" >
                <div>
                  <div className='grid  place-items-center mt-5 '>
                    <TextField size='small' id="outlined-basic" className='w-full' label="E Mail" type='email' name='email' variant="outlined" onChange={handleEdit} />
                  </div>
                  <div className='grid  place-items-center mt-5 '>
                    <TextField size='small' id="outlined-basic" className='w-full' label="PassWord" type='password' name='password' variant="outlined" onChange={handleEdit} />
                  </div>
                  {/* <Link>HELLO WORLD</Link> */}
                  <div className="flex justify-center py-2">
                    {/* <Link to={'/register'}> */}
                    <p className=" text-sm text-heavy-metal-900">Login?<span className="text-blue-600 cursor-pointer hover:underline">Click Me</span></p>
                    {/* </Link> */}
                  </div>
                  <div className="flex justify-center">
                    <h4>------OR------</h4>
                  </div>
                
                </div>
                <button className="w-full my-5 py-3 border-white border-2 bg-white shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" onClick={handleAdminLogin}>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
