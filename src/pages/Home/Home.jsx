import React from 'react'
import Hero from '../Hero/Hero'
import bground from "../../assets/background/background.jpg";
import Services from '../Services/Services'
import University from '../Services/Universitiy/University'


export default function Home() {
  return (
    <div   className="min-h-screen bg-fixed bg-center bg-cover "
    style={{ backgroundImage: `url(${'https://res.cloudinary.com/deaafsb0j/image/upload/v1732042672/background_ev35cn.jpg'})` }}>

        <Hero/>
        <div className='bg-primary bg-opacity-80 w-[100%] h-auto lg:h-[115vh] my-0 relative' >
        <University/>
        </div>
        <div className='bg-white dark:bg-black'>
        <Services/>
        </div>
    </div>
  )
}
