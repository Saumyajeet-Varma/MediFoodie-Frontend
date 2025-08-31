import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white">HealthCare App</h2>
                    <p className="mt-4 text-sm text-gray-300 leading-6">
                        A modern platform to track health, fitness, and wellness goals
                        with smart insights.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/profile" className="hover:text-white">Profile</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-500">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-500">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-500">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-500">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-purple-600 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>© {new Date().getFullYear()} HealthCare App. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Made with ❤️ by Your Team</p>
                </div>
            </div>
        </footer>
    );
}


export default Footer
