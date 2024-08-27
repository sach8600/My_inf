import React from 'react';
import bannerImage from "../assets/my2.jpg";
import bannerBackground from "../assets/6227191.jpg";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center',
      }}
      className="main-container flex flex-col-reverse lg:flex-row items-center py-10 lg:py-20 text-white"
    >
      {/* Left Section */}
      <div className="w-full flex justify-center lg:justify-end text-center lg:text-left px-6 lg:px-16">
        <div className='w-full lg:w-2/3 space-y-4 lg:ms-10'>
          <h3 className='text-3xl font-semibold'>Hi, I am</h3>
          <h1 className='text-5xl font-bold'>Sachin Surape</h1>
          <h2 className='text-3xl'>I am a Full-Stack Developer</h2>
          <p>
            I am a talented full-stack Java developer with extensive experience in designing and implementing complex software solutions. Known for my problem-solving skills, I excel in creating scalable, efficient applications.
          </p>
          <div className='icon-container space-x-3 flex justify-center lg:justify-start mt-4'>
            <a className='border cursor-pointer px-4 py-4 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full flex justify-center items-center'>
              <i className="fa-brands fa-facebook text-2xl lg:text-4xl"></i>
            </a>
            <a className='border cursor-pointer px-4 py-4 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full flex justify-center items-center'>
              <i className="fa-brands fa-linkedin text-2xl lg:text-4xl"></i>
            </a>
            <a className='border cursor-pointer px-4 py-4 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full flex justify-center items-center'>
              <i className="fa-brands fa-instagram text-2xl lg:text-4xl"></i>
            </a>
          </div>
          <br />
          <a className='text-xl lg:text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition' href='/Contact'>
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full flex justify-center lg:justify-start mt-6 lg:mt-0">
        <img className="rounded-full shadow-lg w-48 h-48 lg:w-72 lg:h-72 object-cover" src={bannerImage} alt="Sachin Surape" />
      </div>
    </div>
  );
}
