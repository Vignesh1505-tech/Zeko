import React from 'react'
import Hero from '../Hero/Hero'
import bground from "../../assets/background/background.jpg";
import Services from '../Services/Services'
import University from '../Services/Universitiy/University'


export default function Home() {
  return (
    <div   className="min-h-screen bg-fixed bg-center bg-cover "
    style={{ backgroundImage: `url(${bground})` }}>

        <Hero/>
        <div className='bg-white dark:bg-black'>
        <University/>
        <Services/>
        </div>
    </div>
  )
}
