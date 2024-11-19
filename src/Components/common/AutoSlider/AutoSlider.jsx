import React, { useState, useEffect } from "react";
import Flag from "react-world-flags"; // Import the Flag component
import { countries } from "../../../constants";
import "./style.css"; // Ensure to import the CSS

const AutoSlider = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((prev) => (prev + 1) % countries.length); // Change every 3 seconds
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-4 overflow-hidden">
      <h2 data-aos="fade-down" className="my-5 text-lg font-bold text-center text-black dark:text-white lg:text-2xl font-poppins">
        Providing Manpower Services in
      </h2>

      {/* Container for the continuous loop */}
      <div className="relative w-full">
        {/* Marquee Container */}
        <div className="flex w-full gap-3 animate-marquee">
          {/* Render all countries */}
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 space-x-4 text-white bg-gray-700 rounded-lg w-52"
            >
              <Flag code={country.code} alt={country.name} className="w-10 h-6" />
              <div>
                <h2 data-aos="fade-right" className="my-2 text-lg font-bold text-center font-poppins">
                  {country.name}
                </h2>
              </div>
            </div>
          ))}
          {/* Duplicate the items for continuous scrolling */}
          {countries.map((country, index) => (
            <div
              key={index + countries.length}
              className="flex flex-col items-center justify-center p-4 space-x-4 text-white bg-gray-700 rounded-lg w-52"
            >
              <Flag code={country.code} alt={country.name} className="w-10 h-6" />
              <div>
                <h2 data-aos="fade-up" className="my-2 text-lg font-bold text-center font-poppins">
                  {country.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
