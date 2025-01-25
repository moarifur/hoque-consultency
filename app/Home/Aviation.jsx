
/*------------------------ Aviation Data ---------------------------*/
const info = {
    title: 'Civil Aviation Consultancy Services',
    subtitle: 'Enhancing aviation operations with expert services!',
    description: 'At Hoque Consultancy, we ensure smooth operations, safety, and efficiency in the aviation sector. Our services cater to airlines, airports, and passengers, covering:',
    backImgURL: '/airport.jpg',
}
const data = [
    {
        title: 'Efficient Ground Handling Services',
        description: 'Streamline your aviation operations with our reliable ground handling solutions. From baggage management to aircraft servicing, we ensure every process on the ground is handled with precision and efficiency.',
        imgURL: '/light_signals.jpg'
    },
    {
        title: 'Comprehensive Passenger Support',
        description: 'Enhancing passenger experiences with exceptional support services. Whether it’s check-in assistance, boarding guidance, or customer service, our team is dedicated to seamless travel journeys.',
        imgURL: ''
    },
    {
        title: 'Hassle-Free Application Assistance',
        description: 'Navigating aviation regulations made easy! From gathering necessary documents to ensuring compliance with aviation authority requirements, our experts simplify your application process.',
        imgURL: ''
    },
]
/*-----------------------------------------------------------------*/
const Aviation = () => {
    return (
        <div
            className='-mt-32 flex items-center justify-center gap-20 h-[30vh] md:h-[80vh] bg-cover text-white'
            style={{
                backgroundImage: `url(${info.backImgURL})`,
            }}
        >
            <div className="flex flex-col items-center justify-center">
                <p className='text-7xl font-bold tracking-wide mb-10 glowing-title'>{info.title}</p>
                <p className='text-amber-50 text-3xl font-bold mb-10'>{info.subtitle}</p>
                <div className='text-lg mt-8 flex items-center justify-center gap-5'>
                    {data.map((item, index) => (
                        <div key={index} className="bg-neutral-300 rounded-xl">
                            <div className="md:flex md:h-1/2 md:w-[600px]">
                                <img src={item.imgURL} className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                                     alt=""/>
                                <div className='md:pl-10 md:pr-10 mt-3 md:mt-10'>
                                    <h1 className='font-bold text-center md:text-start text-2xl mb-3 md:mb-1'></h1>
                                    <h1 className='font-bold text-center md:text-start text-gray-700'>{item.title}</h1>
                                    <p className='text-sm text-center md:text-start text-neutral-600 font-serif p-5 md:p-0 md:mt-3'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Aviation;

// bg-[url('/iata_back.png')]