import Link from "next/link";

const AboutPage = () => {
    return (
        <div className='bg-gray-100'>
            <div
                className="text-white flex flex-col items-center justify-center h-[20vh] md:h-[50vh] bg-cover bg-[center_top] bg-[url('/about.jpg')]">
                <h2 className="text-4xl font-bold mb-5">Explore Seamless Visa Solutions with Hoque Consultancy</h2>
            </div>
            <div className="mt-20 flex items-center justify-between">
                <div className="p-8">
                    <img src="/statistic.jpg" alt="" className=' rounded-lg'/>
                </div>
                <div className="max-w-[80%]">
                    <h1 className='max-w-[70%] text-4xl font-bold mb-8 font-sans'>Explore Seamless Visa Solutions with
                        Hoque Consultancy: Your Trusted Visa Experts</h1>
                    <p className='max-w-[70%] text-lg font-serif'>Discover personalized Visa assistance with Hoque
                        Consultancy. Based in the USA, we provide expert
                        guidance tailored to your needs.</p>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-between">
                <div className="p-8">
                    <img src="/chief.jpg" alt="" className='border-8 border-amber-200 rounded-lg'/>
                </div>
                <div className="max-w-[50%]">
                    <h1 className='max-w-[70%] text-4xl font-bold mb-8 font-sans'>Meet Our Advisors</h1>
                    <p className='max-w-[70%] text-lg font-serif'>Our team, with a wide range of expertise and backgrounds, ensures seamless Visa experiences for every client.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;