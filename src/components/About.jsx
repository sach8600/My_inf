import React, { useState } from 'react'
import bannerImage from "../assets/my1.jpg"

export default function About() {
   const [data,setData] =useState({
        Image:bannerImage,
        title:"Java devloper and react devloper",
        desc1:`i am a skilled full-stack developer with expertise in Java and React. He builds dynamic and responsive web applications, combining strong backend logic with modern frontend design to deliver comprehensive solutions.`,
        desc2:"an accomplished full-stack developer specializing in Java and React. With a strong command of backend development, he crafts robust and scalable applications, while his frontend expertise ensures seamless, user-friendly interfaces. Sachin's ability to integrate complex logic with modern design principles allows him to deliver comprehensive and innovative solutions. He is passionate about staying updated with the latest technologies, ensuring his projects are both cutting-edge and highly functional.",
        actionButton:{
            title:"Read More....",
            link:"/readmore"
        },

    });
  return (
    <>
    <div className='main-container bg-gray-100 border py-16 '>
        <h1 className='text-5xl pb-16 font-bold underline text-center'>About me</h1>
        <div    className='flex' >
            
            <div className='w-full h-50 bg-black flex justify-center'>
            <img className='w-fit  rounded-s-full' src={data.Image} alt="Sachin Surape" />
            </div>
        
           <div className='w-full  flex justify-center'>
            <div className='space-y-5 w-2/3'>
                <h1 className='text-5xl  font-semibold'>{data.title}</h1>
                <p>{data.desc1}</p>
                <p>{data.desc2}</p>
            <button className='bg-orange-500 py-2 px-3 text-2xl rounded-full shoadow-lg'>{data.actionButton.title}</button>

            </div>
        
            </div>
        </div>

    </div>
    </>
  )
}
