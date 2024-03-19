'use client'
import { PlayCircle } from 'lucide-react'
import React from 'react'
import Modal from './Modal'
import { Parallax, ParallaxBanner, ParallaxProvider, useParallax } from 'react-scroll-parallax';



const Video = () => {

   


  return (
    <ParallaxProvider >


<ParallaxBanner
      layers={[
        { image: '/images/food.jpg', speed: -30 },
        {
          speed: -15,
          children: (
            <div className=' absolute inset-0 flex flex-col items-center justify-center '>
            <h1 className='text-white text-center text-2xl lg:text-5xl'>ENJOY DEEP
            LEBANESE FLAVOURS</h1>
            <div className='flex  justify-center'>
            <Modal /> 
            
            
            </div>
            
            
            
            
            
                    
                   </div>
            
          ),
        },
        { image: '/static/banner-foreground.png', speed: -10 },
      ]}
      className="aspect-[16/9]"
    />
        

    {/* <ParallaxBanner layers={[{ image: 'url(/images/food.jpg)', speed: -30 }] } className=' bg-cover bg-center w-full h-[600px] flex items-center justify-center aspect-[16/9]' >







    </ParallaxBanner> */}
   

    </ParallaxProvider>
  )
}

export default Video