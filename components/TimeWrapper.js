import React from 'react'
import CardsTimes from './CardsTimes'



const times = [
    {
        day: 'Tue - Thu',
        time: '12.00 - 10.00 Pm'
},
{
    day: 'Fri - Sat',
    time: '12.00 - 10.30 Pm'
},
{
    day: 'Sun',
    time: '12.00 - 10.00 Pm'
},
{
   book: 'make a booking'
}

]


const TimeWrapper = () => {
  return (
    <div className=' relative flex flex-col lg:flex-row  bottom-20  '>
        {times.map((tim, i) => (

<CardsTimes key={i} time={tim.time} day={tim.day} booking={tim.book}/>

        ))}


    </div>
  )
}

export default TimeWrapper