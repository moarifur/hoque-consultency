import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className='bg-gray-100'>
            <div className="text-white flex flex-col items-center justify-center h-[20vh] md:h-[50vh] bg-cover bg-[center_top] bg-[url('/questions.jpg')]">
                <h2 className="text-4xl font-bold mb-5">Plan Your Ideal Journey</h2>
            </div>
            <div className="mt-20 flex items-center justify-between">
                <div className="p-8">
                    <img src="/booking.jpeg" alt="" className=' rounded-lg'/>
                </div>
                <div className="max-w-[80%]">
                    <h1 className='max-w-[70%] text-4xl font-bold mb-8 font-sans'>Discover with Hoque Consultancy: Schedule Now!</h1>
                    <p className='max-w-[70%] text-lg font-serif'>Plan your dream trip smoothly at Hoque Consultancy. Our easy-to-use booking system lets you set appointments, reserve services, and secure accommodations. Whether it’s a beach escape, city tour, or luxury cruise, we make travel planning effortless.</p>
                </div>
            </div>
            <div className="bg-[url('/booking2.jpeg')] bg-cover text-white h-[20vh] md:h-[80vh]">
                <div className="flex flex-col gap-5 items-center justify-between">
                    <h1 className='mt-32 text-7xl font-bold font-sans glowing-title'>Plan Your Perfect Trip Today</h1>
                    <p className='mt-5 text-2xl font-serif glowing-subtitle'>Your adventure awaits! Secure your visa and embark on unforgettable journeys.</p>
                    <div className="mt-16 flex items-center justify-between gap-5">
                        <a href='/about' className="cta-button px-8 py-4 bg-[#f67c93] rounded-lg font-semibold text-lg transform hover:scale-105 transition-transform duration-300">Discover More</a>
                        <a href='/contact' className="cta-button px-8 py-4 bg-[#f67c93] rounded-lg font-semibold text-lg transform hover:scale-105 transition-transform duration-300">Reserve Today</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;