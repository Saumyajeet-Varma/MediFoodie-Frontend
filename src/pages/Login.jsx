import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import axios from "../config/axios.js";
import Loader from "../components/Loader.jsx";

const Login = () => {

    const { setUser } = useContext(UserContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault();

        setIsLoading(true)

        axios.post("/api/users/login", { email, password })
            .then(res => {
                const userData = res.data.user
                setUser(userData)

                navigate("/")
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
            .finally(() => {
                setIsLoading(false)
            })

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-900">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Welcome Back
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    {/* TODO */}
                    {/* Forgot Password */}
                    {/* <div className="text-right mt-1">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-purple-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div> */}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white font-semibold py-2 rounded-lg hover:bg-purple-800 transition"
                    >
                        {isLoading ? <Loader size={2} thick={4} color={"white"} /> : "Login"}
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600 text-sm">
                    Don't have an Account?{" "}
                    <Link to="/register" className="text-purple-700 font-medium hover:underline">
                        Create
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login