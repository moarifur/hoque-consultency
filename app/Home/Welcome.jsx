
const Welcome = () => {
    return (
        <div className="relative flex items-center justify-center h-[50vh] md:h-[85vh] bg-cover bg-[center_top] bg-[url('/hero-7.jpg')]">
            <div className="flex flex-col items-center justify-center text-white">
                <p className='text-3xl md:text-7xl font-extrabold text-slate-100'>Welcome to Hoque Consultancy</p>
                <p className='mt-3 text-xl md:text-4xl glowing-title'>Your Trusted Partner for Global Success</p>
                <p className='mt-5 p-5 text-wrap text-2xl max-w-[60%] glowing-subtitle'>
                    Explore Your Dream Destination Below
                    {/*At Hoque Consultancy, we offer you tailored,*/}
                    {/*seamless visa and civil aviation solutions with*/}
                    {/*a commitment to excellence. Our 20+ years of*/}
                    {/*experience provide you with a smooth journey*/}
                    {/*toward realizing your dreams.*/}
                </p>
            </div>
        </div>
    );
};

export default Welcome;

// <div className="aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] bg-cover bg-[center_top] bg-[url('/hero-7.jpg')]">