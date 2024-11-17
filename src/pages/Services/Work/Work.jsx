import React from 'react'
import AutoSlider from '../../../Components/common/AutoSlider/AutoSlider'
import GetinTouch from '../../GetinTouch/GetinTouch'
import JobCard from './JobCard'

export default function Work() {
  return (
    <div className='mt-[20%] lg:mt-[8%]' >
      <div className='h-auto '>
        <h2 className='text-center my-5 text-black dark:text-white font-poppins font-bold text-[30px] lg:text-[40px]'>Expert Manpower Solutions</h2>
        <p className='text-center text-black w-[90%] lg:w-[50%] mx-auto dark:text-white font-poppins text-[18px] lg:text-[20px]' >Tailored staffing services for hospitality, retail, and corporate sectors to meet your needs.</p>
      </div>
      <div>
        <h2 className='text-center my-4 text-black dark:text-white font-poppins font-bold text-[20px] lg:text-[30px]'>Now Looking For</h2>
      </div>
      <div className='items-center justify-center mx-10'>
        <JobCard/>
      </div>
    <div className='flex items-center justify-center my-[4%]  bg-black'>
      <AutoSlider/>
    </div>
    
    </div>
  )
}

