import React from 'react'
import University from './University'
import ChooseYour from '../../../Components/common/InquiryBtn/ChooseYour'
import { univguide } from '../../../constants'

export default function Edu() {
  return (
    <div>
    <div className="min-h-screen bg-fixed bg-cover "
    style={{ backgroundImage: `url(${"https://res.cloudinary.com/deaafsb0j/image/upload/v1732031774/2148756568_sksdgl.jpg"})` }} >
              <div className="absolute inset-0 h-[106vh] lg:h-[106vh] bg-black opacity-50"></div>

      <div   className="relative z-10 flex flex-col items-center justify-center mt-10 mx-auto w-[90%] min-h-screen sm:p-5 my-auto lg:w-[80%]"
      >
      <span data-aos="fade-up" className='text-[25px] lg:text-[35px] font-extrabold mt-[5%] my-5 text-white font-poppins'>Why Zeko?</span>
      <h2 data-aos="fade-up" className='text-[20px] font-extrabold text-center text-gray-300 font-poppins'>We guide you through the university application process, helping you choose institutions that match your goals, interests, and budget. Simplify your journey with us!</h2>
      <ChooseYour hero={true}/>
      </div>
      <div>
      

      </div>
      
    </div>
    <div className="my-5 space-y-8 w-[80%] mx-auto">
      <h2 data-aos="fade-up" className='mx-auto my-8 text-xl font-bold text-center text-black lg:text-3xl font-poppins dark:text-white'>Comprehensive University Guidance Services</h2>
  {univguide.map((item, index) => (
    <div
      key={item.id}
      className={`flex flex-col md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-center`}
    >
      {/* Image */}
      <div data-aos={index %2 === 1 ?"fade-left":"fade-right"} className="w-full md:w-1/2">
      <figure>
        <img
        loading='lazy'
          src={item.image}
          alt={item.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        </figure>
      </div>
      {/* Text */}
      <div className="w-full mt-4 md:w-1/2 md:mt-0 md:px-8">
        <h3 data-aos={index %2 === 1 ?"fade-left":"fade-right"} className="mb-4 text-2xl font-bold text-gray-800 font-poppins dark:text-white">{item.title}</h3>
        <p data-aos={index %2 === 1 ?"fade-left":"fade-right"} className="text-gray-600 font-poppins dark:text-white">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
    <University/>

    </div>
  )
}
