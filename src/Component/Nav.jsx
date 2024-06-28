import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const data = [
        {
            name: 'About',
            path: '#about'
        },
        {
            name: 'Our Produce',
            path: '#produce'
        },
        {
            name: 'Contact',
            path: '#contact'
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full bg-white shadow-md transition-all duration-300 ${isSticky ? 'sticky top-0 z-50' : ''}`}>
            <div className='mx-auto px-4 sm:px-10 lg:px-20 py-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        
                            <img src="./newlogo.png" alt="Logo" className='h-10 w-16' />
                        
                    </div>
                    <div className='hidden md:flex font-Opens items-center gap-6'>
                        {data.map((item, index) => (
                            <a key={index} href={item.path} className='text-gray-800 text-xl font-medium hover:text-gray-600'>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className='flex items-center md:hidden'>
                        <button onClick={toggleMenu} className='text-gray-800 focus:outline-none'>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {data.map((item, index) => (
                            <a key={index} href={item.path} className='block text-gray-800 hover:text-gray-600'>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
