import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu, isMobile} = useContext(DataContext)
    const links = useRef(null)

    useEffect(() => {
        if (isToggleMenu) {
        gsap.to(links.current, {
            opacity: 1,
            duration: .3,
            ease: 'power2.in',
            onComplete: () => {
            links.current.style.display = 'flex';
            },
        });
        } else {
        gsap.to(links.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
            // Animation is done, set display to "none" or your desired value
            links.current.style.display = 'none';
            },
        });
        }
    }, [isToggleMenu]);


    const handleClick = () => {
        setToggleMenu(!isToggleMenu)
    }
  return (
    <main
     ref={links}
     className='shadow-sm fixed rounded-md h-[300px] w-[250px] top-[70px] right-2 z-30 flex opacity-0 bg-slate-500'
    >
        <div 
        className='flex flex-col w-full items-center justify-center text-2xl gap-5'
        >
            <Link to='/'>
                Home
            </Link>
        
            <Link to='/gallery' >
                Gallery
            </Link>

            <Link to='/pricing'>
                Pricing
            </Link>
            
            <Link to='/info'>
                Info
            </Link>
        </div>

    </main>
  )
}

export default Navbar