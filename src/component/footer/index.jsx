import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
  <footer className='h-auto relative min-h-[400px] w-full  grid lg:grid-cols-2 p-2 bg-stone-200'>
    <div className='absolute h-[1px] w-11/12 bg-zinc-700 top-0 left-1/2 transform -translate-x-1/2' />
        <section className='relative col-span-1 w-full h-full'>
            <h1 className='text-left text-xl p-[2vw] '>Interested in working together?
                Get in touch at info@presentstudio.co
                or book an intro call.</h1>
        </section>

    <section className='relative flex flex-col lg:place-items-center p-[2vw]'>
    <div className='text-left'>
        <h2 className='primary-font capitalize font-medium'>
            all rights reserved  <br /> &copy;{date.getUTCFullYear()}
        </h2>
        <h1 className='uppercase'>
            follow
        </h1>
    </div>
    </section>
</footer>

  )
}

export default Footer