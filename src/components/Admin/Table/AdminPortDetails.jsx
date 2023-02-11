import React,{useEffect,useState} from 'react'
import { getPortData } from '../../../api/adminApi'
import PortRow from './PortRow'

function AdminPortDetails({data,tableHeaders}) {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        const user = async () => {
            if (data === "userDetails") {
                const portData = await getPortData()
                if (portData) {
                    console.log(portData);
                    setTableData(portData)
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
        <div className="overflow-x-auto w-full flex justify-center">
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
                           <PortRow data={data}/>    
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPortDetails
