import React, { useState, useEffect } from "react";
import Flag from "react-world-flags"; // Import the Flag component
import { countries } from "../../../constants";



const AutoSlider = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((prev) => (prev + 1) % countries.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-4 overflow-hidden">
      <h2 data-aos="fade-up"  className="my-5 text-lg font-bold text-center text-white lg:text-2xl font-poppins">Providing Manpower Services in</h2>
      <div className="flex my-2 space-x-6 animate-marquee">
        {countries.map((country, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center justify-center w-64 space-x-4 text-white p-4 rounded-lg bg-gray-700`}
          >
            <Flag code={country.code} alt={country.name} className="w-10 h-6" /> {/* Displaying the flag */}
            <div>
              <h2 data-aos="fade-up"  className="my-2 text-lg font-bold text-center font-poppins">{country.name}</h2>
              {/* <p className="text-sm">{country.tagline}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
