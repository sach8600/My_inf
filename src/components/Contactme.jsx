import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  const [message, setMessage] = useState(""); // For message state
  const [isSuccess, setIsSuccess] = useState(false); // For success status

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6l9w67m", // Replace with your EmailJS Service ID
        "template_kz3zewo", // Replace with your EmailJS Template ID
        e.target,
        "qKjipZ_k9L8PR2CpP" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!"); // Success message
          setIsSuccess(true);
          e.target.reset(); // Reset the form after successful submission
          
          // Hide the message after 2 seconds
          setTimeout(() => {
            setMessage(""); // Clear the message after 2 seconds
          }, 2000);
        },
        (error) => {
          setMessage("Failed to send the message. Please try again."); // Error message
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className="my-14 px-6 py-10 bg-white dark:bg-gray-900 transition duration-300">
      <h1 className="text-5xl font-bold text-center text-black dark:text-white">
        Contact Me
      </h1>
      <div className="mt-10 max-w-4xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="from_name" // Name matches the EmailJS template variable
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
              name="from_email" // Name matches the EmailJS template variable
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
              name="subject" // Name matches the EmailJS template variable
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message" // Name matches the EmailJS template variable
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

        {/* Success/Error Message Pop-up */}
        {message && (
          <div
            className={`${
              isSuccess ? "bg-green-500" : "bg-red-500"
            } p-4 mt-6 text-white font-medium rounded-lg transform transition-all duration-500 ease-in-out shadow-lg`}
            style={{
              animation: "popUp 0.5s ease-out", // Pop-up animation effect
            }}
          >
            {message}
          </div>
        )}

        {/* Social and Contact Icons */}
        <div className="flex justify-center mt-10 space-x-8">
          <a
            href="mailto:Surpesachin8600@gmail.com"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaEnvelope className="text-4xl" />
            <span className="mt-2 text-lg font-medium">Mail Us</span>
          </a>
          <a
            href="tel:7262853395"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaPhoneAlt className="text-4xl" />
            <span className="mt-2 text-lg font-medium">Contact Us</span>
          </a>
          <a
            href="https://www.instagram.com/_surpe_sachin_8600?igsh=NDRkODFuOWNjNXls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaInstagram className="text-4xl" />
            <span className="mt-2 text-lg font-medium">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-surpe-277905208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-4xl" />
            <span className="mt-2 text-lg font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes popUp {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
