import { PlayCircle, HeartPulse, Apple, Activity, Users } from "lucide-react";
import Layout from '../components/layout/Layout';
import InfiniteMarquee from "../components/InfiniteMarquee";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Homepage = () => {

    const { user } = useContext(UserContext)

    const recipeVideos = [
        { id: 1, title: "Green Smoothie for Energy", url: "https://www.youtube.com/embed/VaoV1PrYft4" },
        { id: 2, title: "Immune Boosting Salad", url: "https://www.youtube.com/embed/wEJzqF6yPoQ" },
        { id: 3, title: "High Protein Breakfast", url: "https://www.youtube.com/embed/9XWwz8cQh34" },
    ];

    const partners = [
        { name: "Apollo Hospitals", logo: "https://sp.yimg.com/ib/th/id/OIP.tfeqPKZC3faF0iz2HUXFCAHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" },
        { name: "Fortis Healthcare", logo: "https://sp.yimg.com/ib/th/id/OIP.AKZlo_vVsPCv7fQytHA6KQHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" },
        { name: "AIIMS", logo: "https://sp.yimg.com/ib/th/id/OIP.r6Qpi6K5YEv9BlN9So2XKwHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" },
    ];

    return (
        <Layout>
            <div className="font-sans">

                {/* Banner Section */}
                <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 overflow-hidden">
                    {/* Decorative SVG Background */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#9333ea" />
                                <stop offset="100%" stopColor="#c084fc" />
                            </linearGradient>
                        </defs>

                        {/* Abstract circles */}
                        <circle cx="15%" cy="20%" r="100" fill="url(#grad1)" />
                        <circle cx="80%" cy="10%" r="80" fill="#a855f7" opacity="0.5" />
                        <circle cx="70%" cy="70%" r="120" fill="#9333ea" opacity="0.3" />
                        <circle cx="20%" cy="80%" r="150" fill="#c084fc" opacity="0.4" />
                    </svg>

                    {/* Banner Content */}
                    <div className="relative z-10 max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-900">
                            Eat Healthy, Stay Strong with <span className="text-purple-600">MediFoodie</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-purple-800">
                            Discover personalized diet plans, healthy recipes, and trusted healthcare
                            insights — all in one platform.
                        </p>
                        {!user && <div className="mt-8">
                            <a href="/register">
                                <button className="px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:bg-purple-700 transition">
                                    Get Started
                                </button>
                            </a>
                        </div>}
                    </div>
                </section>


                {/* Features */}
                <section className="py-20 bg-purple-50 text-gray-800">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                            <Apple className="mx-auto text-purple-700 w-12 h-12 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Healthy Meals</h3>
                            <p>Discover diet plans curated by nutritionists for your lifestyle.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                            <HeartPulse className="mx-auto text-purple-700 w-12 h-12 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Wellness Tracking</h3>
                            <p>Monitor calories, nutrition, and fitness progress seamlessly.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                            <Activity className="mx-auto text-purple-700 w-12 h-12 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Doctor Guidance</h3>
                            <p>Connect with certified doctors & dieticians for advice.</p>
                        </div>
                    </div>
                </section>

                {/* Numbers */}
                <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
                    {/* Decorative SVG background (like foodie pattern) */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#9333ea" />
                                <stop offset="100%" stopColor="#c084fc" />
                            </linearGradient>
                        </defs>

                        {/* Abstract circles */}
                        <circle cx="10%" cy="30%" r="90" fill="url(#grad2)" />
                        <circle cx="85%" cy="20%" r="70" fill="#a855f7" opacity="0.5" />
                        <circle cx="70%" cy="80%" r="100" fill="#9333ea" opacity="0.25" />
                        <circle cx="25%" cy="85%" r="120" fill="#c084fc" opacity="0.35" />
                    </svg>

                    <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-bold text-purple-800">50K+</h2>
                            <p className="text-gray-700">Happy Users</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-bold text-purple-800">1K+</h2>
                            <p className="text-gray-700">Healthy Recipes</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-bold text-purple-800">200+</h2>
                            <p className="text-gray-700">Partner Doctors</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-bold text-purple-800">100+</h2>
                            <p className="text-gray-700">Hospitals</p>
                        </div>
                    </div>
                </section>


                {/* Recipe Videos */}
                <section className="py-20 bg-purple-50">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl text-center text-purple-800 font-bold mb-10">
                            Our Healthcare Partners
                        </h2>

                        {/* Insert your InfiniteMarquee / PartnerMarquee here */}
                        <div className="relative">
                            <InfiniteMarquee contents={partners} speed={25} gap="3rem" />
                        </div>
                    </div>

                </section>

                {/* Partners */}
                <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
                    {/* Decorative SVG Background */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#9333ea" />
                                <stop offset="100%" stopColor="#c084fc" />
                            </linearGradient>
                        </defs>

                        {/* Abstract circles */}
                        <circle cx="10%" cy="30%" r="90" fill="url(#grad2)" />
                        <circle cx="85%" cy="20%" r="70" fill="#a855f7" opacity="0.5" />
                        <circle cx="70%" cy="80%" r="100" fill="#9333ea" opacity="0.25" />
                        <circle cx="25%" cy="85%" r="120" fill="#c084fc" opacity="0.35" />
                    </svg>

                    {/* Content */}
                    <h2 className="text-3xl md:text-4xl text-center text-purple-800 font-bold mb-10">Healthy Recipe Videos</h2>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recipeVideos.map(video => (
                            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <iframe
                                    className="w-full h-56"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <h3 className="p-4 text-lg font-semibold text-gray-700">{video.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition">
                            Show More
                        </button>
                    </div>
                </section>


            </div>
        </Layout>
    )
}

export default Homepage