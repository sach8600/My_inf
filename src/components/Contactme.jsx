import React from "react";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="my-14 px-6 py-10 bg-white dark:bg-gray-900 transition duration-300">
      <h1 className="text-5xl font-bold  text-center text-black dark:text-white">
        Contact Me
      </h1>
      <div className="mt-10 max-w-4xl mx-auto">
        {/* Contact Form */}
        <form className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Subject
            </label>
            <input
              type="text"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="4"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social and Contact Icons */}
        <div className="flex justify-center mt-10 space-x-8">
          {/* Mail Us */}
          <a
            href="mailto:Surpesachin8600@gmail.com"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaEnvelope className="text-4xl" />
            <span className="mt-2 text-lg font-medium">Mail Us</span>
          </a>
          {/* Contact Us */}
          <a
            href="tel:7262853395"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaPhoneAlt className="text-4xl" />
            <span className="mt-2 text-lg font-medium">Contact Us</span>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/_surpe_sachin_8600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaInstagram className="text-4xl" />
            <span className="mt-2 text-lg font-medium">Instagram</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sachin-surpe-277905208"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-4xl" />
            <span className="mt-2 text-lg font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
