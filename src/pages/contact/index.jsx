import React from 'react'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'

const Contact = () => {
    const { user, setTitle } = useContext(DataContext)

      useEffect(() => {
        location.title = 'Info'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])

  return (
    <PageAnimator>
      <main className='min-h-screen bg-gray-100'>
        <section className='h-screen'>
          <div
            className='md:p-20 py-20 px-5 bg-zinc-300'>
            <h1 className='md:text-7xl text-5xl uppercase'>
            Contact
        </h1>
      </div>
      </section>
      <section>
        <Footer />
      </section>
      </main>
    </PageAnimator>
  )
}

export default Contact