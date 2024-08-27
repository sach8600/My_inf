import { useState } from "react";

const Header = () => {
    const [brandName, setBrandname] = useState("Sachin Surape");
    const [menuLinks, setMenuLinks] = useState([
        { title: "Home", link: "/home", id: 1 },
        { title: "About", link: "/about", id: 2 },
        { title: "Skills", link: "/skills", id: 3 },
        { title: "Portfolio", link: "/portfolio", id: 4 },
        { title: "Contact", link: "/contact", id: 5 },
    ]);

    const [actionButton, setActionButton] = useState({
        title: "Hire Me",
        link: "/hire-me",
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="h-20 border-b flex justify-between items-center px-4 md:px-16 bg-gray-100">
                {/* Brand Name */}
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">{brandName}</h1>
                </div>

                {/* Menu Links */}
                <div className="hidden md:flex space-x-6">
                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className="hover:text-orange-600">
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Action Button */}
                <div className="hidden md:block">
                    <a
                        href={actionButton.link}
                        className="px-4 py-2 bg-orange-500 shadow rounded-full text-sm md:text-lg"
                    >
                        {actionButton.title}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100">
                    <div className="flex flex-col space-y-4 py-4">
                        {menuLinks.map((link) => (
                            <a key={link.id} href={link.link} className="hover:text-orange-600 px-4">
                                {link.title}
                            </a>
                        ))}
                        <a
                            href={actionButton.link}
                            className="px-4 py-2 bg-orange-500 shadow rounded-full text-center"
                        >
                            {actionButton.title}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
