import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='py-3 bg-gray-100 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-64 text-center md:text-left'>
                <div className='mb-2 md:mb-0'>
                    <p>&copy; 2024 Sachin Surape <span>All Rights Reserved</span></p>
                </div>
                <div className='space-x-3 md:space-x-5'>
                    <a href='/about' className='hover:underline'>
                        About
                    </a>
                    <a href='/privacy-policy' className='hover:underline'>
                        Privacy Policy
                    </a>
                    <a href='/contact' className='hover:underline'>
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
}
