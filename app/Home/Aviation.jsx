import Link from "next/link";

/*------------------------ Aviation Data ---------------------------*/
const info = {
    title: 'Civil Aviation Consultancy Services',
    subtitle: 'Enhancing aviation operations with expert services!',
    description: 'At Hoque Consultancy, we ensure smooth operations, safety, and efficiency in the aviation sector. Our services cater to airlines, airports, and passengers, covering:',
    backImgURL: '/airport.jpg',
}
const data = [
    {
        title: 'Ground Handling',
        subtitle: 'Swift Ground Solutions',
        description: 'Precision-crafted ground handling for seamless aviation operations.',
        imgURL: '/light_signals.jpg'
    },
    {
        title: 'Support',
        subtitle: 'Comprehensive Passenger Support',
        description: 'Exceptional passenger support for stress-free travel experiences.',
        imgURL: '/support.jpg'
    },
    {
        title: 'Assistance',
        subtitle: 'Effortless Application Support',
        description: 'Gentle guidance ensures smooth regulatory adherence for aviation.',
        imgURL: '/assistance.jpg'
    },
]
/*-----------------------------------------------------------------*/
const Aviation = () => {
    return (
        <div
            className='flex items-center justify-center gap-20 bg-center text-white'
            style={{
                backgroundImage: `url(${info.backImgURL})`,
            }}
        >
            <div className="m-20 flex flex-col items-center justify-center">
                <p className='md:text-7xl font-bold tracking-wide mb-10 glowing-title max-w-[70%] text-center'>{info.title}</p>
                <p className='md:text-4xl font-bold glowing-subtitle'>{info.subtitle}</p>
                <div className='mt-32 mb-16 flex items-center justify-center gap-10'>
                    {data.map((item, index) => (
                        <div key={index} className="bg-neutral-300 rounded-xl">
                            <div className="flex ">
                                <img src={item.imgURL} className='md:w-1/2 o rounded-l-xl object-center' alt=""/>
                                <div className='p-3'>
                                    <h1 className='mt-3 font-bold text-center md:text-start text-sm'>{item.title}</h1>
                                    <h1 className='mt-3 font-bold text-center md:text-start text-gray-700 text-xl'>{item.subtitle}</h1>
                                    <p className='mt-3 text-sm text-center md:text-start text-neutral-600 font-serif'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    href='/docs/aviation.pdf'
                    className="cta-button px-32 py-4 bg-[#f67c93] rounded-lg font-semibold text-lg transform hover:scale-105 transition-transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                > Civil Aviation Application Process</a>

            </div>
        </div>
);
};

export default Aviation;

// bg-[url('/iata_back.png')]