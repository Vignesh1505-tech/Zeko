import React from 'react';

export default function ChooseYour({ hero }) {
  const scrollToContact = () => {
    document.getElementById('univ').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      data-aos="fade-up"
      className={`${hero ? 'lg:w-[16%]' : 'lg:w-[100%]'} w-[100%] p-2 cursor-pointer border-2 my-6 rounded-xl relative overflow-hidden group`}
      onClick={scrollToContact}
    >
      {/* Background Transition Layer */}
      <span
        className={`absolute inset-0 transition-all duration-500 ease-out origin-left transform scale-x-0 bg-gradient-to-r from-primary ${hero?'opacity-40':'opacity-90'} to-primary group-hover:scale-x-100`}></span>

      {/* Button Text */}
      <p className={`text-lg font-medium text-center relative z-10 ${hero ? 'text-white' : 'text-black'} dark:text-white`}>
      Pick Your Path
      </p>
    </div>
  );
}
