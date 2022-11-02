import React from 'react'

function Footer() {
  return (
    <>
    <footer className='w-[80%] mx-auto mt-[250px]'>
      <div className='footerContainer grid grid-cols-1 md:grid-cols-4'>
        <div>
          <h3 className='font-bold mb-[30px] '>Product</h3>
          <ul className='flex flex-col text-sm gap-[20px]'>
            <li>Email Flow</li>
            <li>Free Tools</li>
            <li>Agents</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
        <h3 className='font-bold mb-[30px] '>Resources</h3>
          <ul className='flex flex-col text-sm gap-[20px]'>
            <li>Email Flow</li>
            <li>Free Tools</li>
            <li>Agents</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
        <h3 className='font-bold mb-[30px] '>Company</h3>
          <ul className='flex flex-col text-sm gap-[20px]'>
            <li>Partnerships</li>
            <li>Term of use</li>
            <li>Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
        <h3 className='font-bold mb-[30px] '>Get in touch</h3>
        <p className='text-sm'>You will find your next marketing value you prefer</p>
        <div className='mt-[20px]'><img src="/Social media icon.png"/></div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer