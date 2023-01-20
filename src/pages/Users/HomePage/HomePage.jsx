import React from 'react'
import Home from '../../../components/Users/Home/Home'
import Layout from '../Layout/Layout'

function HomePage() {

  return (
    <div className='bg-[#e9f7fa] h-screen'>
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default HomePage