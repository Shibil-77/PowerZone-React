import React, { useEffect } from 'react'
import {userPortBooking} from '../../../api/userApi'

function PortBookings({ headData }) {

    const APICall = ()=>{
        userPortBooking ()
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="overflow-x-auto w-full h-full flex justify-center">
                <table className="  rounded-2xl shadow-2xl sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400 w-2/3 ">
                    <thead className="text-xs text-gray-700 uppercase rounded-lg  dark:bg-gray-700 bg-green-600 dark:text-gray-400">
                        <tr>
                            {headData?.map((data) => {
                                return (<th scope="col" key={data} className="px-6 py-3">
                                    {data}
                                </th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>

                        {table &&
                            table.map((data) => {
                                return (
                                    <tr key={data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "  >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data._id}
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {data.rate}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {data.kW}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {data.type}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {data.location}
                                        </td>
                                        <td classNameName="px-10  py-10" >
                                            <button onClick={() => deletePortSubmit(data._id)} className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default PortBookings