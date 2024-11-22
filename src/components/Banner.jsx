import React from "react";
import profileImage from "../assets/my2.jpg"; 
import { FaFileAlt, FaProjectDiagram, FaCode, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-6 relative">
      {/* Running Dialogue */}
      <div className="absolute top-0 w-full bg-blue-500 text-white text-center py-2 animate-marquee">
        <span className="font-bold text-lg">🚀 Open to Work!</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-12">
        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src={profileImage}
            alt="Sachin Surpe"
            className="rounded-full shadow-md w-40 h-40 object-cover"
          />
          <h1 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
            Sachin Surpe
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300">
            A Full Stack Developer
          </h2>
          <p className="text-center mt-2 text-gray-600 dark:text-gray-400">
            Passionate about bridging frontend and backend excellence to create
            dynamic, user-friendly applications.
          </p>
        </div>

        {/* Summary Section */}
        <div className="text-center lg:text-left space-y-4">
          <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Welcome to My Portfolio
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I specialize in building scalable web applications with a focus on
            clean, intuitive designs. Explore my work and get to know me better
            through my projects, blogs, and resume.
          </p>
          <a href="#Contactme">
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition">
              Let’s Talk
            </button>
          </a>
        </div>
      </div>

      {/* Navigation Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Resume Tile */}
        <a
          href="#about"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaFileAlt className="text-5xl text-blue-500 mb-4" />
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">Resume</h4>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Learn more about my experience and skills.
          </p>
        </a>

        {/* Projects Tile */}
        <a
          href="#skills"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaProjectDiagram className="text-5xl text-green-500 mb-4" />
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">Projects</h4>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Explore the projects I’ve worked on.
          </p>
        </a>

        {/* Tech Stack Tile */}
        <a
          href="#expertise"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaCode className="text-5xl text-purple-500 mb-4" />
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">Tech Stack</h4>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Discover the tools and technologies I use.
          </p>
        </a>

        {/* Stay with Me Tile (Social Media Links) */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Connect with Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/_surpe_sachin_8600?igsh=NDRkODFuOWNjNXls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-500 hover:text-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-surpe-277905208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sachinsurpe8600@gmail.com"
              className="text-3xl text-red-600 hover:text-red-700 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:7262853395"
              className="text-3xl text-green-500 hover:text-green-600 transition-colors"
            >
              <FaPhone />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-center">
            Connect with me on my social media platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
