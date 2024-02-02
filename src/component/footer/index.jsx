import React from 'react'
import Socials from '../assets/Socials'

const Footer = () => {
    const date = new Date()
  return (
    <footer
    className='h-auto min-h-[400px] w-full bg-gray-300 flex justify-center items-center p-2 flex-col space-y-5'>
        <h2 className='primary-font capitalize font-medium text-balance text-center'>
         all rights reserved  <br /> &copy;{date.getUTCFullYear()}</h2>
        <h1 className='uppercase font-semibold primary-font'>
        follow</h1>
        <Socials footerStyles={{position: 'relative', right: '0', border:'none', margin:'0'}}/>
    </footer>
  )
}

export default Footer