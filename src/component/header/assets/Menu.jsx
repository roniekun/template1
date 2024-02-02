import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import gsap from 'gsap'

const Menu = () => {
    const { setToggleMenu, isToggleMenu, isMobile } = useContext(DataContext)
    const btn = useRef()

    useEffect(() => {
    if (isToggleMenu) {
        gsap.to(btn.current, { color: 'white', borderColor: 'white' });
        document.body.style.overflow = 'hidden'
    }
    else{
        gsap.to(btn.current, { color: 'black', borderColor: 'black' });
         document.body.style.overflow = 'scroll'

    }
    }, [isToggleMenu]);

    

        const handleClick = () => {
            setToggleMenu(!isToggleMenu)
        }
  return (
        <button 
        ref={btn}
        onClick={handleClick}
        className='bg-blend-difference flex items-center justify-center absolute right-[5vw] text-black uppercase text-[12px] py-1  border border-gray-900 rounded-lg w-auto px-2'>
        <div className='w-2 h-2 bg-slate-00 rounded-full'></div>
        {isToggleMenu ?
             <p className='w-12 primary-font'>Close</p>
              : 
             <p className='w-12 primary-font'>Menu</p>} 
        </button>
  )
}

export default Menu