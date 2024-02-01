import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu, isMobile} = useContext(DataContext)
    const socials = useRef(null)
    const navigate = useNavigate()
    const links = [
        { name: 'gallery', to: '/gallery' },
        { name: 'pricing', to: '/pricing' },
        { name: 'info', to: '/info' }
    ];

    useEffect(() => {
        if (isToggleMenu) {
        gsap.to(socials.current, {
            opacity: 1,
            duration: .3,
            ease: 'power2.in',
            onComplete: () => {
            socials.current.style.display = 'flex';
            },
        });
        } else {
        gsap.to(socials.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
            socials.current.style.display = 'none';
            },
        });
        }
    }, [isToggleMenu]);


    const handleClick = (link) => {
        setToggleMenu(!isToggleMenu)
         navigate(link)
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  return (
    <main
     ref={socials}
     className='shadow-sm fixed rounded-md h-[300px] w-[200px] top-[70px] right-5 z-30 flex opacity-0 bg-gray-300'
    >
        <div 
        className='flex flex-col w-full items-center justify-center text-xl gap-5'
        >
                {links.map((link) => (
                <a
                className='text-gray-800 cursor-pointer font-semibold capitalize'
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