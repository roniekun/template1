import React from 'react'
import Socials from '../assets/Socials'

const Footer = () => {
    const date = new Date()
  return (
    <footer
    className='h-[400px] w-full bg-gray-300 flex justify-center items-center p-2 flex-col'>
        <h2 className='capitalize'>
            all right reserved {date.getUTCFullYear()}.</h2>
        <h1 className='uppercase'>follow</h1>
        <Socials footerStyles={{position: 'relative', right: '0', border:'none'}}/>
    </footer>
  )
}

export default Footer