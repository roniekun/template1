import React from 'react'
import './style.css'
import Menu from './assets/Menu'
import Home from './assets/Home'
import { useLocation } from 'react-router-dom'
import { useState, useEffect,useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import gsap from 'gsap'

const Header = () => {
  const [homeButton, setHomeButton] = useState(false)
  const { isScrolled } = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
    setHomeButton(location.pathname !== '/' ? true : false)
  }, [location])


  return (
    <main className={`w-screen fixed z-30 top-0 ${isScrolled ? 'transform -translate-y-full' : ''}  transition  justify-center items-center flex bg-transparent backdrop-blur-md h-14 md:h-16 shadow-md`}>
     {!homeButton && <Logo/>}
    {homeButton && <Home />}
     <Menu />
    </main>
  )
}

export default Header