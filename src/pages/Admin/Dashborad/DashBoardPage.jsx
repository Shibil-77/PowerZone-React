import React from 'react'
import AdminCard from '../../../components/Admin/Card/AdminCard'
import LineChartComponent from '../../../components/Admin/Dashboard/BarChart';
import HomeHead from '../../../components/Admin/AdminNavbar'
import SideDivision from '../../../components/Admin/Dashboard/SideDivision';
import AdminLayout from '../AdminLayout/AdminLayout';

function DashBoardPage() {
  return (
    <div>
        <div className='w-full'>
            <AdminLayout>
                <AdminCard>
                    <div>
                        <HomeHead />
                    </div>
                    <div className='grid gap-2 w-full'>
                        <div className='md:flex grid gap-2 md:mx-4 -mt-6'>
                            <div className='w-full md:w-3/4 bg-snow-drift-50 shadow-sm overflow-x-scroll scrollbar-hide shadow-heavy-metal-700 rounded-md py-10 px-5 '>
                                <LineChartComponent />
                            </div>
                            <SideDivision />
                        </div>
                    </div>
                </AdminCard>
            </AdminLayout>
        </div>
    </div>
  )
}

export default DashBoardPage
