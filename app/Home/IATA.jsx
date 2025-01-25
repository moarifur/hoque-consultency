/*------------------ IATA Data -----------------------*/
import Link from "next/link";
import React from "react";

const info = {
    title: 'IATA License Assistance',
    subtitle: 'Our IATA Assistance Includes:',
    imgURL: '/iata.jpg',
}
const data = [
    {
        title: 'Detailed guidance on IATA licensing requirements.',
    },
    {
        title: 'Step-by-step application support.',
    },
    {
        title: 'Proven strategies to secure approval.',
    },
]
/*----------------------------------------------------*/
const Iata = () => {
    return (
        <div
            className={`m-16 flex items-center justify-center gap-x-20`}>
            <img src={info.imgURL} alt="wh us" className='max-w-[600px] border-8'/>
            <div className="max-w-96">
                <p className='text-slate-500 font-bold text-lg tracking-wide mb-10'>{info.title}</p>
                <p className='text-4xl font-bold mb-10 text-slate-800'>{info.subtitle}</p>
                <ul className='text-neutral-700'>
                    {data.map((item, index) => (
                        <li key={index} className='list-circle'>
                            <span className='text-slate-700'>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <Link href='/iata'>
                    <button
                        className="cta-button px-24 py-4 bg-[#f67c93] rounded-lg font-semibold text-lg transform hover:scale-105 transition-transform duration-300 text-white mt-10">
                        Learn more...
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Iata;