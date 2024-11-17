import React from 'react'
import Rent from "../../assets/services/Rent.jpg"
import Work from "../../assets/services/WorkConsultancy.jpg"
import { useNavigate } from 'react-router-dom'

export default function Services() {

  const navigation=useNavigate()

  const handleNav=()=>{
    navigation("/")
  }
  return (
    <div  className='relative h-auto mt-[180%] lg:mt-[10%] '>
        <h2 data-aos="fade-up"  className="text-center my-5 lg:my-10 text-black dark:text-white font-bold text-[30px] lg:text-[50px]">Our other Services</h2>
       <div data-aos="fade-up" className="flex flex-col justify-center gap-4 p-8 lg:flex-row">
       <div onClick={()=>navigation("/Rental")} className="relative lg:w-[80%] lg:h-[90%] w-full overflow-hidden rounded-lg group cursor-pointer">
  <img
    src={"https://res.cloudinary.com/deaafsb0j/image/upload/v1731859562/Rent_abewwo.jpg"}
    alt="Rental Space"
    class="object-cover w-full h-full"
  />

  <div class="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>

  <div class="absolute inset-0 bg-card-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

  <div class="absolute inset-0 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span class="text-white text-2xl font-bold">Rental Space</span>
    <p class="text-center w-[80%] text-white">
    Safe and comfortable accommodations designed specifically for girls, offering convenience and security at affordable rates.
    </p>
  </div>
</div>


  <div onClick={()=>navigation("/Work")} class="relative lg:w-[80%] lg:h-[80%] w-full overflow-hidden rounded-lg group cursor-pointer">
    <img
      src={"https://res.cloudinary.com/deaafsb0j/image/upload/v1731859555/WorkConsultancy_hzofvt.jpg"}
      alt="Work Consult"
      class="object-cover w-full h-full"
    />
     <div class="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>

<div class="absolute inset-0 bg-card-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

<div class="absolute inset-0 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span class="text-white text-2xl font-bold">Work Consult</span>
      <p class="text-center w-[80%] text-white">
      Tailored staffing services for hospitality, retail, and corporate sectors to meet your needs.    </p>
    </div>
  </div>
</div>
 
    </div>
  )
}
