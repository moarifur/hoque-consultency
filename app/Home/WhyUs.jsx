
const title = 'Why Us'
const subtitle = 'Trusted Expertise, Tailored Solutions'
const items = [
    {
        title: 'Personalized Support:',
        subtitle: 'Tailored services to meet your unique needs.'
    },
    {
        title: 'Global Expertise:',
        subtitle: 'TDecades of experience in Visa and aviation solutions.'
    },
    {
        title: 'Reliable Network:',
        subtitle: 'Partnerships with trusted organizations worldwide.'
    },
    {
        title: 'Hassle-Free Experience:',
        subtitle: 'Enjoy seamless appointments and services.'
    },

]

const WhyUs = () => {
    return (
        <div
            className="-mt-52 flex items-center justify-center gap-20 h-[30vh] md:h-[60vh] bg-cover bg-slate-50">
            <div className="flex flex-col items-start justify-center max-w-96">
                <img src="/why_us.png" alt="wh us"/>
            </div>
            <div className="grid grid-cols-1 items-center justify-center max-w-96">
                <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{title}</p>
                <p className='text-4xl font-bold mb-10'>{subtitle}</p>
                <ul className='text-neutral-700'>
                    {items.map((item, index) => (
                        <li key={index} className='list-circle'>
                            <span className='font-bold'>{item.title}</span>
                            {item.subtitle}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default WhyUs;