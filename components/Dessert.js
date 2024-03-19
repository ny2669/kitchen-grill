import React from 'react'

const Dessert = () => {
  return (
   
    <div>
    <div className='flex justify-center gap-5 lg:max-w[80%]  mx-auto items-center flex-col space-y-8 lg:flex lg:flex-row lg:p-16 '>
      <div className='space-y-8 py-10 flex flex-col flex-grow order-2 px-5'>
        <p className='text-lg text-[rgb(169,159,107)] text-center lg:text-left'>BEST CHOICE</p>
        <h1 className='text-center lg:text-left text-3xl lg:text-5xl '>DESSERTS</h1>
        <p className='text-center lg:text-left text-gray-700 text-lg'>Our menu incorporates freshly cooked Grills, hot and cold Mezze Starters, Arabic rice dishes, wraps, Lebanese flatbread (Manakeesh), Arabic sweets and Fresh Juices.</p>
        <button type="" className='w-[200px] mx-auto lg:mx-0 lg:w-[200px] bg-[rgb(169,159,107)] p-5 text-white'>Go to Menu</button>
      </div>

      <div className=' order-1 w-full'>
        <div className=' lg:grid lg:grid-cols-8 space-y-5  p-5' >
          <img src='/images/bowl.jpg' className='w-full lg:w-[300px] h-[200px] object-cover object-center  rounded-md lg:col-start-1 lg:col-span-4 shadow-md' alt='Food' />
          <img src='/images/fresh.jpg' className='w-full lg:w-[200px] h-[200px] object-cover object-center rounded-md lg:col-start-4 lg:row-start-2 lg:col-span-6  shadow-md' alt='Food' />
           <img src='/images/food.jpg' className='w-full h-[400px] lg:w-[200px] lg:h-[200px] object-cover object-center rounded-md  lg:col-start-1 lg:col-span-6 shadow-md' alt='Food' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dessert