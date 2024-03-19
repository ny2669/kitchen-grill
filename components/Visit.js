import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Visit = () => {
  return (
    <div className='relative  text-center lg:text-left '>
    <div className='flex flex-col lg:flex-row  gap-10 lg:justify-center lg:p-32 p-10 '>





        <div className='space-y-5 '>
          <p className='text-[rgb(169,159,107)]'>Our Presence on Social Media</p>
        <h2 className='text-4xl'>Visit us</h2>
       

        <div className='flex gap-2 cursor-pointer justify-center lg:justify-left'>

        <Link rel="" type="" href="" className='underline'>Facebook</Link>
        <Link rel="" type="" href="" className='underline'>Imstagram</Link>
        <Link rel="" type="" href="" className='underline'>Twitter</Link>
        <Link rel="" type="" href="" className='underline'>Youtube</Link>
        
          
        </div>

        <button className='bg-[rgb(169,159,107)] text-white text-md p-5' type="">Go To Menu</button>


        </div>

{/*                 
    <div className='w-[300px] h-[700px] mx-auto lg:mx-0 relative grid grid-rows-3 grid-flow-col gap-10'>
    <Image src='/images/veg.jpg' fill className='w-full h-full object-cover rounded-xl row-end-3 row-span-2 ml-6 '/>
<Image src='/images/bowl.jpg' fill className='w-full h-full object-cover rounded-xl row-start-2 row-span-2 ml-52'/>




</div> */}

                
<div className='w-[300px] h-[400px] mx-auto relative lg:mt-32'>
    <Image src='/images/veg.jpg' fill className=' h-full object-cover rounded-xl lg:ml-32  lg:-mt-32 '/>
<Image src='/images/bowl.jpg' fill className=' h-full object-cover rounded-xl  '/>




</div>

<div className='w-full lg:block lg:w-[300px] h-[400px] mx-auto relative lg:mt-32'>
    
<Image src='/images/dish3.jpg' fill className=' h-full object-cover rounded-xl  '/>




</div>
      

    </div>
        </div>
  )
}

export default Visit