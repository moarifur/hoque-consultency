/*------------------ IATA Data -----------------------*/
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
            className={`flex items-center justify-center gap-20 h-[30vh] md:h-[60vh]`}>
            <div className="flex flex-col items-start justify-center">
                <img src={info.imgURL} alt="wh us" className='max-w-[500px] border-8'/>
            </div>
            <div className="grid grid-cols-1 items-center justify-center max-w-96">
                <p className='text-slate-500 font-bold text-lg tracking-wide mb-10'>{info.title}</p>
                <p className='text-4xl font-bold mb-10 text-slate-800'>{info.subtitle}</p>
                <ul className='text-neutral-700'>
                    {data.map((item, index) => (
                        <li key={index} className='list-circle'>
                            <span className='font-bold text-slate-700'>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Iata;