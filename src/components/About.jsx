import React, { useState } from 'react';
import bannerImage from "../assets/my1.jpg";

export default function About() {
  const [data, setData] = useState({
    Image: bannerImage,
    title: "Java Developer and React Developer",
    desc1: `I am a skilled full-stack developer with expertise in Java and React. I build dynamic and responsive web applications, combining strong backend logic with modern frontend design to deliver comprehensive solutions.`,
    desc2: "An accomplished full-stack developer specializing in Java and React. With a strong command of backend development, I craft robust and scalable applications, while my frontend expertise ensures seamless, user-friendly interfaces. My ability to integrate complex logic with modern design principles allows me to deliver comprehensive and innovative solutions. I am passionate about staying updated with the latest technologies, ensuring my projects are both cutting-edge and highly functional.",
    actionButton: {
      title: "Read More...",
      link: "/readmore"
    },
  });

  return (
    <>
      <div className='main-container bg-gray-100 py-16 px-4 md:px-8 lg:px-16'>
        <h1 className='text-4xl md:text-5xl pb-8 font-bold underline text-center'>About Me</h1>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0'>
            <img className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full shadow-lg' src={data.Image} alt="Sachin Surape" />
          </div>

          {/* Text Section */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <div className='space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>{data.title}</h1>
              <p className='text-base md:text-lg lg:text-xl'>{data.desc1}</p>
              <p className='text-base md:text-lg lg:text-xl'>{data.desc2}</p>
              <a href={data.actionButton.link} className='inline-block bg-orange-500 py-2 px-4 text-lg md:text-xl lg:text-2xl text-white rounded-full shadow-lg hover:bg-orange-600 transition'>{data.actionButton.title}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
