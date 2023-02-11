import React, { useState } from 'react'
import { userAccess } from '../../../api/adminApi'

function AdminTableRow({ data }) {
    const [access, setAccess] = useState(data.access)

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data._id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data.fullName}
            </th>
            <td className="px-6 py-4">
                {data.email}
            </td>
            <td className="px-6 py-4">
                {data.phone}
            </td>
            <td classNameName="px-10  py-10" onClick={async () => {
                const result = await userAccess(data._id)
                setAccess(!access)
            }}>
                {
                    access ? (
                        <button className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                            UnBlock
                        </button>
                    ) : (
                        <button className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                            Block
                        </button>
                    )
                }
            </td>
        </tr>
    )
}

export default AdminTableRow
