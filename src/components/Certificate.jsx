import React, { useState } from "react";
import cert1 from "../assets/certificates/cert1.jpg";
import cert2 from "../assets/certificates/cert2.jpg";
import cert3 from "../assets/certificates/cert3.jpg";
import cert4 from "../assets/certificates/cert4.jpg";

export default function Certificates() {
  const certificates = [
    { src: cert1, alt: "Certificate 1" },
    { src: cert2, alt: "Certificate 2" },
    { src: cert3, alt: "Certificate 3" },
    { src: cert4, alt: "Certificate 4" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Function to open the modal and set the selected certificate
  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <div className="my-14 px-6 py-10 bg-white dark:bg-gray-900 transition duration-300">
      <h1 className="text-5xl font-bold text-center text-black dark:text-white">
        Certificates
      </h1>
      <div className="mt-10 max-w-4xl mx-auto">
        {/* Certificates Display Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {certificates.map((cert, index) => (
            <div key={index} className="group relative">
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
                onClick={() => openModal(cert)} // Open modal on click
              />
              {/* Hover effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <p className="text-white font-bold text-lg">{cert.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal to view selected certificate */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-lg text-gray-600"
              >
                X
              </button>
              <img
                src={selectedCert.src}
                alt={selectedCert.alt}
                className="max-w-lg max-h-96 object-contain"
              />
              <p className="mt-4 text-center text-xl font-bold">{selectedCert.alt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
