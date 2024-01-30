import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
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
     className={styles.container}
    >
        <div 
        className={styles.linksContainer }   
        >
            <Link to='/' className={styles.link}>
                Home
            </Link>
        
            <Link to='/gallery' className={styles.link} >
                Gallery
            </Link>

            <Link to='/pricing' className={styles.link}>
                Pricing
            </Link>
            
            <Link to='/info' className={styles.link}>
                Info
            </Link>
        </div>

    </main>
  )
}

export default Navbar