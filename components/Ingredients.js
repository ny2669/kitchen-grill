import Image from 'next/image'
import React from 'react'

const Ingredients = () => {
  return (
    <div className='relative bg-[rgb(245,244,241)] text-center lg:text-left'>
    <div className='flex flex-col lg:flex-row gap-10 justify-center py-20 px-5 lg:p-32'>


        
    <div className='w-full lg:w-[700px] h-[500px] relative'>

<Image src='/images/story.jpg' fill className='w-full h-full object-cover rounded-xl'/>


</div>


        <div className='space-y-5 '>
          <p className='text-[rgb(169,159,107)] sm:text-2xl lg:text-lg'>Recoomendations</p>
        <h2 className='text-5xl lg:text-3xl'>Only the finest ingredients</h2>
        <p>Only the finest ingredients make it to our kitchen.</p>
        <p>The ingredients are carefully chosen by our buying team.</p>

        <div className='grid grid-cols-2 max-w-md mx-auto p-5 gap-8'>

          <ul className=' text-left list-disc text-[rgb(169,159,107)] '>
            <li className=''>Fresh meat</li>
            <li>Fresh Vegetables</li>
            <li>GM oil free</li>
          </ul>

          <ul className=' text-left list-disc  text-[rgb(169,159,107)] '>
            <li>Fresh meat</li>
            <li>Fresh Vegetables</li>
            <li>GM oil free</li>
          </ul>
          
        </div>


        </div>


      

    </div>
        </div>
  )
}

export default Ingredients