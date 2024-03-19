import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[rgb(53,48,45)]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 text-white p-20 gap-8 '>

            <div className='space-y-5 mb-5'>
                <h3 className='text-2xl'> Contact us</h3>
                <aside>
                    <p className='inline-block my-3'>82 London Street <br/>
Reading RG1 4SJ </p>
                    <p>Tue - Thu, 12.00 Noon – 10:00 Pm
Fri - Sat, 12.00 Noon - 10.30 Pm
Sun, 12.00 Noon - 10.00 Pm
Mon - Closed</p>

<p className='text-[rgb(169,159,107)] font-thin my-3'>E-mail: info@bakery-house.co.uk <br/>
Phone: +44 118 327 40 40</p>
                </aside>
            </div>
            

            <div className='space-y-5 mb-5'>
                <h3 className='text-2xl'> RECENT POSTS</h3>
                <aside>
                    <Link href={'/'} >Welcome to Bakery House</Link>


                    
                </aside>
            </div>

            <div className='space-y-5 mb-5'>
                <h3 className='text-2xl'> OUR STORY</h3>
                <aside>
       <p>We look forward to welcoming you soon and serve you some amazing food</p>
                    
                </aside>
            </div>

            <div className=' grid grid-flow-dense grid-cols-2 lg:grid-cols-3 gap-2  '>
                <img src={'/images/bowl.jpg'} className='object-center object-cover '/>
                <img src={'/images/bowl.jpg'} className='object-center object-cover'/>
                <img src={'/images/bowl.jpg'} className='object-center object-cover'/>
                <img src={'/images/bowl.jpg'} className='object-center object-cover lg:-mt-20'/>
                <img src={'/images/bowl.jpg'} className='object-center object-cover lg:-mt-20'/>
                <img src={'/images/bowl.jpg'} className='object-center object-cover lg:-mt-20'/>
       

               
        


               
            </div>
        </div>
    </div>
  )
}

export default Footer