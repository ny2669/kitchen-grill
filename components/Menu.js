import React from 'react'

const Menu = () => {
  return (


    <div className='bg-[rgb(249,248,246)]'>
    <div className='flex justify-center gap-5 max-w-7xl mx-auto items-center flex-col space-y-8 lg:flex lg:flex-row p-16'>
      <div className='space-y-10 pt-10 flex flex-col flex-grow'>
        <h1 className='text-center lg:text-left text-3xl lg:text-5xl '>Check our Menu</h1>
        <p className='text-center lg:text-left text-gray-700 text-lg'>Our menu incorporates freshly cooked Grills, hot and cold Mezze Starters, Arabic rice dishes, wraps, Lebanese flatbread (Manakeesh), Arabic sweets and Fresh Juices.</p>
        <button type="" className='w-full lg:w-[200px] bg-[rgb(169,159,107)] p-5 text-white shadow-md'>Go to Menu</button>
      </div>

      <div className='grid grid-flow-col-dense grid-cols-2 gap-4 mx-auto'>
        <div className='space-y-4' >
          <img src='/images/dish1.jpg' className='w-[300px] h-[200px] object-cover object-center rounded-md shadow-md' alt='Food' />
          <img src='/images/dish2.jpg' className='w-[300px] h-[200px] object-cover object-center rounded-md shadow-md' alt='Food' />
        </div>

        <div className='space-y-4'>
          <img src='/images/dish3.2.jpg' className='w-[300px] h-[200px] object-cover object-center rounded-md shadow-md' alt='Food' />
          <img src='/images/dish4.jpg' className='w-[300px] h-[200px] object-cover object-center rounded-md shadow-md' alt='Food' />
        </div>
      </div>
    </div>
  </div>

























//     <div>
//         <div className='flex  justify-center gap-5 max-w-7xl mx-auto  flex-col  space-y-8 lg:flex lg:flex-row p-16'>
//             <div className='space-y-10 pt-10 flex flex-col flex-grow'>
//             <h1 className='text-center lg:text-left text-3xl lg:text-5xl '>Check our Menu</h1>

// <p className='text-center  lg:text-left text-gray-700 text-lg'>Our menu incorporates freshly cooked Grills, hot and cold Mezze Starters, Arabic rice dishes, wraps, Lebanese flatbread (Manakeesh), Arabic sweets and Fresh Juices.</p>

// <button type="" className='w-full lg:w-[200px] bg-[rgb(169,159,107)] p-5 text-white'>Go to Menu</button>
//             </div>
          




// <div className='grid grid-flow-col-dense grid-cols-2 gap-4 mx-auto'>
// <div className='space-y-4'>
// <img src='/images/food.jpg ' className='w-[300px] h-[200px]'/>
//     <img src='/images/food.jpg '  className='w-[300px] h-[200px]'/>
// </div>
    

//     <div className='space-y-4'>
//     <img src='/images/food.jpg' className='w-[300px] h-[200px]'/>
//     <img src='/images/food.jpg'  className='w-[300px] h-[200px]'/>
    
//     </div>
   
// </div>


//         </div>


//     </div>
  )
}

export default Menu