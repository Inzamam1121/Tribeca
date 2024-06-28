import React from 'react';
// import './App.css';

const About = () => {
    const data = [
        {
            url: '../../about/labour.png',
            item: 'About Us',
            para: 'Tribeca Wholesale is an expert fresh produce and food supplier across the EU. Our produce is always of excellent quality and with quick turnaround and excellent customer service.'
        },
        {
            url: '../../about/computer.png',
            item: 'Network Coverage: ',
            para: 'Tribeca Wholesale offers fresh produce and food supplier across the EU and beyond. Our vast network and supply chain means we have clients in major economies such as Germany, Poland, France, Ireland and growing by the week.'
        },
        {
            url: '../../about/fruit.png',
            item: 'Our Produce',
            para: 'Established in 2012, Tribeca Wholesale are established importers and distributors of chilled fresh produce in the EU. Our passion for providing the very best produce remains as strong as ever.'
        },
        {
            url: '../../about/supply.png',
            item: 'Our Suppliers',
            para: 'We work very closely with our suppliers across South America, Africa and the EU. These carefully selected businesses grow responsibly and supply reliably. They understand the nature of the shared promise we all make to our customers about the quality of the produce we supply.'
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
