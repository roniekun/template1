import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const links = [
        { name: 'work', to: '/work' },
        { name: 'about', to: '/about' },
        { name: 'contact', to: '/contact' }
    ];

    const handleClick = (link) => {
        navigate(link)
         navigate(link)
         setTimeout(() => {
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
         });
         }, 500);
    }

    return (
        <main className='bg-blend-difference capitalize text-zinc-900 text-sm gap-3 flex items-center  relative justify-center'>
            {links.map((link) => (
                <a
                className='cursor-pointer secondary-font relative flex flex-col group'
                key={link.name} 
                onClick={() => handleClick(link.to)}>
                    {link.name} 
              <span key={link} className={`absolute -bottom-0 h-[1px] w-full  bg-zinc-700 rounded-lg scale-x-0 origin-right transition duration-300 ease-out  group-hover:scale-x-100 group-hover:origin-left ${location.pathname===link.to ? 'scale-x-100': 'scale-x-0'}`}>
              </span>
                </a>
            ))}
        </main>
    );
};

export default Nav;
