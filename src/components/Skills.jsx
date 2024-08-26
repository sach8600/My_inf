import React, { useState } from 'react'

export default function Skills() {
    useState([
        {
            id:``,
            title:``,
            description:``,
            actionButton:{
                title:"",
                link:"",

            },
        }
    ])
    
  return (
    <>
    <div className='main-container py-14'>
        <h1 className='text-5xl font-bold text-center underline '>My Skills</h1>
        <div className='skills-container space-x-5 px-10 flex mt-12 '>
            <div className='cursor-pointer hover:bg-red-500 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl Skill1 '> 
                <i class="text-5xl fa-brands fa-java"></i>
                <h1 className='text-4xl'>Full java</h1>
                <p>
                Java is a versatile, object-oriented programming language known for its portability, security, and scalability. It’s widely used for building enterprise applications, Android apps, and large-scale systems, supporting robust multithreading and memory management.
                </p>
                <button className='px-3 py-2 bg-orange-500 shadow rounded-full'>check</button>
            </div>
            <div className='cursor-pointer hover:bg-red-500 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl skill2 '>
                <i class="text-5xl fa-brands fa-react"></i>
                <h1 className= 'text-4xl '>React.Js</h1>
                <p>
                React.js is a JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM, enabling efficient updates and reusability, ideal for creating dynamic and responsive web applications.
                </p>
                <br></br>
                <buton className='px-3 py-2 bg-orange-500 shadow rounded-full'>check</buton>
            </div>
            <div className='cursor-pointer hover:bg-red-500 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl skill3 '> 
                <i class="text-5xl fa-solid fa-database"></i>
                <h1 className='text-4xl'>My Sql</h1>
                <p>
                MySQL is a widely-used, open-source relational database management system (RDBMS). It supports SQL for querying and managing data, making it ideal for web applications, data storage, and handling large datasets efficiently.
                </p>
                <button className='px-3 py-2 bg-orange-500 shadow rounded-full'>check</button>
            </div>
        </div>
        


    </div>
    
    
    
    
    </>
  )
}
