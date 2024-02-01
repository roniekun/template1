import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Footer from '../component/footer'

const Notfound = () => {
  const { user, setTitle } = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
        location.title = "URL | Error 404"
        setTitle(`${location.title}`)
  }, [location.pathname])
  
  return (
    <main className='relative h-full w-screen flex justify-center items-center '>
        <h1 className=' relative text-black lg:text-4xl font-bold text-center text-balance sm:text-2xl'> 
            The page you're looking for can't be found. <br />
            Please check the URL.</h1>
        <section>
          <Footer />
        </section>
    </main>
  )
}

export default Notfound