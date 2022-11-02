import Image from 'next/image'
import React,{useState} from 'react'

function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <>
    <nav className='flex items-center md:justify-around p-2 justify-between '>
        <h1 className='font-bold text-3xl'>J-shop</h1>

        <div>
            <ul className='md:flex items-center justify-around gap-[30px] hidden'>
                <li>Categories</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='hidden md:block'>
            <img src="/Icons.png"  alt="icons"/>
        </div>

        
        <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width="20px" height="15px"></Image>
        </div>
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-[#F8F3E9] top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!open)}>Home</li>
                
                <li  onClick={() => setOpen(!open)}>Categories</li>
                <li  onClick={() => setOpen(!open)}>About</li>
               
                <li>Contact </li>
          </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
