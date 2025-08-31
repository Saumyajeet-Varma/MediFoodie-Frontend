import { PlayCircle, HeartPulse, Apple, Activity, Users } from "lucide-react";
import Layout from '../components/layout/Layout'
import PartnerMarquee from "../components/PartnerMarquee";

const Homepage = () => {

    const recipeVideos = [
        { id: 1, title: "Green Smoothie for Energy", url: "https://www.youtube.com/embed/VaoV1PrYft4" },
        { id: 2, title: "Immune Boosting Salad", url: "https://www.youtube.com/embed/wEJzqF6yPoQ" },
        { id: 3, title: "High Protein Breakfast", url: "https://www.youtube.com/embed/9XWwz8cQh34" },
    ];

    const partners = [
        { name: "Apollo Hospitals", logo: "https://upload.wikimedia.org/wikipedia/en/2/27/Apollo_Hospitals_logo.png" },
        { name: "Fortis Healthcare", logo: "https://upload.wikimedia.org/wikipedia/en/d/d9/Fortis_Healthcare_logo.png" },
        { name: "AIIMS", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/AIIMS_New_Delhi_Logo.svg/1200px-AIIMS_New_Delhi_Logo.svg.png" },
    ];

    return (
        <Layout>
            <div className="font-sans">

                {/* Banner */}
                <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-700 via-purple-600 to-purple-900 text-white px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">MediFoodie</h1>
                    <p className="text-lg md:text-2xl mb-8 max-w-2xl">
                        Eat healthy, live better. Personalized food & healthcare solutions at your fingertips.
                    </p>
                    <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
                        Get Started
                    </button>
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
                <section className="py-20 bg-gradient-to-r from-purple-100 to-purple-200 text-center">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div>
                            <h2 className="text-4xl font-bold text-purple-700">50K+</h2>
                            <p className="text-gray-600">Happy Users</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-purple-700">1K+</h2>
                            <p className="text-gray-600">Healthy Recipes</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-purple-700">200+</h2>
                            <p className="text-gray-600">Partner Doctors</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-purple-700">100+</h2>
                            <p className="text-gray-600">Hospitals</p>
                        </div>
                    </div>
                </section>

                {/* Recipe Videos */}
                <section className="py-20 bg-purple-50">
                    <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">Healthy Recipe Videos</h2>
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

                {/* Partners */}
                {/* <section className="py-20 bg-gradient-to-br from-purple-100 to-purple-50 text-center">
                    <h2 className="text-3xl font-bold mb-10 text-purple-800">Our Healthcare Partners</h2>
                    <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-10">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="w-40 h-20 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                                <img src={partner.logo} alt={partner.name} className="max-h-16 object-contain" />
                            </div>
                        ))}
                    </div>
                </section> */}

                <PartnerMarquee partners={partners} speed={22} />

            </div>
        </Layout>
    )
}

export default Homepage