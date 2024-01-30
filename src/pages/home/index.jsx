import React from 'react'
import Logo from './assets/Logo'
import Avatar from './assets/Avatar'
import Socials from './assets/Socials'
import Button from './assets/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'

const Home = () => {

  const { pageTitle, setTitle, isDesktop } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Freelance'
    setTitle(`${location.title} - ${pageTitle} `)
  }, [location.pathname])


  const menu = useRef(null)

  return (
      <motion.main 
        style={{opacity: 0}}
        initial={{opacity: 0}}
        animate={{opacity: 1, }}
        transition={{duration: 1}}
        exit={{opacity: 0}}
        className='flex w-screen items-start  z-1 flex-col md:h-[calc(screen-56px)] sm:h-[calc(screen-64px)]'>
      <motion.section 
        ref={menu}
        className='lg:fixed lg:w-1/3 left-0 h-screen md:h-[800px] sm:h-[800px]  z-10  flex items-center flex-col  justify-evenly'>
        {isDesktop && <Logo/>}
       <div className='flex p-1 flex-col justify-start items-center gap-3 '>
        <Avatar />
        <h2 
        className='lg:text-[2vw]  text-2xl text-center text-gray-900'>
             Ronie Benitez
        </h2>
      
        <Button/>
        <Socials/>
       </div>
      </motion.section>

      <section className='relative grid lg:grid-cols-3 w-full lg:min-h-screen'>
        <div className='lg:col-span-1'></div>
      
        <div className='lg:col-span-2  bg-gray-200 relative lg:pt-10  min-h-[800px] '>
          <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2'>
            <h1 className='text-black text-xl text-balance p-6 '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolorem rerum dolorum ipsa deserunt et sapiente blanditiis expedita. Perspiciatis tenetur sunt eum incidunt voluptatum placeat dolorem doloremque ad consequuntur mollitia.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate dolore enim aut neque ducimus nostrum ut labore. Provident aliquid perspiciatis vel qui maiores ullam at atque repudiandae autem hic.
          </h1>
            <p className='text-gray-900 p-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores suscipit minus pariatur quibusdam nihil quidem asperiores voluptatibus adipisci aspernatur odit doloribus distinctio, sint, quis quisquam maxime ea debitis iste eaque?
            </p>
          </div>

      </div>
      </section>
    </motion.main>
    
  )
}

export default Home