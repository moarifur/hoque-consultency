import { GiCommercialAirplane } from "react-icons/gi";
import { TbLicense } from "react-icons/tb";
import { RiVisaLine } from "react-icons/ri";
import {IoIosGlobe} from "react-icons/io";
import ImageSlider from "@/app/Home/ImageSlider";

const category = 'Our Services'
const title = 'Expert Visa Assistance and Guidance'
const subtitle = 'Trust Hoque Consultancy for hassle-free Visa processing. Let our experts handle every detail, ensuring a smooth and stress-free experience for global travelers.'

const items = [
    {
        logo: <GiCommercialAirplane />,
        title: 'Civil Aviation Consultancy Services',
        subtitle: 'Streamlining Your Aviation Needs with Expertise'
    },
    {
        logo: <TbLicense />,
        title: 'IATA License Assistance for Travel Agency',
        subtitle: 'Empowering Travel Agencies with Professional Accreditation'
    },
    {
        logo: <RiVisaLine />,
        title: 'Trusted Customized Visa Solutions',
        subtitle: 'Tailored Visa Support Built on Trust and Excellence'
    },
    {
        logo: <IoIosGlobe />,
        title: 'Exclusive Visa Guidance for Global Travelling',
        subtitle: 'Your Reliable Partner for Effortless Worldwide Journeys'
    },

]
const Page = () => {
    return (
        <div className='bg-gray-100'>
            <div
                className="text-white flex flex-col items-center justify-center h-[20vh] md:h-[50vh] bg-cover bg-[url('/services_cover.jpg')]">
                <h2 className="text-4xl font-bold mb-5 glowing-title">Expert Guidance and Seamless Solutions</h2>
            </div>
            <div
                className="flex items-center justify-center gap-x-8 h-[50vh] md:h-[100vh] bg-cover bg-[url('/tra-map.png')]">
                <div className="flex flex-col items-start justify-center max-w-96">
                    <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{category}</p>
                    <p className='text-4xl font-bold mb-10'>{title}</p>
                    <p className='text-neutral-700'>{subtitle}</p>
                </div>
                <div className="grid grid-cols-2 gap-5 items-center justify-center">
                    {
                        items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-grow gap-3 p-7 border-2 rounded-md bg-white w-full hover:border-purple-200"
                            >
                                <div className="text-red-700 text-5xl">{item.logo}</div>
                                <div className="w-64">
                                    <p className='text-xl font-bold'>{item.title}</p>
                                    <p className='text-neutral-400'>{item.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*<ImageSlider />*/}
        </div>
    );
};

export default Page;