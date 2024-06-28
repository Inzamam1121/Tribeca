import React from 'react';
import Marquee from 'react-fast-marquee';

const BrandData = [
    {
        Image: '../../slider/image1.png',
    },
    {
        Image: '../../slider/image2.png',
    },
    {
        Image: '../../slider/image3.png',
    },
    {
        Image: '../../slider/image4.png',
    },
    {
        Image: '../../slider/image5.png',
    },
    {
        Image: '../../slider/image6.png',
    },
    {
        Image: '../../slider/image7.png',
    },
];

const Slider = () => {
  return (
    <div>
      <Marquee direction="right" speed={50} gradientWidth={500}>
        {BrandData.map((item, index) => (
          <div className='w-[250px] rounded-lg md:w-[350px] mx-1' key={index}>
            <img src={item.Image} alt={`Brand ${index + 1}`} className='rounded-lg object-cover' />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Slider;
