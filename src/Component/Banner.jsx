// App.js
import React, { useState, useEffect } from 'react';
// Assume you have an images.js file exporting an array of image objects

const CustomCarousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            setTimeID(
                setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 5000)
            );
        }
        return () => clearTimeout(timeID); // Clean up the timeout on component unmount
    }, [slideDone]);

    const slideNext = () => {
        setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
    };

    const slidePrev = () => {
        setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div
            className="relative w-full overflow-hidden max-h-[70vh] bg-black"
            onMouseEnter={AutoPlayStop}
            onMouseLeave={AutoPlayStart}
        >
            <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {children.map((item, index) => (
                    <div key={index} className="min-w-full h-auto">
                        {item}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {children.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-500 ${activeIndex === index ? 'bg-black' : 'bg-white'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveIndex(index);
                        }}
                    />
                ))}
            </div>

            <button
                className="absolute left-0 text-white text-2xl p-2 bg-transparent"
                onClick={(e) => {
                    e.preventDefault();
                    slidePrev();
                }}
            >
                {'<'}
            </button>
            <button
                className="absolute right-0 text-white text-2xl p-2 bg-transparent"
                onClick={(e) => {
                    e.preventDefault();
                    slideNext();
                }}
            >
                {'>'}
            </button>
        </div>
    );
};

const Banner = () => {
    const images = [
        { imgURL: '../../banner/slide1.jpg', imgAlt: 'Image 2', text:'Fresh Ingredients',subtext:' Fast Deleviry' },
        { imgURL: '../../banner/slide2.jpg', imgAlt: 'Image 3' ,text:'Delecious ', subtext:'Golden Yolks Eggs'},
        { imgURL: '../../banner/slide3.jpg', imgAlt: 'Image 3' ,text:'Organic',subtext:'Superfood'},
    ];
    return (
        <div className="App max-h-[70vh]">
            <CustomCarousel>
                {images.map((image, index) => (
                    <div className='relative'>
                        <div className='absolute z-30 w-full h-full'>
                            <img key={index} src={image.imgURL} alt={image.imgAlt} className="w-full h-full object-cover" />
                        </div>
                        <div className='relative z-50 py-44 flex flex-col justify-center items-center font-Opens text-white font-bold text-4xl'>
                            <h1 className='text-6xl   font-monsterrat'>{image.text}</h1>
                            <h6 className='text-7xl font-light font-Opens'>{image.subtext}</h6>
                        </div>
                    </div>
                ))}
            </CustomCarousel>

        </div>
    );
};

export default Banner;
