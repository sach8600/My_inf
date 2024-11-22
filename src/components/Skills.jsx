import React from 'react';

// Import project images from assets folder
import projectImage1 from '../assets/img1.png';
import projectImage2 from '../assets/img2.png'; 
import projectImage3 from '../assets/img3.png';
import projectImage4 from '../assets/img4.png';
import projectImage5 from '../assets/img5.png'; 
import projectImage6 from '../assets/img6.png';
import projectImage7 from '../assets/img7.png';
import projectImage8 from '../assets/img8.png'; 
import projectImage9 from '../assets/img9.png';
export default function Projects() {
    const projects = [
        {
            id: '1',
            title: 'Digital Map Work Tracking System',
            description: 'A system to track work activities based on location, providing real-time status updates and geolocation-based work management for teams.',
            images: [projectImage1, projectImage2, projectImage3], 
            projectLink: 'https://coeosmanabad.ac.in/digitalmap',
        },
        {
            id: '2',
            title: 'Granth Samrudhi',
            description: 'A web applicatin we build for reading mythological books and hindu dhrama granths technology used react js, html and css component, java spring boot and my sql',
            images: [projectImage4, projectImage5, projectImage6], 
            projectLink: '#GrantSamrudhi',
        },
        {
            id: '3',
            title: 'Portfolio Website',
            description: 'A responsive portfolio website that showcases projects, skills, and personal information. It includes sections like About Me, Projects, Skills, Contact Form, and Blog.',
            images: [projectImage7, projectImage8, projectImage9], // Use appropriate images
            projectLink: '#portfolio',
        },
    ];

    return (
        <div className="py-14">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-50 mb-12">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-10">
                {projects.map((project) => (
                    <div key={project.id} className="project-card bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex flex-col items-center space-y-4">
                            {/* Project Images with Animation */}
                            <div className="flex space-x-2 overflow-hidden">
                                {project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={project.title}
                                        className="project-image w-24 h-24 object-cover rounded-lg transition-all duration-500 transform hover:translate-x-4"
                                    />
                                ))}
                            </div>
                            {/* Project Title and Description */}
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{project.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                            {/* Project Link */}
                            <a
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg transition hover:bg-blue-600"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
