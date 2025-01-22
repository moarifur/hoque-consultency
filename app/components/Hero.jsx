'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// data source
const items = [
    {
        title: 'আপনার আস্থার সঙ্গী, সারা বিশ্বে',
        subtitle: 'ভিসা সহায়তা, বেসামরিক বিমান চলাচল এবং IATA সনদ পেতে আমাদের সেবা নিন',
        imgURL: 'img01.jpg'
    },
    {
        title: 'বিশ্বব্যাপী সম্ভাবনার সেতুবন্ধন',
        subtitle: 'হক কনসালটেন্সি – ভিসা এবং এভিয়েশন সেবায় শ্রেষ্ঠত্ব',
        imgURL: 'img02.jpg'
    },
    {
        title: 'পরিকল্পনা থেকে গন্তব্য পর্যন্ত',
        subtitle: 'বিশ্বস্ত ভিসা সমাধান এবং পরামর্শ সেবার জন্য ভরসা করুন',
        imgURL: 'img03.jpg'
    },
    {
        title: 'ভ্রমণ ও এভিয়েশন সেবায় নতুন মাত্রা',
        subtitle: 'বিশ্বমানের ভিসা এবং এভিয়েশন সলিউশন আপনার জন্য',
        imgURL: 'img04.jpg'
    },
];

const Hero = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-screen">
                        <img
                            src={item.imgURL}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white p-4">
                            <h2 className="text-6xl font-bold mb-2 glowing-title">{item.title}</h2>
                            <p className="text-2xl glowing-subtitle">{item.subtitle}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;
