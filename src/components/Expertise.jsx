import React from 'react'
import bannerBackground from "../assets/6227191.jpg";

export default function Expertise() {
  return (
    <>
    <div className='my-14'> 
        <h1 className='text-5xl font-bold underline text-center'>All Skills</h1>
        <div
        style={
            {
                backgroundImage:`url(${bannerBackground})`,
                backgroundSize:`cover`,
            }
        }
        className="box flex my-16 text-white">
            <div className='flex justify-center'>
                <div className='w-2/3 text-center space-y-4'>
                <h1 className='text-4xl font-semibold'>I love these technoloies</h1>
                <p>Coding languages fascinate me because they are the foundation of creating innovative software. I enjoy learning new languages, exploring their unique features, and using them to solve complex problems and build dynamic applications.</p>
                <button className='text-2xl px-4 py 2 bg-orange-500 shadow-lg rounded-full' >Hire Me</button>
                </div>

            </div>
            <div className='flex justify-center text-black font-semibold'>
                <div className='flex w-2/3 space-x-3 space-y-3 flex-wrap'>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>Core Java</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>Hbernate</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>Spring Framework</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>Spring Boot framework</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>java Servlet</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>jsp</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>My sql</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>Jdbc</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>React js</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>Html</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>css</p>
                <p className='bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500'>JavaScript</p>
                </div>
            </div> 

        </div>
    </div>
    
    
    
    </>
  )
}
