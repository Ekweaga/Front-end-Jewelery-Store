import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-around p-2'>
        <h1 className='font-bold text-3xl'>J-shop</h1>

        <div>
            <ul className='flex items-center justify-around gap-[30px]'>
                <li>Categories</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>

        <div>
            <img src="/Icons.png"  alt="icons"/>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
