import React from 'react'
import Navbar from '../../components/Users/Navbar'

function MapLayout({children}) {
  return (
       <div className='bg-[#e9f7fa] h-full'>
                <div>
                    <Navbar />
                </div>
                {children}
        </div>
  )
}

export default MapLayout
