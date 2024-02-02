import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const {setToggleMenu, isToggleMenu} = useContext(DataContext)
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
            duration: .3,
            ease: 'power2.in',
            translateX: '0',

        });
        } else {
        gsap.to(menus.current, {
            duration: 0.3,
            ease: 'power2.inOut',
            translateX: '100%',

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
     className='shadow-sm  z-50 fixed top-0 w-4/5 self-end h-full flex bg-black transfom translate-x-full'>
        <div 
        className='flex flex-col w-full items-center justify-center text-xl gap-5 h-full'>
            <button
            onClick={()=>setToggleMenu(false)}
            className='w-5 group absolute top-5 left-5 cursor-pointer'>
            <IoCloseSharp className='fill-white w-6 h-6 group-hover:opacity-90' /></button>
                {links.map((link) => (
                <a
                className='text-gray-50 cursor-pointer text-3xl font-bold capitalize primary-font'
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