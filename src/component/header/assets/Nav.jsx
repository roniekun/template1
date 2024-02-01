import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const links = [
        { name: 'gallery', to: '/gallery' },
        { name: 'pricing', to: '/pricing' },
        { name: 'info', to: '/info' }
    ];

    return (
        <main className='flex uppercase text-sm text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3'>
            {links.map((link) => (
                <Link key={link.name} to={link.to}>
                    {link.name} 
                </Link>
            ))}
        </main>
    );
};

export default Nav;
