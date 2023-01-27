import React, { useEffect, useState } from 'react'
import { getUserData } from '../../api/userApi'

function AdminTable({ tableHeaders, data }) {
    const [tableData, setTableData] = useState([])
    console.log(data)
    useEffect(() => {
        const user = async () => {
            if (data === "userDetails") {
                const data = await getUserData()
                if (data) {
                    setTableData(data)
                } else {
                    console.log("server error");
                }
            } else {
                console.log("==================");
            }
        }
        user()
    }, [])
    return (
        <section className="w-full px-4">
            <div className="flex justify-center h-full ">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Booking Details</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        {tableHeaders.map((header) => {
                                            return <th key={header}>{header}</th>
                                        })}
                                    </tr>
                                </thead>

                                {tableData.map((data) => {
                                    return (
                                        <tbody className="text-sm divide-y divide-gray-100">
                                            <tr key={data.id} >
                                                <td>{data.fullName}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                {data.isVerified ? <td>success</td> : <td>error</td>}
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminTable
