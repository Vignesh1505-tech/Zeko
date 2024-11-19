import React from "react";
import { jobsByCountry } from "../../../constants";
import InquiryBtn from "../../../Components/common/InquiryBtn/InquiryBtn";



const JobCard = () => {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className="container p-4 mx-auto">
      {jobsByCountry.map((countryData, index) => (
        <div key={index} className="mb-8">
          {/* Country Title */}
          <h2 data-aos="fade-up"  className="mb-4 text-2xl font-bold text-center text-black dark:text-white">{countryData.country}</h2>
          {/* Job Cards Row */}
          <div className="flex flex-wrap -mx-4">
            {countryData.jobs.map((job, idx) => (
              <div
              data-aos="fade-up" 
                key={idx}
                className="w-full p-4 sm:w-1/2 lg:w-1/3"
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  {/* Job Image */}
                  <img
                    src={job.image}
                    alt={job.title}
                    className="object-fill w-full h-[200px] lg:h-[300px]"
                  />
                  <div className="flex items-center justify-between p-4">
                    {/* Job Title */}
                    <div className="w-[70%]">
                    <h3 data-aos="fade-right"  className="mb-2 text-xl font-semibold text-gray-900">{job.title}</h3>

                    {job.salary && (
                      <p data-aos="fade-right"  className="text-sm font-medium text-gray-600">
                        <strong>Salary:</strong> {job.salary}
                      </p>
                    )}
                    </div>
                    {/* <div data-aos="fade-up"  className={` w-[30%] p-2 cursor-pointer  border-2 my-6 rounded-xl`} onClick={scrollToContact} >
<p className={`text-lg font-medium text-center text-black`}>Inquiry</p>
</div> */}
<div className="w-[30%]">
<InquiryBtn hero={false}/>
</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
