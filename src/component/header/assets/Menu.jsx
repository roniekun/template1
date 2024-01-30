import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'

const Menu = () => {
    const { setToggleMenu, isToggleMenu, isMobile } = useContext(DataContext)
        const handleClick = () => {
            setToggleMenu(!isToggleMenu)
        }
  return (
        <button 
        onClick={handleClick}
        className='flex items-center justify-center absolute right-5 text-black uppercase text-xs py-1  border-2 border-slate-950 rounded-xl w-auto px-2'>
        <div className='w-2 h-2 bg-slate-600 rounded-full '></div>
        {isToggleMenu ?
             <p className='w-12'>Close</p>
              : 
             <p className='w-12'>Menu</p>} 
        </button>
  )
}

export default Menu