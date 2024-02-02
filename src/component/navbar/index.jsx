import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu, isMobile} = useContext(DataContext)
    const menus = useRef(null)
    const navigate = useNavigate()
    const links = [
        { name: 'gallery', to: '/gallery' },
        { name: 'pricing', to: '/pricing' },
        { name: 'info', to: '/info' }
    ];

    useEffect(() => {
        if (isToggleMenu) {
        gsap.to(menus.current, {
            opacity: 1,
            duration: .3,
            ease: 'power2.in',
            onComplete: () => {
            menus.current.style.display = 'flex';
            },
        });
        } else {
        gsap.to(menus.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
            menus.current.style.display = 'none';
            },
        });
        }
    }, [isToggleMenu]);

    const handleClick = (link) => {
        setToggleMenu(!isToggleMenu)
         navigate(link)
         setTimeout(() => {
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
         });
         }, 500);
    }

  return (
    <main
     ref={menus}
     className='shadow-sm fixed w-full h-full z-30 flex opacity-0 bg-black'>
        <div 
        className='flex flex-col w-full items-center justify-center text-xl gap-5'
        >
                {links.map((link) => (
                <a
                className='text-gray-50 cursor-pointer text-4xl font-bold uppercase primary-font'
                key={link.name} 
                onClick={() => handleClick(link.to)}>
                    {link.name} 
                </a>
            ))}

        </div>

    </main>
  )
}

export default Navbar