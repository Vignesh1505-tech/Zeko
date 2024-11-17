// import React from 'react'
// import { useLocation } from 'react-router-dom';

// export default function UnivDetails() {
//     const location = useLocation();
//     const Data = location.state;
//   return (
//     <div className='items-center justify-center bg-custom-gradient'>
// <div style={{backgroundColor:Data.color}} className='w-[100%] h-[80vh] items-center flex flex-row gap-10 justify-evenly'>
//     <img src={Data.image} className='w-[400px] h-[400px] mx-5 bg-white'/>
    
//     <div className='flex flex-col items-center justify-center '>
//     <h1 className='text-white font-bold text-[50px]'>{Data.name}</h1>
//     <h1 className='my-5 text-2xl text-white'>University Details</h1>
//     <p className='w-[60%] h-auto text-center text-white text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus omnis iusto nostrum eaque dicta ex totam dolorum perspiciatis quia. Voluptatem voluptate culpa nulla esse perferendis facilis hic ducimus optio nam.</p>
//     <p>{Data.fee}</p>
// </div>
// </div>

//     </div>
//   )
// }
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../assets/styles/UnivDetails.css'; // Custom CSS file for animations and styling
import { Tilt } from 'react-tilt';
import InquiryBtn from '../../../Components/common/InquiryBtn/InquiryBtn';

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

export default function UnivDetails() {
  const location = useLocation();
  const Data = location.state;

  return (
    <div  style={{
        '--top-color': Data.color,
        '--bottom-color': Data.color1,
      }} className="relative flex flex-col items-center lg:mt-0 mt-[20%] justify-center lg:flex-row univ-details-container">
      <div className="relative z-10 flex flex-col items-center gap-5 lg:gap-10 lg:flex-row content-container justify-evenly">
      <Tilt options={defaultOptions} style={{ height: 400, width: 400 }} >

        <img src={Data.image} className="lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] lg:mx-5 mx-auto p-2 bg-white rounded" alt={`${Data.name} logo`} />
        </Tilt>

        <div className="flex flex-col items-center justify-center text-center text-container">
          <h2 className="text-white font-bold text-[40px] lg:text-[50px]">{Data.name}</h2>
          <p className='text-white font-semibold text-[20px]'>To Know More</p>
          <InquiryBtn hero={true}/>
          {/* <h1 className="my-5 text-2xl text-white">University Details</h1> */}
          {/* <p className="w-[60%] text-white text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus omnis iusto nostrum eaque dicta ex totam dolorum perspiciatis quia. Voluptatem voluptate culpa nulla esse perferendis facilis hic ducimus optio nam.
          </p> */}
          <p className="mt-4 text-lg font-semibold text-white">{Data.fee}</p>
        </div>
      </div>
    </div>
  );
}
