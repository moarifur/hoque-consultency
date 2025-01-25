import { FaUniversity } from "react-icons/fa";
import {ImBriefcase, ImUsers} from "react-icons/im";
import {IoIosGlobe} from "react-icons/io";

/*----------------------- Service Data ------------------------*/
const category = 'Our Services'
const title = 'We provide top consulting services'
const subtitle = 'Trust Hoque Consultancy for hassle-free Visa processing. Let our experts handle every detail, ensuring a smooth and stress-free experience for global travelers.'
const items = [
    {
        logo: <FaUniversity />,
        title: 'Education Visa',
        subtitle: 'Turn Dreams of Studying Abroad into Reality'
    },
    {
        logo: <ImUsers />,
        title: 'Working Visa',
        subtitle: 'Work, Thrive, and Succeed Worldwide'
    },
    {
        logo: <ImBriefcase />,
        title: 'Business Visa',
        subtitle: 'Empowering Entrepreneurs to Conquer New Markets'
    },
    {
        logo: <IoIosGlobe />,
        title: 'Travel Visa',
        subtitle: 'Discover the Beauty of the World, Effortlessly'
    },

]

const Service = () => {
    return (
        <div className="flex items-center justify-center gap-x-8 h-[50vh] md:h-[100vh] bg-cover bg-[url('/tra-map.png')]">
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
    );
};

export default Service;