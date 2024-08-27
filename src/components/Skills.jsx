import React, { useState } from 'react';

export default function Skills() {
    const [skills] = useState([
        {
            id: '1',
            title: 'Full Java',
            description: 'Java is a versatile, object-oriented programming language known for its portability, security, and scalability. It’s widely used for building enterprise applications, Android apps, and large-scale systems, supporting robust multithreading and memory management.',
            iconClass: 'fa-brands fa-java',
            buttonText: 'Check',
        },
        {
            id: '2',
            title: 'React.Js',
            description: 'React.js is a JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM, enabling efficient updates and reusability, ideal for creating dynamic and responsive web applications.',
            iconClass: 'fa-brands fa-react',
            buttonText: 'Check',
        },
        {
            id: '3',
            title: 'MySQL',
            description: 'MySQL is a widely-used, open-source relational database management system (RDBMS). It supports SQL for querying and managing data, making it ideal for web applications, data storage, and handling large datasets efficiently.',
            iconClass: 'fa-solid fa-database',
            buttonText: 'Check',
        },
    ]);

    return (
        <div className='main-container py-14'>
            <h1 className='text-3xl md:text-5xl font-bold text-center underline'>My Skills</h1>
            <div className='skills-container flex flex-col md:flex-row md:space-x-5 px-5 md:px-10 mt-12 space-y-5 md:space-y-0'>
                {skills.map((skill) => (
                    <div key={skill.id} className='cursor-pointer hover:bg-red-500 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl flex-1'>
                        <i className={`text-4xl md:text-5xl ${skill.iconClass}`}></i>
                        <h1 className='text-2xl md:text-4xl'>{skill.title}</h1>
                        <p className='text-sm md:text-base'>
                            {skill.description}
                        </p>
                        <button className='px-3 py-2 bg-orange-500 shadow rounded-full'>{skill.buttonText}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
