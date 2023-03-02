import React,{useEffect} from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import DashBoard from '../../../components/Admin/Dashboard/DashBoard'
import {dashBoard} from '../../.././api/adminApi'

function DashBoardPage() {

   const ApiCall = ()=>{
     const data= dashBoard()
   }

    useEffect(()=>{
      ApiCall()
    },[])

  return (
   <AdminLayout>
    <div className='grid grid-cols-1 md:grid-cols-2 '>
      <div>
         <DashBoard type={"bar"} postGraphCategories={[1,2,45,6,8,7,5]} postGraphData={[3,4,6,8,0,5,3,6,8,5]} />
      </div>
      <div className='mx-10'>
         <DashBoard type={"line"}  postGraphCategories={[1,2,45,6,8,7,5]} postGraphData={[3,4,6,8,0,5,3,6,8,5]} />
         </div>
    </div>
    {/* <DashBoard postGraphCategories={[1,2,45,6,8,7,5]} postGraphData={[3,4,6,8,0,5,3,6,8,5]} /> */}
   </AdminLayout>
  )
}

export default DashBoardPage