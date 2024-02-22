import React from 'react'
import SendGmail from '../../assets/SendGmail'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Footer = () => {
    const { user } = useContext(DataContext)
    const date = new Date()

    const handleClick = (user) =>{
            SendGmail(user)
    }

  return (
  <footer className='h-auto relative min-h-[300px] w-full  grid lg:grid-cols-2 p-[3vw] bg-stone-200'>
    <div className='absolute h-[1px] w-11/12 bg-zinc-700 top-0 left-1/2 transform -translate-x-1/2' />
        <section className='relative col-span-1 w-full h-full'>
            <h1 className='text-left text-xl  lg:leading-10 md:leading-9 leading-8'>Interested in working together? <br />
                Get in touch at <a className='text-blue-700 cursor-pointer hover:opacity-85'
                onClick={()=>handleClick(user)}>info@yourownstudio.co</a> or book an intro call.</h1>
        </section>

    <section className='relative flex flex-col lg:place-items-center'>
    <div className='text-left uppercase self-end'>
        <h2 className='primary-font font-medium md:text-lg'>
            all rights reserved  <br /> &copy;{date.getUTCFullYear()}
        </h2>
        {/* <h4>created by <a href="http://roniecode.vercel.app" target='_blank'>
         Ronie</a>
        </h4> */}
    </div>
    </section>
</footer>

  )
}

export default Footer