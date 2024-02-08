import React from 'react'
import Menu from './assets/Menu'
import Home from './assets/Home'
import { useLocation } from 'react-router-dom'
import { useState, useEffect,useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import Nav from './assets/Nav'
import Socials from '../assets/Socials'
import { motion } from 'framer-motion'

const Header = () => {
  const [homeButton, setHomeButton] = useState(false)
  const { isMobile, isScrolled, isToggleMenu, bgColor} = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
    setHomeButton(location.pathname !== '/' ? true : false)
  }, [location])

  return (
    <header
          style={{backgroundColor: bgColor}}
          className={`w-screen  top-0 transition flex flex-col fixed backdrop-brightness-90 z-10 backdrop-blur-lg  ${isScrolled ? 'transform -translate-y-full' : ''}`}>
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .3, delay: .7}}
            className={`flex relative justify-between px-[5vw] items-center w-screen  h-14 md:h-16 opacity-0  z-0 `}>
              {homeButton ? <Home /> : <Logo />}
            { !isToggleMenu && (isMobile ? <Menu /> : <Nav/>)}
        </motion.section>
    </header>
  )
}

export default Header