import React, { useEffect,useState } from 'react'
import {userPortBooking} from '../../../api/userApi'

function PortBookings({ headData }) {
    const [table, setTable] = useState([])
    const APICall =async ()=>{
      const tableData = await userPortBooking()
      console.log(tableData);
      setTable(tableData)
    }

    function convertDate(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const result = `${day}-${month}-${year}`;
        return result;
    }

    useEffect(() => {
        APICall()
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
                                            {data.portId}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {convertDate(data.date)}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {data.time}
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