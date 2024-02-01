import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()
    const links = [
        { name: 'gallery', to: '/gallery' },
        { name: 'pricing', to: '/pricing' },
        { name: 'info', to: '/info' }
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
        <main className='uppercase text-xs text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3 flex items-center justify-center'>
            {links.map((link) => (
                <a
                className='border p-1 px-2 rounded-md border-gray-900 cursor-pointer'
                key={link.name} 
                onClick={() => handleClick(link.to)}>
                    {link.name} 
                </a>
            ))}
        </main>
    );
};

export default Nav;
