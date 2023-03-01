import React from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import DashBoard from '../../../components/Admin/Dashboard/DashBoard'

function DashBoardPage() {
  return (
   <AdminLayout>
    <DashBoard postGraphCategories={[1,2,45,6,8,7,5]} postGraphData={[3,4,6,8,0,5,3,6,8,5]} />
   </AdminLayout>
  )
}

export default DashBoardPage