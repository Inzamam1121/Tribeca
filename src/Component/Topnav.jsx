import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { TiSocialTwitter } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";





const Topnav = () => {
  return (
    <div className='border-b-2'>
        <div className='flex gap-3 w-[70%] m-auto text-[#969696] items-center py-1 text-lg'>
        <TiSocialFacebook/>
        <CiInstagram/>
        <TiSocialTwitter/>
        <GrLinkedinOption/>

    </div>
    </div>
  )
}

export default Topnav