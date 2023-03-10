
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { bookingCancelApi } from '../../api/userApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Swal = require('sweetalert2')

function Table({ headData, tableData }) {
    const [table, setTable] = useState(tableData)

    function convertDate(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const result = `${day}-${month}-${year}`;
        return result;
    }

    const bookingCancel = (bookingId) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Cancel!',
                    'Your file has been deleted.',
                    'success'
                )
                bookingCancelApi(bookingId)
                setTable(table.filter((data) => data._id != bookingId))
                toast.success('Booking SuccessFully Canceled', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        })

    }

    return (
        <>
           
     
        <div className="overflow-x-auto w-full h-full  flex justify-center">
    
            <ToastContainer />
          
            <table className="  rounded-2xl shadow-2xl sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400 w-2/3 ">
                <thead className="text-xs text-gray-700 uppercase rounded-lg  dark:bg-gray-700 bg-green-600 dark:text-gray-400">
                    <tr>
                        {headData?.map((data) => {
                            return (<th scope="col" className="px-6 py-3">
                                {data}
                            </th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {table &&
                        table?.map((data) => {
                            return (
                                <tr key={data?._id} className="bg-white ">
                                    <th scope="row" className="px-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data?._id}
                                    </th>
                                    <td className="px-6 py-0 font-medium text-gray-900 whitespace-nowrap">
                                        {convertDate(data?.date)}
                                    </td>
                                    <td className="px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {data?.time}
                                    </td>
                                    <td className="px-6 ">
                                        <button onClick={() => {
                                            bookingCancel(data._id)
                                        }} className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 h-12" type="button">
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>   </>

    )
}

export default Table