import React from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import AdminPortTable from '../../../components/Admin/Table/AdminPortDetails'


function AdminPortDetails() {
    const tableHeaders =["Id", "Rate","kW","Location","Request"]
    const portDetails = "userDetails"
    return (
        <div>
            <AdminLayout>
                <AdminPortTable data={portDetails} tableHeaders={tableHeaders} />
            </AdminLayout>
        </div>
    )
}

export default AdminPortDetails