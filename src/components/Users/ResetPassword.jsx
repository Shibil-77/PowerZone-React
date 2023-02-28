import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { apiResetPassword } from '../../api/authApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [resetData, setResetData] = useState()
    const handleEdit = async (e) => {
        const { name, value } = e.target;
        setResetData({ ...resetData, [name]: value });
    };
    const resetSubmit = async (e) => {
        e.preventDefault();
        const data = await apiResetPassword(id, resetData)
        if (data.status === 200) {
            toast.success('Password has been reset successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }
    return (
        <div>
            <ToastContainer />
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
                    Power Zone
                </a>
                <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Change Password
                    </h2>
                    <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleEdit} required="" />
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="confirm-password" name="confirmPassword" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleEdit} required="" />
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        {/* {forgotSuccess && <div><h1 className='text-green-600'>{forgotSuccess}</h1></div>}
            {forgotError && <div><h1 className='text-red-600'>{forgotError}</h1></div>} */}
                        <button type="submit" onClick={resetSubmit} class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword
