import React from 'react';
import Link from "next/link";

const GetStarted = () => {
    return (
        <div className="text-white flex flex-col items-center justify-center h-[50vh] md:h-[80vh] bg-cover bg-[center_top] bg-[url('/bg-16.jpg')]">
            <h2 className="text-6xl font-bold mb-5">Need a Consultation?</h2>
            <p className='max-w-[40%] text-center'>
                If you would like to process your visa application,
                the best way to start is to have a consultation with
                one of our experienced registered migration agents.
            </p>
            <br/>
            <Link href='/booking'>
                <button
                    className="cta-button px-8 py-4 bg-[#f67c93] rounded-lg font-semibold text-lg transform hover:scale-105 transition-transform duration-300">
                    make an appointment
                </button>
            </Link>
        </div>
    );
};

export default GetStarted;