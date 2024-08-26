import { linen } from "color-name";
import { useState } from "react";

const Header=()=>
{
    const [brandName, setBrandname]=useState("Sachin Surape");
    const[menuLinks, setMenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"about",
            link:"/About",
            id:2,
        },
        {
            title:"skills",
            link:"/Skills",
            id:3,
        },
        {
            title:"Protfolio",
            link:"/portfolio",
            id:4,
        },
        {
            title:"contact",
            link:"/Contact",
            id:5,
        }
     ])

     const [actionButton, setActionButton]=useState(
        {
            title:"Hire Me",
            link:"/hire-me",
        } );
    return (
        
    <>
    <div className=" h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
            <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
            { menuLinks.map((link)=>(
                <a key={link.id} href={link.link}  className="hover:text-orange-600">
                    {link.title}
                </a>
            ))}
            {/* <a href="/About" className="hover:text-orange-600">about</a>
            <a href="/home"  className="hover:text-orange-600">Home</a>
            <a href="/Skills" className="hover:text-orange-600">skills</a>
            <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
            <a href="/Contact" className="hover:text-orange-600">contact</a> */}
        </div>

        <div> 
            <a href={actionButton.link} className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl" >
                {actionButton.title}

            </a>
        </div>



    </div>



    </>
    
    );
}
export default Header;