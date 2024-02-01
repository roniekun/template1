import React from 'react'
import Avatar from './assets/Avatar'
import Logo from './assets/Logo'
import Socials from './assets/Socials'
import Button from './assets/Button'
import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'

const Home = () => {

  const { user, setTitle, isDesktop } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Freelance'
    setTitle(`${location.title} - ${user.title} `)
  }, [location.pathname])


  const menu = useRef(null)

  return (
      <motion.main 
        style={{opacity: 0}}
        initial={{opacity: 0}}
        animate={{opacity: 1, }}
        transition={{duration: 1}}
        exit={{opacity: 0}}
        className='flex w-screen z-1 flex-col md:h-[calc(screen-64px)] sm:h-[calc(screen-56px)]'>
      <motion.section 
        ref={menu}
        className='lg:fixed lg:w-1/3 lg:left-0 h-screen md:h-[800px] sm:h-[800px]  z-10  flex items-center flex-col  justify-evenly'>
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
          </div>

      </div>
      </section>
      <section className='sm:flex lg:grid grid-cols-3'>
      <div></div>
        <div className='col-span-2'>
              <Footer />
        </div>
      </section>
    </motion.main>
    
  )
}

export default Home