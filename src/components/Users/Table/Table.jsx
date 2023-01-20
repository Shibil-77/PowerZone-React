import React from 'react'

function Table() {
  return (
    <section className=" h-full w-full px-4 mx-10 overflow-x-scroll  ">
        <div className="flex flex-col justify-center h-full ">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
                <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Booking Details</h2>
                </header>
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">No</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Date</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Time</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Location</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">1</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">01/01/2023</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium ">8.00Am-9.00Pm</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Malappuram,Kerala,India</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">1</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">01/01/2023</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium ">8.00Am-9.00Pm</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Malappuram,Kerala,India</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">1</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">01/01/2023</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium ">8.00Am-9.00Pm</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Malappuram,Kerala,India</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">1</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">01/01/2023</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium ">8.00Am-9.00Pm</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Malappuram,Kerala,India</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">1</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">01/01/2023</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium ">8.00Am-9.00Pm</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Malappuram,Kerala,India</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
     </section>    
  )
}

export default Table
