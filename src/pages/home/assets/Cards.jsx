import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { cardData } from '../utils/cardData'

const Cards = () => {
  const navigate = useNavigate()

  const handleClick =(index)=>{
    navigate(`/gallery/${index+1}/`)
    setTimeout(() => {
           window.scrollTo({top: 0})
    });
  }
  return (
    <main  className='space-y-5 relative lg:grid lg:grid-cols-2 sm:grid-cols-2 place-items-center h-auto lg:gap-10  lg:space-y-0 md:space-y-5 sm:space-y-5'>
    {cardData.map((card, index)=>( 
    <div key={index}
        onClick={()=>handleClick(index)}
         className='flex group  flex-col w-full h-[600px] lg:w-[45vw] lg:h-[800px] md:h-[800px] gap-5 relative border border-black  cursor-pointer'>
        <img className='lg:w-11/12 w-full h-5/6 relative border group-hover:shadow-xl border-zinc-400 self-center object-cover' 
        src="" alt="thumbnail" />
        <div className='px-[2vw]'>
         <h1 className='text-lg capitalize text-zinc-900'>
          {card.title}
         </h1>
         <p  className='text-zinc-700'>{card.disc}</p>
        </div>
        </div>
    ))}
    </main>
  )
}

export default Cards