import React from 'react';

import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { TiSocialTwitter } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
    const companyInfo = [
        {
            name: 'J.R.Holland Food Services Ltd',
            address: '245 Dukesway',
            city: 'Gateshead',
            county: 'Tyne & Wear',
            postcode: 'NE11 0PZ',
            country: 'United Kingdom'
        },
        {
            name: 'J.R.Holland Produce LLP',
            address: '79-84 North East Fruit & Vegetable Market, Team Valley Trading Estate',
            city: 'Gateshead',
            county: 'Tyne & Wear',
            postcode: 'NE11 0QY',
            country: 'United Kingdom'
        }
    ];

    const blogPosts = [
        { title: 'June Crop Update', date: '19th June 2024' },
        { title: 'British Strawberry Season Is Upon Us', date: '24th May 2024' },
        { title: 'The Impact of Global Weather on our Fresh Produce', date: '22nd April 2024' },
    ];

    const quickLinks = ['Produce', 'Delivery', 'About us', 'Gallery'];

    return (
        <div className=" bg-gray-900 text-white pt-10 ">
            <div className="w-[90%] m-auto  grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className=''>
                    <img src="../../footerlogo.png" alt="Logo" className="h-10 mb-4" />
                    {companyInfo.map((info, index) => (
                        <div key={index} className="mb-6 font-Opens">
                            <h3 className="font-Opens font-light text-[#818181]">{info.name}</h3>
                            <p className='text-[#818181]'>{info.address}</p>
                            <p className='text-[#818181]'>{info.city}</p>
                            <p className='text-[#818181]'>{info.country}</p>
                            <p className='text-[#818181]'>{info.postcode}</p>

                        </div>

                    ))}
                    <div className='flex gap-3 m-auto text-[#969696] items-center py-3 text-sm'>
                        <TiSocialFacebook />
                        <CiInstagram />
                        <TiSocialTwitter />
                        <GrLinkedinOption />

                    </div>
                </div>
                <div>
                    <h3 className="font-Opens text-lg font-light mb-4 ">Latest from our Blog</h3>
                    {blogPosts.map((post, index) => (
                        <div key={index} className="mb-4">
                            <h4 className='text-[#818181]'>{post.title}</h4>
                            <p className='text-[#818181]'>{post.date}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-Opens font-light mb-4">Quick Links</h3>
                    <ul>
                        {quickLinks.map((link, index) => (
                            <li key={index} className="mb-2">
                                <a href="#" className="text-[#818181] hover:text-white">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-full flex lg:flex-row flex-col justify-between bg-[#000] bottom-0 px-4 py-3'>
                <div className='font-Opens text-xs'>
                    <p className='text-white'>Terms and Conditions | Privacy Policy | Sitemap</p>
                    <p className='text-[#545454]'>© Copyright JR Holland Ltd 2021</p>
                </div>
                <div>
                    <p className='text-[#3C3325]'>Website <span className='text-[#545454]'>WriggleMarketing</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
