import { FaUniversity } from "react-icons/fa";
import { ImBriefcase, ImUsers } from "react-icons/im";
import { IoIosGlobe } from "react-icons/io";

/*------------------------------------ Service Data --------------------------------------------------*/
const info = {
    category: 'Our Services',
    title: 'We provide top consulting services',
    description: 'Trust Hoque Consultancy for hassle-free Visa processing. Let our experts handle every detail, ensuring a smooth and stress-free experience for global travelers.'
}
const items = [
    {
        logo: <FaUniversity />,
        title: 'Education Visa',
        subtitle: 'Turn Dreams of Studying Abroad into Reality',
    },
    {
        logo: <ImUsers />,
        title: 'Working Visa',
        subtitle: 'Work, Thrive, and Succeed Worldwide',
    },
    {
        logo: <ImBriefcase />,
        title: 'Business Visa',
        subtitle: 'Empowering Entrepreneurs to Conquer New Markets',
    },
    {
        logo: <IoIosGlobe />,
        title: 'Travel Visa',
        subtitle: 'Discover the Beauty of the World, Effortlessly',
    },
];
/*------------------------------------------------------------------------------------------------------*/
const Service = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-y-8 gap-x-5 p-5 min-h-screen bg-cover bg-[url('/tra-map.png')]">
            {/* Left Section */}
            <div className="flex flex-col items-start justify-center max-w-md w-full p-4 text-center md:text-left">
                <p className="text-slate-400 font-bold text-lg tracking-wide mb-4">{info.category}</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{info.title}</h2>
                <p className="text-neutral-700 text-base md:text-lg">{info.description}</p>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start justify-center w-full max-w-3xl">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 p-5 border-2 rounded-lg bg-white hover:shadow-md hover:border-purple-200 transition-all"
                    >
                        <div className="text-red-700 text-4xl sm:text-5xl">{item.logo}</div>
                        <div className="w-full">
                            <p className="text-lg md:text-xl font-bold">{item.title}</p>
                            <p className="text-neutral-400 text-sm md:text-base">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
