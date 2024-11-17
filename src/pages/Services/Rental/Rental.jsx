import React from 'react'
import GetinTouch from '../../GetinTouch/GetinTouch'
import InquiryBtn from '../../../Components/common/InquiryBtn/InquiryBtn'

export default function Rental() {
  return (
    <div className='h-auto bg-white mt-[50%] lg:mt-[5%] dark:bg-black'>
    <div className='flex flex-col justify-center h-[100vh] '>
        <h2 data-aos="fade-up"  className=" text-[30px] lg:text-[40px]  font-extrabold text-center dark:text-white text-black">Rental Spaces for Girls</h2>
        <p data-aos="fade-up"  className=' text-[18px] lg:text-[20px] text-center my-5 dark:text-white text-black'>Safe and comfortable accommodations designed specifically for girls, offering convenience and security at affordable rates.</p>
        <div className='items-center flex-col lg:flex-row flex justify-center mx-auto w-[90%] lg:w-[60%] gap-5 my-5 '>
        <img data-aos="fade-up"  src='https://res.cloudinary.com/dlz61swsc/image/upload/v1731343474/2149047426_kqgalr.jpg' className=' w-full lg:w-[60%] h-auto rounded-md'/>
        <img data-aos="fade-up"  src="https://res.cloudinary.com/dlz61swsc/image/upload/v1731343302/6087_hh8ec1.jpg" className='w-full lg:w-[60%] h-auto rounded-md'/>
        </div>
        <div className='flex flex-col lg:flex-row w-[90%] lg:w-[70%] mx-auto items-center justify-between'>
          <div>
          <h2 data-aos="fade-up"  className=" text-[25px] lg:text-[30px] font-extrabold text-center lg:text-left dark:text-white text-black">Accommodations in Prime Locations</h2>
          <p data-aos="fade-up"  className='text-[18px] lg:text-[20px] text-center lg:text-left dark:text-white my-4 text-black'> Discover comfortable and conveniently located hostels tailored to your needs.</p>
          </div>
          <div >
           <InquiryBtn hero={false}/>
          </div>
        </div>
    </div>
    <div className='flex flex-col justify-center mx-auto items-center lg:w-full w-[90%] mt-[40%] lg:mt-10 '>
        <h2 data-aos="fade-up"  className=" text-[30px] lg:text-[40px] font-extrabold text-center dark:text-white text-black">Labour Hostels</h2>
        <p data-aos="fade-up"  className=' text-[18px] lg:text-[20px] my-5 text-center dark:text-white text-black'>EStay in our labour hostels at just 30 GEL per day, providing affordable and practical accommodations.</p>
        <div data-aos="fade-up"  className='items-center flex-row flex justify-center px-5  mx-auto w-[60%] gap-3 lg:gap-5 my-5 '>
        <img src='https://res.cloudinary.com/dlz61swsc/image/upload/v1731343303/97516_ca5zpa.jpg' className='lg:w-[720px] lg:h-[360px] w-[180px] h-[180px] rounded-md'/>
        <img src="https://res.cloudinary.com/dlz61swsc/image/upload/v1731431798/2148301692_naimkd.jpg" className='lg:w-[50%] w-[180px] lg:h-[360px] h-[180px] rounded-md'/>
        </div>
        <div data-aos="fade-up"  className='items-center flex-row flex justify-center px-5 mx-auto w-[60%] gap-3 lg:gap-5 my-5 '>
        <img src='https://res.cloudinary.com/dlz61swsc/image/upload/v1731431974/2149661456_hezz6a.jpg' className='lg:w-[50%] w-[180px] h-[180px] lg:h-[390px] rounded-md'/>
        <img src="https://res.cloudinary.com/dlz61swsc/image/upload/v1731343302/85_k47fvk.jpg" className='lg:w-[680px] w-[180px] h-[180px] lg:h-[390px] rounded-md'/>
        </div>
        <div className='flex flex-col lg:flex-row w-full lg:w-[70%] mx-auto items-center justify-between'>
          <div>
          <h2 data-aos="fade-up"  className="text-[30px] font-extrabold text-center lg:text-left dark:text-white text-black">Accommodations in Prime Locations</h2>
          <p data-aos="fade-up"  className='text-[20px] text-center lg:text-left dark:text-white my-4 text-black'> Discover comfortable and conveniently located hostels tailored to your needs.</p>
          </div>
          <div >
            <InquiryBtn hero={false}/>
          </div>
        </div>
    </div>
    </div>
  )
}
