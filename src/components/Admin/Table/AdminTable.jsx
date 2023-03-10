import React, { useEffect, useState } from 'react'
import { getUserData } from '../../../api/adminApi'
import AdminTableRow from './AdminTableRow'



function AdminTable({ tableHeaders, data }) {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        const user = async () => {
            if (data === "userDetails") {
                const data = await getUserData()
                if (data) {
                    setTableData(data)
                }
            } else {
            }
        }
        user()
    }, [])


    return (
        <div className="overflow-x-auto w-full h-full flex justify-center">
            <table className="   shadow-md sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400 w-1/3 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {tableHeaders.map((header) => {
                            return <th scope="col" className="px-6 py-3" key={header}>{header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => {
                        return (
                           <AdminTableRow data={data}/> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminTable
