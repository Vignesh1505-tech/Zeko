// import React, { useEffect, useState } from 'react';
// import { university } from '../constants';
// import ScrollAnimation from 'react-animate-on-scroll';
// import 'animate.css/animate.min.css';
// import "../assets/styles/university.css";
// import { useNavigate } from 'react-router-dom';

// export default function University() {
//     const [clickedItem, setClickedItem] = useState(null);

// const navigation=useNavigate()
//     const handleNav=(item)=>{
//         setClickedItem(item.id)
//         navigation("/UniversityDetails",{state:item})
//         setTimeout(() => setClickedItem(null), 500);
//     }
  

//   return (
//     <div className="flex flex-col items-center">
//         <div className='my-5'>
//             <h1 className='text-center text-primary font-bold text-[50px]'>Zeko's Top Picks for Universities</h1>
//         </div>
//     {university.map((item, index) => (
//       <ScrollAnimation
//         key={item.id}
//         animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
//         duration={0.5}
//         animateOnce={false}
//       >
//         <div
//           onClick={() => handleNav(item)}
//           id={`item-${item.id}`}
//           className={`fade-item cursor-pointer w-[550px] p-2 rounded-md bg-white bg-opacity-20 backdrop-blur-md flex flex-col md:flex-row items-center justify-center mb-10 transition-transform transform hover:rotate-1 hover:scale-105 ${
//             clickedItem === item.id ? 'rotate-horizontal' : ''
//           } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//         >
//           <img src={item.image} className="w-[150px] h-[150px] rounded-sm mx-4" alt={`${item.name} logo`} />
//           <div className="w-full mx-5 my-5 text-left md:w-auto">
//             <h3 className="font-bold text-[25px] text-white">{item.name}</h3>
//           </div>
//         </div>
//       </ScrollAnimation>
//     ))}
//   </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import "../../../assets/styles/university.css";
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { universities } from '../../../constants';
import SectionWrapper from '../../../hoc/SectionWrapper';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const University=()=> {
    const [clickedItem, setClickedItem] = useState(null);

const navigation=useNavigate()
    const handleNav=(item)=>{
        setClickedItem(item.id)
        navigation("/UniversityDetails",{state:item})
        setTimeout(() => setClickedItem(null), 500);
    }
  

  return (

<div className="flex flex-col relative mt-[5%] h-auto items-center">
  <div data-aos="fade-up"  className="my-5">
    <h1  className="text-center text-black dark:text-white font-poppins font-bold md:text-[30px] lg:text-[50px]">Your Gateway to Top Universities Worldwide</h1>
  </div>
  
  <div className="grid items-center justify-center grid-cols-2 gap-5 my-4 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {universities.map((item) => (
      <Tilt options={defaultOptions} style={{ height: 200, width: 200 }} key={item.id}>
        <div
        data-aos="fade-up" 
          onClick={() => handleNav(item)}
          id={`item-${item.id}`}
          className="flex flex-col items-center justify-center w-auto mb-10 transition-transform transform rounded-md cursor-pointer fade-item bg-opacity-20 dark:bg-opacity-20 backdrop-blur-md hover:scale-105"
        >
          <figure>
          <img
          loading="lazy"
            src={item.image}
            className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-sm lg:mx-4 mx-2 transition-transform transform hover:scale-[1.2] hover:rotate-3 hover:translate-z-[10px] duration-500"
            alt={`${item.name} logo`}
          />
          </figure>
        </div>
      </Tilt>
    ))}
  </div>
</div>

  );
}
export default SectionWrapper(University, "univ");