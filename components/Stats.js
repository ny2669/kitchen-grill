import React from 'react'

const Stats = () => {
  return (
    <div className='bg-[rgb(181,159,107)] -mt-2 '>
        <div className='grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto text-white p-10 text-center gap-y-2'>

            <div className='space-y-5 '>
                <span className='space-y-5  text-4xl font-semibold'>23</span>
                <p>Hot & Cold Mezze</p>
            </div>

            <div className='space-y-5 '>
                <span className='text-4xl font-semibold'>15</span>
                <p>Hot & Cold Mezze</p>
            </div>

            <div className='space-y-5'>
                <span className='space-y-5  text-4xl font-semibold'>10</span>
                <p>Hot & Cold Mezze</p>
            </div>

            <div className='space-y-5'>
                <span className='text-4xl font-semibold'>7</span>
                <p>Hot & Cold Mezze</p>
            </div>
            
        </div>

    </div>
  )
}

export default Stats