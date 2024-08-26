import React from 'react'
import bannerImage from "../assets/my2.jpg";
import bannerBackground from "../assets/6227191.jpg";
export default function Banner() {
  return (
    <div 
    style={
        {
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize:`cover`,
        }
    }
    className="main-container flex items-center">
        
        <div 
        className=" w-full flex justify-center text-white" >
            <div className='w-2/3 space-y-2 ms-10'>
            <h1 className=' text-5xl font-bold'>Sachin Surape</h1>
            <h3 className=' text-3xl font-semibold'>Hi, I am</h3>
            <h2 className=' text-3xl'>I am a fullStack Devloper</h2>
            <p className=''>i am a talented full-stack Java developer with extensive experience in designing and implementing complex software solutions. Known for his problem-solving skills, Sachin excels in creating scalable, efficient applications..</p>
            <div className='icon-container space-x-5 flex'>  
                <a className='border cursor-pointer px-4 py-4 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center'>
                <i class="fa-brands text-4xl  fa-facebook"></i></a>
                <a className='border cursor-pointer px-4 py-4 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center'>
                <i class="fa-brands text-4xl  fa-linkedin"></i></a>
                <a className='border cursor-pointer px-4 py-4 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center'>
                <i class="fa-brands text-4xl  fa-instagram"></i>
                </a>
             </div>
            <br />
            <a className=' text-2xl px-3 py-2 bg-orange-500 rounded-full shadow' href='/Contact'>contact me</a>
            </div>
        </div>

        <div className=" w-full flex justify-center"> 
            <img className="rounded-full shadow-lg w-fit" src={bannerImage} />
        </div>


    </div>
  )
}
