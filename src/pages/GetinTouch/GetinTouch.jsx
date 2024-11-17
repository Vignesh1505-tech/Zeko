import React from 'react'
import Conatct from "../../assets/contact/Contact.jpg"
import SectionWrapper from '../../hoc/SectionWrapper';


const GetinTouch=()=> {
  return (
    <div className='flex flex-col items-center justify-center my-10 lg:mt-16'>
        <h1 data-aos="fade-up"  className='lg:text-[50px] text-[30px] font-bold text-black dark:text-white'>Get in Touch with us</h1>
        <p data-aos="fade-up"  className='text-[18px] text-black my-5 dark:text-white'>We are here to make your future better</p>
        <div data-aos="fade-up"  className="flex items-center justify-center my-5">
  <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-center items-center w-[90%] lg:w-[60vw] ">
    
 
    
    <div className="p-10 w-full overflow-hidden bg-yellow-100  rounded-2xl shadow-lg md:w-[45vw]">
      <form className="space-y-4">
        
        {/* Full Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1 text-black">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1 text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-1 text-black">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[60%] py-3 font-bold text-white transition duration-300 rounded-lg bg-secondary hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    <div>
      <img src={"https://res.cloudinary.com/deaafsb0j/image/upload/v1731867143/2147857318_bdufyk.jpg"} className='w-[550px] rounded-xl lg:rounded-r-xl lg:h-[350px]'/>
    </div>

  </div>
</div>

    </div>
  )
}
export default SectionWrapper(GetinTouch, "contact");