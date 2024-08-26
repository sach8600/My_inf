import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='py-3 bg-gray-100 flex justify-between px-64' >
        <div >
            <p>@2024 Sachin Surape <span>All Rights Resrved</span></p>
        </div>
        <div className='space-x-5'>
                <a href='/about' className='hover:underline border'>About</a>
                <a href='/about' className='hover:underline border'>Privacy Policy</a>
                <a href='/contact' className='hover:underline border'>contact</a>
               
        </div>

    </div>
    
</>
  )
}
