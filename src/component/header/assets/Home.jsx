import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import BackIcon from './svg/corner-up-left.svg?react'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
    const navigate = useNavigate()
    const { setToggleMenu, isToggleMenu } = useContext(DataContext)

    const handleClick = () =>{
         navigate('/')
         setToggleMenu(false)
         navigate(link)
         setTimeout(() => {
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
         });
         }, 500);
    }
  return (
    <>
    <AnimatePresence>
    {!isToggleMenu && 
    <motion.button
        initial={{opacity: 0}}
        transition={{duration: .3, delay: 1}}
        animate={{opacity: 1}}
     className='mix-blend-difference secondary-font absolute left-5 text-[12px] text-black uppercase z-10 flex gap-1 items-center justify-center rounded-lg border border-gray-900 p-1 px-2'
    onClick={handleClick}>
   <BackIcon className='w-5'/>
   return home
   </motion.button>
    }
    </AnimatePresence>
    </>
  )
}

export default Home