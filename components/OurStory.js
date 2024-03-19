import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <div className='  text-center lg:text-left '>
    <div className='lg:grid lg:grid-col-flow  lg:grid-cols-3   lg:w-[80%] lg:mx-auto gap-10 lg:p-20 p-5'>

        <div className='space-y-16 lg:space-y-5  lg:col-span-2 '>
        <h2 className='text-4xl lg:text-5xl'>Our story</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>


        </div>


      

        <div className='w-[300px] h-72 mx-auto my-5 relative'>

            <Image src='/images/story.jpg' fill className=' object-cover rounded-xl'/>


        </div>

    </div>
        </div>
  )
}

export default OurStory