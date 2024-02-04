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
import Note from './assets/Note'

const Header = () => {
  const [homeButton, setHomeButton] = useState(false)
  const { isMobile, isScrolled, isToggleMenu } = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
    setHomeButton(location.pathname !== '/' ? true : false)
  }, [location])

  return (
    <header
          className={`w-screen  top-0 transition flex bg-transparent  flex-col relative z-10`}>
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .3, delay: .7}}
            className={`flex relative justify-end items-center w-screen  h-14 md:h-16 opacity-0  z-0 ${isScrolled ? 'transform -translate-y-full' : ''}`}>
              {homeButton ? <Home /> : <Logo />}
            { !isToggleMenu && (isMobile ? <Menu /> : <Nav/>)}
              {!isMobile && <Socials />}
        </motion.section>
    </header>
  )
}

export default Header