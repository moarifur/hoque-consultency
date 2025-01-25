import { GiCommercialAirplane } from "react-icons/gi";
import { TbLicense } from "react-icons/tb";
import { RiVisaLine } from "react-icons/ri";
import { IoIosGlobe } from "react-icons/io";
import ImageSlider from "@/app/Home/ImageSlider";

const category = "Our Services";
const title = "Expert Visa Assistance and Guidance";
const subtitle =
    "Trust Hoque Consultancy for hassle-free Visa processing. Let our experts handle every detail, ensuring a smooth and stress-free experience for global travelers.";

const items = [
    {
        logo: <GiCommercialAirplane />,
        title: "Civil Aviation Consultancy Services",
        subtitle: "Streamlining Your Aviation Needs with Expertise",
    },
    {
        logo: <TbLicense />,
        title: "IATA License Assistance for Travel Agency",
        subtitle: "Travel with Professional Accreditation",
        // subtitle: "Empowering Travel Agencies with Professional Accreditation",
    },
    {
        logo: <RiVisaLine />,
        title: "Trusted Customized Visa Solutions",
        subtitle: "Tailored Visa Support Built on Trust and Excellence",
    },
    {
        logo: <IoIosGlobe />,
        title: "Exclusive Visa Guidance for Global Travelling",
        subtitle: "Your Reliable Partner for Effortless Worldwide Journeys",
    },
];

const Page = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div
                className="text-white flex flex-col items-center justify-center h-[30vh] sm:h-[40vh] md:h-[50vh] bg-cover bg-[url('/services_cover.jpg')]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 glowing-title text-center px-4">
                    Expert Guidance and Seamless Solutions
                </h2>
            </div>

            {/* Info Section */}
            <div
                className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-10 py-10 md:h-auto bg-cover bg-[url('/tra-map.png')] px-4">
                {/* Text Content */}
                <div className="flex flex-col items-start justify-center max-w-lg md:w-1/2">
                    <p className="text-slate-400 font-bold text-lg tracking-wide mb-4 sm:mb-6">
                        {category}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        {title}
                    </h2>
                    <p className="text-neutral-700 text-base sm:text-lg">{subtitle}</p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center md:w-1/2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-4 p-5 border-2 rounded-md bg-white w-full hover:shadow-lg hover:border-purple-200 transition"
                        >
                            <div className="text-red-700 text-3xl sm:text-4xl md:text-5xl">
                                {item.logo}
                            </div>
                            <div>
                                <p className="text-lg sm:text-xl font-bold mb-2">{item.title}</p>
                                <p className="text-neutral-500 text-sm sm:text-base">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <p className='font-bold text-3xl text-center glowing-title text-slate-700'>Essential Visa Documents for Every Country
                    – Click Below to Begin Your Journey to Dream Destinations!</p>
                <ImageSlider position='relative' top='10'/>
            </div>

            <div className="mt-20 flex items-center justify-between">
                <div className="p-8">
                    <img src="/airport.jpg" alt="" className=' rounded-lg'/>
                </div>
                <div className="max-w-[80%]">
                    <h1 className='max-w-[70%] text-4xl font-bold mb-8 font-sans'>Plan Your Ideal Journey</h1>
                    <p className='max-w-[70%] text-lg font-serif'>Let Hoque Consultancy guide you through every step of
                        your Visa-related journey. Our friendly experts ensure seamless appointments, secure services,
                        and hassle-free experiences. Whether you’re a cardholder, merchant, or partner, count on us to
                        make your Visa process smooth and straightforward.</p>
                    <div className="mt-10 flex items-center justify-between gap-5">
                        <a href='/contact' className="cta-button px-8 py-4 bg-[#f67c93] rounded-lg font-semibold text-lg transform hover:scale-105 transition-transform duration-300">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
