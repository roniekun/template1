import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion';


const Menu = () => {
    const { setToggleMenu, isToggleMenu } = useContext(DataContext)
    const btn = useRef()

        useEffect(() => {
        if (isToggleMenu) {
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'scroll'
        }
        }, [isToggleMenu]);

        const handleClick = () => {
            setToggleMenu(!isToggleMenu)
        }
  return (
        <AnimatePresence>
            <motion.button 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .3, delay: .7}}
                ref={btn}
                onClick={handleClick}
                className='bg-blend-difference group flex items-center justify-center absolute right-[5vw] py-2 rounded-lg w-auto px-3 -z-10
                hover:bg-zinc-400 border-zinc-700 hover:ring ring-inset-2 ring-stone-300'> 
                <h1 className='uppercase text-sm text-zinc-700'>
                 Menu
                </h1>
                {/* <RxHamburgerMenu className='opacity-90 group-hover:opacity-80 w-7 h-7' /> */}
                </motion.button>
         </AnimatePresence>
  )
}

export default Menu