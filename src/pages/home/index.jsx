import React from 'react'
import Avatar from './assets/Avatar'
import Socials from './assets/Socials'
import Button from './assets/Button'
import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'

const Home = () => {
  const { user, setTitle } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Freelance'
    setTitle(`${location.title} - ${user.title} `)
  }, [location.pathname])


  const menu = useRef(null)

  return (
    <PageAnimator>
      <motion.main 
        className='bg-gray-100 flex w-screen flex-col md:h-[calc(screen-64px)] sm:h-[calc(screen-56px)]'>
      <motion.section 
        ref={menu}
        className='lg:fixed lg:z-10 lg:w-1/3 lg:left-0  h-screen md:h-[800px] sm:h-[800px]  flex items-center flex-col  justify-evenly'>
       <div className='flex p-1 flex-col justify-start items-center gap-3'>
        <Avatar />
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
      
      {/* footer */}
      <section className='sm:flex lg:grid grid-cols-3'>
      <div></div>
        <div className='lg:col-span-2 sm:w-full'>
              <Footer />
        </div>
      </section>
    </motion.main>
    </PageAnimator>
  )
}

export default Home