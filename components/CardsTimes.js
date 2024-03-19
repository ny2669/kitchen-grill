
  

const CardsTimes = ({day, time, booking}) => {
  return (


    <div className="p-5 bg-[rgb(53,48,45)] last-of-type:bg-[rgb(169,159,107)] lg:w-[80%] flex items-center pt-12 last-of-type:pt-16 h-40  flex-col">
<p className="text-[rgb(169,159,107)]">{day} <span className="text-white">{booking}</span></p>
<p className="text-white">{time}</p>
    </div>



  )
}

export default CardsTimes