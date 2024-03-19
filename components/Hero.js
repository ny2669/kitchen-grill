'use client'

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <main className='min-h-[85vh] w-full top-0 relative bg-[url(/images/home.jpg)] bg-no-repeat bg-cover bg-blend-darken bg-black/50'>


        <div className='flex flex-col  text-center  p-2 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
          
            <p className='text-lg leading-tight text-[rgb(169,159,107)]'>Weclome to kitchen grill</p>
            <h1 className='font-semibold text-4xl lg:text-6xl text-gray-300 drop-shadow-2xl'>Home to the finest grilled food in the UK</h1>
        
           <div className="mt-10 ">
           <Button className={cn('rounded-full w-full md:max-w-sm bg-yellow-600 text-lg')}>Menu &amp; Order</Button>

            
           </div>
         

            <div>
                
            </div>
        </div>

    </main>
  )
}

export default Hero