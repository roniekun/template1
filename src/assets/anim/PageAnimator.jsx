import React from 'react'
import { motion } from 'framer-motion'
import Note from '../../component/header/assets/Note'
import Header from '../../component/header'

export default function PageAnimator({children}) {
   
    const anim = (variants) => {
      return {
        initial: 'start',
        animate: 'enter',
        exit: 'leave',
        variants
      }
    }

    const opacity = {
       start: {
         opacity: 0
       },
       enter: {
          opacity: 1,
       },
       leave:{
          opacity: 1
       }
    }
      const slide = {
       start: {
         top: '100vh',
       },
       enter: {
          top: "100vh",
       },
       leave:{
        top: "0",
        transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1]
        }
       }
      }
       const perspective = {
       start: {
         y:  0,
         scale: 1,
         opacity: 1
       },
       enter: {
        y:  0,
        scale: 1,
         opacity: 1
       },
       leave:{
            y: -100,
            scale: 0.9,
            opacity: .5,
            transition:{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
        }
       }
    }

    return (
        <motion.main 

        className='bg-black' >
            <motion.div  {...anim(slide)}
              className='fixed top-0 left-0 w-screen h-screen bg-gray-100 z-20'/>
              <motion.div {...anim(perspective)}>
                <section className='top-0 z-10 fixed'>
                      <Note />
                      <Header />
                  </section>
                  <motion.div {...anim(opacity)}>
                      { children }
                  </motion.div>
              </motion.div>
        </motion.main>
    )
}