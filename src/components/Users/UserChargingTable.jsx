import React,{useState} from 'react'

function UserChargingTable({ headData, tableData }) {
  const [table, setTable] = useState(tableData)
    return (
        <div className="overflow-x-auto w-full flex justify-center">
            <table className="   shadow-md sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400 w-1/3 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headData.map((data) => {
                            return (<th scope="col" className="px-6 py-3">
                                {data}
                            </th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {table &&
                        table.map((data) => {
                            return (
                                <tr key={data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data._id}
                                    </th>
                                    <td className="px-6 py-0">
                                        {data.rate}
                                    </td>
                                    <td className="px-6 ">
                                        {data.type}
                                    </td>
                                    <td className="px-6 ">
                                        {data.location}
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>

    )
}



export default UserChargingTable
