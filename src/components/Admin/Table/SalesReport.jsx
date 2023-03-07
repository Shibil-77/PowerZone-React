import React, { useEffect,useState } from 'react'
import {SalesReportApi} from '../../../api/adminApi'

function SalesReport({headData}) {
 
  const [table,setTable] = useState()
   
  const APICall = async()=>{
     const salesData = await  SalesReportApi()
     console.log(salesData);
     setTable(salesData)
  }

   useEffect(()=>{
    APICall()
   },[])
  return (
    <>
     <div className="overflow-x-auto w-full h-full  flex justify-center">
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
                        table?.map((data,index) => {
                            return (
                                <tr key={data?._id} className="bg-white ">
                                    <th scope="row" className="px-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td className="px-6 py-0 font-medium text-gray-900 whitespace-nowrap">
                                        {data._id.day}/3/2023
                                    </td>
                                    <td className="px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {data.count}
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