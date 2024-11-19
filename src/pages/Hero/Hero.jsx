import React from 'react';
import InquiryBtn from '../../Components/common/InquiryBtn/InquiryBtn';
import { Services } from '../../constants';

export default function Hero() {
  return (
    <div>
      
        {/* Black overlay with 50% opacity */}
        <div className="absolute inset-0 h-[110vh] lg:h-[115vh] bg-black opacity-50"></div>

        {/* Content container */}
        <div
  className="relative z-10 flex flex-col items-center justify-center mt-10 mx-auto w-[90%] min-h-screen sm:p-5 my-auto lg:w-[80%]"
>
  {/* Heading */}
  <span data-aos="fade-up" className='text-2xl font-extrabold text-white font-poppins'>Welcome To</span>
  <h1
  data-aos="fade-up"
  className="my-2 font-extrabold text-transparent font-poppins text-[30px] lg:text-[80px] bg-gradient-to-r from-primary to-[#d5ce82] bg-clip-text"
>
  Zeko Consultancy
</h1>


  {/* Subheading */}
  <p data-aos="fade-up"  className="my-4 text-sm text-center text-gray-300 sm:text-base md:text-lg font-poppins">
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
        <p className="text-sm text-center text-gray-300 sm:text-base font-poppins">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
