import React from 'react';
// import './App.css';

const About = () => {
    const data = [
        {
            url: '../../about/labour.png',
            item: 'About Us',
            para: 'JR Holland is one of the top fresh produce and food supplier companies in the North East of England. Our produce is always of excellent quality and with our quick turnaround and excellent customer service'
        },
        {
            url: '../../about/computer.png',
            item: 'Online Ordering',
            para: 'Discover the convenience of ordering online with our bespoke ordering system.  Online ordering offers unparalleled convenience for our customers. You can browse our full selection of products, or place an order at any time and from anywhere.'
        },
        {
            url: '../../about/fruit.png',
            item: 'Our Produce',
            para: 'Established in 1983, J.R. Holland are the oldest established importers and  distributors of chilled fresh produce in the North East of England.Our passion for providing the very best produce remains as strong as ever.'
        },
        {
            url: '../../about/supply.png',
            item: 'Our Suppliers',
            para: 'We work very closely with our suppliers across the North of England. Businesses that grow responsibly and supply reliably. They understand the nature of the shared promise we all make to our customers about the quality of the produce we supply'
        },
    ];

    return (
        <div className='w-[80%] m-auto mb-10 px-4 py-8 flex justify-center items-center'>
            <div className='grid gap-8 grid-cols-1  lg:grid-cols-2 xl:grid-cols-2'>
                {data.map((item, index) => (
                    <div key={index} className='border p-4 rounded-lg  overflow-hidden'>
                        <div className='image-container'>
                            <img src={item.url} alt={item.item} className='image' />
                        </div>
                        <h1 className='font-bold mt-4 mb-2 text-lg text-center text-[#a87b3f] font-Opens'>{item.item}</h1>
                        <p className='text-[#545454] text-center font-encode'>{item.para}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
