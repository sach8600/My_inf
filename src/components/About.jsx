import React from "react";
import { FaBriefcase, FaUniversity, FaFileDownload, FaEye } from "react-icons/fa";
import programmingImage from "../assets/programming-image.jpg"; // Replace with actual image path
import pdfFile from "../assets/Sachin_Surpe_Resume.pdf";

export default function AboutMe() {
  return (
    <div className="my-14 bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-10">
        About Me
      </h1>

      {/* Self Summary and Image */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-black dark:text-white">Hi, I'm Sachin!</h2>
          <p className="text-lg text-black dark:text-gray-100">
            I am a recent B.Tech graduate in computer science and Engineering from
            TPCT’s College of Engineering, Dharashiv. I have a solid
            foundation in both front-end and back-end development,
            making me well-suited for Full Stack roles.
            I completed a comprehensive Java certification course at Yess
            Infotech, Pune, where I enhanced my skills in Java and Spring
            Boot. On the front end, I am proficient in HTML, CSS, JavaScript,
            and ReactJS, while on the back end, I specialize in Java, Spring
            Boot, and MySQL.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={programmingImage}
            alt="A person programming on a laptop"
            className="w-1/2 md:w-3/5 lg:w-2/3 xl:w-1/2 h-auto rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>

      {/* Experience and Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Experience Card */}
        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4 transition-transform hover:scale-105 hover:shadow-xl hover:bg-orange-100 dark:hover:bg-orange-800">
          <div className="flex items-center space-x-3">
            <FaBriefcase className="text-3xl text-orange-500" />
            <h3 className="text-2xl font-semibold text-black dark:text-white">Experience</h3>
          </div>
          <p className="text-black dark:text-gray-100">
            I Have successfully completed internship of 6 months as a fullstack
            developer with Yess Infotech, Pune
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4 transition-transform hover:scale-105 hover:shadow-xl hover:bg-green-100 dark:hover:bg-green-800">
          <div className="flex items-center space-x-3">
            <FaUniversity className="text-3xl text-green-500" />
            <h3 className="text-2xl font-semibold text-black dark:text-white">Education</h3>
          </div>
          <p className="text-black dark:text-gray-100">
            Jan 2021 - July 2019
            Tpct's COE. Dharashiv
            Computer Science and Engineering
          </p>
        </div>
      </div>

      {/* Resume Section */}
      <div className="flex justify-center mb-16">
        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center space-y-4 transition-transform hover:scale-105 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-blue-800">
          <h3 className="text-2xl font-semibold text-black dark:text-white">My Resume</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Download Resume Button */}
            <a
              href={pdfFile}
              className="inline-flex items-center text-lg text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full"
              download
            >
              <FaFileDownload className="mr-2" />
              Download Resume
            </a>

            {/* View Resume Button */}
            <a
              href={pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full"
            >
              <FaEye className="mr-2" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
