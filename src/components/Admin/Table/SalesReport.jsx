import React, { useEffect,useState } from 'react'
import {SalesReportApi} from '../../../api/adminApi'

function SalesReport() {
 
  const [table,setTable] = useState()
   
  const APICall = async()=>{
     const salesData = await  SalesReportApi()
  }

   useEffect(()=>{
      
   },[])
  return (
    <>
     <div className="overflow-x-auto w-full h-full  flex justify-center">
              <ToastContainer/>
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
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default SalesReport