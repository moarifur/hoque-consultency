
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
            className="md:mt-80 flex items-center justify-center gap-20 bg-cover bg-slate-50">
            <div className="mt-5 mb-5 flex items-start justify-center gap-16">
                <div className="max-w-96">
                    <img src="/why_us.png" alt="wh us"/>
                </div>
                <div className="max-w-96">
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
        </div>
    )
};

export default WhyUs;