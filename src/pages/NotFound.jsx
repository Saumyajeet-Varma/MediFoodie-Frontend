// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
const NotFound = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h1 className="text-7xl font-extrabold text-purple-700">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</p>
            <p className="mt-2 text-gray-600 text-center">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg shadow hover:bg-purple-700 transition"
            >
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound