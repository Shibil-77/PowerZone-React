import React,{useState,} from 'react'
import {portRequest} from "../../../api/adminApi"

function PortRow({data}) {
    const [access, setAccess] = useState(data.access)

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data._id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data._id}
            </th>
            <td className="px-6 py-4">
                {data.rate}
            </td>
            <td className="px-6 py-4">
                {data.kW}
            </td>
            <td className="px-6 py-4">
                {data.location}
            </td>
            <td classNameName="px-10  py-10" onClick={async () => {
                const result = await portRequest(data._id)
                setAccess(!access)
            }}>
                {
                    access ? (
                        <button className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                            Accept
                        </button>
                    ) : (
                        <button className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                            Not Accept
                        </button>
                    )
                }
            </td>
        </tr>
    )
}

export default PortRow
