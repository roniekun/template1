import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import { CgMenuRight } from "react-icons/cg";
import gsap from 'gsap'
import { IoCloseSharp } from "react-icons/io5";


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
        {isToggleMenu ? <IoCloseSharp className='group-hover:opacity-70 w-7 h-7' />  : 
        <CgMenuRight className='group-hover:opacity-70 w-7 h-7' />}
        </button>
  )
}

export default Menu