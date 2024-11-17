import React from 'react';
import InquiryBtn from '../../Components/common/InquiryBtn/InquiryBtn';
import { Services } from '../../constants';

export default function Hero() {
  return (
    <div>
      
        {/* Black overlay with 50% opacity */}
        <div className="absolute inset-0 mt-[10%] lg:mt-[2.5%] h-screen bg-black opacity-50"></div>

        {/* Content container */}
        <div
  className="relative z-10 flex flex-col items-center justify-center mt-10 mx-auto w-[90%] min-h-screen sm:p-5 my-auto lg:w-[80%]"
>
  {/* Heading */}
  <h1 data-aos="fade-up"  className="my-2 font-extrabold text-white font-poppins text-[30px] lg:text-[50px]">
    Zeko Consultancy
  </h1>

  {/* Subheading */}
  <p data-aos="fade-up"  className="my-4 text-sm text-center text-white sm:text-base md:text-lg font-poppins">
  Discover prime spaces, expert manpower solutions, and top-tier education consultancy services today.
  </p>

  {/* Inquiry Button */}
  <InquiryBtn hero={true}/>

  {/* Services Grid */}
  <div className="grid w-full gap-4 md:mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {Services.map((item) => (
      <div
      data-aos="fade-up" 
        key={item.id}
        className="flex flex-col items-center gap-2 p-4 bg-white rounded-md bg-opacity-10 backdrop-blur-sm"
      >
        <h2 className="text-lg font-bold text-white font-poppins">
          {item.title}
        </h2>
        <p className="text-sm text-center text-white sm:text-base font-poppins">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
