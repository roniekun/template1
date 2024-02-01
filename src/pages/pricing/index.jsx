import React from 'react'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'

const Pricing = () => {
  const { user, setTitle } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Pricing'
    setTitle(`${location.title} - ${user.title}`)
  }, [location.pathname])

  return (
    <main className='min-h-screen'>
    <div className='h-screen'></div>
    <section className='relative'>
            <Footer />
    </section>
    </main>
  )
}

export default Pricing