import React from 'react'
import { motion } from 'framer-motion'

const PageAnimator = ({children}) => {
   
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
           transition:{
             duration: .3,
           }
       },
       leave:{
        opacity: 0,
        transition:{
          duration: .3,
        }
       }
    }
      const translate = {
       start: {
         y: '100vh',
       },
       enter: {
          y: 0,
           transition:{
             duration: .3,
           }
       },
       leave:{
        scale: 0.9,
        y: '-100vh',
        transition:{
          duration: .3,
        }
       }
    }

  return (
    <motion.main 
     {...anim(opacity)}
      className='bg-black'>
      <motion.div
        className='bg-gray-50'>
        { children }
      </motion.div>
    </motion.main>
  )
}

export default PageAnimator