'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from "next/link";

/*-------------------------------- Hero data --------------------------------------*/
const items = [
    {
        title: 'UK',
        imgURL: 'uk.jpg',
        flag: 'uk_flag.jpg',
        link: '/uk'
    },
    {
        title: 'Schengen',
        imgURL: 'schengen.jpg',
        flag: 'schengen_flag.jpg',
        link: '/schengen'
    },
    {
        title: 'China',
        imgURL: 'china.jpg',
        flag: 'china_flag.jpg',
        link: '/china'
    },
    {
        title: 'Indonesia',
        imgURL: 'indonesia.jpg',
        flag: 'indonesia_flag.jpg',
        link: '/indonesia'
    },
    {
        title: 'Philippine',
        imgURL: 'philippine.jpg',
        flag: 'philippine_flag.png',
        link: '/philippine'
    },
    {
        title: 'Malaysia',
        imgURL: 'malaysia.jpg',
        flag: 'malaysia_flag.jpg',
        link: '/malaysia'
    },
    {
        title: 'Myanmar',
        imgURL: 'myanmar.jpg',
        flag: 'myanmar_flag.png',
        link: '/myanmar'
    },
    {
        title: 'Nepal',
        imgURL: 'nepal.jpg',
        flag: 'nepal_flag.png',
        link: '/nepal'
    },
    {
        title: 'Australia',
        imgURL: 'australia.jpg',
        flag: 'australia_flag.png',
        link: '/australia'
    },
    {
        title: 'Singapore',
        imgURL: 'singapore.jpg',
        flag: 'singapore_flag.jpg',
        link: '/singapore'
    },
    {
        title: 'Vietnam',
        imgURL: 'vietnam.jpg',
        flag: 'vietnam_flag.png',
        link: '/vietnam'
    },
    {
        title: 'Thailand',
        imgURL: 'thailand.jpg',
        flag: 'thailand_flag.jpg',
        link: '/thailand'
    },
];


const ImageSlider = () => {
    return (
        <div className="absolute w-full top-[60%] md:top-[70%] z-10 p-10 mb-16">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={item.link}>
                            <div className="relative w-full h-96 bg-[center_top] border-8 border-amber-200 hover:border-purple-200">
                                <img
                                    src={item.imgURL}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white p-4">
                                    <div className="absolute">
                                        <h2 className="text-6xl font-bold mb-2 glowing-title">{item.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;



