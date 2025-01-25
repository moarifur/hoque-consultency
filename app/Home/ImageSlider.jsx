'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {countries} from "@/lib/data";

const ImageSlider = (props) => {
    return (
        <div
            style={{
                position: `${props.position}`,
                top: `${props.top}`,
            }}
            className="w-full z-10 p-10 mb-16">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {countries.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative w-full h-96 bg-[center_top] border-4 border-purple-200  hover:border-amber-200">
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
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;



