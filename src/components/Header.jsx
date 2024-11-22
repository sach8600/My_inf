import { useState } from "react";
import { Link } from 'react-scroll';

const Header = ({ theme, toggleTheme }) => {
    const [brandName, setBrandname] = useState("Sachin Surpe");
    const [menuLinks] = useState([
        { title: "Home", link: "banner", id: 1 },
        { title: "About", link: "about", id: 2 },
        { title: "Projects", link: "skills", id: 3 },
        { title: "Tech Stack", link: "expertise", id: 4 },
        { title: "Contact", link: "Contactme", id: 5 },
    ]);

    const [actionButton] = useState({
        title: "Hire Me",
        link: "footer",
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="h-20 border-b flex justify-between items-center px-4 md:px-16 bg-gray-100 dark:bg-gray-800 relative">
                {/* Brand Name */}
                <div>
                    <h1 className="text-xl md:text-2xl font-bold dark:text-white">{brandName}</h1>
                </div>

                {/* Menu Links for Desktop */}
                <div className="hidden md:flex space-x-6">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:text-orange-600 cursor-pointer dark:text-white"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-full"
                >
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl dark:text-white focus:outline-none"
                    >
                        {isMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Conditional Render */}
            <div
                className={`md:hidden absolute top-20 left-0 right-0 bg-gray-100 dark:bg-gray-800 p-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} z-50`}
            >
                {menuLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="block py-2 px-4 text-xl text-center text-black dark:text-white hover:bg-orange-600 hover:text-white"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Header;
