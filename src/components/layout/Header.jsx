import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../../context/UserContext";

const Header = () => {

    const { user } = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-bold tracking-wide">
                        MediFoodie
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-gray-200">Home</Link>
                        <Link to="/food" className="hover:text-gray-200">Food</Link>
                        <Link to="/appointments" className="hover:text-gray-200">Appointments</Link>
                        <Link to="/fitness" className="hover:text-gray-200">Fitness</Link>
                        {user && <Link to="/profile" className="hover:text-gray-200">Profile</Link>}
                        {!user && <Link to="/login" className="hover:text-gray-200">Login</Link>}
                    </div>

                    {/* Mobile Hamburger */}
                    <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-purple-700">
                    <div className="px-4 py-3 space-y-2 flex flex-col">
                        <Link to="/" onClick={toggleMenu} className="hover:text-gray-200">Home</Link>
                        <Link to="/food" onClick={toggleMenu} className="hover:text-gray-200">Food</Link>
                        <Link to="/appointments" onClick={toggleMenu} className="hover:text-gray-200">Appointments</Link>
                        <Link to="/fitness" onClick={toggleMenu} className="hover:text-gray-200">Fitness</Link>
                        {user && <Link to="/profile" onClick={toggleMenu} className="hover:text-gray-200">Profile</Link>}
                        {!user && <Link to="/login" onClick={toggleMenu} className="hover:text-gray-200">Login</Link>}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header