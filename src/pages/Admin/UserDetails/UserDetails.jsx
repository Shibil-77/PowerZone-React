import React from 'react'
import AdminTable from '../../../components/Admin/Table/AdminTable'
import AdminLayout from '../AdminLayout/AdminLayout'

function UserDetails() {
  const tableHeaders =["Name", "Email","PhoneNumber","Action"]
  const userDetails = "userDetails"
  return (
    <div>
        <AdminLayout>
            <AdminTable tableHeaders={tableHeaders} data={userDetails}/>
        </AdminLayout>
    </div>
  )
}

export default UserDetails