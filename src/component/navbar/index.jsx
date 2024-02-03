import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'
import { IoCloseSharp } from "react-icons/io5";
import { Timeline } from 'gsap/gsap-core'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu} = useContext(DataContext)
    const menu = useRef(null)
    const linkItems= useRef(null)
    const navigate = useNavigate()

    const links = [
        { name: 'gallery', to: '/gallery' },
        { name: 'pricing', to: '/pricing' },
        { name: 'info', to: '/info' }
    ];

    useEffect(() => {
        gsap.registerPlugin(Timeline)
        const tl = gsap.timeline()
    
        if (isToggleMenu) {

        tl.to(menu.current, {
             duration: .7,
            height: '100vh',
            ease: 'power1.in',
             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }, 
             tl.to(linkItems.current, {
            opacity:1,
            ease: 'power2.in',
            scale: 1
             },'+=.4',),
        )
        }
        else {
        tl.to(linkItems.current, {
                        scale: 1.1,
                        duration: 1,
                         ease: 'power2.in',
                         transformOrigin: '-5% -5%',
        },'-=.3')

        tl.to(menu.current, {
            ease: 'power2.inOut',
            height:'0',
            clipPath:'polygon(0 0, 100% 0, 100% 49%, 0 16%)',
           onComplete: () =>{
                 linkItems.current.style.opacity = 0;
            }
        },'-=.3')
             tl.to(linkItems.current, {
            scale: 1,
             })
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
     ref={menu}
     className='fixed w-screen flex bg-[#0a0a0a] h-0 overflow-hidden z-10'>
        <div 
            ref={linkItems}
          className='flex flex-col w-full mx-[10vw] mt-[50vw]  justify-start items-start text-xl h-auto gap-7 opacity-0'>
            
            {/* <button
            onClick={()=>setToggleMenu(false)}
            className='w-5 group absolute top-5 left-5 cursor-pointer'>
            <IoCloseSharp className='fill-gray-900 w-10 h-10 group-hover:opacity-90'/></button> */}

                {links.map((link, index) => (
                <div className='flex w-fit justify-center relative items-center gap-5 group'>
                    <a
                    className='text-gray-300 z-10 relative bg-transparent cursor-pointer text-[7vh] font-md capitalize title-font flex text-balance h-[5vh] w-fit select-none'
                    key={link.name} 
                    onClick={() => handleClick(link.to)}>
                     {link.name} 
                                    <span className="absolute -bottom-1 h-[3px] w-full  bg-gray-300 rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                    </a>
                 </div>
            ))}

        </div>

    </nav>
  )
}

export default Navbar