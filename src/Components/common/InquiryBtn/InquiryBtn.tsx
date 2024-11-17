import React from 'react'
import { Link } from 'react-router-dom'

export default function InquiryBtn({hero}) {

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
<div data-aos="fade-up"  className={`${hero?'lg:w-[16%]':"lg:w-[100%]"} w-[100%] p-2 cursor-pointer  border-2 my-6 rounded-xl`} onClick={scrollToContact} >
<p className={`text-lg font-medium text-center ${hero?"text-white":"text-black"} dark:text-white`}>Inquiry</p>
</div>  )
}
