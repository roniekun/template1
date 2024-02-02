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
    <nav
     ref={menus}
     className='shadow-lg  z-50 fixed top-0 w-4/5 self-end h-full flex bg-gray-50 transfom translate-x-full'>
        <div 
          className='flex flex-col w-full  justify-start items-center text-xl h-full my-24'>
            
            <button
            onClick={()=>setToggleMenu(false)}
            className='w-5 group absolute top-5 left-5 cursor-pointer'>
            <IoCloseSharp className='fill-gray-900 w-10 h-10 group-hover:opacity-90'/></button>

                {links.map((link, index) => (
                <div className='flex flex-col w-full items-center justify-center relative px-6 p h-24 gap-5 group'>
                    
                    <a
                    className='text-yellow-400 relative  w-full  cursor-pointer  text-4xl font-black capitalize title-font tracking-wide flex justify-between'
                    key={link.name} 
                    onClick={() => handleClick(link.to)}>
                     <h3 className='text-sm font-normal self-center text-gray-700'>{index + 1}</h3> 
                     {link.name} 
                    </a>
                        <span class="h-[1px] -z-10 w-full absolute bottom-0 bg-gray-200 transition-all duration-300 origin-bottom group-hover:h-full"></span>
                          <span className='w-full h-[1px] bg-gray-700 absolute bottom-0'>  </span>
                 </div>
            ))}

        </div>

    </nav>
  )
}

export default Navbar