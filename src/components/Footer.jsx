import React from 'react';

export default function Footer() {
    return (
        <div className='py-6 bg-gray-800 text-white'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-64'>
                {/* Copyright Section */}
                <div className='mb-4 md:mb-0'>
                    <p className='text-sm'>
                        &copy; 2024 <span className='font-semibold'>Sachin Surpe</span> <span>All Rights Reserved</span>
                    </p>
                </div>

                {/* Footer Links */}
                <div className='flex space-x-3 md:space-x-5'>
                    <a
                        href='#about'
                        className='text-sm md:text-base hover:text-blue-500 transition-colors'
                    >
                        About
                    </a>
                
                    <a
                        href='#Contactme'
                        className='text-sm md:text-base hover:text-blue-500 transition-colors'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
