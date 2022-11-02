import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    <div className='h-[20px] text-white bg-[#3D3D3F] flex items-center justify-center text-sm p-4 mt-[25px]'>
      Copyrights 2021 - j-shop.com, All rights reserved
      </div>
      
    </>
  )
}

export default Layout
