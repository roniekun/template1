import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import { CgMenuRight } from "react-icons/cg";
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
        className='bg-blend-difference group flex items-center justify-center absolute right-[5vw] text-black uppercase text-[12px] py-1 w-auto px-2'> 
            <CgMenuRight className='group-hover:opacity-70 w-5 h-5' />
        </button>
  )
}

export default Menu