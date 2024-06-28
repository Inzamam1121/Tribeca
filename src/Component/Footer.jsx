import React, { useContext, useState } from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { TiSocialTwitter } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";
import AlertContext from '../Alert/AlertContext';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const alertcontext = useContext(AlertContext);
    const {showAlert} =  alertcontext

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, subject, message }),
        });

        const result = await response.json();
        if (result.success) {
            showAlert('Email sent successfully','success');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            showAlert('Failed to send email','danger');
        }
    };

    const companyInfo = [
        {
            name: 'Tribeca Wholesale Limited',
            address: 'Brno',
            city: 'Czech Republic',
            county: 'Tyne & Wear',
            postcode: 'NE11 0PZ',
            country: 'United Kingdom',
            phone: '+4 07654321',
            mail: 'contact@tribecaws.com'
        },
    ];

    const quickLinks = ['Produce', 'Delivery', 'About us', 'Gallery'];

    return (
        <div className="bg-gray-900 text-white pt-10">
            <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <img src="../../newlogo.png" alt="Logo" className="h-20 mb-4" />
                    {companyInfo.map((info, index) => (
                        <div key={index} className="mb-6 font-Opens">
                            <h3 className="font-Opens font-light text-[#818181]">{info.name}</h3>
                            <p className='text-[#818181]'>{info.address}</p>
                            <p className='text-[#818181]'>{info.city}</p>
                            <p className='text-[#818181]'>{info.country}</p>
                            <p className='text-[#818181]'>{info.postcode}</p>
                            <p className='text-[#818181]'>{info.phone}</p>
                            <p className='text-[#818181]'>{info.mail}</p>
                        </div>
                    ))}
                    <div className='flex gap-3 m-auto text-[#969696] items-center py-3 text-sm'>
                        <TiSocialFacebook />
                        <CiInstagram />
                        <TiSocialTwitter />
                        <GrLinkedinOption />
                    </div>
                </div>
                <div className='py-4'>
                    <h3 className="font-Opens font-light mb-4">Contact Us</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#818181] mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded bg-gray-900"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-[#818181] mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full p-2 border border-gray-300 rounded bg-gray-900"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-[#818181] mb-2">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-2 border border-gray-300 rounded bg-gray-900"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                            Send
                        </button>
                    </form>
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
                    <p className='text-[#545454]'>© copyright 2024 Tribeca Wholesale Limited</p>
                </div>
                <div>
                    <p className='text-[#3C3325]'>Website <span className='text-[#545454]'>WriggleMarketing</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
