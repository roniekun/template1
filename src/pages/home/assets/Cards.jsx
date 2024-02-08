import React from 'react'
import { cardData } from '../utils/cardData'

const Cards = () => {
  return (
    <main  className='space-y-5 relative lg:grid lg:grid-cols-2 sm:grid-cols-2 place-items-center h-auto lg:gap-10  lg:space-y-0 md:space-y-5 sm:space-y-5'>
    {cardData.map((card, index)=>( <div key={index}
         className='flex  flex-col w-full h-[700px] lg:w-[45vw] lg:h-[800px] md:h-[800px] gap-5 relative border border-black'>
        <img className='w-11/12 h-5/6 relative border border-zinc-400 self-center object-cover' 
        src="" alt="thumbnail" />
        <div className='px-[2vw]'>
         <h1 className='text-lg capitalize text-zinc-900'>
          {card.title}
         </h1>
         <p  className='text-zinc-700'>{card.desc}</p>
        </div>
        </div>
    ))}
    </main>
  )
}

export default Cards