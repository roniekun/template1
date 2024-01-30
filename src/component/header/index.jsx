import React from 'react'
import './style.css'
import Menu from './assets/Menu'
import Home from './assets/Home'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
  const [homeButton, setHomeButton] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setHomeButton(location.pathname !== '/' ? true : false)
  }, [location])

  return (
    <main className='after w-screen fixed z-30 top-0  justify-center items-center flex bg-white h-14 md:h-16'>
    {homeButton && <Home />}
    <Menu />
    </main>
  )
}

export default Header