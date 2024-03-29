import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { cardData } from '../utils/cardData'

const Cards = () => {
  const navigate = useNavigate()
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick =(index)=>{
    navigate(`/gallery/${index+1}/`)
    setTimeout(() => {
          window.scrollTo({top: 0, behavior: 'smooth'})
    }, 200);
  }

  return (
    <main  className='relative lg:grid lg:grid-cols-4 gap-5 md:grid md:grid-cols-2
      group'>
    {cardData.map((card, index)=>( 
    <div key={index}
        onClick={()=>handleClick(index)}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
         className={`flex group  flex-col w-full h-[600px]  md:h-[500px] 
         ${hoveredItem !== index ? 'group-hover:contrast-50': ''} gap-2 relative contrast-100 border-black  cursor-pointer`}>
        <img className=' w-full h-full relative border border-zinc-400 self-center object-cover' 
        src="" alt="thumbnail" />
        <span className='w-full h-[1px] bg-zinc-400 self-center'/>
        <div className='p-1'>
         <h1 className='text-base uppercase text-zinc-900'>
         <span>00{index+1}</span>  <br />
         {card.title}
         </h1>
         <p  className='text-zinc-700 uppercase text-xs'>{card.disc}</p>
        </div>
        </div>
    ))}
    </main>
  )
}

export default Cards