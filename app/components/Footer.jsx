import React from "react";
import { FaHome, FaFax, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline  } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import Link from "next/link";

/*--------------------------------------- Footer data -------------------------------------------*/
const title = 'Hoque Consultancy'
const logo = "/logo.png"
const immigration = {
    title: 'Immigration',
    info: [
        {
            title: 'Work Immigration',
            link:'/work-immigration'
        },
        {
            title: 'Study Immigration',
            link:'/study-immigration'
        },
        {
            title: 'Apply for an Immigration',
            link:'/apply-immigration'
        },
        {
            title: 'Request an Information',
            link:'/request-information'
        },
    ]
}
const customer_care = {
    title: 'Customer Care',
    info: [
        {
            title: 'Contact Us',
            link:'/contact-us'
        },
        {
            title: 'How it Works',
            link:'/how-it-works'
        },
        {
            title: 'Immigration Info',
            link:'/immigration-info'
        },
        {
            title: 'FAQs',
            link:'/faqs'
        },
    ]
}
const benefits = {
    title: 'Our Benefits',
    info: [
        {
            title: 'Submit Resume',
            link:'/submit-resume'
        },
        {
            title: 'Free Consultation',
            link:'/free-consultation'
        },
        {
            title: 'Personalized Service',
            link:'/personalized-service'
        },
        {
            title: 'Assessment of Qualifications',
            link:'/assessment-of-qualifications'
        },
    ]
}
const popular = {
    title: 'Popular Pages',
    info: [
        {
            title: 'Family Sponsorship',
            link:'/family-sponsorship'
        },
        {
            title: 'Immigration Consultant',
            link:'/immigration-consultant'
        },
        {
            title: 'Our Services',
            link:'/our-services'
        },
        {
            title: 'Apply For a Visa',
            link:'/apply-for-a-visa'
        },
    ]
}
/*-----------------------------------------------------------------------------------------------*/

const Footer = () => {
    return (
        <div id='contact'>
            <div className="bg-[#131f39] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-8 md:p-20">
                {/* Immigration */}
                <div className="p-5">
                    <ul>
                        <p className="text-white text-md font-bold pb-4">{immigration.title}</p>
                        {
                            immigration.info.map((item, index) => (
                                <li key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Customer Care */}
                <div className="p-5">
                    <ul>
                        <p className="text-white text-md font-bold pb-4">{customer_care.title}</p>
                        {
                            customer_care.info.map((item, index) => (
                                <li key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Our Benefits */}
                <div className="p-5">
                    <ul>
                        <p className="text-white text-md font-bold pb-4">{benefits.title}</p>
                        {
                            benefits.info.map((item, index) => (
                                <li key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Popular Pages */}
                <div className="p-5">
                    <ul>
                        <p className="text-white text-md font-bold pb-4">{popular.title}</p>
                        {
                            popular.info.map((item, index) => (
                                <li key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Stay Connected */}
                <div className="p-5">
                    <ul>
                        <li className="text-white text-md font-bold">
                            <span>Stay Connected</span>
                            <div className="flex gap-x-3">

                                <FaInstagram className="mt-3 text-lg cursor-pointer hover:text-pink-600"/>
                                <FaTwitter className="mt-3 text-lg cursor-pointer hover:text-blue-600"/>
                                <FaLinkedin className="mt-3 text-lg cursor-pointer hover:text-blue-600"/>
                                <FaYoutube className="mt-3 text-lg cursor-pointer hover:text-red-600"/>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="bg-[#0e1629] flex flex-col justify-center items-center text-center  p-5">
                <h1 className=" text-white font-semibold">
                    © 2025 All rights reserved | Developed by{" "}
                    <span className="hover:text-yellow-600 font-semibold cursor-pointer">
						NTP Solutions{" "}
					</span>
                </h1>
            </div>
        </div>
    );
}

export default Footer;

//{/* Contact Info */}
//                 <div className="p-3">
//                     <div className="flex items-center gap-x-1">
//                         <a href="/">
//                             <img src={logo} alt="" width={50} height={50}/>
//                         </a>
//                         <p className='ml-1 text-white text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</p>
//                     </div>
//                     <div className="flex flex-col">
//                         <div className="mt-7 text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
//                             <span className='flex gap-x-2'>
//                                 <FaHome className='text-white text-2xl'/>
//                                 N/A
//                             </span>
//                         </div>
//                         <div className="mt-2 text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
//                             <span className='flex gap-x-2'>
//                                 <GiRotaryPhone className='text-white text-xl'/>
//                                 (+88) 02 N/A
//                             </span>
//                         </div>
//                         <div className="mt-2 text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
//                             <span className='flex gap-x-2'>
//                                 <MdOutlinePhoneInTalk className='text-white text-xl'/>
//                                 {/*(+88) 017 1312 3832*/}
//                                 N/A
//                             </span>
//                         </div>
//                         <div className="mt-2 text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
//                             <span className='flex gap-x-2'>
//                                 <MdOutlineMailOutline className='text-white text-xl'/>
//                                 N/A
//                             </span>
//                         </div>
//                     </div>
//                 </div>