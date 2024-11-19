import React from 'react'
import AutoSlider from '../../../Components/common/AutoSlider/AutoSlider'
import GetinTouch from '../../GetinTouch/GetinTouch'
import JobCard from './JobCard'
import { whychooseus } from '../../../constants'

export default function Work() {
  return (
    <div className='mt-[20%] lg:mt-[8%]' >
      <div className='h-auto '>
        <h2 className='text-center my-5 text-black dark:text-white font-poppins font-bold text-[30px] lg:text-[40px]'>Expert Manpower Solutions</h2>
        <p className='text-center text-black w-[90%] lg:w-[50%] mx-auto dark:text-white font-poppins text-[18px] lg:text-[20px]' >Tailored staffing services for hospitality, retail, and corporate sectors to meet your needs.</p>
      </div>
      <h2 className=' text-black font-bold text-center my-10 dark:text-white font-poppins text-[18px] lg:text-[25px]'>Why Choose Us?</h2>

      <div  className={`flex flex-col w-[80%] my-5 mx-auto md:flex-row items-center`}>

      <div data-aos="fade-right" className="w-full md:w-1/2">
        <figure>
          <img loading='lazy' src='https://res.cloudinary.com/deaafsb0j/image/upload/v1732039625/2148932318_ow30pj.jpg' className="w-full h-auto rounded-lg shadow-lg" />
        </figure>
      </div>
      <div data-aos="fade-left" className="w-full mt-4 md:w-1/2 md:mt-0 md:px-8">
            {
              whychooseus.map((item)=>(
                <div key={item.id} className='flex flex-col my-2'>
                  <span className=' text-black font-bold  dark:text-white font-poppins text-[17px] lg:text-[20px]'>{item.title} :</span>
                  <span className=' text-black font-normal  dark:text-white font-poppins text-[14px] lg:text-[16px]'>{item.text}</span>
                </div>
              ))
            }



      </div>
      </div>
      <div className='mt-20'>
        <h2 className='text-center my-4 text-black dark:text-white font-poppins font-bold text-[20px] lg:text-[30px]'>Jobs Available On</h2>
      </div>
      <div className='items-center justify-center mx-10'>
        <JobCard/>
      </div>
    <div className='flex items-center justify-center mx-10 my-[4%]  bg-transparent'>
      <AutoSlider/>
    </div>
    
    </div>
  )
}

