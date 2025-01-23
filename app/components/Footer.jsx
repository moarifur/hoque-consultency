import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

/*--------------------------------------- Footer data -------------------------------------------*/
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
            <div className="bg-[url('/blue-map.jpg')] bg-center">
                <div className="flex md:flex-row flex-col justify-around items-start p-8 md:p-20">
                    {/* Immigration */}
                    <div className="p-5 text-white">
                        <ul>
                            <p className="text-2xl font-bold pb-4">{immigration.title}</p>
                            {
                                immigration.info.map((item, index) => (
                                    <li key={index}
                                        className="text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Customer Care */}
                    <div className="p-5 text-white">
                        <ul>
                            <p className="text-2xl font-bold pb-4">{customer_care.title}</p>
                            {
                                customer_care.info.map((item, index) => (
                                    <li key={index}
                                        className="text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Our Benefits */}
                    <div className="p-5 text-white">
                        <ul>
                            <p className="text-2xl font-bold pb-4">{benefits.title}</p>
                            {
                                benefits.info.map((item, index) => (
                                    <li key={index}
                                        className="text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Popular Pages */}
                    <div className="p-5 text-white">
                        <ul>
                            <p className="text-2xl font-bold pb-4">{popular.title}</p>
                            {
                                popular.info.map((item, index) => (
                                    <li key={index}
                                        className="text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Stay Connected */}
                    <div className="p-5 text-2xl">
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
                {/* Rights Reserve */}
                <div className="flex items-center justify-center p-8">
                    <h1 className="text-white font-semibold glowing-title">
                        © 2025 All rights reserved | Developed by{" "}
                        <span className="hover:text-yellow-600 font-semibold cursor-pointer">
						NTP Solutions{" "}
					</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
